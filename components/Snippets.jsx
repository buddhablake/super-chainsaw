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

  // shouldComponentUpdate = (nextProps) => {
  //   if (nextProps.snippets.length !== this.snippets.length) {
  //     console.log('nextProps:', nextProps);
  //     console.log('old props', this.snippets);
  //     return true;
  //   }
  //   return false;
  // };

  // Because of how browser renders code in pre tags, we likely don't need this function
  formatCode = (snippet) => {
    const formattedSnippet = snippet
      .replace(/\n/g, '<br>')
      .replace(/</g, '&lt;')
      .replace(/>/g, '	&gt;')
      .replace(/\s+/g, ' ')
      .replace(/&lt;br &gt;/g, '<br>');
    console.log(formattedSnippet);
    return formattedSnippet;
  };

  render = () => {
    console.log('rendering!');
    const { snippet } = this.props;
    return (
      <div>
        <div>
          <h4>{snippet.title}</h4>
          <h5>{snippet.author}</h5>
        </div>
        <p>{snippet.description}</p>
        <pre className="prettyprint">{snippet.snippet}</pre>
      </div>
    );
  };
}
