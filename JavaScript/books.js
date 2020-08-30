load_data();

function load_data(){
	xhr = new XMLHttpRequest();
    xhr.open('GET', '../includes/book.inc.php?load_all=true', true);
    xhr.onload = function(){
        if(this.status == 200){
            document.querySelector('.table_res').innerHTML = this.responseText;
        }
    }
    xhr.onerror = function(){
        console.log("ERROR...");
    }
    xhr.send();
}


function update(id){
	xhr = new XMLHttpRequest();
    xhr.open('GET', '../includes/book.inc.php?book='+id, true);
    xhr.onload = function(){
        if(this.status == 200){
            price = JSON.parse(this.responseText).price;
			quantity = JSON.parse(this.responseText).quantity;
			rating = JSON.parse(this.responseText).rating;
        }
    }
    xhr.onerror = function(){
        console.log("ERROR...");
    }
    xhr.send();

	let body = document.body;
    let container = document.createElement('div');
    container.setAttribute('class', 'edit-window');

    let cencel_btn = document.createElement('button');
    cencel_btn.setAttribute('class', 'cencel-btn');
    cencel_btn.innerHTML = '<i style="font-size: 20px;" class="fas fa-times"></i>';
    cencel_btn.setAttribute('onclick', 'close_window()');
    container.appendChild(cencel_btn);

    let form = document.createElement('form');
    form.innerHTML = `
        <div class="form-group">
			<img id="update-image" style=" float: left; height: 270px; width: 190px; border-radius: 5px; margin-right: 20px;" src="">
			<h2 id="update-name" style="margin-bottom: 10px;"><i class="fas fa-book"> </i> </h2>
              <p>Price</p>
			  <input name="update-id" type="hidden" class="input" id="update-id" ><br>
              <input name="update-price" type="text" class="input" id="update-price"><br>
			  <p>Rating</p>
			  <select name="update-rating" id="update-rating">
				  <option value="1">1</option>
				  <option value="2">2</option>
				  <option value="3">3</option>
				  <option value="4">4</option>
				  <option value="5">5</option>
			 </select><br>
			 <p>Quantity</p><br>
			 <input name="update-quantity" type="text" class="input" id="update-quantity" >
        </div>
        <button id="update-price" name="update-submit" type="submit" class="update-btn">Update</button>
    `;
    form.setAttribute('class', 'edit-form');
    container.appendChild(form);
    body.appendChild(container);

	xhr = new XMLHttpRequest();
    xhr.open('GET', '../includes/book.inc.php?book='+id, true);
    xhr.onload = function(){
        if(this.status == 200){
			document.querySelector('#update-id').value = JSON.parse(this.responseText).id;
            document.querySelector('#update-price').value = JSON.parse(this.responseText).price;
			document.querySelector('#update-quantity').value = JSON.parse(this.responseText).quantity;
			document.querySelector('#update-rating').value = JSON.parse(this.responseText).rating;
			document.querySelector('#update-name').innerHTML += JSON.parse(this.responseText).name;
			document.querySelector('#update-image').src ="../assets/book_covers/" + JSON.parse(this.responseText).image;
        }
    }
    xhr.onerror = function(){
        console.log("ERROR...");
    }
    xhr.send();

	var update_form = document.querySelector('.edit-form');
	update_form.addEventListener('submit', update_data);

	function update_data(e){
		e.preventDefault();
		var data = new FormData(update_form);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "../includes/book.inc.php");
		xhr.onload = function(){
			if(this.status == 200){
				load_data();
			}
		}
		xhr.send(data);
	}
}
function close_window(){
    let container = document.querySelectorAll('.edit-window');
	container.forEach((item, i) => {
		document.body.removeChild(item);
	});
}

function stock(id){
	xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?stock='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			load_data();
		}
	}
	xhr.send();
}

function sell(id){
	xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?sell='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			load_data();
		}
	}
	xhr.send();
}

function popular(id){
	xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?popular='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			load_data();
		}
	}
	xhr.send();
}

function best_selling(id){
	xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?best_selling='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			load_data();
		}
	}
	xhr.send();
}

function delete_book(id){
	xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?delete='+id, true);
	xhr.onload = function(){
		if(this.status == 200){
			load_data();
		}
	}
	xhr.send();
}
function delete_all(){
	xhr = new XMLHttpRequest();
	xhr.open('GET', '../includes/book.inc.php?delete_all=true', true);
	xhr.onload = function(){
		if(this.status == 200){
			load_data();
		}
	}
	xhr.send();
}

var add_book_form = document.querySelector('.add-book-form');
add_book_form.addEventListener('submit', add_book);

function add_book(e){
	e.preventDefault();
	var data = new FormData(add_book_form);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "../includes/book.inc.php");
	xhr.onload = function(){
		if(this.status == 200){
			if(this.responseText != "Book added successfully"){
				document.querySelector('.manage form').style.border = "2px solid #ff1f2e";
				document.querySelector('.error').innerHTML = this.responseText;
				document.querySelector('.success').innerHTML = "";
			}
			else{
				document.querySelector('.manage form').style.border = "2px solid #28f735";
				document.querySelector('.success').innerHTML = this.responseText;
				document.querySelector('.error').innerHTML = "";
				load_data();
			}
		}
	}
	xhr.send(data);
}

var book_search = document.querySelector('.book-search-btn');
book_search.addEventListener('click', search_book);

function search_book(){
	var key_word = document.querySelector('.book-search').value;
	if(key_word == ""){
		load_data();
	}
	else{
		xhr = new XMLHttpRequest();
	    xhr.open('GET', '../includes/book.inc.php?key_word='+key_word, true);
	    xhr.onload = function(){
	        if(this.status == 200){
	            document.querySelector('.table_res').innerHTML = this.responseText;
	        }
	    }
	    xhr.send();
	}
}
