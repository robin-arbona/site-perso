<?php

namespace controller;

use model\Model;

class Controller
{
    protected $name;
    protected $table;

    public function __construct()
    {
        $this->name = str_replace('controller\\', '', strtolower(get_class($this)));
        $this->table = $this->name . 's';
    }

    public function renderJson($data)
    {
        $success = !empty($data) ? true : false;

        ob_clean();

        header_remove();
        header("Content-type: application/json; charset=utf-8");

        if ($success) {
            http_response_code(200);
        } else {
            http_response_code(500);
        }

        echo json_encode($data);

        exit();
    }

    public function renderHtml($data, $view)
    {
        if (is_array($data)) {
            extract($data);
        }
        ob_start();
        require(dirname(dirname(__FILE__)) . "/view/$view");
        $content = ob_get_clean();

        echo $content;

        exit();
    }

    public function show()
    {
        $data = $this->getList(NULL, 'array');
        $view = 'show.php';
        $this->renderHtml($data, $view);
    }

    public function getList($parameter = NULL, $output = 'json')
    {
        $model = new Model();
        $results = $model->getAll($this->table);
        if ($output == 'json') {
            $this->renderJson($results);
        } else {
            return $results;
        }
    }

    public function totalNumber()
    {
        $model = new Model();
        $results = $model->countRows($this->table);
        $this->renderJson($results);
    }

    public function getOne($id, $output = 'json')
    {
        $model = new Model();
        $id = (int) $id;
        $results = $model->getBy('id', $id, $this->table);
        if ($output == 'json') {
            $this->renderJson($results);
        } else {
            return $results;
        }
    }
}
