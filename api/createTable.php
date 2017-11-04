<?php 

require_once 'DB.php';


$checktable = "SHOW TABLES LIKE 'people';";
$query = $conn->query($checktable); 
if( $query->num_rows > 0){
  $sql = 'CREATE TABLE people(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    	name VARCHAR(150),
        gender VARCHAR(100),
        position VARCHAR(200),
           email VARCHAR(100),
           password BINARY(65),
           comments TEXT,
           responder INT(1));';
    if($conn->query($sql) !== TRUE)
      $error_create = $conn -> error;
}
 

