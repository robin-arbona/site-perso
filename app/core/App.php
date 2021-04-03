<?php

namespace core;


class App
{
    public function __construct()
    {
        $this->autoload();
        $this->launchSession();
        $this->rooter();
    }

    private function autoload()
    {
        spl_autoload_register(function ($className) {
            require(str_replace('\\', '/', $className) . '.php');
        });
    }

    private function launchSession()
    {
        session_start();
    }

    private function rooter()
    {
        $root = explode('/', $_SERVER['REQUEST_URI']);
        $root = array_slice($root, array_search('app', $root) + 1);


        if (strlen($root[0]) > 0) {
            $controllerName = 'controller\\' . $root[0];
            $controller = new $controllerName();
            if (isset($root[1]) && method_exists($controller, $root[1])) {
                $method = $root[1];
                try {
                    $controller->$method($_POST);
                } catch (\Exception $e) {
                    $controller->renderJson(false, ['code' => $e->getCode(), 'message' => $e->getMessage(), 'file' => $e->getFile(), 'ligne' => $e->getLine()]);
                }
            }
        }
    }
}
