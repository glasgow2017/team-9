<?php
/**
 * Created by PhpStorm.
 * User: bence
 * Date: 04/11/17
 * Time: 20:03
 */


require 'vendor/autoload.php';
require_once 'DB.php';


use \Firebase\JWT\JWT;

$request  = json_decode(file_get_contents('php://input'));
$response = new stdClass();

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['reg']))
{

    $name = $request->name;
    $password  = $request->password;
    $password  = sha256($password);
    $email = $request->email;
    $gender = $request->gender;
    $position = $request->position;
    $resp = $request->responsibility;


    $sql = "INSERT INTO people ('name', 'gender', 'position','email','password','responder' VALUES ('$name','$gender','$position','$email','$password','$resp'));";

     if($conn->query($sql) !== TRUE)
     {
         http_send_status(400);
        $response->error = "Registration faild";
     }
     else
     {
         $response->success = true;
     }
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['login']))
{

    $email = $request->email;
    $password = $request->password;
    $password = sha256($password);

    $sql = "SELECT * people  WHERE email = '$email' AND password = '$password';";

    if ($conn->query($sql) !== TRUE)
        $error_login = $conn->error;

    $num = $conn->query($sql)->num_rows;

    if ($num > 0)
    {
        $key = "fgdsfdhfdsf90";
        $token = array(
            "name" => "$name",
            "password" => "$password",
        );

        $response->token = JWT::encode($token, $key);
    }
    else
    {
        http_send_status(400);
        $response->error = "User not exists!";
    }
}


echo json_encode($response);