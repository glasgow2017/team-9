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
        http_response_code(400);
        $response->error = "Registration faild";
        var_dump($conn->error);
     }
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['login']))
{

    $email = $request->email;
    $password = $request->password;
    $password = hash('sha256', $password);

    $sql = "SELECT * FROM people  WHERE email = '$email' AND password = '$password';";


    $queryResult = $conn->query($sql);


    if ($queryResult->num_rows > 0)
    {
        $token = array(
            "email" => "$email",
            "password" => "$password",
        );

        $response->token = JWT::encode($token, $key);
        $response->user = $queryResult->fetch_object('stdClass');

    }
    else
    {
        http_response_code(400);
        $response->error = "User not exists!";
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['auth']))
{

    $token = $request->token;
    $response = user_auth($token);

}

echo json_encode($response);


function user_auth($token)
{
    global $conn;
    global $key;

    $response = new stdClass();

    $user = (array) JWT::decode($token, $key, array('HS256'));
    $email = $user['email'];
    $password = $user['password'];

    $sql = "SELECT * FROM people  WHERE email = '$email' AND password = '$password';";

    $queryResult = $conn->query($sql);

    if ($queryResult->num_rows > 0)
    {
        $response->success = true;
        $response->user    = $queryResult->fetch_object('stdClass');
    }
    else
    {
        http_response_code(400);
        $response->error = "user not exists";
    }

    return $response;
}