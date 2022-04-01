var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
		if(json.verification == "false") {
			document.location.href = "/authorization";
		} else {
			var coins = json.coins;
			document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
		}
	}
};
xhttp.open("GET", "/verification", true);
xhttp.send();

function prise() {
	document.location.href = "/profile/prises";
}

function create_habit() {
	document.location.href = "/profile/create";
}

function view() {
	document.location.href = "/profile/view";
}

var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
		if(json.check == "yes") {
			document.getElementById("habit_box").innerHTML = "<div class=\"habit\"><div class=\"habit_name\">" + json.name + "</div><div class=\"day\">Дней выполнения: " + json.kolvo + " день</div><div class=\"day_ost\">До конца: " + json.ost + " дней</div><div class=\"view\" onclick=\"view()\"><div class=\"view_text\">Посмотреть</div></div></div><div class=\"text_creating_none\">Чтобы создать следующую привычку, вам нужно закончить формирование этой привычки.</div>";
			document.getElementById("container").innerHTML = "";
		} else if(json.check == "no") {
			document.getElementById("habit_box").innerHTML = "<div class=\"none_habit_background\"><div class=\"none_habit\">Здесь будет твоя формирующаяся привычка</div></div>";
			document.getElementById("container").innerHTML = "<div class=\"button_habit\" onclick=\"create_habit()\"><div class=\"create_habit\">НОВАЯ ПРИВЫЧКА</div></div>";
		} else {
			document.location.href = "/authorization";
		}
	}
};
xhttp2.open("GET", "/search", true);
xhttp2.send();
