get_user();
function get_user(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/user.inc.php?admin_user=true', true);
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.table-res').innerHTML = this.responseText;
		}
	}
	xhr.send();
}
function delete_user(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/user.inc.php?admin_user_delete='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			get_user();
		}
	}
	xhr.send();
}
function delete_all(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/user.inc.php?admin_delete_all', true);
	xhr.onload = function(){
		if(this.status == 200){
			get_user();
		}
	}
	xhr.send();
}
