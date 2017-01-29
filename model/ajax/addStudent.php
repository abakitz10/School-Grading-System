<?php

include('../Student.php');

$student= new MyClass\Student();

$fname = $_POST['fname'];
$mname = $_POST['mname'];
$lname = $_POST['lname'];
$gender = $_POST['gender'];
$section = $_POST['section'];

echo $student->add($fname,$mname,$lname,$gender,$section);



