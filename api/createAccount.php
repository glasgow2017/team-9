<?php

require_once 'DB.php';
$account = json_decode(file_get_contents('php://input'));

$name = $account->name;
$password  = $account->password;
$password  = sha256($password);
$email = $account->email;
$gender = $account->gender;
$position = $account->position;
$resp = $account->responsibility;


$sql = "INSERT INTO people ('name', 'gender', 'position','email','password','responder' VALUES ('$name','$gender','$position','$email','$password','$resp'));";

 if($conn->query($sql) !== TRUE)
      $error_registration = $conn -> error;
