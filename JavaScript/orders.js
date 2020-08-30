get_order();
function get_order(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/cart.inc.php?admin_order=true', true);
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.table-res').innerHTML = this.responseText;
		}
	}
	xhr.send();
}
function delete_order(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/cart.inc.php?admin_order_delete='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			get_order();
		}
	}
	xhr.send();
}
function delete_all(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/cart.inc.php?admin_delete_all', true);
	xhr.onload = function(){
		if(this.status == 200){
			get_user();
		}
	}
	xhr.send();
}
