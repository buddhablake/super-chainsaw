class SnippetCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldUpdate: false,
      showEditForm: false,
    };

  }
  componentDidMount = () => {
    PR.prettyPrint();
  };


  toggleEditForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm,
    });
  };

  formatCode = (snippet) => {
    const formattedSnippet = snippet
      .replace(/\n/g, "<br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "	&gt;")
      .replace(/\s+/g, " ")
      .replace(/&lt;br &gt;/g, "<br>");

    return formattedSnippet;
  };

  checkCodeSnippets = (snippet) => {

    if (snippet === null || snippet === undefined) {
      const snippet = {
        title: "Null",
        author: "Nully Nullerson",
        snippet: "const whoops = 'Got null here'",
        description: "Missing some data somewhere...",
      };
      return snippet;
    }
    if (snippet[0] === "<") {
      snippet = prettier.format(snippet, {
        parser: "html",
        plugins: prettierPlugins,
      });
    } else {
      snippet = prettier.format(snippet, {
        parser: "babel",
        plugins: prettierPlugins,
      });
    }
    return snippet;
  };

  render = () => {
    console.log("rendering the Snippets!");
    const { snippets, deleteSnippet, updateSnippet } = this.props;

    const { shouldUpdate, showEditForm } = this.state;
    const { toggleEditForm } = this;

    const { snippet } = this.props;
    snippet.snippet = this.checkCodeSnippets(snippet.snippet);
    return (
      <div>
        <div>
          <h4>{snippet.title}</h4>
          <h5>{snippet.author}</h5>
        </div>
        <p>{snippet.description}</p>

        <pre id={`code-snippet-${snippet.id}`} className="prettyprint">
          {snippet.snippet}
        </pre>

        <div className="edit-delete-btns">
          {/* Change to font awesome icons */}
          <button
            type="button"
            value={snippet.id}
            onClick={this.toggleEditForm}
          >
            Edit
          </button>
          <button type="button" value={snippet.id} onClick={deleteSnippet}>
            Delete
          </button>

          {showEditForm ? (
            <EditSnippet
              shouldUpdate={shouldUpdate}
              snippet={snippet}
              changeTitle={this.props.changeTitle}
              changeAuthor={this.props.changeAuthor}
              changeDescription={this.props.changeDescription}
              changeSnippet={this.props.changeSnippet}
              onUpdate={this.props.updateSnippet}
              toggleEditForm={toggleEditForm}
            />
          ) : null}

        </div>
      </div>
    );
  };
}
