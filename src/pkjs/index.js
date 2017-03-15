var socket = require('./socket.io')('http://chat.infra.link');

Pebble.addEventListener('ready', function() {
	
	// PebbleKit JS is ready!
	console.log('PebbleKit JS ready!');

	printMessage("notify", "PebbleKit JS Initialised!");

	socket.on("connect", function () {
		socket.emit("user", {"username": "PebbleApp2"});
	});

	socket.on("system", function(data) {
		printMessage(data.type, data.message);
	});

	socket.on("message", function(data) {
		printMessage("message", data.username + "@" + data.source + ": " + data.message);
	});

	socket.on("url", function(data) {
		printMessage("message", data.username + "@" + data.source + " sent an URL.");
	});

	Pebble.addEventListener('appmessage', function(e) {
		var dict = e.payload;
		console.log('Got message: ' + JSON.stringify(dict));
		sendMessage("Pebble", "Pebble", dict.outmessage);
	});

});

function printMessage(type, message) {
	//Build the JSON to send to the pebble
	var dict = {
		'type': type,
		'message': message
	};
	
	console.dir(dict);

	//Send message to the pebble
	Pebble.sendAppMessage(dict, function() {
		console.log('Message sent successfully: ' + JSON.stringify(dict));
	}, function(e) {
		console.log('Message failed: ' + JSON.stringify(e));
	});
}

function sendMessage(source, username, message) {
	printMessage(source, username, message);
	socket.emit("message", {
		source: source,
		username: username,
		message: message
	});
}
