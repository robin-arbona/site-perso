<?php

namespace controller;

use model\Model;

class Contact extends Controller
{
    public function new()
    {
        $model = new Model;
        $errors = [];
        foreach ($_POST as $key => &$value) {
            $value = htmlspecialchars($value);
            $method = 'verify' . ucfirst($key);
            if (method_exists($this, $method)) {
                if (($msg = $this->$method($value)) === TRUE) {
                    continue;
                } else {
                    $errors[] = $msg;
                    exit(var_dump($errors));
                }
            }
        }
        if (empty($errors) && $model->add($_POST, 'Contacts')) {
            $this->renderJson(['msg' => 'success']);
        } else {
            $this->renderJson($errors);
        }
    }

    public function verifyEmail(string $mail)
    {
        if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            return TRUE;
        } else {
            return 'Email is invalid.';
        }
    }
}
