<?php
namespace MyClass;

class Database {
	private $con = "";

	function __construct($host="localhost", $user = "root", $pass = "", $db = "classrecord") {

		$this->host = $host;
		$this->user = $user;
		$this->pass = $pass;
		$this->db 	= $db;
	}

	public function connect() {
		try {
			$this->con = new \mysqli($this->host, $this->user, $this->pass, $this->db);
			return $this->con;
		} catch(Excepton $e) {
			return $e;
		}
	}
}
