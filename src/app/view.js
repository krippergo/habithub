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

function profile() {
	document.location.href = "/profile";
}

function xx() {
	var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.check == "yes") {
				document.getElementById("habit_box").innerHTML = "<div class=\"habit_name\">" + json.name + ":</div><div class=\"day\">Дней выполнения: " + json.kolvo + " день</div><div class=\"day_ost\">До конца: " + json.ost + " дней</div><div class=\"podsc\">Подсказка:</div><div class=\"podscazka\">Выполняйте действие каждый день и отмечайте дни в счётчике, чтобы получить награду!</div><div class=\"question\">1. Зачем вам нужна эта привычка?</div><div class=\"answer\">" + json.answer_one + "</div><div class=\"question2\">2. Что произойдёт в вашей жизни, когда она сформируется?</div><div class=\"answer2\">" + json.answer_two + "</div><div class=\"citata\">\"Привычка - вторая натура\". Аристотель</div><div class=\"profile\" onclick=\"profile()\"><div class=\"profile_text\">Закончить просмотр</div></div>";
				var d_1 = json.d1;
				if(d_1 == 0) {
					document.getElementById("d1").style.background = "#A7A9DC";
				} else {
					document.getElementById("d1").style.background = "#767ACF";
					document.getElementById("d1").removeAttribute('onclick');
				}
				var d_2 = json.d2;
				if(d_2 == 0) {
					document.getElementById("d2").style.background = "#A7A9DC";
				} else {
					document.getElementById("d2").style.background = "#767ACF";
					document.getElementById("d2").removeAttribute('onclick');
				}
				var d_3 = json.d3;
				if(d_3 == 0) {
					document.getElementById("d3").style.background = "#A7A9DC";
				} else {
					document.getElementById("d3").style.background = "#767ACF";
					document.getElementById("d3").removeAttribute('onclick');
				}
				var d_4 = json.d4;
				if(d_4 == 0) {
					document.getElementById("d4").style.background = "#A7A9DC";
				} else {
					document.getElementById("d4").style.background = "#767ACF";
					document.getElementById("d4").removeAttribute('onclick');
				}
				var d_5 = json.d5;
				if(d_5 == 0) {
					document.getElementById("d5").style.background = "#A7A9DC";
				} else {
					document.getElementById("d5").style.background = "#767ACF";
					document.getElementById("d5").removeAttribute('onclick');
				}
				var d_6 = json.d6;
				if(d_6 == 0) {
					document.getElementById("d6").style.background = "#A7A9DC";
				} else {
					document.getElementById("d6").style.background = "#767ACF";
					document.getElementById("d6").removeAttribute('onclick');
				}
				var d_7 = json.d7;
				if(d_7 == 0) {
					document.getElementById("d7").style.background = "#A7A9DC";
				} else {
					document.getElementById("d7").style.background = "#767ACF";
					document.getElementById("d7").removeAttribute('onclick');
				}
				var d_8 = json.d8;
				if(d_8 == 0) {
					document.getElementById("d8").style.background = "#A7A9DC";
				} else {
					document.getElementById("d8").style.background = "#767ACF";
					document.getElementById("d8").removeAttribute('onclick');
				}
				var d_9 = json.d9;
				if(d_9 == 0) {
					document.getElementById("d9").style.background = "#A7A9DC";
				} else {
					document.getElementById("d9").style.background = "#767ACF";
					document.getElementById("d9").removeAttribute('onclick');
				}
				var d_10 = json.d10;
				if(d_10 == 0) {
					document.getElementById("d10").style.background = "#A7A9DC";
				} else {
					document.getElementById("d10").style.background = "#767ACF";
					document.getElementById("d10").removeAttribute('onclick');
				}
				var d_11 = json.d11;
				if(d_11 == 0) {
					document.getElementById("d11").style.background = "#A7A9DC";
				} else {
					document.getElementById("d11").style.background = "#767ACF";
					document.getElementById("d11").removeAttribute('onclick');
				}
				var d_12 = json.d12;
				if(d_12 == 0) {
					document.getElementById("d12").style.background = "#A7A9DC";
				} else {
					document.getElementById("d12").style.background = "#767ACF";
					document.getElementById("d12").removeAttribute('onclick');
				}
				var d_13 = json.d13;
				if(d_13 == 0) {
					document.getElementById("d13").style.background = "#A7A9DC";
				} else {
					document.getElementById("d13").style.background = "#767ACF";
					document.getElementById("d13").removeAttribute('onclick');
				}
				var d_14 = json.d14;
				if(d_14 == 0) {
					document.getElementById("d14").style.background = "#A7A9DC";
				} else {
					document.getElementById("d14").style.background = "#767ACF";
					document.getElementById("d14").removeAttribute('onclick');
				}
				var d_15 = json.d15;
				if(d_15 == 0) {
					document.getElementById("d15").style.background = "#A7A9DC";
				} else {
					document.getElementById("d15").style.background = "#767ACF";
					document.getElementById("d15").removeAttribute('onclick');
				}
				var d_16 = json.d16;
				if(d_16 == 0) {
					document.getElementById("d16").style.background = "#A7A9DC";
				} else {
					document.getElementById("d16").style.background = "#767ACF";
					document.getElementById("d16").removeAttribute('onclick');
				}
				var d_17 = json.d17;
				if(d_17 == 0) {
					document.getElementById("d17").style.background = "#A7A9DC";
				} else {
					document.getElementById("d17").style.background = "#767ACF";
					document.getElementById("d17").removeAttribute('onclick');
				}
				var d_18 = json.d18;
				if(d_18 == 0) {
					document.getElementById("d18").style.background = "#A7A9DC";
				} else {
					document.getElementById("d18").style.background = "#767ACF";
					document.getElementById("d18").removeAttribute('onclick');
				}
				var d_19 = json.d19;
				if(d_19 == 0) {
					document.getElementById("d19").style.background = "#A7A9DC";
				} else {
					document.getElementById("d19").style.background = "#767ACF";
					document.getElementById("d19").removeAttribute('onclick');
				}
				var d_20 = json.d20;
				if(d_20 == 0) {
					document.getElementById("d20").style.background = "#A7A9DC";
				} else {
					document.getElementById("d20").style.background = "#767ACF";
					document.getElementById("d20").removeAttribute('onclick');
				}
				var d_21 = json.d21;
				if(d_21 == 0) {
					document.getElementById("d21").style.background = "#A7A9DC";
				} else {
					document.getElementById("d21").style.background = "#767ACF";
					document.getElementById("d21").removeAttribute('onclick');
				}
			} else if(json.check == "no") {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Ваша привычка сформирована! Если это не так, создайте её повторно</div><div class=\"button_close\" onclick=\"profile()\"><div class=\"text_close\">Хорошо</div></div></div>";
			} else {
				document.location.href = "/authorization";
			}
		}
	};
	xhttp2.open("GET", "/search", true);
	xhttp2.send();
}
xx();

function clos() {
	document.getElementById("filled_form").innerHTML = "";
}

function closd() {
	document.getElementById("filled_form").innerHTML = "";
	document.location.href = "/authorization";
}

var d_1 = 0;
function d1() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d1 == 1) {
					document.getElementById("d1").style.background = "#767ACF";
				}
				if(d_1 == 0) {
					d_1 = 1;
					document.getElementById("d1").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d1", true);
	xhttp.send();
}
var d_2 = 0;
function d2() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d2 == 1) {
					document.getElementById("d2").style.background = "#767ACF";
				}
				if(d_2 == 0) {
					d_2 = 1;
					document.getElementById("d2").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d2", true);
	xhttp.send();
}
var d_3 = 0;
function d3() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d3 == 1) {
					document.getElementById("d3").style.background = "#767ACF";
				}
				if(d_3 == 0) {
					d_3 = 1;
					document.getElementById("d3").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d3", true);
	xhttp.send();
}
var d_4 = 0;
function d4() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d4 == 1) {
					document.getElementById("d4").style.background = "#767ACF";
				}
				if(d_4 == 0) {
					d_4 = 1;
					document.getElementById("d4").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d4", true);
	xhttp.send();
}
var d_5 = 0;
function d5() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d5 == 1) {
					document.getElementById("d5").style.background = "#767ACF";
				}
				if(d_5 == 0) {
					d_5 = 1;
					document.getElementById("d5").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d5", true);
	xhttp.send();
}
var d_6 = 0;
function d6() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d6 == 1) {
					document.getElementById("d6").style.background = "#767ACF";
				}
				if(d_6 == 0) {
					d_6 = 1;
					document.getElementById("d6").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d6", true);
	xhttp.send();
}
var d_7 = 0;
function d7() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d7 == 1) {
					document.getElementById("d7").style.background = "#767ACF";
				}
				if(d_7 == 0) {
					d_7 = 1;
					document.getElementById("d7").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d7", true);
	xhttp.send();
}
var d_8 = 0;
function d8() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d8 == 1) {
					document.getElementById("d8").style.background = "#767ACF";
				}
				if(d_8 == 0) {
					d_8 = 1;
					document.getElementById("d8").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d8", true);
	xhttp.send();
}
var d_9 = 0;
function d9() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d9 == 1) {
					document.getElementById("d9").style.background = "#767ACF";
				}
				if(d_9 == 0) {
					d_9 = 1;
					document.getElementById("d9").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d9", true);
	xhttp.send();
}
var d_10 = 0;
function d10() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d10 == 1) {
					document.getElementById("d10").style.background = "#767ACF";
				}
				if(d_10 == 0) {
					d_10 = 1;
					document.getElementById("d10").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d10", true);
	xhttp.send();
}
var d_11 = 0;
function d11() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d11 == 1) {
					document.getElementById("d11").style.background = "#767ACF";
				}
				if(d_11 == 0) {
					d_11 = 1;
					document.getElementById("d11").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d11", true);
	xhttp.send();
}
var d_12 = 0;
function d12() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d12 == 1) {
					document.getElementById("d12").style.background = "#767ACF";
				}
				if(d_12 == 0) {
					d_12 = 1;
					document.getElementById("d12").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d12", true);
	xhttp.send();
}
var d_13 = 0;
function d13() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d13 == 1) {
					document.getElementById("d13").style.background = "#767ACF";
				}
				if(d_13 == 0) {
					d_13 = 1;
					document.getElementById("d13").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d13", true);
	xhttp.send();
}
var d_14 = 0;
function d14() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d14 == 1) {
					document.getElementById("d14").style.background = "#767ACF";
				}
				if(d_14 == 0) {
					d_14 = 1;
					document.getElementById("d14").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d14", true);
	xhttp.send();
}
var d_15 = 0;
function d15() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d15 == 1) {
					document.getElementById("d15").style.background = "#767ACF";
				}
				if(d_15 == 0) {
					d_15 = 1;
					document.getElementById("d15").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d15", true);
	xhttp.send();
}
var d_16 = 0;
function d16() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d16 == 1) {
					document.getElementById("d16").style.background = "#767ACF";
				}
				if(d_16 == 0) {
					d_16 = 1;
					document.getElementById("d16").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d16", true);
	xhttp.send();
}
var d_17 = 0;
function d17() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d17 == 1) {
					document.getElementById("d17").style.background = "#767ACF";
				}
				if(d_17 == 0) {
					d_17 = 1;
					document.getElementById("d17").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d17", true);
	xhttp.send();
}
var d_18 = 0;
function d18() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d18 == 1) {
					document.getElementById("d18").style.background = "#767ACF";
				}
				if(d_18 == 0) {
					d_18 = 1;
					document.getElementById("d18").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d18", true);
	xhttp.send();
}
var d_19 = 0;
function d19() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d19 == 1) {
					document.getElementById("d19").style.background = "#767ACF";
				}
				if(d_19 == 0) {
					d_19 = 1;
					document.getElementById("d19").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d19", true);
	xhttp.send();
}
var d_20 = 0;
function d20() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d20 == 1) {
					document.getElementById("d20").style.background = "#767ACF";
				}
				if(d_20 == 0) {
					d_20 = 1;
					document.getElementById("d20").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d20", true);
	xhttp.send();
}
var d_21 = 0;
function d21() {
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(json.verification == "true") {
				var coins = json.coins;
				document.getElementById("coins").innerHTML = "У тебя " + coins + " хаб-коинов";
				xx();
				if(json.d21 == 1) {
					document.getElementById("d21").style.background = "#767ACF";
				}
				if(d_21 == 0) {
					d_21 = 1;
					document.getElementById("d21").removeAttribute('onclick');
					document.getElementById("filled_form").innerHTML = "<div class=\"filled2\"><div class=\"img_box\"><img src=\"/img/mon\" class=\"img_coins\"/></div><div class=\"filled_text2\">Ваша награда 150 хаб-коинов</div><div class=\"button_close2\" onclick=\"clos()\"><div class=\"text_close\">Хорошо</div></div></div>";
				}
			} else {
				document.getElementById("filled_form").innerHTML = "<div class=\"filled\"><div class=\"filled_text\">Время сессии истекло. Авторизуйтесь</div><div class=\"button_close\" onclick=\"closd()\"><div class=\"text_close\">Хорошо</div></div></div>";
			}
		}
	};
	xhttp.open("GET", "/d21", true);
	xhttp.send();
}
