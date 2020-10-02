<?php
	include 'autoloader.inc.php';

	$book = new Book();
	$cart = new Cart();
	$user = new User();

	if(isset($_GET['book'])){
		$result = $book->get_book($_GET['book']);
		$row = $result->fetch_assoc();
		$cart->add($_GET['user'],  $_GET['book'],  $row['price'],  $row['name'], $row['image']);
	}
	if(isset($_GET['get_cart'])){
		$result = $cart->get_cart($_GET['get_cart']);
		$output = '';
		while($row = $result->fetch_assoc()){
			$output .= '<div class="item" style="text-align: center; margin-bottom: 15px; margin-left: 10px;">
				<img style="height: 160px; width:120px; border-radius:4px;" src="assets/book_covers/'.$row['product_image'].'">
				<h4 style="font-size: 14px;"><i class="fas fa-book"></i>  '.$row['product_name'].'</h4>
				<h4  style="font-size: 13px; display: inline;"><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h4>
				<button type="button" style="font-size: 14px;" class="cart-delete-btn" onclick="delete_cart('.$row['id'].')"> <i class="fas fa-trash-alt"></i> </button>
			</div>';
		}
		print_r($output);
	}
	if(isset($_GET['delete_cart'])){
		$result = $cart->delete_cart($_GET['delete_cart']);
	}
	if(isset($_GET['count_order'])){
		$count = $cart->count_order();
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
	if(isset($_GET['admin_delete_all'])){
		$cart->delete_all();
	}
	if(isset($_GET['get_cart_info'])){
		$result = $cart->get_cart($_GET['get_cart_info']);
		$total_item = 0;
		$total_price = 0;
		while($row = $result->fetch_assoc()){
			$total_item += 1;
			$total_price += $row['price'];
		}
		$data = array(
			'total_price' => $total_price,
			'total_item' => $total_item
		);
		$payload = json_encode(array("data" => $data));
		print_r($payload);
	}
	if(isset($_POST['address'])){
		$result = $cart->place_order();
		$_SESSION['msg'] = $result;
		header("Location: ../index.html");
	}
	if(isset($_GET['admin_order'])){
		$result = $cart->get_order();
		print_r($result);
	}
	if(isset($_GET['admin_order_delete'])){
		$cart->delete_order($_GET['admin_order_delete']);
	}
	if(isset($_GET['admin_delete_all'])){
		$cart->delete_order();
	}
	if(isset($_GET['admin_order_info'])){
		$result = $cart->get_orderinfo($_GET['admin_order_info']);
		print_r($result);
	}
