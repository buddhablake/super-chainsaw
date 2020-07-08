class NewSnippet extends React.Component {
  constructor(props) {
    super(props);
    const {
      changeTitle,
      changeAuthor,
      changeDescription,
      changeSnippet,
      createSnippet
    } = this.props;
    this.changeTitle = changeTitle;
    this.changeAuthor = changeAuthor;
    this.changeDescription = changeDescription;
    this.changeSnippet = changeSnippet;
    this.createSnippet = createSnippet;
  }

  handleTitle = (e) => {
    this.changeTitle(e);
  };

  handleAuthor = (e) => {
    this.changeAuthor(e);
  };

  handleDescription = (e) => {
    this.changeDescription(e);
  };

  handleSnippet = (e) => {
    this.changeSnippet(e);
  };

  handleCreate = (e) => {
    e.preventDefault();
    this.createSnippet();
  };

  render() {
    return (
      <div className="add-form">
        <form onSubmit={this.handleCreate}>
          <input onKeyUp={this.handleTitle} type="text" placeholder="Title" />
          <input onKeyUp={this.handleAuthor} type="text" placeholder="Author" />
          <textarea
            onChange={this.handleDescription}
            name="new-description"
            id="new-description"
            cols="50"
            rows="10"
            placeholder="What does the snippet do?"
          />
          <textarea
            onChange={this.handleSnippet}
            name="new-snippet"
            id="new-snippet"
            cols="50"
            rows="10"
            placeholder="Insert your snippet here!"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
