/* eslint-disable prettier/prettier */
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

      showCreateForm: false,

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

  toggleCreateForm = () => {
    console.log("hey");
    this.setState({
      showCreateForm: !this.state.showCreateForm,
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
    this.setState({ snippets: response.data, showCreateForm: false });
  };

  updateSnippet = async (e) => {

    const thisSnippet = e.target.getAttribute('id')
    await e.preventDefault()
    const findCode = `code-snippet-${thisSnippet}`;
    const { title, author, snippet, description } = this.state;
    const response = await axios.put(`/snippets/${thisSnippet}`, 
    { title, author, snippet, description })
    this.setState( {snippets: response.data }, () => {
      const element = document.getElementById(findCode)
      element.innerHTML = PR.prettyPrintOne(element.innerHTML)
    }
    );
  }


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
        <Header
          filterSnippets={this.filterSnippets}
          toggleCreateForm={this.toggleCreateForm}
        />
        {this.state.showCreateForm ? (
          <NewSnippet
            changeTitle={this.changeTitle}
            changeAuthor={this.changeAuthor}
            changeDescription={this.changeDescription}
            changeSnippet={this.changeSnippet}
            onCreate={this.createSnippet}
            toggleCreateForm={this.toggleCreateForm}
          />
        ) : null}

        <div className="container grid">
          {/* HANDLES THE RENDERING OF ALL SNIPPETS AND/OR FILTERED SNIPPETS*/}

          {searchResults ? (
            <div>
              {searchResults.map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  deleteSnippet={this.deleteSnippet}
                  updateSnippet={this.updateSnippet}
                  changeTitle={this.changeTitle}
                  changeAuthor={this.changeAuthor}
                  changeDescription={this.changeDescription}
                  changeSnippet={this.changeSnippet}
                />
              ))}{" "}
            </div>
          ) : (
            <div>
              {snippets.map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  deleteSnippet={this.deleteSnippet}
                  updateSnippet={this.updateSnippet}
                  changeTitle={this.changeTitle}
                  changeAuthor={this.changeAuthor}
                  changeDescription={this.changeDescription}
                  changeSnippet={this.changeSnippet}
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
