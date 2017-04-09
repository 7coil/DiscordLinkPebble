/* jshint esversion: 6 */

var socket = require('./socket.io')('http://chat.infra.link');

//Import the Clay package
var Clay = require('pebble-clay');
//Load our Clay configuration file
var clayConfig = require('./config');
//Initialise Clay
var clay = new Clay(clayConfig);

//Get messagekeys
var messageKeys = require('message_keys');

//Set default username that will be overridden
var username = "A Pebble User";

Pebble.addEventListener('ready', function() {
	
	// PebbleKit JS is ready!
	console.log('PebbleKit JS ready!');
	
	if(localStorage.getItem("username")) {
		console.log(localStorage.getItem("username"));
		username = localStorage.getItem("username");
	} else {
		printMessage("message", "You have not set a username yet. Please set a username inside the config. A default one has been supplied for testing.");
	}

	printMessage("notify", "PebbleKit JS Initialised!");

	socket.on("connect", function () {
		socket.emit("user", {"username": username});
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
		sendMessage("Pebble", dict.outmessage);
	});

});

function printMessage(type, message) {
	//Build the JSON to send to the pebble
	var dict = {
		'type': type,
		'message': message
	};

	//Send message to the pebble
	Pebble.sendAppMessage(dict, function() {
		console.log('Message sent successfully: ' + JSON.stringify(dict));
	}, function(e) {
		console.log('Message failed: ' + JSON.stringify(e));
	});
}

function sendMessage(source, message) {
	socket.emit("message", {
		source: source,
		username: username,
		message: message
	});
}

//Save the API Token that's been set
Pebble.addEventListener('webviewclosed', function(e) {
	if (e && !e.response) {
		return;
	}

	var dict = clay.getSettings(e.response);
	console.log("Set Username: " + dict[messageKeys.username]);
	localStorage.setItem("username", dict[messageKeys.username]);
	printMessage("notify", "Config set!");
	printMessage("message", "You may want to restart DiscordLink to apply settings.");
});