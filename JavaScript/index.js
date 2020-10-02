// SESSION
var session = sessionStorage.key('email');
if(session == null){
	window.location.replace("http://localhost/book%20store/home.html");
}
else{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/user.inc.php?logged_user='+sessionStorage.getItem('email'), true);
	xhr.onload = function(){
		if(this.status == 200){
			sessionStorage.setItem('id', JSON.parse(this.responseText).id);
			sessionStorage.setItem('email', JSON.parse(this.responseText).email);
			sessionStorage.setItem('name', JSON.parse(this.responseText).name);
		}
	}
	xhr.send();
}


// POPULAR BOOKS
popular();
function popular(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?load=popular');
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.populars .item-container').innerHTML = this.responseText;
			var populars_left = document.querySelector('.populars .left'),
				populars_right = document.querySelector('.populars .right'),
				populars_item_container = document.querySelector('.populars .item-container'),
				populars_item_container_items = document.querySelectorAll('.populars .item-container .item'),
				populars_item_container_items_cnt = populars_item_container_items.length,
				populars_item_container_width = populars_item_container_items_cnt * 235,
				populars_margin_per_click = Math.floor(populars_item_container_width / populars_item_container_items_cnt);
			 	populars_margin_now = 0;
			populars_item_container.style.width = populars_item_container_width + 'px';
			carosol(populars_margin_now, populars_left, populars_right, populars_item_container, populars_item_container_items, populars_item_container_items_cnt, populars_item_container_width, populars_margin_per_click);
		}
	}
	xhr.send();
}

// BEST SELLING BOOKS
best();
function best(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?load=best_selling');
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.best-selling .item-container').innerHTML = this.responseText;
			var best_selling_left = document.querySelector('.best-selling .left'),
				best_selling_right = document.querySelector('.best-selling .right'),
				best_selling_item_container = document.querySelector('.best-selling .item-container'),
				best_selling_item_container_items = document.querySelectorAll('.best-selling .item-container .item'),
				best_selling_item_container_items_cnt = best_selling_item_container_items.length,
				best_selling_item_container_width = best_selling_item_container_items_cnt * 235,
				best_selling_margin_per_click = Math.floor(best_selling_item_container_width / best_selling_item_container_items_cnt);
				best_selling_margin_now = 0;
			best_selling_item_container.style.width = best_selling_item_container_width + 'px';
			carosol(best_selling_margin_now, best_selling_left, best_selling_right, best_selling_item_container, best_selling_item_container_items, best_selling_item_container_items_cnt, best_selling_item_container_width, best_selling_margin_per_click);
		}
	}
	xhr.send();
}

// SELLS
sell();
function sell(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?load=sell');
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.sell').innerHTML += this.responseText;
		}
	}
	xhr.send();
}
var offset = 3;
function load_more(){
	xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?load_more='+offset, true);
	xhr.onload = function(){
		if(this.status == 200){
			if(this.responseText.length <= 10){
				offset = 3;
			}
			else{
				document.querySelector('.sell').innerHTML = this.responseText;
			}
		}
		offset += 3;
	}
	xhr.send();
}

// NOVELS
novels();
function novels(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?category=Novel');
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.novels .item-container').innerHTML = this.responseText;
			var novels_left = document.querySelector('.novels .left'),
				novels_right = document.querySelector('.novels .right'),
				novels_item_container = document.querySelector('.novels .item-container'),
				novels_item_container_items = document.querySelectorAll('.novels .item-container .item'),
				novels_item_container_items_cnt = novels_item_container_items.length,
				novels_item_container_width = novels_item_container_items_cnt * 235,
				novels_margin_per_click = Math.floor(novels_item_container_width / novels_item_container_items_cnt);
				novels_margin_now = 0;
			novels_item_container.style.width = novels_item_container_width + 'px';
			carosol(novels_margin_now, novels_left, novels_right, novels_item_container, novels_item_container_items, novels_item_container_items_cnt, novels_item_container_width, novels_margin_per_click);
		}
	}
	xhr.send();
}

// COMICS
comics();
function comics(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?category=Comics');
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.comics .item-container').innerHTML = this.responseText;
			var comics_left = document.querySelector('.comics .left'),
				comics_right = document.querySelector('.comics .right'),
				comics_item_container = document.querySelector('.comics .item-container'),
				comics_item_container_items = document.querySelectorAll('.comics .item-container .item'),
				comics_item_container_items_cnt = comics_item_container_items.length,
				comics_item_container_width = comics_item_container_items_cnt * 235,
				comics_margin_per_click = Math.floor(comics_item_container_width / comics_item_container_items_cnt);
				comics_margin_now = 0;
			comics_item_container.style.width = comics_item_container_width + 'px';
			carosol(comics_margin_now, comics_left, comics_right, comics_item_container, comics_item_container_items, comics_item_container_items_cnt, comics_item_container_width, comics_margin_per_click);
		}
	}
	xhr.send();
}



// LIFE STYLE
life_style();
function life_style(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?category=Life style');
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.life-style .item-container').innerHTML = this.responseText;
			var life_style_left = document.querySelector('.life-style .left'),
				life_style_right = document.querySelector('.life-style .right'),
				life_style_item_container = document.querySelector('.life-style .item-container'),
				life_style_item_container_items = document.querySelectorAll('.life-style .item-container .item'),
				life_style_item_container_items_cnt = life_style_item_container_items.length,
				life_style_item_container_width = life_style_item_container_items_cnt * 235,
				life_style_margin_per_click = Math.floor(life_style_item_container_width / life_style_item_container_items_cnt);
				life_style_margin_now = 0;
			life_style_item_container.style.width = life_style_item_container_width + 'px';
			carosol(life_style_margin_now, life_style_left, life_style_right, life_style_item_container, life_style_item_container_items, life_style_item_container_items_cnt, life_style_item_container_width,life_style_margin_per_click);
		}
	}
	xhr.send();
}


function carosol(margin_now, left, right, item_container, item_container_items, item_container_items_cnt, item_container_width, margin_per_click){
	right.addEventListener('mousedown', function(){
		if(margin_now > -item_container_width + margin_per_click){
			margin_now -= margin_per_click;
			item_container.style.marginLeft = margin_now + "px";
			item_container.style.transition = "1s";
		}
	});
	left.addEventListener('mousedown', function(){
		if(margin_now < 0){
			margin_now += margin_per_click;
			item_container.style.marginLeft = margin_now + "px";
			item_container.style.transition = "1s";
		}
		else{
			margin_now = 0;
		}
	});
}


// ITEM INFO | ADD TO CART | ORDER
function full_view(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?book='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			var id = JSON.parse(this.responseText).id;
			var name = JSON.parse(this.responseText).name;
			var description = JSON.parse(this.responseText).description;
			var rating = JSON.parse(this.responseText).rating;
			var price = JSON.parse(this.responseText).price;
			var category = JSON.parse(this.responseText).category;
			var image = JSON.parse(this.responseText).image;
			var stock = JSON.parse(this.responseText).stock;

			let body = document.body;
			var item_container = document.createElement('div');
			var item_window = document.createElement('div');
			var item_info = document.createElement('div');
			item_window.setAttribute('class', 'full-view-about');
			item_info.setAttribute('class', 'about-text');
			item_container.setAttribute('class', 'full-view-container');

			item_info.innerHTML =
					`<button class="full-view-off"><i class="fas fa-times"></i></button>
					<h1 class="window-heading"> Book </h1>
					<div class="flex">
						<div class="flex1">
							<img src="assets/book_covers/${image}">
						</div>
						<div class="flex2">
							<p id="msg"></p>
							<h1><i class="fas fa-book"></i> ${name} </h1>
							<p> ${description} </p>
							<div class="rating" style="display: inline;">
								<i id="1" class="far fa-star"></i>
								<i id="2" class="far fa-star"></i>
								<i id="3" class="far fa-star"></i>
								<i id="4" class="far fa-star"></i>
								<i id="5" class="far fa-star"></i>
							</div>
							<input type="hidden" name="name" class="rating_holder" value="${rating}">
							<h2> <i class="fas fa-dollar-sign"></i> 120  </h2>
							<h4 class="in-stock"> <i class="fas fa-cubes"> </i></h4>
							<h4> <i class="fas fa-tag"></i> Life style </h4>
							<button onclick="add_to_cart(${id})"> Add to cart </button>
						</div>
					</div>`;
			body.appendChild(item_container);
			item_container.appendChild(item_window);
			item_window.appendChild(item_info);

			if(stock == 1){
				document.querySelector('.in-stock').innerHTML += ' In stock';
			}
			else{
				document.querySelector('.in-stock').innerHTML += ' Out of stock';
			}

			rating_start();
			full_view_off();
		}
	}
	xhr.send();
}
function rating_start(){
	var starts = document.querySelectorAll('.rating i');
	var to = Math.floor(document.querySelector('.rating_holder').value);
	for(var j=0; j<to; j++){
	    starts[j].className = starts[j].className.replace('far', 'fas');
	}
}
function full_view_off(){
	let body = document.querySelector('.full-view-off');
	let item = document.querySelector('.full-view-container');
	body.addEventListener('click', function(){
		item.remove();
		document.querySelector('.full-view-container').remove();
	});
}
function add_to_cart(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/cart.inc.php?book='+id+'&user='+sessionStorage.getItem('id'), true);
	xhr.onload = function(){
		if(this.status == 200){
			console.log(this.responseText);
			if(this.responseText == "Added"){
				document.querySelector("#msg").innerHTML = "Added to cart";
				document.querySelector("#msg").style.color = "#51db53";
				document.querySelector("#msg").style.fontSize = "13px";
				document.querySelector("#msg").style.margin = "2px";
			}
			else{
				document.querySelector("#msg").innerHTML = "Item already exist in your cart";
				document.querySelector("#msg").style.color = "#f74a4a";
				document.querySelector("#msg").style.fontSize = "13px";
				document.querySelector("#msg").style.margin = "2px";
			}
		}
	}
	xhr.send();
}
document.querySelector('.hot-line').addEventListener('click', function(){
	window.open('tel:01863987793');
});

// FILTER
var filter = document.querySelector('#filter');
filter.style.cursor = "pointer";
filter.addEventListener('click', function(){
	let body = document.body;

	var item_container = document.createElement('div');
	var item_window = document.createElement('div');
	var item_info = document.createElement('div');

	item_window.setAttribute('class', 'full-view-filter');
	item_info.setAttribute('class', 'about-text');
	item_container.setAttribute('class', 'full-view-container');

	item_info.innerHTML = `
			<button class="full-view-off-filter"><i class="fas fa-times"></i></button>
			<h1> Filter </h1>
			<input type="text" id="filter-input" placeholder="Book name"> <br>
			<select id="filter-select">
				<option value="None"> None</option>
				<option value="Novel"> Novels</option>
				<option value="Comics"> Comics</option>
				<option value="Life style"> Life style </option>
			</select> <br>
			<button type="button" id="filter-btn" onclick="filter_book()"> Filter </button> <br>
			<hr style="margin-bottom: 10px;"> <h3 style="margin-bottom: 10px;"> Results </h3>
			<div id="filter-res" style="display: grid;
										grid-template-columns: repeat(2, 1fr);
										grid-gap: 10px;
										grid-auto-rows: minmax(140px, auto);">
			</div>
			`;
	body.appendChild(item_container);
	item_container.appendChild(item_window);
	item_window.appendChild(item_info);

	full_view_off_filter();
});

function full_view_off_filter(){
	let body = document.querySelector('.full-view-off-filter');
	let item = document.querySelector('.full-view-container');
	body.addEventListener('click', function(){
		item.remove();
	});
}
function filter_book(){
	var name = document.querySelector('#filter-input').value,
		select = document.querySelector('#filter-select').value;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/book.inc.php?book_name='+name+'&book_category='+select, true);
	xhr.onload = function(){
		if(this.status == 200){
			if(this.responseText == ""){
				document.querySelector("#filter-res").innerHTML = `<p style="color: lightgray;"> No results found </p>`;
			}
			else{
				document.querySelector("#filter-res").innerHTML = this.responseText;
			}
		}
	}
	xhr.send();
}

// PROFILE
var profile = document.querySelector('#profile');
profile.style.cursor = "pointer";
profile.addEventListener('click', function(){
	var user_id = sessionStorage.getItem('id');
	var user_email = sessionStorage.getItem('email');
	let body = document.body;
	var item_container = document.createElement('div');
	var item_window = document.createElement('div');
	var item_info = document.createElement('div');
	item_container.setAttribute('class', 'full-view-container');
	item_window.setAttribute('class', 'full-view-profile');
	item_info.setAttribute('class', 'about-text');
	item_info.innerHTML = `
			<button class="full-view-off-profile"><i class="fas fa-times"></i></button>
			<h1> Your info </h1>
			<p class="update-msg"></p>
			<form id="profile-update-form">
			<input type="hidden" id="profile-input" name="id" value="${user_id}">
			<input type="hidden" id="profile-input" name="user-email" value="${user_email}">
			<input type="text" class="name-update" id="profile-input" name="update-name" placeholder="Username"> <br>
			<input type="text" class="email-update" id="profile-input" name="update-email" placeholder="Email"> <br>
			<input type="text" id="profile-input"  name="update-password" placeholder="Password"> <br>
			</form>
			<button type="button" id="profile-btn" onclick="profile_update(${user_id})"> Update </button> <br>
			<hr style="margin-bottom: 10px;">
			<div id="profile-res" style="">
			</div>
			`;
	body.appendChild(item_container);
	item_container.appendChild(item_window);
	item_window.appendChild(item_info);

	full_view_off_profile();
	load_profile(user_id);
});

function full_view_off_profile(){
	let body = document.querySelector('.full-view-off-profile');
	let item_container = document.querySelector('.full-view-container');
	body.addEventListener('click', function(){
		item_container.remove();
	});
}
function profile_update(id){
	var xhr = new XMLHttpRequest();
	if(document.querySelector('.email-update').value == ""){
		document.querySelector('.email-update').value = sessionStorage.getItem('email');
	}
	if(document.querySelector('.name-update').value == ""){
		document.querySelector('.name-update').value = sessionStorage.getItem('name');
	}
	var profile_form = document.querySelector('#profile-update-form');
	var data = new FormData(profile_form);
	xhr.open('POST', 'includes/user.inc.php', true);
	xhr.onload = function(){
		if(this.status == 200){
			if(this.responseText == "Email already in use"){
				document.querySelector('.update-msg').innerHTML = "Email already in use";
				document.querySelector(".update-msg").style.color = "#f74a4a";
				document.querySelector(".update-msg").style.fontSize = "13px";
				document.querySelector(".update-msg").style.fontWeight = "bold";
			} else {
				document.querySelector('.update-msg').innerHTML = "Information updated";
				document.querySelector(".update-msg").style.color = "#51db53";
				document.querySelector(".update-msg").style.fontSize = "13px";
				document.querySelector(".update-msg").style.fontWeight = "bold";
			}
			load_profile(id);
			console.log(this.responseText);
		}
	}
	xhr.send(data);
}
function load_profile(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/user.inc.php?profile_id='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			var name = JSON.parse(this.responseText).name;
			var email = JSON.parse(this.responseText).email;
			document.querySelector('#profile-res').innerHTML = `
				<h3 style="color: #40f570;"> <i style="font-size: 50px;" class="fas fa-user"></i> ${name} </h3>
				<h3 style="color: gray; margin-top: 10px; font-weight: lighter; font-size: 13px;"> <i class="fas fa-envelope"></i>  ${email} </h3>
			`;
		}
	}
	xhr.send();
}

// PROFILE
var profile = document.querySelector('#cart');
profile.style.cursor = "pointer";
profile.addEventListener('click', function(){
	var user_id = sessionStorage.getItem('id');

	let body = document.body;

	var item_container = document.createElement('div');
	var item_window = document.createElement('div');
	var item_info = document.createElement('div');
	item_window.setAttribute('class', 'full-view-cart');
	item_info.setAttribute('class', 'about-text');
	item_container.setAttribute('class', 'full-view-container');
	item_info.innerHTML = `
			<button class="full-view-off-cart"><i class="fas fa-times"></i></button>
			<h1> Cart </h1>
			<p class="cart-msg"></p>
			<div id="cart-grid">
				<div class="cart-res">
				</div>
			</div>
			`;
	body.appendChild(item_container);
	item_container.appendChild(item_window);
	item_window.appendChild(item_info);

	full_view_off_cart();
	get_cart(user_id);
});

function full_view_off_cart(){
	let body = document.querySelector('.full-view-off-cart');
	let item = document.querySelector('.full-view-container');
	body.addEventListener('click', function(){
		item.remove();
	});
}
function get_cart(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/cart.inc.php?get_cart='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			if(this.responseText.length == ""){
				document.querySelector('.cart-res').innerHTML = `<h1> <i style="color:#40f570;" class="fas fa-cart-arrow-down"></i> </h1>`;
				document.querySelector('.cart-res').innerHTML = `
				<div class="empty-cart">
					<img src="assets/display_images/emptycart.png" style="height: 250px; width: 270px;">
					<h2 style="color: gray; text-align: center;"> Empty cart </h2>
				</div>
				`;
			}
			else{
				document.querySelector('.cart-res').innerHTML += this.responseText;
				document.querySelector('.cart-res').innerHTML += `<button class="checkout-btn" onclick="checkout(${id})"> checkout </button>`;
			}
		}
	}
	xhr.send();
}
function checkout(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/cart.inc.php?get_cart_info='+id, true);
	xhr.onload = function(){
		document.querySelector('.about-text').style.height = '440px';
		document.querySelector('.cart-res').style.height = '300px';
		document.querySelector('#cart-grid').style.height = '300px';
		document.querySelector('.full-view-cart').style.height = '480px';
		document.querySelector('.full-view-cart').style.overflow = 'hidden';
		if(this.status == 200){
			var total_item = JSON.parse(this.responseText).data.total_item;
			var total_price = JSON.parse(this.responseText).data.total_price;
			document.querySelector('.full-view-cart h1').innerHTML = "Checkout";
			document.querySelector('.full-view-cart .cart-res').innerHTML = `
				<h3> Number of item: ${total_item} </h3>
				<h3 style="margin-bottom: 15px;"> Total price: $ ${total_price} </h3>
				<form action="includes/cart.inc.php" method="post">
					<input style="width: 96%;" name="user_id" type="hidden" value="${id}">
					<input style="width: 96%;" name="address" type="text" placeholder="Address..."><br>
					<input style="width: 96%;" name="city" type="text" placeholder="City..."><br>
					<input style="width: 96%;" name="postal_code" type="text" placeholder="Postal code..."><br>
					<input style="width: 96%;" name="phone" type="text" placeholder="Phone..."><br>
					<button style="padding: 10px; background-color:#4aff68; color: white;
					font-size: 20px; border: none; border-radius: 3px; cursor: pointer; margin-top: 10px;"
					class="continue-order"> Continue </button>
				</form>
			`;
		}
	}
	xhr.send();
}
function delete_cart(id){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'includes/cart.inc.php?delete_cart='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			document.querySelector('.cart-res').innerHTML = "";
			get_cart(sessionStorage.getItem('id'));
		}
	}
	xhr.send();
}
