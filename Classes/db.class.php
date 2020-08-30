<?php
	class DB{
		private $dbservername = "localhost";
		private $dbusername = "root";
		private $dbpassword = "";
		private $dbname = "book_store";
		protected $conn;

		function __construct(){
			$this->conn = new mysqli($this->dbservername, $this->dbusername, $this->dbpassword, $this->dbname);
			if($this->conn->connect_error){
				echo 'connection error';
				die();
			}
		}
	}
