<?php
	include 'autoloader.inc.php';

	$book = new Book();
	if(isset($_GET['book_name'])){
		$result = $book->filter($_GET['book_name'], $_GET['book_category']);
		$output = '';
		$i = 1;
		while($row = $result->fetch_assoc()){
			$output .= '<div class="item" style="text-align: center;" onclick="full_view('.$row['id'].')">
				<img style="height: 100px; width:70px;" src="assets/book_covers/'.$row['image'].'" alt="'.$row['category'].' books">
				<h4 style="font-size: 14px;"><i class="fas fa-book"></i>  '.$row['name'].'</h4>
				<h4  style="font-size: 13px;"><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h4>
				<h4 style="color: #b5b5b5; font-size: 10px;"><i class="fas fa-tag"></i>'.$row['category'].'</h4>
			</div>';
			$i++;
		}
		print_r($output);
	}

	if(isset($_GET['load_all'])){
		$result = $book->get_book();
		$output = "";
		$i = 1;
		while($row = $result->fetch_assoc()){
			$output .= '<tr>
				<td>'.$i.'</td>
				<td>'.$row['name'].'</td>
				<td>'.$row['price'].'</td>
				<td>'.$row['rating'].'</td>
				<td>'.$row['category'].'</td>
				<td>'.$row['quantity'].'</td>';
				//sell
				if($row['sell'] == 1){
					$output .= '<td class="sell-td" style="color: #33c726; cursor: pointer;" onclick="sell('.$row['id'].')"><i class="fas fa-check"></i></td>';
				} else{
					$output .= '<td class="sell-td" style="color: #e34242; cursor: pointer;" onclick="sell('.$row['id'].')"><i class="fas fa-times"></i></td>';
				}
				// popular
				if($row['popular'] == 1){
					$output .= '<td class="popular-td" style="color: #33c726; cursor: pointer;" onclick="popular('.$row['id'].')"><i class="fas fa-check"></i></td>';
				} else{
					$output .= '<td class="popular-td" style="color: #e34242; cursor: pointer;" onclick="popular('.$row['id'].')"><i class="fas fa-times"></i></td>';
				}
				// best-selling
				if($row['best_selling'] == 1){
					$output .= '<td class="best_selling-td" style="color: #33c726; cursor: pointer;" onclick="best_selling('.$row['id'].')"><i class="fas fa-check"></i></td>';
				} else{
					$output .= '<td class="best_selling-td" style="color: #e34242; cursor: pointer;" onclick="best_selling('.$row['id'].')"><i class="fas fa-times"></i></td>';
				}
				// stock
				if($row['stock'] == 1){
					$output .= '<td class="stock-td" onclick="stock('.$row['id'].')"><i class="far fa-check-square"></i></td>';
				} else{
					$output .= '<td class="stock-td" style="background: #9ec789;" onclick="stock('.$row['id'].')"><i class="far fa-window-close"></i></td>';
				}
				$output .= '<td class="edit-td" onclick="update('.$row['id'].')"><i class="far fa-edit"></i></td>
				<td class="delete-td" onclick="delete_book('.$row['id'].')"><i class="far fa-trash-alt"></i></td>
			</tr>';
			$i++;
		}
		print_r($output);
	}

	if(isset($_GET['book'])){
		$id = $_GET['book'];
		$result = $book->get_book($id);
		$row = $result->fetch_assoc();
		$json = json_encode($row);
		print_r($json);
	}

	if(isset($_POST['update-price'])){
		print_r($_POST);
		$book->update();
	}

	if(isset($_GET['stock'])){
		$id = $_GET['stock'];
		$book->stock($id);
	}

	if(isset($_GET['sell'])){
		$id = $_GET['sell'];
		$book->sell($id);
	}

	if(isset($_GET['popular'])){
		$id = $_GET['popular'];
		$book->popular($id);
	}

	if(isset($_GET['best_selling'])){
		$id = $_GET['best_selling'];
		$book->best_selling($id);
	}

	if(isset($_GET['delete'])){
		$id = $_GET['delete'];
		$book->delete($id);
	}
	if(isset($_GET['delete_all'])){
		$book->delete();
	}

	if(isset($_POST['name'])){
		$book->add();
	}

	if(isset($_GET['key_word'])){
		$result = $book->search_book($_GET['key_word']);
		$output = "";
		$i = 1;
		while($row = $result->fetch_assoc()){
			$output .= '<tr>
				<td>'.$i.'</td>
				<td>'.$row['name'].'</td>
				<td>'.$row['price'].'</td>
				<td>'.$row['rating'].'</td>
				<td>'.$row['category'].'</td>
				<td>'.$row['quantity'].'</td>';
				//sell
				if($row['sell'] == 1){
					$output .= '<td class="sell-td" style="color: #33c726; cursor: pointer;" onclick="sell('.$row['id'].')"><i class="fas fa-check"></i></td>';
				} else{
					$output .= '<td class="sell-td" style="color: #e34242; cursor: pointer;" onclick="sell('.$row['id'].')"><i class="fas fa-times"></i></td>';
				}
				// popular
				if($row['popular'] == 1){
					$output .= '<td class="popular-td" style="color: #33c726; cursor: pointer;" onclick="popular('.$row['id'].')"><i class="fas fa-check"></i></td>';
				} else{
					$output .= '<td class="popular-td" style="color: #e34242; cursor: pointer;" onclick="popular('.$row['id'].')"><i class="fas fa-times"></i></td>';
				}
				// best-selling
				if($row['best_selling'] == 1){
					$output .= '<td class="best_selling-td" style="color: #33c726; cursor: pointer;" onclick="best_selling('.$row['id'].')"><i class="fas fa-check"></i></td>';
				} else{
					$output .= '<td class="best_selling-td" style="color: #e34242; cursor: pointer;" onclick="best_selling('.$row['id'].')"><i class="fas fa-times"></i></td>';
				}
				// stock
				if($row['stock'] == 1){
					$output .= '<td class="stock-td" onclick="stock('.$row['id'].')"><i class="far fa-check-square"></i></td>';
				} else{
					$output .= '<td class="stock-td" style="background: #9ec789;" onclick="stock('.$row['id'].')"><i class="far fa-window-close"></i></td>';
				}
				$output .= '<td class="edit-td" onclick="update('.$row['id'].')"><i class="far fa-edit"></i></td>
				<td class="delete-td" onclick="delete_book('.$row['id'].')"><i class="far fa-trash-alt"></i></td>
			</tr>';
			$i++;
		}
		print_r($output);
	}

	if(isset($_GET['count_all'])){
		$count = $book->count();
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
	if(isset($_GET['novel'])){
		$count = $book->count("Novel");
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
	if(isset($_GET['comics'])){
		$count = $book->count("Comics");
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
	if(isset($_GET['life_style'])){
		$count = $book->count("Life style");
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
	if(isset($_GET['count_key'])){
		$key = $_GET['count_key'];
		$count = $book->count_key($key);
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}

	if(isset($_GET['load'])){
		$key = $_GET['load'];
		if($key == "sell"){
			$result = $book->load($key);
			$output = "<h1>Sells</h1>";
			$i = 0;
			while($row = $result->fetch_assoc()){
				if($i == 3) break;
				$output .= '<div class="book">
					<img src="assets/book_covers/'.$row['image'].'" alt="Books on sell" onclick="full_view('.$row['id'].')">
					<h3> <i class="fas fa-book"></i> '.$row['name'].'</h3>
					<h3><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h3>
					<h4 style="color: #b5b5b5;"><i class="fas fa-tag"></i> '.$row['category'].' </h4>
				</div>';
				$i++;
			}
			$output .= '<button type="button" class="more" onclick="load_more()"> More </button>';
		} else {
			$result = $book->load($key);
			$output = "";
			while($row = $result->fetch_assoc()){
				$output .= '<div class="item" onclick="full_view('.$row['id'].')">
					<img src="assets/book_covers/'.$row['image'].'" alt="'.$row['category'].' books">
					<h4><i class="fas fa-book"></i>  '.$row['name'].'</h4>
					<h4><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h4>
					<h4 style="color: #b5b5b5;"><i class="fas fa-tag"></i>'.$row['category'].'</h4>
				</div>';
			}
		}
		print_r($output);
	}
	if(isset($_GET['load_more'])){
		$offset = $_GET['load_more'];
		$result = $book->load_more($offset);
		$output = "<h1>Sells</h1>";
		$i = 0;
		while($row = $result->fetch_assoc()){
			$output .= '<div class="book">
				<img src="assets/book_covers/'.$row['image'].'" alt="Books on sell" onclick="full_view('.$row['id'].')">
				<h3> <i class="fas fa-book"></i> '.$row['name'].'</h3>
				<h3><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h3>
				<h4 style="color: #b5b5b5;"><i class="fas fa-tag"></i> '.$row['category'].' </h4>
			</div>';
			$i++;
		}
		if($i >= 3 ){
			$output .= '<button type="button" class="more" onclick="load_more()"> More </button>';
		}
		print_r($output);
	}
	if(isset($_GET['category'])){
		$key = $_GET['category'];
		$result = $book->category($key);
		$output = "";
		while($row = $result->fetch_assoc()){
			$output .= '<div class="item" onclick="full_view('.$row['id'].')">
				<img src="assets/book_covers/'.$row['image'].'" alt="'.$row['category'].' books">
				<h4><i class="fas fa-book"></i>  '.$row['name'].'</h4>
				<h4><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h4>
				<h4 style="color: #b5b5b5;"><i class="fas fa-tag"></i>'.$row['category'].'</h4>
			</div>';
		}
		print_r($output);
	}
	if(isset($_GET['book'])){
		$result = $book->get_book($_GET['book']);
		$row = $result->fetch_assoc();
		json_encode($row);
	}
