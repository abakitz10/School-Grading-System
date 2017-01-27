<?php

include('WrittenWork.php');

$stud_id = $_POST['id'];

$works = new MyClass\WrittenWork();

$result = $works->getAll($stud_id);

echo json_encode($result);