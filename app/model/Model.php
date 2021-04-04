<?php

namespace model;

use entity\Entity;
use Exception;
use PDO;

class Model
{
    protected $db;
    protected $host = 'localhost';
    protected $login = 'root';
    protected $dbname = 'site-perso';
    protected $password = '';
    protected $table;

    public function __construct()
    {
        try {
            $db = new PDO("mysql:host=localhost;dbname={$this->dbname}", $this->login, $this->password);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            die($e->getMessage());
        }
        $this->db = $db;
        $this->table = $this->getTableName();
    }

    public function add(array $data)
    {
        $SQL = 'INSERT INTO `contacts` (' . implode(",", array_keys($data)) . ') VALUES (' . implode(',', array_fill(0, count($data), '?')) . ')';
        return $this->prepare($SQL, $data);
    }

    public function prepare(string $SQL, array $data)
    {
        $sth = $this->db->prepare($SQL);
        return $sth->execute(array_values($data));
    }

    public function getAll($table = NULL)
    {
        $table = $table != NULL ? $table : $this->table;
        $SQL = "SELECT * FROM $table";
        return $this->fetchAll($SQL);
    }

    public function getBy($key, $value, $table = NULL)
    {
        $table = $table != NULL ? $table : $this->table;
        $SQL = "SELECT * FROM $table WHERE $key = $value";
        return $this->fetch($SQL);
    }

    public function countRows($table = NULL)
    {
        $table = $table != NULL ? $table : $this->table;
        $SQL = "SELECT count(*) rows FROM $table";
        return $this->fetch($SQL);
    }

    public function fetch(string $SQL)
    {
        $sth = $this->db->query($SQL);
        $sth->setFetchMode(PDO::FETCH_CLASS, Entity::class);
        return $sth->fetch();
    }

    public function fetchAll(string $SQL)
    {
        $sth = $this->db->query($SQL);
        $sth->setFetchMode(PDO::FETCH_CLASS, Entity::class);
        return $sth->fetchAll();
    }

    public function getTableName()
    {
        $className = get_class($this);
        $pos = strpos($className, 'model\\') + 6;
        $table = '';
        for ($i = $pos; $i < strlen($className); $i++) {
            $table .= strtolower($className[$i]);
        }
        return ucfirst(str_replace('model', '', $table));
    }
}
