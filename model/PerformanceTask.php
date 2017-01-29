<?php
namespace MyClass;

include_once('Database.php');

class PerformanceTask {

	function __construct() {
		$this->db = new Database();
	}

	public function getTotal($stud_id) {
		
		$total = 0;
		$con = $this->db->connect();

		$query = "SELECT * FROM performance_tasks WHERE stud_id = '$stud_id' ";

		$result = $con->query($query);

		if (mysqli_num_rows($result) != 0) {

			$row = mysqli_fetch_assoc($result);

			$total += $row['p_1'];
			$total += $row['p_2'];
			$total += $row['p_3'];
			$total += $row['p_4'];
			$total += $row['p_5'];
			$total += $row['p_6'];
			$total += $row['p_7'];
			$total += $row['p_8'];
			$total += $row['p_9'];
			$total += $row['p_10'];

		}

		return $total;
	}

	public function getAll($stud_id) {
		$con   = $this->db->connect();
		$query = "SELECT * FROM performance_tasks WHERE stud_id = '$stud_id' ";

		$result = $con->query($query);
		return mysqli_fetch_assoc($result);
	}
}