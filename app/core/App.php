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
        if (array_search('index.php', $root) === false) {
            return;
        }
        $root = array_slice($root, array_search('index.php', $root) + 1);

        if (isset($root[0])  && (strlen($root[0]) > 0)) {
            $controllerName = 'controller\\' . $root[0];
            $controller = new $controllerName();
            if (isset($root[1]) && method_exists($controller, $root[1])) {
                $method = $root[1];
                try {
                    $parameters = isset($root[2]) ? $root[2] : NULL;
                    $controller->$method($parameters);
                } catch (\Exception $e) {
                    $controller->renderJson(false, ['code' => $e->getCode(), 'message' => $e->getMessage(), 'file' => $e->getFile(), 'ligne' => $e->getLine()]);
                }
            }
        }
    }
}
