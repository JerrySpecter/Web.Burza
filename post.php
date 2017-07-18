<?php

$errors         = array();     
$data           = array();     


    if (empty($_POST['name']))
        $errors['name'] = 'Name is required.';

    if (empty($_POST['email']))
        $errors['email'] = 'Email is required.';

    if (empty($_POST['message']))
        $errors['message'] = 'Message is required.';

    if ( ! empty($errors)) {
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {
        $data['success'] = true;
        $data['message'] = 'Success!';
    }
    echo json_encode($data);