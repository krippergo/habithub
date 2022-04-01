const express = require('express'), app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const md5 = require('md5');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const path = './database.txt';

fs.access(path, fs.F_OK, (err) => {
	if (err) {
		var filepath = "database.txt";
		fs.writeFile(filepath, (err) => {
			if(err) throw err;
			console.log("Файл создан");
		}); 
	}
	console.log("Файл есть");
});

var database;

fs.readFile("database.txt", "utf8", function(error, data){
	if(data){
		database = JSON.parse(data);
	} else database = [];
	if(error) throw error;
});

const path2 = './habits.txt';

fs.access(path2, fs.F_OK, (err) => {
	if (err) {
		var filepath = "habits.txt";
		fs.writeFile(filepath, (err) => {
			if(err) throw err;
			console.log("Файл с привычками создан");
		}); 
	}
	console.log("Файл с привычками есть");
});

var habits;

fs.readFile("habits.txt", "utf8", function(error, data){
	if(data){
		habits = JSON.parse(data);
	} else habits = [];
	if(error) throw error;
});

app.use(cookieParser());

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/src/public/menu.html');
});

app.get('/authorization', function(request, response) {
	response.sendFile(__dirname + '/src/public/authorization.html');
});

app.get('/registration', function(request, response) {
	response.sendFile(__dirname + '/src/public/registration.html');
});

app.get('/profile', function(request, response) {
	response.sendFile(__dirname + '/src/public/habit.html');
});

app.get('/profile/create', function(request, response) {
	response.sendFile(__dirname + '/src/public/create.html');
});

app.get('/profile/prises', function(request, response) {
	response.sendFile(__dirname + '/src/public/prises.html');
});

app.get('/profile/view', function(request, response) {
	response.sendFile(__dirname + '/src/public/view.html');
});

app.get('/style/menu', function(request, response) {
	response.sendFile(__dirname + '/src/style/menu.css');
});

app.get('/style/authorization', function(request, response) {
	response.sendFile(__dirname + '/src/style/authorization.css');
});

app.get('/style/registration', function(request, response) {
	response.sendFile(__dirname + '/src/style/registration.css');
});

app.get('/style/habit', function(request, response) {
	response.sendFile(__dirname + '/src/style/habit.css');
});

app.get('/style/create', function(request, response) {
	response.sendFile(__dirname + '/src/style/create.css');
});

app.get('/style/prises', function(request, response) {
	response.sendFile(__dirname + '/src/style/prises.css');
});

app.get('/style/view', function(request, response) {
	response.sendFile(__dirname + '/src/style/view.css');
});

app.get('/style/error', function(request, response) {
	response.sendFile(__dirname + '/src/style/404.css');
});

app.get('/js/menu', function(request, response) {
	response.sendFile(__dirname + '/src/app/menu.js');
});

app.get('/js/authorization', function(request, response) {
	response.sendFile(__dirname + '/src/app/authorization.js');
});

app.get('/js/registration', function(request, response) {
	response.sendFile(__dirname + '/src/app/registration.js');
});

app.get('/js/habit', function(request, response) {
	response.sendFile(__dirname + '/src/app/habit.js');
});

app.get('/js/create', function(request, response) {
	response.sendFile(__dirname + '/src/app/create.js');
});

app.get('/js/prises', function(request, response) {
	response.sendFile(__dirname + '/src/app/prises.js');
});

app.get('/js/view', function(request, response) {
	response.sendFile(__dirname + '/src/app/view.js');
});

app.get('/js/error', function(request, response) {
	response.sendFile(__dirname + '/src/app/404.js');
});

app.get('/img/clock', function(request, response) {
	response.sendFile(__dirname + '/src/images/clock.png');
});

app.get('/img/clock/ico', function(request, response) {
	response.sendFile(__dirname + '/src/images/clock_ico.png');
});

app.get('/img/prise/one', function(request, response) {
	response.sendFile(__dirname + '/src/images/phone.png');
});

app.get('/img/mon', function(request, response) {
	response.sendFile(__dirname + '/src/images/coins.png');
});

app.get('/img/prise/two', function(request, response) {
	response.sendFile(__dirname + '/src/images/comp.png');
});

app.get('/img/prise/three', function(request, response) {
	response.sendFile(__dirname + '/src/images/kino.png');
});

app.get('/img/prise/four', function(request, response) {
	response.sendFile(__dirname + '/src/images/mc.png');
});

app.get('/img/habit', function(request, response) {
	response.sendFile(__dirname + '/src/images/habit.png');
});

app.get('/img/exit', function(request, response) {
	response.sendFile(__dirname + '/src/images/exit.png');
});

app.get('/img/exit/reglog', function(request, response) {
	response.sendFile(__dirname + '/src/images/exit_reg_log.png');
});

app.post('/recording', urlencodedParser, function(request, response, data) {
	var userRegistration = false;
	for(a = 0; a < database.length; a++) {
		var login_file = database[a].login;
		if(login_file === request.body.login) {
			userRegistration = true;
			break;
		}
	}
	if (userRegistration){
		response.sendFile(__dirname + '/src/public/registration_failed.html');
		return;
	}
	request.body.password = md5(request.body.password);
	request.body.priseone = "no";
	request.body.prisetwo = "no";
	request.body.prisethree = "no";
	request.body.prisefour = "no";
	request.body.prisefive = "no";
	request.body.prisesix = "no";
	request.body.mony = 200;
	request.body.id = database.length + 1;
	database.push(request.body);
	var fileContent = JSON.stringify(database);
	fs.writeFileSync('database.txt', fileContent);
	response.cookie('user', request.body.login, {maxAge: 8640000, httpOnly: true });
	response.redirect("/profile");
});

app.post('/creating', urlencodedParser, function(request, response, data) {
	request.body.d1 = 0;
	request.body.d2 = 0;
	request.body.d3 = 0;
	request.body.d4 = 0;
	request.body.d5 = 0;
	request.body.d6 = 0;
	request.body.d7 = 0;
	request.body.d8 = 0;
	request.body.d9 = 0;
	request.body.d10 = 0;
	request.body.d11 = 0;
	request.body.d12 = 0;
	request.body.d13 = 0;
	request.body.d14 = 0;
	request.body.d15 = 0;
	request.body.d16 = 0;
	request.body.d17 = 0;
	request.body.d18 = 0;
	request.body.d19 = 0;
	request.body.d20 = 0;
	request.body.d21 = 0;
	habits.push(request.body);
	var fileContent = JSON.stringify(habits);
	fs.writeFileSync('habits.txt', fileContent);
	response.redirect("/profile");
});

app.post('/acount', urlencodedParser, function(request, response, data) {
	if (!request.body) return response.sendStatus(400);
	var userLogin = false;
	for(b = 0; b < database.length; b++) {
		var pass = md5(request.body.password);
		var login_file2 = database[b].login;
		var password_file2 = database[b].password;
		if (request.body.login == login_file2 && pass == password_file2) {
			userLogin = true;
			break;
		}
	}
	if (userLogin){
		response.cookie('user', request.body.login, {maxAge: 8640000, httpOnly: true });
		response.redirect("/profile");
		return;
	}
	response.sendFile(__dirname + '/src/public/authorization_failed.html');
});

app.get('/verification', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var mony = database[c].mony;
			var prise_one = database[c].priseone;
			var prise_two = database[c].prisetwo;
			var prise_three = database[c].prisethree;
			var prise_four = database[c].prisefour;
			var prise_five = database[c].prisefive;
			var prise_six = database[c].prisesix;
			var id = database[c].id;
			login = true;
		}
		
	}
	if(login) {
		obj = {
			verification: "true",
			coins: mony,
			prise_one: prise_one,
			prise_two: prise_two,
			prise_three: prise_three,
			prise_four: prise_four,
			prise_five: prise_five,
			prise_six: prise_six,
			id: id
		}	
		response.json(obj);
		return;
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/search', urlencodedParser, function(request, response, data) {
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	var hab = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			login = true;
		}
	}
	if(login) {
		for(i = 0; i < habits.length; i++) {
			if(id == habits[i].id) {
				var name = habits[i].name;
				var answer_one = habits[i].answerone;
				var answer_two = habits[i].answertwo;
				hab = true;
				var d1 = habits[i].d1;
				var d2 = habits[i].d2;
				var d3 = habits[i].d3;
				var d4 = habits[i].d4;
				var d5 = habits[i].d5;
				var d6 = habits[i].d6;
				var d7 = habits[i].d7;
				var d8 = habits[i].d8;
				var d9 = habits[i].d9;
				var d10 = habits[i].d10;
				var d11 = habits[i].d11;
				var d12 = habits[i].d12;
				var d13 = habits[i].d13;
				var d14 = habits[i].d14;
				var d15 = habits[i].d15;
				var d16 = habits[i].d16;
				var d17 = habits[i].d17;
				var d18 = habits[i].d18;
				var d19 = habits[i].d19;
				var d20 = habits[i].d20;
				var d21 = habits[i].d21;
				var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
			}
		}
	} else {
		obj = {
			check: "false"
		}
		response.json(obj);
		return;
	}
	if(hab) {
		var ost = 21 - summ;
		obj = {
			check: "yes",
			ost: ost,
			name: name,
			kolvo: 21,
			answer_one: answer_one,
			answer_two: answer_two,
			d1: d1,
			d2: d2,
			d3: d3,
			d4: d4,
			d5: d5,
			d6: d6,
			d7: d7,
			d8: d8,
			d9: d9,
			d10: d10,
			d11: d11,
			d12: d12,
			d13: d13,
			d14: d14,
			d15: d15,
			d16: d16,
			d17: d17,
			d18: d18,
			d19: d19,
			d20: d20,
			d21: d21
		}
		response.json(obj);
	} else {
		obj = {
			check: "no"
		}
		response.json(obj);
	}
});

app.get('/d1', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d1 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d1 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d1: habits[i].d1,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d1: habits[i].d1,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d2', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d2 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d2 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d2: habits[i].d2,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d2: habits[i].d2,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d3', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d3 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d3 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d3: habits[i].d3,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d3: habits[i].d3,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d4', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d4 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d4 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d4: habits[i].d4,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d4: habits[i].d4,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d5', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d5 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d5 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d5: habits[i].d5,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d5: habits[i].d5,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d6', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d6 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d6 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
						obj = {
							verification: "true",
							d6: habits[i].d6,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
					} else {
						obj = {
							verification: "true",
							d6: habits[i].d6,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d7', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d7 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d7 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d7: habits[i].d7,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d7: habits[i].d7,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d8', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d8 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d8 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d8: habits[i].d8,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d8: habits[i].d8,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d9', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d9 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d9 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d9: habits[i].d9,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d9: habits[i].d9,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d10', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d10 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d10 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d10: habits[i].d10,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d10: habits[i].d10,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d11', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d11 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d11 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d11: habits[i].d11,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d11: habits[i].d11,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d12', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d12 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d12 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d12: habits[i].d12,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d12: habits[i].d12,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d13', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d13 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d13 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d13: habits[i].d13,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d13: habits[i].d13,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d14', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d14 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d14 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d14: habits[i].d14,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d14: habits[i].d14,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d15', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d15 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d15 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d15: habits[i].d15,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d15: habits[i].d15,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d16', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d16 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d16 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d16: habits[i].d16,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d16: habits[i].d16,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d17', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d17 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d17 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d17: habits[i].d17,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d17: habits[i].d17,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d18', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d18 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d18 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d18: habits[i].d18,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d18: habits[i].d18,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d19', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d19 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d19 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d19: habits[i].d19,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d19: habits[i].d19,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d20', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d20 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d20 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d20: habits[i].d20,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d20: habits[i].d20,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/d21', urlencodedParser, function(request, response, data) {
	fs.readFile("database.txt", "utf8", function(error, data){
		if(data){
			database = JSON.parse(data);
		} else database = [];
		if(error) throw error;
	});
	fs.readFile("habits.txt", "utf8", function(error, data){
		if(data){
			habits = JSON.parse(data);
		} else habits = [];
		if(error) throw error;
	});
	var user = request.cookies['user'];
	var obj;
	var login = false;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var id = database[c].id;
			for(i = 0; i < habits.length; i++) {
				if(id == habits[i].id) {
					if(habits[i].d21 == 0) {
						database[c].mony = database[c].mony + 150;
						var fileContent = JSON.stringify(database);
						fs.writeFileSync('database.txt', fileContent);
						habits[i].d21 = 1;
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					}
					var d1 = habits[i].d1;
					var d2 = habits[i].d2;
					var d3 = habits[i].d3;
					var d4 = habits[i].d4;
					var d5 = habits[i].d5;
					var d6 = habits[i].d6;
					var d7 = habits[i].d7;
					var d8 = habits[i].d8;
					var d9 = habits[i].d9;
					var d10 = habits[i].d10;
					var d11 = habits[i].d11;
					var d12 = habits[i].d12;
					var d13 = habits[i].d13;
					var d14 = habits[i].d14;
					var d15 = habits[i].d15;
					var d16 = habits[i].d16;
					var d17 = habits[i].d17;
					var d18 = habits[i].d18;
					var d19 = habits[i].d19;
					var d20 = habits[i].d20;
					var d21 = habits[i].d21;
					var summ = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 + d17 + d18 + d19 + d20 + d21;
					if(summ == 21) {
						obj = {
							verification: "true",
							d21: habits[i].d21,
							mony: "yes",
							coins: database[c].mony,
							end: "yes"
						}
						habits.splice(i, 1);
						var fileContent2 = JSON.stringify(habits);
						fs.writeFileSync('habits.txt', fileContent2);
					} else {
						obj = {
							verification: "true",
							d21: habits[i].d21,
							mony: "yes",
							coins: database[c].mony,
							end: "no"
						}
					}
					response.json(obj);
					return;
				}
			}
		}
	}
	obj = {
		verification: "false"
	}
	response.json(obj);
});

app.get('/profile/prise/one', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(coins >= 900) {
				database[c].mony = coins - 900;
				database[c].priseone = "yes";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					give: "yes",
					coins: database[c].mony,
					prise_one: database[c].priseone
				}
			} else {
				obj = {
					give: "no"
				}
			}
			response.json(obj);
			return;
		}
	}
	obj = {
		give: "false"
	}
	response.json(obj);
});

app.get('/profile/active/one', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(database[c].priseone == "yes") {
				database[c].priseone = "no";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					prise_one: database[c].priseone
				}
			} 
			response.json(obj);
			return;
		}
	}
	obj = {
		prise_one: "false"
	}
	response.json(obj);
});

app.get('/profile/prise/two', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(coins >= 900) {
				database[c].mony = coins - 900;
				database[c].prisetwo = "yes";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					give: "yes",
					coins: database[c].mony,
					prise_two: database[c].prisetwo
				}
			} else {
				obj = {
					give: "no"
				}
			}
			response.json(obj);
			return;
		}
	}
	obj = {
		give: "false"
	}
	response.json(obj);
});

app.get('/profile/active/two', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(database[c].prisetwo == "yes") {
				database[c].prisetwo = "no";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					prise_two: database[c].prisetwo
				}
			} 
			response.json(obj);
			return;
		}
	}
	obj = {
		prise_two: "false"
	}
	response.json(obj);
});

app.get('/profile/prise/three', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(coins >= 500) {
				database[c].mony = coins - 500;
				database[c].prisethree = "yes";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					give: "yes",
					coins: database[c].mony,
					prise_three: database[c].prisethree
				}
			} else {
				obj = {
					give: "no"
				}
			}
			response.json(obj);
			return;
		}
	}
	obj = {
		give: "false"
	}
	response.json(obj);
});

app.get('/profile/active/three', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(database[c].prisethree == "yes") {
				database[c].prisethree = "no";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					prise_three: database[c].prisethree
				}
			} 
			response.json(obj);
			return;
		}
	}
	obj = {
		prise_three: "false"
	}
	response.json(obj);
});

app.get('/profile/prise/four', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(coins >= 500) {
				database[c].mony = coins - 500;
				database[c].prisefour = "yes";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					give: "yes",
					coins: database[c].mony,
					prise_four: database[c].prisefour
				}
			} else {
				obj = {
					give: "no"
				}
			}
			response.json(obj);
			return;
		}
	}
	obj = {
		give: "false"
	}
	response.json(obj);
});

app.get('/profile/active/four', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(database[c].prisefour == "yes") {
				database[c].prisefour = "no";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					prise_four: database[c].prisefour
				}
			} 
			response.json(obj);
			return;
		}
	}
	obj = {
		prise_four: "false"
	}
	response.json(obj);
});

app.get('/profile/prise/five', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(coins >= 630) {
				database[c].mony = coins - 630;
				database[c].prisefive = "yes";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					give: "yes",
					coins: database[c].mony,
					prise_five: database[c].prisefive
				}
			} else {
				obj = {
					give: "no"
				}
			}
			response.json(obj);
			return;
		}
	}
	obj = {
		give: "false"
	}
	response.json(obj);
});

app.get('/profile/active/five', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(database[c].prisefive == "yes") {
				database[c].prisefive = "no";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					prise_five: database[c].prisefive
				}
			} 
			response.json(obj);
			return;
		}
	}
	obj = {
		prise_five: "false"
	}
	response.json(obj);
});

app.get('/profile/prise/six', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(coins >= 750) {
				database[c].mony = coins - 750;
				database[c].prisesix = "yes";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					give: "yes",
					coins: database[c].mony,
					prise_six: database[c].prisesix
				}
			} else {
				obj = {
					give: "no"
				}
			}
			response.json(obj);
			return;
		}
	}
	obj = {
		give: "false"
	}
	response.json(obj);
});

app.get('/profile/active/six', urlencodedParser, function(request, response, data) {
	var user = request.cookies['user'];
	var obj;
	for(c = 0; c < database.length; c++) {
		var login_file3 = database[c].login;
		if(user == login_file3) {
			var coins = database[c].mony;
			if(database[c].prisesix == "yes") {
				database[c].prisesix = "no";
				var fileContent = JSON.stringify(database);
				fs.writeFileSync('database.txt', fileContent);
				obj = {
					prise_six: database[c].prisesix
				}
			} 
			response.json(obj);
			return;
		}
	}
	obj = {
		prise_six: "false"
	}
	response.json(obj);
});

app.get('*', function(request, response) {
	response.sendFile(__dirname + '/src/public/404.html');
});

app.set('port', (process.env.PORT || 80));

app.listen(app.get('port'), function() {
	console.log('Порт', app.get('port'), 'запущен');
});
