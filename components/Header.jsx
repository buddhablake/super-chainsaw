function Header(props) {
  const { filterSnippets } = props;
  return (
    <nav className="nav-bar">
      <h2>SnipSnap</h2>
      <form>
        <input type="text" placeholder="Search" onChange={filterSnippets} />
      </form>
      <button type="button">add snippet</button>
    </nav>
  );
}
