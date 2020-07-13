<?php
$dbconn = null;
if(getenv('DATABASE_URL')){
$connectionConfig = parse_url(getenv('DATABASE_URL'));
$host = $connectionConfig['host'];
$user = $connectionConfig['user'];
$password = $connectionConfig['pass'];
$port = $connectionConfig['port'];
$dbname = trim($connectionConfig['path'],'/');
$dbconn = pg_connect(
"host=".$host." ".
"user=".$user." ".
"password=".$password." ".
"port=".$port." ".
"dbname=".$dbname
);
} else {
$dbconn = pg_connect("host=localhost dbname=phpapi");
}


$dbconn = pg_connect("host=localhost dbname=guestbook");

class Entry {
  public $id;
  public $title;
  public $date;
  public $note;

  public function __construct($id, $title, $date, $note){
    $this->id = $id;
    $this->title = $title;
    $this->date = $date;
    $this->note = $note;
  }
}

class Entries {
  static function all(){
    $entries = array();

    $results = pg_query("SELECT * FROM entries");

    $row_object = pg_fetch_object($results);
    while($row_object){
      $new_entry = new Entry(
        intval($row_object->id),
        $row_object->title,
        $row_object->date,
        $row_object->note
      );
      $entries[] = $new_entry;
      $row_object = pg_fetch_object($results);
    }
    return $entries;
  }

  static function create($entry){
    $query = "INSERT INTO entries (title, date, note) VALUES ($1, $2, $3)";
    $query_params = array($entry->title, $entry->date, $entry->note);
    pg_query_params($query, $query_params);
    return self::all();
  }

  static function update($updated_entry){
      $query = "UPDATE entries SET title = $1, date = $2, note = $3 WHERE id = $4";
      $query_params = array($updated_entry->title, $updated_entry->date, $updated_entry->note, $updated_entry->id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
    static function delete($id){
      $query = "DELETE FROM entries WHERE id = $1";
      $query_params = array($id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
}

 ?>
