class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snippets: [],
      title: null,
      author: null,
      snippet: null,
      description: null,
      searchResults: null,
      filterValues: [],
      noMatch: false,
    };
  }

  componentDidMount = async () => {
    const response = await axios.get("/snippets");
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
    const response = await axios.post("/snippets", {
      title,
      author,
      snippet,
      description,
    });
    console.log("Before setState", this.state);
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

  filterSnippets = (e) => {
    const userQuery = e.target.value;

    this.setState({
      filterValues: [],
      searchResults: [],
    });

    this.state.snippets.filter((snippet) => {
      if (
        snippet.title.includes(userQuery) ||
        snippet.description.includes(userQuery)
      ) {
        console.log("helpppppp");
        this.state.filterValues.push(snippet);
      }
    });

    this.setState({
      searchResults: this.state.filterValues,
    });

    if (userQuery === "") {
      this.setState({
        searchResults: null,
      });
    }
  };

  render = () => {
    const { snippets, searchResults } = this.state;
    console.log("rendering the App");
    return (
      <div>
        <Header filterSnippets={this.filterSnippets} />
        <NewSnippet
          changeTitle={this.changeTitle}
          changeAuthor={this.changeAuthor}
          changeDescription={this.changeDescription}
          changeSnippet={this.changeSnippet}
          onCreate={this.createSnippet}
        />
        <div className="container grid">
          {/*HANDLES THE RENDERING OF ALL SNIPPETS AND/OR FILTERED SNIPPETS*/}

          {searchResults ? (
            <div>
              {searchResults.map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  snippets={snippets}
                  deleteSnippet={this.deleteSnippet}
                />
              ))}{" "}
            </div>
          ) : (
            <div>
              <h1>HEY</h1>
              {snippets.map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  snippets={snippets}
                  deleteSnippet={this.deleteSnippet}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector("main"));
