class EditSnippet extends React.Component {
  constructor(props) {
    super(props);
    const {
      snippet,
      changeTitle,
      changeAuthor,
      changeDescription,
      changeSnippet,
      onUpdate,
    } = this.props;
    this.handleTitle = changeTitle;
    this.handleAuthor = changeAuthor;
    this.handleDescription = changeDescription;
    this.handleSnippet = changeSnippet;
    this.handleUpdate = onUpdate;
    this.snippet = snippet;
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

  handleUpdate = (e) => {
    this.onUpdate(e);
  };

  render() {
    return (
      <div className="update-form">
        <div className="close-form" onClick={this.props.toggleEditForm}>
          X
        </div>
        <form id={this.snippet.id} onSubmit={this.handleUpdate}>
          <input onKeyUp={this.handleTitle} type="text" placeholder="Title" />
          <input onKeyUp={this.handleAuthor} type="text" placeholder="Author" />
          <textarea
            onChange={this.handleDescription}
            name="update-description"
            id="update-description"
            cols="50"
            rows="10"
            placeholder="What does the snippet do?"
          />
          <textarea
            onChange={this.handleSnippet}
            name="update-snippet"
            id="update-snippet"
            cols="50"
            rows="10"
            placeholder="Insert your snippet here!"
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}
