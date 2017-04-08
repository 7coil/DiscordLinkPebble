/* jshint esversion: 6 */

var Discord = require("./discord.js/src/index");
var client = new Discord.Client();

Pebble.addEventListener('ready', function() {
	
	
	client.login("MTc4NTg2MDY5MzUxMTM3Mjgw.C6s7Rw.7X3gC_PyN0PLZbK5OCFmfmB3neg");
	
	client.on('ready', function() {
		console.log("Discord.js Ready");
	});
	
	client.on('message', function(message) {
		console.log(message.content);
	});
	
});
