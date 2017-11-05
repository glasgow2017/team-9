<?php
/**
 * Created by PhpStorm.
 * User: bence
 * Date: 04/11/17
 * Time: 17:17
 */
require 'vendor/autoload.php';
//require dirname(__DIR__) . '/vendor/autoload.php';

require_once 'user.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\Server\IoServer;

class Chat implements MessageComponentInterface
{

    protected $clients;
    protected $authClients;

    public function __construct()
    {
        $this->clients = new \SplObjectStorage;
        $this->authClients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn)
    {
        $this->clients->attach($conn);
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {

        $msg = json_decode($msg);
        if ($msg->auth == 'auth')
        {
           $result = user_auth($msg->token);

           if (property_exists($result, 'success'))
           {
               $from->userData = $result->user;
               $this->authClients->attach($from);
               var_dump($this->authClients->count());
           }
        }
        else
        {
            var_dump("happend");
            $result = user_auth($msg->token);
            if (property_exists($result, 'success'))
                foreach ($this->clients as $client)
                {
                    if($client->userData->id == $msg->targetId)
                        $client->send($msg->message);

                }

        }

    }

    public function onClose(ConnectionInterface $conn) {
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        $conn->close();
    }

}

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
        )
    ),
    8088
);

$server->run();
