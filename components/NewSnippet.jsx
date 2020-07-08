class NewSnippet extends Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.props.changeTitle;
    this.changeAuthor = this.props.changeAuthor;
    this.changeDescription = this.props.changeDescription;
    this.changeSnippet = this.props.changeSnippet;
  }

  render() {
    return (
      <div>
        <form>
          <input onKeyUp={this.handleTitle} type="text" placeholder="Title" />
          <input onKeyUp={this.handleAuthor} type="text" placeholder="Author" />
          <textarea
            onChange={this.handleDescription}
            name="new-description"
            id="new-description"
            cols="30"
            rows="10"
            placeholder="What does the snippet do?"
          />
          <textarea name="" id="" cols="30" rows="10" />
        </form>
      </div>
    );
  }
}
