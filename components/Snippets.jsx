class SnippetCard extends React.Component {
  constructor(props) {
    super(props);
    this.snippets = this.props.snippets;
  }

  formatCode = (snippet) => {
    const formattedSnippet = snippet
      .replace(/\n/g, "<br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "	&gt;")
      .replace(/\s+/g, " ")
      .replace(/&lt;br &gt;/g, "<br>");
    return snippet;
  };

  render = () => {
    const { snippets } = this;
    return (
      <div className="container grid">
        {snippets.map((snippet) => (
          <div key={snippet.id}>
            <div>
              <h4>{snippet.title}</h4>
              <h5>{snippet.author}</h5>
            </div>
            <p>{snippet.description}</p>
            <pre className="prettyprint">
              {this.formatCode(snippet.snippet)}
            </pre>
          </div>
        ))}
      </div>
    );
  };
}
