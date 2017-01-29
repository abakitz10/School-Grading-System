<?php

include('Student.php');

$st = new MyClass\Student();

$section = $_POST['section'];

$result = $st->getBySection($section);

echo json_encode($result);