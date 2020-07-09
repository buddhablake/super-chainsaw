/* eslint-disable prettier/prettier */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snippets: null,
      title: null,
      author: null,
      snippet: null,
      description: null,
      shouldUpdate: false
    };
  }

  
  componentDidMount = async () => {
    const response = await axios.get('/snippets');
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
    this.setState((state) => {
      state.snippets = response.data
      return state
    });
  };

  updateSnippet = async (e) => {
    const thisSnippet = e.target.getAttribute('id')
    await e.preventDefault()
    const { title, author, snippet, description } = this.state;
    const response = await axios.put(`/snippets/${thisSnippet}`, 
    { title, author, snippet, description })
    this.setState((state) => {
      state.snippets = response.data;
      return state;
    });
  }

  deleteSnippet = async (e) => {
    const response = await axios.delete(`/snippets/${e.target.value}`);
    this.setState((state) => {
      state.snippets = response.data;
      return state;
    });
  };

  render = () => {
    const { snippets, shouldUpdate} = this.state;
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
        <div className="container grid">
          {snippets
            ? snippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                snippet={snippet}
                deleteSnippet={this.deleteSnippet}
                shouldUpdate={shouldUpdate}
                updateSnippet={this.updateSnippet}
                changeTitle={this.changeTitle}
                changeAuthor={this.changeAuthor}
                changeDescription={this.changeDescription}
                changeSnippet={this.changeSnippet}
              />
              
              ))
            : null}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('main'));
