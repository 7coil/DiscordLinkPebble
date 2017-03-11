#include <pebble.h>
#include <pebble-console-layer/console-layer.h>

static Window *main_window;
static Layer *console_layer, *mini_console_layer;
static DictationSession *s_dictation_session;
static char inputMessage[512];

// ---------------------------------------------------------------------------------------------- //
//  Button Functions
// ---------------------------------------------------------------------------------------------- //

//DICTATION CALLBACK
static void dictation_session_callback(DictationSession *session, DictationSessionStatus status, char *transcription, void *context) {
	if(status == DictationSessionStatusSuccess) {
		strncpy(inputMessage, transcription, 512);
		console_layer_write_text(console_layer, inputMessage);
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
static void sl_hold_click_handler(ClickRecognizerRef recognizer, void *context) {
	console_layer_write_text(mini_console_layer, "Secret commands:\nHold SELECT to toggle console.\nHold DOWN to clear chat.");
	//Toggle the mini-console
	layer_set_hidden(mini_console_layer, !layer_get_hidden(mini_console_layer));
}

//SELECT CLICK
// Open response menu
static void sl_click_handler(ClickRecognizerRef recognizer, void *context) {
	console_layer_write_text(mini_console_layer, "SELECT");
}

//HOLD DOWN CLICK
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
	console_layer_write_text(console_layer, "Welcome to DiscordLink!\nPress UP for voice.\nPress SELECT for pre-made messages.\nPress DOWN for a keyboard.");
}


static void main_window_unload(Window *window) {
	// Destroy the layers with the standard Pebble layer destroy function
	layer_destroy(mini_console_layer);
	layer_destroy(console_layer);
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
}


static void deinit() {
	window_destroy(main_window);  // Destroy main Window
}


int main(void) {
	init();
	app_event_loop();
	deinit();
}