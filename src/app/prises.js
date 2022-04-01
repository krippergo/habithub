var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
		if(json.verification == "false") {
			document.location.href = "/authorization";
		} else {
			var coins = json.coins;
			document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
			if(json.prise_one == "yes") {
				document.getElementById("st_one").innerHTML = "Куплено";
				document.getElementById("button_box_one").innerHTML = "<div class=\"button_buy\" onclick=\"active_one()\"><div class=\"text_active\">Использовать</div></div>";
			} else {
				document.getElementById("st_one").innerHTML = "Стоимость: 900<br/>хаб-коинов";
				document.getElementById("button_box_one").innerHTML = "<div class=\"button_buy\" onclick=\"prise_one()\"><div class=\"text_buy\">Купить</div></div>";
			}
			if(json.prise_two == "yes") {
				document.getElementById("st_two").innerHTML = "Куплено";
				document.getElementById("button_box_two").innerHTML = "<div class=\"button_buy\" onclick=\"active_two()\"><div class=\"text_active\">Использовать</div></div>";
			} else {
				document.getElementById("st_two").innerHTML = "Стоимость: 900<br/>хаб-коинов";
				document.getElementById("button_box_two").innerHTML = "<div class=\"button_buy\" onclick=\"prise_two()\"><div class=\"text_buy\">Купить</div></div>";
			}
			if(json.prise_three == "yes") {
				document.getElementById("st_three").innerHTML = "Куплено";
				document.getElementById("button_box_three").innerHTML = "<div class=\"button_buy\" onclick=\"active_three()\"><div class=\"text_active\">Использовать</div></div>";
			} else {
				document.getElementById("st_three").innerHTML = "Стоимость: 500<br/>хаб-коинов";
				document.getElementById("button_box_three").innerHTML = "<div class=\"button_buy\" onclick=\"prise_three()\"><div class=\"text_buy\">Купить</div></div>";
			}
			if(json.prise_four == "yes") {
				document.getElementById("st_four").innerHTML = "Куплено";
				document.getElementById("button_box_four").innerHTML = "<div class=\"button_buy\" onclick=\"active_four()\"><div class=\"text_active\">Использовать</div></div>";
			} else {
				document.getElementById("st_four").innerHTML = "Стоимость: 500<br/>хаб-коинов";
				document.getElementById("button_box_four").innerHTML = "<div class=\"button_buy\" onclick=\"prise_four()\"><div class=\"text_buy\">Купить</div></div>";
			}
			if(json.prise_five == "yes") {
				document.getElementById("st_five").innerHTML = "Куплено";
				document.getElementById("button_box_five").innerHTML = "<div class=\"button_buy\" onclick=\"active_five()\"><div class=\"text_active\">Использовать</div></div>";
			} else {
				document.getElementById("st_five").innerHTML = "Стоимость: 630<br/>хаб-коинов";
				document.getElementById("button_box_five").innerHTML = "<div class=\"button_buy\" onclick=\"prise_five()\"><div class=\"text_buy\">Купить</div></div>";
			}
			if(json.prise_six == "yes") {
				document.getElementById("st_six").innerHTML = "Куплено";
				document.getElementById("button_box_six").innerHTML = "<div class=\"button_buy\" onclick=\"active_six()\"><div class=\"text_active\">Использовать</div></div>";
			} else {
				document.getElementById("st_six").innerHTML = "Стоимость: 750<br/>хаб-коинов";
				document.getElementById("button_box_six").innerHTML = "<div class=\"button_buy\" onclick=\"prise_six()\"><div class=\"text_buy\">Купить</div></div>";
			}
		}
	}
};
xhttp.open("GET", "/verification", true);
xhttp.send();

function menu() {
	document.location.href = "/profile";
}

function clos() {
	document.getElementById("filled_form").innerHTML = "";
}

function closd() {
	document.getElementById("filled_form").innerHTML = "";
	document.location.href = "/authorization";
}

function prise_one() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var coins = json.coins;
			if(json.give == "yes") {
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				document.getElementById("st_one").innerHTML = "Куплено";
				document.getElementById("button_box_one").innerHTML = "<div class=\"button_buy\" onclick=\"active_one()\"><div class=\"text_active\">Использовать</div></div>";
			} else if(json.give == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Тебе не  хватает хаб-коинов. Подкопи ещё</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/prise/one", true);
	xhttp.send();
}

function active_one() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.prise_one == "no") {
				document.getElementById("st_one").innerHTML = "Стоимость: 900<br/>хаб-коинов";
				document.getElementById("button_box_one").innerHTML = "<div class=\"button_buy\" onclick=\"prise_one()\"><div class=\"text_buy\">Купить</div></div>";
			}  else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/active/one", true);
	xhttp.send();
}

function prise_two() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var coins = json.coins;
			if(json.give == "yes") {
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				document.getElementById("st_two").innerHTML = "Куплено";
				document.getElementById("button_box_two").innerHTML = "<div class=\"button_buy\" onclick=\"active_two()\"><div class=\"text_active\">Использовать</div></div>";
			} else if(json.give == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Тебе не  хватает хаб-коинов. Подкопи ещё</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/prise/two", true);
	xhttp.send();
}

function active_two() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.prise_two == "no") {
				document.getElementById("st_two").innerHTML = "Стоимость: 900<br/>хаб-коинов";
				document.getElementById("button_box_two").innerHTML = "<div class=\"button_buy\" onclick=\"prise_two()\"><div class=\"text_buy\">Купить</div></div>";
			}  else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/active/two", true);
	xhttp.send();
}

function prise_three() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var coins = json.coins;
			if(json.give == "yes") {
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				document.getElementById("st_three").innerHTML = "Куплено";
				document.getElementById("button_box_three").innerHTML = "<div class=\"button_buy\" onclick=\"active_three()\"><div class=\"text_active\">Использовать</div></div>";
			} else if(json.give == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Тебе не  хватает хаб-коинов. Подкопи ещё</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/prise/three", true);
	xhttp.send();
}

function active_three() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.prise_three == "no") {
				document.getElementById("st_three").innerHTML = "Стоимость: 500<br/>хаб-коинов";
				document.getElementById("button_box_three").innerHTML = "<div class=\"button_buy\" onclick=\"prise_three()\"><div class=\"text_buy\">Купить</div></div>";
			}  else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/active/three", true);
	xhttp.send();
}

function prise_four() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var coins = json.coins;
			if(json.give == "yes") {
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				document.getElementById("st_four").innerHTML = "Куплено";
				document.getElementById("button_box_four").innerHTML = "<div class=\"button_buy\" onclick=\"active_four()\"><div class=\"text_active\">Использовать</div></div>";
			} else if(json.give == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Тебе не  хватает хаб-коинов. Подкопи ещё</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/prise/four", true);
	xhttp.send();
}

function active_four() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.prise_four == "no") {
				document.getElementById("st_four").innerHTML = "Стоимость: 500<br/>хаб-коинов";
				document.getElementById("button_box_four").innerHTML = "<div class=\"button_buy\" onclick=\"prise_four()\"><div class=\"text_buy\">Купить</div></div>";
			}  else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/active/four", true);
	xhttp.send();
}

function prise_five() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var coins = json.coins;
			if(json.give == "yes") {
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				document.getElementById("st_five").innerHTML = "Куплено";
				document.getElementById("button_box_five").innerHTML = "<div class=\"button_buy\" onclick=\"active_five()\"><div class=\"text_active\">Использовать</div></div>";
			} else if(json.give == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Тебе не  хватает хаб-коинов. Подкопи ещё</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/prise/five", true);
	xhttp.send();
}

function active_five() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.prise_five == "no") {
				document.getElementById("st_five").innerHTML = "Стоимость: 650<br/>хаб-коинов";
				document.getElementById("button_box_five").innerHTML = "<div class=\"button_buy\" onclick=\"prise_five()\"><div class=\"text_buy\">Купить</div></div>";
			}  else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/active/five", true);
	xhttp.send();
}

function prise_six() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var coins = json.coins;
			if(json.give == "yes") {
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				document.getElementById("st_six").innerHTML = "Куплено";
				document.getElementById("button_box_six").innerHTML = "<div class=\"button_buy\" onclick=\"active_six()\"><div class=\"text_active\">Использовать</div></div>";
			} else if(json.give == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Тебе не  хватает хаб-коинов. Подкопи ещё</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/prise/six", true);
	xhttp.send();
}

function active_six() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.prise_six == "no") {
				document.getElementById("st_six").innerHTML = "Стоимость: 500<br/>хаб-коинов";
				document.getElementById("button_box_six").innerHTML = "<div class=\"button_buy\" onclick=\"prise_six()\"><div class=\"text_buy\">Купить</div></div>";
			}  else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/profile/active/six", true);
	xhttp.send();
}
