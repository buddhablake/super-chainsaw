function Header(props) {
  const { filterSnippets, toggleCreateForm } = props;
  return (
    <nav className="nav-bar">
      <h2>SnipSnap</h2>
      <form>
        <input type="text" placeholder="Search" onChange={filterSnippets} />
      </form>
      <button type="button" onClick={toggleCreateForm}>
        add snippet
      </button>
    </nav>
  );
}
