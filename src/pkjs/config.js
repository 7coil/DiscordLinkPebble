module.exports = [
	{
		"type": "heading",
		"defaultValue": "DiscordLink for Pebble"
	},
	{
		"type": "section",
		"items": [
			{
				"type": "heading",
				"defaultValue": "Login Settings"
			},
			{
				"type": "text",
				"defaultValue": "In order to connect to your account, you will need to acquire your unique authentication token. This can be found by pressing CRTL+SHIFT+I in Discord, and then executing 'localStorage.token' in the console tab. This code allows anyone to use your account. Please be wary of submitting this in random places, and feel free to try DiscordLink with a throwaway to test before you start."
			},
			{
				"type": "input",
				"id": "auth",
				"messageKey": "auth",
				"defaultValue": "",
				"label": "Discord API Token"
			}
		]
	},
	{
		"type": "submit",
		"defaultValue": "Save Settings"
	}
];