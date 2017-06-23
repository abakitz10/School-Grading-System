<?php 

include('../UserAccount.php');

$user = new MyClass\UserAccount();

$email = $_POST['email'];

echo ( $user->emailExist($email) );
