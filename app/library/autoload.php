<?php
function myautoload($className)
{
    var_dump($className);
    require(str_replace('\\', '/', $className) . '.php');
}
spl_autoload_register('myautoload');
