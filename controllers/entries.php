<?php

include_once __DIR__ . '/../models/entry.php';
header('Content-Type: application/json');
if ($_REQUEST['action'] === 'index') {
  echo json_encode(Entries::all());
} else if ($_REQUEST['action'] === 'post') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_entry = new Entry(null, $body_object->title, $body_object->date, $body_object->note);
  $all_entries = Entries::create($new_entry);
  echo json_encode($all_entries);
} else if ($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_entry = new Entry($_REQUEST['id'], $body_object->title, $body_object->date, $body_object->note);
  $all_entries = Entries::update($updated_entry);
  echo json_encode($all_entries);
  } else if ($_REQUEST['action'] === 'delete') {
    $all_entries = Entries::delete($_REQUEST['id']);
    echo json_encode($all_entries);
  }

 ?>
