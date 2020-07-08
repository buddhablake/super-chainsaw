class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snippets: [],
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

  createSnippet = async () => {
    const { title, author, snippet, description } = this.state;
    const response = await axios.post('/snippets', {
      title,
      author,
      snippet,
      description
    });
    this.setState((state) => {
      state.snippets = response.data;
      return state;
    });
  };

  render = () => {
    const { snippets } = this.state;
    return (
      <div>
        <Header />
        <NewSnippet
          dataChanges={
            (this.changeTitle,
            this.changeAuthor,
            this.changeDescription,
            this.changeSnippet)
          }
        />
        {snippets.length > 0 ? <SnippetCard snippets={snippets} /> : null}
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('main'));
