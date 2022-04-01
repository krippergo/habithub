var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
		if(json.verification == "false") {
			document.location.href = "/authorization";
		} else {
			document.getElementById("id").value = json.id;
		}
	}
};
xhttp.open("GET", "/verification", true);
xhttp.send();


function exit() {
	document.location.href = "/profile";
}

function clos() {
	document.getElementById("filled_form").innerHTML = "";
}

function creating() {
	var name = document.getElementById("name").value;
	var answerone = document.getElementById("answerone").value;
	var answertwo = document.getElementById("answertwo").value;
	if (name != "") {
		if (answerone != "") {
			if (answertwo != "") {
				document.getElementById("filled_form").innerHTML = "";
				var form = document.getElementById("form");
				form.submit();
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Ответе на второй вопрос</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		} else {
			document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Ответе на первый вопрос</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
		}
	} else {
		document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Введите название привычки</div><div class=\"button_close\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
	}
}
