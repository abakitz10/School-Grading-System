<?php
include('UserAccount.php'); 

$email 	  = $_POST['email'];
$password = $_POST['password'];

$user = new MyClass\UserAccount;

header("Location: ../home.php");
// if ( $user->accountExist($email, $password) ) {
// 	session_start();
// 	$_SESSION['logged-in'] = 1;
// 	header("Location: ../home.php");
// }