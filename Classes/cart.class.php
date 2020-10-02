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
		public function get_cart($id){
			$sql = "SELECT * FROM `cart` WHERE user_id='$id';";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function delete_cart($id){
			$sql = "DELETE FROM `cart` WHERE id='$id';";
			$this->conn->query($sql);
		}
		public function delete_all(){
			$sql = "DELETE FROM `orders`;";
			$this->conn->query($sql);
		}
		public function count_order(){
			$sql = "SELECT COUNT(*) FROM `orders`;";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function place_order(){
			if(empty($_POST['user_id']) || empty($_POST['address']) || empty($_POST['city']) || empty($_POST['postal_code']) || empty($_POST['phone'])){
				echo "empty field";
			}
			else{
				$user_id = $_POST['user_id'];

				$sql = "SELECT * FROM `orders` WHERE `user_id`='$user_id';";
				$orders = $this->conn->query($sql);
				if(mysqli_num_rows($orders) == 0){
					$sql = "INSERT INTO `orders` SET user_id= ?, address=?, city=?, postal_code=?, phone=?;";
					$stmt = $this->conn->prepare($sql);
					$stmt->bind_param('issis', $_POST['user_id'], $_POST['address'], $_POST['city'], $_POST['postal_code'], $_POST['phone']);
					$stmt->execute();
				}
				$sql = "SELECT * FROM `orders` WHERE `user_id`='$user_id';";
				$result = $this->conn->query($sql);
				$row = $result->fetch_assoc();
				$order_id = $row['id'];

				$sql = "SELECT * FROM `cart` WHERE `user_id`='$user_id';";
				$result = $this->conn->query($sql);
				while($row = $result->fetch_assoc()){
					$product_id = $row['product_id'];
					$sql = "INSERT INTO `order_items` SET `order_id`='$order_id', `product_id`='$product_id';";
					$this->conn->query($sql);
				}
				$sql = "DELETE FROM `cart` WHERE `user_id`='$user_id';";
				$this->conn->query($sql);
				echo "order placed";
			}
		}
		public function get_order(){
			$sql = "SELECT * FROM `orders`;";
			$result = $this->conn->query($sql);
			$output = "";
			$i = 1;
			while($row = $result->fetch_assoc()){
				$user_id = $row['user_id'];
				$sql = "SELECT * FROM `users` WHERE `id`='$user_id';";
				$users = $this->conn->query($sql);
				$user = $users->fetch_assoc();
				$output .= '
				<tr>
					<td>'.$i.'</td>
					<td>'.$user['name'].'</td>
					<td>'.$row['created_at'].'</td>
					<td>'.$row['address'].'</td>
					<td>'.$row['city'].'</td>
					<td>'.$row['postal_code'].'</td>
					<td>'.$row['phone'].'</td>
					<td class="edit-td" onclick="get_orderinfo('.$row['user_id'].')"><i class="fas fa-info-circle"></i></td>
					<td class="delete-td" onclick="delete_order('.$row['id'].')"><i class="fas fa-trash-alt"></i></td>
				</tr>
				';
			}
			return $output;
		}
		public function delete_order($id=""){
			if($id == ""){
				$sql = "DELETE FROM `orders`;";
			} else{
				$sql = "DELETE FROM `orders` WHERE `id`=$id;";
			}
			$this->conn->query($sql);
		}
		public function get_orderinfo($id){
			$sql = "SELECT * FROM `users` WHERE `id`='$id';";
			$user = $this->conn->query($sql);
			$user = $user->fetch_assoc();

			$sql = "SELECT * FROM `orders` WHERE `user_id`='$id';";
			$order = $this->conn->query($sql);
			$order = $order->fetch_assoc();
			$order_id = $order['id'];


			$sql = "SELECT * FROM `order_items` WHERE `order_id`='$order_id';";
			$items = $this->conn->query($sql);

			$output = '<h2 class="username"><i class="fas fa-user"></i>'.$user['name'].' | '.$user['email'].'</h2>';

			while($row = $items->fetch_assoc()){
				$product_id = $row['product_id'];
				$sql = "SELECT * FROM `books` WHERE `id`='$product_id';";
				$product = $this->conn->query($sql);
				$product = $product->fetch_assoc();


				$output .= '
				<div class="product">
					<img src="../assets/book_covers/'.$product['image'].'">
					<h4 class="product-name">'.$product['name'].'</h4>
					<h6 class="product-price">$ '.$product['price'].'</h6>
				</div>
				';
			}
			return $output;
		}
	}
