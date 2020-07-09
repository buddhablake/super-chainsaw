class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snippets: null,
      title: null,
      author: null,
      snippet: null,
      description: null
    };
  }

  componentDidMount = async () => {
    const response = await axios.get('/snippets');
    console.log(response);
    this.setState((state) => {
      state.snippets = response.data;
      return state;
    });
  };

  changeTitle = (e) => {
    const { value } = e.target;
    this.setState((state) => {
      state.title = value;
      return state;
    });
  };

  changeAuthor = (e) => {
    const { value } = e.target;
    this.setState((state) => {
      state.author = value;
      return state;
    });
  };

  changeDescription = (e) => {
    const { value } = e.target;
    this.setState((state) => {
      state.description = value;
      return state;
    });
  };

  changeSnippet = (e) => {
    const { value } = e.target;
    this.setState((state) => {
      state.snippet = value;
      return state;
    });
  };

  createSnippet = async (e) => {
    await e.preventDefault();
    const { title, author, snippet, description } = this.state;
    const { snippets } = this.state;
    const response = await axios.post('/snippets', {
      title,
      author,
      snippet,
      description
    });
    console.log('Before setState', this.state);
    this.setState({ snippets: response.data }, () => {
      this.componentDidMount();
    });
  };

  deleteSnippet = async (e) => {
    const response = await axios.delete(`/snippets/${e.target.value}`);
    this.setState((state) => {
      state.snippets = response.data;
      return state;
    });
  };

  render = () => {
    console.log('rendering the App');
    return (
      <div>
        <Header />
        <NewSnippet
          changeTitle={this.changeTitle}
          changeAuthor={this.changeAuthor}
          changeDescription={this.changeDescription}
          changeSnippet={this.changeSnippet}
          onCreate={this.createSnippet}
        />
        {snippets ? (
          <SnippetCard snippets={snippets} deleteSnippet={this.deleteSnippet} />
        ) : null}
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('main'));
