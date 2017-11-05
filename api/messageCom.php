<?php
require_once'DB.php';

function sentMessage($sender, $receiver, $message){
    $sql = "INSERT INTO messages (sender_id, receiver_id, message) VALUES ('$sender', '$receiver', '$messages')";
     if($conn->query($sql) !== TRUE)
      $error_message_add = $conn -> error;
}


function getMessage($sender, $receiver){
    $sql = "SELECT message FROM messages WHERE sender_id ='$sender', receiver_id = '$receiver'";
     if($conn->query($sql) !== TRUE)
      $error_message_add = $conn -> error;
       $message = array();
    if($conn->query($sql)->num_rows >0){
           
            while($row = $conn->query($sql)->fetch_assoc()){
            $message_row = $row['message'];
              array_push($message, $message_row);  
                
            }
            
        }
    return  $message;
}