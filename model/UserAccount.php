<?php

namespace MyClass;

include_once('Database.php');

class  UserAccount {

	function __construct() {
		$this->db = new Database();
		$this->con = $this->db->connect();
	}

	public function accountExist($email, $password) {

		$password = md5( $password );

		$query = "SELECT * FROM teachers WHERE email = '$email' && password = '$password' ";
	
		$result = $this->con->query( $query );

		$num = $result->num_rows;

		if ( $num ) {

			$row = $result->fetch_assoc();

			$account = array(
				'user_id' => $row['id'],
				'fname'   => $row['first_name'],
				'mname'   => $row['middle_name'],
				'lname'   => $row['last_name'],
				'gender'   => $row['gender'],
				'email'   => $row['email']
			);

			session_start();

			$_SESSION['user_account'] = $account;

			$this->accountSession( $account );
		}

		return $num;  
	}


	public function emailExist($email) {
		
		$query = "SELECT * FROM teachers WHERE email = '$email' ";

		$result = $this->con->query( $query );

		$rows = $result->num_rows;

		return ($rows) ? true : false;

	}

	public function accountSession($account) {

	}


}