class SnippetCard extends React.Component {
  constructor(props) {
    super(props);
    this.snippets = this.props.snippets;
  }

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
            <p>{snippet.snippet}</p>
          </div>
        ))}
      </div>
    );
  };
}
