<?php

/**
 * Created by PhpStorm.
 * User: petar
 * Date: 17.3.2018
 * Time: 13:38
 */
class db
{
    private $db_server = "localhost";
    private $db_user = "risk";
    private $db_pass = "r1";
    private $db_name = "risks";

    public function connection (){
        try {
            $conn = new PDO("mysql:host=$this->db_server;dbname=$this->db_name", $this->db_user, $this->db_pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        } catch (PDOException $e) {
            echo $this->db_server.'bla bla <br>';
            echo "Error: " . $e->getMessage();
        }
    }
}