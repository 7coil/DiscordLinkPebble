/* jshint esversion: 6 */

//Import the Clay package
var Clay = require('pebble-clay');
//Load our Clay configuration file
var clayConfig = require('./config');
//Initialise Clay
var clay = new Clay(clayConfig);

//Initialise polyfill for Babel
require("./polyfill.js");
//Init discord.js
require("./discord.js");
//Get the client from the "window" object.
var client = new Discord.Client();

//Get messagekeys
var messageKeys = require('message_keys');

//Set basic editable info
var game = "DiscordLink";
var watch = Pebble.getActiveWatchInfo ? Pebble.getActiveWatchInfo() : null;
if(watch) {
	//game += watch.platform;
	switch(watch.platform) {
		case "aplite":
			game += "Pebble";
			break;
		case "basalt":
			game += "PebbleTime";
			break;
		case "chalk":
			game += "PebbleRound";
			break;
		default:
			game += "FitBit";
			break;
	}

}

function printMessage(type, message) {
	//Build the JSON to send to the pebble
	var dict = {
		'intype': type,
		'inmessage': message
	};

	//console.dir(dict);

	//Send message to the pebble
	Pebble.sendAppMessage(dict, function() {
		console.log('Message sent successfully: ' + JSON.stringify(dict));
	}, function(e) {
		console.log('Message failed: ' + JSON.stringify(e));
	});
}

Pebble.addEventListener('ready', function() {

	//PebbleKit JS is ready!
	console.log('PebbleKit JS ready!');
	printMessage("notify", "PebbleKitJS Init");

	if (localStorage.getItem("auth")) {
		client.login(localStorage.getItem("auth"));
		
		client.on('ready', function() {
			//DiscordJS is ready!
			console.log("Discord.js Ready");
			printMessage("notify", "DiscordJS Init");
			console.log(game);
			client.user.setGame(game);
		});

		client.on('message', function(message) {
			if(message.content) printMessage("message", message.author.username + " - " + message.content);
		});

		Pebble.addEventListener('appmessage', function(e) {
			var dict = e.payload;
			console.log('Got message: ' + JSON.stringify(dict));
		});
	} else {
		printMessage("notify", "Config not set!");
		printMessage("message", "Please enter details in the config before starting.");
	}


});

//Save the API Token that's been set
Pebble.addEventListener('webviewclosed', function(e) {
	if (e && !e.response) {
		return;
	}

	var dict = clay.getSettings(e.response);
	console.log("Set API Token: " + dict[messageKeys.auth]);
	localStorage.setItem("auth", dict[messageKeys.auth]);
	printMessage("notify", "Config set!");
	printMessage("message", "You may want to restart DiscordLink to apply settings.");
});
