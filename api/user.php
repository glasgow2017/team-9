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

//header('Content-type: application/json');

$request  = json_decode(file_get_contents('php://input'));
$response = new stdClass();
$key = "fgdsfdhfdsf90";

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['reg']))
{
    $name = $request->name;
    $password  = $request->password;
    $password  = hash('sha256', $password);
    $email = $request->email;
    $gender= $request->gender;
    $position = $request->position;
    $resp = $request->responsibility *1;

    $sql = "INSERT INTO people (name, gender, position, email, password, responder) VALUES ('$name','$gender','$position','$email','$password', '$resp')";


     if($conn->query($sql)) {
         $response->success = true;
     } else {
        //http_send_status(400);
        $response->error = "Registration faild";
        var_dump($conn->error);
     }
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['login']))
{
    echo "Login";

    $email = $request->email;
    $password = $request->password;
    $password = hash('sha256', $password);

    $sql = "SELECT * FROM people  WHERE email = '$email' AND password = '$password';";

    if ($conn->query($sql) !== TRUE)
        $error_login = $conn->error;

    $num = $conn->query($sql)->num_rows;

    if ($num > 0)
    {
        $token = array(
            "email" => "$email",
            "password" => "$password",
        );

        $response->token = JWT::encode($token, $key);
    }
    else
    {
//        http_send_status(400);
        $response->error = "User not exists!";
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['auth']))
{
    echo "Authentication";

    $token = $request->token;

    $user = (array) JWT::decode($token, $key, array('HS256'));
    $email = $user['email'];
    $password = $user['password'];

    var_dump($user);


    $sql = "SELECT * FROM people  WHERE email = '$email' AND password = '$password';";

    if ($conn->query($sql) !== TRUE)
        $error_login = $conn->error;

    $num = $conn->query($sql)->num_rows;

    if ($num > 0)
    {
        $response->success = true;
    }
    else
    {
//        http_send_status(400);
        $response->error = "user not exists";
    }
}

echo json_encode($response);