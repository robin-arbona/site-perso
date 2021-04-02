<?php


require_once('library/autoload.php');

$root = explode('/', $_SERVER['REQUEST_URI']);
$root = array_slice($root, array_search('app', $root) + 1);


if (strlen($root[0]) > 0) {
    $controllerName = 'controller\\' . $root[0];
    $controller = new $controllerName();
    if (isset($root[1]) && method_exists($controller, $root[1])) {
        $method = $root[1];
        $controller->$method();
    }
}
