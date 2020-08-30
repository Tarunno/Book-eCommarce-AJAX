<?php
	class Book extends DB{
		public function get_book($id=""){
			if($id == ""){
				$sql = "SELECT * FROM `books`;";
				$result = $this->conn->query($sql);
				return $result;
			} else {
				$sql = "SELECT * FROM `books` WHERE id='$id' OR name='$id';";
				$result = $this->conn->query($sql);
				return $result;
			}
		}
		public function filter($name="", $category=""){
			if($name == ""){
				$sql = "SELECT * FROM `books` WHERE category='$category';";
				$result = $this->conn->query($sql);
				return $result;
			} else if($category == "None"){
				$sql = "SELECT * FROM `books` WHERE `name` LIKE '%$name%';";
				$result = $this->conn->query($sql);
				return $result;
			} else {
				$sql = "SELECT * FROM `books` WHERE `name` LIKE '%$name%' AND category='$category';";
				$result = $this->conn->query($sql);
				while(mysqli_num_rows($result) == 0){
					$sql = "SELECT * FROM `books` WHERE `name` LIKE '%$name%' AND category='$category';";
					$result = $this->conn->query($sql);
					$name = $name[0];
				}
				return $result;
			}
		}
		public function update(){
			$id = $_POST['update-id'];
			$price = $_POST['update-price'];
			$rating = $_POST['update-rating'];
			$quantity = $_POST['update-quantity'];

			$sql = "UPDATE `books` SET price=?, rating=?, quantity=? WHERE id=?;";
			$stmt = $this->conn->prepare($sql);
			$stmt->bind_param('iiii', $price, $rating, $quantity, $id);
			$stmt->execute();
		}
		public function stock($id){
			$book = $this->get_book($id);
			$row = $book->fetch_assoc();
			$stock = 0;
			if($row['stock'] == 1){
				$stock = 0;
			} else {
				$stock = 1;
			}
			$sql = "UPDATE `books` SET stock=? WHERE id=?;";
			$stmt = $this->conn->prepare($sql);
			$stmt->bind_param('ii', $stock , $id);
			$stmt->execute();
		}
		public function sell($id){
			$book = $this->get_book($id);
			$row = $book->fetch_assoc();
			$sell = 0;
			if($row['sell'] == 1){
				$sell = 0;
			} else {
				$sell = 1;
			}
			$sql = "UPDATE `books` SET sell=? WHERE id=?;";
			$stmt = $this->conn->prepare($sql);
			$stmt->bind_param('ii', $sell , $id);
			$stmt->execute();
		}
		public function popular($id){
			$book = $this->get_book($id);
			$row = $book->fetch_assoc();
			$popular = 0;
			if($row['popular'] == 1){
				$popular = 0;
			} else {
				$popular = 1;
			}
			$sql = "UPDATE `books` SET popular=? WHERE id=?;";
			$stmt = $this->conn->prepare($sql);
			$stmt->bind_param('ii', $popular , $id);
			$stmt->execute();
		}
		public function best_selling($id){
			$book = $this->get_book($id);
			$row = $book->fetch_assoc();
			$best_selling = 0;
			if($row['best_selling'] == 1){
				$best_selling = 0;
			} else {
				$best_selling = 1;
			}
			$sql = "UPDATE `books` SET best_selling=? WHERE id=?;";
			$stmt = $this->conn->prepare($sql);
			$stmt->bind_param('ii', $best_selling , $id);
			$stmt->execute();
		}
		public function delete($id=""){
			if($id == ""){
				$sql = "DELETE FROM `books`;";
			} else {
				$sql = "DELETE FROM `books` WHERE id='$id';";
			}
			$this->conn->query($sql);
		}
		public function add(){
			$file_name = $_FILES['image']['name'];
			$file_tmp_name = $_FILES['image']['tmp_name'];
			$file_type = $_FILES['image']['type'];
			$file_size = $_FILES['image']['size'];

			if(empty($_POST['name']) || empty($_POST['price']) || empty($_POST['rating']) || empty($_POST['category']) || empty($_POST['quantity']) || empty($_POST['description']) || empty($file_name)){
				print_r("Empty fields");
			} else {
				$book = $this->get_book($_POST['name']);
				$row = $book->fetch_assoc();
				if(!empty($row)){
					print_r("This book already added");
				}
				else{
					$file_ext = explode('.', $file_name);
					$file_name = $file_ext[0];
					$file_ext = $file_ext[1];

					$allowed_ext = array('jpg', 'png', 'jpeg', 'webp');

					if(in_array($file_ext, $allowed_ext)){
						if($file_size < 5000000){ // 5MB
							$full_file_name = "cover_". $file_name ."." . $file_ext;
							$file_direction = "../assets/book_covers/" . $full_file_name;
							move_uploaded_file($file_tmp_name, $file_direction);

							$sql = "INSERT INTO `books` SET name=?, price=?, rating=?, category=?, quantity=?, stock=1, description=?, image=?;";
							$stmt = $this->conn->prepare($sql);
							$stmt->bind_param('siisiss', $_POST['name'], $_POST['price'], $_POST['rating'], $_POST['category'], $_POST['quantity'], $_POST['description'], $full_file_name);
							$stmt->execute();
							print_r("Book added successfully");
						} else {
							print_r("File too large");
						}
					} else {
						print_r("Invalid file format");
					}
				}
			}
		}
		public function search_book($key_word){
			$search = mysqli_real_escape_string($this->conn, $key_word);
			$sql = "SELECT * FROM `books` WHERE `name` LIKE '%$search%' OR `category` LIKE '%$search%';";
			$books = $this->conn->query($sql);
			return $books;
		}
		public function count($key=""){
			if($key == ""){
				$sql = "SELECT COUNT(*) FROM `books`;";
			} else {
				$sql = "SELECT COUNT(*) FROM `books` WHERE category='$key';";
			}
			$result = $this->conn->query($sql);
			return $result;
		}
		public function count_key($key){
			$sql = "SELECT COUNT(*) FROM `books` WHERE `$key`= 1;";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function load($key){
			$sql = "SELECT * FROM `books` WHERE `$key`= 1 AND `stock`=1;";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function load_more($offset){
			$sql = "SELECT * FROM `books` WHERE `sell`= 1 AND `stock`=1 LIMIT 3 OFFSET $offset;";
			$result = $this->conn->query($sql);
			return $result;
		}
		public function category($key){
			$sql = "SELECT * FROM `books` WHERE `category`= '$key' AND `stock`=1;";
			$result = $this->conn->query($sql);
			return $result;
		}
	}
