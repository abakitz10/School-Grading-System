<?php

include('../Student.php');

$student= new MyClass\Student();

$id = $_POST['id'];

echo $student->delete($id);



