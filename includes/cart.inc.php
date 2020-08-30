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
	if(isset($_GET['order'])){
		$result = $book->get_book($_GET['order']);
		$row = $result->fetch_assoc();
		$cart->order($_GET['user'],  $_GET['order'],  $row['price'],  $row['name'], $row['image']);
	}
	if(isset($_GET['get_cart'])){
		$result = $cart->get_cart($_GET['get_cart']);
		$output = '';
		while($row = $result->fetch_assoc()){
			$output .= '<div class="item" style="text-align: center; margin-bottom: 10px;">
				<img style="height: 120px; width:80px; border-radius:4px;" src="assets/book_covers/'.$row['product_image'].'">
				<h4 style="font-size: 14px;"><i class="fas fa-book"></i>  '.$row['product_name'].'</h4>
				<h4  style="font-size: 13px;"><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h4>
				<button class="order-btn" onclick="cart_to_order('.$row['product_id'].')"> Order now </button>
				<button type="button" class="cart-delete-btn" onclick="delete_cart('.$row['id'].')"> <i class="fas fa-trash-alt"></i> </button>
			</div>';
		}
		print_r($output);
	}
	if(isset($_GET['get_order'])){
		$result = $cart->get_order($_GET['get_order']);
		$output = '';
		while($row = $result->fetch_assoc()){
			$output .= '<div class="item" style="text-align: center; margin-bottom: 10px;">
				<img style="height: 120px; width:80px; border-radius:4px;" src="assets/book_covers/'.$row['product_image'].'">
				<h4 style="font-size: 14px;"><i class="fas fa-book"></i>  '.$row['product_name'].'</h4>
				<h4  style="font-size: 13px;"><i class="fas fa-dollar-sign"></i> '.$row['price'].' </h4>
				<button type="button" class="cart-delete-btn" onclick="delete_order('.$row['id'].')"> <i class="fas fa-trash-alt"></i> </button>
			</div>';
		}
		print_r($output);
	}
	if(isset($_GET['delete_cart'])){
		$result = $cart->delete_cart($_GET['delete_cart']);
	}
	if(isset($_GET['delete_order'])){
		$result = $cart->delete_order($_GET['delete_order']);
	}
	if(isset($_GET['cart_to_order'])){
		$cart->cart_to_order($_GET['cart_to_order'], $_GET['user']);
	}
	if(isset($_GET['count_order'])){
		$count = $cart->count_order();
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
	if(isset($_GET['admin_order'])){
		$result = $cart->get_order();
		$output = '';
		$i = 1;
		while($row = $result->fetch_assoc()){
			$user_result = $user->get_user($row['user_id']);
			$user_row = $user_result->fetch_assoc();
			$output .= '
				<tr>
					<td> '.$i.'</td>
					<td> '.$row['product_name'].' </td>
					<td> '.$user_row['name'].' </td>
					<td> '.$user_row['email'].' </td>
					<td> '.$row['price'].' </td>
					<td class="delete-td" onclick="delete_order('.$row['id'].')"><i class="far fa-trash-alt"></i></td>
				</tr>
			';
			$i++;
		}
		print_r($output);
	}
	if(isset($_GET['admin_order_delete'])){
		$cart->delete_order($_GET['admin_order_delete']);
	}
	if(isset($_GET['admin_delete_all'])){
		$cart->delete_all();
	}
