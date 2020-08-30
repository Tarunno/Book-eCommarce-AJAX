<?php
	class Cart extends DB{
		public function add($user_id, $product_id, $price, $name, $image){
			$sql = "SELECT * FROM `cart` WHERE user_id='$user_id' AND product_id='$product_id';";
			$result = $this->conn->query($sql);
			if(mysqli_num_rows($result) == 0){
				$sql = "INSERT INTO `cart` SET user_id=?, product_id=?, price=?, product_name=?, product_image=?;";
				$stmt = $this->conn->prepare($sql);
				$stmt->bind_param('iiiss', $user_id, $product_id, $price, $name, $image);
				$stmt->execute();
				print_r("Added");
			}
			else{
				print_r("Error");
			}
		}
		public function order($user_id, $product_id, $price, $name, $image){
			$sql = "SELECT * FROM `orders` WHERE user_id='$user_id' AND product_id='$product_id';";
			$result = $this->conn->query($sql);
			if(mysqli_num_rows($result) == 0){
				$sql = "INSERT INTO `orders` SET user_id=?, product_id=?, price=?, product_name=?, product_image=?;";
				$stmt = $this->conn->prepare($sql);
				$stmt->bind_param('iiiss', $user_id, $product_id, $price, $name, $image);
				$stmt->execute();
				print_r("Added");
			}
			else{
				print_r("Error");
			}
		}
		public function get_cart($id){
			$sql = "SELECT * FROM `cart` WHERE user_id='$id';";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function get_order($id=""){
			if($id == ""){
				$sql = "SELECT * FROM `orders`;";
			} else{
				$sql = "SELECT * FROM `orders` WHERE user_id='$id';";
			}
			$result = $this->conn->query($sql);
			return $result;
		}
		public function delete_cart($id){
			$sql = "DELETE FROM `cart` WHERE id='$id';";
			$this->conn->query($sql);
		}
		public function delete_order($id){
			$sql = "DELETE FROM `orders` WHERE id='$id';";
			$this->conn->query($sql);
		}
		public function delete_all(){
			$sql = "DELETE FROM `orders`;";
			$this->conn->query($sql);
		}
		public function cart_to_order($id, $user){
			$sql = "DELETE FROM `cart` WHERE product_id='$id'AND user_id='$user';";
			$this->conn->query($sql);
		}
		public function count_order(){
			$sql = "SELECT COUNT(*) FROM `orders`;";
			$result = $this->conn->query($sql);
			return $result;
		}
	}
