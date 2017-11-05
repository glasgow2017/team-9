<?php 

require_once 'DB.php';


$checktable = "SHOW TABLES LIKE 'people';";
$query = $conn->query($checktable);
if( $query->num_rows == 0){
  $sql = 'CREATE TABLE people(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    	name VARCHAR(150),
        gender VARCHAR(100),
        position VARCHAR(200),
           email VARCHAR(100),
           password VARCHAR(100),
           comments TEXT,
           responder INT(1));';
    if($conn->query($sql) !== TRUE)
      $error_create = $conn -> error;
}

$checktable = "SHOW TABLES LIKE 'messages';";
$query = $conn->query($checktable);
if( $query->num_rows == 0){
  $sql = 'CREATE TABLE messages(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id  INT  NOT NULL,
  reciver_id INT  NOT NULL,
  message    TEXT NULL,
  FOREIGN KEY (sender_id) REFERENCES people (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY (reciver_id) REFERENCES people (id)
    ON UPDATE CASCADE       
    ON DELETE CASCADE
    );';
    if($conn->query($sql) !== TRUE){
      $error_create = $conn -> error;
    echo $error_create;
    }
}
 
 

