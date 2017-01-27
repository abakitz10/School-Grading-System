<?php
namespace MyClass;

include_once('Database.php');

class Student {

	private $first_name = "";
	private $middle_name = "";
	private $last_name = "";
	private $section = "";

	function __construct() {
		$this->db = new Database();
	}

	public function getAll() {

		$con = $this->db->connect();

		$query = "SELECT * FROM student";

		$result = $con->query($query);
		$con->close();

		return $result ?: false;

	}

	public function getBySection($section) {

		$con = $this->db->connect();

		$query = "SELECT * FROM student WHERE grade_section = '$section' ";

		$result = $con->query($query);
		$con->close();

		$st = array();

		while( $row = $result->fetch_assoc()) {
			$st[] = $row;
		}
		return $st;

	}

	public function add($st) {

		$con = $this->db->connect();

		$query = "INSERT INTO student SET first_name = '', 
			last_name = '' , middle_name = '', grade_section = ''
		";

		$result = $con->query($query);
		$con->close();

		$st = array();

		while( $row = $result->fetch_assoc()) {
			$st[] = $row;
		}
		return $st;

	}
}