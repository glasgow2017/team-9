<?php 

require_once 'DB.php';


$checktable = "SHOW TABLES LIKE 'messages';";
$query = $conn->query($checktable);
if( $query->num_rows == 0){
  $sql = 'CREATE TABLE messages
(
  id         INT AUTO_INCREMENT
    PRIMARY KEY,
  sender_id  INT  NOT NULL,
  reciver_id INT  NOT NULL,
  message    TEXT NULL,
  CONSTRAINT messages_id_uindex
  UNIQUE (id),
  CONSTRAINT sender_fk
  FOREIGN KEY (sender_id) REFERENCES people (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT message_rec_fk
  FOREIGN KEY (reciver_id) REFERENCES people (id)
    ON UPDATE CASCADE       
    ON DELETE CASCADE
);
CREATE INDEX message_rec_fk
  ON messages (reciver_id);
CREATE INDEX sender_fk
  ON messages (sender_id);';
    if($conn->query($sql) !== TRUE)
      $error_create = $conn -> error;
    echo $error_create;
}
 
