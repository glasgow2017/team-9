<?php
require_once 'DB.php';
$account = json_decode(file_get_contents('php://input'));

$email = $account->email;
$password  = $account->password;
$password  = sha256($password);



$sql = "SELECT * people  WHERE email = '$email' AND password = '$password';";
    
     if($conn->query($sql) !== TRUE)
      $error_login = $conn -> error;

$num = $conn ->query($sql)->num_rows;

if($num > 0){
    $key = "fgdsfdhfdsf90";
$token = array(
    "name" => "$name",
    "password" => "$password",
);
    
    $jwt = JWT::encode($token, $key);
    
}


