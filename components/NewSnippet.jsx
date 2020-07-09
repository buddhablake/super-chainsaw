class NewSnippet extends React.Component {
  constructor(props) {
    super(props);
    const {
      changeTitle,
      changeAuthor,
      changeDescription,
      changeSnippet,
      onCreate,
    } = this.props;
    this.handleTitle = changeTitle;
    this.handleAuthor = changeAuthor;
    this.handleDescription = changeDescription;
    this.handleSnippet = changeSnippet;
    this.handleCreateSnippet = onCreate;
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

  handleCreateSnippet = (e) => {
    this.createSnippet(e);
  };

  render() {
    return (
      <div className="add-form">
        <div className="close-form" onClick={this.props.toggleCreateForm}>
          X
        </div>
        <form onSubmit={this.handleCreateSnippet}>
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
