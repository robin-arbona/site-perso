<?php

namespace controller;

use model\Model;

class Project extends Controller
{
    public function getList()
    {
        $model = new Model();
        $results = $model->getAll('projects');
        $this->renderJson($results);
    }

    public function totalNumber()
    {
        $model = new Model();
        $results = $model->countRows('projects');
        $this->renderJson($results);
    }

    public function getOne($id)
    {
        $model = new Model();
        $id = (int) $id;
        $results = $model->getBy('id', $id, 'projects');
        $this->renderJson($results);
    }
}
