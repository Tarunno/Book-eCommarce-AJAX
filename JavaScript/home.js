// SESSION
sessionStorage.clear();


/* SLIDER */
var background_image = document.querySelector('.showcase'),
	background_width = background_image.offsetWidth,
	window_width = window.innerWidth;

background_image.style.transition = '2s';
let margin = 0;

function slide(){
	margin -= window_width;
	if(margin <= -background_width){
		background_image.style.transition = "none";
		margin = 0;
	}
	else{
		background_image.style.transition = '2s';
	}
	background_image.style.marginLeft = margin + 'px';
}
setInterval(slide, 5000);


/* INFO VIEW */
var about = document.querySelector('.about');
about.addEventListener('click', view_about);
var about_flag = false;

function view_about(){
	if(contact_flag == true){
		var body = document.body;
		body.removeChild(contact_window);
		body.removeChild(contact_text);
		contact_flag = false;
	}
	if(about_flag == true){
		var about_window = document.querySelector('.full-view-about')
		about_window.classList.remove('full-view-about');
		about_window.classList.add('full-hide-about');
		var about_text = document.querySelector('.about-text')
		about_text.classList.remove('about-text');
		about_text.classList.add('about-text-hide');
		var body = document.body;
		about_window.addEventListener('animationend', function(){
			body.removeChild(about_window);
			body.removeChild(about_text);
		});
		about_flag = false;
	}
	else{
		var body = document.body;
		var about_window = document.createElement('div');
		var about_text = document.createElement('div');
		about_window.setAttribute('class', 'full-view-about');
		about_text.innerHTML = `
			<h1> ABOUT </h1>
			<p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
				 printer took a galley of
				 type and scrambled it to make a type specimen book. It has survived not only
				 five centuries.
			</p>
		`;
		about_text.setAttribute('class', 'about-text');
		body.appendChild(about_window);
		body.appendChild(about_text);
		about_flag = true;
	}
}

/* CONTACT VIEW */
var contact = document.querySelector('.contact');
contact.addEventListener('click', view_contact);
var contact_flag = false;


function view_contact(){
	if(about_flag == true){
		var body = document.body;
		body.removeChild(about_window);
		body.removeChild(about_text);
		about_flag = false;
	}
	if(contact_flag == true){
		var contact_window = document.querySelector('.full-view-about')
		contact_window.classList.remove('full-view-about');
		contact_window.classList.add('full-hide-about');
		var contact_text = document.querySelector('.about-text')
		contact_text.classList.remove('about-text');
		contact_text.classList.add('about-text-hide');
		var body = document.body;
		contact_window.addEventListener('animationend', function(){
			body.removeChild(contact_window);
			body.removeChild(contact_text);
		});
		contact_flag = false;
	}
	else{
		var body = document.body;
		var contact_window = document.createElement('div');
		var contact_text = document.createElement('div');
		contact_window.setAttribute('class', 'full-view-about');
		contact_text.innerHTML = `
			<h1> CONTACT </h1>
			<ul>
				<li> <i class="far fa-envelope"></i> Email: tarunno@fakmail.com </li>
				<li> <i class="fas fa-mobile-alt"></i>  Phone: 0182367523 </li>
				<li> <i class="fab fa-facebook-f"></i> Facebook: tarunno.facebook</li>
				<li> <i class="fab fa-twitter"></i> Twitter: @tarunno</li>
			</ul>
		`;
		contact_text.setAttribute('class', 'about-text');
		body.appendChild(contact_window);
		body.appendChild(contact_text);
		contact_flag = true;
	}
}

/* SHOP VIEW */
var contact = document.querySelector('.shop');
contact.addEventListener('click', view_shop);
var shop_flag = false;


function view_shop(){
	if(about_flag == true){
		var body = document.body;
		body.removeChild(about_window);
		body.removeChild(about_text);
		about_flag = false;
	}
	if(shop_flag == true){
		var shop_window = document.querySelector('.full-view-about')
		shop_window.classList.remove('full-view-about');
		shop_window.classList.add('full-hide-about');
		var shop_text = document.querySelector('.about-text')
		shop_text.classList.remove('about-text');
		shop_text.classList.add('about-text-hide');
		var body = document.body;
		shop_window.addEventListener('animationend', function(){
			body.removeChild(shop_window);
			body.removeChild(shop_text);
		});
		shop_flag = false;
	}
	else{
		var body = document.body;
		var shop_window = document.createElement('div');
		var shop_text = document.createElement('div');
		shop_window.setAttribute('class', 'full-view-about');
		shop_text.innerHTML = `
			<h1> SHOP </h1>
			<h4 style="
				font-weight: lighter;
				margin-bottom: 10px;
				cursor: pointer;"
				>
				<span class="login" onclick="swap_login()">Login </span> | <span class="signup" onclick="swap_signup()"> Signup</span> </h4>
			<form id="form" class="login-form">
				<p id="error" style="
					font-size: 12px;
					font-weight: bold;
					display: inline;
					color:#fc032c;">
				</p>
				<input style="display: block;" type="email" name="login-email" placeholder="Email" id="login-email">
				<input style="display: block;" type="password" name="login-password" placeholder="Password">
				<button type="submit"> Login </button>
			</form>
			<form id="form" class="signup-form">
				<p id="success2" style="
					font-size: 12px;
					font-weight: bold;
					display: inline;
					color: #167506;">
					</p>
				<p id="error2" style="
					font-size: 12px;
					font-weight: bold;
					display: inline;
					color:#fc032c;">
				</p>
				<input style="display: block;" type="text" name="name" placeholder="Name">
				<input style="display: block;" type="email" name="email" placeholder="Email">
				<input style="display: block;" type="password" name="password" placeholder="Password">
				<button type="submit"> Signup </button>
			</form>
		`;
		shop_text.setAttribute('class', 'about-text');
		body.appendChild(shop_window);
		body.appendChild(shop_text);
		shop_flag = true;

		// login from initializarion
		swap_login();
	}
}


// LOGIN - SIGNUP

function swap_login(){
	document.querySelector('.login-form').style.display = "block";
	document.querySelector('.signup-form').style.display = "none";

	// LOGIN
	var login_form = document.querySelector('.login-form');
	login_form.addEventListener('submit', login);

	function login(e){
	    e.preventDefault();
		xhr = new XMLHttpRequest();
	    let data = new FormData(login_form);
	    xhr.open('POST', 'includes/user.inc.php', true);
	    xhr.onload = function(){
	        if(this.status == 200){
	            if(this.responseText == "This user doesn't exists" || this.responseText == "Empty feild" || this.responseText == "Invalid email or password"){
	                document.querySelector('#error').innerHTML = this.responseText;
	            }
	            else if(this.responseText == "You logged in"){
	                document.querySelector('#error').innerHTML = "";
					var login_email = document.querySelector('#login-email').value;
					sessionStorage.setItem('email', login_email);
					window.location.replace("http://localhost/book%20store/index.html");
	            }
	        }
	    }
	    xhr.send(data);
	}
}
function swap_signup(){
	document.querySelector('.login-form').style.display = "none";
	document.querySelector('.signup-form').style.display = "block";

	// REGISTARTION
	var signup_form = document.querySelector('.signup-form');
	signup_form.addEventListener('submit', add_user);

	function add_user(e){
	    e.preventDefault();
		xhr = new XMLHttpRequest();
	    let data = new FormData(signup_form);
	    xhr.open('POST', 'includes/user.inc.php', true);
	    xhr.onload = function(){
	        if(this.status == 200){
	            if(this.responseText == "This user already exists" || this.responseText == "Empty feild"){
	                document.querySelector('#error2').innerHTML = this.responseText;
	                document.querySelector('#success2').innerHTML = "";
	            }
	            else{
	                document.querySelector('#error2').innerHTML = "";
	                document.querySelector('#success2').innerHTML = this.responseText;
	            }
	        }
	    }
	    xhr.send(data);
	}
}
