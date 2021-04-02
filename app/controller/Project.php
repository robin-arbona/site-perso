<?php

namespace controller;

use model\Model;

class Project extends Controller
{
    public function getList()
    {
        $model = new Model();
        $projects = $model->getAll('projects');
        !empty($projects) ? $this->renderJson(true, $projects) : $this->renderJson(false, $projects);
    }
}
