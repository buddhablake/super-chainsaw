class SnippetCard extends React.Component {
  constructor(props) {
    super(props);
    this.snippet = this.props.snippet;
    this.snippets = this.props.snippets;
    this.deleteSnippet = this.props.deleteSnippet;
  }

  componentDidMount = () => {
    PR.prettyPrint();
  };

  formatCode = (snippet) => {
    const formattedSnippet = snippet
      .replace(/\n/g, '<br>')
      .replace(/</g, '&lt;')
      .replace(/>/g, '	&gt;')
      .replace(/\s+/g, ' ')
      .replace(/&lt;br &gt;/g, '<br>');
    return snippet;
  };

  render = () => {
    const { snippets, deleteSnippet, snippet } = this;
    return (
      <div key={snippet.id} className="snippet">
        <div>
          <h4>{snippet.title}</h4>
          <h5>{snippet.author}</h5>
        </div>
        <p>{snippet.description}</p>
        <pre className="prettyprint">{this.formatCode(snippet.snippet)}</pre>
        <div>
          {/* Change to font awesome icons */}
          <button value={snippet.id}>Edit</button>
          <button value={snippet.id} onClick={deleteSnippet}>
            Delete
          </button>
        </div>
      </div>
    );
  };
}
