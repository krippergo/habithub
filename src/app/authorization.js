function menu() {
	document.location.href = "/";
}

function sign_up() {
	document.location.href = "/registration";
}

function clos() {
	document.getElementById("filled_form").innerHTML = "";
}

function closes() {
	document.location.href = "/authorization";
}

function verification() {
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
	if (login != "") {
		if (password != "") {
			var form = document.getElementById("form");
			form.submit();
		} else {
			document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_log_pass\">Введите пароль</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
		}
	} else {
		document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_log_pass\">Введите логин</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
	}
}
