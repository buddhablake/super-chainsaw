class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snippets: []
    };
  }

  componentDidMount = async () => {
    const response = await axios.get('/snippets');
    console.log(response);
    this.setState((state) => {
      state.snippets = response.data;
      return state;
    });
  };

  render = () => {
    return (
      <div>
        <Header />
        <SnippetCard />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('main'));
