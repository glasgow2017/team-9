<?php
/**
 * Created by PhpStorm.
 * User: bence
 * Date: 04/11/17
 * Time: 17:17
 */
require 'vendor/autoload.php';
//require dirname(__DIR__) . '/vendor/autoload.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\Server\IoServer;

class Chat implements MessageComponentInterface
{

    protected $clients;

    public function __construct()
    {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn)
    {

        echo 'incoming\n';
        $this->clients->attach($conn);
    }

    public function onMessage(ConnectionInterface $from, $msg) {

        echo $msg;

        foreach ($this->clients as $client) {
                $client->send($msg);
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
