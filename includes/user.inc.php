<?php
	include 'autoloader.inc.php';

	$user = new User();

	if(isset($_GET['admin_user'])){
		$result = $user->get_user();
		$output = '';
		$i = 1;
		while($row = $result->fetch_assoc()){
			$output .= '
				<tr>
					<td> '.$i.'</td>
					<td> '.$row['name'].' </td>
					<td> '.$row['email'].' </td>
					<td class="delete-td" onclick="delete_user('.$row['id'].')"><i class="far fa-trash-alt"></i></td>
				</tr>
			';
			$i++;
		}
		print_r($output);
	}
	if(isset($_GET['admin_user_delete'])){
		$user->delete($_GET['admin_user_delete']);
	}
	if(isset($_GET['admin_delete_all'])){
		$user->delete_all();
	}
	if(isset($_POST['update-name'])){
		$result = $user->update();
		print_r($result);
	}

	if(isset($_GET['profile_id'])){
		$result = $user->get_user($_GET['profile_id']);
		$row = $result->fetch_assoc();
		$json = json_encode($row);
		print_r($json);
	}

	if(isset($_GET['logged_user'])){
		$result = $user->get_user($_GET['logged_user']);
		$row = $result->fetch_assoc();
		$json = json_encode($row);
		print_r($json);
	}
	if(isset($_POST['email'])){
		$user->add_user();
	}

	if(isset($_POST['login-email'])){
		$user->login();
	}

	if(isset($_GET['count_user'])){
		$count = $user->count_user();
		$row = $count->fetch_assoc();
		print_r($row['COUNT(*)']);
	}
