<?php
        $host = 'jp_db';
        $user = 'root';
        $pass = 'root';
        $db = 'people';
//        $conn = new PDO('mysqli:host=jp_db;dbname=people', $user, $pass);

   $conn = new mysqli($host,$user, $pass, $db);

    


