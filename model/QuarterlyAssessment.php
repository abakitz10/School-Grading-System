<?php
namespace MyClass;

include_once('Database.php');

class QuarterlyAssessment {

	function __construct() {
		$this->con = new Database();
	}

	public function getTotal($stud_id) {
		
		$total = 0;
		$con = $this->con->connect();

		$query = "SELECT * FROM quarterly_assessment WHERE stud_id = '$stud_id' ";

		$result = $con->query($query);

		if (mysqli_num_rows($result) != 0) {

			$row = mysqli_fetch_assoc($result);

			$total = $row['score'];


		}

		return $total;
	}

}