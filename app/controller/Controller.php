<?php

namespace controller;

class Controller
{
    public function renderJson(bool $success, array $data)
    {
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
}
