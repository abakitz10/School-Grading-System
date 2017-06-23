<?php
include('Teacher.php'); 

// teacher
$firstname = $_POST['first-name'];
$middlename = $_POST['middle-name'];
$lastname = $_POST['last-name'];
$gender = $_POST['gender'];

// account
$email = $_POST['email'];
$password1 = $_POST['password-1'];
$password2 = $_POST['password-2'];

$teacher = new MyClass\Teacher();


$teacher->setFname($firstname);
$teacher->setMname($middlename);
$teacher->setLname($lastname);
$teacher->setGender($gender);
$teacher->setEmail($email);
$teacher->setPassword($password1);

$teacher->add($teacher);

echo "<strong>Registration Successful</strong>. (Redirecting to login page in 3 seconds.)";
		
?>
<script>
	setTimeout(function()  {
		location.href = "../index.php";
	}, 3000);
</script>