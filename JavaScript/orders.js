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
			get_order();
		}
	}
	xhr.send();
}
function get_orderinfo(id){
	let body = document.body;
	var item_container = document.createElement('div');
	var item_window = document.createElement('div');
	var item_info = document.createElement('div');
	item_window.setAttribute('class', 'full-view');
	item_info.setAttribute('class', 'about-text');
	item_container.setAttribute('class', 'full-view-container');
	item_info.innerHTML = `
			<button class="full-view-off"><i class="fas fa-times"></i></button>
			<h1> Order details </h1>
			<div class="order-res">
			</div>
			`;
	body.appendChild(item_container);
	item_container.appendChild(item_window);
	item_window.appendChild(item_info);

	full_view_off_cart();

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/cart.inc.php?admin_order_info='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.order-res').innerHTML = this.responseText;
		}
	}
	xhr.send();
}
function full_view_off_cart(){
	let body = document.querySelector('.full-view-off');
	let item = document.querySelector('.full-view-container');
	body.addEventListener('click', function(){
		item.remove();
	});
}
