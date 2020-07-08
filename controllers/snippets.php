<?php
include_once __DIR__ . '/../models/snippets.php';
header('Content-Type: application/json');

if($_REQUEST['action'] === 'index'){
  echo json_encode(Snippets::all());
} elseif($_REQUEST['action'] === 'post'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_snippet = new Snippet(null, $body_object->title, $body_object->author, $body_object->description, $body_object->snippet);
  $all_snippets = Snippets::create($new_snippet);
  echo json_encode($all_snippets);
} elseif($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_snippet = new Snippet($_REQUEST['id'], $body_object->title, $body_object->author, $body_object->description, $body_object->snippet);
  $all_snippets = Snippets::update($updated_snippet);
  echo json_encode($all_snippets);
} elseif($_REQUEST['action'] === 'delete'){
  $all_snippets = Snippets::delete($_REQUEST['id']);
  echo json_encode($all_snippets);
}
 ?>
