<?php
	class User extends DB{
		public function get_user($id=""){
			if($id == ""){
				$sql = "SELECT * FROM `users`;";
			} else {
				$sql = "SELECT * FROM `users` WHERE id='$id' OR email='$id';";
			}
			$result = $this->conn->query($sql);
			return $result;
		}
		public function add_user(){
			$name = $_POST['name'];
			$email = $_POST['email'];
			$password = $_POST['password'];
			if(empty($name) || empty($email) || empty($password)){
				echo "Empty feild";
			} else{
				$sql = "SELECT * FROM `users` WHERE `email`='$email';";
				$result = $this->conn->query($sql);
				if(mysqli_num_rows($result) >= 1){
					echo "This user already exists";
				} else{
					$password = password_hash($password, PASSWORD_DEFAULT);
					$sql = "INSERT INTO `users` SET `name`=?, `password`=?, `email`=?;";
					$stmt = $this->conn->prepare($sql);
					$stmt->bind_param('sss',$name, $password, $email);
					$stmt->execute();
					echo "Account created successfully";
				}
			}
		}
		public function login(){
			$email = $_POST['login-email'];
			$password = $_POST['login-password'];
			if(empty($email) || empty($password)){
				echo "Empty feild";
			} else{
				$sql = "SELECT * FROM `users` WHERE `email`='$email';";
				$result = $this->conn->query($sql);
				if(mysqli_num_rows($result) == 0){
					echo "This user doesn't exists";
				} else{
					$row = $result->fetch_assoc();
					$password = $row['password'];
					if(!password_verify($_POST['login-password'], $password)){
						echo "Invalid email or password";
					} else{
						echo "You logged in";
					}
				}
			}
		}
		public function count_user(){
			$sql = "SELECT COUNT(*) FROM users;";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function update(){
			$id = $_POST['id'];
			$email = $_POST['update-email'];
			if($_POST['user-email'] == $_POST['update-email']){
				if($_POST['update-password'] == ""){
					$sql = "UPDATE `users` SET `name`=?, `email`=? WHERE id='$id';";
					$stmt = $this->conn->prepare($sql);
					$stmt->bind_param('ss',$_POST['update-name'], $email);
					$stmt->execute();
					echo "Account created successfully";
				} else {
					$password = $_POST['update-password'];
					$password = password_hash($password, PASSWORD_DEFAULT);
					$sql = "UPDATE `users` SET `name`=?, `password`=?, `email`=? WHERE id='$id';";
					$stmt = $this->conn->prepare($sql);
					$stmt->bind_param('sss',$_POST['update-name'], $password, $email);
					$stmt->execute();
					echo "Account created successfully";
				}
			} else {
				$sql = "SELECT * FROM `users` WHERE `email`='$email';";
				$result = $this->conn->query($sql);

				if(mysqli_num_rows($result) >= 1){
					echo "Email already in use";
				} else {
					if($_POST['update-password'] == ""){
						$sql = "UPDATE `users` SET `name`=?, `email`=? WHERE id='$id';";
						$stmt = $this->conn->prepare($sql);
						$stmt->bind_param('ss',$_POST['update-name'], $email);
						$stmt->execute();
						echo "Account created successfully";
					} else {
						$password = $_POST['update-password'];
						$password = password_hash($password, PASSWORD_DEFAULT);
						$sql = "UPDATE `users` SET `name`=?, `password`=?, `email`=? WHERE id='$id';";
						$stmt = $this->conn->prepare($sql);
						$stmt->bind_param('sss',$_POST['update-name'], $password, $email);
						$stmt->execute();
						echo "Account created successfully";
					}
				}
			}
		}
		public function delete($id){
			$sql = "DELETE FROM `users` WHERE id='$id';";
			$this->conn->query($sql);
			$sql = "DELETE FROM `cart` WHERE user_id='$id';";
			$this->conn->query($sql);
			$sql = "DELETE FROM `orders` WHERE user_id='$id';";
			$this->conn->query($sql);
		}
		public function delete_all(){
			$sql = "DELETE FROM `users`;";
			$this->conn->query($sql);
			$sql = "DELETE FROM `cart`;";
			$this->conn->query($sql);
			$sql = "DELETE FROM `orders`;";
			$this->conn->query($sql);

		}
	}
