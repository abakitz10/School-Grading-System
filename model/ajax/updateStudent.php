<?php

include('../Student.php');

$id 	 = $_POST['id'];
$fname 	 = $_POST['fname'];
$mname 	 = $_POST['mname'];
$lname   = $_POST['lname'];
$gender  = $_POST['gender'];
$section = $_POST['section'];

$student = new MyClass\Student();

$student->setId($id);
$student->setFname($fname);
$student->setMname($mname);
$student->setLname($lname);
$student->setGender($gender);
$student->setSection($section);

echo $student->update($student);
