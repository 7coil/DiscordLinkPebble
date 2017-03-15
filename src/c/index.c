#include <pebble.h>
#include <pebble-console-layer/console-layer.h>

static Window *main_window;
static Layer *console_layer, *mini_console_layer;
static DictationSession *s_dictation_session;

static char inputMessage[512];

// Largest expected inbox and outbox message sizes
const uint32_t inbox_size = 2048;
const uint32_t outbox_size = 512;


// ---------------------------------------------------------------------------------------------- //
//  Button Functions
// ---------------------------------------------------------------------------------------------- //

//DICTATION CALLBACK
static void dictation_session_callback(DictationSession *session, DictationSessionStatus status, char *transcription, void *context) {
	if(status == DictationSessionStatusSuccess) {
		strncpy(inputMessage, transcription, 512);
		console_layer_write_text(console_layer, inputMessage);
		
		//For some reason, I can't get a send function working. Here is the same bit of code that has been duplicated within this document. Have fun!
		DictionaryIterator *out_iter;
		AppMessageResult result = app_message_outbox_begin(&out_iter);

		if(result == APP_MSG_OK) {
			dict_write_cstring(out_iter, MESSAGE_KEY_outmessage, inputMessage);
			result = app_message_outbox_send();
		} else {
			console_layer_write_text(mini_console_layer, "The outbox is busy.");
		}
	} else {
		// Display the reason for any error
		static char s_failed_buff[128];
		snprintf(s_failed_buff, sizeof(s_failed_buff), "Transcription failed. Reason: %d", (int)status);
		console_layer_write_text(mini_console_layer, s_failed_buff);
	}
	dictation_session_destroy(s_dictation_session);
}

//HOLD UP CLICK
// 
static void up_hold_click_handler(ClickRecognizerRef recognizer, void *context) {
	console_layer_write_text(mini_console_layer, "HOLD UP");
}

//UP CLICK
// Accept a voice input to send to DiscordLink
static void up_click_handler(ClickRecognizerRef recognizer, void *context) {
	// Create new dictation session
	s_dictation_session = dictation_session_create(sizeof(inputMessage), dictation_session_callback, NULL);
	dictation_session_start(s_dictation_session);
	console_layer_write_text(mini_console_layer, "UP");
}

//HOLD SELECT CLICK
// Open the DiscordLink console.
static void sl_hold_click_handler(ClickRecognizerRef recognizer, void *context) {
	//Toggle the mini-console
	layer_set_hidden(mini_console_layer, !layer_get_hidden(mini_console_layer));
	//Print if shown
	if (!layer_get_hidden(mini_console_layer)) {
		console_layer_write_text(mini_console_layer, "Secret commands:\nHold SELECT to toggle console.\nHold DOWN to clear chat.");
	}
}

//SELECT CLICK
// Open response menu
static void sl_click_handler(ClickRecognizerRef recognizer, void *context) {
	console_layer_write_text(mini_console_layer, "SELECT");
}

//HOLD DOWN CLICK
// Clear the Chat list
static void dn_hold_click_handler(ClickRecognizerRef recognizer, void *context) {
	console_layer_clear(console_layer);
	console_layer_write_text(mini_console_layer, "Cleared chat window.");
}

//DOWN CLICK
// Open keyboard
static void dn_click_handler(ClickRecognizerRef recognizer, void *context) {
	console_layer_write_text(mini_console_layer, "DOWN");
}





// Subscribe all the buttons to the correct functions
static void click_config_provider(void *context) {
	window_single_click_subscribe(BUTTON_ID_UP,     up_click_handler);
	window_single_click_subscribe(BUTTON_ID_SELECT, sl_click_handler);
	window_single_click_subscribe(BUTTON_ID_DOWN,   dn_click_handler);
	window_long_click_subscribe  (BUTTON_ID_UP,     0, up_hold_click_handler, NULL);
	window_long_click_subscribe  (BUTTON_ID_SELECT, 0, sl_hold_click_handler, NULL);
	window_long_click_subscribe  (BUTTON_ID_DOWN,   0, dn_hold_click_handler, NULL);
}


// ---------------------------------------------------------------------------------------------- //
//  Main Functions
// ---------------------------------------------------------------------------------------------- //
static void main_window_load(Window *window) {
	window_set_click_config_provider(window, click_config_provider);

	// Create the console layer
	Layer *root_layer = window_get_root_layer(window);
	// Have no edge on the display except for on Pebble Round
	GRect rect = grect_inset(layer_get_frame(root_layer), GEdgeInsets(PBL_IF_ROUND_ELSE(26, 0)));
	// Create layer with 500 byte buffer
	console_layer = console_layer_create(rect);
	layer_add_child(root_layer, console_layer);

	console_layer_set_style(console_layer, GColorBlack, GColorWhite, fonts_get_system_font(FONT_KEY_GOTHIC_14), GTextAlignmentLeft, true);

	// Create a second mini console layer
	int16_t width = 140, height = 50;
	rect = GRect((layer_get_frame(root_layer).size.w - width) / 2, 10, width, height);
	// Create layer with 200 byte buffer
	mini_console_layer = console_layer_create_with_buffer_size(rect, 200);
	layer_add_child(root_layer, mini_console_layer);

	// Configure mini console layer with white on black word-wrapped text using a tiny centered font
	console_layer_set_style(mini_console_layer, GColorWhite, GColorBlack, fonts_get_system_font(FONT_KEY_GOTHIC_09), GTextAlignmentLeft, true);

	// Hiding the mini console layer
	// Note: uses the standard Pebble set hidden function -- most standard Layer functions will work on Console Layers
	layer_set_hidden(mini_console_layer, true);

	// Write some text
	console_layer_write_text(mini_console_layer, "DiscordLink opened.");
	console_layer_write_text(console_layer, "Welcome to DiscordLink!\nPress UP for voice.");
	//console_layer_write_text(console_layer, "Welcome to DiscordLink!\nPress UP for voice.\nPress SELECT for pre-made messages.\nPress DOWN for a keyboard.");
}


static void main_window_unload(Window *window) {
	// Destroy the layers with the standard Pebble layer destroy function
	layer_destroy(mini_console_layer);
	layer_destroy(console_layer);
}

//Inbox success
static void inbox_received_callback(DictionaryIterator *iter, void *context) {
	Tuple *type_tuple = dict_find(iter, MESSAGE_KEY_type);
	Tuple *message_tuple = dict_find(iter, MESSAGE_KEY_message);
	if (type_tuple && message_tuple) {
		char *message = message_tuple->value->cstring;
		char *type = type_tuple->value->cstring;
		if (!strcmp(type, "message")) {
			console_layer_write_text(console_layer, message);
		} else {
			console_layer_write_text(mini_console_layer, message);
		}
	}
}

//Inbox failure
static void inbox_dropped_callback(AppMessageResult reason, void *context) {
	static char s_failed_buff[128];
	snprintf(s_failed_buff, sizeof(s_failed_buff), "Inbox failure. Reason: %d", (int)reason);
	console_layer_write_text(mini_console_layer, s_failed_buff);
}

//Outbox success
static void outbox_sent_callback(DictionaryIterator *iter, void *context) {

}

//Outbox failure
static void outbox_failed_callback(DictionaryIterator *iter, AppMessageResult reason, void *context) {
	static char s_failed_buff[128];
	snprintf(s_failed_buff, sizeof(s_failed_buff), "Outbox failure. Reason: %d", (int)reason);
	console_layer_write_text(mini_console_layer, s_failed_buff);
}

static void init() {
	// Create main Window
	main_window = window_create();
	window_set_window_handlers(main_window, (WindowHandlers) {
		.load = main_window_load,
		.unload = main_window_unload
	});
	window_set_background_color(main_window, GColorDarkGray);
	window_stack_push(main_window, true);

	// Open AppMessage
	app_message_open(inbox_size, outbox_size);
	// Register to be notified about inbox received events
	app_message_register_inbox_received(inbox_received_callback);
	// Register to be notified about inbox dropped events
	app_message_register_inbox_dropped(inbox_dropped_callback);
	// Register to be notified about outbox sent events
	app_message_register_outbox_sent(outbox_sent_callback);
	// Register to be notified about outbox failed events
	app_message_register_outbox_failed(outbox_failed_callback);

}


static void deinit() {
	window_destroy(main_window);  // Destroy main Window
}


int main(void) {
	init();
	app_event_loop();
	deinit();
}