<?php
namespace MyClass;

include_once('Database.php');

class WrittenWork {

	function __construct() {
		$this->db = new Database();
	}

	public function getTotal($stud_id) {
		
		$total = 0;
		$con = $this->db->connect();

		$query = "SELECT * FROM written_works WHERE stud_id = '$stud_id' ";

		$result = $con->query($query);

		if (mysqli_num_rows($result) != 0) {

			$row = mysqli_fetch_assoc($result);

			$total += $row['written_1'];
			$total += $row['written_2'];
			$total += $row['written_3'];
			$total += $row['written_4'];
			$total += $row['written_5'];
			$total += $row['written_6'];
			$total += $row['written_7'];
			$total += $row['written_8'];
			$total += $row['written_9'];
			$total += $row['written_10'];

		}

		$con->close();
		return $total;
	}

	public function getAll($stud_id) {

		$con   = $this->db->connect();
		$query = "SELECT * FROM written_works WHERE stud_id = '$stud_id' ";

		$result = $con->query($query);
		//return $stud_id;
		return mysqli_fetch_assoc($result);
	}
}