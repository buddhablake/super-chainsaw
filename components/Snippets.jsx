class SnippetCard extends React.Component {
  constructor(props) {
    super(props);
    // this.snippet = this.props.snippet;
    // this.snippets = this.props.snippets;
    // this.deleteSnippet = this.props.deleteSnippet;
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

    return formattedSnippet;
  };

  render = () => {
    console.log('rendering!');
    const { snippet, snippets, deleteSnippet } = this.props;
    return (
      <div>
        <div>
          <h4>{snippet.title}</h4>
          <h5>{snippet.author}</h5>
        </div>
        <p>{snippet.description}</p>

        <pre className="prettyprint">
          {snippet.snippet[0] === '<'
            ? prettier.format(snippet.snippet, {
                parser: 'html',
                plugins: prettierPlugins
              })
            : prettier.format(snippet.snippet, {
                parser: 'babel',
                plugins: prettierPlugins
              })}
        </pre>

        <div className="" edit-delete-btns>
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
