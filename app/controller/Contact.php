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
                }
            }

            if (empty($value)) {
                $msg = ucfirst($key) . " is empty, please fill it";
            }

            if (isset($msg) && ($msg != 1)) {
                $errors[] = $msg;
                unset($msg);
            }
        }
        if (empty($errors) && $model->add($_POST, 'Contacts')) {
            $this->renderJson(['msg' => 'Thank you for contacting me! I will contact you back soon :)']);
        } else {
            $this->renderJson(['msg' => implode('. ', $errors)]);
        }
    }

    public function verifyEmail(string $mail)
    {
        if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            return TRUE;
        } else {
            return 'Your Email is not valid.';
        }
    }
}
