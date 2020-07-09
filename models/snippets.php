<?php
$dbconn = pg_connect("host=localhost dbname=snipsnap");

//==============
//SNIPPET CLASS
//==============

class Snippet {
  public $id;
  public $title;
  public $author;
  public $description;
  public $snippet;

  public function __construct($id, $title, $author, $description, $snippet){
    $this->id = $id;
    $this->title = $title;
    $this->author = $author;
    $this->description = $description;
    $this->snippet = $snippet;

  }
}

//=================
//SNIPPET FACTORY
//=================


class Snippets {


  //RETURNS ALL SNIPPETS

  static function all(){
    $snippets = [];

    $results = pg_query("SELECT * FROM snippets ORDER BY id ASC");

    $row_object = pg_fetch_object($results);
    while($row_object){
      $new_snippet = new Snippet(
          $row_object->id,
          $row_object->title,
          $row_object->author,
          $row_object->description,
          $row_object->snippet
      );
      $snippets[] = $new_snippet;
      $row_object = pg_fetch_object($results);
    }
    return $snippets;
  }

  //CREATES NEW SNIPPET
  static function create($snippet){
    $query = "INSERT INTO snippets (title, author, description, snippet) VALUES ($1, $2, $3, $4)";

    $query_params = [$snippet->title, $snippet->author, $snippet->description, $snippet->snippet];

    pg_query_params($query, $query_params);

    return self::all();
  }

  //UPDATES A SNIPPET
  static function update($updated_snippet){
    $query = "UPDATE snippets SET title = $1, author = $2, description = $3, snippet = $4 WHERE id = $5";

    $query_params = [$updated_snippet->title, $updated_snippet->author, $updated_snippet->description, $updated_snippet->snippet, $updated_snippet->id];

    pg_query_params($query, $query_params);

    return self::all();
  }

  //DELETE A SNIPPET
  static function delete($id){
    $query = "DELETE FROM snippets WHERE id = $1";

    $query_params = [$id];

    pg_query_params($query, $query_params);

    return self::all();
  }
}
