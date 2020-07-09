\c postgres;
DROP TABLE IF EXISTS snippets;
DROP DATABASE IF EXISTS snipsnap;
CREATE DATABASE snipsnap;
\c snipsnap;
CREATE TABLE snippets (
  id SERIAL,
  title TEXT,
  author TEXT,
  snippet TEXT,
  description TEXT
);
INSERT INTO snippets (title, author, snippet, description)
VALUES (
    'HTML w/ React CDNs',
    'T. Clay',
    '<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./css/App.css">
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script type="text/babel" src="App.jsx"></script>
</head>

<body>
  <main></main>
</body>

</html>',
    'This snippet gives you HTML boilerplate with React CDNs already in place. Edit the last script tag to match where your main app component lives. Note, the type MUST be "text/babel".'
  ),
  (
    'React App component',
    'S. Banks',
    'function App() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector(''main''))',
    'Basic app component for React. This one is best used as the main render for ReactDOM. Put your component tags inside div tag.'
  );
  SELECT * FROM snippets;