<?php
$dbconn = pg_connect("host=localhost dbname=snipsnap");



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


class Snippets {
  static functions all(){
    $snippets = [];

    $results = pg_query("SELECT * FROM snippets");

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
}
 ?>
