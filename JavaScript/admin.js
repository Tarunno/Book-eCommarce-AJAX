total_book();
total_novel();
total_comics();
total_life_style();
total_popular();
total_best();
total_sells();
total_user();
total_order();

function total_book(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?count_all');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-book .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_novel(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?novel');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-novel .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_comics(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?comics');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-comics .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_life_style(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?life_style');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-life-style .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_sells(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?count_key=sell');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-sells .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_popular(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?count_key=popular');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-popular .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_best(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?count_key=best_selling');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-best .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function total_user(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/user.inc.php?count_user=user');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-user .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}

function count(i, limit, element){
	setInterval(counter, 100);
	function counter(){
		element.innerHTML = i;
		if(i.toString() == limit){
			return 0;
		} else {
			i++;
		}
	}
}

function total_order(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/cart.inc.php?count_order=orders');
	xhr.onload = function(){
		if(this.status == 200){
			let element = document.querySelector('.total-order .value');
			count(0, this.responseText, element);
		}
	}
	xhr.send();
}
