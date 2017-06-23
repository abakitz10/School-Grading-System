<?php
namespace MyClass;

include_once('Database.php');

class Teacher {

	private $id = "";
	private $first_name = "";
	private $middle_name = "";
	private $last_name = "";
	private $gender = "";
	private $email = "";
	private $password = "";

	function __construct() {
		$this->db = new Database();
		$this->con = $this->db->connect();
	}

	// setters
	public function setId($id) {
		$this->id = $id;
	}
	public function setFname($fname) {
		$this->first_name = $fname;
	}
	public function setMname($mname) {
		$this->middle_name = $mname;
	}
	public function setLname($lname) {
		$this->last_name = $lname;
	}
	public function setGender($gender) {
		$this->gender = $gender;
	}
	public function setSection($section) {
		$this->section = $section;
	}
	public function setEmail($email) {
		$this->email = $email;
	}
	public function setPassword($password) {
		$this->password = $password;
	}

	// getters
	public function getId() {
		return $this->id;
	}
	public function getFname() {
		return $this->first_name;
	}
	public function getMname() {
		return $this->middle_name;
	}
	public function getLname() {
		return $this->last_name;
	}
	public function getGender() {
		return $this->gender;
	}
	public function getEmail() {
		return $this->email;
	}
	public function getPassword() {
		return $this->password;
	}

	public function getAll() {

		$query = "SELECT * FROM student";

		$result = $this->con->query($query);

		return $result ?: false;

	}


	public function add(Teacher $teacher) {

		$fname    = $teacher->first_name;
		$mname    = $teacher->middle_name;
		$lname    = $teacher->last_name;
		$gender   = $teacher->gender;
		$email 	  = $teacher->email;

		$password = md5( $teacher->password );

		$query = "INSERT INTO teachers (first_name, middle_name, last_name, gender, email, password)
				VALUES ('$fname', '$mname', '$lname', '$gender', '$email' , '$password') ";

		$result = $this->con->query($query);

		return ($result > 0) ? 1 : 0;
		
		//echo $this->con->error;
	}

	public function update(Student $student) {

		$id      = $student->getId();
		$fname   = $student->getFname();
		$lname   = $student->getLname();
		$mname   = $student->getMname();
		$gender  = $student->getGender();
		$section = $student->getSection();

		$query = "UPDATE student SET
					first_name    = '$fname',
				    middle_name   = '$mname',
				    last_name	  = '$lname',
					gender 	      = '$gender',
					grade_section = '$section'
				  WHERE id = '$id'";

		$result = $this->con->query($query);
		//return $result ? 1 : 0;

		echo $id . $fname . $lname . $mname;
	}

	public function delete($id) {

		$query = "DELETE FROM student WHERE id = '$id' ";

		$result = $this->con->query($query);
		return $result;
	}
}