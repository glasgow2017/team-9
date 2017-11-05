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
	var_dump($msg);
        if ($msg->auth == 'auth')
        {
           $result = user_auth($msg->token);

           if (property_exists($result, 'success'))
           {
               $from->userData = $result->user;
               $this->authClients->attach($from);

               if ($from->userData->responder == 0)
               {
                   $response = new stdClass();
                   $response->targetId = null;
                   do
                   {
                       foreach ($this->authClients as $client)
                           if (!property_exists($client, 'tokenId') && $client->userData->responder == 1)
                           {
                               $client->targetId = $from->userData->id;
                               $from->targetId = $client->userData->id;

                               $response->targetId = $client->userData->id;
                           }

                       if ($response->targetId == null)
                           sleep(5);

                   }while($response->targetId == null);

                   $from->send(json_encode($response));
               }

           }
        }
        else
        {
            foreach ($this->authClients as $client)
                if($client->userData->id == $msg->targetId)
                {
                    $response = new stdClass();
                    $response->message = $msg->message;
		    $response->targetId = $client->targetId;
		     

                    $client->send(json_encode($response));
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
