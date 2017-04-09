'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******/// The require function
/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
/******/module.l=true;/******/// Return the exports of the module
/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******/// identity function for calling harmony imports with the correct context
/******/__webpack_require__.i=function(value){return value;};/******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/// __webpack_public_path__
/******/__webpack_require__.p="";/******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=57);/******/})(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){exports.Package=__webpack_require__(27);/**
 * Options for a Client.
 * @typedef {Object} ClientOptions
 * @property {string} [apiRequestMethod='sequential'] 'sequential' or 'burst'. Sequential executes all requests in
 * the order they are triggered, whereas burst runs multiple at a time, and doesn't guarantee a particular order.
 * @property {number} [shardId=0] The ID of this shard
 * @property {number} [shardCount=0] The number of shards
 * @property {number} [messageCacheMaxSize=200] Maximum number of messages to cache per channel
 * (-1 or Infinity for unlimited - don't do this without message sweeping, otherwise memory usage will climb
 * indefinitely)
 * @property {number} [messageCacheLifetime=0] How long until a message should be uncached by the message sweeping
 * (in seconds, 0 for forever)
 * @property {number} [messageSweepInterval=0] How frequently to remove messages from the cache that are older than
 * the message cache lifetime (in seconds, 0 for never)
 * @property {boolean} [fetchAllMembers=false] Whether to cache all guild members and users upon startup, as well as
 * upon joining a guild
 * @property {boolean} [disableEveryone=false] Default value for MessageOptions.disableEveryone
 * @property {boolean} [sync=false] Whether to periodically sync guilds (for userbots)
 * @property {number} [restWsBridgeTimeout=5000] Maximum time permitted between REST responses and their
 * corresponding websocket events
 * @property {number} [restTimeOffset=500] The extra time in millseconds to wait before continuing to make REST
 * requests (higher values will reduce rate-limiting errors on bad connections)
 * @property {WSEventType[]} [disabledEvents] An array of disabled websocket events. Events in this array will not be
 * processed, potentially resulting in performance improvements for larger bots. Only disable events you are
 * 100% certain you don't need, as many are important, but not obviously so. The safest one to disable with the
 * most impact is typically `TYPING_START`.
 * @property {WebsocketOptions} [ws] Options for the websocket
 */exports.DefaultOptions={apiRequestMethod:'sequential',shardId:0,shardCount:0,messageCacheMaxSize:200,messageCacheLifetime:0,messageSweepInterval:0,fetchAllMembers:false,disableEveryone:false,sync:false,restWsBridgeTimeout:5000,disabledEvents:[],restTimeOffset:500,/**
   * Websocket options. These are left as snake_case to match the API.
   * @typedef {Object} WebsocketOptions
   * @property {number} [large_threshold=250] Number of members in a guild to be considered large
   * @property {boolean} [compress=true] Whether to compress data sent on the connection.
   * Defaults to `false` for browsers.
   */ws:{large_threshold:250,compress:typeof window==='undefined',properties:{$os:process?process.platform:'discord.js',$browser:'discord.js',$device:'discord.js',$referrer:'',$referring_domain:''}}};exports.Errors={NO_TOKEN:'Request to use token, but token was unavailable to the client.',NO_BOT_ACCOUNT:'Only bot accounts are able to make use of this feature.',NO_USER_ACCOUNT:'Only user accounts are able to make use of this feature.',BAD_WS_MESSAGE:'A bad message was received from the websocket; either bad compression, or not JSON.',TOOK_TOO_LONG:'Something took too long to do.',NOT_A_PERMISSION:'Invalid permission string or number.',INVALID_RATE_LIMIT_METHOD:'Unknown rate limiting method.',BAD_LOGIN:'Incorrect login details were provided.',INVALID_SHARD:'Invalid shard settings were provided.',INVALID_TOKEN:'An invalid token was provided.'};var PROTOCOL_VERSION=exports.PROTOCOL_VERSION=6;var HOST=exports.HOST='https://discordapp.com';var API=exports.API=HOST+'/api/v'+PROTOCOL_VERSION;var Endpoints=exports.Endpoints={// general
login:API+'/auth/login',logout:API+'/auth/logout',gateway:API+'/gateway',botGateway:API+'/gateway/bot',invite:function invite(id){return API+'/invite/'+id;},inviteLink:function inviteLink(id){return'https://discord.gg/'+id;},assets:function assets(asset){return HOST+'/assets/'+asset;},CDN:'https://cdn.discordapp.com',// users
user:function user(userID){return API+'/users/'+userID;},userChannels:function userChannels(userID){return Endpoints.user(userID)+'/channels';},userProfile:function userProfile(userID){return Endpoints.user(userID)+'/profile';},avatar:function avatar(userID,_avatar){if(userID==='1')return _avatar;return Endpoints.CDN+'/avatars/'+userID+'/'+_avatar+'.'+(_avatar.startsWith('a_')?'gif':'jpg')+'?size=1024';},me:API+'/users/@me',meGuild:function meGuild(guildID){return Endpoints.me+'/guilds/'+guildID;},meMentions:function meMentions(limit,roles,everyone,guildID){return'users/@me/mentions?limit='+limit+'&roles='+roles+'&everyone='+everyone+(guildID?'&guild_id='+guildID:'');},relationships:function relationships(userID){return Endpoints.user(userID)+'/relationships';},note:function note(userID){return Endpoints.me+'/notes/'+userID;},// guilds
guilds:API+'/guilds',guild:function guild(guildID){return Endpoints.guilds+'/'+guildID;},guildIcon:function guildIcon(guildID,hash){return Endpoints.CDN+'/icons/'+guildID+'/'+hash+'.jpg';},guildSplash:function guildSplash(guildID,hash){return Endpoints.CDN+'/splashes/'+guildID+'/'+hash+'.jpg';},guildPrune:function guildPrune(guildID){return Endpoints.guild(guildID)+'/prune';},guildEmbed:function guildEmbed(guildID){return Endpoints.guild(guildID)+'/embed';},guildInvites:function guildInvites(guildID){return Endpoints.guild(guildID)+'/invites';},guildRoles:function guildRoles(guildID){return Endpoints.guild(guildID)+'/roles';},guildRole:function guildRole(guildID,roleID){return Endpoints.guildRoles(guildID)+'/'+roleID;},guildBans:function guildBans(guildID){return Endpoints.guild(guildID)+'/bans';},guildIntegrations:function guildIntegrations(guildID){return Endpoints.guild(guildID)+'/integrations';},guildMembers:function guildMembers(guildID){return Endpoints.guild(guildID)+'/members';},guildMember:function guildMember(guildID,memberID){return Endpoints.guildMembers(guildID)+'/'+memberID;},guildMemberRole:function guildMemberRole(guildID,memberID,roleID){return Endpoints.guildMember(guildID,memberID)+'/roles/'+roleID;},guildMemberNickname:function guildMemberNickname(guildID){return Endpoints.guildMember(guildID,'@me')+'/nick';},guildChannels:function guildChannels(guildID){return Endpoints.guild(guildID)+'/channels';},guildEmojis:function guildEmojis(guildID){return Endpoints.guild(guildID)+'/emojis';},// channels
channels:API+'/channels',channel:function channel(channelID){return Endpoints.channels+'/'+channelID;},channelMessages:function channelMessages(channelID){return Endpoints.channel(channelID)+'/messages';},channelInvites:function channelInvites(channelID){return Endpoints.channel(channelID)+'/invites';},channelTyping:function channelTyping(channelID){return Endpoints.channel(channelID)+'/typing';},channelPermissions:function channelPermissions(channelID){return Endpoints.channel(channelID)+'/permissions';},channelMessage:function channelMessage(channelID,messageID){return Endpoints.channelMessages(channelID)+'/'+messageID;},channelWebhooks:function channelWebhooks(channelID){return Endpoints.channel(channelID)+'/webhooks';},// message reactions
messageReactions:function messageReactions(channelID,messageID){return Endpoints.channelMessage(channelID,messageID)+'/reactions';},messageReaction:function messageReaction(channel,msg,emoji,limit){return Endpoints.messageReactions(channel,msg)+'/'+emoji+(''+(limit?'?limit='+limit:''));},selfMessageReaction:function selfMessageReaction(channel,msg,emoji,limit){return Endpoints.messageReaction(channel,msg,emoji,limit)+'/@me';},userMessageReaction:function userMessageReaction(channel,msg,emoji,limit,id){return Endpoints.messageReaction(channel,msg,emoji,limit)+'/'+id;},// webhooks
webhook:function webhook(webhookID,token){return API+'/webhooks/'+webhookID+(token?'/'+token:'');},// oauth
myApplication:API+'/oauth2/applications/@me',getApp:function getApp(id){return API+'/oauth2/authorize?client_id='+id;},// emoji
emoji:function emoji(emojiID){return Endpoints.CDN+'/emojis/'+emojiID+'.png';}};exports.Status={READY:0,CONNECTING:1,RECONNECTING:2,IDLE:3,NEARLY:4,DISCONNECTED:5};exports.ChannelTypes={text:0,DM:1,voice:2,groupDM:3};exports.OPCodes={DISPATCH:0,HEARTBEAT:1,IDENTIFY:2,STATUS_UPDATE:3,VOICE_STATE_UPDATE:4,VOICE_GUILD_PING:5,RESUME:6,RECONNECT:7,REQUEST_GUILD_MEMBERS:8,INVALID_SESSION:9,HELLO:10,HEARTBEAT_ACK:11};exports.VoiceOPCodes={IDENTIFY:0,SELECT_PROTOCOL:1,READY:2,HEARTBEAT:3,SESSION_DESCRIPTION:4,SPEAKING:5};exports.Events={READY:'ready',GUILD_CREATE:'guildCreate',GUILD_DELETE:'guildDelete',GUILD_UPDATE:'guildUpdate',GUILD_UNAVAILABLE:'guildUnavailable',GUILD_AVAILABLE:'guildAvailable',GUILD_MEMBER_ADD:'guildMemberAdd',GUILD_MEMBER_REMOVE:'guildMemberRemove',GUILD_MEMBER_UPDATE:'guildMemberUpdate',GUILD_MEMBER_AVAILABLE:'guildMemberAvailable',GUILD_MEMBER_SPEAKING:'guildMemberSpeaking',GUILD_MEMBERS_CHUNK:'guildMembersChunk',GUILD_ROLE_CREATE:'roleCreate',GUILD_ROLE_DELETE:'roleDelete',GUILD_ROLE_UPDATE:'roleUpdate',GUILD_EMOJI_CREATE:'emojiCreate',GUILD_EMOJI_DELETE:'emojiDelete',GUILD_EMOJI_UPDATE:'emojiUpdate',GUILD_BAN_ADD:'guildBanAdd',GUILD_BAN_REMOVE:'guildBanRemove',CHANNEL_CREATE:'channelCreate',CHANNEL_DELETE:'channelDelete',CHANNEL_UPDATE:'channelUpdate',CHANNEL_PINS_UPDATE:'channelPinsUpdate',MESSAGE_CREATE:'message',MESSAGE_DELETE:'messageDelete',MESSAGE_UPDATE:'messageUpdate',MESSAGE_BULK_DELETE:'messageDeleteBulk',MESSAGE_REACTION_ADD:'messageReactionAdd',MESSAGE_REACTION_REMOVE:'messageReactionRemove',MESSAGE_REACTION_REMOVE_ALL:'messageReactionRemoveAll',USER_UPDATE:'userUpdate',USER_NOTE_UPDATE:'userNoteUpdate',PRESENCE_UPDATE:'presenceUpdate',VOICE_STATE_UPDATE:'voiceStateUpdate',TYPING_START:'typingStart',TYPING_STOP:'typingStop',DISCONNECT:'disconnect',RECONNECTING:'reconnecting',ERROR:'error',WARN:'warn',DEBUG:'debug'};/**
 * The type of a websocket message event, e.g. `MESSAGE_CREATE`. Here are the available events:
 * - READY
 * - GUILD_SYNC
 * - GUILD_CREATE
 * - GUILD_DELETE
 * - GUILD_UPDATE
 * - GUILD_MEMBER_ADD
 * - GUILD_MEMBER_REMOVE
 * - GUILD_MEMBER_UPDATE
 * - GUILD_MEMBERS_CHUNK
 * - GUILD_ROLE_CREATE
 * - GUILD_ROLE_DELETE
 * - GUILD_ROLE_UPDATE
 * - GUILD_BAN_ADD
 * - GUILD_BAN_REMOVE
 * - CHANNEL_CREATE
 * - CHANNEL_DELETE
 * - CHANNEL_UPDATE
 * - CHANNEL_PINS_UPDATE
 * - MESSAGE_CREATE
 * - MESSAGE_DELETE
 * - MESSAGE_UPDATE
 * - MESSAGE_DELETE_BULK
 * - MESSAGE_REACTION_ADD
 * - MESSAGE_REACTION_REMOVE
 * - MESSAGE_REACTION_REMOVE_ALL
 * - USER_UPDATE
 * - USER_NOTE_UPDATE
 * - PRESENCE_UPDATE
 * - VOICE_STATE_UPDATE
 * - TYPING_START
 * - VOICE_SERVER_UPDATE
 * - RELATIONSHIP_ADD
 * - RELATIONSHIP_REMOVE
 * @typedef {string} WSEventType
 */exports.WSEvents={READY:'READY',GUILD_SYNC:'GUILD_SYNC',GUILD_CREATE:'GUILD_CREATE',GUILD_DELETE:'GUILD_DELETE',GUILD_UPDATE:'GUILD_UPDATE',GUILD_MEMBER_ADD:'GUILD_MEMBER_ADD',GUILD_MEMBER_REMOVE:'GUILD_MEMBER_REMOVE',GUILD_MEMBER_UPDATE:'GUILD_MEMBER_UPDATE',GUILD_MEMBERS_CHUNK:'GUILD_MEMBERS_CHUNK',GUILD_ROLE_CREATE:'GUILD_ROLE_CREATE',GUILD_ROLE_DELETE:'GUILD_ROLE_DELETE',GUILD_ROLE_UPDATE:'GUILD_ROLE_UPDATE',GUILD_BAN_ADD:'GUILD_BAN_ADD',GUILD_BAN_REMOVE:'GUILD_BAN_REMOVE',GUILD_EMOJIS_UPDATE:'GUILD_EMOJIS_UPDATE',CHANNEL_CREATE:'CHANNEL_CREATE',CHANNEL_DELETE:'CHANNEL_DELETE',CHANNEL_UPDATE:'CHANNEL_UPDATE',CHANNEL_PINS_UPDATE:'CHANNEL_PINS_UPDATE',MESSAGE_CREATE:'MESSAGE_CREATE',MESSAGE_DELETE:'MESSAGE_DELETE',MESSAGE_UPDATE:'MESSAGE_UPDATE',MESSAGE_DELETE_BULK:'MESSAGE_DELETE_BULK',MESSAGE_REACTION_ADD:'MESSAGE_REACTION_ADD',MESSAGE_REACTION_REMOVE:'MESSAGE_REACTION_REMOVE',MESSAGE_REACTION_REMOVE_ALL:'MESSAGE_REACTION_REMOVE_ALL',USER_UPDATE:'USER_UPDATE',USER_NOTE_UPDATE:'USER_NOTE_UPDATE',PRESENCE_UPDATE:'PRESENCE_UPDATE',VOICE_STATE_UPDATE:'VOICE_STATE_UPDATE',TYPING_START:'TYPING_START',VOICE_SERVER_UPDATE:'VOICE_SERVER_UPDATE',RELATIONSHIP_ADD:'RELATIONSHIP_ADD',RELATIONSHIP_REMOVE:'RELATIONSHIP_REMOVE'};exports.MessageTypes={0:'DEFAULT',1:'RECIPIENT_ADD',2:'RECIPIENT_REMOVE',3:'CALL',4:'CHANNEL_NAME_CHANGE',5:'CHANNEL_ICON_CHANGE',6:'PINS_ADD'};exports.DefaultAvatars={BLURPLE:'6debd47ed13483642cf09e832ed0bc1b',GREY:'322c936a8c8be1b803cd94861bdfa868',GREEN:'dd4dbc0016779df1378e7812eabaa04d',ORANGE:'0e291f67c9274a1abdddeb3fd919cbaa',RED:'1cbd08c76f8af6dddce02c5138971129'};var PermissionFlags=exports.PermissionFlags={CREATE_INSTANT_INVITE:1<<0,KICK_MEMBERS:1<<1,BAN_MEMBERS:1<<2,ADMINISTRATOR:1<<3,MANAGE_CHANNELS:1<<4,MANAGE_GUILD:1<<5,ADD_REACTIONS:1<<6,READ_MESSAGES:1<<10,SEND_MESSAGES:1<<11,SEND_TTS_MESSAGES:1<<12,MANAGE_MESSAGES:1<<13,EMBED_LINKS:1<<14,ATTACH_FILES:1<<15,READ_MESSAGE_HISTORY:1<<16,MENTION_EVERYONE:1<<17,EXTERNAL_EMOJIS:1<<18,CONNECT:1<<20,SPEAK:1<<21,MUTE_MEMBERS:1<<22,DEAFEN_MEMBERS:1<<23,MOVE_MEMBERS:1<<24,USE_VAD:1<<25,CHANGE_NICKNAME:1<<26,MANAGE_NICKNAMES:1<<27,MANAGE_ROLES_OR_PERMISSIONS:1<<28,MANAGE_WEBHOOKS:1<<29,MANAGE_EMOJIS:1<<30};var _ALL_PERMISSIONS=0;for(var key in PermissionFlags){_ALL_PERMISSIONS|=PermissionFlags[key];}exports.ALL_PERMISSIONS=_ALL_PERMISSIONS;exports.DEFAULT_PERMISSIONS=104324097;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(24));/***/},/* 1 *//***/function(module,exports){var AbstractHandler=function(){function AbstractHandler(packetManager){_classCallCheck(this,AbstractHandler);this.packetManager=packetManager;}AbstractHandler.prototype.handle=function handle(packet){return packet;};return AbstractHandler;}();module.exports=AbstractHandler;/***/},/* 2 *//***/function(module,exports){/*

ABOUT ACTIONS

Actions are similar to WebSocket Packet Handlers, but since introducing
the REST API methods, in order to prevent rewriting code to handle data,
"actions" have been introduced. They're basically what Packet Handlers
used to be but they're strictly for manipulating data and making sure
that WebSocket events don't clash with REST methods.

*/var GenericAction=function(){function GenericAction(client){_classCallCheck(this,GenericAction);this.client=client;}GenericAction.prototype.handle=function handle(data){return data;};return GenericAction;}();module.exports=GenericAction;/***/},/* 3 *//***/function(module,exports){/**
 * A Map with additional utility methods. This is used throughout discord.js rather than Arrays for anything that has
 * an ID, for significantly improved performance and ease-of-use.
 * @extends {Map}
 */var Collection=function(_Map){_inherits(Collection,_Map);function Collection(iterable){_classCallCheck(this,Collection);/**
     * Cached array for the `array()` method - will be reset to `null` whenever `set()` or `delete()` are called.
     * @type {?Array}
     * @private
     */var _this=_possibleConstructorReturn(this,_Map.call(this,iterable));_this._array=null;/**
     * Cached array for the `keyArray()` method - will be reset to `null` whenever `set()` or `delete()` are called.
     * @type {?Array}
     * @private
     */_this._keyArray=null;return _this;}Collection.prototype.set=function set(key,val){this._array=null;this._keyArray=null;return _Map.prototype.set.call(this,key,val);};Collection.prototype.delete=function _delete(key){this._array=null;this._keyArray=null;return _Map.prototype.delete.call(this,key);};/**
   * Creates an ordered array of the values of this collection, and caches it internally. The array will only be
   * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
   * itself. If you don't want this caching behaviour, use `Array.from(collection.values())` instead.
   * @returns {Array}
   */Collection.prototype.array=function array(){if(!this._array||this._array.length!==this.size)this._array=Array.from(this.values());return this._array;};/**
   * Creates an ordered array of the keys of this collection, and caches it internally. The array will only be
   * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
   * itself. If you don't want this caching behaviour, use `Array.from(collection.keys())` instead.
   * @returns {Array}
   */Collection.prototype.keyArray=function keyArray(){if(!this._keyArray||this._keyArray.length!==this.size)this._keyArray=Array.from(this.keys());return this._keyArray;};/**
   * Obtains the first item in this collection.
   * @returns {*}
   */Collection.prototype.first=function first(){return this.values().next().value;};/**
   * Obtains the first key in this collection.
   * @returns {*}
   */Collection.prototype.firstKey=function firstKey(){return this.keys().next().value;};/**
   * Obtains the last item in this collection. This relies on the `array()` method, and thus the caching mechanism
   * applies here as well.
   * @returns {*}
   */Collection.prototype.last=function last(){var arr=this.array();return arr[arr.length-1];};/**
   * Obtains the last key in this collection. This relies on the `keyArray()` method, and thus the caching mechanism
   * applies here as well.
   * @returns {*}
   */Collection.prototype.lastKey=function lastKey(){var arr=this.keyArray();return arr[arr.length-1];};/**
   * Obtains a random item from this collection. This relies on the `array()` method, and thus the caching mechanism
   * applies here as well.
   * @returns {*}
   */Collection.prototype.random=function random(){var arr=this.array();return arr[Math.floor(Math.random()*arr.length)];};/**
   * Obtains a random key from this collection. This relies on the `keyArray()` method, and thus the caching mechanism
   * applies here as well.
   * @returns {*}
   */Collection.prototype.randomKey=function randomKey(){var arr=this.keyArray();return arr[Math.floor(Math.random()*arr.length)];};/**
   * Searches for all items where their specified property's value is identical to the given value
   * (`item[prop] === value`).
   * @param {string} prop The property to test against
   * @param {*} value The expected value
   * @returns {Array}
   * @example
   * collection.findAll('username', 'Bob');
   */Collection.prototype.findAll=function findAll(prop,value){if(typeof prop!=='string')throw new TypeError('Key must be a string.');if(typeof value==='undefined')throw new Error('Value must be specified.');var results=[];for(var _iterator=this.values(),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var item=_ref;if(item[prop]===value)results.push(item);}return results;};/**
   * Searches for a single item where its specified property's value is identical to the given value
   * (`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to
   * [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
   * <warn>Do not use this to obtain an item by its ID. Instead, use `collection.get(id)`. See
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.</warn>
   * @param {string|Function} propOrFn The property to test against, or the function to test with
   * @param {*} [value] The expected value - only applicable and required if using a property for the first argument
   * @returns {*}
   * @example
   * collection.find('username', 'Bob');
   * @example
   * collection.find(val => val.username === 'Bob');
   */Collection.prototype.find=function find(propOrFn,value){if(typeof propOrFn==='string'){if(typeof value==='undefined')throw new Error('Value must be specified.');if(propOrFn==='id')throw new RangeError('Don\'t use .find() with IDs. Instead, use .get(id).');for(var _iterator2=this.values(),_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var item=_ref2;if(item[propOrFn]===value)return item;}return null;}else if(typeof propOrFn==='function'){for(var _iterator3=this,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var _ref4=_ref3,key=_ref4[0],val=_ref4[1];if(propOrFn(val,key,this))return val;}return null;}else{throw new Error('First argument must be a property string or a function.');}};/* eslint-disable max-len *//**
   * Searches for the key of a single item where its specified property's value is identical to the given value
   * (`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to
   * [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
   * @param {string|Function} propOrFn The property to test against, or the function to test with
   * @param {*} [value] The expected value - only applicable and required if using a property for the first argument
   * @returns {*}
   * @example
   * collection.findKey('username', 'Bob');
   * @example
   * collection.findKey(val => val.username === 'Bob');
   *//* eslint-enable max-len */Collection.prototype.findKey=function findKey(propOrFn,value){if(typeof propOrFn==='string'){if(typeof value==='undefined')throw new Error('Value must be specified.');for(var _iterator4=this,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[Symbol.iterator]();;){var _ref5;if(_isArray4){if(_i4>=_iterator4.length)break;_ref5=_iterator4[_i4++];}else{_i4=_iterator4.next();if(_i4.done)break;_ref5=_i4.value;}var _ref6=_ref5,key=_ref6[0],val=_ref6[1];if(val[propOrFn]===value)return key;}return null;}else if(typeof propOrFn==='function'){for(var _iterator5=this,_isArray5=Array.isArray(_iterator5),_i5=0,_iterator5=_isArray5?_iterator5:_iterator5[Symbol.iterator]();;){var _ref7;if(_isArray5){if(_i5>=_iterator5.length)break;_ref7=_iterator5[_i5++];}else{_i5=_iterator5.next();if(_i5.done)break;_ref7=_i5.value;}var _ref8=_ref7,key=_ref8[0],val=_ref8[1];if(propOrFn(val,key,this))return key;}return null;}else{throw new Error('First argument must be a property string or a function.');}};/**
   * Searches for the existence of a single item where its specified property's value is identical to the given value
   * (`item[prop] === value`).
   * <warn>Do not use this to check for an item by its ID. Instead, use `collection.has(id)`. See
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has) for details.</warn>
   * @param {string} prop The property to test against
   * @param {*} value The expected value
   * @returns {boolean}
   * @example
   * if (collection.exists('username', 'Bob')) {
   *  console.log('user here!');
   * }
   */Collection.prototype.exists=function exists(prop,value){if(prop==='id')throw new RangeError('Don\'t use .exists() with IDs. Instead, use .has(id).');return Boolean(this.find(prop,value));};/**
   * Identical to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * but returns a Collection instead of an Array.
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {Collection}
   */Collection.prototype.filter=function filter(fn,thisArg){if(thisArg)fn=fn.bind(thisArg);var results=new Collection();for(var _iterator6=this,_isArray6=Array.isArray(_iterator6),_i6=0,_iterator6=_isArray6?_iterator6:_iterator6[Symbol.iterator]();;){var _ref9;if(_isArray6){if(_i6>=_iterator6.length)break;_ref9=_iterator6[_i6++];}else{_i6=_iterator6.next();if(_i6.done)break;_ref9=_i6.value;}var _ref10=_ref9,key=_ref10[0],val=_ref10[1];if(fn(val,key,this))results.set(key,val);}return results;};/**
   * Identical to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {Array}
   */Collection.prototype.filterArray=function filterArray(fn,thisArg){if(thisArg)fn=fn.bind(thisArg);var results=[];for(var _iterator7=this,_isArray7=Array.isArray(_iterator7),_i7=0,_iterator7=_isArray7?_iterator7:_iterator7[Symbol.iterator]();;){var _ref11;if(_isArray7){if(_i7>=_iterator7.length)break;_ref11=_iterator7[_i7++];}else{_i7=_iterator7.next();if(_i7.done)break;_ref11=_i7.value;}var _ref12=_ref11,key=_ref12[0],val=_ref12[1];if(fn(val,key,this))results.push(val);}return results;};/**
   * Identical to
   * [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
   * @param {Function} fn Function that produces an element of the new array, taking three arguments
   * @param {*} [thisArg] Value to use as `this` when executing function
   * @returns {Array}
   */Collection.prototype.map=function map(fn,thisArg){if(thisArg)fn=fn.bind(thisArg);var arr=new Array(this.size);var i=0;for(var _iterator8=this,_isArray8=Array.isArray(_iterator8),_i8=0,_iterator8=_isArray8?_iterator8:_iterator8[Symbol.iterator]();;){var _ref13;if(_isArray8){if(_i8>=_iterator8.length)break;_ref13=_iterator8[_i8++];}else{_i8=_iterator8.next();if(_i8.done)break;_ref13=_i8.value;}var _ref14=_ref13,key=_ref14[0],val=_ref14[1];arr[i++]=fn(val,key,this);}return arr;};/**
   * Identical to
   * [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {boolean}
   */Collection.prototype.some=function some(fn,thisArg){if(thisArg)fn=fn.bind(thisArg);for(var _iterator9=this,_isArray9=Array.isArray(_iterator9),_i9=0,_iterator9=_isArray9?_iterator9:_iterator9[Symbol.iterator]();;){var _ref15;if(_isArray9){if(_i9>=_iterator9.length)break;_ref15=_iterator9[_i9++];}else{_i9=_iterator9.next();if(_i9.done)break;_ref15=_i9.value;}var _ref16=_ref15,key=_ref16[0],val=_ref16[1];if(fn(val,key,this))return true;}return false;};/**
   * Identical to
   * [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {boolean}
   */Collection.prototype.every=function every(fn,thisArg){if(thisArg)fn=fn.bind(thisArg);for(var _iterator10=this,_isArray10=Array.isArray(_iterator10),_i10=0,_iterator10=_isArray10?_iterator10:_iterator10[Symbol.iterator]();;){var _ref17;if(_isArray10){if(_i10>=_iterator10.length)break;_ref17=_iterator10[_i10++];}else{_i10=_iterator10.next();if(_i10.done)break;_ref17=_i10.value;}var _ref18=_ref17,key=_ref18[0],val=_ref18[1];if(!fn(val,key,this))return false;}return true;};/**
   * Identical to
   * [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
   * @param {Function} fn Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
   * and `collection`
   * @param {*} [initialValue] Starting value for the accumulator
   * @returns {*}
   */Collection.prototype.reduce=function reduce(fn,initialValue){var accumulator=void 0;if(typeof initialValue!=='undefined'){accumulator=initialValue;for(var _iterator11=this,_isArray11=Array.isArray(_iterator11),_i11=0,_iterator11=_isArray11?_iterator11:_iterator11[Symbol.iterator]();;){var _ref19;if(_isArray11){if(_i11>=_iterator11.length)break;_ref19=_iterator11[_i11++];}else{_i11=_iterator11.next();if(_i11.done)break;_ref19=_i11.value;}var _ref20=_ref19,key=_ref20[0],val=_ref20[1];accumulator=fn(accumulator,val,key,this);}}else{var first=true;for(var _iterator12=this,_isArray12=Array.isArray(_iterator12),_i12=0,_iterator12=_isArray12?_iterator12:_iterator12[Symbol.iterator]();;){var _ref21;if(_isArray12){if(_i12>=_iterator12.length)break;_ref21=_iterator12[_i12++];}else{_i12=_iterator12.next();if(_i12.done)break;_ref21=_i12.value;}var _ref22=_ref21,key=_ref22[0],val=_ref22[1];if(first){accumulator=val;first=false;continue;}accumulator=fn(accumulator,val,key,this);}}return accumulator;};/**
   * Combines this collection with others into a new collection. None of the source collections are modified.
   * @param {...Collection} collections Collections to merge
   * @returns {Collection}
   * @example const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
   */Collection.prototype.concat=function concat(){var newColl=new this.constructor();for(var _iterator13=this,_isArray13=Array.isArray(_iterator13),_i13=0,_iterator13=_isArray13?_iterator13:_iterator13[Symbol.iterator]();;){var _ref23;if(_isArray13){if(_i13>=_iterator13.length)break;_ref23=_iterator13[_i13++];}else{_i13=_iterator13.next();if(_i13.done)break;_ref23=_i13.value;}var _ref25=_ref23,key=_ref25[0],val=_ref25[1];newColl.set(key,val);}for(var _len=arguments.length,collections=Array(_len),_key=0;_key<_len;_key++){collections[_key]=arguments[_key];}for(var _iterator14=collections,_isArray14=Array.isArray(_iterator14),_i14=0,_iterator14=_isArray14?_iterator14:_iterator14[Symbol.iterator]();;){var _ref24;if(_isArray14){if(_i14>=_iterator14.length)break;_ref24=_iterator14[_i14++];}else{_i14=_iterator14.next();if(_i14.done)break;_ref24=_i14.value;}var coll=_ref24;for(var _iterator15=coll,_isArray15=Array.isArray(_iterator15),_i15=0,_iterator15=_isArray15?_iterator15:_iterator15[Symbol.iterator]();;){var _ref26;if(_isArray15){if(_i15>=_iterator15.length)break;_ref26=_iterator15[_i15++];}else{_i15=_iterator15.next();if(_i15.done)break;_ref26=_i15.value;}var _ref27=_ref26,key=_ref27[0],val=_ref27[1];newColl.set(key,val);}}return newColl;};/**
   * Calls the `delete()` method on all items that have it.
   * @returns {Promise[]}
   */Collection.prototype.deleteAll=function deleteAll(){var returns=[];for(var _iterator16=this.values(),_isArray16=Array.isArray(_iterator16),_i16=0,_iterator16=_isArray16?_iterator16:_iterator16[Symbol.iterator]();;){var _ref28;if(_isArray16){if(_i16>=_iterator16.length)break;_ref28=_iterator16[_i16++];}else{_i16=_iterator16.next();if(_i16.done)break;_ref28=_i16.value;}var item=_ref28;if(item.delete)returns.push(item.delete());}return returns;};/**
   * Checks if this collection shares identical key-value pairings with another.
   * This is different to checking for equality using equal-signs, because
   * the collections may be different objects, but contain the same data.
   * @param {Collection} collection Collection to compare with
   * @returns {boolean} Whether the collections have identical contents
   */Collection.prototype.equals=function equals(collection){if(!collection)return false;if(this===collection)return true;if(this.size!==collection.size)return false;return!this.find(function(value,key){var testVal=collection.get(key);return testVal!==value||testVal===undefined&&!collection.has(key);});};return Collection;}(Map);module.exports=Collection;/***/},/* 4 *//***/function(module,exports){module.exports=function cloneObject(obj){var cloned=Object.create(obj);Object.assign(cloned,obj);return cloned;};/***/},/* 5 *//***/function(module,exports,__webpack_require__){"use strict";var TYPED_OK=typeof Uint8Array!=='undefined'&&typeof Uint16Array!=='undefined'&&typeof Int32Array!=='undefined';exports.assign=function(obj/*from1, from2, from3, ...*/){var sources=Array.prototype.slice.call(arguments,1);while(sources.length){var source=sources.shift();if(!source){continue;}if((typeof source==='undefined'?'undefined':_typeof(source))!=='object'){throw new TypeError(source+'must be non-object');}for(var p in source){if(source.hasOwnProperty(p)){obj[p]=source[p];}}}return obj;};// reduce buffer size, avoiding mem copy
exports.shrinkBuf=function(buf,size){if(buf.length===size){return buf;}if(buf.subarray){return buf.subarray(0,size);}buf.length=size;return buf;};var fnTyped={arraySet:function arraySet(dest,src,src_offs,len,dest_offs){if(src.subarray&&dest.subarray){dest.set(src.subarray(src_offs,src_offs+len),dest_offs);return;}// Fallback to ordinary array
for(var i=0;i<len;i++){dest[dest_offs+i]=src[src_offs+i];}},// Join array of chunks to single array.
flattenChunks:function flattenChunks(chunks){var i,l,len,pos,chunk,result;// calculate data length
len=0;for(i=0,l=chunks.length;i<l;i++){len+=chunks[i].length;}// join chunks
result=new Uint8Array(len);pos=0;for(i=0,l=chunks.length;i<l;i++){chunk=chunks[i];result.set(chunk,pos);pos+=chunk.length;}return result;}};var fnUntyped={arraySet:function arraySet(dest,src,src_offs,len,dest_offs){for(var i=0;i<len;i++){dest[dest_offs+i]=src[src_offs+i];}},// Join array of chunks to single array.
flattenChunks:function flattenChunks(chunks){return[].concat.apply([],chunks);}};// Enable/Disable typed arrays use, for testing
//
exports.setTyped=function(on){if(on){exports.Buf8=Uint8Array;exports.Buf16=Uint16Array;exports.Buf32=Int32Array;exports.assign(exports,fnTyped);}else{exports.Buf8=Array;exports.Buf16=Array;exports.Buf32=Array;exports.assign(exports,fnUntyped);}};exports.setTyped(TYPED_OK);/***/},/* 6 *//***/function(module,exports,__webpack_require__){var TextBasedChannel=__webpack_require__(12);var Constants=__webpack_require__(0);var Presence=__webpack_require__(7).Presence;/**
 * Represents a user on Discord.
 * @implements {TextBasedChannel}
 */var User=function(){function User(client,data){_classCallCheck(this,User);/**
     * The Client that created the instance of the the User.
     * @name User#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});if(data)this.setup(data);}User.prototype.setup=function setup(data){/**
     * The ID of the user
     * @type {string}
     */this.id=data.id;/**
     * The username of the user
     * @type {string}
     */this.username=data.username;/**
     * A discriminator based on username for the user
     * @type {string}
     */this.discriminator=data.discriminator;/**
     * The ID of the user's avatar
     * @type {string}
     */this.avatar=data.avatar;/**
     * Whether or not the user is a bot.
     * @type {boolean}
     */this.bot=Boolean(data.bot);/**
     * The ID of the last message sent by the user, if one was sent.
     * @type {?string}
     */this.lastMessageID=null;};User.prototype.patch=function patch(data){var _arr=['id','username','discriminator','avatar','bot'];for(var _i17=0;_i17<_arr.length;_i17++){var prop=_arr[_i17];if(typeof data[prop]!=='undefined')this[prop]=data[prop];}if(data.token)this.client.token=data.token;};/**
   * The timestamp the user was created at
   * @type {number}
   * @readonly
   *//**
   * Check whether the user is typing in a channel.
   * @param {ChannelResolvable} channel The channel to check in
   * @returns {boolean}
   */User.prototype.typingIn=function typingIn(channel){channel=this.client.resolver.resolveChannel(channel);return channel._typing.has(this.id);};/**
   * Get the time that the user started typing.
   * @param {ChannelResolvable} channel The channel to get the time in
   * @returns {?Date}
   */User.prototype.typingSinceIn=function typingSinceIn(channel){channel=this.client.resolver.resolveChannel(channel);return channel._typing.has(this.id)?new Date(channel._typing.get(this.id).since):null;};/**
   * Get the amount of time the user has been typing in a channel for (in milliseconds), or -1 if they're not typing.
   * @param {ChannelResolvable} channel The channel to get the time in
   * @returns {number}
   */User.prototype.typingDurationIn=function typingDurationIn(channel){channel=this.client.resolver.resolveChannel(channel);return channel._typing.has(this.id)?channel._typing.get(this.id).elapsedTime:-1;};/**
   * The DM between the client's user and this user
   * @type {?DMChannel}
   *//**
   * Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.
   * @returns {Promise<DMChannel>}
   */User.prototype.deleteDM=function deleteDM(){return this.client.rest.methods.deleteChannel(this);};/**
   * Sends a friend request to the user
   * <warn>This is only available when using a user account.</warn>
   * @returns {Promise<User>}
   */User.prototype.addFriend=function addFriend(){return this.client.rest.methods.addFriend(this);};/**
   * Removes the user from your friends
   * <warn>This is only available when using a user account.</warn>
   * @returns {Promise<User>}
   */User.prototype.removeFriend=function removeFriend(){return this.client.rest.methods.removeFriend(this);};/**
   * Blocks the user
   * <warn>This is only available when using a user account.</warn>
   * @returns {Promise<User>}
   */User.prototype.block=function block(){return this.client.rest.methods.blockUser(this);};/**
   * Unblocks the user
   * <warn>This is only available when using a user account.</warn>
   * @returns {Promise<User>}
   */User.prototype.unblock=function unblock(){return this.client.rest.methods.unblockUser(this);};/**
   * Get the profile of the user
   * <warn>This is only available when using a user account.</warn>
   * @returns {Promise<UserProfile>}
   */User.prototype.fetchProfile=function fetchProfile(){return this.client.rest.methods.fetchUserProfile(this);};/**
   * Sets a note for the user
   * <warn>This is only available when using a user account.</warn>
   * @param {string} note The note to set for the user
   * @returns {Promise<User>}
   */User.prototype.setNote=function setNote(note){return this.client.rest.methods.setNote(this,note);};/**
   * Checks if the user is equal to another. It compares ID, username, discriminator, avatar, and bot flags.
   * It is recommended to compare equality by using `user.id === user2.id` unless you want to compare all properties.
   * @param {User} user User to compare with
   * @returns {boolean}
   */User.prototype.equals=function equals(user){var equal=user&&this.id===user.id&&this.username===user.username&&this.discriminator===user.discriminator&&this.avatar===user.avatar&&this.bot===Boolean(user.bot);return equal;};/**
   * When concatenated with a string, this automatically concatenates the user's mention instead of the User object.
   * @returns {string}
   * @example
   * // logs: Hello from <@123456789>!
   * console.log(`Hello from ${user}!`);
   */User.prototype.toString=function toString(){return'<@'+this.id+'>';};// These are here only for documentation purposes - they are implemented by TextBasedChannel
User.prototype.send=function send(){return;};User.prototype.sendMessage=function sendMessage(){return;};User.prototype.sendEmbed=function sendEmbed(){return;};User.prototype.sendFile=function sendFile(){return;};User.prototype.sendCode=function sendCode(){return;};_createClass(User,[{key:'createdTimestamp',get:function get(){return this.id/4194304+1420070400000;}/**
   * The time the user was created
   * @type {Date}
   * @readonly
   */},{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * The presence of this user
   * @type {Presence}
   * @readonly
   */},{key:'presence',get:function get(){if(this.client.presences.has(this.id))return this.client.presences.get(this.id);for(var _iterator17=this.client.guilds.values(),_isArray17=Array.isArray(_iterator17),_i18=0,_iterator17=_isArray17?_iterator17:_iterator17[Symbol.iterator]();;){var _ref29;if(_isArray17){if(_i18>=_iterator17.length)break;_ref29=_iterator17[_i18++];}else{_i18=_iterator17.next();if(_i18.done)break;_ref29=_i18.value;}var guild=_ref29;if(guild.presences.has(this.id))return guild.presences.get(this.id);}return new Presence();}/**
   * A link to the user's avatar (if they have one, otherwise null)
   * @type {?string}
   * @readonly
   */},{key:'avatarURL',get:function get(){if(!this.avatar)return null;return Constants.Endpoints.avatar(this.id,this.avatar);}/**
   * A link to the user's default avatar
   * @type {string}
   * @readonly
   */},{key:'defaultAvatarURL',get:function get(){var defaultAvatars=Object.values(Constants.DefaultAvatars);var defaultAvatar=this.discriminator%defaultAvatars.length;return Constants.Endpoints.assets(defaultAvatars[defaultAvatar]+'.png');}/**
   * A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned
   * @type {string}
   * @readonly
   */},{key:'displayAvatarURL',get:function get(){return this.avatarURL||this.defaultAvatarURL;}/**
   * The note that is set for the user
   * <warn>This is only available when using a user account.</warn>
   * @type {?string}
   * @readonly
   */},{key:'note',get:function get(){return this.client.user.notes.get(this.id)||null;}},{key:'dmChannel',get:function get(){var _this2=this;return this.client.channels.filter(function(c){return c.type==='dm';}).find(function(c){return c.recipient.id===_this2.id;});}}]);return User;}();TextBasedChannel.applyToClass(User);module.exports=User;/***/},/* 7 *//***/function(module,exports){/**
 * Represents a user's presence
 */var Presence=function(){function Presence(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Presence);/**
     * The status of the presence:
     *
     * * **`online`** - user is online
     * * **`offline`** - user is offline or invisible
     * * **`idle`** - user is AFK
     * * **`dnd`** - user is in Do not Disturb
     * @type {string}
     */this.status=data.status||'offline';/**
     * The game that the user is playing, `null` if they aren't playing a game.
     * @type {?Game}
     */this.game=data.game?new Game(data.game):null;}Presence.prototype.update=function update(data){this.status=data.status||this.status;this.game=data.game?new Game(data.game):null;};/**
   * Whether this presence is equal to another
   * @param {Presence} presence Presence to compare with
   * @returns {boolean}
   */Presence.prototype.equals=function equals(presence){return this===presence||(presence&&this.status===presence.status&&this.game?this.game.equals(presence.game):!presence.game);};return Presence;}();/**
 * Represents a game that is part of a user's presence.
 */var Game=function(){function Game(data){_classCallCheck(this,Game);/**
     * The name of the game being played
     * @type {string}
     */this.name=data.name;/**
     * The type of the game status
     * @type {number}
     */this.type=data.type;/**
     * If the game is being streamed, a link to the stream
     * @type {?string}
     */this.url=data.url||null;}/**
   * Whether or not the game is being streamed
   * @type {boolean}
   * @readonly
   *//**
   * Whether this game is equal to another game
   * @param {Game} game Game to compare with
   * @returns {boolean}
   */Game.prototype.equals=function equals(game){return this===game||game&&this.name===game.name&&this.type===game.type&&this.url===game.url;};_createClass(Game,[{key:'streaming',get:function get(){return this.type===1;}}]);return Game;}();exports.Presence=Presence;exports.Game=Game;/***/},/* 8 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);/**
 * Represents a role on Discord
 */var Role=function(){function Role(guild,data){_classCallCheck(this,Role);/**
     * The client that instantiated the role
     * @name Role#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:guild.client});/**
     * The guild that the role belongs to
     * @type {Guild}
     */this.guild=guild;if(data)this.setup(data);}Role.prototype.setup=function setup(data){/**
     * The ID of the role (unique to the guild it is part of)
     * @type {string}
     */this.id=data.id;/**
     * The name of the role
     * @type {string}
     */this.name=data.name;/**
     * The base 10 color of the role
     * @type {number}
     */this.color=data.color;/**
     * If true, users that are part of this role will appear in a separate category in the users list
     * @type {boolean}
     */this.hoist=data.hoist;/**
     * The position of the role in the role manager
     * @type {number}
     */this.position=data.position;/**
     * The evaluated permissions number
     * @type {number}
     */this.permissions=data.permissions;/**
     * Whether or not the role is managed by an external service
     * @type {boolean}
     */this.managed=data.managed;/**
     * Whether or not the role can be mentioned by anyone
     * @type {boolean}
     */this.mentionable=data.mentionable;};/**
   * The timestamp the role was created at
   * @type {number}
   * @readonly
   *//**
   * Get an object mapping permission names to whether or not the role enables that permission
   * @returns {Object<string, boolean>}
   * @example
   * // print the serialized role
   * console.log(role.serialize());
   */Role.prototype.serialize=function serialize(){var serializedPermissions={};for(var permissionName in Constants.PermissionFlags){serializedPermissions[permissionName]=this.hasPermission(permissionName);}return serializedPermissions;};/**
   * Checks if the role has a permission.
   * @param {PermissionResolvable} permission The permission to check for
   * @param {boolean} [explicit=false] Whether to require the role to explicitly have the exact permission
   * @returns {boolean}
   * @example
   * // see if a role can ban a member
   * if (role.hasPermission('BAN_MEMBERS')) {
   *   console.log('This role can ban members');
   * } else {
   *   console.log('This role can\'t ban members');
   * }
   */Role.prototype.hasPermission=function hasPermission(permission){var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;permission=this.client.resolver.resolvePermission(permission);if(!explicit&&(this.permissions&Constants.PermissionFlags.ADMINISTRATOR)>0)return true;return(this.permissions&permission)>0;};/**
   * Checks if the role has all specified permissions.
   * @param {PermissionResolvable[]} permissions The permissions to check for
   * @param {boolean} [explicit=false] Whether to require the role to explicitly have the exact permissions
   * @returns {boolean}
   */Role.prototype.hasPermissions=function hasPermissions(permissions){var _this3=this;var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return permissions.every(function(p){return _this3.hasPermission(p,explicit);});};/**
   * Compares this role's position to another role's.
   * @param {Role} role Role to compare to this one
   * @returns {number} Negative number if the this role's position is lower (other role's is higher),
   * positive number if the this one is higher (other's is lower), 0 if equal
   */Role.prototype.comparePositionTo=function comparePositionTo(role){return this.constructor.comparePositions(this,role);};/**
   * The data for a role
   * @typedef {Object} RoleData
   * @property {string} [name] The name of the role
   * @property {number|string} [color] The color of the role, either a hex string or a base 10 number
   * @property {boolean} [hoist] Whether or not the role should be hoisted
   * @property {number} [position] The position of the role
   * @property {string[]} [permissions] The permissions of the role
   * @property {boolean} [mentionable] Whether or not the role should be mentionable
   *//**
   * Edits the role
   * @param {RoleData} data The new data for the role
   * @returns {Promise<Role>}
   * @example
   * // edit a role
   * role.edit({name: 'new role'})
   *  .then(r => console.log(`Edited role ${r}`))
   *  .catch(console.error);
   */Role.prototype.edit=function edit(data){return this.client.rest.methods.updateGuildRole(this,data);};/**
   * Set a new name for the role
   * @param {string} name The new name of the role
   * @returns {Promise<Role>}
   * @example
   * // set the name of the role
   * role.setName('new role')
   *  .then(r => console.log(`Edited name of role ${r}`))
   *  .catch(console.error);
   */Role.prototype.setName=function setName(name){return this.edit({name:name});};/**
   * Set a new color for the role
   * @param {number|string} color The new color for the role, either a hex string or a base 10 number
   * @returns {Promise<Role>}
   * @example
   * // set the color of a role
   * role.setColor('#FF0000')
   *  .then(r => console.log(`Set color of role ${r}`))
   *  .catch(console.error);
   */Role.prototype.setColor=function setColor(color){return this.edit({color:color});};/**
   * Set whether or not the role should be hoisted
   * @param {boolean} hoist Whether or not to hoist the role
   * @returns {Promise<Role>}
   * @example
   * // set the hoist of the role
   * role.setHoist(true)
   *  .then(r => console.log(`Role hoisted: ${r.hoist}`))
   *  .catch(console.error);
   */Role.prototype.setHoist=function setHoist(hoist){return this.edit({hoist:hoist});};/**
   * Set the position of the role
   * @param {number} position The position of the role
   * @returns {Promise<Role>}
   * @example
   * // set the position of the role
   * role.setPosition(1)
   *  .then(r => console.log(`Role position: ${r.position}`))
   *  .catch(console.error);
   */Role.prototype.setPosition=function setPosition(position){var _this4=this;return this.guild.setRolePosition(this,position).then(function(){return _this4;});};/**
   * Set the permissions of the role
   * @param {string[]} permissions The permissions of the role
   * @returns {Promise<Role>}
   * @example
   * // set the permissions of the role
   * role.setPermissions(['KICK_MEMBERS', 'BAN_MEMBERS'])
   *  .then(r => console.log(`Role updated ${r}`))
   *  .catch(console.error);
   */Role.prototype.setPermissions=function setPermissions(permissions){return this.edit({permissions:permissions});};/**
   * Set whether this role is mentionable
   * @param {boolean} mentionable Whether this role should be mentionable
   * @returns {Promise<Role>}
   * @example
   * // make the role mentionable
   * role.setMentionable(true)
   *  .then(r => console.log(`Role updated ${r}`))
   *  .catch(console.error);
   */Role.prototype.setMentionable=function setMentionable(mentionable){return this.edit({mentionable:mentionable});};/**
   * Deletes the role
   * @returns {Promise<Role>}
   * @example
   * // delete a role
   * role.delete()
   *  .then(r => console.log(`Deleted role ${r}`))
   *  .catch(console.error);
   */Role.prototype.delete=function _delete(){return this.client.rest.methods.deleteGuildRole(this);};/**
   * Whether this role equals another role. It compares all properties, so for most operations
   * it is advisable to just compare `role.id === role2.id` as it is much faster and is often
   * what most users need.
   * @param {Role} role Role to compare with
   * @returns {boolean}
   */Role.prototype.equals=function equals(role){return role&&this.id===role.id&&this.name===role.name&&this.color===role.color&&this.hoist===role.hoist&&this.position===role.position&&this.permissions===role.permissions&&this.managed===role.managed;};/**
   * When concatenated with a string, this automatically concatenates the role mention rather than the Role object.
   * @returns {string}
   */Role.prototype.toString=function toString(){if(this.id===this.guild.id)return'@everyone';return'<@&'+this.id+'>';};/**
   * Compares the positions of two roles.
   * @param {Role} role1 First role to compare
   * @param {Role} role2 Second role to compare
   * @returns {number} Negative number if the first role's position is lower (second role's is higher),
   * positive number if the first's is higher (second's is lower), 0 if equal
   */Role.comparePositions=function comparePositions(role1,role2){if(role1.position===role2.position)return role2.id-role1.id;return role1.position-role2.position;};_createClass(Role,[{key:'createdTimestamp',get:function get(){return this.id/4194304+1420070400000;}/**
   * The time the role was created
   * @type {Date}
   * @readonly
   */},{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * The hexadecimal version of the role color, with a leading hashtag.
   * @type {string}
   * @readonly
   */},{key:'hexColor',get:function get(){var col=this.color.toString(16);while(col.length<6){col='0'+col;}return'#'+col;}/**
   * The cached guild members that have this role.
   * @type {Collection<string, GuildMember>}
   * @readonly
   */},{key:'members',get:function get(){var _this5=this;return this.guild.members.filter(function(m){return m.roles.has(_this5.id);});}/**
   * Whether the role is editable by the client user.
   * @type {boolean}
   * @readonly
   */},{key:'editable',get:function get(){if(this.managed)return false;var clientMember=this.guild.member(this.client.user);if(!clientMember.hasPermission(Constants.PermissionFlags.MANAGE_ROLES_OR_PERMISSIONS))return false;return clientMember.highestRole.comparePositionTo(this)>0;}}]);return Role;}();module.exports=Role;/***/},/* 9 *//***/function(module,exports){/**
 * Represents any channel on Discord
 */var Channel=function(){function Channel(client,data){_classCallCheck(this,Channel);/**
     * The client that instantiated the Channel
     * @name Channel#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});/**
     * The type of the channel, either:
     * * `dm` - a DM channel
     * * `group` - a Group DM channel
     * * `text` - a guild text channel
     * * `voice` - a guild voice channel
     * @type {string}
     */this.type=null;if(data)this.setup(data);}Channel.prototype.setup=function setup(data){/**
     * The unique ID of the channel
     * @type {string}
     */this.id=data.id;};/**
   * The timestamp the channel was created at
   * @type {number}
   * @readonly
   *//**
   * Deletes the channel
   * @returns {Promise<Channel>}
   * @example
   * // delete the channel
   * channel.delete()
   *  .then() // success
   *  .catch(console.error); // log error
   */Channel.prototype.delete=function _delete(){return this.client.rest.methods.deleteChannel(this);};_createClass(Channel,[{key:'createdTimestamp',get:function get(){return this.id/4194304+1420070400000;}/**
   * The time the channel was created
   * @type {Date}
   * @readonly
   */},{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}}]);return Channel;}();module.exports=Channel;/***/},/* 10 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);var Collection=__webpack_require__(3);/**
 * Represents a custom emoji
 */var Emoji=function(){function Emoji(guild,data){_classCallCheck(this,Emoji);/**
     * The Client that instantiated this object
     * @name Emoji#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:guild.client});/**
     * The guild this emoji is part of
     * @type {Guild}
     */this.guild=guild;this.setup(data);}Emoji.prototype.setup=function setup(data){/**
     * The ID of the emoji
     * @type {string}
     */this.id=data.id;/**
     * The name of the emoji
     * @type {string}
     */this.name=data.name;/**
     * Whether or not this emoji requires colons surrounding it
     * @type {boolean}
     */this.requiresColons=data.require_colons;/**
     * Whether this emoji is managed by an external service
     * @type {boolean}
     */this.managed=data.managed;this._roles=data.roles;};/**
   * The timestamp the emoji was created at
   * @type {number}
   * @readonly
   *//**
   * When concatenated with a string, this automatically returns the emoji mention rather than the object.
   * @returns {string}
   * @example
   * // send an emoji:
   * const emoji = guild.emojis.first();
   * msg.reply(`Hello! ${emoji}`);
   */Emoji.prototype.toString=function toString(){return this.requiresColons?'<:'+this.name+':'+this.id+'>':this.name;};/**
   * Whether this emoji is the same as another one
   * @param {Emoji|Object} other the emoji to compare it to
   * @returns {boolean} whether the emoji is equal to the given emoji or not
   */Emoji.prototype.equals=function equals(other){if(other instanceof Emoji){return other.id===this.id&&other.name===this.name&&other.managed===this.managed&&other.requiresColons===this.requiresColons;}else{return other.id===this.id&&other.name===this.name;}};/**
   * The identifier of this emoji, used for message reactions
   * @readonly
   * @type {string}
   */_createClass(Emoji,[{key:'createdTimestamp',get:function get(){return this.id/4194304+1420070400000;}/**
   * The time the emoji was created
   * @type {Date}
   * @readonly
   */},{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * A collection of roles this emoji is active for (empty if all), mapped by role ID.
   * @type {Collection<string, Role>}
   * @readonly
   */},{key:'roles',get:function get(){var roles=new Collection();for(var _iterator18=this._roles,_isArray18=Array.isArray(_iterator18),_i19=0,_iterator18=_isArray18?_iterator18:_iterator18[Symbol.iterator]();;){var _ref30;if(_isArray18){if(_i19>=_iterator18.length)break;_ref30=_iterator18[_i19++];}else{_i19=_iterator18.next();if(_i19.done)break;_ref30=_i19.value;}var role=_ref30;if(this.guild.roles.has(role))roles.set(role,this.guild.roles.get(role));}return roles;}/**
   * The URL to the emoji file
   * @type {string}
   * @readonly
   */},{key:'url',get:function get(){return Constants.Endpoints.emoji(this.id);}},{key:'identifier',get:function get(){if(this.id){return this.name+':'+this.id;}return encodeURIComponent(this.name);}}]);return Emoji;}();module.exports=Emoji;/***/},/* 11 *//***/function(module,exports,__webpack_require__){var Attachment=__webpack_require__(33);var Embed=__webpack_require__(35);var MessageReaction=__webpack_require__(36);var Collection=__webpack_require__(3);var Constants=__webpack_require__(0);var escapeMarkdown=__webpack_require__(15);// Done purely for GuildMember, which would cause a bad circular dependency
var Discord=__webpack_require__(57);/**
 * Represents a message on Discord
 */var Message=function(){function Message(channel,data,client){_classCallCheck(this,Message);/**
     * The Client that instantiated the Message
     * @name Message#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});/**
     * The channel that the message was sent in
     * @type {TextChannel|DMChannel|GroupDMChannel}
     */this.channel=channel;if(data)this.setup(data);}Message.prototype.setup=function setup(data){var _this6=this;// eslint-disable-line complexity
/**
     * The ID of the message (unique in the channel it was sent)
     * @type {string}
     */this.id=data.id;/**
     * The type of the message
     * @type {string}
     */this.type=Constants.MessageTypes[data.type];/**
     * The content of the message
     * @type {string}
     */this.content=data.content;/**
     * The author of the message
     * @type {User}
     */this.author=this.client.dataManager.newUser(data.author);/**
     * Represents the author of the message as a guild member. Only available if the message comes from a guild
     * where the author is still a member.
     * @type {GuildMember}
     */this.member=this.guild?this.guild.member(this.author)||null:null;/**
     * Whether or not this message is pinned
     * @type {boolean}
     */this.pinned=data.pinned;/**
     * Whether or not the message was Text-To-Speech
     * @type {boolean}
     */this.tts=data.tts;/**
     * A random number used for checking message delivery
     * @type {string}
     */this.nonce=data.nonce;/**
     * Whether or not this message was sent by Discord, not actually a user (e.g. pin notifications)
     * @type {boolean}
     */this.system=data.type===6;/**
     * A list of embeds in the message - e.g. YouTube Player
     * @type {MessageEmbed[]}
     */this.embeds=data.embeds.map(function(e){return new Embed(_this6,e);});/**
     * A collection of attachments in the message - e.g. Pictures - mapped by their ID.
     * @type {Collection<string, MessageAttachment>}
     */this.attachments=new Collection();for(var _iterator19=data.attachments,_isArray19=Array.isArray(_iterator19),_i20=0,_iterator19=_isArray19?_iterator19:_iterator19[Symbol.iterator]();;){var _ref31;if(_isArray19){if(_i20>=_iterator19.length)break;_ref31=_iterator19[_i20++];}else{_i20=_iterator19.next();if(_i20.done)break;_ref31=_i20.value;}var attachment=_ref31;this.attachments.set(attachment.id,new Attachment(this,attachment));}/**
     * The timestamp the message was sent at
     * @type {number}
     */this.createdTimestamp=new Date(data.timestamp).getTime();/**
     * The timestamp the message was last edited at (if applicable)
     * @type {?number}
     */this.editedTimestamp=data.edited_timestamp?new Date(data.edited_timestamp).getTime():null;/**
     * An object containing a further users, roles or channels collections
     * @type {Object}
     * @property {Collection<string, User>} mentions.users Mentioned users, maps their ID to the user object.
     * @property {Collection<string, Role>} mentions.roles Mentioned roles, maps their ID to the role object.
     * @property {Collection<string, GuildChannel>} mentions.channels Mentioned channels,
     * maps their ID to the channel object.
     * @property {boolean} mentions.everyone Whether or not @everyone was mentioned.
     */this.mentions={users:new Collection(),roles:new Collection(),channels:new Collection(),everyone:data.mention_everyone};for(var _iterator20=data.mentions,_isArray20=Array.isArray(_iterator20),_i21=0,_iterator20=_isArray20?_iterator20:_iterator20[Symbol.iterator]();;){var _ref32;if(_isArray20){if(_i21>=_iterator20.length)break;_ref32=_iterator20[_i21++];}else{_i21=_iterator20.next();if(_i21.done)break;_ref32=_i21.value;}var _mention=_ref32;var user=this.client.users.get(_mention.id);if(user){this.mentions.users.set(user.id,user);}else{user=this.client.dataManager.newUser(_mention);this.mentions.users.set(user.id,user);}}if(data.mention_roles){for(var _iterator21=data.mention_roles,_isArray21=Array.isArray(_iterator21),_i22=0,_iterator21=_isArray21?_iterator21:_iterator21[Symbol.iterator]();;){var _ref33;if(_isArray21){if(_i22>=_iterator21.length)break;_ref33=_iterator21[_i22++];}else{_i22=_iterator21.next();if(_i22.done)break;_ref33=_i22.value;}var mention=_ref33;var role=this.channel.guild.roles.get(mention);if(role)this.mentions.roles.set(role.id,role);}}if(this.channel.guild){var channMentionsRaw=data.content.match(/<#([0-9]{14,20})>/g)||[];for(var _iterator22=channMentionsRaw,_isArray22=Array.isArray(_iterator22),_i23=0,_iterator22=_isArray22?_iterator22:_iterator22[Symbol.iterator]();;){var _ref34;if(_isArray22){if(_i23>=_iterator22.length)break;_ref34=_iterator22[_i23++];}else{_i23=_iterator22.next();if(_i23.done)break;_ref34=_i23.value;}var raw=_ref34;var chan=this.channel.guild.channels.get(raw.match(/([0-9]{14,20})/g)[0]);if(chan)this.mentions.channels.set(chan.id,chan);}}this._edits=[];/**
     * A collection of reactions to this message, mapped by the reaction "id".
     * @type {Collection<string, MessageReaction>}
     */this.reactions=new Collection();if(data.reactions&&data.reactions.length>0){for(var _iterator23=data.reactions,_isArray23=Array.isArray(_iterator23),_i24=0,_iterator23=_isArray23?_iterator23:_iterator23[Symbol.iterator]();;){var _ref35;if(_isArray23){if(_i24>=_iterator23.length)break;_ref35=_iterator23[_i24++];}else{_i24=_iterator23.next();if(_i24.done)break;_ref35=_i24.value;}var reaction=_ref35;var id=reaction.emoji.id?reaction.emoji.name+':'+reaction.emoji.id:reaction.emoji.name;this.reactions.set(id,new MessageReaction(this,reaction.emoji,reaction.count,reaction.me));}}/**
     * ID of the webhook that sent the message, if applicable
     * @type {?string}
     */this.webhookID=data.webhook_id||null;};Message.prototype.patch=function patch(data){var _this7=this;// eslint-disable-line complexity
if(data.author){this.author=this.client.users.get(data.author.id);if(this.guild)this.member=this.guild.member(this.author);}if(data.content)this.content=data.content;if(data.timestamp)this.createdTimestamp=new Date(data.timestamp).getTime();if(data.edited_timestamp){this.editedTimestamp=data.edited_timestamp?new Date(data.edited_timestamp).getTime():null;}if('tts'in data)this.tts=data.tts;if('mention_everyone'in data)this.mentions.everyone=data.mention_everyone;if(data.nonce)this.nonce=data.nonce;if(data.embeds)this.embeds=data.embeds.map(function(e){return new Embed(_this7,e);});if(data.type>-1){this.system=false;if(data.type===6)this.system=true;}if(data.attachments){this.attachments=new Collection();for(var _iterator24=data.attachments,_isArray24=Array.isArray(_iterator24),_i25=0,_iterator24=_isArray24?_iterator24:_iterator24[Symbol.iterator]();;){var _ref36;if(_isArray24){if(_i25>=_iterator24.length)break;_ref36=_iterator24[_i25++];}else{_i25=_iterator24.next();if(_i25.done)break;_ref36=_i25.value;}var attachment=_ref36;this.attachments.set(attachment.id,new Attachment(this,attachment));}}if(data.mentions){for(var _iterator25=data.mentions,_isArray25=Array.isArray(_iterator25),_i26=0,_iterator25=_isArray25?_iterator25:_iterator25[Symbol.iterator]();;){var _ref37;if(_isArray25){if(_i26>=_iterator25.length)break;_ref37=_iterator25[_i26++];}else{_i26=_iterator25.next();if(_i26.done)break;_ref37=_i26.value;}var mention=_ref37;var user=this.client.users.get(mention.id);if(user){this.mentions.users.set(user.id,user);}else{user=this.client.dataManager.newUser(mention);this.mentions.users.set(user.id,user);}}}if(data.mention_roles){for(var _iterator26=data.mention_roles,_isArray26=Array.isArray(_iterator26),_i27=0,_iterator26=_isArray26?_iterator26:_iterator26[Symbol.iterator]();;){var _ref38;if(_isArray26){if(_i27>=_iterator26.length)break;_ref38=_iterator26[_i27++];}else{_i27=_iterator26.next();if(_i27.done)break;_ref38=_i27.value;}var _mention2=_ref38;var role=this.channel.guild.roles.get(_mention2);if(role)this.mentions.roles.set(role.id,role);}}if(data.id)this.id=data.id;if(this.channel.guild&&data.content){var channMentionsRaw=data.content.match(/<#([0-9]{14,20})>/g)||[];for(var _iterator27=channMentionsRaw,_isArray27=Array.isArray(_iterator27),_i28=0,_iterator27=_isArray27?_iterator27:_iterator27[Symbol.iterator]();;){var _ref39;if(_isArray27){if(_i28>=_iterator27.length)break;_ref39=_iterator27[_i28++];}else{_i28=_iterator27.next();if(_i28.done)break;_ref39=_i28.value;}var raw=_ref39;var chan=this.channel.guild.channels.get(raw.match(/([0-9]{14,20})/g)[0]);if(chan)this.mentions.channels.set(chan.id,chan);}}if(data.reactions){this.reactions=new Collection();if(data.reactions.length>0){for(var _iterator28=data.reactions,_isArray28=Array.isArray(_iterator28),_i29=0,_iterator28=_isArray28?_iterator28:_iterator28[Symbol.iterator]();;){var _ref40;if(_isArray28){if(_i29>=_iterator28.length)break;_ref40=_iterator28[_i29++];}else{_i29=_iterator28.next();if(_i29.done)break;_ref40=_i29.value;}var reaction=_ref40;var id=reaction.emoji.id?reaction.emoji.name+':'+reaction.emoji.id:reaction.emoji.name;this.reactions.set(id,new MessageReaction(this,data.emoji,data.count,data.me));}}}};/**
   * The time the message was sent
   * @type {Date}
   * @readonly
   *//**
   * Whether or not a user, channel or role is mentioned in this message.
   * @param {GuildChannel|User|Role|string} data either a guild channel, user or a role object, or a string representing
   * the ID of any of these.
   * @returns {boolean}
   */Message.prototype.isMentioned=function isMentioned(data){data=data&&data.id?data.id:data;return this.mentions.users.has(data)||this.mentions.channels.has(data)||this.mentions.roles.has(data);};/**
   * Whether or not a guild member is mentioned in this message. Takes into account
   * user mentions, role mentions, and @everyone/@here mentions.
   * @param {GuildMember|User} member Member/user to check for a mention of
   * @returns {boolean}
   */Message.prototype.isMemberMentioned=function isMemberMentioned(member){var _this8=this;if(this.mentions.everyone)return true;if(this.mentions.users.has(member.id))return true;if(member instanceof Discord.GuildMember&&member.roles.some(function(r){return _this8.mentions.roles.has(r.id);}))return true;return false;};/**
   * Options that can be passed into editMessage
   * @typedef {Object} MessageEditOptions
   * @property {Object} [embed] An embed to be added/edited
   * @property {string|boolean} [code] Language for optional codeblock formatting to apply
   *//**
   * Edit the content of the message
   * @param {StringResolvable} [content] The new content for the message
   * @param {MessageEditOptions} [options] The options to provide
   * @returns {Promise<Message>}
   * @example
   * // update the content of a message
   * message.edit('This is my new content!')
   *  .then(msg => console.log(`Updated the content of a message from ${msg.author}`))
   *  .catch(console.error);
   */Message.prototype.edit=function edit(content,options){if(!options&&(typeof content==='undefined'?'undefined':_typeof(content))==='object'){options=content;content='';}else if(!options){options={};}return this.client.rest.methods.updateMessage(this,content,options);};/**
   * Edit the content of the message, with a code block
   * @param {string} lang Language for the code block
   * @param {StringResolvable} content The new content for the message
   * @returns {Promise<Message>}
   */Message.prototype.editCode=function editCode(lang,content){content=escapeMarkdown(this.client.resolver.resolveString(content),true);return this.edit('```'+(lang||'')+'\n'+content+'\n```');};/**
   * Pins this message to the channel's pinned messages
   * @returns {Promise<Message>}
   */Message.prototype.pin=function pin(){return this.client.rest.methods.pinMessage(this);};/**
   * Unpins this message from the channel's pinned messages
   * @returns {Promise<Message>}
   */Message.prototype.unpin=function unpin(){return this.client.rest.methods.unpinMessage(this);};/**
   * Add a reaction to the message
   * @param {string|Emoji|ReactionEmoji} emoji Emoji to react with
   * @returns {Promise<MessageReaction>}
   */Message.prototype.react=function react(emoji){emoji=this.client.resolver.resolveEmojiIdentifier(emoji);if(!emoji)throw new TypeError('Emoji must be a string or Emoji/ReactionEmoji');return this.client.rest.methods.addMessageReaction(this,emoji);};/**
   * Remove all reactions from a message
   * @returns {Promise<Message>}
   */Message.prototype.clearReactions=function clearReactions(){return this.client.rest.methods.removeMessageReactions(this);};/**
   * Deletes the message
   * @param {number} [timeout=0] How long to wait to delete the message in milliseconds
   * @returns {Promise<Message>}
   * @example
   * // delete a message
   * message.delete()
   *  .then(msg => console.log(`Deleted message from ${msg.author}`))
   *  .catch(console.error);
   */Message.prototype.delete=function _delete(){var _this9=this;var timeout=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;if(timeout<=0){return this.client.rest.methods.deleteMessage(this);}else{return new Promise(function(resolve){_this9.client.setTimeout(function(){resolve(_this9.delete());},timeout);});}};/**
   * Reply to the message
   * @param {StringResolvable} content The content for the message
   * @param {MessageOptions} [options = {}] The options to provide
   * @returns {Promise<Message|Message[]>}
   * @example
   * // reply to a message
   * message.reply('Hey, I\'m a reply!')
   *  .then(msg => console.log(`Sent a reply to ${msg.author}`))
   *  .catch(console.error);
   */Message.prototype.reply=function reply(content){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};content=''+(this.guild||this.channel.type==='group'?this.author+', ':'')+content;return this.channel.send(content,options);};/**
   * Fetches the webhook used to create this message.
   * @returns {Promise<?Webhook>}
   */Message.prototype.fetchWebhook=function fetchWebhook(){if(!this.webhookID)return Promise.reject(new Error('The message was not sent by a webhook.'));return this.client.fetchWebhook(this.webhookID);};/**
   * Used mainly internally. Whether two messages are identical in properties. If you want to compare messages
   * without checking all the properties, use `message.id === message2.id`, which is much more efficient. This
   * method allows you to see if there are differences in content, embeds, attachments, nonce and tts properties.
   * @param {Message} message The message to compare it to
   * @param {Object} rawData Raw data passed through the WebSocket about this message
   * @returns {boolean}
   */Message.prototype.equals=function equals(message,rawData){if(!message)return false;var embedUpdate=!message.author&&!message.attachments;if(embedUpdate)return this.id===message.id&&this.embeds.length===message.embeds.length;var equal=this.id===message.id&&this.author.id===message.author.id&&this.content===message.content&&this.tts===message.tts&&this.nonce===message.nonce&&this.embeds.length===message.embeds.length&&this.attachments.length===message.attachments.length;if(equal&&rawData){equal=this.mentions.everyone===message.mentions.everyone&&this.createdTimestamp===new Date(rawData.timestamp).getTime()&&this.editedTimestamp===new Date(rawData.edited_timestamp).getTime();}return equal;};/**
   * When concatenated with a string, this automatically concatenates the message's content instead of the object.
   * @returns {string}
   * @example
   * // logs: Message: This is a message!
   * console.log(`Message: ${message}`);
   */Message.prototype.toString=function toString(){return this.content;};Message.prototype._addReaction=function _addReaction(emoji,user){var emojiID=emoji.id?emoji.name+':'+emoji.id:emoji.name;var reaction=void 0;if(this.reactions.has(emojiID)){reaction=this.reactions.get(emojiID);if(!reaction.me)reaction.me=user.id===this.client.user.id;}else{reaction=new MessageReaction(this,emoji,0,user.id===this.client.user.id);this.reactions.set(emojiID,reaction);}if(!reaction.users.has(user.id)){reaction.users.set(user.id,user);reaction.count++;return reaction;}return null;};Message.prototype._removeReaction=function _removeReaction(emoji,user){var emojiID=emoji.id||emoji;if(this.reactions.has(emojiID)){var reaction=this.reactions.get(emojiID);if(reaction.users.has(user.id)){reaction.users.delete(user.id);reaction.count--;if(user.id===this.client.user.id)reaction.me=false;return reaction;}}return null;};Message.prototype._clearReactions=function _clearReactions(){this.reactions.clear();};_createClass(Message,[{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * The time the message was last edited at (if applicable)
   * @type {?Date}
   * @readonly
   */},{key:'editedAt',get:function get(){return this.editedTimestamp?new Date(this.editedTimestamp):null;}/**
   * The guild the message was sent in (if in a guild channel)
   * @type {?Guild}
   * @readonly
   */},{key:'guild',get:function get(){return this.channel.guild||null;}/**
   * The message contents with all mentions replaced by the equivalent text. If mentions cannot be resolved to a name,
   * the relevant mention in the message content will not be converted.
   * @type {string}
   * @readonly
   */},{key:'cleanContent',get:function get(){var _this10=this;return this.content.replace(/@(everyone|here)/g,'@\u200B$1').replace(/<@!?[0-9]+>/g,function(input){var id=input.replace(/<|!|>|@/g,'');if(_this10.channel.type==='dm'||_this10.channel.type==='group'){return _this10.client.users.has(id)?'@'+_this10.client.users.get(id).username:input;}var member=_this10.channel.guild.members.get(id);if(member){if(member.nickname)return'@'+member.nickname;return'@'+member.user.username;}else{var user=_this10.client.users.get(id);if(user)return'@'+user.username;return input;}}).replace(/<#[0-9]+>/g,function(input){var channel=_this10.client.channels.get(input.replace(/<|#|>/g,''));if(channel)return'#'+channel.name;return input;}).replace(/<@&[0-9]+>/g,function(input){if(_this10.channel.type==='dm'||_this10.channel.type==='group')return input;var role=_this10.guild.roles.get(input.replace(/<|@|>|&/g,''));if(role)return'@'+role.name;return input;});}/**
   * An array of cached versions of the message, including the current version.
   * Sorted from latest (first) to oldest (last).
   * @type {Message[]}
   * @readonly
   */},{key:'edits',get:function get(){var copy=this._edits.slice();copy.unshift(this);return copy;}/**
   * Whether the message is editable by the client user.
   * @type {boolean}
   * @readonly
   */},{key:'editable',get:function get(){return this.author.id===this.client.user.id;}/**
   * Whether the message is deletable by the client user.
   * @type {boolean}
   * @readonly
   */},{key:'deletable',get:function get(){return this.author.id===this.client.user.id||this.guild&&this.channel.permissionsFor(this.client.user).hasPermission(Constants.PermissionFlags.MANAGE_MESSAGES);}/**
   * Whether the message is pinnable by the client user.
   * @type {boolean}
   * @readonly
   */},{key:'pinnable',get:function get(){return!this.guild||this.channel.permissionsFor(this.client.user).hasPermission(Constants.PermissionFlags.MANAGE_MESSAGES);}}]);return Message;}();module.exports=Message;/***/},/* 12 *//***/function(module,exports,__webpack_require__){var path=__webpack_require__(23);var Message=__webpack_require__(11);var MessageCollector=__webpack_require__(34);var Collection=__webpack_require__(3);/**
 * Interface for classes that have text-channel-like features
 * @interface
 */var TextBasedChannel=function(){function TextBasedChannel(){_classCallCheck(this,TextBasedChannel);/**
     * A collection containing the messages sent to this channel.
     * @type {Collection<string, Message>}
     */this.messages=new Collection();/**
     * The ID of the last message in the channel, if one was sent.
     * @type {?string}
     */this.lastMessageID=null;}/**
   * Options that can be passed into send, sendMessage, sendFile, sendEmbed, sendCode, and Message#reply
   * @typedef {Object} MessageOptions
   * @property {boolean} [tts=false] Whether or not the message should be spoken aloud
   * @property {string} [nonce=''] The nonce for the message
   * @property {Object} [embed] An embed for the message
   * (see [here](https://discordapp.com/developers/docs/resources/channel#embed-object) for more details)
   * @property {boolean} [disableEveryone=this.client.options.disableEveryone] Whether or not @everyone and @here
   * should be replaced with plain-text
   * @property {FileOptions|string} [file] A file to send with the message
   * @property {string|boolean} [code] Language for optional codeblock formatting to apply
   * @property {boolean|SplitOptions} [split=false] Whether or not the message should be split into multiple messages if
   * it exceeds the character limit. If an object is provided, these are the options for splitting the message.
   *//**
   * @typedef {Object} FileOptions
   * @property {BufferResolvable} attachment
   * @property {string} [name='file.jpg']
   *//**
   * Options for splitting a message
   * @typedef {Object} SplitOptions
   * @property {number} [maxLength=1950] Maximum character length per message piece
   * @property {string} [char='\n'] Character to split the message with
   * @property {string} [prepend=''] Text to prepend to every piece except the first
   * @property {string} [append=''] Text to append to every piece except the last
   *//**
   * Send a message to this channel
   * @param {StringResolvable} [content] Text for the message
   * @param {MessageOptions} [options={}] Options for the message
   * @returns {Promise<Message|Message[]>}
   * @example
   * // send a message
   * channel.send('hello!')
   *  .then(message => console.log(`Sent message: ${message.content}`))
   *  .catch(console.error);
   */TextBasedChannel.prototype.send=function send(content,options){var _this11=this;if(!options&&(typeof content==='undefined'?'undefined':_typeof(content))==='object'&&!(content instanceof Array)){options=content;content='';}else if(!options){options={};}if(options.file){if(typeof options.file==='string')options.file={attachment:options.file};if(!options.file.name){if(typeof options.file.attachment==='string'){options.file.name=path.basename(options.file.attachment);}else if(options.file.attachment&&options.file.attachment.path){options.file.name=path.basename(options.file.attachment.path);}else{options.file.name='file.jpg';}}return this.client.resolver.resolveBuffer(options.file.attachment).then(function(file){return _this11.client.rest.methods.sendMessage(_this11,content,options,{file:file,name:options.file.name});});}return this.client.rest.methods.sendMessage(this,content,options);};/**
   * Send a message to this channel
   * @param {StringResolvable} content Text for the message
   * @param {MessageOptions} [options={}] Options for the message
   * @returns {Promise<Message|Message[]>}
   * @example
   * // send a message
   * channel.sendMessage('hello!')
   *  .then(message => console.log(`Sent message: ${message.content}`))
   *  .catch(console.error);
   */TextBasedChannel.prototype.sendMessage=function sendMessage(content,options){return this.send(content,options);};/**
   * Send an embed to this channel
   * @param {RichEmbed|Object} embed Embed for the message
   * @param {string} [content] Text for the message
   * @param {MessageOptions} [options] Options for the message
   * @returns {Promise<Message>}
   */TextBasedChannel.prototype.sendEmbed=function sendEmbed(embed,content,options){if(!options&&(typeof content==='undefined'?'undefined':_typeof(content))==='object'){options=content;content='';}else if(!options){options={};}return this.send(content,Object.assign(options,{embed:embed}));};/**
   * Send a file to this channel
   * @param {BufferResolvable} attachment File to send
   * @param {string} [name='file.jpg'] Name and extension of the file
   * @param {StringResolvable} [content] Text for the message
   * @param {MessageOptions} [options] Options for the message
   * @returns {Promise<Message>}
   */TextBasedChannel.prototype.sendFile=function sendFile(attachment,name,content){var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};return this.send(content,Object.assign(options,{file:{attachment:attachment,name:name}}));};/**
   * Send a code block to this channel
   * @param {string} lang Language for the code block
   * @param {StringResolvable} content Content of the code block
   * @param {MessageOptions} [options] Options for the message
   * @returns {Promise<Message|Message[]>}
   */TextBasedChannel.prototype.sendCode=function sendCode(lang,content){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return this.send(content,Object.assign(options,{code:lang}));};/**
   * Gets a single message from this channel, regardless of it being cached or not.
   * <warn>This is only available when using a bot account.</warn>
   * @param {string} messageID ID of the message to get
   * @returns {Promise<Message>}
   * @example
   * // get message
   * channel.fetchMessage('99539446449315840')
   *   .then(message => console.log(message.content))
   *   .catch(console.error);
   */TextBasedChannel.prototype.fetchMessage=function fetchMessage(messageID){var _this12=this;return this.client.rest.methods.getChannelMessage(this,messageID).then(function(data){var msg=data instanceof Message?data:new Message(_this12,data,_this12.client);_this12._cacheMessage(msg);return msg;});};/**
   * The parameters to pass in when requesting previous messages from a channel. `around`, `before` and
   * `after` are mutually exclusive. All the parameters are optional.
   * @typedef {Object} ChannelLogsQueryOptions
   * @property {number} [limit=50] Number of messages to acquire
   * @property {string} [before] ID of a message to get the messages that were posted before it
   * @property {string} [after] ID of a message to get the messages that were posted after it
   * @property {string} [around] ID of a message to get the messages that were posted around it
   *//**
   * Gets the past messages sent in this channel. Resolves with a collection mapping message ID's to Message objects.
   * @param {ChannelLogsQueryOptions} [options={}] Query parameters to pass in
   * @returns {Promise<Collection<string, Message>>}
   * @example
   * // get messages
   * channel.fetchMessages({limit: 10})
   *  .then(messages => console.log(`Received ${messages.size} messages`))
   *  .catch(console.error);
   */TextBasedChannel.prototype.fetchMessages=function fetchMessages(){var _this13=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return this.client.rest.methods.getChannelMessages(this,options).then(function(data){var messages=new Collection();for(var _iterator29=data,_isArray29=Array.isArray(_iterator29),_i30=0,_iterator29=_isArray29?_iterator29:_iterator29[Symbol.iterator]();;){var _ref41;if(_isArray29){if(_i30>=_iterator29.length)break;_ref41=_iterator29[_i30++];}else{_i30=_iterator29.next();if(_i30.done)break;_ref41=_i30.value;}var message=_ref41;var msg=new Message(_this13,message,_this13.client);messages.set(message.id,msg);_this13._cacheMessage(msg);}return messages;});};/**
   * Fetches the pinned messages of this channel and returns a collection of them.
   * @returns {Promise<Collection<string, Message>>}
   */TextBasedChannel.prototype.fetchPinnedMessages=function fetchPinnedMessages(){var _this14=this;return this.client.rest.methods.getChannelPinnedMessages(this).then(function(data){var messages=new Collection();for(var _iterator30=data,_isArray30=Array.isArray(_iterator30),_i31=0,_iterator30=_isArray30?_iterator30:_iterator30[Symbol.iterator]();;){var _ref42;if(_isArray30){if(_i31>=_iterator30.length)break;_ref42=_iterator30[_i31++];}else{_i31=_iterator30.next();if(_i31.done)break;_ref42=_i31.value;}var message=_ref42;var msg=new Message(_this14,message,_this14.client);messages.set(message.id,msg);_this14._cacheMessage(msg);}return messages;});};/**
   * Starts a typing indicator in the channel.
   * @param {number} [count] The number of times startTyping should be considered to have been called
   * @example
   * // start typing in a channel
   * channel.startTyping();
   */TextBasedChannel.prototype.startTyping=function startTyping(count){var _this15=this;if(typeof count!=='undefined'&&count<1)throw new RangeError('Count must be at least 1.');if(!this.client.user._typing.has(this.id)){this.client.user._typing.set(this.id,{count:count||1,interval:this.client.setInterval(function(){_this15.client.rest.methods.sendTyping(_this15.id);},4000)});this.client.rest.methods.sendTyping(this.id);}else{var entry=this.client.user._typing.get(this.id);entry.count=count||entry.count+1;}};/**
   * Stops the typing indicator in the channel.
   * The indicator will only stop if this is called as many times as startTyping().
   * <info>It can take a few seconds for the client user to stop typing.</info>
   * @param {boolean} [force=false] Whether or not to reset the call count and force the indicator to stop
   * @example
   * // stop typing in a channel
   * channel.stopTyping();
   * @example
   * // force typing to fully stop in a channel
   * channel.stopTyping(true);
   */TextBasedChannel.prototype.stopTyping=function stopTyping(){var force=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(this.client.user._typing.has(this.id)){var entry=this.client.user._typing.get(this.id);entry.count--;if(entry.count<=0||force){this.client.clearInterval(entry.interval);this.client.user._typing.delete(this.id);}}};/**
   * Whether or not the typing indicator is being shown in the channel.
   * @type {boolean}
   * @readonly
   *//**
   * Creates a Message Collector
   * @param {CollectorFilterFunction} filter The filter to create the collector with
   * @param {CollectorOptions} [options={}] The options to pass to the collector
   * @returns {MessageCollector}
   * @example
   * // create a message collector
   * const collector = channel.createCollector(
   *  m => m.content.includes('discord'),
   *  { time: 15000 }
   * );
   * collector.on('message', m => console.log(`Collected ${m.content}`));
   * collector.on('end', collected => console.log(`Collected ${collected.size} items`));
   */TextBasedChannel.prototype.createCollector=function createCollector(filter){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new MessageCollector(this,filter,options);};/**
   * An object containing the same properties as CollectorOptions, but a few more:
   * @typedef {CollectorOptions} AwaitMessagesOptions
   * @property {string[]} [errors] Stop/end reasons that cause the promise to reject
   *//**
   * Similar to createCollector but in promise form. Resolves with a collection of messages that pass the specified
   * filter.
   * @param {CollectorFilterFunction} filter The filter function to use
   * @param {AwaitMessagesOptions} [options={}] Optional options to pass to the internal collector
   * @returns {Promise<Collection<string, Message>>}
   * @example
   * // await !vote messages
   * const filter = m => m.content.startsWith('!vote');
   * // errors: ['time'] treats ending because of the time limit as an error
   * channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
   *  .then(collected => console.log(collected.size))
   *  .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
   */TextBasedChannel.prototype.awaitMessages=function awaitMessages(filter){var _this16=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new Promise(function(resolve,reject){var collector=_this16.createCollector(filter,options);collector.on('end',function(collection,reason){if(options.errors&&options.errors.includes(reason)){reject(collection);}else{resolve(collection);}});});};/**
   * Bulk delete given messages.
   * <warn>This is only available when using a bot account.</warn>
   * @param {Collection<string, Message>|Message[]|number} messages Messages to delete, or number of messages to delete
   * @returns {Promise<Collection<string, Message>>} Deleted messages
   */TextBasedChannel.prototype.bulkDelete=function bulkDelete(messages){var _this17=this;if(!isNaN(messages))return this.fetchMessages({limit:messages}).then(function(msgs){return _this17.bulkDelete(msgs);});if(messages instanceof Array||messages instanceof Collection){var messageIDs=messages instanceof Collection?messages.keyArray():messages.map(function(m){return m.id;});return this.client.rest.methods.bulkDeleteMessages(this,messageIDs);}throw new TypeError('The messages must be an Array, Collection, or number.');};TextBasedChannel.prototype._cacheMessage=function _cacheMessage(message){var maxSize=this.client.options.messageCacheMaxSize;if(maxSize===0)return null;if(this.messages.size>=maxSize&&maxSize>0)this.messages.delete(this.messages.firstKey());this.messages.set(message.id,message);return message;};_createClass(TextBasedChannel,[{key:'typing',get:function get(){return this.client.user._typing.has(this.id);}/**
   * Number of times `startTyping` has been called.
   * @type {number}
   * @readonly
   */},{key:'typingCount',get:function get(){if(this.client.user._typing.has(this.id))return this.client.user._typing.get(this.id).count;return 0;}}]);return TextBasedChannel;}();exports.applyToClass=function(structure){var full=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var props=['send','sendMessage','sendEmbed','sendFile','sendCode'];if(full){props.push('_cacheMessage','fetchMessages','fetchMessage','bulkDelete','startTyping','stopTyping','typing','typingCount','fetchPinnedMessages','createCollector','awaitMessages');}for(var _iterator31=props,_isArray31=Array.isArray(_iterator31),_i32=0,_iterator31=_isArray31?_iterator31:_iterator31[Symbol.iterator]();;){var _ref43;if(_isArray31){if(_i32>=_iterator31.length)break;_ref43=_iterator31[_i32++];}else{_i32=_iterator31.next();if(_i32.done)break;_ref43=_i32.value;}var prop=_ref43;Object.defineProperty(structure.prototype,prop,Object.getOwnPropertyDescriptor(TextBasedChannel.prototype,prop));}};/***/},/* 13 *//***/function(module,exports,__webpack_require__){var Channel=__webpack_require__(9);var Role=__webpack_require__(8);var PermissionOverwrites=__webpack_require__(40);var EvaluatedPermissions=__webpack_require__(16);var Constants=__webpack_require__(0);var Collection=__webpack_require__(3);/**
 * Represents a guild channel (i.e. text channels and voice channels)
 * @extends {Channel}
 */var GuildChannel=function(_Channel){_inherits(GuildChannel,_Channel);function GuildChannel(guild,data){_classCallCheck(this,GuildChannel);/**
     * The guild the channel is in
     * @type {Guild}
     */var _this18=_possibleConstructorReturn(this,_Channel.call(this,guild.client,data));_this18.guild=guild;return _this18;}GuildChannel.prototype.setup=function setup(data){_Channel.prototype.setup.call(this,data);/**
     * The name of the guild channel
     * @type {string}
     */this.name=data.name;/**
     * The position of the channel in the list.
     * @type {number}
     */this.position=data.position;/**
     * A map of permission overwrites in this channel for roles and users.
     * @type {Collection<string, PermissionOverwrites>}
     */this.permissionOverwrites=new Collection();if(data.permission_overwrites){for(var _iterator32=data.permission_overwrites,_isArray32=Array.isArray(_iterator32),_i33=0,_iterator32=_isArray32?_iterator32:_iterator32[Symbol.iterator]();;){var _ref44;if(_isArray32){if(_i33>=_iterator32.length)break;_ref44=_iterator32[_i33++];}else{_i33=_iterator32.next();if(_i33.done)break;_ref44=_i33.value;}var overwrite=_ref44;this.permissionOverwrites.set(overwrite.id,new PermissionOverwrites(this,overwrite));}}};/**
   * Gets the overall set of permissions for a user in this channel, taking into account roles and permission
   * overwrites.
   * @param {GuildMemberResolvable} member The user that you want to obtain the overall permissions for
   * @returns {?EvaluatedPermissions}
   */GuildChannel.prototype.permissionsFor=function permissionsFor(member){member=this.client.resolver.resolveGuildMember(this.guild,member);if(!member)return null;if(member.id===this.guild.ownerID)return new EvaluatedPermissions(member,Constants.ALL_PERMISSIONS);var permissions=0;var roles=member.roles;for(var _iterator33=roles.values(),_isArray33=Array.isArray(_iterator33),_i34=0,_iterator33=_isArray33?_iterator33:_iterator33[Symbol.iterator]();;){var _ref45;if(_isArray33){if(_i34>=_iterator33.length)break;_ref45=_iterator33[_i34++];}else{_i34=_iterator33.next();if(_i34.done)break;_ref45=_i34.value;}var role=_ref45;permissions|=role.permissions;}var overwrites=this.overwritesFor(member,true,roles);for(var _iterator34=overwrites.role.concat(overwrites.member),_isArray34=Array.isArray(_iterator34),_i35=0,_iterator34=_isArray34?_iterator34:_iterator34[Symbol.iterator]();;){var _ref46;if(_isArray34){if(_i35>=_iterator34.length)break;_ref46=_iterator34[_i35++];}else{_i35=_iterator34.next();if(_i35.done)break;_ref46=_i35.value;}var overwrite=_ref46;permissions&=~overwrite.deny;permissions|=overwrite.allow;}var admin=Boolean(permissions&Constants.PermissionFlags.ADMINISTRATOR);if(admin)permissions=Constants.ALL_PERMISSIONS;return new EvaluatedPermissions(member,permissions);};GuildChannel.prototype.overwritesFor=function overwritesFor(member){var verified=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var roles=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!verified)member=this.client.resolver.resolveGuildMember(this.guild,member);if(!member)return[];roles=roles||member.roles;var roleOverwrites=[];var memberOverwrites=[];for(var _iterator35=this.permissionOverwrites.values(),_isArray35=Array.isArray(_iterator35),_i36=0,_iterator35=_isArray35?_iterator35:_iterator35[Symbol.iterator]();;){var _ref47;if(_isArray35){if(_i36>=_iterator35.length)break;_ref47=_iterator35[_i36++];}else{_i36=_iterator35.next();if(_i36.done)break;_ref47=_i36.value;}var overwrite=_ref47;if(overwrite.id===member.id){memberOverwrites.push(overwrite);}else if(roles.has(overwrite.id)){roleOverwrites.push(overwrite);}}return{role:roleOverwrites,member:memberOverwrites};};/**
   * An object mapping permission flags to `true` (enabled) or `false` (disabled)
   * ```js
   * {
   *  'SEND_MESSAGES': true,
   *  'ATTACH_FILES': false,
   * }
   * ```
   * @typedef {Object} PermissionOverwriteOptions
   *//**
   * Overwrites the permissions for a user or role in this channel.
   * @param {RoleResolvable|UserResolvable} userOrRole The user or role to update
   * @param {PermissionOverwriteOptions} options The configuration for the update
   * @returns {Promise}
   * @example
   * // overwrite permissions for a message author
   * message.channel.overwritePermissions(message.author, {
   *  SEND_MESSAGES: false
   * })
   * .then(() => console.log('Done!'))
   * .catch(console.error);
   */GuildChannel.prototype.overwritePermissions=function overwritePermissions(userOrRole,options){var payload={allow:0,deny:0};if(userOrRole instanceof Role){payload.type='role';}else if(this.guild.roles.has(userOrRole)){userOrRole=this.guild.roles.get(userOrRole);payload.type='role';}else{userOrRole=this.client.resolver.resolveUser(userOrRole);payload.type='member';if(!userOrRole)return Promise.reject(new TypeError('Supplied parameter was neither a User nor a Role.'));}payload.id=userOrRole.id;var prevOverwrite=this.permissionOverwrites.get(userOrRole.id);if(prevOverwrite){payload.allow=prevOverwrite.allow;payload.deny=prevOverwrite.deny;}for(var perm in options){if(options[perm]===true){payload.allow|=Constants.PermissionFlags[perm]||0;payload.deny&=~(Constants.PermissionFlags[perm]||0);}else if(options[perm]===false){payload.allow&=~(Constants.PermissionFlags[perm]||0);payload.deny|=Constants.PermissionFlags[perm]||0;}else if(options[perm]===null){payload.allow&=~(Constants.PermissionFlags[perm]||0);payload.deny&=~(Constants.PermissionFlags[perm]||0);}}return this.client.rest.methods.setChannelOverwrite(this,payload);};/**
   * The data for a guild channel
   * @typedef {Object} ChannelData
   * @property {string} [name] The name of the channel
   * @property {number} [position] The position of the channel
   * @property {string} [topic] The topic of the text channel
   * @property {number} [bitrate] The bitrate of the voice channel
   * @property {number} [userLimit] The user limit of the channel
   *//**
   * Edits the channel
   * @param {ChannelData} data The new data for the channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // edit a channel
   * channel.edit({name: 'new-channel'})
   *  .then(c => console.log(`Edited channel ${c}`))
   *  .catch(console.error);
   */GuildChannel.prototype.edit=function edit(data){return this.client.rest.methods.updateChannel(this,data);};/**
   * Set a new name for the guild channel
   * @param {string} name The new name for the guild channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // set a new channel name
   * channel.setName('not_general')
   *  .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
   *  .catch(console.error);
   */GuildChannel.prototype.setName=function setName(name){return this.edit({name:name});};/**
   * Set a new position for the guild channel
   * @param {number} position The new position for the guild channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // set a new channel position
   * channel.setPosition(2)
   *  .then(newChannel => console.log(`Channel's new position is ${newChannel.position}`))
   *  .catch(console.error);
   */GuildChannel.prototype.setPosition=function setPosition(position){return this.client.rest.methods.updateChannel(this,{position:position});};/**
   * Set a new topic for the guild channel
   * @param {string} topic The new topic for the guild channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // set a new channel topic
   * channel.setTopic('needs more rate limiting')
   *  .then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`))
   *  .catch(console.error);
   */GuildChannel.prototype.setTopic=function setTopic(topic){return this.client.rest.methods.updateChannel(this,{topic:topic});};/**
   * Options given when creating a guild channel invite
   * @typedef {Object} InviteOptions
   * @property {boolean} [temporary=false] Whether the invite should kick users after 24hrs if they are not given a role
   * @property {number} [maxAge=0] Time in seconds the invite expires in
   * @property {number} [maxUses=0] Maximum amount of uses for this invite
   *//**
   * Create an invite to this guild channel
   * @param {InviteOptions} [options={}] The options for the invite
   * @returns {Promise<Invite>}
   */GuildChannel.prototype.createInvite=function createInvite(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return this.client.rest.methods.createChannelInvite(this,options);};/**
   * Clone this channel
   * @param {string} [name=this.name] Optional name for the new channel, otherwise it has the name of this channel
   * @param {boolean} [withPermissions=true] Whether to clone the channel with this channel's permission overwrites
   * @returns {Promise<GuildChannel>}
   */GuildChannel.prototype.clone=function clone(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.name;var withPermissions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;return this.guild.createChannel(name,this.type,withPermissions?this.permissionOverwrites:[]);};/**
   * Checks if this channel has the same type, topic, position, name, overwrites and ID as another channel.
   * In most cases, a simple `channel.id === channel2.id` will do, and is much faster too.
   * @param {GuildChannel} channel Channel to compare with
   * @returns {boolean}
   */GuildChannel.prototype.equals=function equals(channel){var equal=channel&&this.id===channel.id&&this.type===channel.type&&this.topic===channel.topic&&this.position===channel.position&&this.name===channel.name;if(equal){if(this.permissionOverwrites&&channel.permissionOverwrites){equal=this.permissionOverwrites.equals(channel.permissionOverwrites);}else{equal=!this.permissionOverwrites&&!channel.permissionOverwrites;}}return equal;};/**
   * When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.
   * @returns {string}
   * @example
   * // Outputs: Hello from #general
   * console.log(`Hello from ${channel}`);
   * @example
   * // Outputs: Hello from #general
   * console.log('Hello from ' + channel);
   */GuildChannel.prototype.toString=function toString(){return'<#'+this.id+'>';};return GuildChannel;}(Channel);module.exports=GuildChannel;/***/},/* 14 *//***/function(module,exports,__webpack_require__){var TextBasedChannel=__webpack_require__(12);var Role=__webpack_require__(8);var EvaluatedPermissions=__webpack_require__(16);var Constants=__webpack_require__(0);var Collection=__webpack_require__(3);var Presence=__webpack_require__(7).Presence;/**
 * Represents a member of a guild on Discord
 * @implements {TextBasedChannel}
 */var GuildMember=function(){function GuildMember(guild,data){_classCallCheck(this,GuildMember);/**
     * The Client that instantiated this GuildMember
     * @name GuildMember#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:guild.client});/**
     * The guild that this member is part of
     * @type {Guild}
     */this.guild=guild;/**
     * The user that this guild member instance Represents
     * @type {User}
     */this.user={};this._roles=[];if(data)this.setup(data);/**
     * The ID of the last message sent by the member in their guild, if one was sent.
     * @type {?string}
     */this.lastMessageID=null;}GuildMember.prototype.setup=function setup(data){/**
     * Whether this member is deafened server-wide
     * @type {boolean}
     */this.serverDeaf=data.deaf;/**
     * Whether this member is muted server-wide
     * @type {boolean}
     */this.serverMute=data.mute;/**
     * Whether this member is self-muted
     * @type {boolean}
     */this.selfMute=data.self_mute;/**
     * Whether this member is self-deafened
     * @type {boolean}
     */this.selfDeaf=data.self_deaf;/**
     * The voice session ID of this member, if any
     * @type {?string}
     */this.voiceSessionID=data.session_id;/**
     * The voice channel ID of this member, if any
     * @type {?string}
     */this.voiceChannelID=data.channel_id;/**
     * Whether this member is speaking
     * @type {boolean}
     */this.speaking=false;/**
     * The nickname of this guild member, if they have one
     * @type {?string}
     */this.nickname=data.nick||null;/**
     * The timestamp the member joined the guild at
     * @type {number}
     */this.joinedTimestamp=new Date(data.joined_at).getTime();this.user=data.user;this._roles=data.roles;};/**
   * The time the member joined the guild
   * @type {Date}
   * @readonly
   *//**
   * Returns `channel.permissionsFor(guildMember)`. Returns evaluated permissions for a member in a guild channel.
   * @param {ChannelResolvable} channel Guild channel to use as context
   * @returns {?EvaluatedPermissions}
   */GuildMember.prototype.permissionsIn=function permissionsIn(channel){channel=this.client.resolver.resolveChannel(channel);if(!channel||!channel.guild)throw new Error('Could not resolve channel to a guild channel.');return channel.permissionsFor(this);};/**
   * Checks if any of the member's roles have a permission.
   * @param {PermissionResolvable} permission The permission to check for
   * @param {boolean} [explicit=false] Whether to require the roles to explicitly have the exact permission
   * @returns {boolean}
   */GuildMember.prototype.hasPermission=function hasPermission(permission){var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(!explicit&&this.user.id===this.guild.ownerID)return true;return this.roles.some(function(r){return r.hasPermission(permission,explicit);});};/**
   * Checks whether the roles of the member allows them to perform specific actions.
   * @param {PermissionResolvable[]} permissions The permissions to check for
   * @param {boolean} [explicit=false] Whether to require the member to explicitly have the exact permissions
   * @returns {boolean}
   */GuildMember.prototype.hasPermissions=function hasPermissions(permissions){var _this19=this;var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(!explicit&&this.user.id===this.guild.ownerID)return true;return permissions.every(function(p){return _this19.hasPermission(p,explicit);});};/**
   * Checks whether the roles of the member allows them to perform specific actions, and lists any missing permissions.
   * @param {PermissionResolvable[]} permissions The permissions to check for
   * @param {boolean} [explicit=false] Whether to require the member to explicitly have the exact permissions
   * @returns {PermissionResolvable[]}
   */GuildMember.prototype.missingPermissions=function missingPermissions(permissions){var _this20=this;var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return permissions.filter(function(p){return!_this20.hasPermission(p,explicit);});};/**
   * Edit a guild member
   * @param {GuildmemberEditData} data The data to edit the member with
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.edit=function edit(data){return this.client.rest.methods.updateGuildMember(this,data);};/**
   * Mute/unmute a user
   * @param {boolean} mute Whether or not the member should be muted
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.setMute=function setMute(mute){return this.edit({mute:mute});};/**
   * Deafen/undeafen a user
   * @param {boolean} deaf Whether or not the member should be deafened
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.setDeaf=function setDeaf(deaf){return this.edit({deaf:deaf});};/**
   * Moves the guild member to the given channel.
   * @param {ChannelResolvable} channel The channel to move the member to
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.setVoiceChannel=function setVoiceChannel(channel){return this.edit({channel:channel});};/**
   * Sets the roles applied to the member.
   * @param {Collection<string, Role>|Role[]|string[]} roles The roles or role IDs to apply
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.setRoles=function setRoles(roles){return this.edit({roles:roles});};/**
   * Adds a single role to the member.
   * @param {Role|string} role The role or ID of the role to add
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.addRole=function addRole(role){if(!(role instanceof Role))role=this.guild.roles.get(role);return this.client.rest.methods.addMemberRole(this,role);};/**
   * Adds multiple roles to the member.
   * @param {Collection<string, Role>|Role[]|string[]} roles The roles or role IDs to add
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.addRoles=function addRoles(roles){var allRoles=void 0;if(roles instanceof Collection){allRoles=this._roles.slice();for(var _iterator36=roles.values(),_isArray36=Array.isArray(_iterator36),_i37=0,_iterator36=_isArray36?_iterator36:_iterator36[Symbol.iterator]();;){var _ref48;if(_isArray36){if(_i37>=_iterator36.length)break;_ref48=_iterator36[_i37++];}else{_i37=_iterator36.next();if(_i37.done)break;_ref48=_i37.value;}var role=_ref48;allRoles.push(role.id);}}else{allRoles=this._roles.concat(roles);}return this.edit({roles:allRoles});};/**
   * Removes a single role from the member.
   * @param {Role|string} role The role or ID of the role to remove
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.removeRole=function removeRole(role){if(!(role instanceof Role))role=this.guild.roles.get(role);return this.client.rest.methods.removeMemberRole(this,role);};/**
   * Removes multiple roles from the member.
   * @param {Collection<string, Role>|Role[]|string[]} roles The roles or role IDs to remove
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.removeRoles=function removeRoles(roles){var allRoles=this._roles.slice();if(roles instanceof Collection){for(var _iterator37=roles.values(),_isArray37=Array.isArray(_iterator37),_i38=0,_iterator37=_isArray37?_iterator37:_iterator37[Symbol.iterator]();;){var _ref49;if(_isArray37){if(_i38>=_iterator37.length)break;_ref49=_iterator37[_i38++];}else{_i38=_iterator37.next();if(_i38.done)break;_ref49=_i38.value;}var role=_ref49;var index=allRoles.indexOf(role.id);if(index>=0)allRoles.splice(index,1);}}else{for(var _iterator38=roles,_isArray38=Array.isArray(_iterator38),_i39=0,_iterator38=_isArray38?_iterator38:_iterator38[Symbol.iterator]();;){var _ref50;if(_isArray38){if(_i39>=_iterator38.length)break;_ref50=_iterator38[_i39++];}else{_i39=_iterator38.next();if(_i39.done)break;_ref50=_i39.value;}var _role2=_ref50;var _index=allRoles.indexOf(_role2 instanceof Role?_role2.id:_role2);if(_index>=0)allRoles.splice(_index,1);}}return this.edit({roles:allRoles});};/**
   * Set the nickname for the guild member
   * @param {string} nick The nickname for the guild member
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.setNickname=function setNickname(nick){return this.edit({nick:nick});};/**
   * Deletes any DMs with this guild member
   * @returns {Promise<DMChannel>}
   */GuildMember.prototype.deleteDM=function deleteDM(){return this.client.rest.methods.deleteChannel(this);};/**
   * Kick this member from the guild
   * @returns {Promise<GuildMember>}
   */GuildMember.prototype.kick=function kick(){return this.client.rest.methods.kickGuildMember(this.guild,this);};/**
   * Ban this guild member
   * @param {number} [deleteDays=0] The amount of days worth of messages from this member that should
   * also be deleted. Between `0` and `7`.
   * @returns {Promise<GuildMember>}
   * @example
   * // ban a guild member
   * guildMember.ban(7);
   */GuildMember.prototype.ban=function ban(){var deleteDays=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return this.client.rest.methods.banGuildMember(this.guild,this,deleteDays);};/**
   * When concatenated with a string, this automatically concatenates the user's mention instead of the Member object.
   * @returns {string}
   * @example
   * // logs: Hello from <@123456789>!
   * console.log(`Hello from ${member}!`);
   */GuildMember.prototype.toString=function toString(){return'<@'+(this.nickname?'!':'')+this.user.id+'>';};// These are here only for documentation purposes - they are implemented by TextBasedChannel
GuildMember.prototype.send=function send(){return;};GuildMember.prototype.sendMessage=function sendMessage(){return;};GuildMember.prototype.sendEmbed=function sendEmbed(){return;};GuildMember.prototype.sendFile=function sendFile(){return;};GuildMember.prototype.sendCode=function sendCode(){return;};_createClass(GuildMember,[{key:'joinedAt',get:function get(){return new Date(this.joinedTimestamp);}/**
   * The presence of this guild member
   * @type {Presence}
   * @readonly
   */},{key:'presence',get:function get(){return this.frozenPresence||this.guild.presences.get(this.id)||new Presence();}/**
   * A list of roles that are applied to this GuildMember, mapped by the role ID.
   * @type {Collection<string, Role>}
   * @readonly
   */},{key:'roles',get:function get(){var list=new Collection();var everyoneRole=this.guild.roles.get(this.guild.id);if(everyoneRole)list.set(everyoneRole.id,everyoneRole);for(var _iterator39=this._roles,_isArray39=Array.isArray(_iterator39),_i40=0,_iterator39=_isArray39?_iterator39:_iterator39[Symbol.iterator]();;){var _ref51;if(_isArray39){if(_i40>=_iterator39.length)break;_ref51=_iterator39[_i40++];}else{_i40=_iterator39.next();if(_i40.done)break;_ref51=_i40.value;}var roleID=_ref51;var role=this.guild.roles.get(roleID);if(role)list.set(role.id,role);}return list;}/**
   * The role of the member with the highest position.
   * @type {Role}
   * @readonly
   */},{key:'highestRole',get:function get(){return this.roles.reduce(function(prev,role){return!prev||role.comparePositionTo(prev)>0?role:prev;});}/**
   * Whether this member is muted in any way
   * @type {boolean}
   * @readonly
   */},{key:'mute',get:function get(){return this.selfMute||this.serverMute;}/**
   * Whether this member is deafened in any way
   * @type {boolean}
   * @readonly
   */},{key:'deaf',get:function get(){return this.selfDeaf||this.serverDeaf;}/**
   * The voice channel this member is in, if any
   * @type {?VoiceChannel}
   * @readonly
   */},{key:'voiceChannel',get:function get(){return this.guild.channels.get(this.voiceChannelID);}/**
   * The ID of this user
   * @type {string}
   * @readonly
   */},{key:'id',get:function get(){return this.user.id;}/**
   * The nickname of the member, or their username if they don't have one
   * @type {string}
   * @readonly
   */},{key:'displayName',get:function get(){return this.nickname||this.user.username;}/**
   * The overall set of permissions for the guild member, taking only roles into account
   * @type {EvaluatedPermissions}
   * @readonly
   */},{key:'permissions',get:function get(){if(this.user.id===this.guild.ownerID)return new EvaluatedPermissions(this,Constants.ALL_PERMISSIONS);var permissions=0;var roles=this.roles;for(var _iterator40=roles.values(),_isArray40=Array.isArray(_iterator40),_i41=0,_iterator40=_isArray40?_iterator40:_iterator40[Symbol.iterator]();;){var _ref52;if(_isArray40){if(_i41>=_iterator40.length)break;_ref52=_iterator40[_i41++];}else{_i41=_iterator40.next();if(_i41.done)break;_ref52=_i41.value;}var role=_ref52;permissions|=role.permissions;}var admin=Boolean(permissions&Constants.PermissionFlags.ADMINISTRATOR);if(admin)permissions=Constants.ALL_PERMISSIONS;return new EvaluatedPermissions(this,permissions);}/**
   * Whether the member is kickable by the client user.
   * @type {boolean}
   * @readonly
   */},{key:'kickable',get:function get(){if(this.user.id===this.guild.ownerID)return false;if(this.user.id===this.client.user.id)return false;var clientMember=this.guild.member(this.client.user);if(!clientMember.hasPermission(Constants.PermissionFlags.KICK_MEMBERS))return false;return clientMember.highestRole.comparePositionTo(this.highestRole)>0;}/**
   * Whether the member is bannable by the client user.
   * @type {boolean}
   * @readonly
   */},{key:'bannable',get:function get(){if(this.user.id===this.guild.ownerID)return false;if(this.user.id===this.client.user.id)return false;var clientMember=this.guild.member(this.client.user);if(!clientMember.hasPermission(Constants.PermissionFlags.BAN_MEMBERS))return false;return clientMember.highestRole.comparePositionTo(this.highestRole)>0;}}]);return GuildMember;}();TextBasedChannel.applyToClass(GuildMember);module.exports=GuildMember;/***/},/* 15 *//***/function(module,exports){module.exports=function escapeMarkdown(text){var onlyCodeBlock=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var onlyInlineCode=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(onlyCodeBlock)return text.replace(/```/g,'`\u200B``');if(onlyInlineCode)return text.replace(/\\(`|\\)/g,'$1').replace(/(`|\\)/g,'\\$1');return text.replace(/\\(\*|_|`|~|\\)/g,'$1').replace(/(\*|_|`|~|\\)/g,'\\$1');};/***/},/* 16 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);/**
 * The final evaluated permissions for a member in a channel
 */var EvaluatedPermissions=function(){function EvaluatedPermissions(member,raw){_classCallCheck(this,EvaluatedPermissions);/**
     * The member this permissions refer to
     * @type {GuildMember}
     */this.member=member;/**
     * A number representing the packed permissions
     * @type {number}
     */this.raw=raw;}/**
   * Get an object mapping permission name, e.g. `READ_MESSAGES` to a boolean - whether the user
   * can perform this or not.
   * @returns {Object<string, boolean>}
   */EvaluatedPermissions.prototype.serialize=function serialize(){var serializedPermissions={};for(var permissionName in Constants.PermissionFlags){serializedPermissions[permissionName]=this.hasPermission(permissionName);}return serializedPermissions;};/**
   * Checks whether the user has a certain permission, e.g. `READ_MESSAGES`.
   * @param {PermissionResolvable} permission The permission to check for
   * @param {boolean} [explicit=false] Whether to require the user to explicitly have the exact permission
   * @returns {boolean}
   */EvaluatedPermissions.prototype.hasPermission=function hasPermission(permission){var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;permission=this.member.client.resolver.resolvePermission(permission);if(!explicit&&(this.raw&Constants.PermissionFlags.ADMINISTRATOR)>0)return true;return(this.raw&permission)>0;};/**
   * Checks whether the user has all specified permissions.
   * @param {PermissionResolvable[]} permissions The permissions to check for
   * @param {boolean} [explicit=false] Whether to require the user to explicitly have the exact permissions
   * @returns {boolean}
   */EvaluatedPermissions.prototype.hasPermissions=function hasPermissions(permissions){var _this21=this;var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return permissions.every(function(p){return _this21.hasPermission(p,explicit);});};/**
   * Checks whether the user has all specified permissions, and lists any missing permissions.
   * @param {PermissionResolvable[]} permissions The permissions to check for
   * @param {boolean} [explicit=false] Whether to require the user to explicitly have the exact permissions
   * @returns {PermissionResolvable[]}
   */EvaluatedPermissions.prototype.missingPermissions=function missingPermissions(permissions){var _this22=this;var explicit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return permissions.filter(function(p){return!_this22.hasPermission(p,explicit);});};return EvaluatedPermissions;}();module.exports=EvaluatedPermissions;/***/},/* 17 *//***/function(module,exports,__webpack_require__){var User=__webpack_require__(6);var Role=__webpack_require__(8);var Emoji=__webpack_require__(10);var Presence=__webpack_require__(7).Presence;var GuildMember=__webpack_require__(14);var Constants=__webpack_require__(0);var Collection=__webpack_require__(3);var cloneObject=__webpack_require__(4);var arraysEqual=__webpack_require__(153);/**
 * Represents a guild (or a server) on Discord.
 * <info>It's recommended to see if a guild is available before performing operations or reading data from it. You can
 * check this with `guild.available`.</info>
 */var Guild=function(){function Guild(client,data){_classCallCheck(this,Guild);/**
     * The Client that created the instance of the the Guild.
     * @name Guild#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});/**
     * A collection of members that are in this guild. The key is the member's ID, the value is the member.
     * @type {Collection<string, GuildMember>}
     */this.members=new Collection();/**
     * A collection of channels that are in this guild. The key is the channel's ID, the value is the channel.
     * @type {Collection<string, GuildChannel>}
     */this.channels=new Collection();/**
     * A collection of roles that are in this guild. The key is the role's ID, the value is the role.
     * @type {Collection<string, Role>}
     */this.roles=new Collection();/**
     * A collection of presences in this guild
     * @type {Collection<string, Presence>}
     */this.presences=new Collection();if(!data)return;if(data.unavailable){/**
       * Whether the guild is available to access. If it is not available, it indicates a server outage.
       * @type {boolean}
       */this.available=false;/**
       * The Unique ID of the Guild, useful for comparisons.
       * @type {string}
       */this.id=data.id;}else{this.available=true;this.setup(data);}}/**
   * Sets up the Guild
   * @param {*} data The raw data of the guild
   * @private
   */Guild.prototype.setup=function setup(data){/**
     * The name of the guild
     * @type {string}
     */this.name=data.name;/**
     * The hash of the guild icon, or null if there is no icon.
     * @type {?string}
     */this.icon=data.icon;/**
     * The hash of the guild splash image, or null if no splash (VIP only)
     * @type {?string}
     */this.splash=data.splash;/**
     * The region the guild is located in
     * @type {string}
     */this.region=data.region;/**
     * The full amount of members in this guild as of `READY`
     * @type {number}
     */this.memberCount=data.member_count||this.memberCount;/**
     * Whether the guild is "large" (has more than 250 members)
     * @type {boolean}
     */this.large=data.large||this.large;/**
     * An array of guild features.
     * @type {Object[]}
     */this.features=data.features;/**
     * The ID of the application that created this guild (if applicable)
     * @type {?string}
     */this.applicationID=data.application_id;/**
     * A collection of emojis that are in this guild. The key is the emoji's ID, the value is the emoji.
     * @type {Collection<string, Emoji>}
     */this.emojis=new Collection();for(var _iterator41=data.emojis,_isArray41=Array.isArray(_iterator41),_i42=0,_iterator41=_isArray41?_iterator41:_iterator41[Symbol.iterator]();;){var _ref53;if(_isArray41){if(_i42>=_iterator41.length)break;_ref53=_iterator41[_i42++];}else{_i42=_iterator41.next();if(_i42.done)break;_ref53=_i42.value;}var emoji=_ref53;this.emojis.set(emoji.id,new Emoji(this,emoji));}/**
     * The time in seconds before a user is counted as "away from keyboard".
     * @type {?number}
     */this.afkTimeout=data.afk_timeout;/**
     * The ID of the voice channel where AFK members are moved.
     * @type {?string}
     */this.afkChannelID=data.afk_channel_id;/**
     * Whether embedded images are enabled on this guild.
     * @type {boolean}
     */this.embedEnabled=data.embed_enabled;/**
     * The verification level of the guild.
     * @type {number}
     */this.verificationLevel=data.verification_level;/**
     * The timestamp the client user joined the guild at
     * @type {number}
     */this.joinedTimestamp=data.joined_at?new Date(data.joined_at).getTime():this.joinedTimestamp;this.id=data.id;this.available=!data.unavailable;this.features=data.features||this.features||[];if(data.members){this.members.clear();for(var _iterator42=data.members,_isArray42=Array.isArray(_iterator42),_i43=0,_iterator42=_isArray42?_iterator42:_iterator42[Symbol.iterator]();;){var _ref54;if(_isArray42){if(_i43>=_iterator42.length)break;_ref54=_iterator42[_i43++];}else{_i43=_iterator42.next();if(_i43.done)break;_ref54=_i43.value;}var guildUser=_ref54;this._addMember(guildUser,false);}}if(data.owner_id){/**
       * The user ID of this guild's owner.
       * @type {string}
       */this.ownerID=data.owner_id;}if(data.channels){this.channels.clear();for(var _iterator43=data.channels,_isArray43=Array.isArray(_iterator43),_i44=0,_iterator43=_isArray43?_iterator43:_iterator43[Symbol.iterator]();;){var _ref55;if(_isArray43){if(_i44>=_iterator43.length)break;_ref55=_iterator43[_i44++];}else{_i44=_iterator43.next();if(_i44.done)break;_ref55=_i44.value;}var channel=_ref55;this.client.dataManager.newChannel(channel,this);}}if(data.roles){this.roles.clear();for(var _iterator44=data.roles,_isArray44=Array.isArray(_iterator44),_i45=0,_iterator44=_isArray44?_iterator44:_iterator44[Symbol.iterator]();;){var _ref56;if(_isArray44){if(_i45>=_iterator44.length)break;_ref56=_iterator44[_i45++];}else{_i45=_iterator44.next();if(_i45.done)break;_ref56=_i45.value;}var role=_ref56;var newRole=new Role(this,role);this.roles.set(newRole.id,newRole);}}if(data.presences){for(var _iterator45=data.presences,_isArray45=Array.isArray(_iterator45),_i46=0,_iterator45=_isArray45?_iterator45:_iterator45[Symbol.iterator]();;){var _ref57;if(_isArray45){if(_i46>=_iterator45.length)break;_ref57=_iterator45[_i46++];}else{_i46=_iterator45.next();if(_i46.done)break;_ref57=_i46.value;}var presence=_ref57;this._setPresence(presence.user.id,presence);}}this._rawVoiceStates=new Collection();if(data.voice_states){for(var _iterator46=data.voice_states,_isArray46=Array.isArray(_iterator46),_i47=0,_iterator46=_isArray46?_iterator46:_iterator46[Symbol.iterator]();;){var _ref58;if(_isArray46){if(_i47>=_iterator46.length)break;_ref58=_iterator46[_i47++];}else{_i47=_iterator46.next();if(_i47.done)break;_ref58=_i47.value;}var voiceState=_ref58;this._rawVoiceStates.set(voiceState.user_id,voiceState);var member=this.members.get(voiceState.user_id);if(member){member.serverMute=voiceState.mute;member.serverDeaf=voiceState.deaf;member.selfMute=voiceState.self_mute;member.selfDeaf=voiceState.self_deaf;member.voiceSessionID=voiceState.session_id;member.voiceChannelID=voiceState.channel_id;this.channels.get(voiceState.channel_id).members.set(member.user.id,member);}}}};/**
   * The timestamp the guild was created at
   * @type {number}
   * @readonly
   *//**
   * Returns the GuildMember form of a User object, if the user is present in the guild.
   * @param {UserResolvable} user The user that you want to obtain the GuildMember of
   * @returns {?GuildMember}
   * @example
   * // get the guild member of a user
   * const member = guild.member(message.author);
   */Guild.prototype.member=function member(user){return this.client.resolver.resolveGuildMember(this,user);};/**
   * Fetch a collection of banned users in this guild.
   * @returns {Promise<Collection<string, User>>}
   */Guild.prototype.fetchBans=function fetchBans(){return this.client.rest.methods.getGuildBans(this);};/**
   * Fetch a collection of invites to this guild. Resolves with a collection mapping invites by their codes.
   * @returns {Promise<Collection<string, Invite>>}
   */Guild.prototype.fetchInvites=function fetchInvites(){return this.client.rest.methods.getGuildInvites(this);};/**
   * Fetch all webhooks for the guild.
   * @returns {Collection<Webhook>}
   */Guild.prototype.fetchWebhooks=function fetchWebhooks(){return this.client.rest.methods.getGuildWebhooks(this);};/**
   * Fetch a single guild member from a user.
   * @param {UserResolvable} user The user to fetch the member for
   * @returns {Promise<GuildMember>}
   */Guild.prototype.fetchMember=function fetchMember(user){if(this._fetchWaiter)return Promise.reject(new Error('Already fetching guild members.'));user=this.client.resolver.resolveUser(user);if(!user)return Promise.reject(new Error('User is not cached. Use Client.fetchUser first.'));if(this.members.has(user.id))return Promise.resolve(this.members.get(user.id));return this.client.rest.methods.getGuildMember(this,user);};/**
   * Fetches all the members in the guild, even if they are offline. If the guild has less than 250 members,
   * this should not be necessary.
   * @param {string} [query=''] An optional query to provide when fetching members
   * @returns {Promise<Guild>}
   */Guild.prototype.fetchMembers=function fetchMembers(){var _this23=this;var query=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return new Promise(function(resolve,reject){if(_this23._fetchWaiter)throw new Error('Already fetching guild members in ${this.id}.');if(_this23.memberCount===_this23.members.size){resolve(_this23);return;}_this23._fetchWaiter=resolve;_this23.client.ws.send({op:Constants.OPCodes.REQUEST_GUILD_MEMBERS,d:{guild_id:_this23.id,query:query,limit:0}});_this23._checkChunks();_this23.client.setTimeout(function(){return reject(new Error('Members didn\'t arrive in time.'));},120*1000);});};/**
   * The data for editing a guild
   * @typedef {Object} GuildEditData
   * @property {string} [name] The name of the guild
   * @property {string} [region] The region of the guild
   * @property {number} [verificationLevel] The verification level of the guild
   * @property {ChannelResolvable} [afkChannel] The AFK channel of the guild
   * @property {number} [afkTimeout] The AFK timeout of the guild
   * @property {Base64Resolvable} [icon] The icon of the guild
   * @property {GuildMemberResolvable} [owner] The owner of the guild
   * @property {Base64Resolvable} [splash] The splash screen of the guild
   *//**
   * Updates the Guild with new information - e.g. a new name.
   * @param {GuildEditData} data The data to update the guild with
   * @returns {Promise<Guild>}
   * @example
   * // set the guild name and region
   * guild.edit({
   *  name: 'Discord Guild',
   *  region: 'london',
   * })
   * .then(updated => console.log(`New guild name ${updated.name} in region ${updated.region}`))
   * .catch(console.error);
   */Guild.prototype.edit=function edit(data){return this.client.rest.methods.updateGuild(this,data);};/**
   * Edit the name of the guild.
   * @param {string} name The new name of the guild
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild name
   * guild.setName('Discord Guild')
   *  .then(updated => console.log(`Updated guild name to ${guild.name}`))
   *  .catch(console.error);
   */Guild.prototype.setName=function setName(name){return this.edit({name:name});};/**
   * Edit the region of the guild.
   * @param {string} region The new region of the guild.
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild region
   * guild.setRegion('london')
   *  .then(updated => console.log(`Updated guild region to ${guild.region}`))
   *  .catch(console.error);
   */Guild.prototype.setRegion=function setRegion(region){return this.edit({region:region});};/**
   * Edit the verification level of the guild.
   * @param {number} verificationLevel The new verification level of the guild
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild verification level
   * guild.setVerificationLevel(1)
   *  .then(updated => console.log(`Updated guild verification level to ${guild.verificationLevel}`))
   *  .catch(console.error);
   */Guild.prototype.setVerificationLevel=function setVerificationLevel(verificationLevel){return this.edit({verificationLevel:verificationLevel});};/**
   * Edit the AFK channel of the guild.
   * @param {ChannelResolvable} afkChannel The new AFK channel
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild AFK channel
   * guild.setAFKChannel(channel)
   *  .then(updated => console.log(`Updated guild AFK channel to ${guild.afkChannel}`))
   *  .catch(console.error);
   */Guild.prototype.setAFKChannel=function setAFKChannel(afkChannel){return this.edit({afkChannel:afkChannel});};/**
   * Edit the AFK timeout of the guild.
   * @param {number} afkTimeout The time in seconds that a user must be idle to be considered AFK
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild AFK channel
   * guild.setAFKTimeout(60)
   *  .then(updated => console.log(`Updated guild AFK timeout to ${guild.afkTimeout}`))
   *  .catch(console.error);
   */Guild.prototype.setAFKTimeout=function setAFKTimeout(afkTimeout){return this.edit({afkTimeout:afkTimeout});};/**
   * Set a new guild icon.
   * @param {Base64Resolvable} icon The new icon of the guild
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild icon
   * guild.setIcon(fs.readFileSync('./icon.png'))
   *  .then(updated => console.log('Updated the guild icon'))
   *  .catch(console.error);
   */Guild.prototype.setIcon=function setIcon(icon){return this.edit({icon:icon});};/**
   * Sets a new owner of the guild.
   * @param {GuildMemberResolvable} owner The new owner of the guild
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild owner
   * guild.setOwner(guilds.members[0])
   *  .then(updated => console.log(`Updated the guild owner to ${updated.owner.username}`))
   *  .catch(console.error);
   */Guild.prototype.setOwner=function setOwner(owner){return this.edit({owner:owner});};/**
   * Set a new guild splash screen.
   * @param {Base64Resolvable} splash The new splash screen of the guild
   * @returns {Promise<Guild>}
   * @example
   * // edit the guild splash
   * guild.setIcon(fs.readFileSync('./splash.png'))
   *  .then(updated => console.log('Updated the guild splash'))
   *  .catch(console.error);
   */Guild.prototype.setSplash=function setSplash(splash){return this.edit({splash:splash});};/**
   * Bans a user from the guild.
   * @param {UserResolvable} user The user to ban
   * @param {number} [deleteDays=0] The amount of days worth of messages from this user that should
   * also be deleted. Between `0` and `7`.
   * @returns {Promise<GuildMember|User|string>} Result object will be resolved as specifically as possible.
   * If the GuildMember cannot be resolved, the User will instead be attempted to be resolved. If that also cannot
   * be resolved, the user ID will be the result.
   * @example
   * // ban a user
   * guild.ban('123123123123');
   */Guild.prototype.ban=function ban(user){var deleteDays=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return this.client.rest.methods.banGuildMember(this,user,deleteDays);};/**
   * Unbans a user from the guild.
   * @param {UserResolvable} user The user to unban
   * @returns {Promise<User>}
   * @example
   * // unban a user
   * guild.unban('123123123123')
   *  .then(user => console.log(`Unbanned ${user.username} from ${guild.name}`))
   *  .catch(reject);
   */Guild.prototype.unban=function unban(user){return this.client.rest.methods.unbanGuildMember(this,user);};/**
   * Prunes members from the guild based on how long they have been inactive.
   * @param {number} days Number of days of inactivity required to kick
   * @param {boolean} [dry=false] If true, will return number of users that will be kicked, without actually doing it
   * @returns {Promise<number>} The number of members that were/will be kicked
   * @example
   * // see how many members will be pruned
   * guild.pruneMembers(12, true)
   *   .then(pruned => console.log(`This will prune ${pruned} people!`);
   *   .catch(console.error);
   * @example
   * // actually prune the members
   * guild.pruneMembers(12)
   *   .then(pruned => console.log(`I just pruned ${pruned} people!`);
   *   .catch(console.error);
   */Guild.prototype.pruneMembers=function pruneMembers(days){var dry=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(typeof days!=='number')throw new TypeError('Days must be a number.');return this.client.rest.methods.pruneGuildMembers(this,days,dry);};/**
   * Syncs this guild (already done automatically every 30 seconds).
   * <warn>This is only available when using a user account.</warn>
   */Guild.prototype.sync=function sync(){if(!this.client.user.bot)this.client.syncGuilds([this]);};/**
   * Creates a new channel in the guild.
   * @param {string} name The name of the new channel
   * @param {string} type The type of the new channel, either `text` or `voice`
   * @param {Array<PermissionOverwrites|Object>} overwrites Permission overwrites to apply to the new channel
   * @returns {Promise<TextChannel|VoiceChannel>}
   * @example
   * // create a new text channel
   * guild.createChannel('new-general', 'text')
   *  .then(channel => console.log(`Created new channel ${channel}`))
   *  .catch(console.error);
   */Guild.prototype.createChannel=function createChannel(name,type,overwrites){return this.client.rest.methods.createChannel(this,name,type,overwrites);};/**
   * Creates a new role in the guild, and optionally updates it with the given information.
   * @param {RoleData} [data] The data to update the role with
   * @returns {Promise<Role>}
   * @example
   * // create a new role
   * guild.createRole()
   *  .then(role => console.log(`Created role ${role}`))
   *  .catch(console.error);
   * @example
   * // create a new role with data
   * guild.createRole({ name: 'Super Cool People' })
   *   .then(role => console.log(`Created role ${role}`))
   *   .catch(console.error)
   */Guild.prototype.createRole=function createRole(data){var create=this.client.rest.methods.createGuildRole(this);if(!data)return create;return create.then(function(role){return role.edit(data);});};/**
   * Creates a new custom emoji in the guild.
   * @param {BufferResolvable} attachment The image for the emoji.
   * @param {string} name The name for the emoji.
   * @returns {Promise<Emoji>} The created emoji.
   * @example
   * // create a new emoji from a url
   * guild.createEmoji('https://i.imgur.com/w3duR07.png', 'rip')
   *  .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
   *  .catch(console.error);
   * @example
   * // create a new emoji from a file on your computer
   * guild.createEmoji('./memes/banana.png', 'banana')
   *  .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
   *  .catch(console.error);
   */Guild.prototype.createEmoji=function createEmoji(attachment,name){var _this24=this;return new Promise(function(resolve){if(attachment.startsWith('data:')){resolve(_this24.client.rest.methods.createEmoji(_this24,attachment,name));}else{_this24.client.resolver.resolveBuffer(attachment).then(function(data){return resolve(_this24.client.rest.methods.createEmoji(_this24,data,name));});}});};/**
   * Delete an emoji.
   * @param {Emoji|string} emoji The emoji to delete.
   * @returns {Promise}
   */Guild.prototype.deleteEmoji=function deleteEmoji(emoji){if(!(emoji instanceof Emoji))emoji=this.emojis.get(emoji);return this.client.rest.methods.deleteEmoji(emoji);};/**
   * Causes the Client to leave the guild.
   * @returns {Promise<Guild>}
   * @example
   * // leave a guild
   * guild.leave()
   *  .then(g => console.log(`Left the guild ${g}`))
   *  .catch(console.error);
   */Guild.prototype.leave=function leave(){return this.client.rest.methods.leaveGuild(this);};/**
   * Causes the Client to delete the guild.
   * @returns {Promise<Guild>}
   * @example
   * // delete a guild
   * guild.delete()
   *  .then(g => console.log(`Deleted the guild ${g}`))
   *  .catch(console.error);
   */Guild.prototype.delete=function _delete(){return this.client.rest.methods.deleteGuild(this);};/**
   * Set the position of a role in this guild
   * @param {string|Role} role the role to edit, can be a role object or a role ID.
   * @param {number} position the new position of the role
   * @returns {Promise<Guild>}
   */Guild.prototype.setRolePosition=function setRolePosition(role,position){if(typeof role==='string'){role=this.roles.get(role);if(!role)return Promise.reject(new Error('Supplied role is not a role or string.'));}position=Number(position);if(isNaN(position))return Promise.reject(new Error('Supplied position is not a number.'));var lowestAffected=Math.min(role.position,position);var highestAffected=Math.max(role.position,position);var rolesToUpdate=this.roles.filter(function(r){return r.position>=lowestAffected&&r.position<=highestAffected;});// stop role positions getting stupidly inflated
if(position>role.position){position=rolesToUpdate.first().position;}else{position=rolesToUpdate.last().position;}var updatedRoles=[];for(var _iterator47=rolesToUpdate.values(),_isArray47=Array.isArray(_iterator47),_i48=0,_iterator47=_isArray47?_iterator47:_iterator47[Symbol.iterator]();;){var _ref59;if(_isArray47){if(_i48>=_iterator47.length)break;_ref59=_iterator47[_i48++];}else{_i48=_iterator47.next();if(_i48.done)break;_ref59=_i48.value;}var uRole=_ref59;updatedRoles.push({id:uRole.id,position:uRole.id===role.id?position:uRole.position+(position<role.position?1:-1)});}return this.client.rest.methods.setRolePositions(this.id,updatedRoles);};/**
   * Whether this Guild equals another Guild. It compares all properties, so for most operations
   * it is advisable to just compare `guild.id === guild2.id` as it is much faster and is often
   * what most users need.
   * @param {Guild} guild Guild to compare with
   * @returns {boolean}
   */Guild.prototype.equals=function equals(guild){var equal=guild&&this.id===guild.id&&this.available===!guild.unavailable&&this.splash===guild.splash&&this.region===guild.region&&this.name===guild.name&&this.memberCount===guild.member_count&&this.large===guild.large&&this.icon===guild.icon&&arraysEqual(this.features,guild.features)&&this.ownerID===guild.owner_id&&this.verificationLevel===guild.verification_level&&this.embedEnabled===guild.embed_enabled;if(equal){if(this.embedChannel){if(this.embedChannel.id!==guild.embed_channel_id)equal=false;}else if(guild.embed_channel_id){equal=false;}}return equal;};/**
   * When concatenated with a string, this automatically concatenates the guild's name instead of the Guild object.
   * @returns {string}
   * @example
   * // logs: Hello from My Guild!
   * console.log(`Hello from ${guild}!`);
   * @example
   * // logs: Hello from My Guild!
   * console.log(`Hello from ' + guild + '!');
   */Guild.prototype.toString=function toString(){return this.name;};Guild.prototype._addMember=function _addMember(guildUser){var emitEvent=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var existing=this.members.has(guildUser.user.id);if(!(guildUser.user instanceof User))guildUser.user=this.client.dataManager.newUser(guildUser.user);guildUser.joined_at=guildUser.joined_at||0;var member=new GuildMember(this,guildUser);this.members.set(member.id,member);if(this._rawVoiceStates&&this._rawVoiceStates.has(member.user.id)){var voiceState=this._rawVoiceStates.get(member.user.id);member.serverMute=voiceState.mute;member.serverDeaf=voiceState.deaf;member.selfMute=voiceState.self_mute;member.selfDeaf=voiceState.self_deaf;member.voiceSessionID=voiceState.session_id;member.voiceChannelID=voiceState.channel_id;if(this.client.channels.has(voiceState.channel_id)){this.client.channels.get(voiceState.channel_id).members.set(member.user.id,member);}else{this.client.emit('warn','Member '+member.id+' added in guild '+this.id+' with an uncached voice channel');}}/**
     * Emitted whenever a user joins a guild.
     * @event Client#guildMemberAdd
     * @param {GuildMember} member The member that has joined a guild
     */if(this.client.ws.status===Constants.Status.READY&&emitEvent&&!existing){this.client.emit(Constants.Events.GUILD_MEMBER_ADD,member);}this._checkChunks();return member;};Guild.prototype._updateMember=function _updateMember(member,data){var oldMember=cloneObject(member);if(data.roles)member._roles=data.roles;if(typeof data.nick!=='undefined')member.nickname=data.nick;var notSame=member.nickname!==oldMember.nickname||!arraysEqual(member._roles,oldMember._roles);if(this.client.ws.status===Constants.Status.READY&&notSame){/**
       * Emitted whenever a guild member changes - i.e. new role, removed role, nickname
       * @event Client#guildMemberUpdate
       * @param {GuildMember} oldMember The member before the update
       * @param {GuildMember} newMember The member after the update
       */this.client.emit(Constants.Events.GUILD_MEMBER_UPDATE,oldMember,member);}return{old:oldMember,mem:member};};Guild.prototype._removeMember=function _removeMember(guildMember){this.members.delete(guildMember.id);this._checkChunks();};Guild.prototype._memberSpeakUpdate=function _memberSpeakUpdate(user,speaking){var member=this.members.get(user);if(member&&member.speaking!==speaking){member.speaking=speaking;/**
       * Emitted once a guild member starts/stops speaking
       * @event Client#guildMemberSpeaking
       * @param {GuildMember} member The member that started/stopped speaking
       * @param {boolean} speaking Whether or not the member is speaking
       */this.client.emit(Constants.Events.GUILD_MEMBER_SPEAKING,member,speaking);}};Guild.prototype._setPresence=function _setPresence(id,presence){if(this.presences.get(id)){this.presences.get(id).update(presence);return;}this.presences.set(id,new Presence(presence));};Guild.prototype._checkChunks=function _checkChunks(){if(this._fetchWaiter){if(this.members.size===this.memberCount){this._fetchWaiter(this);this._fetchWaiter=null;}}};_createClass(Guild,[{key:'createdTimestamp',get:function get(){return this.id/4194304+1420070400000;}/**
   * The time the guild was created
   * @type {Date}
   * @readonly
   */},{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * The time the client user joined the guild
   * @type {Date}
   * @readonly
   */},{key:'joinedAt',get:function get(){return new Date(this.joinedTimestamp);}/**
   * Gets the URL to this guild's icon (if it has one, otherwise it returns null)
   * @type {?string}
   * @readonly
   */},{key:'iconURL',get:function get(){if(!this.icon)return null;return Constants.Endpoints.guildIcon(this.id,this.icon);}/**
   * Gets the URL to this guild's splash (if it has one, otherwise it returns null)
   * @type {?string}
   * @readonly
   */},{key:'splashURL',get:function get(){if(!this.splash)return null;return Constants.Endpoints.guildSplash(this.id,this.splash);}/**
   * The owner of the guild
   * @type {GuildMember}
   * @readonly
   */},{key:'owner',get:function get(){return this.members.get(this.ownerID);}/**
   * If the client is connected to any voice channel in this guild, this will be the relevant VoiceConnection.
   * @type {?VoiceConnection}
   * @readonly
   */},{key:'voiceConnection',get:function get(){if(this.client.browser)return null;return this.client.voice.connections.get(this.id)||null;}/**
   * The `#general` GuildChannel of the server.
   * @type {GuildChannel}
   * @readonly
   */},{key:'defaultChannel',get:function get(){return this.channels.get(this.id);}}]);return Guild;}();module.exports=Guild;/***/},/* 18 *//***/function(module,exports){/**
 * Represents a limited emoji set used for both custom and unicode emojis. Custom emojis
 * will use this class opposed to the Emoji class when the client doesn't know enough
 * information about them.
 */var ReactionEmoji=function(){function ReactionEmoji(reaction,name,id){_classCallCheck(this,ReactionEmoji);/**
     * The message reaction this emoji refers to
     * @type {MessageReaction}
     */this.reaction=reaction;/**
     * The name of this reaction emoji.
     * @type {string}
     */this.name=name;/**
     * The ID of this reaction emoji.
     * @type {string}
     */this.id=id;}/**
   * The identifier of this emoji, used for message reactions
   * @readonly
   * @type {string}
   *//**
   * Creates the text required to form a graphical emoji on Discord.
   * @example
   * // send the emoji used in a reaction to the channel the reaction is part of
   * reaction.message.channel.sendMessage(`The emoji used is ${reaction.emoji}`);
   * @returns {string}
   */ReactionEmoji.prototype.toString=function toString(){return this.id?'<:'+this.name+':'+this.id+'>':this.name;};_createClass(ReactionEmoji,[{key:'identifier',get:function get(){if(this.id)return this.name+':'+this.id;return encodeURIComponent(this.name);}}]);return ReactionEmoji;}();module.exports=ReactionEmoji;/***/},/* 19 *//***/function(module,exports,__webpack_require__){var path=__webpack_require__(23);var escapeMarkdown=__webpack_require__(15);/**
 * Represents a webhook
 */var Webhook=function(){function Webhook(client,dataOrID,token){_classCallCheck(this,Webhook);if(client){/**
       * The Client that instantiated the Webhook
       * @name Webhook#client
       * @type {Client}
       * @readonly
       */Object.defineProperty(this,'client',{value:client});if(dataOrID)this.setup(dataOrID);}else{this.id=dataOrID;this.token=token;Object.defineProperty(this,'client',{value:this});}}Webhook.prototype.setup=function setup(data){/**
     * The name of the webhook
     * @type {string}
     */this.name=data.name;/**
     * The token for the webhook
     * @type {string}
     */this.token=data.token;/**
     * The avatar for the webhook
     * @type {string}
     */this.avatar=data.avatar;/**
     * The ID of the webhook
     * @type {string}
     */this.id=data.id;/**
     * The guild the webhook belongs to
     * @type {string}
     */this.guildID=data.guild_id;/**
     * The channel the webhook belongs to
     * @type {string}
     */this.channelID=data.channel_id;/**
     * The owner of the webhook
     * @type {User}
     */if(data.user)this.owner=data.user;};/**
   * Options that can be passed into sendMessage, sendTTSMessage, sendFile, sendCode
   * @typedef {Object} WebhookMessageOptions
   * @property {boolean} [tts=false] Whether or not the message should be spoken aloud
   * @property {boolean} [disableEveryone=this.options.disableEveryone] Whether or not @everyone and @here
   * should be replaced with plain-text
   *//**
   * Send a message with this webhook
   * @param {StringResolvable} content The content to send.
   * @param {WebhookMessageOptions} [options={}] The options to provide.
   * @returns {Promise<Message|Message[]>}
   * @example
   * // send a message
   * webhook.sendMessage('hello!')
   *  .then(message => console.log(`Sent message: ${message.content}`))
   *  .catch(console.error);
   */Webhook.prototype.sendMessage=function sendMessage(content){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return this.client.rest.methods.sendWebhookMessage(this,content,options);};/**
   * Send a raw slack message with this webhook
   * @param {Object} body The raw body to send.
   * @returns {Promise}
   * @example
   * // send a slack message
   * webhook.sendSlackMessage({
   *   'username': 'Wumpus',
   *   'attachments': [{
   *     'pretext': 'this looks pretty cool',
   *     'color': '#F0F',
   *     'footer_icon': 'http://snek.s3.amazonaws.com/topSnek.png',
   *     'footer': 'Powered by sneks',
   *     'ts': Date.now() / 1000
   *   }]
   * }).catch(console.error);
   */Webhook.prototype.sendSlackMessage=function sendSlackMessage(body){return this.client.rest.methods.sendSlackWebhookMessage(this,body);};/**
   * Send a text-to-speech message with this webhook
   * @param {StringResolvable} content The content to send
   * @param {WebhookMessageOptions} [options={}] The options to provide
   * @returns {Promise<Message|Message[]>}
   * @example
   * // send a TTS message
   * webhook.sendTTSMessage('hello!')
   *  .then(message => console.log(`Sent tts message: ${message.content}`))
   *  .catch(console.error);
   */Webhook.prototype.sendTTSMessage=function sendTTSMessage(content){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};Object.assign(options,{tts:true});return this.client.rest.methods.sendWebhookMessage(this,content,options);};/**
   * Send a file with this webhook
   * @param {BufferResolvable} attachment The file to send
   * @param {string} [fileName="file.jpg"] The name and extension of the file
   * @param {StringResolvable} [content] Text message to send with the attachment
   * @param {WebhookMessageOptions} [options] The options to provide
   * @returns {Promise<Message>}
   */Webhook.prototype.sendFile=function sendFile(attachment,fileName,content){var _this25=this;var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};if(!fileName){if(typeof attachment==='string'){fileName=path.basename(attachment);}else if(attachment&&attachment.path){fileName=path.basename(attachment.path);}else{fileName='file.jpg';}}return this.client.resolver.resolveBuffer(attachment).then(function(file){return _this25.client.rest.methods.sendWebhookMessage(_this25,content,options,{file:file,name:fileName});});};/**
   * Send a code block with this webhook
   * @param {string} lang Language for the code block
   * @param {StringResolvable} content Content of the code block
   * @param {WebhookMessageOptions} options The options to provide
   * @returns {Promise<Message|Message[]>}
   */Webhook.prototype.sendCode=function sendCode(lang,content){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(options.split){if(_typeof(options.split)!=='object')options.split={};if(!options.split.prepend)options.split.prepend='```'+(lang||'')+'\n';if(!options.split.append)options.split.append='\n```';}content=escapeMarkdown(this.client.resolver.resolveString(content),true);return this.sendMessage('```'+(lang||'')+'\n'+content+'\n```',options);};/**
   * Edit the webhook.
   * @param {string} name The new name for the Webhook
   * @param {BufferResolvable} avatar The new avatar for the Webhook.
   * @returns {Promise<Webhook>}
   */Webhook.prototype.edit=function edit(){var _this26=this;var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.name;var avatar=arguments[1];if(avatar){return this.client.resolver.resolveBuffer(avatar).then(function(file){var dataURI=_this26.client.resolver.resolveBase64(file);return _this26.client.rest.methods.editWebhook(_this26,name,dataURI);});}return this.client.rest.methods.editWebhook(this,name).then(function(data){_this26.setup(data);return _this26;});};/**
   * Delete the webhook
   * @returns {Promise}
   */Webhook.prototype.delete=function _delete(){return this.client.rest.methods.deleteWebhook(this);};return Webhook;}();module.exports=Webhook;/***/},/* 20 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 *//* eslint-disable no-proto */var base64=__webpack_require__(63);var ieee754=__webpack_require__(65);var isArray=__webpack_require__(66);exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */Buffer.TYPED_ARRAY_SUPPORT=global.TYPED_ARRAY_SUPPORT!==undefined?global.TYPED_ARRAY_SUPPORT:typedArraySupport();/*
 * Export kMaxLength after typed array support is determined.
 */exports.kMaxLength=kMaxLength();function typedArraySupport(){try{var arr=new Uint8Array(1);arr.__proto__={__proto__:Uint8Array.prototype,foo:function foo(){return 42;}};return arr.foo()===42&&// typed array instances can be augmented
typeof arr.subarray==='function'&&// chrome 9-10 lack `subarray`
arr.subarray(1,1).byteLength===0;// ie10 has broken `subarray`
}catch(e){return false;}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?0x7fffffff:0x3fffffff;}function createBuffer(that,length){if(kMaxLength()<length){throw new RangeError('Invalid typed array length');}if(Buffer.TYPED_ARRAY_SUPPORT){// Return an augmented `Uint8Array` instance, for best performance
that=new Uint8Array(length);that.__proto__=Buffer.prototype;}else{// Fallback: Return an object instance of the Buffer class
if(that===null){that=new Buffer(length);}that.length=length;}return that;}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function Buffer(arg,encodingOrOffset,length){if(!Buffer.TYPED_ARRAY_SUPPORT&&!(this instanceof Buffer)){return new Buffer(arg,encodingOrOffset,length);}// Common case.
if(typeof arg==='number'){if(typeof encodingOrOffset==='string'){throw new Error('If encoding is specified then the first argument must be a string');}return allocUnsafe(this,arg);}return from(this,arg,encodingOrOffset,length);}Buffer.poolSize=8192;// not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment=function(arr){arr.__proto__=Buffer.prototype;return arr;};function from(that,value,encodingOrOffset,length){if(typeof value==='number'){throw new TypeError('"value" argument must not be a number');}if(typeof ArrayBuffer!=='undefined'&&value instanceof ArrayBuffer){return fromArrayBuffer(that,value,encodingOrOffset,length);}if(typeof value==='string'){return fromString(that,value,encodingOrOffset);}return fromObject(that,value);}/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/Buffer.from=function(value,encodingOrOffset,length){return from(null,value,encodingOrOffset,length);};if(Buffer.TYPED_ARRAY_SUPPORT){Buffer.prototype.__proto__=Uint8Array.prototype;Buffer.__proto__=Uint8Array;if(typeof Symbol!=='undefined'&&Symbol.species&&Buffer[Symbol.species]===Buffer){// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:true});}}function assertSize(size){if(typeof size!=='number'){throw new TypeError('"size" argument must be a number');}else if(size<0){throw new RangeError('"size" argument must not be negative');}}function alloc(that,size,fill,encoding){assertSize(size);if(size<=0){return createBuffer(that,size);}if(fill!==undefined){// Only pay attention to encoding if it's a string. This
// prevents accidentally sending in a number that would
// be interpretted as a start offset.
return typeof encoding==='string'?createBuffer(that,size).fill(fill,encoding):createBuffer(that,size).fill(fill);}return createBuffer(that,size);}/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/Buffer.alloc=function(size,fill,encoding){return alloc(null,size,fill,encoding);};function allocUnsafe(that,size){assertSize(size);that=createBuffer(that,size<0?0:checked(size)|0);if(!Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i<size;++i){that[i]=0;}}return that;}/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */Buffer.allocUnsafe=function(size){return allocUnsafe(null,size);};/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */Buffer.allocUnsafeSlow=function(size){return allocUnsafe(null,size);};function fromString(that,string,encoding){if(typeof encoding!=='string'||encoding===''){encoding='utf8';}if(!Buffer.isEncoding(encoding)){throw new TypeError('"encoding" must be a valid string encoding');}var length=byteLength(string,encoding)|0;that=createBuffer(that,length);var actual=that.write(string,encoding);if(actual!==length){// Writing a hex string, for example, that contains invalid characters will
// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
that=that.slice(0,actual);}return that;}function fromArrayLike(that,array){var length=array.length<0?0:checked(array.length)|0;that=createBuffer(that,length);for(var i=0;i<length;i+=1){that[i]=array[i]&255;}return that;}function fromArrayBuffer(that,array,byteOffset,length){array.byteLength;// this throws if `array` is not a valid ArrayBuffer
if(byteOffset<0||array.byteLength<byteOffset){throw new RangeError('\'offset\' is out of bounds');}if(array.byteLength<byteOffset+(length||0)){throw new RangeError('\'length\' is out of bounds');}if(byteOffset===undefined&&length===undefined){array=new Uint8Array(array);}else if(length===undefined){array=new Uint8Array(array,byteOffset);}else{array=new Uint8Array(array,byteOffset,length);}if(Buffer.TYPED_ARRAY_SUPPORT){// Return an augmented `Uint8Array` instance, for best performance
that=array;that.__proto__=Buffer.prototype;}else{// Fallback: Return an object instance of the Buffer class
that=fromArrayLike(that,array);}return that;}function fromObject(that,obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length)|0;that=createBuffer(that,len);if(that.length===0){return that;}obj.copy(that,0,0,len);return that;}if(obj){if(typeof ArrayBuffer!=='undefined'&&obj.buffer instanceof ArrayBuffer||'length'in obj){if(typeof obj.length!=='number'||isnan(obj.length)){return createBuffer(that,0);}return fromArrayLike(that,obj);}if(obj.type==='Buffer'&&isArray(obj.data)){return fromArrayLike(that,obj.data);}}throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');}function checked(length){// Note: cannot use `length < kMaxLength()` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(length>=kMaxLength()){throw new RangeError('Attempt to allocate Buffer larger than maximum '+'size: 0x'+kMaxLength().toString(16)+' bytes');}return length|0;}function SlowBuffer(length){if(+length!=length){// eslint-disable-line eqeqeq
length=0;}return Buffer.alloc(+length);}Buffer.isBuffer=function isBuffer(b){return!!(b!=null&&b._isBuffer);};Buffer.compare=function compare(a,b){if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('Arguments must be Buffers');}if(a===b)return 0;var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i];y=b[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'latin1':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return true;default:return false;}};Buffer.concat=function concat(list,length){if(!isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers');}if(list.length===0){return Buffer.alloc(0);}var i;if(length===undefined){length=0;for(i=0;i<list.length;++i){length+=list[i].length;}}var buffer=Buffer.allocUnsafe(length);var pos=0;for(i=0;i<list.length;++i){var buf=list[i];if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers');}buf.copy(buffer,pos);pos+=buf.length;}return buffer;};function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length;}if(typeof ArrayBuffer!=='undefined'&&typeof ArrayBuffer.isView==='function'&&(ArrayBuffer.isView(string)||string instanceof ArrayBuffer)){return string.byteLength;}if(typeof string!=='string'){string=''+string;}var len=string.length;if(len===0)return 0;// Use a for loop to avoid recursion
var loweredCase=false;for(;;){switch(encoding){case'ascii':case'latin1':case'binary':return len;case'utf8':case'utf-8':case undefined:return utf8ToBytes(string).length;case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return len*2;case'hex':return len>>>1;case'base64':return base64ToBytes(string).length;default:if(loweredCase)return utf8ToBytes(string).length;// assume utf8
encoding=(''+encoding).toLowerCase();loweredCase=true;}}}Buffer.byteLength=byteLength;function slowToString(encoding,start,end){var loweredCase=false;// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
// property of a typed array.
// This behaves neither like String nor Uint8Array in that we set start/end
// to their upper/lower bounds if the value passed is out of range.
// undefined is handled specially as per ECMA-262 6th Edition,
// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
if(start===undefined||start<0){start=0;}// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if(start>this.length){return'';}if(end===undefined||end>this.length){end=this.length;}if(end<=0){return'';}// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
end>>>=0;start>>>=0;if(end<=start){return'';}if(!encoding)encoding='utf8';while(true){switch(encoding){case'hex':return hexSlice(this,start,end);case'utf8':case'utf-8':return utf8Slice(this,start,end);case'ascii':return asciiSlice(this,start,end);case'latin1':case'binary':return latin1Slice(this,start,end);case'base64':return base64Slice(this,start,end);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(encoding+'').toLowerCase();loweredCase=true;}}}// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer=true;function swap(b,n,m){var i=b[n];b[n]=b[m];b[m]=i;}Buffer.prototype.swap16=function swap16(){var len=this.length;if(len%2!==0){throw new RangeError('Buffer size must be a multiple of 16-bits');}for(var i=0;i<len;i+=2){swap(this,i,i+1);}return this;};Buffer.prototype.swap32=function swap32(){var len=this.length;if(len%4!==0){throw new RangeError('Buffer size must be a multiple of 32-bits');}for(var i=0;i<len;i+=4){swap(this,i,i+3);swap(this,i+1,i+2);}return this;};Buffer.prototype.swap64=function swap64(){var len=this.length;if(len%8!==0){throw new RangeError('Buffer size must be a multiple of 64-bits');}for(var i=0;i<len;i+=8){swap(this,i,i+7);swap(this,i+1,i+6);swap(this,i+2,i+5);swap(this,i+3,i+4);}return this;};Buffer.prototype.toString=function toString(){var length=this.length|0;if(length===0)return'';if(arguments.length===0)return utf8Slice(this,0,length);return slowToString.apply(this,arguments);};Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this===b)return true;return Buffer.compare(this,b)===0;};Buffer.prototype.inspect=function inspect(){var str='';var max=exports.INSPECT_MAX_BYTES;if(this.length>0){str=this.toString('hex',0,max).match(/.{2}/g).join(' ');if(this.length>max)str+=' ... ';}return'<Buffer '+str+'>';};Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(!Buffer.isBuffer(target)){throw new TypeError('Argument must be a Buffer');}if(start===undefined){start=0;}if(end===undefined){end=target?target.length:0;}if(thisStart===undefined){thisStart=0;}if(thisEnd===undefined){thisEnd=this.length;}if(start<0||end>target.length||thisStart<0||thisEnd>this.length){throw new RangeError('out of range index');}if(thisStart>=thisEnd&&start>=end){return 0;}if(thisStart>=thisEnd){return-1;}if(start>=end){return 1;}start>>>=0;end>>>=0;thisStart>>>=0;thisEnd>>>=0;if(this===target)return 0;var x=thisEnd-thisStart;var y=end-start;var len=Math.min(x,y);var thisCopy=this.slice(thisStart,thisEnd);var targetCopy=target.slice(start,end);for(var i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i];y=targetCopy[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){// Empty buffer means no match
if(buffer.length===0)return-1;// Normalize byteOffset
if(typeof byteOffset==='string'){encoding=byteOffset;byteOffset=0;}else if(byteOffset>0x7fffffff){byteOffset=0x7fffffff;}else if(byteOffset<-0x80000000){byteOffset=-0x80000000;}byteOffset=+byteOffset;// Coerce to Number.
if(isNaN(byteOffset)){// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
byteOffset=dir?0:buffer.length-1;}// Normalize byteOffset: negative offsets start from the end of the buffer
if(byteOffset<0)byteOffset=buffer.length+byteOffset;if(byteOffset>=buffer.length){if(dir)return-1;else byteOffset=buffer.length-1;}else if(byteOffset<0){if(dir)byteOffset=0;else return-1;}// Normalize val
if(typeof val==='string'){val=Buffer.from(val,encoding);}// Finally, search either indexOf (if dir is true) or lastIndexOf
if(Buffer.isBuffer(val)){// Special case: looking for empty string/buffer always fails
if(val.length===0){return-1;}return arrayIndexOf(buffer,val,byteOffset,encoding,dir);}else if(typeof val==='number'){val=val&0xFF;// Search for a byte value [0-255]
if(Buffer.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf==='function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset);}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset);}}return arrayIndexOf(buffer,[val],byteOffset,encoding,dir);}throw new TypeError('val must be string, number or Buffer');}function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1;var arrLength=arr.length;var valLength=val.length;if(encoding!==undefined){encoding=String(encoding).toLowerCase();if(encoding==='ucs2'||encoding==='ucs-2'||encoding==='utf16le'||encoding==='utf-16le'){if(arr.length<2||val.length<2){return-1;}indexSize=2;arrLength/=2;valLength/=2;byteOffset/=2;}}function read(buf,i){if(indexSize===1){return buf[i];}else{return buf.readUInt16BE(i*indexSize);}}var i;if(dir){var foundIndex=-1;for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,foundIndex===-1?0:i-foundIndex)){if(foundIndex===-1)foundIndex=i;if(i-foundIndex+1===valLength)return foundIndex*indexSize;}else{if(foundIndex!==-1)i-=i-foundIndex;foundIndex=-1;}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength;for(i=byteOffset;i>=0;i--){var found=true;for(var j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=false;break;}}if(found)return i;}}return-1;}Buffer.prototype.includes=function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding)!==-1;};Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,true);};Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,false);};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining;}else{length=Number(length);if(length>remaining){length=remaining;}}// must be an even number of digits
var strLen=string.length;if(strLen%2!==0)throw new TypeError('Invalid hex string');if(length>strLen/2){length=strLen/2;}for(var i=0;i<length;++i){var parsed=parseInt(string.substr(i*2,2),16);if(isNaN(parsed))return i;buf[offset+i]=parsed;}return i;}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length);}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length);}function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length);}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length);}Buffer.prototype.write=function write(string,offset,length,encoding){// Buffer#write(string)
if(offset===undefined){encoding='utf8';length=this.length;offset=0;// Buffer#write(string, encoding)
}else if(length===undefined&&typeof offset==='string'){encoding=offset;length=this.length;offset=0;// Buffer#write(string, offset[, length][, encoding])
}else if(isFinite(offset)){offset=offset|0;if(isFinite(length)){length=length|0;if(encoding===undefined)encoding='utf8';}else{encoding=length;length=undefined;}// legacy write(string, encoding, offset, length) - remove in v0.13
}else{throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');}var remaining=this.length-offset;if(length===undefined||length>remaining)length=remaining;if(string.length>0&&(length<0||offset<0)||offset>this.length){throw new RangeError('Attempt to write outside buffer bounds');}if(!encoding)encoding='utf8';var loweredCase=false;for(;;){switch(encoding){case'hex':return hexWrite(this,string,offset,length);case'utf8':case'utf-8':return utf8Write(this,string,offset,length);case'ascii':return asciiWrite(this,string,offset,length);case'latin1':case'binary':return latin1Write(this,string,offset,length);case'base64':// Warning: maxLength not taken into account in base64Write
return base64Write(this,string,offset,length);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(''+encoding).toLowerCase();loweredCase=true;}}};Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)};};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf);}else{return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){end=Math.min(buf.length,end);var res=[];var i=start;while(i<end){var firstByte=buf[i];var codePoint=null;var bytesPerSequence=firstByte>0xEF?4:firstByte>0xDF?3:firstByte>0xBF?2:1;if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte;}break;case 2:secondByte=buf[i+1];if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|secondByte&0x3F;if(tempCodePoint>0x7F){codePoint=tempCodePoint;}}break;case 3:secondByte=buf[i+1];thirdByte=buf[i+2];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|thirdByte&0x3F;if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint;}}break;case 4:secondByte=buf[i+1];thirdByte=buf[i+2];fourthByte=buf[i+3];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|fourthByte&0x3F;if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint;}}}}if(codePoint===null){// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
codePoint=0xFFFD;bytesPerSequence=1;}else if(codePoint>0xFFFF){// encode to utf16 (surrogate pair dance)
codePoint-=0x10000;res.push(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}res.push(codePoint);i+=bytesPerSequence;}return decodeCodePointsArray(res);}// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH=0x1000;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints);// avoid extra slice()
}// Decode in chunks to avoid "call stack size exceeded".
var res='';var i=0;while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH));}return res;}function asciiSlice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]&0x7F);}return ret;}function latin1Slice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]);}return ret;}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out='';for(var i=start;i<end;++i){out+=toHex(buf[i]);}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256);}return res;}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0;}else if(start>len){start=len;}if(end<0){end+=len;if(end<0)end=0;}else if(end>len){end=len;}if(end<start)end=start;var newBuf;if(Buffer.TYPED_ARRAY_SUPPORT){newBuf=this.subarray(start,end);newBuf.__proto__=Buffer.prototype;}else{var sliceLen=end-start;newBuf=new Buffer(sliceLen,undefined);for(var i=0;i<sliceLen;++i){newBuf[i]=this[i+start];}}return newBuf;};/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function checkOffset(offset,ext,length){if(offset%1!==0||offset<0)throw new RangeError('offset is not uint');if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}return val;};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert){checkOffset(offset,byteLength,this.length);}var val=this[offset+--byteLength];var mul=1;while(byteLength>0&&(mul*=0x100)){val+=this[offset+--byteLength]*mul;}return val;};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8;};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1];};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+this[offset+3]*0x1000000;};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]*0x1000000+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3]);};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset+--i];while(i>0&&(mul*=0x100)){val+=this[offset+--i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readInt8=function readInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset]&0x80))return this[offset];return(0xff-this[offset]+1)*-1;};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24;};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3];};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance');if(value>max||value<min)throw new RangeError('"value" argument is out of bounds');if(offset+ext>buf.length)throw new RangeError('Index out of range');}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;byteLength=byteLength|0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var mul=1;var i=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;byteLength=byteLength|0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var i=byteLength-1;var mul=1;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);this[offset]=value&0xff;return offset+1;};function objectWriteUInt16(buf,value,offset,littleEndian){if(value<0)value=0xffff+value+1;for(var i=0,j=Math.min(buf.length-offset,2);i<j;++i){buf[offset+i]=(value&0xff<<8*(littleEndian?i:1-i))>>>(littleEndian?i:1-i)*8;}}Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;}else{objectWriteUInt16(this,value,offset,true);}return offset+2;};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value&0xff;}else{objectWriteUInt16(this,value,offset,false);}return offset+2;};function objectWriteUInt32(buf,value,offset,littleEndian){if(value<0)value=0xffffffff+value+1;for(var i=0,j=Math.min(buf.length-offset,4);i<j;++i){buf[offset+i]=value>>>(littleEndian?i:3-i)*8&0xff;}}Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=value&0xff;}else{objectWriteUInt32(this,value,offset,true);}return offset+4;};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;}else{objectWriteUInt32(this,value,offset,false);}return offset+4;};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=0;var mul=1;var sub=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i-1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=byteLength-1;var mul=1;var sub=0;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i+1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);if(value<0)value=0xff+value+1;this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;}else{objectWriteUInt16(this,value,offset,true);}return offset+2;};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value&0xff;}else{objectWriteUInt16(this,value,offset,false);}return offset+2;};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24;}else{objectWriteUInt32(this,value,offset,true);}return offset+4;};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value<0)value=0xffffffff+value+1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;}else{objectWriteUInt32(this,value,offset,false);}return offset+4;};function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('Index out of range');if(offset<0)throw new RangeError('Index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4;}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8;}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);};// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!start)start=0;if(!end&&end!==0)end=this.length;if(targetStart>=target.length)targetStart=target.length;if(!targetStart)targetStart=0;if(end>0&&end<start)end=start;// Copy 0 bytes; we're done
if(end===start)return 0;if(target.length===0||this.length===0)return 0;// Fatal error conditions
if(targetStart<0){throw new RangeError('targetStart out of bounds');}if(start<0||start>=this.length)throw new RangeError('sourceStart out of bounds');if(end<0)throw new RangeError('sourceEnd out of bounds');// Are we oob?
if(end>this.length)end=this.length;if(target.length-targetStart<end-start){end=target.length-targetStart+start;}var len=end-start;var i;if(this===target&&start<targetStart&&targetStart<end){// descending copy from end
for(i=len-1;i>=0;--i){target[i+targetStart]=this[i+start];}}else if(len<1000||!Buffer.TYPED_ARRAY_SUPPORT){// ascending copy from start
for(i=0;i<len;++i){target[i+targetStart]=this[i+start];}}else{Uint8Array.prototype.set.call(target,this.subarray(start,start+len),targetStart);}return len;};// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill=function fill(val,start,end,encoding){// Handle string cases:
if(typeof val==='string'){if(typeof start==='string'){encoding=start;start=0;end=this.length;}else if(typeof end==='string'){encoding=end;end=this.length;}if(val.length===1){var code=val.charCodeAt(0);if(code<256){val=code;}}if(encoding!==undefined&&typeof encoding!=='string'){throw new TypeError('encoding must be a string');}if(typeof encoding==='string'&&!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding);}}else if(typeof val==='number'){val=val&255;}// Invalid ranges are not set to a default, so can range check early.
if(start<0||this.length<start||this.length<end){throw new RangeError('Out of range index');}if(end<=start){return this;}start=start>>>0;end=end===undefined?this.length:end>>>0;if(!val)val=0;var i;if(typeof val==='number'){for(i=start;i<end;++i){this[i]=val;}}else{var bytes=Buffer.isBuffer(val)?val:utf8ToBytes(new Buffer(val,encoding).toString());var len=bytes.length;for(i=0;i<end-start;++i){this[i+start]=bytes[i%len];}}return this;};// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;function base64clean(str){// Node strips out invalid characters like \n and \t from the string, base64-js does not
str=stringtrim(str).replace(INVALID_BASE64_RE,'');// Node converts strings with length < 2 to ''
if(str.length<2)return'';// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
while(str.length%4!==0){str=str+'=';}return str;}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,'');}function toHex(n){if(n<16)return'0'+n.toString(16);return n.toString(16);}function utf8ToBytes(string,units){units=units||Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];for(var i=0;i<length;++i){codePoint=string.charCodeAt(i);// is surrogate component
if(codePoint>0xD7FF&&codePoint<0xE000){// last char was a lead
if(!leadSurrogate){// no lead yet
if(codePoint>0xDBFF){// unexpected trail
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}else if(i+1===length){// unpaired lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}// valid lead
leadSurrogate=codePoint;continue;}// 2 leads in a row
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);leadSurrogate=codePoint;continue;}// valid surrogate pair
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000;}else if(leadSurrogate){// valid bmp char, but last char was a lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);}leadSurrogate=null;// encode utf8
if(codePoint<0x80){if((units-=1)<0)break;bytes.push(codePoint);}else if(codePoint<0x800){if((units-=2)<0)break;bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80);}else if(codePoint<0x10000){if((units-=3)<0)break;bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else if(codePoint<0x110000){if((units-=4)<0)break;bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else{throw new Error('Invalid code point');}}return bytes;}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;++i){// Node's code seems to be doing this and not & 0x7F..
byteArray.push(str.charCodeAt(i)&0xFF);}return byteArray;}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;++i){if((units-=2)<0)break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(base64clean(str));}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i];}return i;}function isnan(val){return val!==val;// eslint-disable-line no-self-compare
}/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(80));/***/},/* 21 *//***/function(module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined;}module.exports=EventEmitter;// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners=10;// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError('n must be a positive number');this._maxListeners=n;return this;};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};// If there is no 'error' event listener then throw.
if(type==='error'){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error('Uncaught, unspecified "error" event. ('+er+')');err.context=er;throw err;}}}handler=this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){// fast cases
case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;// slower
default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args);}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++){listeners[i].apply(this,args);}}return true;};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events)this._events={};// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(this._events.newListener)this.emit('newListener',type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])// Optimize the case of one listener. Don't need the extra array object.
this._events[type]=listener;else if(isObject(this._events[type]))// If we've already got an array, just append.
this._events[type].push(listener);else// Adding the second element, need to change to array.
this._events[type]=[this._events[type],listener];// Check for listener leak
if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners;}else{m=EventEmitter.defaultMaxListeners;}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error('(node) warning: possible EventEmitter memory '+'leak detected. %d listeners added. '+'Use emitter.setMaxListeners() to increase limit.',this._events[type].length);if(typeof console.trace==='function'){// not supported in IE 10
console.trace();}}}return this;};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError('listener must be a function');var fired=false;function g(){this.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments);}}g.listener=listener;this.on(type,g);return this;};// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit('removeListener',type,listener);}else if(isObject(list)){for(i=length;i-->0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break;}}if(position<0)return this;if(list.length===1){list.length=0;delete this._events[type];}else{list.splice(position,1);}if(this._events.removeListener)this.emit('removeListener',type,listener);}return this;};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;// not listening for removeListener, no need to emit
if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[type])delete this._events[type];return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){for(key in this._events){if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events={};return this;}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners);}else if(listeners){// LIFO order
while(listeners.length){this.removeListener(type,listeners[listeners.length-1]);}}delete this._events[type];return this;};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret;};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length;}return 0;};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type);};function isFunction(arg){return typeof arg==='function';}function isNumber(arg){return typeof arg==='number';}function isObject(arg){return(typeof arg==='undefined'?'undefined':_typeof(arg))==='object'&&arg!==null;}function isUndefined(arg){return arg===void 0;}/***/},/* 22 *//***/function(module,exports,__webpack_require__){"use strict";module.exports={2:'need dictionary',/* Z_NEED_DICT       2  */1:'stream end',/* Z_STREAM_END      1  */0:'',/* Z_OK              0  */'-1':'file error',/* Z_ERRNO         (-1) */'-2':'stream error',/* Z_STREAM_ERROR  (-2) */'-3':'data error',/* Z_DATA_ERROR    (-3) */'-4':'insufficient memory',/* Z_MEM_ERROR     (-4) */'-5':'buffer error',/* Z_BUF_ERROR     (-5) */'-6':'incompatible version'/* Z_VERSION_ERROR (-6) */};/***/},/* 23 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts,allowAboveRoot){// if the path tries to go above the root, `up` ends up > 0
var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==='.'){parts.splice(i,1);}else if(last==='..'){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}// if the path is allowed to go above the root, restore leading ..s
if(allowAboveRoot){for(;up--;up){parts.unshift('..');}}return parts;}// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var splitPath=function splitPath(filename){return splitPathRe.exec(filename).slice(1);};// path.resolve([from ...], to)
// posix version
exports.resolve=function(){var resolvedPath='',resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();// Skip empty and invalid entries
if(typeof path!=='string'){throw new TypeError('Arguments to path.resolve must be strings');}else if(!path){continue;}resolvedPath=path+'/'+resolvedPath;resolvedAbsolute=path.charAt(0)==='/';}// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)
// Normalize the path
resolvedPath=normalizeArray(filter(resolvedPath.split('/'),function(p){return!!p;}),!resolvedAbsolute).join('/');return(resolvedAbsolute?'/':'')+resolvedPath||'.';};// path.normalize(path)
// posix version
exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==='/';// Normalize the path
path=normalizeArray(filter(path.split('/'),function(p){return!!p;}),!isAbsolute).join('/');if(!path&&!isAbsolute){path='.';}if(path&&trailingSlash){path+='/';}return(isAbsolute?'/':'')+path;};// posix version
exports.isAbsolute=function(path){return path.charAt(0)==='/';};// posix version
exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=='string'){throw new TypeError('Arguments to path.join must be strings');}return p;}).join('/'));};// path.relative(from, to)
// posix version
exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=='')break;}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=='')break;}if(start>end)return[];return arr.slice(start,end-start+1);}var fromParts=trim(from.split('/'));var toParts=trim(to.split('/'));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break;}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push('..');}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join('/');};exports.sep='/';exports.delimiter=':';exports.dirname=function(path){var result=splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){// No dirname whatsoever
return'.';}if(dir){// It has a dirname, strip trailing slash
dir=dir.substr(0,dir.length-1);}return root+dir;};exports.basename=function(path,ext){var f=splitPath(path)[2];// TODO: make this comparison case-insensitive on windows?
if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}return f;};exports.extname=function(path){return splitPath(path)[3];};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res;}// String.prototype.substr - negative index don't work in IE8
var substr='ab'.substr(-1)==='b'?function(str,start,len){return str.substr(start,len);}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len);};/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(24));/***/},/* 24 *//***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 25 *//***/function(module,exports,__webpack_require__){/**
 * Root reference for iframes.
 */var root;if(typeof window!=='undefined'){// Browser window
root=window;}else if(typeof self!=='undefined'){// Web Worker
root=self;}else{// Other environments
console.warn("Using browser-only version of superagent in non-browser environment");root=this;}var Emitter=__webpack_require__(64);var RequestBase=__webpack_require__(77);var isObject=__webpack_require__(26);var isFunction=__webpack_require__(76);var ResponseBase=__webpack_require__(78);/**
 * Noop.
 */function noop(){};/**
 * Expose `request`.
 */var request=exports=module.exports=function(method,url){// callback
if('function'==typeof url){return new exports.Request('GET',method).end(url);}// url first
if(1==arguments.length){return new exports.Request('GET',method);}return new exports.Request(method,url);};exports.Request=Request;/**
 * Determine XHR.
 */request.getXHR=function(){if(root.XMLHttpRequest&&(!root.location||'file:'!=root.location.protocol||!root.ActiveXObject)){return new XMLHttpRequest();}else{try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}try{return new ActiveXObject('Msxml2.XMLHTTP.6.0');}catch(e){}try{return new ActiveXObject('Msxml2.XMLHTTP.3.0');}catch(e){}try{return new ActiveXObject('Msxml2.XMLHTTP');}catch(e){}}throw Error("Browser-only verison of superagent could not find XHR");};/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */var trim=''.trim?function(s){return s.trim();}:function(s){return s.replace(/(^\s*|\s*$)/g,'');};/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */function serialize(obj){if(!isObject(obj))return obj;var pairs=[];for(var key in obj){pushEncodedKeyValuePair(pairs,key,obj[key]);}return pairs.join('&');}/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */function pushEncodedKeyValuePair(pairs,key,val){if(val!=null){if(Array.isArray(val)){val.forEach(function(v){pushEncodedKeyValuePair(pairs,key,v);});}else if(isObject(val)){for(var subkey in val){pushEncodedKeyValuePair(pairs,key+'['+subkey+']',val[subkey]);}}else{pairs.push(encodeURIComponent(key)+'='+encodeURIComponent(val));}}else if(val===null){pairs.push(encodeURIComponent(key));}}/**
 * Expose serialization method.
 */request.serializeObject=serialize;/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */function parseString(str){var obj={};var pairs=str.split('&');var pair;var pos;for(var i=0,len=pairs.length;i<len;++i){pair=pairs[i];pos=pair.indexOf('=');if(pos==-1){obj[decodeURIComponent(pair)]='';}else{obj[decodeURIComponent(pair.slice(0,pos))]=decodeURIComponent(pair.slice(pos+1));}}return obj;}/**
 * Expose parser.
 */request.parseString=parseString;/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */request.types={html:'text/html',json:'application/json',xml:'application/xml',urlencoded:'application/x-www-form-urlencoded','form':'application/x-www-form-urlencoded','form-data':'application/x-www-form-urlencoded'};/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */request.serialize={'application/x-www-form-urlencoded':serialize,'application/json':JSON.stringify};/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */request.parse={'application/x-www-form-urlencoded':parseString,'application/json':JSON.parse};/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */function parseHeader(str){var lines=str.split(/\r?\n/);var fields={};var index;var line;var field;var val;lines.pop();// trailing CRLF
for(var i=0,len=lines.length;i<len;++i){line=lines[i];index=line.indexOf(':');field=line.slice(0,index).toLowerCase();val=trim(line.slice(index+1));fields[field]=val;}return fields;}/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */function isJSON(mime){return /[\/+]json\b/.test(mime);}/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */function Response(req,options){options=options||{};this.req=req;this.xhr=this.req.xhr;// responseText is accessible only if responseType is '' or 'text' and on older browsers
this.text=this.req.method!='HEAD'&&(this.xhr.responseType===''||this.xhr.responseType==='text')||typeof this.xhr.responseType==='undefined'?this.xhr.responseText:null;this.statusText=this.req.xhr.statusText;var status=this.xhr.status;// handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
if(status===1223){status=204;}this._setStatusProperties(status);this.header=this.headers=parseHeader(this.xhr.getAllResponseHeaders());// getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
// getResponseHeader still works. so we get content-type even if getting
// other headers fails.
this.header['content-type']=this.xhr.getResponseHeader('content-type');this._setHeaderProperties(this.header);if(null===this.text&&req._responseType){this.body=this.xhr.response;}else{this.body=this.req.method!='HEAD'?this._parseBody(this.text?this.text:this.xhr.response):null;}}ResponseBase(Response.prototype);/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */Response.prototype._parseBody=function(str){var parse=request.parse[this.type];if(this.req._parser){return this.req._parser(this,str);}if(!parse&&isJSON(this.type)){parse=request.parse['application/json'];}return parse&&str&&(str.length||str instanceof Object)?parse(str):null;};/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */Response.prototype.toError=function(){var req=this.req;var method=req.method;var url=req.url;var msg='cannot '+method+' '+url+' ('+this.status+')';var err=new Error(msg);err.status=this.status;err.method=method;err.url=url;return err;};/**
 * Expose `Response`.
 */request.Response=Response;/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */function Request(method,url){var self=this;this._query=this._query||[];this.method=method;this.url=url;this.header={};// preserves header name case
this._header={};// coerces header names to lowercase
this.on('end',function(){var err=null;var res=null;try{res=new Response(self);}catch(e){err=new Error('Parser is unable to parse the response');err.parse=true;err.original=e;// issue #675: return the raw response if the response parsing fails
if(self.xhr){// ie9 doesn't have 'response' property
err.rawResponse=typeof self.xhr.responseType=='undefined'?self.xhr.responseText:self.xhr.response;// issue #876: return the http status code if the response parsing fails
err.status=self.xhr.status?self.xhr.status:null;err.statusCode=err.status;// backwards-compat only
}else{err.rawResponse=null;err.status=null;}return self.callback(err);}self.emit('response',res);var new_err;try{if(!self._isResponseOK(res)){new_err=new Error(res.statusText||'Unsuccessful HTTP response');new_err.original=err;new_err.response=res;new_err.status=res.status;}}catch(e){new_err=e;// #985 touching res may cause INVALID_STATE_ERR on old Android
}// #1000 don't catch errors from the callback to avoid double calling it
if(new_err){self.callback(new_err,res);}else{self.callback(null,res);}});}/**
 * Mixin `Emitter` and `RequestBase`.
 */Emitter(Request.prototype);RequestBase(Request.prototype);/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */Request.prototype.type=function(type){this.set('Content-Type',request.types[type]||type);return this;};/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */Request.prototype.accept=function(type){this.set('Accept',request.types[type]||type);return this;};/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */Request.prototype.auth=function(user,pass,options){if(!options){options={type:'function'===typeof btoa?'basic':'auto'};}switch(options.type){case'basic':this.set('Authorization','Basic '+btoa(user+':'+pass));break;case'auto':this.username=user;this.password=pass;break;}return this;};/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/Request.prototype.query=function(val){if('string'!=typeof val)val=serialize(val);if(val)this._query.push(val);return this;};/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */Request.prototype.attach=function(field,file,options){if(this._data){throw Error("superagent can't mix .send() and .attach()");}this._getFormData().append(field,file,options||file.name);return this;};Request.prototype._getFormData=function(){if(!this._formData){this._formData=new root.FormData();}return this._formData;};/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */Request.prototype.callback=function(err,res){var fn=this._callback;this.clearTimeout();if(err){this.emit('error',err);}fn(err,res);};/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */Request.prototype.crossDomainError=function(){var err=new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');err.crossDomain=true;err.status=this.status;err.method=this.method;err.url=this.url;this.callback(err);};// This only warns, because the request is still likely to work
Request.prototype.buffer=Request.prototype.ca=Request.prototype.agent=function(){console.warn("This is not supported in browser version of superagent");return this;};// This throws, because it can't send/receive data as expected
Request.prototype.pipe=Request.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent");};/**
 * Compose querystring to append to req.url
 *
 * @api private
 */Request.prototype._appendQueryString=function(){var query=this._query.join('&');if(query){this.url+=(this.url.indexOf('?')>=0?'&':'?')+query;}if(this._sort){var index=this.url.indexOf('?');if(index>=0){var queryArr=this.url.substring(index+1).split('&');if(isFunction(this._sort)){queryArr.sort(this._sort);}else{queryArr.sort();}this.url=this.url.substring(0,index)+'?'+queryArr.join('&');}}};/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */Request.prototype._isHost=function _isHost(obj){// Native objects stringify to [object File], [object Blob], [object FormData], etc.
return obj&&'object'===(typeof obj==='undefined'?'undefined':_typeof(obj))&&!Array.isArray(obj)&&Object.prototype.toString.call(obj)!=='[object Object]';};/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */Request.prototype.end=function(fn){var self=this;var xhr=this.xhr=request.getXHR();var data=this._formData||this._data;if(this._endCalled){console.warn("Warning: .end() was called twice. This is not supported in superagent");}this._endCalled=true;// store callback
this._callback=fn||noop;// state change
xhr.onreadystatechange=function(){var readyState=xhr.readyState;if(readyState>=2&&self._responseTimeoutTimer){clearTimeout(self._responseTimeoutTimer);}if(4!=readyState){return;}// In IE9, reads to any property (e.g. status) off of an aborted XHR will
// result in the error "Could not complete the operation due to error c00c023f"
var status;try{status=xhr.status;}catch(e){status=0;}if(!status){if(self.timedout||self._aborted)return;return self.crossDomainError();}self.emit('end');};// progress
var handleProgress=function handleProgress(direction,e){if(e.total>0){e.percent=e.loaded/e.total*100;}e.direction=direction;self.emit('progress',e);};if(this.hasListeners('progress')){try{xhr.onprogress=handleProgress.bind(null,'download');if(xhr.upload){xhr.upload.onprogress=handleProgress.bind(null,'upload');}}catch(e){// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
// Reported here:
// https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
}}// querystring
this._appendQueryString();this._setTimeouts();// initiate request
if(this.username&&this.password){xhr.open(this.method,this.url,true,this.username,this.password);}else{xhr.open(this.method,this.url,true);}// CORS
if(this._withCredentials)xhr.withCredentials=true;// body
if(!this._formData&&'GET'!=this.method&&'HEAD'!=this.method&&'string'!=typeof data&&!this._isHost(data)){// serialize stuff
var contentType=this._header['content-type'];var serialize=this._serializer||request.serialize[contentType?contentType.split(';')[0]:''];if(!serialize&&isJSON(contentType)){serialize=request.serialize['application/json'];}if(serialize)data=serialize(data);}// set header fields
for(var field in this.header){if(null==this.header[field])continue;xhr.setRequestHeader(field,this.header[field]);}if(this._responseType){xhr.responseType=this._responseType;}// send stuff
this.emit('request',this);// IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
// We need null here if data is undefined
xhr.send(typeof data!=='undefined'?data:null);return this;};/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */request.get=function(url,data,fn){var req=request('GET',url);if('function'==typeof data)fn=data,data=null;if(data)req.query(data);if(fn)req.end(fn);return req;};/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */request.head=function(url,data,fn){var req=request('HEAD',url);if('function'==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req;};/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */request.options=function(url,data,fn){var req=request('OPTIONS',url);if('function'==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req;};/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */function del(url,fn){var req=request('DELETE',url);if(fn)req.end(fn);return req;};request['del']=del;request['delete']=del;/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */request.patch=function(url,data,fn){var req=request('PATCH',url);if('function'==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req;};/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */request.post=function(url,data,fn){var req=request('POST',url);if('function'==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req;};/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */request.put=function(url,data,fn){var req=request('PUT',url);if('function'==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req;};/***/},/* 26 *//***/function(module,exports){/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */function isObject(obj){return null!==obj&&'object'===(typeof obj==='undefined'?'undefined':_typeof(obj));}module.exports=isObject;/***/},/* 27 *//***/function(module,exports){module.exports={"name":"discord.js","version":"11.0.0","description":"A powerful library for interacting with the Discord API","main":"./src/index","types":"./typings/index.d.ts","scripts":{"test":"eslint src && docgen --source src --custom docs/index.yml","docs":"docgen --source src --custom docs/index.yml --output docs/docs.json","test-docs":"docgen --source src --custom docs","lint":"eslint src","web-dist":"node ./node_modules/parallel-webpack/bin/run.js"},"repository":{"type":"git","url":"git+https://github.com/hydrabolt/discord.js.git"},"keywords":["discord","api","bot","client","node","discordapp"],"author":"Amish Shah <amishshah.2k@gmail.com>","license":"Apache-2.0","bugs":{"url":"https://github.com/hydrabolt/discord.js/issues"},"homepage":"https://github.com/hydrabolt/discord.js#readme","runkitExampleFilename":"./docs/examples/ping.js","dependencies":{"@types/node":"^6.0.0","pako":"^1.0.0","superagent":"^3.3.0","tweetnacl":"^0.14.0","ws":"^1.1.0"},"peerDependencies":{"erlpack":"hammerandchisel/erlpack#master","node-opus":"^0.2.0","opusscript":"^0.0.1","uws":"^0.12.0"},"devDependencies":{"discord.js-docgen":"hydrabolt/discord.js-docgen#master","eslint":"^3.12.0","parallel-webpack":"^1.6.0","uglify-js":"mishoo/UglifyJS2#harmony","webpack":"2.2.0-rc.3"},"engines":{"node":">=6.0.0"},"browser":{"ws":false,"uws":false,"erlpack":false,"opusscript":false,"node-opus":false,"tweet-nacl":false,"src/sharding/Shard.js":false,"src/sharding/ShardClientUtil.js":false,"src/sharding/ShardingManager.js":false,"src/client/voice/dispatcher/StreamDispatcher.js":false,"src/client/voice/opus/BaseOpusEngine.js":false,"src/client/voice/opus/NodeOpusEngine.js":false,"src/client/voice/opus/OpusEngineList.js":false,"src/client/voice/opus/OpusScriptEngine.js":false,"src/client/voice/pcm/ConverterEngine.js":false,"src/client/voice/pcm/ConverterEngineList.js":false,"src/client/voice/pcm/FfmpegConverterEngine.js":false,"src/client/voice/player/AudioPlayer.js":false,"src/client/voice/player/BasePlayer.js":false,"src/client/voice/player/DefaultPlayer.js":false,"src/client/voice/receiver/VoiceReadable.js":false,"src/client/voice/receiver/VoiceReceiver.js":false,"src/client/voice/util/SecretKey.js":false,"src/client/voice/ClientVoiceManager.js":false,"src/client/voice/VoiceConnection.js":false,"src/client/voice/VoiceUDPClient.js":false,"src/client/voice/VoiceWebSocket.js":false}};/***/},/* 28 *//***/function(module,exports,__webpack_require__){var User=__webpack_require__(6);var OAuth2Application=__webpack_require__(37);/**
 * Represents the client's OAuth2 Application
 * @extends {OAuth2Application}
 */var ClientOAuth2Application=function(_OAuth2Application){_inherits(ClientOAuth2Application,_OAuth2Application);function ClientOAuth2Application(){_classCallCheck(this,ClientOAuth2Application);return _possibleConstructorReturn(this,_OAuth2Application.apply(this,arguments));}ClientOAuth2Application.prototype.setup=function setup(data){_OAuth2Application.prototype.setup.call(this,data);/**
     * The app's flags
     * @type {number}
     */this.flags=data.flags;/**
     * The app's owner
     * @type {User}
     */this.owner=new User(this.client,data.owner);};return ClientOAuth2Application;}(OAuth2Application);module.exports=ClientOAuth2Application;/***/},/* 29 *//***/function(module,exports,__webpack_require__){var User=__webpack_require__(6);var Collection=__webpack_require__(3);/**
 * Represents the logged in client's Discord user
 * @extends {User}
 */var ClientUser=function(_User){_inherits(ClientUser,_User);function ClientUser(){_classCallCheck(this,ClientUser);return _possibleConstructorReturn(this,_User.apply(this,arguments));}ClientUser.prototype.setup=function setup(data){_User.prototype.setup.call(this,data);/**
     * Whether or not this account has been verified
     * @type {boolean}
     */this.verified=data.verified;/**
     * The email of this account
     * @type {string}
     */this.email=data.email;this.localPresence={};this._typing=new Map();/**
     * A Collection of friends for the logged in user.
     * <warn>This is only filled when using a user account.</warn>
     * @type {Collection<string, User>}
     */this.friends=new Collection();/**
     * A Collection of blocked users for the logged in user.
     * <warn>This is only filled when using a user account.</warn>
     * @type {Collection<string, User>}
     */this.blocked=new Collection();/**
     * A Collection of notes for the logged in user.
     * <warn>This is only filled when using a user account.</warn>
     * @type {Collection<string, string>}
     */this.notes=new Collection();};ClientUser.prototype.edit=function edit(data){return this.client.rest.methods.updateCurrentUser(data);};/**
   * Set the username of the logged in Client.
   * <info>Changing usernames in Discord is heavily rate limited, with only 2 requests
   * every hour. Use this sparingly!</info>
   * @param {string} username The new username
   * @param {string} [password] Current password (only for user accounts)
   * @returns {Promise<ClientUser>}
   * @example
   * // set username
   * client.user.setUsername('discordjs')
   *  .then(user => console.log(`My new username is ${user.username}`))
   *  .catch(console.error);
   */ClientUser.prototype.setUsername=function setUsername(username,password){return this.client.rest.methods.updateCurrentUser({username:username},password);};/**
   * Changes the email for the client user's account.
   * <warn>This is only available when using a user account.</warn>
   * @param {string} email New email to change to
   * @param {string} password Current password
   * @returns {Promise<ClientUser>}
   * @example
   * // set email
   * client.user.setEmail('bob@gmail.com', 'some amazing password 123')
   *  .then(user => console.log(`My new email is ${user.email}`))
   *  .catch(console.error);
   */ClientUser.prototype.setEmail=function setEmail(email,password){return this.client.rest.methods.updateCurrentUser({email:email},password);};/**
   * Changes the password for the client user's account.
   * <warn>This is only available when using a user account.</warn>
   * @param {string} newPassword New password to change to
   * @param {string} oldPassword Current password
   * @returns {Promise<ClientUser>}
   * @example
   * // set password
   * client.user.setPassword('some new amazing password 456', 'some amazing password 123')
   *  .then(user => console.log('New password set!'))
   *  .catch(console.error);
   */ClientUser.prototype.setPassword=function setPassword(newPassword,oldPassword){return this.client.rest.methods.updateCurrentUser({password:newPassword},oldPassword);};/**
   * Set the avatar of the logged in Client.
   * @param {BufferResolvable|Base64Resolvable} avatar The new avatar
   * @returns {Promise<ClientUser>}
   * @example
   * // set avatar
   * client.user.setAvatar('./avatar.png')
   *  .then(user => console.log(`New avatar set!`))
   *  .catch(console.error);
   */ClientUser.prototype.setAvatar=function setAvatar(avatar){var _this29=this;if(avatar.startsWith('data:')){return this.client.rest.methods.updateCurrentUser({avatar:avatar});}else{return this.client.resolver.resolveBuffer(avatar).then(function(data){return _this29.client.rest.methods.updateCurrentUser({avatar:data});});}};/**
   * Data resembling a raw Discord presence
   * @typedef {Object} PresenceData
   * @property {PresenceStatus} [status] Status of the user
   * @property {boolean} [afk] Whether the user is AFK
   * @property {Object} [game] Game the user is playing
   * @property {string} [game.name] Name of the game
   * @property {string} [game.url] Twitch stream URL
   *//**
   * Sets the full presence of the client user.
   * @param {PresenceData} data Data for the presence
   * @returns {Promise<ClientUser>}
   */ClientUser.prototype.setPresence=function setPresence(data){var _this30=this;// {"op":3,"d":{"status":"dnd","since":0,"game":null,"afk":false}}
return new Promise(function(resolve){var status=_this30.localPresence.status||_this30.presence.status;var game=_this30.localPresence.game;var afk=_this30.localPresence.afk||_this30.presence.afk;if(!game&&_this30.presence.game){game={name:_this30.presence.game.name,type:_this30.presence.game.type,url:_this30.presence.game.url};}if(data.status){if(typeof data.status!=='string')throw new TypeError('Status must be a string');status=data.status;}if(data.game){game=data.game;if(game.url)game.type=1;}if(typeof data.afk!=='undefined')afk=data.afk;afk=Boolean(afk);_this30.localPresence={status:status,game:game,afk:afk};_this30.localPresence.since=0;_this30.localPresence.game=_this30.localPresence.game||null;_this30.client.ws.send({op:3,d:_this30.localPresence});_this30.client._setPresence(_this30.id,_this30.localPresence);resolve(_this30);});};/**
   * A user's status. Must be one of:
   * - `online`
   * - `idle`
   * - `invisible`
   * - `dnd` (do not disturb)
   * @typedef {string} PresenceStatus
   *//**
   * Sets the status of the client user.
   * @param {PresenceStatus} status Status to change to
   * @returns {Promise<ClientUser>}
   */ClientUser.prototype.setStatus=function setStatus(status){return this.setPresence({status:status});};/**
   * Sets the game the client user is playing.
   * @param {string} game Game being played
   * @param {string} [streamingURL] Twitch stream URL
   * @returns {Promise<ClientUser>}
   */ClientUser.prototype.setGame=function setGame(game,streamingURL){return this.setPresence({game:{name:game,url:streamingURL}});};/**
   * Sets/removes the AFK flag for the client user.
   * @param {boolean} afk Whether or not the user is AFK
   * @returns {Promise<ClientUser>}
   */ClientUser.prototype.setAFK=function setAFK(afk){return this.setPresence({afk:afk});};/**
   * Fetches messages that mentioned the client's user
   * @param {Object} [options] Options for the fetch
   * @param {number} [options.limit=25] Maximum number of mentions to retrieve
   * @param {boolean} [options.roles=true] Whether to include role mentions
   * @param {boolean} [options.everyone=true] Whether to include everyone/here mentions
   * @param {Guild|string} [options.guild] Limit the search to a specific guild
   * @returns {Promise<Message[]>}
   */ClientUser.prototype.fetchMentions=function fetchMentions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{limit:25,roles:true,everyone:true,guild:null};return this.client.rest.methods.fetchMentions(options);};/**
   * Send a friend request
   * <warn>This is only available when using a user account.</warn>
   * @param {UserResolvable} user The user to send the friend request to.
   * @returns {Promise<User>} The user the friend request was sent to.
   */ClientUser.prototype.addFriend=function addFriend(user){user=this.client.resolver.resolveUser(user);return this.client.rest.methods.addFriend(user);};/**
   * Remove a friend
   * <warn>This is only available when using a user account.</warn>
   * @param {UserResolvable} user The user to remove from your friends
   * @returns {Promise<User>} The user that was removed
   */ClientUser.prototype.removeFriend=function removeFriend(user){user=this.client.resolver.resolveUser(user);return this.client.rest.methods.removeFriend(user);};/**
   * Creates a guild
   * <warn>This is only available when using a user account.</warn>
   * @param {string} name The name of the guild
   * @param {string} region The region for the server
   * @param {BufferResolvable|Base64Resolvable} [icon=null] The icon for the guild
   * @returns {Promise<Guild>} The guild that was created
   */ClientUser.prototype.createGuild=function createGuild(name,region){var _this31=this;var icon=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!icon)return this.client.rest.methods.createGuild({name:name,icon:icon,region:region});if(icon.startsWith('data:')){return this.client.rest.methods.createGuild({name:name,icon:icon,region:region});}else{return this.client.resolver.resolveBuffer(icon).then(function(data){return _this31.client.rest.methods.createGuild({name:name,icon:data,region:region});});}};return ClientUser;}(User);module.exports=ClientUser;/***/},/* 30 *//***/function(module,exports,__webpack_require__){var Channel=__webpack_require__(9);var TextBasedChannel=__webpack_require__(12);var Collection=__webpack_require__(3);/**
 * Represents a direct message channel between two users.
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */var DMChannel=function(_Channel2){_inherits(DMChannel,_Channel2);function DMChannel(client,data){_classCallCheck(this,DMChannel);var _this32=_possibleConstructorReturn(this,_Channel2.call(this,client,data));_this32.type='dm';_this32.messages=new Collection();_this32._typing=new Map();return _this32;}DMChannel.prototype.setup=function setup(data){_Channel2.prototype.setup.call(this,data);/**
     * The recipient on the other end of the DM
     * @type {User}
     */this.recipient=this.client.dataManager.newUser(data.recipients[0]);this.lastMessageID=data.last_message_id;};/**
   * When concatenated with a string, this automatically concatenates the recipient's mention instead of the
   * DM channel object.
   * @returns {string}
   */DMChannel.prototype.toString=function toString(){return this.recipient.toString();};// These are here only for documentation purposes - they are implemented by TextBasedChannel
DMChannel.prototype.send=function send(){return;};DMChannel.prototype.sendMessage=function sendMessage(){return;};DMChannel.prototype.sendEmbed=function sendEmbed(){return;};DMChannel.prototype.sendFile=function sendFile(){return;};DMChannel.prototype.sendCode=function sendCode(){return;};DMChannel.prototype.fetchMessage=function fetchMessage(){return;};DMChannel.prototype.fetchMessages=function fetchMessages(){return;};DMChannel.prototype.fetchPinnedMessages=function fetchPinnedMessages(){return;};DMChannel.prototype.startTyping=function startTyping(){return;};DMChannel.prototype.stopTyping=function stopTyping(){return;};DMChannel.prototype.createCollector=function createCollector(){return;};DMChannel.prototype.awaitMessages=function awaitMessages(){return;};DMChannel.prototype.bulkDelete=function bulkDelete(){return;};DMChannel.prototype._cacheMessage=function _cacheMessage(){return;};_createClass(DMChannel,[{key:'typing',get:function get(){return;}},{key:'typingCount',get:function get(){return;}}]);return DMChannel;}(Channel);TextBasedChannel.applyToClass(DMChannel,true);module.exports=DMChannel;/***/},/* 31 *//***/function(module,exports,__webpack_require__){var Channel=__webpack_require__(9);var TextBasedChannel=__webpack_require__(12);var Collection=__webpack_require__(3);/*
{ type: 3,
  recipients:
   [ { username: 'Charlie',
       id: '123',
       discriminator: '6631',
       avatar: '123' },
     { username: 'Ben',
       id: '123',
       discriminator: '2055',
       avatar: '123' },
     { username: 'Adam',
       id: '123',
       discriminator: '2406',
       avatar: '123' } ],
  owner_id: '123',
  name: null,
  last_message_id: '123',
  id: '123',
  icon: null }
*//**
 * Represents a Group DM on Discord
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */var GroupDMChannel=function(_Channel3){_inherits(GroupDMChannel,_Channel3);function GroupDMChannel(client,data){_classCallCheck(this,GroupDMChannel);var _this33=_possibleConstructorReturn(this,_Channel3.call(this,client,data));_this33.type='group';_this33.messages=new Collection();_this33._typing=new Map();return _this33;}GroupDMChannel.prototype.setup=function setup(data){_Channel3.prototype.setup.call(this,data);/**
     * The name of this Group DM, can be null if one isn't set.
     * @type {string}
     */this.name=data.name;/**
     * A hash of the Group DM icon.
     * @type {string}
     */this.icon=data.icon;/**
     * The user ID of this Group DM's owner.
     * @type {string}
     */this.ownerID=data.owner_id;if(!this.recipients){/**
       * A collection of the recipients of this DM, mapped by their ID.
       * @type {Collection<string, User>}
       */this.recipients=new Collection();}if(data.recipients){for(var _iterator48=data.recipients,_isArray48=Array.isArray(_iterator48),_i49=0,_iterator48=_isArray48?_iterator48:_iterator48[Symbol.iterator]();;){var _ref60;if(_isArray48){if(_i49>=_iterator48.length)break;_ref60=_iterator48[_i49++];}else{_i49=_iterator48.next();if(_i49.done)break;_ref60=_i49.value;}var recipient=_ref60;var user=this.client.dataManager.newUser(recipient);this.recipients.set(user.id,user);}}this.lastMessageID=data.last_message_id;};/**
   * The owner of this Group DM.
   * @type {User}
   * @readonly
   *//**
   * Whether this channel equals another channel. It compares all properties, so for most operations
   * it is advisable to just compare `channel.id === channel2.id` as it is much faster and is often
   * what most users need.
   * @param {GroupDMChannel} channel Channel to compare with
   * @returns {boolean}
   */GroupDMChannel.prototype.equals=function equals(channel){var equal=channel&&this.id===channel.id&&this.name===channel.name&&this.icon===channel.icon&&this.ownerID===channel.ownerID;if(equal){return this.recipients.equals(channel.recipients);}return equal;};/**
   * When concatenated with a string, this automatically concatenates the channel's name instead of the Channel object.
   * @returns {string}
   * @example
   * // logs: Hello from My Group DM!
   * console.log(`Hello from ${channel}!`);
   * @example
   * // logs: Hello from My Group DM!
   * console.log(`Hello from ' + channel + '!');
   */GroupDMChannel.prototype.toString=function toString(){return this.name;};// These are here only for documentation purposes - they are implemented by TextBasedChannel
GroupDMChannel.prototype.send=function send(){return;};GroupDMChannel.prototype.sendMessage=function sendMessage(){return;};GroupDMChannel.prototype.sendEmbed=function sendEmbed(){return;};GroupDMChannel.prototype.sendFile=function sendFile(){return;};GroupDMChannel.prototype.sendCode=function sendCode(){return;};GroupDMChannel.prototype.fetchMessage=function fetchMessage(){return;};GroupDMChannel.prototype.fetchMessages=function fetchMessages(){return;};GroupDMChannel.prototype.fetchPinnedMessages=function fetchPinnedMessages(){return;};GroupDMChannel.prototype.startTyping=function startTyping(){return;};GroupDMChannel.prototype.stopTyping=function stopTyping(){return;};GroupDMChannel.prototype.createCollector=function createCollector(){return;};GroupDMChannel.prototype.awaitMessages=function awaitMessages(){return;};GroupDMChannel.prototype.bulkDelete=function bulkDelete(){return;};GroupDMChannel.prototype._cacheMessage=function _cacheMessage(){return;};_createClass(GroupDMChannel,[{key:'owner',get:function get(){return this.client.users.get(this.ownerID);}},{key:'typing',get:function get(){return;}},{key:'typingCount',get:function get(){return;}}]);return GroupDMChannel;}(Channel);TextBasedChannel.applyToClass(GroupDMChannel,true);module.exports=GroupDMChannel;/***/},/* 32 *//***/function(module,exports,__webpack_require__){var PartialGuild=__webpack_require__(38);var PartialGuildChannel=__webpack_require__(39);var Constants=__webpack_require__(0);/*
{ max_age: 86400,
  code: 'CG9A5',
  guild:
   { splash: null,
     id: '123123123',
     icon: '123123123',
     name: 'name' },
  created_at: '2016-08-28T19:07:04.763368+00:00',
  temporary: false,
  uses: 0,
  max_uses: 0,
  inviter:
   { username: '123',
     discriminator: '4204',
     bot: true,
     id: '123123123',
     avatar: '123123123' },
  channel: { type: 0, id: '123123', name: 'heavy-testing' } }
*//**
 * Represents an invitation to a guild channel.
 * <warn>The only guaranteed properties are `code`, `guild` and `channel`. Other properties can be missing.</warn>
 */var Invite=function(){function Invite(client,data){_classCallCheck(this,Invite);/**
     * The client that instantiated the invite
     * @name Invite#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});this.setup(data);}Invite.prototype.setup=function setup(data){/**
     * The guild the invite is for. If this guild is already known, this will be a Guild object. If the guild is
     * unknown, this will be a PartialGuild object.
     * @type {Guild|PartialGuild}
     */this.guild=this.client.guilds.get(data.guild.id)||new PartialGuild(this.client,data.guild);/**
     * The code for this invite
     * @type {string}
     */this.code=data.code;/**
     * Whether or not this invite is temporary
     * @type {boolean}
     */this.temporary=data.temporary;/**
     * The maximum age of the invite, in seconds
     * @type {?number}
     */this.maxAge=data.max_age;/**
     * How many times this invite has been used
     * @type {number}
     */this.uses=data.uses;/**
     * The maximum uses of this invite
     * @type {number}
     */this.maxUses=data.max_uses;if(data.inviter){/**
       * The user who created this invite
       * @type {User}
       */this.inviter=this.client.dataManager.newUser(data.inviter);}/**
     * The channel the invite is for. If this channel is already known, this will be a GuildChannel object.
     * If the channel is unknown, this will be a PartialGuildChannel object.
     * @type {GuildChannel|PartialGuildChannel}
     */this.channel=this.client.channels.get(data.channel.id)||new PartialGuildChannel(this.client,data.channel);/**
     * The timestamp the invite was created at
     * @type {number}
     */this.createdTimestamp=new Date(data.created_at).getTime();};/**
   * The time the invite was created
   * @type {Date}
   * @readonly
   *//**
   * Deletes this invite
   * @returns {Promise<Invite>}
   */Invite.prototype.delete=function _delete(){return this.client.rest.methods.deleteInvite(this);};/**
   * When concatenated with a string, this automatically concatenates the invite's URL instead of the object.
   * @returns {string}
   * @example
   * // logs: Invite: https://discord.gg/A1b2C3
   * console.log(`Invite: ${invite}`);
   */Invite.prototype.toString=function toString(){return this.url;};_createClass(Invite,[{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * The timestamp the invite will expire at
   * @type {number}
   * @readonly
   */},{key:'expiresTimestamp',get:function get(){return this.createdTimestamp+this.maxAge*1000;}/**
   * The time the invite will expire
   * @type {Date}
   * @readonly
   */},{key:'expiresAt',get:function get(){return new Date(this.expiresTimestamp);}/**
   * The URL to the invite
   * @type {string}
   * @readonly
   */},{key:'url',get:function get(){return Constants.Endpoints.inviteLink(this.code);}}]);return Invite;}();module.exports=Invite;/***/},/* 33 *//***/function(module,exports){/**
 * Represents an attachment in a message
 */var MessageAttachment=function(){function MessageAttachment(message,data){_classCallCheck(this,MessageAttachment);/**
     * The Client that instantiated this MessageAttachment.
     * @name MessageAttachment#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:message.client});/**
     * The message this attachment is part of.
     * @type {Message}
     */this.message=message;this.setup(data);}MessageAttachment.prototype.setup=function setup(data){/**
     * The ID of this attachment
     * @type {string}
     */this.id=data.id;/**
     * The file name of this attachment
     * @type {string}
     */this.filename=data.filename;/**
     * The size of this attachment in bytes
     * @type {number}
     */this.filesize=data.size;/**
     * The URL to this attachment
     * @type {string}
     */this.url=data.url;/**
     * The Proxy URL to this attachment
     * @type {string}
     */this.proxyURL=data.proxy_url;/**
     * The height of this attachment (if an image)
     * @type {?number}
     */this.height=data.height;/**
     * The width of this attachment (if an image)
     * @type {?number}
     */this.width=data.width;};return MessageAttachment;}();module.exports=MessageAttachment;/***/},/* 34 *//***/function(module,exports,__webpack_require__){var EventEmitter=__webpack_require__(21).EventEmitter;var Collection=__webpack_require__(3);/**
 * Collects messages based on a specified filter, then emits them.
 * @extends {EventEmitter}
 */var MessageCollector=function(_EventEmitter){_inherits(MessageCollector,_EventEmitter);/**
   * A function that takes a Message object and a MessageCollector and returns a boolean.
   * ```js
   * function(message, collector) {
   *  if (message.content.includes('discord')) {
   *    return true; // passed the filter test
   *  }
   *  return false; // failed the filter test
   * }
   * ```
   * @typedef {Function} CollectorFilterFunction
   *//**
   * An object containing options used to configure a MessageCollector. All properties are optional.
   * @typedef {Object} CollectorOptions
   * @property {number} [time] Duration for the collector in milliseconds
   * @property {number} [max] Maximum number of messages to handle
   * @property {number} [maxMatches] Maximum number of successfully filtered messages to obtain
   *//**
   * @param {Channel} channel The channel to collect messages in
   * @param {CollectorFilterFunction} filter The filter function
   * @param {CollectorOptions} [options] Options for the collector
   */function MessageCollector(channel,filter){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_classCallCheck(this,MessageCollector);/**
     * The channel this collector is operating on
     * @type {Channel}
     */var _this34=_possibleConstructorReturn(this,_EventEmitter.call(this));_this34.channel=channel;/**
     * A function used to filter messages that the collector collects.
     * @type {CollectorFilterFunction}
     */_this34.filter=filter;/**
     * Options for the collecor.
     * @type {CollectorOptions}
     */_this34.options=options;/**
     * Whether this collector has stopped collecting messages.
     * @type {boolean}
     */_this34.ended=false;/**
     * A collection of collected messages, mapped by message ID.
     * @type {Collection<string, Message>}
     */_this34.collected=new Collection();_this34.listener=function(message){return _this34.verify(message);};_this34.channel.client.on('message',_this34.listener);if(options.time)_this34.channel.client.setTimeout(function(){return _this34.stop('time');},options.time);return _this34;}/**
   * Verifies a message against the filter and options
   * @private
   * @param {Message} message The message
   * @returns {boolean}
   */MessageCollector.prototype.verify=function verify(message){if(this.channel?this.channel.id!==message.channel.id:false)return false;if(this.filter(message,this)){this.collected.set(message.id,message);/**
       * Emitted whenever the collector receives a message that passes the filter test.
       * @param {Message} message The received message
       * @param {MessageCollector} collector The collector the message passed through
       * @event MessageCollector#message
       */this.emit('message',message,this);if(this.collected.size>=this.options.maxMatches)this.stop('matchesLimit');else if(this.options.max&&this.collected.size===this.options.max)this.stop('limit');return true;}return false;};/**
   * Returns a promise that resolves when a valid message is sent. Rejects
   * with collected messages if the Collector ends before receiving a message.
   * @type {Promise<Message>}
   * @readonly
   *//**
   * Stops the collector and emits `end`.
   * @param {string} [reason='user'] An optional reason for stopping the collector
   */MessageCollector.prototype.stop=function stop(){var reason=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'user';if(this.ended)return;this.ended=true;this.channel.client.removeListener('message',this.listener);/**
     * Emitted when the Collector stops collecting.
     * @param {Collection<string, Message>} collection A collection of messages collected
     * during the lifetime of the collector, mapped by the ID of the messages.
     * @param {string} reason The reason for the end of the collector. If it ended because it reached the specified time
     * limit, this would be `time`. If you invoke `.stop()` without specifying a reason, this would be `user`. If it
     * ended because it reached its message limit, it will be `limit`.
     * @event MessageCollector#end
     */this.emit('end',this.collected,reason);};_createClass(MessageCollector,[{key:'next',get:function get(){var _this35=this;return new Promise(function(resolve,reject){if(_this35.ended){reject(_this35.collected);return;}var cleanup=function cleanup(){_this35.removeListener('message',onMessage);_this35.removeListener('end',onEnd);};var onMessage=function onMessage(){cleanup();resolve.apply(undefined,arguments);};var onEnd=function onEnd(){cleanup();reject.apply(undefined,arguments);};_this35.once('message',onMessage);_this35.once('end',onEnd);});}}]);return MessageCollector;}(EventEmitter);module.exports=MessageCollector;/***/},/* 35 *//***/function(module,exports){/**
 * Represents an embed in a message (image/video preview, rich embed, etc.)
 */var MessageEmbed=function(){function MessageEmbed(message,data){_classCallCheck(this,MessageEmbed);/**
     * The client that instantiated this embed
     * @name MessageEmbed#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:message.client});/**
     * The message this embed is part of
     * @type {Message}
     */this.message=message;this.setup(data);}MessageEmbed.prototype.setup=function setup(data){/**
     * The type of this embed
     * @type {string}
     */this.type=data.type;/**
     * The title of this embed, if there is one
     * @type {?string}
     */this.title=data.title;/**
     * The description of this embed, if there is one
     * @type {?string}
     */this.description=data.description;/**
     * The URL of this embed
     * @type {string}
     */this.url=data.url;/**
     * The color of the embed
     * @type {number}
     */this.color=data.color;/**
     * The fields of this embed
     * @type {MessageEmbedField[]}
     */this.fields=[];if(data.fields){for(var _iterator49=data.fields,_isArray49=Array.isArray(_iterator49),_i50=0,_iterator49=_isArray49?_iterator49:_iterator49[Symbol.iterator]();;){var _ref61;if(_isArray49){if(_i50>=_iterator49.length)break;_ref61=_iterator49[_i50++];}else{_i50=_iterator49.next();if(_i50.done)break;_ref61=_i50.value;}var _field=_ref61;this.fields.push(new MessageEmbedField(this,_field));}}/**
     * The timestamp of this embed
     * @type {number}
     */this.createdTimestamp=data.timestamp;/**
     * The thumbnail of this embed, if there is one
     * @type {MessageEmbedThumbnail}
     */this.thumbnail=data.thumbnail?new MessageEmbedThumbnail(this,data.thumbnail):null;/**
     * The author of this embed, if there is one
     * @type {MessageEmbedAuthor}
     */this.author=data.author?new MessageEmbedAuthor(this,data.author):null;/**
     * The provider of this embed, if there is one
     * @type {MessageEmbedProvider}
     */this.provider=data.provider?new MessageEmbedProvider(this,data.provider):null;/**
     * The footer of this embed
     * @type {MessageEmbedFooter}
     */this.footer=data.footer?new MessageEmbedFooter(this,data.footer):null;};/**
   * The date this embed was created
   * @type {Date}
   */_createClass(MessageEmbed,[{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}/**
   * The hexadecimal version of the embed color, with a leading hash.
   * @type {string}
   * @readonly
   */},{key:'hexColor',get:function get(){var col=this.color.toString(16);while(col.length<6){col='0'+col;}return'#'+col;}}]);return MessageEmbed;}();/**
 * Represents a thumbnail for a message embed
 */var MessageEmbedThumbnail=function(){function MessageEmbedThumbnail(embed,data){_classCallCheck(this,MessageEmbedThumbnail);/**
     * The embed this thumbnail is part of
     * @type {MessageEmbed}
     */this.embed=embed;this.setup(data);}MessageEmbedThumbnail.prototype.setup=function setup(data){/**
     * The URL for this thumbnail
     * @type {string}
     */this.url=data.url;/**
     * The Proxy URL for this thumbnail
     * @type {string}
     */this.proxyURL=data.proxy_url;/**
     * The height of the thumbnail
     * @type {number}
     */this.height=data.height;/**
     * The width of the thumbnail
     * @type {number}
     */this.width=data.width;};return MessageEmbedThumbnail;}();/**
 * Represents a provider for a message embed
 */var MessageEmbedProvider=function(){function MessageEmbedProvider(embed,data){_classCallCheck(this,MessageEmbedProvider);/**
     * The embed this provider is part of
     * @type {MessageEmbed}
     */this.embed=embed;this.setup(data);}MessageEmbedProvider.prototype.setup=function setup(data){/**
     * The name of this provider
     * @type {string}
     */this.name=data.name;/**
     * The URL of this provider
     * @type {string}
     */this.url=data.url;};return MessageEmbedProvider;}();/**
 * Represents an author for a message embed
 */var MessageEmbedAuthor=function(){function MessageEmbedAuthor(embed,data){_classCallCheck(this,MessageEmbedAuthor);/**
     * The embed this author is part of
     * @type {MessageEmbed}
     */this.embed=embed;this.setup(data);}MessageEmbedAuthor.prototype.setup=function setup(data){/**
     * The name of this author
     * @type {string}
     */this.name=data.name;/**
     * The URL of this author
     * @type {string}
     */this.url=data.url;/**
     * The icon URL of this author
     * @type {string}
     */this.iconURL=data.icon_url;};return MessageEmbedAuthor;}();/**
 * Represents a field for a message embed
 */var MessageEmbedField=function(){function MessageEmbedField(embed,data){_classCallCheck(this,MessageEmbedField);/**
     * The embed this footer is part of
     * @type {MessageEmbed}
     */this.embed=embed;this.setup(data);}MessageEmbedField.prototype.setup=function setup(data){/**
     * The name of this field
     * @type {string}
     */this.name=data.name;/**
     * The value of this field
     * @type {string}
     */this.value=data.value;/**
     * If this field is displayed inline
     * @type {boolean}
     */this.inline=data.inline;};return MessageEmbedField;}();/**
 * Represents the footer of a message embed
 */var MessageEmbedFooter=function(){function MessageEmbedFooter(embed,data){_classCallCheck(this,MessageEmbedFooter);/**
     * The embed this footer is part of
     * @type {MessageEmbed}
     */this.embed=embed;this.setup(data);}MessageEmbedFooter.prototype.setup=function setup(data){/**
     * The text in this footer
     * @type {string}
     */this.text=data.text;/**
     * The icon URL of this footer
     * @type {string}
     */this.iconURL=data.icon_url;/**
     * The proxy icon URL of this footer
     * @type {string}
     */this.proxyIconUrl=data.proxy_icon_url;};return MessageEmbedFooter;}();MessageEmbed.Thumbnail=MessageEmbedThumbnail;MessageEmbed.Provider=MessageEmbedProvider;MessageEmbed.Author=MessageEmbedAuthor;MessageEmbed.Field=MessageEmbedField;MessageEmbed.Footer=MessageEmbedFooter;module.exports=MessageEmbed;/***/},/* 36 *//***/function(module,exports,__webpack_require__){var Collection=__webpack_require__(3);var Emoji=__webpack_require__(10);var ReactionEmoji=__webpack_require__(18);/**
 * Represents a reaction to a message
 */var MessageReaction=function(){function MessageReaction(message,emoji,count,me){_classCallCheck(this,MessageReaction);/**
     * The message that this reaction refers to
     * @type {Message}
     */this.message=message;/**
     * Whether the client has given this reaction
     * @type {boolean}
     */this.me=me;/**
     * The number of people that have given the same reaction.
     * @type {number}
     */this.count=count||0;/**
     * The users that have given this reaction, mapped by their ID.
     * @type {Collection<string, User>}
     */this.users=new Collection();this._emoji=new ReactionEmoji(this,emoji.name,emoji.id);}/**
   * The emoji of this reaction, either an Emoji object for known custom emojis, or a ReactionEmoji
   * object which has fewer properties. Whatever the prototype of the emoji, it will still have
   * `name`, `id`, `identifier` and `toString()`
   * @type {Emoji|ReactionEmoji}
   *//**
   * Removes a user from this reaction.
   * @param {UserResolvable} [user=this.message.client.user] User to remove the reaction of
   * @returns {Promise<MessageReaction>}
   */MessageReaction.prototype.remove=function remove(){var user=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.message.client.user;var message=this.message;user=this.message.client.resolver.resolveUserID(user);if(!user)return Promise.reject('Couldn\'t resolve the user ID to remove from the reaction.');return message.client.rest.methods.removeMessageReaction(message,this.emoji.identifier,user);};/**
   * Fetch all the users that gave this reaction. Resolves with a collection of users, mapped by their IDs.
   * @param {number} [limit=100] the maximum amount of users to fetch, defaults to 100
   * @returns {Promise<Collection<string, User>>}
   */MessageReaction.prototype.fetchUsers=function fetchUsers(){var _this36=this;var limit=arguments.length>0&&arguments[0]!==undefined?arguments[0]:100;var message=this.message;return message.client.rest.methods.getMessageReactionUsers(message,this.emoji.identifier,limit).then(function(users){_this36.users=new Collection();for(var _iterator50=users,_isArray50=Array.isArray(_iterator50),_i51=0,_iterator50=_isArray50?_iterator50:_iterator50[Symbol.iterator]();;){var _ref62;if(_isArray50){if(_i51>=_iterator50.length)break;_ref62=_iterator50[_i51++];}else{_i51=_iterator50.next();if(_i51.done)break;_ref62=_i51.value;}var rawUser=_ref62;var user=_this36.message.client.dataManager.newUser(rawUser);_this36.users.set(user.id,user);}_this36.count=_this36.users.size;return users;});};_createClass(MessageReaction,[{key:'emoji',get:function get(){if(this._emoji instanceof Emoji)return this._emoji;// check to see if the emoji has become known to the client
if(this._emoji.id){var emojis=this.message.client.emojis;if(emojis.has(this._emoji.id)){var emoji=emojis.get(this._emoji.id);this._emoji=emoji;return emoji;}}return this._emoji;}}]);return MessageReaction;}();module.exports=MessageReaction;/***/},/* 37 *//***/function(module,exports){/**
 * Represents an OAuth2 Application
 */var OAuth2Application=function(){function OAuth2Application(client,data){_classCallCheck(this,OAuth2Application);/**
     * The client that instantiated the application
     * @name OAuth2Application#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});this.setup(data);}OAuth2Application.prototype.setup=function setup(data){/**
     * The ID of the app
     * @type {string}
     */this.id=data.id;/**
     * The name of the app
     * @type {string}
     */this.name=data.name;/**
     * The app's description
     * @type {string}
     */this.description=data.description;/**
     * The app's icon hash
     * @type {string}
     */this.icon=data.icon;/**
     * The app's icon URL
     * @type {string}
     */this.iconURL='https://cdn.discordapp.com/app-icons/'+this.id+'/'+this.icon+'.jpg';/**
     * The app's RPC origins
     * @type {Array<string>}
     */this.rpcOrigins=data.rpc_origins;};/**
   * The timestamp the app was created at
   * @type {number}
   * @readonly
   *//**
   * When concatenated with a string, this automatically concatenates the app name rather than the app object.
   * @returns {string}
   */OAuth2Application.prototype.toString=function toString(){return this.name;};_createClass(OAuth2Application,[{key:'createdTimestamp',get:function get(){return this.id/4194304+1420070400000;}/**
   * The time the app was created
   * @type {Date}
   * @readonly
   */},{key:'createdAt',get:function get(){return new Date(this.createdTimestamp);}}]);return OAuth2Application;}();module.exports=OAuth2Application;/***/},/* 38 *//***/function(module,exports){/*
{ splash: null,
     id: '123123123',
     icon: '123123123',
     name: 'name' }
*//**
 * Represents a guild that the client only has limited information for - e.g. from invites.
 */var PartialGuild=function(){function PartialGuild(client,data){_classCallCheck(this,PartialGuild);/**
     * The Client that instantiated this PartialGuild
     * @name PartialGuild#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});this.setup(data);}PartialGuild.prototype.setup=function setup(data){/**
     * The ID of this guild
     * @type {string}
     */this.id=data.id;/**
     * The name of this guild
     * @type {string}
     */this.name=data.name;/**
     * The hash of this guild's icon, or null if there is none.
     * @type {?string}
     */this.icon=data.icon;/**
     * The hash of the guild splash image, or null if no splash (VIP only)
     * @type {?string}
     */this.splash=data.splash;};return PartialGuild;}();module.exports=PartialGuild;/***/},/* 39 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);/*
{ type: 0, id: '123123', name: 'heavy-testing' } }
*//**
 * Represents a guild channel that the client only has limited information for - e.g. from invites.
 */var PartialGuildChannel=function(){function PartialGuildChannel(client,data){_classCallCheck(this,PartialGuildChannel);/**
     * The Client that instantiated this PartialGuildChannel
     * @name PartialGuildChannel#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:client});this.setup(data);}PartialGuildChannel.prototype.setup=function setup(data){/**
     * The ID of this guild channel
     * @type {string}
     */this.id=data.id;/**
     * The name of this guild channel
     * @type {string}
     */this.name=data.name;/**
     * The type of this guild channel - `text` or `voice`
     * @type {string}
     */this.type=Constants.ChannelTypes.text===data.type?'text':'voice';};return PartialGuildChannel;}();module.exports=PartialGuildChannel;/***/},/* 40 *//***/function(module,exports){/**
 * Represents a permission overwrite for a role or member in a guild channel.
 */var PermissionOverwrites=function(){function PermissionOverwrites(guildChannel,data){_classCallCheck(this,PermissionOverwrites);/**
     * The GuildChannel this overwrite is for
     * @name PermissionOverwrites#channel
     * @type {GuildChannel}
     * @readonly
     */Object.defineProperty(this,'channel',{value:guildChannel});if(data)this.setup(data);}PermissionOverwrites.prototype.setup=function setup(data){/**
     * The ID of this overwrite, either a user ID or a role ID
     * @type {string}
     */this.id=data.id;/**
     * The type of this overwrite
     * @type {string}
     */this.type=data.type;this.deny=data.deny;this.allow=data.allow;};/**
   * Delete this Permission Overwrite.
   * @returns {Promise<PermissionOverwrites>}
   */PermissionOverwrites.prototype.delete=function _delete(){return this.channel.client.rest.methods.deletePermissionOverwrites(this);};return PermissionOverwrites;}();module.exports=PermissionOverwrites;/***/},/* 41 *//***/function(module,exports,__webpack_require__){var GuildChannel=__webpack_require__(13);var TextBasedChannel=__webpack_require__(12);var Collection=__webpack_require__(3);/**
 * Represents a guild text channel on Discord.
 * @extends {GuildChannel}
 * @implements {TextBasedChannel}
 */var TextChannel=function(_GuildChannel){_inherits(TextChannel,_GuildChannel);function TextChannel(guild,data){_classCallCheck(this,TextChannel);var _this37=_possibleConstructorReturn(this,_GuildChannel.call(this,guild,data));_this37.type='text';_this37.messages=new Collection();_this37._typing=new Map();return _this37;}TextChannel.prototype.setup=function setup(data){_GuildChannel.prototype.setup.call(this,data);/**
     * The topic of the text channel, if there is one.
     * @type {?string}
     */this.topic=data.topic;this.lastMessageID=data.last_message_id;};/**
   * A collection of members that can see this channel, mapped by their ID.
   * @type {Collection<string, GuildMember>}
   * @readonly
   *//**
   * Fetch all webhooks for the channel.
   * @returns {Promise<Collection<string, Webhook>>}
   */TextChannel.prototype.fetchWebhooks=function fetchWebhooks(){return this.client.rest.methods.getChannelWebhooks(this);};/**
   * Create a webhook for the channel.
   * @param {string} name The name of the webhook.
   * @param {BufferResolvable} avatar The avatar for the webhook.
   * @returns {Promise<Webhook>} webhook The created webhook.
   * @example
   * channel.createWebhook('Snek', 'http://snek.s3.amazonaws.com/topSnek.png')
   *  .then(webhook => console.log(`Created Webhook ${webhook}`))
   *  .catch(console.error)
   */TextChannel.prototype.createWebhook=function createWebhook(name,avatar){var _this38=this;return new Promise(function(resolve){if(avatar.startsWith('data:')){resolve(_this38.client.rest.methods.createWebhook(_this38,name,avatar));}else{_this38.client.resolver.resolveBuffer(avatar).then(function(data){return resolve(_this38.client.rest.methods.createWebhook(_this38,name,data));});}});};// These are here only for documentation purposes - they are implemented by TextBasedChannel
TextChannel.prototype.send=function send(){return;};TextChannel.prototype.sendMessage=function sendMessage(){return;};TextChannel.prototype.sendEmbed=function sendEmbed(){return;};TextChannel.prototype.sendFile=function sendFile(){return;};TextChannel.prototype.sendCode=function sendCode(){return;};TextChannel.prototype.fetchMessage=function fetchMessage(){return;};TextChannel.prototype.fetchMessages=function fetchMessages(){return;};TextChannel.prototype.fetchPinnedMessages=function fetchPinnedMessages(){return;};TextChannel.prototype.startTyping=function startTyping(){return;};TextChannel.prototype.stopTyping=function stopTyping(){return;};TextChannel.prototype.createCollector=function createCollector(){return;};TextChannel.prototype.awaitMessages=function awaitMessages(){return;};TextChannel.prototype.bulkDelete=function bulkDelete(){return;};TextChannel.prototype._cacheMessage=function _cacheMessage(){return;};_createClass(TextChannel,[{key:'members',get:function get(){var members=new Collection();for(var _iterator51=this.guild.members.values(),_isArray51=Array.isArray(_iterator51),_i52=0,_iterator51=_isArray51?_iterator51:_iterator51[Symbol.iterator]();;){var _ref63;if(_isArray51){if(_i52>=_iterator51.length)break;_ref63=_iterator51[_i52++];}else{_i52=_iterator51.next();if(_i52.done)break;_ref63=_i52.value;}var member=_ref63;if(this.permissionsFor(member).hasPermission('READ_MESSAGES')){members.set(member.id,member);}}return members;}},{key:'typing',get:function get(){return;}},{key:'typingCount',get:function get(){return;}}]);return TextChannel;}(GuildChannel);TextBasedChannel.applyToClass(TextChannel,true);module.exports=TextChannel;/***/},/* 42 *//***/function(module,exports,__webpack_require__){var GuildChannel=__webpack_require__(13);var Collection=__webpack_require__(3);/**
 * Represents a guild voice channel on Discord.
 * @extends {GuildChannel}
 */var VoiceChannel=function(_GuildChannel2){_inherits(VoiceChannel,_GuildChannel2);function VoiceChannel(guild,data){_classCallCheck(this,VoiceChannel);/**
     * The members in this voice channel.
     * @type {Collection<string, GuildMember>}
     */var _this39=_possibleConstructorReturn(this,_GuildChannel2.call(this,guild,data));_this39.members=new Collection();_this39.type='voice';return _this39;}VoiceChannel.prototype.setup=function setup(data){_GuildChannel2.prototype.setup.call(this,data);/**
     * The bitrate of this voice channel
     * @type {number}
     */this.bitrate=data.bitrate;/**
     * The maximum amount of users allowed in this channel - 0 means unlimited.
     * @type {number}
     */this.userLimit=data.user_limit;};/**
   * The voice connection for this voice channel, if the client is connected
   * @type {?VoiceConnection}
   * @readonly
   *//**
   * Sets the bitrate of the channel
   * @param {number} bitrate The new bitrate
   * @returns {Promise<VoiceChannel>}
   * @example
   * // set the bitrate of a voice channel
   * voiceChannel.setBitrate(48000)
   *  .then(vc => console.log(`Set bitrate to ${vc.bitrate} for ${vc.name}`))
   *  .catch(console.error);
   */VoiceChannel.prototype.setBitrate=function setBitrate(bitrate){return this.edit({bitrate:bitrate});};/**
   * Sets the user limit of the channel
   * @param {number} userLimit The new user limit
   * @returns {Promise<VoiceChannel>}
   * @example
   * // set the user limit of a voice channel
   * voiceChannel.setUserLimit(42)
   *  .then(vc => console.log(`Set user limit to ${vc.userLimit} for ${vc.name}`))
   *  .catch(console.error);
   */VoiceChannel.prototype.setUserLimit=function setUserLimit(userLimit){return this.edit({userLimit:userLimit});};/**
   * Attempts to join this voice channel
   * @returns {Promise<VoiceConnection>}
   * @example
   * // join a voice channel
   * voiceChannel.join()
   *  .then(connection => console.log('Connected!'))
   *  .catch(console.error);
   */VoiceChannel.prototype.join=function join(){if(this.client.browser)return Promise.reject(new Error('Voice connections are not available in browsers.'));return this.client.voice.joinChannel(this);};/**
   * Leaves this voice channel
   * @example
   * // leave a voice channel
   * voiceChannel.leave();
   */VoiceChannel.prototype.leave=function leave(){if(this.client.browser)return;var connection=this.client.voice.connections.get(this.guild.id);if(connection&&connection.channel.id===this.id)connection.disconnect();};_createClass(VoiceChannel,[{key:'connection',get:function get(){var connection=this.guild.voiceConnection;if(connection&&connection.channel.id===this.id)return connection;return null;}/**
   * Checks if the client has permission join the voice channel
   * @type {boolean}
   */},{key:'joinable',get:function get(){if(this.client.browser)return false;return this.permissionsFor(this.client.user).hasPermission('CONNECT');}/**
   * Checks if the client has permission to send audio to the voice channel
   * @type {boolean}
   */},{key:'speakable',get:function get(){return this.permissionsFor(this.client.user).hasPermission('SPEAK');}}]);return VoiceChannel;}(GuildChannel);module.exports=VoiceChannel;/***/},/* 43 *//***/function(module,exports){module.exports=function splitMessage(text){var _ref64=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref64$maxLength=_ref64.maxLength,maxLength=_ref64$maxLength===undefined?1950:_ref64$maxLength,_ref64$char=_ref64.char,char=_ref64$char===undefined?'\n':_ref64$char,_ref64$prepend=_ref64.prepend,prepend=_ref64$prepend===undefined?'':_ref64$prepend,_ref64$append=_ref64.append,append=_ref64$append===undefined?'':_ref64$append;if(text.length<=maxLength)return text;var splitText=text.split(char);if(splitText.length===1)throw new Error('Message exceeds the max length and contains no split characters.');var messages=[''];var msg=0;for(var i=0;i<splitText.length;i++){if(messages[msg].length+splitText[i].length+1>maxLength){messages[msg]+=append;messages.push(prepend);msg++;}messages[msg]+=(messages[msg].length>0&&messages[msg]!==prepend?char:'')+splitText[i];}return messages;};/***/},/* 44 *//***/function(module,exports,__webpack_require__){"use strict";// String encode/decode helpers
var utils=__webpack_require__(5);// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK=true;var STR_APPLY_UIA_OK=true;try{String.fromCharCode.apply(null,[0]);}catch(__){STR_APPLY_OK=false;}try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(__){STR_APPLY_UIA_OK=false;}// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len=new utils.Buf8(256);for(var q=0;q<256;q++){_utf8len[q]=q>=252?6:q>=248?5:q>=240?4:q>=224?3:q>=192?2:1;}_utf8len[254]=_utf8len[254]=1;// Invalid sequence start
// convert string to array (typed, when possible)
exports.string2buf=function(str){var buf,c,c2,m_pos,i,str_len=str.length,buf_len=0;// count binary size
for(m_pos=0;m_pos<str_len;m_pos++){c=str.charCodeAt(m_pos);if((c&0xfc00)===0xd800&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&0xfc00)===0xdc00){c=0x10000+(c-0xd800<<10)+(c2-0xdc00);m_pos++;}}buf_len+=c<0x80?1:c<0x800?2:c<0x10000?3:4;}// allocate buffer
buf=new utils.Buf8(buf_len);// convert
for(i=0,m_pos=0;i<buf_len;m_pos++){c=str.charCodeAt(m_pos);if((c&0xfc00)===0xd800&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&0xfc00)===0xdc00){c=0x10000+(c-0xd800<<10)+(c2-0xdc00);m_pos++;}}if(c<0x80){/* one byte */buf[i++]=c;}else if(c<0x800){/* two bytes */buf[i++]=0xC0|c>>>6;buf[i++]=0x80|c&0x3f;}else if(c<0x10000){/* three bytes */buf[i++]=0xE0|c>>>12;buf[i++]=0x80|c>>>6&0x3f;buf[i++]=0x80|c&0x3f;}else{/* four bytes */buf[i++]=0xf0|c>>>18;buf[i++]=0x80|c>>>12&0x3f;buf[i++]=0x80|c>>>6&0x3f;buf[i++]=0x80|c&0x3f;}}return buf;};// Helper (used in 2 places)
function buf2binstring(buf,len){// use fallback for big arrays to avoid stack overflow
if(len<65537){if(buf.subarray&&STR_APPLY_UIA_OK||!buf.subarray&&STR_APPLY_OK){return String.fromCharCode.apply(null,utils.shrinkBuf(buf,len));}}var result='';for(var i=0;i<len;i++){result+=String.fromCharCode(buf[i]);}return result;}// Convert byte array to binary string
exports.buf2binstring=function(buf){return buf2binstring(buf,buf.length);};// Convert binary string (typed, when possible)
exports.binstring2buf=function(str){var buf=new utils.Buf8(str.length);for(var i=0,len=buf.length;i<len;i++){buf[i]=str.charCodeAt(i);}return buf;};// convert array to string
exports.buf2string=function(buf,max){var i,out,c,c_len;var len=max||buf.length;// Reserve max possible length (2 words per char)
// NB: by unknown reasons, Array is significantly faster for
//     String.fromCharCode.apply than Uint16Array.
var utf16buf=new Array(len*2);for(out=0,i=0;i<len;){c=buf[i++];// quick process ascii
if(c<0x80){utf16buf[out++]=c;continue;}c_len=_utf8len[c];// skip 5 & 6 byte codes
if(c_len>4){utf16buf[out++]=0xfffd;i+=c_len-1;continue;}// apply mask on first byte
c&=c_len===2?0x1f:c_len===3?0x0f:0x07;// join the rest
while(c_len>1&&i<len){c=c<<6|buf[i++]&0x3f;c_len--;}// terminated by end of string?
if(c_len>1){utf16buf[out++]=0xfffd;continue;}if(c<0x10000){utf16buf[out++]=c;}else{c-=0x10000;utf16buf[out++]=0xd800|c>>10&0x3ff;utf16buf[out++]=0xdc00|c&0x3ff;}}return buf2binstring(utf16buf,out);};// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border=function(buf,max){var pos;max=max||buf.length;if(max>buf.length){max=buf.length;}// go back from last position, until start of sequence found
pos=max-1;while(pos>=0&&(buf[pos]&0xC0)===0x80){pos--;}// Fuckup - very small and broken sequence,
// return max, because we should return something anyway.
if(pos<0){return max;}// If we came to start of buffer - that means vuffer is too small,
// return max too.
if(pos===0){return max;}return pos+_utf8len[buf[pos]]>max?pos:max;};/***/},/* 45 *//***/function(module,exports,__webpack_require__){"use strict";// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.
function adler32(adler,buf,len,pos){var s1=adler&0xffff|0,s2=adler>>>16&0xffff|0,n=0;while(len!==0){// Set limit ~ twice less than 5552, to keep
// s2 in 31-bits, because we force signed ints.
// in other case %= will fail.
n=len>2000?2000:len;len-=n;do{s1=s1+buf[pos++]|0;s2=s2+s1|0;}while(--n);s1%=65521;s2%=65521;}return s1|s2<<16|0;}module.exports=adler32;/***/},/* 46 *//***/function(module,exports,__webpack_require__){"use strict";module.exports={/* Allowed flush values; see deflate() and inflate() below for details */Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,/* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,//Z_MEM_ERROR:     -4,
Z_BUF_ERROR:-5,//Z_VERSION_ERROR: -6,
/* compression levels */Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,/* Possible values of the data_type field (though see inflate()) */Z_BINARY:0,Z_TEXT:1,//Z_ASCII:                1, // = Z_TEXT (deprecated)
Z_UNKNOWN:2,/* The deflate compression method */Z_DEFLATED:8//Z_NULL:                 null // Use -1 or null inline, depending on var type
};/***/},/* 47 *//***/function(module,exports,__webpack_require__){"use strict";// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// Use ordinary array, since untyped makes no boost here
function makeTable(){var c,table=[];for(var n=0;n<256;n++){c=n;for(var k=0;k<8;k++){c=c&1?0xEDB88320^c>>>1:c>>>1;}table[n]=c;}return table;}// Create table on load. Just 255 signed longs. Not a problem.
var crcTable=makeTable();function crc32(crc,buf,len,pos){var t=crcTable,end=pos+len;crc^=-1;for(var i=pos;i<end;i++){crc=crc>>>8^t[(crc^buf[i])&0xFF];}return crc^-1;// >>> 0;
}module.exports=crc32;/***/},/* 48 *//***/function(module,exports,__webpack_require__){"use strict";function ZStream(){/* next input byte */this.input=null;// JS specific, because we have no pointers
this.next_in=0;/* number of bytes available at input */this.avail_in=0;/* total number of input bytes read so far */this.total_in=0;/* next output byte should be put there */this.output=null;// JS specific, because we have no pointers
this.next_out=0;/* remaining free space at output */this.avail_out=0;/* total number of bytes output so far */this.total_out=0;/* last error message, NULL if no error */this.msg=''/*Z_NULL*/;/* not visible by applications */this.state=null;/* best guess about the data type: binary or text */this.data_type=2/*Z_UNKNOWN*/;/* adler32 value of the uncompressed data */this.adler=0;}module.exports=ZStream;/***/},/* 49 *//***/function(module,exports){/***/},/* 50 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(Buffer){var path=__webpack_require__(23);var fs=__webpack_require__(49);var request=__webpack_require__(25);var Constants=__webpack_require__(0);var convertArrayBuffer=__webpack_require__(53);var User=__webpack_require__(6);var Message=__webpack_require__(11);var Guild=__webpack_require__(17);var Channel=__webpack_require__(9);var GuildMember=__webpack_require__(14);var Emoji=__webpack_require__(10);var ReactionEmoji=__webpack_require__(18);/**
 * The DataResolver identifies different objects and tries to resolve a specific piece of information from them, e.g.
 * extracting a User from a Message object.
 * @private
 */var ClientDataResolver=function(){/**
   * @param {Client} client The client the resolver is for
   */function ClientDataResolver(client){_classCallCheck(this,ClientDataResolver);this.client=client;}/**
   * Data that resolves to give a User object. This can be:
   * * A User object
   * * A user ID
   * * A Message object (resolves to the message author)
   * * A Guild object (owner of the guild)
   * * A GuildMember object
   * @typedef {User|string|Message|Guild|GuildMember} UserResolvable
   *//**
   * Resolves a UserResolvable to a User object
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {?User}
   */ClientDataResolver.prototype.resolveUser=function resolveUser(user){if(user instanceof User)return user;if(typeof user==='string')return this.client.users.get(user)||null;if(user instanceof GuildMember)return user.user;if(user instanceof Message)return user.author;if(user instanceof Guild)return user.owner;return null;};/**
   * Resolves a UserResolvable to a user ID string
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {?string}
   */ClientDataResolver.prototype.resolveUserID=function resolveUserID(user){if(user instanceof User||user instanceof GuildMember)return user.id;if(typeof user==='string')return user||null;if(user instanceof Message)return user.author.id;if(user instanceof Guild)return user.ownerID;return null;};/**
   * Data that resolves to give a Guild object. This can be:
   * * A Guild object
   * * A Guild ID
   * @typedef {Guild|string} GuildResolvable
   *//**
   * Resolves a GuildResolvable to a Guild object
   * @param {GuildResolvable} guild The GuildResolvable to identify
   * @returns {?Guild}
   */ClientDataResolver.prototype.resolveGuild=function resolveGuild(guild){if(guild instanceof Guild)return guild;if(typeof guild==='string')return this.client.guilds.get(guild)||null;return null;};/**
   * Data that resolves to give a GuildMember object. This can be:
   * * A GuildMember object
   * * A User object
   * @typedef {Guild} GuildMemberResolvable
   *//**
   * Resolves a GuildMemberResolvable to a GuildMember object
   * @param {GuildResolvable} guild The guild that the member is part of
   * @param {UserResolvable} user The user that is part of the guild
   * @returns {?GuildMember}
   */ClientDataResolver.prototype.resolveGuildMember=function resolveGuildMember(guild,user){if(user instanceof GuildMember)return user;guild=this.resolveGuild(guild);user=this.resolveUser(user);if(!guild||!user)return null;return guild.members.get(user.id)||null;};/**
   * Data that can be resolved to give a Channel. This can be:
   * * A Channel object
   * * A Message object (the channel the message was sent in)
   * * A Guild object (the #general channel)
   * * A channel ID
   * @typedef {Channel|Guild|Message|string} ChannelResolvable
   *//**
   * Resolves a ChannelResolvable to a Channel object
   * @param {ChannelResolvable} channel The channel resolvable to resolve
   * @returns {?Channel}
   */ClientDataResolver.prototype.resolveChannel=function resolveChannel(channel){if(channel instanceof Channel)return channel;if(channel instanceof Message)return channel.channel;if(channel instanceof Guild)return channel.channels.get(channel.id)||null;if(typeof channel==='string')return this.client.channels.get(channel)||null;return null;};/**
   * Data that can be resolved to give an invite code. This can be:
   * * An invite code
   * * An invite URL
   * @typedef {string} InviteResolvable
   *//**
   * Resolves InviteResolvable to an invite code
   * @param {InviteResolvable} data The invite resolvable to resolve
   * @returns {string}
   */ClientDataResolver.prototype.resolveInviteCode=function resolveInviteCode(data){var inviteRegex=/discord(?:app)?\.(?:gg|com\/invite)\/([a-z0-9]{5})/i;var match=inviteRegex.exec(data);if(match&&match[1])return match[1];return data;};/**
   * Data that can be resolved to give a permission number. This can be:
   * * A string
   * * A permission number
   *
   * Possible strings:
   * ```js
   * [
   *   "CREATE_INSTANT_INVITE",
   *   "KICK_MEMBERS",
   *   "BAN_MEMBERS",
   *   "ADMINISTRATOR",
   *   "MANAGE_CHANNELS",
   *   "MANAGE_GUILD",
   *   "ADD_REACTIONS", // add reactions to messages
   *   "READ_MESSAGES",
   *   "SEND_MESSAGES",
   *   "SEND_TTS_MESSAGES",
   *   "MANAGE_MESSAGES",
   *   "EMBED_LINKS",
   *   "ATTACH_FILES",
   *   "READ_MESSAGE_HISTORY",
   *   "MENTION_EVERYONE",
   *   "EXTERNAL_EMOJIS", // use external emojis
   *   "CONNECT", // connect to voice
   *   "SPEAK", // speak on voice
   *   "MUTE_MEMBERS", // globally mute members on voice
   *   "DEAFEN_MEMBERS", // globally deafen members on voice
   *   "MOVE_MEMBERS", // move member's voice channels
   *   "USE_VAD", // use voice activity detection
   *   "CHANGE_NICKNAME",
   *   "MANAGE_NICKNAMES", // change nicknames of others
   *   "MANAGE_ROLES_OR_PERMISSIONS",
   *   "MANAGE_WEBHOOKS",
   *   "MANAGE_EMOJIS"
   * ]
   * ```
   * @typedef {string|number} PermissionResolvable
   *//**
   * Resolves a PermissionResolvable to a permission number
   * @param {PermissionResolvable} permission The permission resolvable to resolve
   * @returns {number}
   */ClientDataResolver.prototype.resolvePermission=function resolvePermission(permission){if(typeof permission==='string')permission=Constants.PermissionFlags[permission];if(typeof permission!=='number'||permission<1)throw new Error(Constants.Errors.NOT_A_PERMISSION);return permission;};/**
   * Turn an array of permissions into a valid Discord permission bitfield
   * @param {PermissionResolvable[]} permissions Permissions to resolve together
   * @returns {number}
   */ClientDataResolver.prototype.resolvePermissions=function resolvePermissions(permissions){var bitfield=0;for(var _iterator52=permissions,_isArray52=Array.isArray(_iterator52),_i53=0,_iterator52=_isArray52?_iterator52:_iterator52[Symbol.iterator]();;){var _ref65;if(_isArray52){if(_i53>=_iterator52.length)break;_ref65=_iterator52[_i53++];}else{_i53=_iterator52.next();if(_i53.done)break;_ref65=_i53.value;}var permission=_ref65;bitfield|=this.resolvePermission(permission);}return bitfield;};/**
   * Data that can be resolved to give a string. This can be:
   * * A string
   * * An array (joined with a new line delimiter to give a string)
   * * Any value
   * @typedef {string|Array|*} StringResolvable
   *//**
   * Resolves a StringResolvable to a string
   * @param {StringResolvable} data The string resolvable to resolve
   * @returns {string}
   */ClientDataResolver.prototype.resolveString=function resolveString(data){if(typeof data==='string')return data;if(data instanceof Array)return data.join('\n');return String(data);};/**
   * Data that resolves to give a Base64 string, typically for image uploading. This can be:
   * * A Buffer
   * * A base64 string
   * @typedef {Buffer|string} Base64Resolvable
   *//**
   * Resolves a Base64Resolvable to a Base 64 image
   * @param {Base64Resolvable} data The base 64 resolvable you want to resolve
   * @returns {?string}
   */ClientDataResolver.prototype.resolveBase64=function resolveBase64(data){if(data instanceof Buffer)return'data:image/jpg;base64,'+data.toString('base64');return data;};/**
   * Data that can be resolved to give a Buffer. This can be:
   * * A Buffer
   * * The path to a local file
   * * A URL
   * @typedef {string|Buffer} BufferResolvable
   *//**
   * Resolves a BufferResolvable to a Buffer
   * @param {BufferResolvable} resource The buffer resolvable to resolve
   * @returns {Promise<Buffer>}
   */ClientDataResolver.prototype.resolveBuffer=function resolveBuffer(resource){var _this40=this;if(resource instanceof Buffer)return Promise.resolve(resource);if(this.client.browser&&resource instanceof ArrayBuffer)return Promise.resolve(convertArrayBuffer(resource));if(typeof resource==='string'){return new Promise(function(resolve,reject){if(/^https?:\/\//.test(resource)){var req=request.get(resource).set('Content-Type','blob');if(_this40.client.browser)req.responseType('arraybuffer');req.end(function(err,res){if(err)return reject(err);if(_this40.client.browser)return resolve(convertArrayBuffer(res.xhr.response));if(!(res.body instanceof Buffer))return reject(new TypeError('The response body isn\'t a Buffer.'));return resolve(res.body);});}else{var file=path.resolve(resource);fs.stat(file,function(err,stats){if(err)reject(err);if(!stats||!stats.isFile())throw new Error('The file could not be found: '+file);fs.readFile(file,function(err2,data){if(err2)reject(err2);else resolve(data);});});}});}return Promise.reject(new TypeError('The resource must be a string or Buffer.'));};/**
   * Data that can be resolved to give an emoji identifier. This can be:
   * * A string
   * * An Emoji
   * * A ReactionEmoji
   * @typedef {string|Emoji|ReactionEmoji} EmojiIdentifierResolvable
   *//**
   * Resolves an EmojiResolvable to an emoji identifier
   * @param {EmojiIdentifierResolvable} emoji The emoji resolvable to resolve
   * @returns {string}
   */ClientDataResolver.prototype.resolveEmojiIdentifier=function resolveEmojiIdentifier(emoji){if(emoji instanceof Emoji||emoji instanceof ReactionEmoji)return emoji.identifier;if(typeof emoji==='string'){if(!emoji.includes('%'))return encodeURIComponent(emoji);}return null;};return ClientDataResolver;}();module.exports=ClientDataResolver;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(20).Buffer);/***/},/* 51 *//***/function(module,exports,__webpack_require__){var UserAgentManager=__webpack_require__(114);var RESTMethods=__webpack_require__(111);var SequentialRequestHandler=__webpack_require__(113);var BurstRequestHandler=__webpack_require__(112);var APIRequest=__webpack_require__(110);var Constants=__webpack_require__(0);var RESTManager=function(){function RESTManager(client){_classCallCheck(this,RESTManager);this.client=client;this.handlers={};this.userAgentManager=new UserAgentManager(this);this.methods=new RESTMethods(this);this.rateLimitedEndpoints={};this.globallyRateLimited=false;}RESTManager.prototype.push=function push(handler,apiRequest){return new Promise(function(resolve,reject){handler.push({request:apiRequest,resolve:resolve,reject:reject});});};RESTManager.prototype.getRequestHandler=function getRequestHandler(){switch(this.client.options.apiRequestMethod){case'sequential':return SequentialRequestHandler;case'burst':return BurstRequestHandler;default:throw new Error(Constants.Errors.INVALID_RATE_LIMIT_METHOD);}};RESTManager.prototype.makeRequest=function makeRequest(method,url,auth,data,file){var apiRequest=new APIRequest(this,method,url,auth,data,file);if(!this.handlers[apiRequest.route]){var RequestHandlerType=this.getRequestHandler();this.handlers[apiRequest.route]=new RequestHandlerType(this,apiRequest.route);}return this.push(this.handlers[apiRequest.route],apiRequest);};return RESTManager;}();module.exports=RESTManager;/***/},/* 52 *//***/function(module,exports){/**
 * A base class for different types of rate limiting handlers for the REST API.
 * @private
 */var RequestHandler=function(){/**
   * @param {RESTManager} restManager The REST manager to use
   */function RequestHandler(restManager){_classCallCheck(this,RequestHandler);/**
     * The RESTManager that instantiated this RequestHandler
     * @type {RESTManager}
     */this.restManager=restManager;/**
     * A list of requests that have yet to be processed.
     * @type {APIRequest[]}
     */this.queue=[];}/**
   * Whether or not the client is being rate limited on every endpoint.
   * @type {boolean}
   *//**
   * Push a new API request into this bucket
   * @param {APIRequest} request The new request to push into the queue
   */RequestHandler.prototype.push=function push(request){this.queue.push(request);};/**
   * Attempts to get this RequestHandler to process its current queue
   */RequestHandler.prototype.handle=function handle(){return;};_createClass(RequestHandler,[{key:'globalLimit',get:function get(){return this.restManager.globallyRateLimited;},set:function set(value){this.restManager.globallyRateLimited=value;}}]);return RequestHandler;}();module.exports=RequestHandler;/***/},/* 53 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(Buffer){function arrayBufferToBuffer(ab){var buffer=new Buffer(ab.byteLength);var view=new Uint8Array(ab);for(var i=0;i<buffer.length;++i){buffer[i]=view[i];}return buffer;}function str2ab(str){var buffer=new ArrayBuffer(str.length*2);var view=new Uint16Array(buffer);for(var i=0,strLen=str.length;i<strLen;i++){view[i]=str.charCodeAt(i);}return buffer;}module.exports=function convertArrayBuffer(x){if(typeof x==='string')x=str2ab(x);return arrayBufferToBuffer(x);};/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(20).Buffer);/***/},/* 54 *//***/function(module,exports){module.exports=function merge(def,given){if(!given)return def;for(var key in def){if(!{}.hasOwnProperty.call(given,key)){given[key]=def[key];}else if(given[key]===Object(given[key])){given[key]=merge(def[key],given[key]);}}return given;};/***/},/* 55 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){var EventEmitter=__webpack_require__(21).EventEmitter;var mergeDefault=__webpack_require__(54);var Constants=__webpack_require__(0);var RESTManager=__webpack_require__(51);var ClientDataManager=__webpack_require__(81);var ClientManager=__webpack_require__(82);var ClientDataResolver=__webpack_require__(50);var ClientVoiceManager=__webpack_require__(156);var WebSocketManager=__webpack_require__(115);var ActionsManager=__webpack_require__(83);var Collection=__webpack_require__(3);var Presence=__webpack_require__(7).Presence;var ShardClientUtil=__webpack_require__(155);/**
 * The starting point for making a Discord Bot.
 * @extends {EventEmitter}
 */var Client=function(_EventEmitter2){_inherits(Client,_EventEmitter2);/**
   * @param {ClientOptions} [options] Options for the client
   */function Client(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Client);// Obtain shard details from environment
var _this41=_possibleConstructorReturn(this,_EventEmitter2.call(this));if(!options.shardId&&'SHARD_ID'in process.env)options.shardId=Number(process.env.SHARD_ID);if(!options.shardCount&&'SHARD_COUNT'in process.env)options.shardCount=Number(process.env.SHARD_COUNT);/**
     * The options the client was instantiated with
     * @type {ClientOptions}
     */_this41.options=mergeDefault(Constants.DefaultOptions,options);_this41._validateOptions();/**
     * The REST manager of the client
     * @type {RESTManager}
     * @private
     */_this41.rest=new RESTManager(_this41);/**
     * The data manager of the Client
     * @type {ClientDataManager}
     * @private
     */_this41.dataManager=new ClientDataManager(_this41);/**
     * The manager of the Client
     * @type {ClientManager}
     * @private
     */_this41.manager=new ClientManager(_this41);/**
     * The WebSocket Manager of the Client
     * @type {WebSocketManager}
     * @private
     */_this41.ws=new WebSocketManager(_this41);/**
     * The Data Resolver of the Client
     * @type {ClientDataResolver}
     * @private
     */_this41.resolver=new ClientDataResolver(_this41);/**
     * The Action Manager of the Client
     * @type {ActionsManager}
     * @private
     */_this41.actions=new ActionsManager(_this41);/**
     * The Voice Manager of the Client (`null` in browsers)
     * @type {?ClientVoiceManager}
     * @private
     */_this41.voice=!_this41.browser?new ClientVoiceManager(_this41):null;/**
     * The shard helpers for the client (only if the process was spawned as a child, such as from a ShardingManager)
     * @type {?ShardClientUtil}
     */_this41.shard=process.send?ShardClientUtil.singleton(_this41):null;/**
     * A collection of the Client's stored users
     * @type {Collection<string, User>}
     */_this41.users=new Collection();/**
     * A collection of the Client's stored guilds
     * @type {Collection<string, Guild>}
     */_this41.guilds=new Collection();/**
     * A collection of the Client's stored channels
     * @type {Collection<string, Channel>}
     */_this41.channels=new Collection();/**
     * A collection of presences for friends of the logged in user.
     * <warn>This is only filled when using a user account.</warn>
     * @type {Collection<string, Presence>}
     */_this41.presences=new Collection();if(!_this41.token&&'CLIENT_TOKEN'in process.env){/**
       * The authorization token for the logged in user/bot.
       * @type {?string}
       */_this41.token=process.env.CLIENT_TOKEN;}else{_this41.token=null;}/**
     * The ClientUser representing the logged in Client
     * @type {?ClientUser}
     */_this41.user=null;/**
     * The date at which the Client was regarded as being in the `READY` state.
     * @type {?Date}
     */_this41.readyAt=null;/**
     * The previous heartbeat pings of the websocket (most recent first, limited to three elements)
     * @type {number[]}
     */_this41.pings=[];_this41._pingTimestamp=0;_this41._timeouts=new Set();_this41._intervals=new Set();if(_this41.options.messageSweepInterval>0){_this41.setInterval(_this41.sweepMessages.bind(_this41),_this41.options.messageSweepInterval*1000);}return _this41;}/**
   * The status for the logged in Client.
   * @type {?number}
   * @readonly
   *//**
   * Logs the client in. If successful, resolves with the account's token. <warn>If you're making a bot, it's
   * much better to use a bot account rather than a user account.
   * Bot accounts have higher rate limits and have access to some features user accounts don't have. User bots
   * that are making a lot of API requests can even be banned.</warn>
   * @param  {string} token The token used for the account.
   * @returns {Promise<string>}
   * @example
   * // log the client in using a token
   * const token = 'my token';
   * client.login(token);
   * @example
   * // log the client in using email and password
   * const email = 'user@email.com';
   * const password = 'supersecret123';
   * client.login(email, password);
   */Client.prototype.login=function login(token){return this.rest.methods.login(token);};/**
   * Destroys the client and logs out.
   * @returns {Promise}
   */Client.prototype.destroy=function destroy(){for(var _iterator53=this._timeouts,_isArray53=Array.isArray(_iterator53),_i54=0,_iterator53=_isArray53?_iterator53:_iterator53[Symbol.iterator]();;){var _ref66;if(_isArray53){if(_i54>=_iterator53.length)break;_ref66=_iterator53[_i54++];}else{_i54=_iterator53.next();if(_i54.done)break;_ref66=_i54.value;}var t=_ref66;clearTimeout(t);}for(var _iterator54=this._intervals,_isArray54=Array.isArray(_iterator54),_i55=0,_iterator54=_isArray54?_iterator54:_iterator54[Symbol.iterator]();;){var _ref67;if(_isArray54){if(_i55>=_iterator54.length)break;_ref67=_iterator54[_i55++];}else{_i55=_iterator54.next();if(_i55.done)break;_ref67=_i55.value;}var i=_ref67;clearInterval(i);}this._timeouts.clear();this._intervals.clear();return this.manager.destroy();};/**
   * This shouldn't really be necessary to most developers as it is automatically invoked every 30 seconds, however
   * if you wish to force a sync of guild data, you can use this.
   * <warn>This is only available when using a user account.</warn>
   * @param {Guild[]|Collection<string, Guild>} [guilds=this.guilds] An array or collection of guilds to sync
   */Client.prototype.syncGuilds=function syncGuilds(){var guilds=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.guilds;if(this.user.bot)return;this.ws.send({op:12,d:guilds instanceof Collection?guilds.keyArray():guilds.map(function(g){return g.id;})});};/**
   * Caches a user, or obtains it from the cache if it's already cached.
   * <warn>This is only available when using a bot account.</warn>
   * @param {string} id The ID of the user to obtain
   * @returns {Promise<User>}
   */Client.prototype.fetchUser=function fetchUser(id){if(this.users.has(id))return Promise.resolve(this.users.get(id));return this.rest.methods.getUser(id);};/**
   * Fetches an invite object from an invite code.
   * @param {InviteResolvable} invite An invite code or URL
   * @returns {Promise<Invite>}
   */Client.prototype.fetchInvite=function fetchInvite(invite){var code=this.resolver.resolveInviteCode(invite);return this.rest.methods.getInvite(code);};/**
   * Fetch a webhook by ID.
   * @param {string} id ID of the webhook
   * @param {string} [token] Token for the webhook
   * @returns {Promise<Webhook>}
   */Client.prototype.fetchWebhook=function fetchWebhook(id,token){return this.rest.methods.getWebhook(id,token);};/**
   * Sweeps all channels' messages and removes the ones older than the max message lifetime.
   * If the message has been edited, the time of the edit is used rather than the time of the original message.
   * @param {number} [lifetime=this.options.messageCacheLifetime] Messages that are older than this (in seconds)
   * will be removed from the caches. The default is based on the client's `messageCacheLifetime` option.
   * @returns {number} Amount of messages that were removed from the caches,
   * or -1 if the message cache lifetime is unlimited
   */Client.prototype.sweepMessages=function sweepMessages(){var lifetime=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options.messageCacheLifetime;if(typeof lifetime!=='number'||isNaN(lifetime))throw new TypeError('The lifetime must be a number.');if(lifetime<=0){this.emit('debug','Didn\'t sweep messages - lifetime is unlimited');return-1;}var lifetimeMs=lifetime*1000;var now=Date.now();var channels=0;var messages=0;for(var _iterator55=this.channels.values(),_isArray55=Array.isArray(_iterator55),_i56=0,_iterator55=_isArray55?_iterator55:_iterator55[Symbol.iterator]();;){var _ref68;if(_isArray55){if(_i56>=_iterator55.length)break;_ref68=_iterator55[_i56++];}else{_i56=_iterator55.next();if(_i56.done)break;_ref68=_i56.value;}var channel=_ref68;if(!channel.messages)continue;channels++;for(var _iterator56=channel.messages.values(),_isArray56=Array.isArray(_iterator56),_i57=0,_iterator56=_isArray56?_iterator56:_iterator56[Symbol.iterator]();;){var _ref69;if(_isArray56){if(_i57>=_iterator56.length)break;_ref69=_iterator56[_i57++];}else{_i57=_iterator56.next();if(_i57.done)break;_ref69=_i57.value;}var message=_ref69;if(now-(message.editedTimestamp||message.createdTimestamp)>lifetimeMs){channel.messages.delete(message.id);messages++;}}}this.emit('debug','Swept '+messages+' messages older than '+lifetime+' seconds in '+channels+' text-based channels');return messages;};/**
   * Gets the bot's OAuth2 application.
   * <warn>This is only available when using a bot account.</warn>
   * @returns {Promise<ClientOAuth2Application>}
   */Client.prototype.fetchApplication=function fetchApplication(){if(!this.user.bot)throw new Error(Constants.Errors.NO_BOT_ACCOUNT);return this.rest.methods.getMyApplication();};/**
   * Generate an invite link for your bot
   * @param {PermissionResolvable[]|number} [permissions] An array of permissions to request
   * @returns {Promise<string>} The invite link
   * @example
   * client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
   *   .then(link => {
   *     console.log(`Generated bot invite link: ${link}`);
   *   });
   */Client.prototype.generateInvite=function generateInvite(permissions){if(permissions){if(permissions instanceof Array)permissions=this.resolver.resolvePermissions(permissions);}else{permissions=0;}return this.fetchApplication().then(function(application){return'https://discordapp.com/oauth2/authorize?client_id='+application.id+'&permissions='+permissions+'&scope=bot';});};/**
   * Sets a timeout that will be automatically cancelled if the client is destroyed.
   * @param {Function} fn Function to execute
   * @param {number} delay Time to wait before executing (in milliseconds)
   * @param {...*} args Arguments for the function
   * @returns {Timeout}
   */Client.prototype.setTimeout=function(_setTimeout){function setTimeout(_x43,_x44){return _setTimeout.apply(this,arguments);}setTimeout.toString=function(){return _setTimeout.toString();};return setTimeout;}(function(fn,delay){var _this42=this;for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}var timeout=setTimeout.apply(undefined,[function(){fn();_this42._timeouts.delete(timeout);},delay].concat(args));this._timeouts.add(timeout);return timeout;});/**
   * Clears a timeout
   * @param {Timeout} timeout Timeout to cancel
   */Client.prototype.clearTimeout=function(_clearTimeout2){function clearTimeout(_x45){return _clearTimeout2.apply(this,arguments);}clearTimeout.toString=function(){return _clearTimeout2.toString();};return clearTimeout;}(function(timeout){clearTimeout(timeout);this._timeouts.delete(timeout);});/**
   * Sets an interval that will be automatically cancelled if the client is destroyed.
   * @param {Function} fn Function to execute
   * @param {number} delay Time to wait before executing (in milliseconds)
   * @param {...*} args Arguments for the function
   * @returns {Timeout}
   */Client.prototype.setInterval=function(_setInterval){function setInterval(_x46,_x47){return _setInterval.apply(this,arguments);}setInterval.toString=function(){return _setInterval.toString();};return setInterval;}(function(fn,delay){for(var _len3=arguments.length,args=Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++){args[_key3-2]=arguments[_key3];}var interval=setInterval.apply(undefined,[fn,delay].concat(args));this._intervals.add(interval);return interval;});/**
   * Clears an interval
   * @param {Timeout} interval Interval to cancel
   */Client.prototype.clearInterval=function(_clearInterval){function clearInterval(_x48){return _clearInterval.apply(this,arguments);}clearInterval.toString=function(){return _clearInterval.toString();};return clearInterval;}(function(interval){clearInterval(interval);this._intervals.delete(interval);});Client.prototype._pong=function _pong(startTime){this.pings.unshift(Date.now()-startTime);if(this.pings.length>3)this.pings.length=3;this.ws.lastHeartbeatAck=true;};Client.prototype._setPresence=function _setPresence(id,presence){if(this.presences.get(id)){this.presences.get(id).update(presence);return;}this.presences.set(id,new Presence(presence));};Client.prototype._eval=function _eval(script){return eval(script);};Client.prototype._validateOptions=function _validateOptions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;if(typeof options.shardCount!=='number'||isNaN(options.shardCount)){throw new TypeError('The shardCount option must be a number.');}if(typeof options.shardId!=='number'||isNaN(options.shardId)){throw new TypeError('The shardId option must be a number.');}if(options.shardCount<0)throw new RangeError('The shardCount option must be at least 0.');if(options.shardId<0)throw new RangeError('The shardId option must be at least 0.');if(options.shardId!==0&&options.shardId>=options.shardCount){throw new RangeError('The shardId option must be less than shardCount.');}if(typeof options.messageCacheMaxSize!=='number'||isNaN(options.messageCacheMaxSize)){throw new TypeError('The messageCacheMaxSize option must be a number.');}if(typeof options.messageCacheLifetime!=='number'||isNaN(options.messageCacheLifetime)){throw new TypeError('The messageCacheLifetime option must be a number.');}if(typeof options.messageSweepInterval!=='number'||isNaN(options.messageSweepInterval)){throw new TypeError('The messageSweepInterval option must be a number.');}if(typeof options.fetchAllMembers!=='boolean'){throw new TypeError('The fetchAllMembers option must be a boolean.');}if(typeof options.disableEveryone!=='boolean'){throw new TypeError('The disableEveryone option must be a boolean.');}if(typeof options.restWsBridgeTimeout!=='number'||isNaN(options.restWsBridgeTimeout)){throw new TypeError('The restWsBridgeTimeout option must be a number.');}if(!(options.disabledEvents instanceof Array))throw new TypeError('The disabledEvents option must be an Array.');};_createClass(Client,[{key:'status',get:function get(){return this.ws.status;}/**
   * The uptime for the logged in Client.
   * @type {?number}
   * @readonly
   */},{key:'uptime',get:function get(){return this.readyAt?Date.now()-this.readyAt:null;}/**
   * The average heartbeat ping of the websocket
   * @type {number}
   * @readonly
   */},{key:'ping',get:function get(){return this.pings.reduce(function(prev,p){return prev+p;},0)/this.pings.length;}/**
   * Returns a collection, mapping guild ID to voice connections.
   * @type {Collection<string, VoiceConnection>}
   * @readonly
   */},{key:'voiceConnections',get:function get(){if(this.browser)return new Collection();return this.voice.connections;}/**
   * The emojis that the client can use. Mapped by emoji ID.
   * @type {Collection<string, Emoji>}
   * @readonly
   */},{key:'emojis',get:function get(){var emojis=new Collection();for(var _iterator57=this.guilds.values(),_isArray57=Array.isArray(_iterator57),_i58=0,_iterator57=_isArray57?_iterator57:_iterator57[Symbol.iterator]();;){var _ref70;if(_isArray57){if(_i58>=_iterator57.length)break;_ref70=_iterator57[_i58++];}else{_i58=_iterator57.next();if(_i58.done)break;_ref70=_i58.value;}var guild=_ref70;for(var _iterator58=guild.emojis.values(),_isArray58=Array.isArray(_iterator58),_i59=0,_iterator58=_isArray58?_iterator58:_iterator58[Symbol.iterator]();;){var _ref71;if(_isArray58){if(_i59>=_iterator58.length)break;_ref71=_iterator58[_i59++];}else{_i59=_iterator58.next();if(_i59.done)break;_ref71=_i59.value;}var emoji=_ref71;emojis.set(emoji.id,emoji);}}return emojis;}/**
   * The timestamp that the client was last ready at
   * @type {?number}
   * @readonly
   */},{key:'readyTimestamp',get:function get(){return this.readyAt?this.readyAt.getTime():null;}/**
   * Whether the client is in a browser environment
   * @type {boolean}
   * @readonly
   */},{key:'browser',get:function get(){return typeof window!=='undefined';}}]);return Client;}(EventEmitter);module.exports=Client;/**
 * Emitted for general warnings
 * @event Client#warn
 * @param {string} info The warning
 *//**
 * Emitted for general debugging information
 * @event Client#debug
 * @param {string} info The debug information
 *//* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(24));/***/},/* 56 *//***/function(module,exports,__webpack_require__){var Webhook=__webpack_require__(19);var RESTManager=__webpack_require__(51);var ClientDataResolver=__webpack_require__(50);var mergeDefault=__webpack_require__(54);var Constants=__webpack_require__(0);/**
 * The Webhook Client
 * @extends {Webhook}
 */var WebhookClient=function(_Webhook){_inherits(WebhookClient,_Webhook);/**
   * @param {string} id The id of the webhook.
   * @param {string} token the token of the webhook.
   * @param {ClientOptions} [options] Options for the client
   * @example
   * // create a new webhook and send a message
   * let hook = new Discord.WebhookClient('1234', 'abcdef')
   * hook.sendMessage('This will send a message').catch(console.error)
   */function WebhookClient(id,token,options){_classCallCheck(this,WebhookClient);/**
     * The options the client was instantiated with
     * @type {ClientOptions}
     */var _this43=_possibleConstructorReturn(this,_Webhook.call(this,null,id,token));_this43.options=mergeDefault(Constants.DefaultOptions,options);/**
     * The REST manager of the client
     * @type {RESTManager}
     * @private
     */_this43.rest=new RESTManager(_this43);/**
     * The Data Resolver of the Client
     * @type {ClientDataResolver}
     * @private
     */_this43.resolver=new ClientDataResolver(_this43);return _this43;}return WebhookClient;}(Webhook);module.exports=WebhookClient;/***/},/* 57 *//***/function(module,exports,__webpack_require__){module.exports={Client:__webpack_require__(55),WebhookClient:__webpack_require__(56),Shard:__webpack_require__(60),ShardClientUtil:__webpack_require__(61),ShardingManager:__webpack_require__(62),Collection:__webpack_require__(3),splitMessage:__webpack_require__(43),escapeMarkdown:__webpack_require__(15),fetchRecommendedShards:__webpack_require__(59),Channel:__webpack_require__(9),ClientOAuth2Application:__webpack_require__(28),ClientUser:__webpack_require__(29),DMChannel:__webpack_require__(30),Emoji:__webpack_require__(10),EvaluatedPermissions:__webpack_require__(16),Game:__webpack_require__(7).Game,GroupDMChannel:__webpack_require__(31),Guild:__webpack_require__(17),GuildChannel:__webpack_require__(13),GuildMember:__webpack_require__(14),Invite:__webpack_require__(32),Message:__webpack_require__(11),MessageAttachment:__webpack_require__(33),MessageCollector:__webpack_require__(34),MessageEmbed:__webpack_require__(35),MessageReaction:__webpack_require__(36),OAuth2Application:__webpack_require__(37),PartialGuild:__webpack_require__(38),PartialGuildChannel:__webpack_require__(39),PermissionOverwrites:__webpack_require__(40),Presence:__webpack_require__(7).Presence,ReactionEmoji:__webpack_require__(18),RichEmbed:__webpack_require__(58),Role:__webpack_require__(8),TextChannel:__webpack_require__(41),User:__webpack_require__(6),VoiceChannel:__webpack_require__(42),Webhook:__webpack_require__(19),version:__webpack_require__(27).version,Constants:__webpack_require__(0)};if(typeof window!=='undefined')window.Discord=module.exports;// eslint-disable-line no-undef
/***/},/* 58 *//***/function(module,exports){/**
 * A rich embed to be sent with a message
 * @param {Object} [data] Data to set in the rich embed
 */var RichEmbed=function(){function RichEmbed(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,RichEmbed);/**
     * Title for this Embed
     * @type {string}
     */this.title=data.title;/**
     * Description for this Embed
     * @type {string}
     */this.description=data.description;/**
     * URL for this Embed
     * @type {string}
     */this.url=data.url;/**
     * Color for this Embed
     * @type {number}
     */this.color=data.color;/**
     * Author for this Embed
     * @type {Object}
     */this.author=data.author;/**
     * Timestamp for this Embed
     * @type {Date}
     */this.timestamp=data.timestamp;/**
     * Fields for this Embed
     * @type {Object[]}
     */this.fields=data.fields||[];/**
     * Thumbnail for this Embed
     * @type {Object}
     */this.thumbnail=data.thumbnail;/**
     * Image for this Embed
     * @type {Object}
     */this.image=data.image;/**
     * Footer for this Embed
     * @type {Object}
     */this.footer=data.footer;}/**
   * Sets the title of this embed
   * @param {StringResolvable} title The title
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setTitle=function setTitle(title){title=resolveString(title);if(title.length>256)throw new RangeError('RichEmbed titles may not exceed 256 characters.');this.title=title;return this;};/**
   * Sets the description of this embed
   * @param {StringResolvable} description The description
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setDescription=function setDescription(description){description=resolveString(description);if(description.length>2048)throw new RangeError('RichEmbed descriptions may not exceed 2048 characters.');this.description=description;return this;};/**
   * Sets the URL of this embed
   * @param {string} url The URL
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setURL=function setURL(url){this.url=url;return this;};/**
   * Sets the color of this embed
   * @param {string|number|number[]} color The color to set
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setColor=function setColor(color){var radix=10;if(color instanceof Array){color=(color[0]<<16)+(color[1]<<8)+color[2];}else if(typeof color==='string'&&color.startsWith('#')){radix=16;color=color.replace('#','');}color=parseInt(color,radix);if(color<0||color>0xFFFFFF){throw new RangeError('RichEmbed color must be within the range 0 - 16777215 (0xFFFFFF).');}else if(color&&isNaN(color)){throw new TypeError('Unable to convert RichEmbed color to a number.');}this.color=color;return this;};/**
   * Sets the author of this embed
   * @param {StringResolvable} name The name of the author
   * @param {string} [icon] The icon URL of the author
   * @param {string} [url] The URL of the author
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setAuthor=function setAuthor(name,icon,url){this.author={name:resolveString(name),icon_url:icon,url:url};return this;};/**
   * Sets the timestamp of this embed
   * @param {Date} [timestamp=current date] The timestamp
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setTimestamp=function setTimestamp(){var timestamp=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Date();this.timestamp=timestamp;return this;};/**
   * Adds a field to the embed (max 25)
   * @param {StringResolvable} name The name of the field
   * @param {StringResolvable} value The value of the field
   * @param {boolean} [inline=false] Set the field to display inline
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.addField=function addField(name,value){var inline=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(this.fields.length>=25)throw new RangeError('RichEmbeds may not exceed 25 fields.');name=resolveString(name);if(name.length>256)throw new RangeError('RichEmbed field names may not exceed 256 characters.');value=resolveString(value);if(value.length>1024)throw new RangeError('RichEmbed field values may not exceed 1024 characters.');this.fields.push({name:String(name),value:value,inline:inline});return this;};/**
   * Set the thumbnail of this embed
   * @param {string} url The URL of the thumbnail
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setThumbnail=function setThumbnail(url){this.thumbnail={url:url};return this;};/**
   * Set the image of this embed
   * @param {string} url The URL of the thumbnail
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setImage=function setImage(url){this.image={url:url};return this;};/**
   * Sets the footer of this embed
   * @param {StringResolvable} text The text of the footer
   * @param {string} [icon] The icon URL of the footer
   * @returns {RichEmbed} This embed
   */RichEmbed.prototype.setFooter=function setFooter(text,icon){text=resolveString(text);if(text.length>2048)throw new RangeError('RichEmbed footer text may not exceed 2048 characters.');this.footer={text:text,icon_url:icon};return this;};return RichEmbed;}();module.exports=RichEmbed;function resolveString(data){if(typeof data==='string')return data;if(data instanceof Array)return data.join('\n');return String(data);}/***/},/* 59 *//***/function(module,exports,__webpack_require__){var superagent=__webpack_require__(25);var botGateway=__webpack_require__(0).Endpoints.botGateway;/**
 * Gets the recommended shard count from Discord
 * @param {number} token Discord auth token
 * @returns {Promise<number>} the recommended number of shards
 */module.exports=function fetchRecommendedShards(token){return new Promise(function(resolve,reject){if(!token)throw new Error('A token must be provided.');superagent.get(botGateway).set('Authorization','Bot '+token.replace(/^Bot\s*/i,'')).end(function(err,res){if(err)reject(err);resolve(res.body.shards);});});};/***/},/* 60 *//***/function(module,exports){/* (ignored) *//***/},/* 61 *//***/function(module,exports){/* (ignored) *//***/},/* 62 *//***/function(module,exports){/* (ignored) *//***/},/* 63 *//***/function(module,exports,__webpack_require__){"use strict";exports.byteLength=byteLength;exports.toByteArray=toByteArray;exports.fromByteArray=fromByteArray;var lookup=[];var revLookup=[];var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array;var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';for(var i=0,len=code.length;i<len;++i){lookup[i]=code[i];revLookup[code.charCodeAt(i)]=i;}revLookup['-'.charCodeAt(0)]=62;revLookup['_'.charCodeAt(0)]=63;function placeHoldersCount(b64){var len=b64.length;if(len%4>0){throw new Error('Invalid string. Length must be a multiple of 4');}// the number of equal signs (place holders)
// if there are two placeholders, than the two characters before it
// represent one byte
// if there is only one, then the three characters before it represent 2 bytes
// this is just a cheap hack to not do indexOf twice
return b64[len-2]==='='?2:b64[len-1]==='='?1:0;}function byteLength(b64){// base64 is 4/3 + up to two characters of the original data
return b64.length*3/4-placeHoldersCount(b64);}function toByteArray(b64){var i,j,l,tmp,placeHolders,arr;var len=b64.length;placeHolders=placeHoldersCount(b64);arr=new Arr(len*3/4-placeHolders);// if there are placeholders, only get up to the last complete 4 chars
l=placeHolders>0?len-4:len;var L=0;for(i=0,j=0;i<l;i+=4,j+=3){tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)];arr[L++]=tmp>>16&0xFF;arr[L++]=tmp>>8&0xFF;arr[L++]=tmp&0xFF;}if(placeHolders===2){tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4;arr[L++]=tmp&0xFF;}else if(placeHolders===1){tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2;arr[L++]=tmp>>8&0xFF;arr[L++]=tmp&0xFF;}return arr;}function tripletToBase64(num){return lookup[num>>18&0x3F]+lookup[num>>12&0x3F]+lookup[num>>6&0x3F]+lookup[num&0x3F];}function encodeChunk(uint8,start,end){var tmp;var output=[];for(var i=start;i<end;i+=3){tmp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output.push(tripletToBase64(tmp));}return output.join('');}function fromByteArray(uint8){var tmp;var len=uint8.length;var extraBytes=len%3;// if we have 1 byte left, pad 2 bytes
var output='';var parts=[];var maxChunkLength=16383;// must be multiple of 3
// go through the array every three bytes, we'll deal with trailing stuff later
for(var i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,i+maxChunkLength>len2?len2:i+maxChunkLength));}// pad the end with zeros, but make sure to not forget the extra bytes
if(extraBytes===1){tmp=uint8[len-1];output+=lookup[tmp>>2];output+=lookup[tmp<<4&0x3F];output+='==';}else if(extraBytes===2){tmp=(uint8[len-2]<<8)+uint8[len-1];output+=lookup[tmp>>10];output+=lookup[tmp>>4&0x3F];output+=lookup[tmp<<2&0x3F];output+='=';}parts.push(output);return parts.join('');}/***/},/* 64 *//***/function(module,exports,__webpack_require__){/**
 * Expose `Emitter`.
 */if(true){module.exports=Emitter;}/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */function Emitter(obj){if(obj)return mixin(obj);};/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}return obj;}/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks['$'+event]=this._callbacks['$'+event]||[]).push(fn);return this;};/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments);}on.fn=fn;this.on(event,on);return this;};/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};// all
if(0==arguments.length){this._callbacks={};return this;}// specific event
var callbacks=this._callbacks['$'+event];if(!callbacks)return this;// remove all handlers
if(1==arguments.length){delete this._callbacks['$'+event];return this;}// remove specific handler
var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break;}}return this;};/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks['$'+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}return this;};/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks['$'+event]||[];};/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};/***/},/* 65 *//***/function(module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=-7;var i=isLE?nBytes-1:0;var d=isLE?-1:1;var s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity;}else{m=m+Math.pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*Math.pow(2,e-mLen);};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0;var i=isLE?0:nBytes-1;var d=isLE?1:-1;var s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax;}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*Math.pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias;}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0;}}for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}buffer[offset+i-d]|=s*128;};/***/},/* 66 *//***/function(module,exports){var toString={}.toString;module.exports=Array.isArray||function(arr){return toString.call(arr)=='[object Array]';};/***/},/* 67 *//***/function(module,exports,__webpack_require__){"use strict";// Top level file is just a mixin of submodules & constants
var assign=__webpack_require__(5).assign;var deflate=__webpack_require__(68);var inflate=__webpack_require__(69);var constants=__webpack_require__(46);var pako={};assign(pako,deflate,inflate,constants);module.exports=pako;/***/},/* 68 *//***/function(module,exports,__webpack_require__){"use strict";var zlib_deflate=__webpack_require__(70);var utils=__webpack_require__(5);var strings=__webpack_require__(44);var msg=__webpack_require__(22);var ZStream=__webpack_require__(48);var toString=Object.prototype.toString;/* Public constants ==========================================================*//* ===========================================================================*/var Z_NO_FLUSH=0;var Z_FINISH=4;var Z_OK=0;var Z_STREAM_END=1;var Z_SYNC_FLUSH=2;var Z_DEFAULT_COMPRESSION=-1;var Z_DEFAULT_STRATEGY=0;var Z_DEFLATED=8;/* ===========================================================================*//**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **//* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **//**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **//**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **//**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **//**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/function Deflate(options){if(!(this instanceof Deflate))return new Deflate(options);this.options=utils.assign({level:Z_DEFAULT_COMPRESSION,method:Z_DEFLATED,chunkSize:16384,windowBits:15,memLevel:8,strategy:Z_DEFAULT_STRATEGY,to:''},options||{});var opt=this.options;if(opt.raw&&opt.windowBits>0){opt.windowBits=-opt.windowBits;}else if(opt.gzip&&opt.windowBits>0&&opt.windowBits<16){opt.windowBits+=16;}this.err=0;// error code, if happens (0 = Z_OK)
this.msg='';// error message
this.ended=false;// used to avoid multiple onEnd() calls
this.chunks=[];// chunks of compressed data
this.strm=new ZStream();this.strm.avail_out=0;var status=zlib_deflate.deflateInit2(this.strm,opt.level,opt.method,opt.windowBits,opt.memLevel,opt.strategy);if(status!==Z_OK){throw new Error(msg[status]);}if(opt.header){zlib_deflate.deflateSetHeader(this.strm,opt.header);}if(opt.dictionary){var dict;// Convert data if needed
if(typeof opt.dictionary==='string'){// If we need to compress text, change encoding to utf8.
dict=strings.string2buf(opt.dictionary);}else if(toString.call(opt.dictionary)==='[object ArrayBuffer]'){dict=new Uint8Array(opt.dictionary);}else{dict=opt.dictionary;}status=zlib_deflate.deflateSetDictionary(this.strm,dict);if(status!==Z_OK){throw new Error(msg[status]);}this._dict_set=true;}}/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/Deflate.prototype.push=function(data,mode){var strm=this.strm;var chunkSize=this.options.chunkSize;var status,_mode;if(this.ended){return false;}_mode=mode===~~mode?mode:mode===true?Z_FINISH:Z_NO_FLUSH;// Convert data if needed
if(typeof data==='string'){// If we need to compress text, change encoding to utf8.
strm.input=strings.string2buf(data);}else if(toString.call(data)==='[object ArrayBuffer]'){strm.input=new Uint8Array(data);}else{strm.input=data;}strm.next_in=0;strm.avail_in=strm.input.length;do{if(strm.avail_out===0){strm.output=new utils.Buf8(chunkSize);strm.next_out=0;strm.avail_out=chunkSize;}status=zlib_deflate.deflate(strm,_mode);/* no bad return value */if(status!==Z_STREAM_END&&status!==Z_OK){this.onEnd(status);this.ended=true;return false;}if(strm.avail_out===0||strm.avail_in===0&&(_mode===Z_FINISH||_mode===Z_SYNC_FLUSH)){if(this.options.to==='string'){this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output,strm.next_out)));}else{this.onData(utils.shrinkBuf(strm.output,strm.next_out));}}}while((strm.avail_in>0||strm.avail_out===0)&&status!==Z_STREAM_END);// Finalize on the last chunk.
if(_mode===Z_FINISH){status=zlib_deflate.deflateEnd(this.strm);this.onEnd(status);this.ended=true;return status===Z_OK;}// callback interim results if Z_SYNC_FLUSH.
if(_mode===Z_SYNC_FLUSH){this.onEnd(Z_OK);strm.avail_out=0;return true;}return true;};/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/Deflate.prototype.onData=function(chunk){this.chunks.push(chunk);};/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/Deflate.prototype.onEnd=function(status){// On success - join
if(status===Z_OK){if(this.options.to==='string'){this.result=this.chunks.join('');}else{this.result=utils.flattenChunks(this.chunks);}}this.chunks=[];this.err=status;this.msg=this.strm.msg;};/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/function deflate(input,options){var deflator=new Deflate(options);deflator.push(input,true);// That will never happens, if you don't cheat with options :)
if(deflator.err){throw deflator.msg||msg[deflator.err];}return deflator.result;}/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/function deflateRaw(input,options){options=options||{};options.raw=true;return deflate(input,options);}/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/function gzip(input,options){options=options||{};options.gzip=true;return deflate(input,options);}exports.Deflate=Deflate;exports.deflate=deflate;exports.deflateRaw=deflateRaw;exports.gzip=gzip;/***/},/* 69 *//***/function(module,exports,__webpack_require__){"use strict";var zlib_inflate=__webpack_require__(73);var utils=__webpack_require__(5);var strings=__webpack_require__(44);var c=__webpack_require__(46);var msg=__webpack_require__(22);var ZStream=__webpack_require__(48);var GZheader=__webpack_require__(71);var toString=Object.prototype.toString;/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **//* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **//**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **//**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **//**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **//**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/function Inflate(options){if(!(this instanceof Inflate))return new Inflate(options);this.options=utils.assign({chunkSize:16384,windowBits:0,to:''},options||{});var opt=this.options;// Force window size for `raw` data, if not set directly,
// because we have no header for autodetect.
if(opt.raw&&opt.windowBits>=0&&opt.windowBits<16){opt.windowBits=-opt.windowBits;if(opt.windowBits===0){opt.windowBits=-15;}}// If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
if(opt.windowBits>=0&&opt.windowBits<16&&!(options&&options.windowBits)){opt.windowBits+=32;}// Gzip header has no info about windows size, we can do autodetect only
// for deflate. So, if window size not set, force it to max when gzip possible
if(opt.windowBits>15&&opt.windowBits<48){// bit 3 (16) -> gzipped data
// bit 4 (32) -> autodetect gzip/deflate
if((opt.windowBits&15)===0){opt.windowBits|=15;}}this.err=0;// error code, if happens (0 = Z_OK)
this.msg='';// error message
this.ended=false;// used to avoid multiple onEnd() calls
this.chunks=[];// chunks of compressed data
this.strm=new ZStream();this.strm.avail_out=0;var status=zlib_inflate.inflateInit2(this.strm,opt.windowBits);if(status!==c.Z_OK){throw new Error(msg[status]);}this.header=new GZheader();zlib_inflate.inflateGetHeader(this.strm,this.header);}/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/Inflate.prototype.push=function(data,mode){var strm=this.strm;var chunkSize=this.options.chunkSize;var dictionary=this.options.dictionary;var status,_mode;var next_out_utf8,tail,utf8str;var dict;// Flag to properly process Z_BUF_ERROR on testing inflate call
// when we check that all output data was flushed.
var allowBufError=false;if(this.ended){return false;}_mode=mode===~~mode?mode:mode===true?c.Z_FINISH:c.Z_NO_FLUSH;// Convert data if needed
if(typeof data==='string'){// Only binary strings can be decompressed on practice
strm.input=strings.binstring2buf(data);}else if(toString.call(data)==='[object ArrayBuffer]'){strm.input=new Uint8Array(data);}else{strm.input=data;}strm.next_in=0;strm.avail_in=strm.input.length;do{if(strm.avail_out===0){strm.output=new utils.Buf8(chunkSize);strm.next_out=0;strm.avail_out=chunkSize;}status=zlib_inflate.inflate(strm,c.Z_NO_FLUSH);/* no bad return value */if(status===c.Z_NEED_DICT&&dictionary){// Convert data if needed
if(typeof dictionary==='string'){dict=strings.string2buf(dictionary);}else if(toString.call(dictionary)==='[object ArrayBuffer]'){dict=new Uint8Array(dictionary);}else{dict=dictionary;}status=zlib_inflate.inflateSetDictionary(this.strm,dict);}if(status===c.Z_BUF_ERROR&&allowBufError===true){status=c.Z_OK;allowBufError=false;}if(status!==c.Z_STREAM_END&&status!==c.Z_OK){this.onEnd(status);this.ended=true;return false;}if(strm.next_out){if(strm.avail_out===0||status===c.Z_STREAM_END||strm.avail_in===0&&(_mode===c.Z_FINISH||_mode===c.Z_SYNC_FLUSH)){if(this.options.to==='string'){next_out_utf8=strings.utf8border(strm.output,strm.next_out);tail=strm.next_out-next_out_utf8;utf8str=strings.buf2string(strm.output,next_out_utf8);// move tail
strm.next_out=tail;strm.avail_out=chunkSize-tail;if(tail){utils.arraySet(strm.output,strm.output,next_out_utf8,tail,0);}this.onData(utf8str);}else{this.onData(utils.shrinkBuf(strm.output,strm.next_out));}}}// When no more input data, we should check that internal inflate buffers
// are flushed. The only way to do it when avail_out = 0 - run one more
// inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
// Here we set flag to process this error properly.
//
// NOTE. Deflate does not return error in this case and does not needs such
// logic.
if(strm.avail_in===0&&strm.avail_out===0){allowBufError=true;}}while((strm.avail_in>0||strm.avail_out===0)&&status!==c.Z_STREAM_END);if(status===c.Z_STREAM_END){_mode=c.Z_FINISH;}// Finalize on the last chunk.
if(_mode===c.Z_FINISH){status=zlib_inflate.inflateEnd(this.strm);this.onEnd(status);this.ended=true;return status===c.Z_OK;}// callback interim results if Z_SYNC_FLUSH.
if(_mode===c.Z_SYNC_FLUSH){this.onEnd(c.Z_OK);strm.avail_out=0;return true;}return true;};/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/Inflate.prototype.onData=function(chunk){this.chunks.push(chunk);};/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/Inflate.prototype.onEnd=function(status){// On success - join
if(status===c.Z_OK){if(this.options.to==='string'){// Glue & convert here, until we teach pako to send
// utf8 alligned strings to onData
this.result=this.chunks.join('');}else{this.result=utils.flattenChunks(this.chunks);}}this.chunks=[];this.err=status;this.msg=this.strm.msg;};/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/function inflate(input,options){var inflator=new Inflate(options);inflator.push(input,true);// That will never happens, if you don't cheat with options :)
if(inflator.err){throw inflator.msg||msg[inflator.err];}return inflator.result;}/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/function inflateRaw(input,options){options=options||{};options.raw=true;return inflate(input,options);}/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/exports.Inflate=Inflate;exports.inflate=inflate;exports.inflateRaw=inflateRaw;exports.ungzip=inflate;/***/},/* 70 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(5);var trees=__webpack_require__(75);var adler32=__webpack_require__(45);var crc32=__webpack_require__(47);var msg=__webpack_require__(22);/* Public constants ==========================================================*//* ===========================================================================*//* Allowed flush values; see deflate() and inflate() below for details */var Z_NO_FLUSH=0;var Z_PARTIAL_FLUSH=1;//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH=3;var Z_FINISH=4;var Z_BLOCK=5;//var Z_TREES         = 6;
/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */var Z_OK=0;var Z_STREAM_END=1;//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR=-2;var Z_DATA_ERROR=-3;//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR=-5;//var Z_VERSION_ERROR = -6;
/* compression levels *///var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION=-1;var Z_FILTERED=1;var Z_HUFFMAN_ONLY=2;var Z_RLE=3;var Z_FIXED=4;var Z_DEFAULT_STRATEGY=0;/* Possible values of the data_type field (though see inflate()) *///var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN=2;/* The deflate compression method */var Z_DEFLATED=8;/*============================================================================*/var MAX_MEM_LEVEL=9;/* Maximum value for memLevel in deflateInit2 */var MAX_WBITS=15;/* 32K LZ77 window */var DEF_MEM_LEVEL=8;var LENGTH_CODES=29;/* number of length codes, not counting the special END_BLOCK code */var LITERALS=256;/* number of literal bytes 0..255 */var L_CODES=LITERALS+1+LENGTH_CODES;/* number of Literal or Length codes, including the END_BLOCK code */var D_CODES=30;/* number of distance codes */var BL_CODES=19;/* number of codes used to transfer the bit lengths */var HEAP_SIZE=2*L_CODES+1;/* maximum heap size */var MAX_BITS=15;/* All codes must not exceed MAX_BITS bits */var MIN_MATCH=3;var MAX_MATCH=258;var MIN_LOOKAHEAD=MAX_MATCH+MIN_MATCH+1;var PRESET_DICT=0x20;var INIT_STATE=42;var EXTRA_STATE=69;var NAME_STATE=73;var COMMENT_STATE=91;var HCRC_STATE=103;var BUSY_STATE=113;var FINISH_STATE=666;var BS_NEED_MORE=1;/* block not completed, need more input or more output */var BS_BLOCK_DONE=2;/* block flush performed */var BS_FINISH_STARTED=3;/* finish started, need only more output at next deflate */var BS_FINISH_DONE=4;/* finish done, accept no more input or output */var OS_CODE=0x03;// Unix :) . Don't detect, use this default.
function err(strm,errorCode){strm.msg=msg[errorCode];return errorCode;}function rank(f){return(f<<1)-(f>4?9:0);}function zero(buf){var len=buf.length;while(--len>=0){buf[len]=0;}}/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */function flush_pending(strm){var s=strm.state;//_tr_flush_bits(s);
var len=s.pending;if(len>strm.avail_out){len=strm.avail_out;}if(len===0){return;}utils.arraySet(strm.output,s.pending_buf,s.pending_out,len,strm.next_out);strm.next_out+=len;s.pending_out+=len;strm.total_out+=len;strm.avail_out-=len;s.pending-=len;if(s.pending===0){s.pending_out=0;}}function flush_block_only(s,last){trees._tr_flush_block(s,s.block_start>=0?s.block_start:-1,s.strstart-s.block_start,last);s.block_start=s.strstart;flush_pending(s.strm);}function put_byte(s,b){s.pending_buf[s.pending++]=b;}/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */function putShortMSB(s,b){//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
s.pending_buf[s.pending++]=b>>>8&0xff;s.pending_buf[s.pending++]=b&0xff;}/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */function read_buf(strm,buf,start,size){var len=strm.avail_in;if(len>size){len=size;}if(len===0){return 0;}strm.avail_in-=len;// zmemcpy(buf, strm->next_in, len);
utils.arraySet(buf,strm.input,strm.next_in,len,start);if(strm.state.wrap===1){strm.adler=adler32(strm.adler,buf,len,start);}else if(strm.state.wrap===2){strm.adler=crc32(strm.adler,buf,len,start);}strm.next_in+=len;strm.total_in+=len;return len;}/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */function longest_match(s,cur_match){var chain_length=s.max_chain_length;/* max hash chain length */var scan=s.strstart;/* current string */var match;/* matched string */var len;/* length of current match */var best_len=s.prev_length;/* best match length so far */var nice_match=s.nice_match;/* stop if match long enough */var limit=s.strstart>s.w_size-MIN_LOOKAHEAD?s.strstart-(s.w_size-MIN_LOOKAHEAD):0/*NIL*/;var _win=s.window;// shortcut
var wmask=s.w_mask;var prev=s.prev;/* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */var strend=s.strstart+MAX_MATCH;var scan_end1=_win[scan+best_len-1];var scan_end=_win[scan+best_len];/* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */// Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
/* Do not waste too much time if we already have a good match: */if(s.prev_length>=s.good_match){chain_length>>=2;}/* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */if(nice_match>s.lookahead){nice_match=s.lookahead;}// Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
do{// Assert(cur_match < s->strstart, "no future");
match=cur_match;/* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */if(_win[match+best_len]!==scan_end||_win[match+best_len-1]!==scan_end1||_win[match]!==_win[scan]||_win[++match]!==_win[scan+1]){continue;}/* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */scan+=2;match++;// Assert(*scan == *match, "match[2]?");
/* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */do{/*jshint noempty:false*/}while(_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&scan<strend);// Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
len=MAX_MATCH-(strend-scan);scan=strend-MAX_MATCH;if(len>best_len){s.match_start=cur_match;best_len=len;if(len>=nice_match){break;}scan_end1=_win[scan+best_len-1];scan_end=_win[scan+best_len];}}while((cur_match=prev[cur_match&wmask])>limit&&--chain_length!==0);if(best_len<=s.lookahead){return best_len;}return s.lookahead;}/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */function fill_window(s){var _w_size=s.w_size;var p,n,m,more,str;//Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
do{more=s.window_size-s.lookahead-s.strstart;// JS ints have 32 bit, block below not needed
/* Deal with !@#$% 64K limit: *///if (sizeof(int) <= 2) {
//    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
//        more = wsize;
//
//  } else if (more == (unsigned)(-1)) {
//        /* Very unlikely, but possible on 16 bit machine if
//         * strstart == 0 && lookahead == 1 (input done a byte at time)
//         */
//        more--;
//    }
//}
/* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */if(s.strstart>=_w_size+(_w_size-MIN_LOOKAHEAD)){utils.arraySet(s.window,s.window,_w_size,_w_size,0);s.match_start-=_w_size;s.strstart-=_w_size;/* we now have strstart >= MAX_DIST */s.block_start-=_w_size;/* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */n=s.hash_size;p=n;do{m=s.head[--p];s.head[p]=m>=_w_size?m-_w_size:0;}while(--n);n=_w_size;p=n;do{m=s.prev[--p];s.prev[p]=m>=_w_size?m-_w_size:0;/* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */}while(--n);more+=_w_size;}if(s.strm.avail_in===0){break;}/* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     *///Assert(more >= 2, "more < 2");
n=read_buf(s.strm,s.window,s.strstart+s.lookahead,more);s.lookahead+=n;/* Initialize the hash value now that we have some input: */if(s.lookahead+s.insert>=MIN_MATCH){str=s.strstart-s.insert;s.ins_h=s.window[str];/* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */s.ins_h=(s.ins_h<<s.hash_shift^s.window[str+1])&s.hash_mask;//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
while(s.insert){/* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */s.ins_h=(s.ins_h<<s.hash_shift^s.window[str+MIN_MATCH-1])&s.hash_mask;s.prev[str&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=str;str++;s.insert--;if(s.lookahead+s.insert<MIN_MATCH){break;}}}/* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */}while(s.lookahead<MIN_LOOKAHEAD&&s.strm.avail_in!==0);/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   *///  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */function deflate_stored(s,flush){/* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */var max_block_size=0xffff;if(max_block_size>s.pending_buf_size-5){max_block_size=s.pending_buf_size-5;}/* Copy as much as possible from input to output: */for(;;){/* Fill the window as much as possible: */if(s.lookahead<=1){//Assert(s->strstart < s->w_size+MAX_DIST(s) ||
//  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }
fill_window(s);if(s.lookahead===0&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;}/* flush the current block */}//Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");
s.strstart+=s.lookahead;s.lookahead=0;/* Emit a stored block if pending_buf will be full: */var max_start=s.block_start+max_block_size;if(s.strstart===0||s.strstart>=max_start){/* strstart == 0 is possible when wraparound on 16-bit machine */s.lookahead=s.strstart-max_start;s.strstart=max_start;/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}/* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */if(s.strstart-s.block_start>=s.w_size-MIN_LOOKAHEAD){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=0;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.strstart>s.block_start){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_NEED_MORE;}/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */function deflate_fast(s,flush){var hash_head;/* head of the hash chain */var bflush;/* set if current block must be flushed */for(;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(s.lookahead<MIN_LOOKAHEAD){fill_window(s);if(s.lookahead<MIN_LOOKAHEAD&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;/* flush the current block */}}/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */hash_head=0/*NIL*/;if(s.lookahead>=MIN_MATCH){/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/}/* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */if(hash_head!==0/*NIL*/&&s.strstart-hash_head<=s.w_size-MIN_LOOKAHEAD){/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */s.match_length=longest_match(s,hash_head);/* longest_match() sets match_start */}if(s.match_length>=MIN_MATCH){// check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
/*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/bflush=trees._tr_tally(s,s.strstart-s.match_start,s.match_length-MIN_MATCH);s.lookahead-=s.match_length;/* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */if(s.match_length<=s.max_lazy_match/*max_insert_length*/&&s.lookahead>=MIN_MATCH){s.match_length--;/* string at strstart already in table */do{s.strstart++;/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***//* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */}while(--s.match_length!==0);s.strstart++;}else{s.strstart+=s.match_length;s.match_length=0;s.ins_h=s.window[s.strstart];/* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
/* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */}}else{/* No match, output a literal byte *///Tracevv((stderr,"%c", s.window[s.strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/bflush=trees._tr_tally(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;}if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=s.strstart<MIN_MATCH-1?s.strstart:MIN_MATCH-1;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;}/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */function deflate_slow(s,flush){var hash_head;/* head of hash chain */var bflush;/* set if current block must be flushed */var max_insert;/* Process the input block. */for(;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(s.lookahead<MIN_LOOKAHEAD){fill_window(s);if(s.lookahead<MIN_LOOKAHEAD&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;}/* flush the current block */}/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */hash_head=0/*NIL*/;if(s.lookahead>=MIN_MATCH){/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/}/* Find the longest match, discarding those <= prev_length.
     */s.prev_length=s.match_length;s.prev_match=s.match_start;s.match_length=MIN_MATCH-1;if(hash_head!==0/*NIL*/&&s.prev_length<s.max_lazy_match&&s.strstart-hash_head<=s.w_size-MIN_LOOKAHEAD/*MAX_DIST(s)*/){/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */s.match_length=longest_match(s,hash_head);/* longest_match() sets match_start */if(s.match_length<=5&&(s.strategy===Z_FILTERED||s.match_length===MIN_MATCH&&s.strstart-s.match_start>4096/*TOO_FAR*/)){/* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */s.match_length=MIN_MATCH-1;}}/* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */if(s.prev_length>=MIN_MATCH&&s.match_length<=s.prev_length){max_insert=s.strstart+s.lookahead-MIN_MATCH;/* Do not insert strings in hash table beyond this. *///check_match(s, s.strstart-1, s.prev_match, s.prev_length);
/***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/bflush=trees._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-MIN_MATCH);/* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */s.lookahead-=s.prev_length-1;s.prev_length-=2;do{if(++s.strstart<=max_insert){/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/}}while(--s.prev_length!==0);s.match_available=0;s.match_length=MIN_MATCH-1;s.strstart++;if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}else if(s.match_available){/* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       *///Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/bflush=trees._tr_tally(s,0,s.window[s.strstart-1]);if(bflush){/*** FLUSH_BLOCK_ONLY(s, 0) ***/flush_block_only(s,false);/***/}s.strstart++;s.lookahead--;if(s.strm.avail_out===0){return BS_NEED_MORE;}}else{/* There is no previous match to compare with, wait for
       * the next step to decide.
       */s.match_available=1;s.strstart++;s.lookahead--;}}//Assert (flush != Z_NO_FLUSH, "no flush?");
if(s.match_available){//Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/bflush=trees._tr_tally(s,0,s.window[s.strstart-1]);s.match_available=0;}s.insert=s.strstart<MIN_MATCH-1?s.strstart:MIN_MATCH-1;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;}/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */function deflate_rle(s,flush){var bflush;/* set if current block must be flushed */var prev;/* byte at distance one to match */var scan,strend;/* scan goes up to strend for length of run */var _win=s.window;for(;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */if(s.lookahead<=MAX_MATCH){fill_window(s);if(s.lookahead<=MAX_MATCH&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;}/* flush the current block */}/* See how many times the previous byte repeats */s.match_length=0;if(s.lookahead>=MIN_MATCH&&s.strstart>0){scan=s.strstart-1;prev=_win[scan];if(prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]){strend=s.strstart+MAX_MATCH;do{/*jshint noempty:false*/}while(prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&scan<strend);s.match_length=MAX_MATCH-(strend-scan);if(s.match_length>s.lookahead){s.match_length=s.lookahead;}}//Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
}/* Emit match if have run of MIN_MATCH or longer, else emit literal */if(s.match_length>=MIN_MATCH){//check_match(s, s.strstart, s.strstart - 1, s.match_length);
/*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/bflush=trees._tr_tally(s,1,s.match_length-MIN_MATCH);s.lookahead-=s.match_length;s.strstart+=s.match_length;s.match_length=0;}else{/* No match, output a literal byte *///Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/bflush=trees._tr_tally(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;}if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=0;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;}/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */function deflate_huff(s,flush){var bflush;/* set if current block must be flushed */for(;;){/* Make sure that we have a literal to write. */if(s.lookahead===0){fill_window(s);if(s.lookahead===0){if(flush===Z_NO_FLUSH){return BS_NEED_MORE;}break;/* flush the current block */}}/* Output a literal byte */s.match_length=0;//Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/bflush=trees._tr_tally(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=0;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;}/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */function Config(good_length,max_lazy,nice_length,max_chain,func){this.good_length=good_length;this.max_lazy=max_lazy;this.nice_length=nice_length;this.max_chain=max_chain;this.func=func;}var configuration_table;configuration_table=[/*      good lazy nice chain */new Config(0,0,0,0,deflate_stored),/* 0 store only */new Config(4,4,8,4,deflate_fast),/* 1 max speed, no lazy matches */new Config(4,5,16,8,deflate_fast),/* 2 */new Config(4,6,32,32,deflate_fast),/* 3 */new Config(4,4,16,16,deflate_slow),/* 4 lazy matches */new Config(8,16,32,32,deflate_slow),/* 5 */new Config(8,16,128,128,deflate_slow),/* 6 */new Config(8,32,128,256,deflate_slow),/* 7 */new Config(32,128,258,1024,deflate_slow),/* 8 */new Config(32,258,258,4096,deflate_slow)/* 9 max compression */];/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */function lm_init(s){s.window_size=2*s.w_size;/*** CLEAR_HASH(s); ***/zero(s.head);// Fill with NIL (= 0);
/* Set the default configuration parameters:
   */s.max_lazy_match=configuration_table[s.level].max_lazy;s.good_match=configuration_table[s.level].good_length;s.nice_match=configuration_table[s.level].nice_length;s.max_chain_length=configuration_table[s.level].max_chain;s.strstart=0;s.block_start=0;s.lookahead=0;s.insert=0;s.match_length=s.prev_length=MIN_MATCH-1;s.match_available=0;s.ins_h=0;}function DeflateState(){this.strm=null;/* pointer back to this zlib stream */this.status=0;/* as the name implies */this.pending_buf=null;/* output still pending */this.pending_buf_size=0;/* size of pending_buf */this.pending_out=0;/* next pending byte to output to the stream */this.pending=0;/* nb of bytes in the pending buffer */this.wrap=0;/* bit 0 true for zlib, bit 1 true for gzip */this.gzhead=null;/* gzip header information to write */this.gzindex=0;/* where in extra, name, or comment */this.method=Z_DEFLATED;/* can only be DEFLATED */this.last_flush=-1;/* value of flush param for previous deflate call */this.w_size=0;/* LZ77 window size (32K by default) */this.w_bits=0;/* log2(w_size)  (8..16) */this.w_mask=0;/* w_size - 1 */this.window=null;/* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */this.window_size=0;/* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */this.prev=null;/* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */this.head=null;/* Heads of the hash chains or NIL. */this.ins_h=0;/* hash index of string to be inserted */this.hash_size=0;/* number of elements in hash table */this.hash_bits=0;/* log2(hash_size) */this.hash_mask=0;/* hash_size-1 */this.hash_shift=0;/* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */this.block_start=0;/* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */this.match_length=0;/* length of best match */this.prev_match=0;/* previous match */this.match_available=0;/* set if previous match exists */this.strstart=0;/* start of string to insert */this.match_start=0;/* start of matching string */this.lookahead=0;/* number of valid bytes ahead in window */this.prev_length=0;/* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */this.max_chain_length=0;/* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */this.max_lazy_match=0;/* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */// That's alias to max_lazy_match, don't use directly
//this.max_insert_length = 0;
/* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */this.level=0;/* compression level (1..9) */this.strategy=0;/* favor or force Huffman coding*/this.good_match=0;/* Use a faster search when the previous match is longer than this */this.nice_match=0;/* Stop searching when current match exceeds this *//* used by trees.c: *//* Didn't use ct_data typedef below to suppress compiler warning */// struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
// struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
// struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
// Use flat array of DOUBLE size, with interleaved fata,
// because JS does not support effective
this.dyn_ltree=new utils.Buf16(HEAP_SIZE*2);this.dyn_dtree=new utils.Buf16((2*D_CODES+1)*2);this.bl_tree=new utils.Buf16((2*BL_CODES+1)*2);zero(this.dyn_ltree);zero(this.dyn_dtree);zero(this.bl_tree);this.l_desc=null;/* desc. for literal tree */this.d_desc=null;/* desc. for distance tree */this.bl_desc=null;/* desc. for bit length tree *///ush bl_count[MAX_BITS+1];
this.bl_count=new utils.Buf16(MAX_BITS+1);/* number of codes at each bit length for an optimal tree *///int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
this.heap=new utils.Buf16(2*L_CODES+1);/* heap used to build the Huffman trees */zero(this.heap);this.heap_len=0;/* number of elements in the heap */this.heap_max=0;/* element of largest frequency *//* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */this.depth=new utils.Buf16(2*L_CODES+1);//uch depth[2*L_CODES+1];
zero(this.depth);/* Depth of each subtree used as tie breaker for trees of equal frequency
   */this.l_buf=0;/* buffer index for literals or lengths */this.lit_bufsize=0;/* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */this.last_lit=0;/* running index in l_buf */this.d_buf=0;/* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */this.opt_len=0;/* bit length of current block with optimal trees */this.static_len=0;/* bit length of current block with static trees */this.matches=0;/* number of string matches in current block */this.insert=0;/* bytes at end of window left to insert */this.bi_buf=0;/* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */this.bi_valid=0;/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */// Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */}function deflateResetKeep(strm){var s;if(!strm||!strm.state){return err(strm,Z_STREAM_ERROR);}strm.total_in=strm.total_out=0;strm.data_type=Z_UNKNOWN;s=strm.state;s.pending=0;s.pending_out=0;if(s.wrap<0){s.wrap=-s.wrap;/* was made negative by deflate(..., Z_FINISH); */}s.status=s.wrap?INIT_STATE:BUSY_STATE;strm.adler=s.wrap===2?0// crc32(0, Z_NULL, 0)
:1;// adler32(0, Z_NULL, 0)
s.last_flush=Z_NO_FLUSH;trees._tr_init(s);return Z_OK;}function deflateReset(strm){var ret=deflateResetKeep(strm);if(ret===Z_OK){lm_init(strm.state);}return ret;}function deflateSetHeader(strm,head){if(!strm||!strm.state){return Z_STREAM_ERROR;}if(strm.state.wrap!==2){return Z_STREAM_ERROR;}strm.state.gzhead=head;return Z_OK;}function deflateInit2(strm,level,method,windowBits,memLevel,strategy){if(!strm){// === Z_NULL
return Z_STREAM_ERROR;}var wrap=1;if(level===Z_DEFAULT_COMPRESSION){level=6;}if(windowBits<0){/* suppress zlib wrapper */wrap=0;windowBits=-windowBits;}else if(windowBits>15){wrap=2;/* write gzip wrapper instead */windowBits-=16;}if(memLevel<1||memLevel>MAX_MEM_LEVEL||method!==Z_DEFLATED||windowBits<8||windowBits>15||level<0||level>9||strategy<0||strategy>Z_FIXED){return err(strm,Z_STREAM_ERROR);}if(windowBits===8){windowBits=9;}/* until 256-byte window bug fixed */var s=new DeflateState();strm.state=s;s.strm=strm;s.wrap=wrap;s.gzhead=null;s.w_bits=windowBits;s.w_size=1<<s.w_bits;s.w_mask=s.w_size-1;s.hash_bits=memLevel+7;s.hash_size=1<<s.hash_bits;s.hash_mask=s.hash_size-1;s.hash_shift=~~((s.hash_bits+MIN_MATCH-1)/MIN_MATCH);s.window=new utils.Buf8(s.w_size*2);s.head=new utils.Buf16(s.hash_size);s.prev=new utils.Buf16(s.w_size);// Don't need mem init magic for JS.
//s.high_water = 0;  /* nothing written to s->window yet */
s.lit_bufsize=1<<memLevel+6;/* 16K elements by default */s.pending_buf_size=s.lit_bufsize*4;//overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
//s->pending_buf = (uchf *) overlay;
s.pending_buf=new utils.Buf8(s.pending_buf_size);// It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
//s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
s.d_buf=1*s.lit_bufsize;//s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
s.l_buf=(1+2)*s.lit_bufsize;s.level=level;s.strategy=strategy;s.method=method;return deflateReset(strm);}function deflateInit(strm,level){return deflateInit2(strm,level,Z_DEFLATED,MAX_WBITS,DEF_MEM_LEVEL,Z_DEFAULT_STRATEGY);}function deflate(strm,flush){var old_flush,s;var beg,val;// for gzip header write only
if(!strm||!strm.state||flush>Z_BLOCK||flush<0){return strm?err(strm,Z_STREAM_ERROR):Z_STREAM_ERROR;}s=strm.state;if(!strm.output||!strm.input&&strm.avail_in!==0||s.status===FINISH_STATE&&flush!==Z_FINISH){return err(strm,strm.avail_out===0?Z_BUF_ERROR:Z_STREAM_ERROR);}s.strm=strm;/* just in case */old_flush=s.last_flush;s.last_flush=flush;/* Write the header */if(s.status===INIT_STATE){if(s.wrap===2){// GZIP header
strm.adler=0;//crc32(0L, Z_NULL, 0);
put_byte(s,31);put_byte(s,139);put_byte(s,8);if(!s.gzhead){// s->gzhead == Z_NULL
put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,s.level===9?2:s.strategy>=Z_HUFFMAN_ONLY||s.level<2?4:0);put_byte(s,OS_CODE);s.status=BUSY_STATE;}else{put_byte(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(!s.gzhead.extra?0:4)+(!s.gzhead.name?0:8)+(!s.gzhead.comment?0:16));put_byte(s,s.gzhead.time&0xff);put_byte(s,s.gzhead.time>>8&0xff);put_byte(s,s.gzhead.time>>16&0xff);put_byte(s,s.gzhead.time>>24&0xff);put_byte(s,s.level===9?2:s.strategy>=Z_HUFFMAN_ONLY||s.level<2?4:0);put_byte(s,s.gzhead.os&0xff);if(s.gzhead.extra&&s.gzhead.extra.length){put_byte(s,s.gzhead.extra.length&0xff);put_byte(s,s.gzhead.extra.length>>8&0xff);}if(s.gzhead.hcrc){strm.adler=crc32(strm.adler,s.pending_buf,s.pending,0);}s.gzindex=0;s.status=EXTRA_STATE;}}else// DEFLATE header
{var header=Z_DEFLATED+(s.w_bits-8<<4)<<8;var level_flags=-1;if(s.strategy>=Z_HUFFMAN_ONLY||s.level<2){level_flags=0;}else if(s.level<6){level_flags=1;}else if(s.level===6){level_flags=2;}else{level_flags=3;}header|=level_flags<<6;if(s.strstart!==0){header|=PRESET_DICT;}header+=31-header%31;s.status=BUSY_STATE;putShortMSB(s,header);/* Save the adler32 of the preset dictionary: */if(s.strstart!==0){putShortMSB(s,strm.adler>>>16);putShortMSB(s,strm.adler&0xffff);}strm.adler=1;// adler32(0L, Z_NULL, 0);
}}//#ifdef GZIP
if(s.status===EXTRA_STATE){if(s.gzhead.extra/* != Z_NULL*/){beg=s.pending;/* start of bytes to update crc */while(s.gzindex<(s.gzhead.extra.length&0xffff)){if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg);}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){break;}}put_byte(s,s.gzhead.extra[s.gzindex]&0xff);s.gzindex++;}if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg);}if(s.gzindex===s.gzhead.extra.length){s.gzindex=0;s.status=NAME_STATE;}}else{s.status=NAME_STATE;}}if(s.status===NAME_STATE){if(s.gzhead.name/* != Z_NULL*/){beg=s.pending;/* start of bytes to update crc *///int val;
do{if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg);}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){val=1;break;}}// JS specific: little magic to add zero terminator to end of string
if(s.gzindex<s.gzhead.name.length){val=s.gzhead.name.charCodeAt(s.gzindex++)&0xff;}else{val=0;}put_byte(s,val);}while(val!==0);if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg);}if(val===0){s.gzindex=0;s.status=COMMENT_STATE;}}else{s.status=COMMENT_STATE;}}if(s.status===COMMENT_STATE){if(s.gzhead.comment/* != Z_NULL*/){beg=s.pending;/* start of bytes to update crc *///int val;
do{if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg);}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){val=1;break;}}// JS specific: little magic to add zero terminator to end of string
if(s.gzindex<s.gzhead.comment.length){val=s.gzhead.comment.charCodeAt(s.gzindex++)&0xff;}else{val=0;}put_byte(s,val);}while(val!==0);if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg);}if(val===0){s.status=HCRC_STATE;}}else{s.status=HCRC_STATE;}}if(s.status===HCRC_STATE){if(s.gzhead.hcrc){if(s.pending+2>s.pending_buf_size){flush_pending(strm);}if(s.pending+2<=s.pending_buf_size){put_byte(s,strm.adler&0xff);put_byte(s,strm.adler>>8&0xff);strm.adler=0;//crc32(0L, Z_NULL, 0);
s.status=BUSY_STATE;}}else{s.status=BUSY_STATE;}}//#endif
/* Flush as much pending output as possible */if(s.pending!==0){flush_pending(strm);if(strm.avail_out===0){/* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */s.last_flush=-1;return Z_OK;}/* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */}else if(strm.avail_in===0&&rank(flush)<=rank(old_flush)&&flush!==Z_FINISH){return err(strm,Z_BUF_ERROR);}/* User must not provide more input after the first FINISH: */if(s.status===FINISH_STATE&&strm.avail_in!==0){return err(strm,Z_BUF_ERROR);}/* Start a new block or continue the current one.
   */if(strm.avail_in!==0||s.lookahead!==0||flush!==Z_NO_FLUSH&&s.status!==FINISH_STATE){var bstate=s.strategy===Z_HUFFMAN_ONLY?deflate_huff(s,flush):s.strategy===Z_RLE?deflate_rle(s,flush):configuration_table[s.level].func(s,flush);if(bstate===BS_FINISH_STARTED||bstate===BS_FINISH_DONE){s.status=FINISH_STATE;}if(bstate===BS_NEED_MORE||bstate===BS_FINISH_STARTED){if(strm.avail_out===0){s.last_flush=-1;/* avoid BUF_ERROR next call, see above */}return Z_OK;/* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */}if(bstate===BS_BLOCK_DONE){if(flush===Z_PARTIAL_FLUSH){trees._tr_align(s);}else if(flush!==Z_BLOCK){/* FULL_FLUSH or SYNC_FLUSH */trees._tr_stored_block(s,0,0,false);/* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */if(flush===Z_FULL_FLUSH){/*** CLEAR_HASH(s); ***//* forget history */zero(s.head);// Fill with NIL (= 0);
if(s.lookahead===0){s.strstart=0;s.block_start=0;s.insert=0;}}}flush_pending(strm);if(strm.avail_out===0){s.last_flush=-1;/* avoid BUF_ERROR at next call, see above */return Z_OK;}}}//Assert(strm->avail_out > 0, "bug2");
//if (strm.avail_out <= 0) { throw new Error("bug2");}
if(flush!==Z_FINISH){return Z_OK;}if(s.wrap<=0){return Z_STREAM_END;}/* Write the trailer */if(s.wrap===2){put_byte(s,strm.adler&0xff);put_byte(s,strm.adler>>8&0xff);put_byte(s,strm.adler>>16&0xff);put_byte(s,strm.adler>>24&0xff);put_byte(s,strm.total_in&0xff);put_byte(s,strm.total_in>>8&0xff);put_byte(s,strm.total_in>>16&0xff);put_byte(s,strm.total_in>>24&0xff);}else{putShortMSB(s,strm.adler>>>16);putShortMSB(s,strm.adler&0xffff);}flush_pending(strm);/* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */if(s.wrap>0){s.wrap=-s.wrap;}/* write the trailer only once! */return s.pending!==0?Z_OK:Z_STREAM_END;}function deflateEnd(strm){var status;if(!strm/*== Z_NULL*/||!strm.state/*== Z_NULL*/){return Z_STREAM_ERROR;}status=strm.state.status;if(status!==INIT_STATE&&status!==EXTRA_STATE&&status!==NAME_STATE&&status!==COMMENT_STATE&&status!==HCRC_STATE&&status!==BUSY_STATE&&status!==FINISH_STATE){return err(strm,Z_STREAM_ERROR);}strm.state=null;return status===BUSY_STATE?err(strm,Z_DATA_ERROR):Z_OK;}/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */function deflateSetDictionary(strm,dictionary){var dictLength=dictionary.length;var s;var str,n;var wrap;var avail;var next;var input;var tmpDict;if(!strm/*== Z_NULL*/||!strm.state/*== Z_NULL*/){return Z_STREAM_ERROR;}s=strm.state;wrap=s.wrap;if(wrap===2||wrap===1&&s.status!==INIT_STATE||s.lookahead){return Z_STREAM_ERROR;}/* when using zlib wrappers, compute Adler-32 for provided dictionary */if(wrap===1){/* adler32(strm->adler, dictionary, dictLength); */strm.adler=adler32(strm.adler,dictionary,dictLength,0);}s.wrap=0;/* avoid computing Adler-32 in read_buf *//* if dictionary would fill window, just replace the history */if(dictLength>=s.w_size){if(wrap===0){/* already empty otherwise *//*** CLEAR_HASH(s); ***/zero(s.head);// Fill with NIL (= 0);
s.strstart=0;s.block_start=0;s.insert=0;}/* use the tail */// dictionary = dictionary.slice(dictLength - s.w_size);
tmpDict=new utils.Buf8(s.w_size);utils.arraySet(tmpDict,dictionary,dictLength-s.w_size,s.w_size,0);dictionary=tmpDict;dictLength=s.w_size;}/* insert dictionary into window and hash */avail=strm.avail_in;next=strm.next_in;input=strm.input;strm.avail_in=dictLength;strm.next_in=0;strm.input=dictionary;fill_window(s);while(s.lookahead>=MIN_MATCH){str=s.strstart;n=s.lookahead-(MIN_MATCH-1);do{/* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */s.ins_h=(s.ins_h<<s.hash_shift^s.window[str+MIN_MATCH-1])&s.hash_mask;s.prev[str&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=str;str++;}while(--n);s.strstart=str;s.lookahead=MIN_MATCH-1;fill_window(s);}s.strstart+=s.lookahead;s.block_start=s.strstart;s.insert=s.lookahead;s.lookahead=0;s.match_length=s.prev_length=MIN_MATCH-1;s.match_available=0;strm.next_in=next;strm.input=input;strm.avail_in=avail;s.wrap=wrap;return Z_OK;}exports.deflateInit=deflateInit;exports.deflateInit2=deflateInit2;exports.deflateReset=deflateReset;exports.deflateResetKeep=deflateResetKeep;exports.deflateSetHeader=deflateSetHeader;exports.deflate=deflate;exports.deflateEnd=deflateEnd;exports.deflateSetDictionary=deflateSetDictionary;exports.deflateInfo='pako deflate (from Nodeca project)';/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*//***/},/* 71 *//***/function(module,exports,__webpack_require__){"use strict";function GZheader(){/* true if compressed data believed to be text */this.text=0;/* modification time */this.time=0;/* extra flags (not used when writing a gzip file) */this.xflags=0;/* operating system */this.os=0;/* pointer to extra field or Z_NULL if none */this.extra=null;/* extra field length (valid if extra != Z_NULL) */this.extra_len=0;// Actually, we don't need it in JS,
// but leave for few code modifications
//
// Setup limits is not necessary because in js we should not preallocate memory
// for inflate use constant limit in 65536 bytes
//
/* space at extra (only when reading header) */// this.extra_max  = 0;
/* pointer to zero-terminated file name or Z_NULL */this.name='';/* space at name (only when reading header) */// this.name_max   = 0;
/* pointer to zero-terminated comment or Z_NULL */this.comment='';/* space at comment (only when reading header) */// this.comm_max   = 0;
/* true if there was or will be a header crc */this.hcrc=0;/* true when done reading gzip header (not used when writing a gzip file) */this.done=false;}module.exports=GZheader;/***/},/* 72 *//***/function(module,exports,__webpack_require__){"use strict";// See state defs from inflate.js
var BAD=30;/* got a data error -- remain here until reset */var TYPE=12;/* i: waiting for type bits, including last-flag bit *//*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */module.exports=function inflate_fast(strm,start){var state;var _in;/* local strm.input */var last;/* have enough input while in < last */var _out;/* local strm.output */var beg;/* inflate()'s initial strm.output */var end;/* while out < end, enough space available *///#ifdef INFLATE_STRICT
var dmax;/* maximum distance from zlib header *///#endif
var wsize;/* window size or zero if not using window */var whave;/* valid bytes in the window */var wnext;/* window write index */// Use `s_window` instead `window`, avoid conflict with instrumentation tools
var s_window;/* allocated sliding window, if wsize != 0 */var hold;/* local strm.hold */var bits;/* local strm.bits */var lcode;/* local strm.lencode */var dcode;/* local strm.distcode */var lmask;/* mask for first level of length codes */var dmask;/* mask for first level of distance codes */var here;/* retrieved table entry */var op;/* code bits, operation, extra bits, or *//*  window position, window bytes to copy */var len;/* match length, unused bytes */var dist;/* match distance */var from;/* where to copy match from */var from_source;var input,output;// JS specific, because we have no pointers
/* copy state to local variables */state=strm.state;//here = state.here;
_in=strm.next_in;input=strm.input;last=_in+(strm.avail_in-5);_out=strm.next_out;output=strm.output;beg=_out-(start-strm.avail_out);end=_out+(strm.avail_out-257);//#ifdef INFLATE_STRICT
dmax=state.dmax;//#endif
wsize=state.wsize;whave=state.whave;wnext=state.wnext;s_window=state.window;hold=state.hold;bits=state.bits;lcode=state.lencode;dcode=state.distcode;lmask=(1<<state.lenbits)-1;dmask=(1<<state.distbits)-1;/* decode literals and length/distances until end-of-block or not enough
     input data or output space */top:do{if(bits<15){hold+=input[_in++]<<bits;bits+=8;hold+=input[_in++]<<bits;bits+=8;}here=lcode[hold&lmask];dolen:for(;;){// Goto emulation
op=here>>>24/*here.bits*/;hold>>>=op;bits-=op;op=here>>>16&0xff/*here.op*/;if(op===0){/* literal *///Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
output[_out++]=here&0xffff/*here.val*/;}else if(op&16){/* length base */len=here&0xffff/*here.val*/;op&=15;/* number of extra bits */if(op){if(bits<op){hold+=input[_in++]<<bits;bits+=8;}len+=hold&(1<<op)-1;hold>>>=op;bits-=op;}//Tracevv((stderr, "inflate:         length %u\n", len));
if(bits<15){hold+=input[_in++]<<bits;bits+=8;hold+=input[_in++]<<bits;bits+=8;}here=dcode[hold&dmask];dodist:for(;;){// goto emulation
op=here>>>24/*here.bits*/;hold>>>=op;bits-=op;op=here>>>16&0xff/*here.op*/;if(op&16){/* distance base */dist=here&0xffff/*here.val*/;op&=15;/* number of extra bits */if(bits<op){hold+=input[_in++]<<bits;bits+=8;if(bits<op){hold+=input[_in++]<<bits;bits+=8;}}dist+=hold&(1<<op)-1;//#ifdef INFLATE_STRICT
if(dist>dmax){strm.msg='invalid distance too far back';state.mode=BAD;break top;}//#endif
hold>>>=op;bits-=op;//Tracevv((stderr, "inflate:         distance %u\n", dist));
op=_out-beg;/* max distance in output */if(dist>op){/* see if copy from window */op=dist-op;/* distance back in window */if(op>whave){if(state.sane){strm.msg='invalid distance too far back';state.mode=BAD;break top;}// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
}from=0;// window index
from_source=s_window;if(wnext===0){/* very common case */from+=wsize-op;if(op<len){/* some from window */len-=op;do{output[_out++]=s_window[from++];}while(--op);from=_out-dist;/* rest from output */from_source=output;}}else if(wnext<op){/* wrap around window */from+=wsize+wnext-op;op-=wnext;if(op<len){/* some from end of window */len-=op;do{output[_out++]=s_window[from++];}while(--op);from=0;if(wnext<len){/* some from start of window */op=wnext;len-=op;do{output[_out++]=s_window[from++];}while(--op);from=_out-dist;/* rest from output */from_source=output;}}}else{/* contiguous in window */from+=wnext-op;if(op<len){/* some from window */len-=op;do{output[_out++]=s_window[from++];}while(--op);from=_out-dist;/* rest from output */from_source=output;}}while(len>2){output[_out++]=from_source[from++];output[_out++]=from_source[from++];output[_out++]=from_source[from++];len-=3;}if(len){output[_out++]=from_source[from++];if(len>1){output[_out++]=from_source[from++];}}}else{from=_out-dist;/* copy direct from output */do{/* minimum length is three */output[_out++]=output[from++];output[_out++]=output[from++];output[_out++]=output[from++];len-=3;}while(len>2);if(len){output[_out++]=output[from++];if(len>1){output[_out++]=output[from++];}}}}else if((op&64)===0){/* 2nd level distance code */here=dcode[(here&0xffff)+(/*here.val*/hold&(1<<op)-1)];continue dodist;}else{strm.msg='invalid distance code';state.mode=BAD;break top;}break;// need to emulate goto via "continue"
}}else if((op&64)===0){/* 2nd level length code */here=lcode[(here&0xffff)+(/*here.val*/hold&(1<<op)-1)];continue dolen;}else if(op&32){/* end-of-block *///Tracevv((stderr, "inflate:         end of block\n"));
state.mode=TYPE;break top;}else{strm.msg='invalid literal/length code';state.mode=BAD;break top;}break;// need to emulate goto via "continue"
}}while(_in<last&&_out<end);/* return unused bytes (on entry, bits < 8, so in won't go too far back) */len=bits>>3;_in-=len;bits-=len<<3;hold&=(1<<bits)-1;/* update state and return */strm.next_in=_in;strm.next_out=_out;strm.avail_in=_in<last?5+(last-_in):5-(_in-last);strm.avail_out=_out<end?257+(end-_out):257-(_out-end);state.hold=hold;state.bits=bits;return;};/***/},/* 73 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(5);var adler32=__webpack_require__(45);var crc32=__webpack_require__(47);var inflate_fast=__webpack_require__(72);var inflate_table=__webpack_require__(74);var CODES=0;var LENS=1;var DISTS=2;/* Public constants ==========================================================*//* ===========================================================================*//* Allowed flush values; see deflate() and inflate() below for details *///var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH=4;var Z_BLOCK=5;var Z_TREES=6;/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */var Z_OK=0;var Z_STREAM_END=1;var Z_NEED_DICT=2;//var Z_ERRNO         = -1;
var Z_STREAM_ERROR=-2;var Z_DATA_ERROR=-3;var Z_MEM_ERROR=-4;var Z_BUF_ERROR=-5;//var Z_VERSION_ERROR = -6;
/* The deflate compression method */var Z_DEFLATED=8;/* STATES ====================================================================*//* ===========================================================================*/var HEAD=1;/* i: waiting for magic header */var FLAGS=2;/* i: waiting for method and flags (gzip) */var TIME=3;/* i: waiting for modification time (gzip) */var OS=4;/* i: waiting for extra flags and operating system (gzip) */var EXLEN=5;/* i: waiting for extra length (gzip) */var EXTRA=6;/* i: waiting for extra bytes (gzip) */var NAME=7;/* i: waiting for end of file name (gzip) */var COMMENT=8;/* i: waiting for end of comment (gzip) */var HCRC=9;/* i: waiting for header crc (gzip) */var DICTID=10;/* i: waiting for dictionary check value */var DICT=11;/* waiting for inflateSetDictionary() call */var TYPE=12;/* i: waiting for type bits, including last-flag bit */var TYPEDO=13;/* i: same, but skip check to exit inflate on new block */var STORED=14;/* i: waiting for stored size (length and complement) */var COPY_=15;/* i/o: same as COPY below, but only first time in */var COPY=16;/* i/o: waiting for input or output to copy stored block */var TABLE=17;/* i: waiting for dynamic block table lengths */var LENLENS=18;/* i: waiting for code length code lengths */var CODELENS=19;/* i: waiting for length/lit and distance code lengths */var LEN_=20;/* i: same as LEN below, but only first time in */var LEN=21;/* i: waiting for length/lit/eob code */var LENEXT=22;/* i: waiting for length extra bits */var DIST=23;/* i: waiting for distance code */var DISTEXT=24;/* i: waiting for distance extra bits */var MATCH=25;/* o: waiting for output space to copy string */var LIT=26;/* o: waiting for output space to write literal */var CHECK=27;/* i: waiting for 32-bit check value */var LENGTH=28;/* i: waiting for 32-bit length (gzip) */var DONE=29;/* finished check, done -- remain here until reset */var BAD=30;/* got a data error -- remain here until reset */var MEM=31;/* got an inflate() memory error -- remain here until reset */var SYNC=32;/* looking for synchronization bytes to restart inflate() *//* ===========================================================================*/var ENOUGH_LENS=852;var ENOUGH_DISTS=592;//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
var MAX_WBITS=15;/* 32K LZ77 window */var DEF_WBITS=MAX_WBITS;function zswap32(q){return(q>>>24&0xff)+(q>>>8&0xff00)+((q&0xff00)<<8)+((q&0xff)<<24);}function InflateState(){this.mode=0;/* current inflate mode */this.last=false;/* true if processing last block */this.wrap=0;/* bit 0 true for zlib, bit 1 true for gzip */this.havedict=false;/* true if dictionary provided */this.flags=0;/* gzip header method and flags (0 if zlib) */this.dmax=0;/* zlib header max distance (INFLATE_STRICT) */this.check=0;/* protected copy of check value */this.total=0;/* protected copy of output count */// TODO: may be {}
this.head=null;/* where to save gzip header information *//* sliding window */this.wbits=0;/* log base 2 of requested window size */this.wsize=0;/* window size or zero if not using window */this.whave=0;/* valid bytes in the window */this.wnext=0;/* window write index */this.window=null;/* allocated sliding window, if needed *//* bit accumulator */this.hold=0;/* input bit accumulator */this.bits=0;/* number of bits in "in" *//* for string and stored block copying */this.length=0;/* literal or length of data to copy */this.offset=0;/* distance back to copy string from *//* for table and code decoding */this.extra=0;/* extra bits needed *//* fixed and dynamic code tables */this.lencode=null;/* starting table for length/literal codes */this.distcode=null;/* starting table for distance codes */this.lenbits=0;/* index bits for lencode */this.distbits=0;/* index bits for distcode *//* dynamic table building */this.ncode=0;/* number of code length code lengths */this.nlen=0;/* number of length code lengths */this.ndist=0;/* number of distance code lengths */this.have=0;/* number of code lengths in lens[] */this.next=null;/* next available space in codes[] */this.lens=new utils.Buf16(320);/* temporary storage for code lengths */this.work=new utils.Buf16(288);/* work area for code table building *//*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  *///this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
this.lendyn=null;/* dynamic table for length/literal codes (JS specific) */this.distdyn=null;/* dynamic table for distance codes (JS specific) */this.sane=0;/* if false, allow invalid distance too far */this.back=0;/* bits back of last unprocessed length/lit */this.was=0;/* initial length of match */}function inflateResetKeep(strm){var state;if(!strm||!strm.state){return Z_STREAM_ERROR;}state=strm.state;strm.total_in=strm.total_out=state.total=0;strm.msg='';/*Z_NULL*/if(state.wrap){/* to support ill-conceived Java test suite */strm.adler=state.wrap&1;}state.mode=HEAD;state.last=0;state.havedict=0;state.dmax=32768;state.head=null/*Z_NULL*/;state.hold=0;state.bits=0;//state.lencode = state.distcode = state.next = state.codes;
state.lencode=state.lendyn=new utils.Buf32(ENOUGH_LENS);state.distcode=state.distdyn=new utils.Buf32(ENOUGH_DISTS);state.sane=1;state.back=-1;//Tracev((stderr, "inflate: reset\n"));
return Z_OK;}function inflateReset(strm){var state;if(!strm||!strm.state){return Z_STREAM_ERROR;}state=strm.state;state.wsize=0;state.whave=0;state.wnext=0;return inflateResetKeep(strm);}function inflateReset2(strm,windowBits){var wrap;var state;/* get the state */if(!strm||!strm.state){return Z_STREAM_ERROR;}state=strm.state;/* extract wrap request from windowBits parameter */if(windowBits<0){wrap=0;windowBits=-windowBits;}else{wrap=(windowBits>>4)+1;if(windowBits<48){windowBits&=15;}}/* set number of window bits, free window if different */if(windowBits&&(windowBits<8||windowBits>15)){return Z_STREAM_ERROR;}if(state.window!==null&&state.wbits!==windowBits){state.window=null;}/* update state and reset the rest of it */state.wrap=wrap;state.wbits=windowBits;return inflateReset(strm);}function inflateInit2(strm,windowBits){var ret;var state;if(!strm){return Z_STREAM_ERROR;}//strm.msg = Z_NULL;                 /* in case we return an error */
state=new InflateState();//if (state === Z_NULL) return Z_MEM_ERROR;
//Tracev((stderr, "inflate: allocated\n"));
strm.state=state;state.window=null/*Z_NULL*/;ret=inflateReset2(strm,windowBits);if(ret!==Z_OK){strm.state=null/*Z_NULL*/;}return ret;}function inflateInit(strm){return inflateInit2(strm,DEF_WBITS);}/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */var virgin=true;var lenfix,distfix;// We have no pointers in JS, so keep tables separate
function fixedtables(state){/* build fixed huffman tables if first call (may not be thread safe) */if(virgin){var sym;lenfix=new utils.Buf32(512);distfix=new utils.Buf32(32);/* literal/length table */sym=0;while(sym<144){state.lens[sym++]=8;}while(sym<256){state.lens[sym++]=9;}while(sym<280){state.lens[sym++]=7;}while(sym<288){state.lens[sym++]=8;}inflate_table(LENS,state.lens,0,288,lenfix,0,state.work,{bits:9});/* distance table */sym=0;while(sym<32){state.lens[sym++]=5;}inflate_table(DISTS,state.lens,0,32,distfix,0,state.work,{bits:5});/* do this just once */virgin=false;}state.lencode=lenfix;state.lenbits=9;state.distcode=distfix;state.distbits=5;}/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */function updatewindow(strm,src,end,copy){var dist;var state=strm.state;/* if it hasn't been done already, allocate space for the window */if(state.window===null){state.wsize=1<<state.wbits;state.wnext=0;state.whave=0;state.window=new utils.Buf8(state.wsize);}/* copy state->wsize or less output bytes into the circular window */if(copy>=state.wsize){utils.arraySet(state.window,src,end-state.wsize,state.wsize,0);state.wnext=0;state.whave=state.wsize;}else{dist=state.wsize-state.wnext;if(dist>copy){dist=copy;}//zmemcpy(state->window + state->wnext, end - copy, dist);
utils.arraySet(state.window,src,end-copy,dist,state.wnext);copy-=dist;if(copy){//zmemcpy(state->window, end - copy, copy);
utils.arraySet(state.window,src,end-copy,copy,0);state.wnext=copy;state.whave=state.wsize;}else{state.wnext+=dist;if(state.wnext===state.wsize){state.wnext=0;}if(state.whave<state.wsize){state.whave+=dist;}}}return 0;}function inflate(strm,flush){var state;var input,output;// input/output buffers
var next;/* next input INDEX */var put;/* next output INDEX */var have,left;/* available input and output */var hold;/* bit buffer */var bits;/* bits in bit buffer */var _in,_out;/* save starting available input and output */var copy;/* number of stored or match bytes to copy */var from;/* where to copy match bytes from */var from_source;var here=0;/* current decoding table entry */var here_bits,here_op,here_val;// paked "here" denormalized (JS specific)
//var last;                   /* parent table entry */
var last_bits,last_op,last_val;// paked "last" denormalized (JS specific)
var len;/* length to copy for repeats, bits to drop */var ret;/* return code */var hbuf=new utils.Buf8(4);/* buffer for gzip header crc calculation */var opts;var n;// temporary var for NEED_BITS
var order=/* permutation of code lengths */[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!strm||!strm.state||!strm.output||!strm.input&&strm.avail_in!==0){return Z_STREAM_ERROR;}state=strm.state;if(state.mode===TYPE){state.mode=TYPEDO;}/* skip check *///--- LOAD() ---
put=strm.next_out;output=strm.output;left=strm.avail_out;next=strm.next_in;input=strm.input;have=strm.avail_in;hold=state.hold;bits=state.bits;//---
_in=have;_out=left;ret=Z_OK;inf_leave:// goto emulation
for(;;){switch(state.mode){case HEAD:if(state.wrap===0){state.mode=TYPEDO;break;}//=== NEEDBITS(16);
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(state.wrap&2&&hold===0x8b1f){/* gzip header */state.check=0/*crc32(0L, Z_NULL, 0)*/;//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32(state.check,hbuf,2,0);//===//
//=== INITBITS();
hold=0;bits=0;//===//
state.mode=FLAGS;break;}state.flags=0;/* expect zlib header */if(state.head){state.head.done=false;}if(!(state.wrap&1)||/* check if zlib header allowed */(((hold&0xff)<</*BITS(8)*/8)+(hold>>8))%31){strm.msg='incorrect header check';state.mode=BAD;break;}if((hold&0x0f)!==/*BITS(4)*/Z_DEFLATED){strm.msg='unknown compression method';state.mode=BAD;break;}//--- DROPBITS(4) ---//
hold>>>=4;bits-=4;//---//
len=(hold&0x0f)+/*BITS(4)*/8;if(state.wbits===0){state.wbits=len;}else if(len>state.wbits){strm.msg='invalid window size';state.mode=BAD;break;}state.dmax=1<<len;//Tracev((stderr, "inflate:   zlib header ok\n"));
strm.adler=state.check=1/*adler32(0L, Z_NULL, 0)*/;state.mode=hold&0x200?DICTID:TYPE;//=== INITBITS();
hold=0;bits=0;//===//
break;case FLAGS://=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.flags=hold;if((state.flags&0xff)!==Z_DEFLATED){strm.msg='unknown compression method';state.mode=BAD;break;}if(state.flags&0xe000){strm.msg='unknown header flags set';state.mode=BAD;break;}if(state.head){state.head.text=hold>>8&1;}if(state.flags&0x0200){//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32(state.check,hbuf,2,0);//===//
}//=== INITBITS();
hold=0;bits=0;//===//
state.mode=TIME;/* falls through */case TIME://=== NEEDBITS(32); */
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(state.head){state.head.time=hold;}if(state.flags&0x0200){//=== CRC4(state.check, hold)
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;hbuf[2]=hold>>>16&0xff;hbuf[3]=hold>>>24&0xff;state.check=crc32(state.check,hbuf,4,0);//===
}//=== INITBITS();
hold=0;bits=0;//===//
state.mode=OS;/* falls through */case OS://=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(state.head){state.head.xflags=hold&0xff;state.head.os=hold>>8;}if(state.flags&0x0200){//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32(state.check,hbuf,2,0);//===//
}//=== INITBITS();
hold=0;bits=0;//===//
state.mode=EXLEN;/* falls through */case EXLEN:if(state.flags&0x0400){//=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.length=hold;if(state.head){state.head.extra_len=hold;}if(state.flags&0x0200){//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32(state.check,hbuf,2,0);//===//
}//=== INITBITS();
hold=0;bits=0;//===//
}else if(state.head){state.head.extra=null/*Z_NULL*/;}state.mode=EXTRA;/* falls through */case EXTRA:if(state.flags&0x0400){copy=state.length;if(copy>have){copy=have;}if(copy){if(state.head){len=state.head.extra_len-state.length;if(!state.head.extra){// Use untyped array for more conveniend processing later
state.head.extra=new Array(state.head.extra_len);}utils.arraySet(state.head.extra,input,next,// extra field is limited to 65536 bytes
// - no need for additional size check
copy,/*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/len);//zmemcpy(state.head.extra + len, next,
//        len + copy > state.head.extra_max ?
//        state.head.extra_max - len : copy);
}if(state.flags&0x0200){state.check=crc32(state.check,input,copy,next);}have-=copy;next+=copy;state.length-=copy;}if(state.length){break inf_leave;}}state.length=0;state.mode=NAME;/* falls through */case NAME:if(state.flags&0x0800){if(have===0){break inf_leave;}copy=0;do{// TODO: 2 or 1 bytes?
len=input[next+copy++];/* use constant limit because in js we should not preallocate memory */if(state.head&&len&&state.length<65536/*state.head.name_max*/){state.head.name+=String.fromCharCode(len);}}while(len&&copy<have);if(state.flags&0x0200){state.check=crc32(state.check,input,copy,next);}have-=copy;next+=copy;if(len){break inf_leave;}}else if(state.head){state.head.name=null;}state.length=0;state.mode=COMMENT;/* falls through */case COMMENT:if(state.flags&0x1000){if(have===0){break inf_leave;}copy=0;do{len=input[next+copy++];/* use constant limit because in js we should not preallocate memory */if(state.head&&len&&state.length<65536/*state.head.comm_max*/){state.head.comment+=String.fromCharCode(len);}}while(len&&copy<have);if(state.flags&0x0200){state.check=crc32(state.check,input,copy,next);}have-=copy;next+=copy;if(len){break inf_leave;}}else if(state.head){state.head.comment=null;}state.mode=HCRC;/* falls through */case HCRC:if(state.flags&0x0200){//=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(hold!==(state.check&0xffff)){strm.msg='header crc mismatch';state.mode=BAD;break;}//=== INITBITS();
hold=0;bits=0;//===//
}if(state.head){state.head.hcrc=state.flags>>9&1;state.head.done=true;}strm.adler=state.check=0;state.mode=TYPE;break;case DICTID://=== NEEDBITS(32); */
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
strm.adler=state.check=zswap32(hold);//=== INITBITS();
hold=0;bits=0;//===//
state.mode=DICT;/* falls through */case DICT:if(state.havedict===0){//--- RESTORE() ---
strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;//---
return Z_NEED_DICT;}strm.adler=state.check=1/*adler32(0L, Z_NULL, 0)*/;state.mode=TYPE;/* falls through */case TYPE:if(flush===Z_BLOCK||flush===Z_TREES){break inf_leave;}/* falls through */case TYPEDO:if(state.last){//--- BYTEBITS() ---//
hold>>>=bits&7;bits-=bits&7;//---//
state.mode=CHECK;break;}//=== NEEDBITS(3); */
while(bits<3){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.last=hold&0x01/*BITS(1)*/;//--- DROPBITS(1) ---//
hold>>>=1;bits-=1;//---//
switch(hold&0x03){/*BITS(2)*/case 0:/* stored block *///Tracev((stderr, "inflate:     stored block%s\n",
//        state.last ? " (last)" : ""));
state.mode=STORED;break;case 1:/* fixed block */fixedtables(state);//Tracev((stderr, "inflate:     fixed codes block%s\n",
//        state.last ? " (last)" : ""));
state.mode=LEN_;/* decode codes */if(flush===Z_TREES){//--- DROPBITS(2) ---//
hold>>>=2;bits-=2;//---//
break inf_leave;}break;case 2:/* dynamic block *///Tracev((stderr, "inflate:     dynamic codes block%s\n",
//        state.last ? " (last)" : ""));
state.mode=TABLE;break;case 3:strm.msg='invalid block type';state.mode=BAD;}//--- DROPBITS(2) ---//
hold>>>=2;bits-=2;//---//
break;case STORED://--- BYTEBITS() ---// /* go to byte boundary */
hold>>>=bits&7;bits-=bits&7;//---//
//=== NEEDBITS(32); */
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if((hold&0xffff)!==(hold>>>16^0xffff)){strm.msg='invalid stored block lengths';state.mode=BAD;break;}state.length=hold&0xffff;//Tracev((stderr, "inflate:       stored length %u\n",
//        state.length));
//=== INITBITS();
hold=0;bits=0;//===//
state.mode=COPY_;if(flush===Z_TREES){break inf_leave;}/* falls through */case COPY_:state.mode=COPY;/* falls through */case COPY:copy=state.length;if(copy){if(copy>have){copy=have;}if(copy>left){copy=left;}if(copy===0){break inf_leave;}//--- zmemcpy(put, next, copy); ---
utils.arraySet(output,input,next,copy,put);//---//
have-=copy;next+=copy;left-=copy;put+=copy;state.length-=copy;break;}//Tracev((stderr, "inflate:       stored end\n"));
state.mode=TYPE;break;case TABLE://=== NEEDBITS(14); */
while(bits<14){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.nlen=(hold&0x1f)+/*BITS(5)*/257;//--- DROPBITS(5) ---//
hold>>>=5;bits-=5;//---//
state.ndist=(hold&0x1f)+/*BITS(5)*/1;//--- DROPBITS(5) ---//
hold>>>=5;bits-=5;//---//
state.ncode=(hold&0x0f)+/*BITS(4)*/4;//--- DROPBITS(4) ---//
hold>>>=4;bits-=4;//---//
//#ifndef PKZIP_BUG_WORKAROUND
if(state.nlen>286||state.ndist>30){strm.msg='too many length or distance symbols';state.mode=BAD;break;}//#endif
//Tracev((stderr, "inflate:       table sizes ok\n"));
state.have=0;state.mode=LENLENS;/* falls through */case LENLENS:while(state.have<state.ncode){//=== NEEDBITS(3);
while(bits<3){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.lens[order[state.have++]]=hold&0x07;//BITS(3);
//--- DROPBITS(3) ---//
hold>>>=3;bits-=3;//---//
}while(state.have<19){state.lens[order[state.have++]]=0;}// We have separate tables & no pointers. 2 commented lines below not needed.
//state.next = state.codes;
//state.lencode = state.next;
// Switch to use dynamic table
state.lencode=state.lendyn;state.lenbits=7;opts={bits:state.lenbits};ret=inflate_table(CODES,state.lens,0,19,state.lencode,0,state.work,opts);state.lenbits=opts.bits;if(ret){strm.msg='invalid code lengths set';state.mode=BAD;break;}//Tracev((stderr, "inflate:       code lengths ok\n"));
state.have=0;state.mode=CODELENS;/* falls through */case CODELENS:while(state.have<state.nlen+state.ndist){for(;;){here=state.lencode[hold&(1<<state.lenbits)-1];/*BITS(state.lenbits)*/here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}if(here_val<16){//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
state.lens[state.have++]=here_val;}else{if(here_val===16){//=== NEEDBITS(here.bits + 2);
n=here_bits+2;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
if(state.have===0){strm.msg='invalid bit length repeat';state.mode=BAD;break;}len=state.lens[state.have-1];copy=3+(hold&0x03);//BITS(2);
//--- DROPBITS(2) ---//
hold>>>=2;bits-=2;//---//
}else if(here_val===17){//=== NEEDBITS(here.bits + 3);
n=here_bits+3;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
len=0;copy=3+(hold&0x07);//BITS(3);
//--- DROPBITS(3) ---//
hold>>>=3;bits-=3;//---//
}else{//=== NEEDBITS(here.bits + 7);
n=here_bits+7;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
len=0;copy=11+(hold&0x7f);//BITS(7);
//--- DROPBITS(7) ---//
hold>>>=7;bits-=7;//---//
}if(state.have+copy>state.nlen+state.ndist){strm.msg='invalid bit length repeat';state.mode=BAD;break;}while(copy--){state.lens[state.have++]=len;}}}/* handle error breaks in while */if(state.mode===BAD){break;}/* check for end-of-block code (better have one) */if(state.lens[256]===0){strm.msg='invalid code -- missing end-of-block';state.mode=BAD;break;}/* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */state.lenbits=9;opts={bits:state.lenbits};ret=inflate_table(LENS,state.lens,0,state.nlen,state.lencode,0,state.work,opts);// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
state.lenbits=opts.bits;// state.lencode = state.next;
if(ret){strm.msg='invalid literal/lengths set';state.mode=BAD;break;}state.distbits=6;//state.distcode.copy(state.codes);
// Switch to use dynamic table
state.distcode=state.distdyn;opts={bits:state.distbits};ret=inflate_table(DISTS,state.lens,state.nlen,state.ndist,state.distcode,0,state.work,opts);// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
state.distbits=opts.bits;// state.distcode = state.next;
if(ret){strm.msg='invalid distances set';state.mode=BAD;break;}//Tracev((stderr, 'inflate:       codes ok\n'));
state.mode=LEN_;if(flush===Z_TREES){break inf_leave;}/* falls through */case LEN_:state.mode=LEN;/* falls through */case LEN:if(have>=6&&left>=258){//--- RESTORE() ---
strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;//---
inflate_fast(strm,_out);//--- LOAD() ---
put=strm.next_out;output=strm.output;left=strm.avail_out;next=strm.next_in;input=strm.input;have=strm.avail_in;hold=state.hold;bits=state.bits;//---
if(state.mode===TYPE){state.back=-1;}break;}state.back=0;for(;;){here=state.lencode[hold&(1<<state.lenbits)-1];/*BITS(state.lenbits)*/here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}if(here_op&&(here_op&0xf0)===0){last_bits=here_bits;last_op=here_op;last_val=here_val;for(;;){here=state.lencode[last_val+((hold&(1<<last_bits+last_op)-1)>>/*BITS(last.bits + last.op)*/last_bits)];here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(last_bits+here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}//--- DROPBITS(last.bits) ---//
hold>>>=last_bits;bits-=last_bits;//---//
state.back+=last_bits;}//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
state.back+=here_bits;state.length=here_val;if(here_op===0){//Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
state.mode=LIT;break;}if(here_op&32){//Tracevv((stderr, "inflate:         end of block\n"));
state.back=-1;state.mode=TYPE;break;}if(here_op&64){strm.msg='invalid literal/length code';state.mode=BAD;break;}state.extra=here_op&15;state.mode=LENEXT;/* falls through */case LENEXT:if(state.extra){//=== NEEDBITS(state.extra);
n=state.extra;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.length+=hold&(1<<state.extra)-1/*BITS(state.extra)*/;//--- DROPBITS(state.extra) ---//
hold>>>=state.extra;bits-=state.extra;//---//
state.back+=state.extra;}//Tracevv((stderr, "inflate:         length %u\n", state.length));
state.was=state.length;state.mode=DIST;/* falls through */case DIST:for(;;){here=state.distcode[hold&(1<<state.distbits)-1];/*BITS(state.distbits)*/here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}if((here_op&0xf0)===0){last_bits=here_bits;last_op=here_op;last_val=here_val;for(;;){here=state.distcode[last_val+((hold&(1<<last_bits+last_op)-1)>>/*BITS(last.bits + last.op)*/last_bits)];here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(last_bits+here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}//--- DROPBITS(last.bits) ---//
hold>>>=last_bits;bits-=last_bits;//---//
state.back+=last_bits;}//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
state.back+=here_bits;if(here_op&64){strm.msg='invalid distance code';state.mode=BAD;break;}state.offset=here_val;state.extra=here_op&15;state.mode=DISTEXT;/* falls through */case DISTEXT:if(state.extra){//=== NEEDBITS(state.extra);
n=state.extra;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.offset+=hold&(1<<state.extra)-1/*BITS(state.extra)*/;//--- DROPBITS(state.extra) ---//
hold>>>=state.extra;bits-=state.extra;//---//
state.back+=state.extra;}//#ifdef INFLATE_STRICT
if(state.offset>state.dmax){strm.msg='invalid distance too far back';state.mode=BAD;break;}//#endif
//Tracevv((stderr, "inflate:         distance %u\n", state.offset));
state.mode=MATCH;/* falls through */case MATCH:if(left===0){break inf_leave;}copy=_out-left;if(state.offset>copy){/* copy from window */copy=state.offset-copy;if(copy>state.whave){if(state.sane){strm.msg='invalid distance too far back';state.mode=BAD;break;}// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
}if(copy>state.wnext){copy-=state.wnext;from=state.wsize-copy;}else{from=state.wnext-copy;}if(copy>state.length){copy=state.length;}from_source=state.window;}else{/* copy from output */from_source=output;from=put-state.offset;copy=state.length;}if(copy>left){copy=left;}left-=copy;state.length-=copy;do{output[put++]=from_source[from++];}while(--copy);if(state.length===0){state.mode=LEN;}break;case LIT:if(left===0){break inf_leave;}output[put++]=state.length;left--;state.mode=LEN;break;case CHECK:if(state.wrap){//=== NEEDBITS(32);
while(bits<32){if(have===0){break inf_leave;}have--;// Use '|' insdead of '+' to make sure that result is signed
hold|=input[next++]<<bits;bits+=8;}//===//
_out-=left;strm.total_out+=_out;state.total+=_out;if(_out){strm.adler=state.check=/*UPDATE(state.check, put - _out, _out);*/state.flags?crc32(state.check,output,_out,put-_out):adler32(state.check,output,_out,put-_out);}_out=left;// NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
if((state.flags?hold:zswap32(hold))!==state.check){strm.msg='incorrect data check';state.mode=BAD;break;}//=== INITBITS();
hold=0;bits=0;//===//
//Tracev((stderr, "inflate:   check matches trailer\n"));
}state.mode=LENGTH;/* falls through */case LENGTH:if(state.wrap&&state.flags){//=== NEEDBITS(32);
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(hold!==(state.total&0xffffffff)){strm.msg='incorrect length check';state.mode=BAD;break;}//=== INITBITS();
hold=0;bits=0;//===//
//Tracev((stderr, "inflate:   length matches trailer\n"));
}state.mode=DONE;/* falls through */case DONE:ret=Z_STREAM_END;break inf_leave;case BAD:ret=Z_DATA_ERROR;break inf_leave;case MEM:return Z_MEM_ERROR;case SYNC:/* falls through */default:return Z_STREAM_ERROR;}}// inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
/*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   *///--- RESTORE() ---
strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;//---
if(state.wsize||_out!==strm.avail_out&&state.mode<BAD&&(state.mode<CHECK||flush!==Z_FINISH)){if(updatewindow(strm,strm.output,strm.next_out,_out-strm.avail_out)){state.mode=MEM;return Z_MEM_ERROR;}}_in-=strm.avail_in;_out-=strm.avail_out;strm.total_in+=_in;strm.total_out+=_out;state.total+=_out;if(state.wrap&&_out){strm.adler=state.check=/*UPDATE(state.check, strm.next_out - _out, _out);*/state.flags?crc32(state.check,output,_out,strm.next_out-_out):adler32(state.check,output,_out,strm.next_out-_out);}strm.data_type=state.bits+(state.last?64:0)+(state.mode===TYPE?128:0)+(state.mode===LEN_||state.mode===COPY_?256:0);if((_in===0&&_out===0||flush===Z_FINISH)&&ret===Z_OK){ret=Z_BUF_ERROR;}return ret;}function inflateEnd(strm){if(!strm||!strm.state/*|| strm->zfree == (free_func)0*/){return Z_STREAM_ERROR;}var state=strm.state;if(state.window){state.window=null;}strm.state=null;return Z_OK;}function inflateGetHeader(strm,head){var state;/* check state */if(!strm||!strm.state){return Z_STREAM_ERROR;}state=strm.state;if((state.wrap&2)===0){return Z_STREAM_ERROR;}/* save header structure */state.head=head;head.done=false;return Z_OK;}function inflateSetDictionary(strm,dictionary){var dictLength=dictionary.length;var state;var dictid;var ret;/* check state */if(!strm/* == Z_NULL */||!strm.state/* == Z_NULL */){return Z_STREAM_ERROR;}state=strm.state;if(state.wrap!==0&&state.mode!==DICT){return Z_STREAM_ERROR;}/* check for correct dictionary identifier */if(state.mode===DICT){dictid=1;/* adler32(0, null, 0)*//* dictid = adler32(dictid, dictionary, dictLength); */dictid=adler32(dictid,dictionary,dictLength,0);if(dictid!==state.check){return Z_DATA_ERROR;}}/* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ret=updatewindow(strm,dictionary,dictLength,dictLength);if(ret){state.mode=MEM;return Z_MEM_ERROR;}state.havedict=1;// Tracev((stderr, "inflate:   dictionary set\n"));
return Z_OK;}exports.inflateReset=inflateReset;exports.inflateReset2=inflateReset2;exports.inflateResetKeep=inflateResetKeep;exports.inflateInit=inflateInit;exports.inflateInit2=inflateInit2;exports.inflate=inflate;exports.inflateEnd=inflateEnd;exports.inflateGetHeader=inflateGetHeader;exports.inflateSetDictionary=inflateSetDictionary;exports.inflateInfo='pako inflate (from Nodeca project)';/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*//***/},/* 74 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(5);var MAXBITS=15;var ENOUGH_LENS=852;var ENOUGH_DISTS=592;//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
var CODES=0;var LENS=1;var DISTS=2;var lbase=[/* Length codes 257..285 base */3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0];var lext=[/* Length codes 257..285 extra */16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78];var dbase=[/* Distance codes 0..29 base */1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0];var dext=[/* Distance codes 0..29 extra */16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];module.exports=function inflate_table(type,lens,lens_index,codes,table,table_index,work,opts){var bits=opts.bits;//here = opts.here; /* table entry for duplication */
var len=0;/* a code's length in bits */var sym=0;/* index of code symbols */var min=0,max=0;/* minimum and maximum code lengths */var root=0;/* number of index bits for root table */var curr=0;/* number of index bits for current table */var drop=0;/* code bits to drop for sub-table */var left=0;/* number of prefix codes available */var used=0;/* code entries in table used */var huff=0;/* Huffman code */var incr;/* for incrementing code, index */var fill;/* index for replicating entries */var low;/* low bits for current root entry */var mask;/* mask for low root bits */var next;/* next available space in table */var base=null;/* base value table to use */var base_index=0;//  var shoextra;    /* extra bits table to use */
var end;/* use base and extra for symbol > end */var count=new utils.Buf16(MAXBITS+1);//[MAXBITS+1];    /* number of codes of each length */
var offs=new utils.Buf16(MAXBITS+1);//[MAXBITS+1];     /* offsets in table for each length */
var extra=null;var extra_index=0;var here_bits,here_op,here_val;/*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   *//* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */for(len=0;len<=MAXBITS;len++){count[len]=0;}for(sym=0;sym<codes;sym++){count[lens[lens_index+sym]]++;}/* bound code lengths, force root to be within code lengths */root=bits;for(max=MAXBITS;max>=1;max--){if(count[max]!==0){break;}}if(root>max){root=max;}if(max===0){/* no symbols to code at all *///table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
//table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
//table.val[opts.table_index++] = 0;   //here.val = (var short)0;
table[table_index++]=1<<24|64<<16|0;//table.op[opts.table_index] = 64;
//table.bits[opts.table_index] = 1;
//table.val[opts.table_index++] = 0;
table[table_index++]=1<<24|64<<16|0;opts.bits=1;return 0;/* no symbols, but wait for decoding to report error */}for(min=1;min<max;min++){if(count[min]!==0){break;}}if(root<min){root=min;}/* check for an over-subscribed or incomplete set of lengths */left=1;for(len=1;len<=MAXBITS;len++){left<<=1;left-=count[len];if(left<0){return-1;}/* over-subscribed */}if(left>0&&(type===CODES||max!==1)){return-1;/* incomplete set */}/* generate offsets into symbol table for each length for sorting */offs[1]=0;for(len=1;len<MAXBITS;len++){offs[len+1]=offs[len]+count[len];}/* sort symbols by length, by symbol order within each length */for(sym=0;sym<codes;sym++){if(lens[lens_index+sym]!==0){work[offs[lens[lens_index+sym]]++]=sym;}}/*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   *//* set up for code type */// poor man optimization - use if-else instead of switch,
// to avoid deopts in old v8
if(type===CODES){base=extra=work;/* dummy value--not used */end=19;}else if(type===LENS){base=lbase;base_index-=257;extra=lext;extra_index-=257;end=256;}else{/* DISTS */base=dbase;extra=dext;end=-1;}/* initialize opts for loop */huff=0;/* starting code */sym=0;/* starting code symbol */len=min;/* starting code length */next=table_index;/* current table to fill in */curr=root;/* current table index bits */drop=0;/* current bits to drop from code for index */low=-1;/* trigger new sub-table when len > root */used=1<<root;/* use root table entries */mask=used-1;/* mask for comparing low *//* check available table space */if(type===LENS&&used>ENOUGH_LENS||type===DISTS&&used>ENOUGH_DISTS){return 1;}/* process all codes and make table entries */for(;;){/* create table entry */here_bits=len-drop;if(work[sym]<end){here_op=0;here_val=work[sym];}else if(work[sym]>end){here_op=extra[extra_index+work[sym]];here_val=base[base_index+work[sym]];}else{here_op=32+64;/* end of block */here_val=0;}/* replicate for those indices with low len bits equal to huff */incr=1<<len-drop;fill=1<<curr;min=fill;/* save offset to next table */do{fill-=incr;table[next+(huff>>drop)+fill]=here_bits<<24|here_op<<16|here_val|0;}while(fill!==0);/* backwards increment the len-bit code huff */incr=1<<len-1;while(huff&incr){incr>>=1;}if(incr!==0){huff&=incr-1;huff+=incr;}else{huff=0;}/* go to next symbol, update count, len */sym++;if(--count[len]===0){if(len===max){break;}len=lens[lens_index+work[sym]];}/* create new sub-table if needed */if(len>root&&(huff&mask)!==low){/* if first time, transition to sub-tables */if(drop===0){drop=root;}/* increment past last table */next+=min;/* here min is 1 << curr *//* determine length of next table */curr=len-drop;left=1<<curr;while(curr+drop<max){left-=count[curr+drop];if(left<=0){break;}curr++;left<<=1;}/* check for enough space */used+=1<<curr;if(type===LENS&&used>ENOUGH_LENS||type===DISTS&&used>ENOUGH_DISTS){return 1;}/* point entry in root table to sub-table */low=huff&mask;/*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/table[low]=root<<24|curr<<16|next-table_index|0;}}/* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */if(huff!==0){//table.op[next + huff] = 64;            /* invalid code marker */
//table.bits[next + huff] = len - drop;
//table.val[next + huff] = 0;
table[next+huff]=len-drop<<24|64<<16|0;}/* set return parameters *///opts.table_index += used;
opts.bits=root;return 0;};/***/},/* 75 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(5);/* Public constants ==========================================================*//* ===========================================================================*///var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED=4;//var Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */var Z_BINARY=0;var Z_TEXT=1;//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN=2;/*============================================================================*/function zero(buf){var len=buf.length;while(--len>=0){buf[len]=0;}}// From zutil.h
var STORED_BLOCK=0;var STATIC_TREES=1;var DYN_TREES=2;/* The three kinds of block type */var MIN_MATCH=3;var MAX_MATCH=258;/* The minimum and maximum match lengths */// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */var LENGTH_CODES=29;/* number of length codes, not counting the special END_BLOCK code */var LITERALS=256;/* number of literal bytes 0..255 */var L_CODES=LITERALS+1+LENGTH_CODES;/* number of Literal or Length codes, including the END_BLOCK code */var D_CODES=30;/* number of distance codes */var BL_CODES=19;/* number of codes used to transfer the bit lengths */var HEAP_SIZE=2*L_CODES+1;/* maximum heap size */var MAX_BITS=15;/* All codes must not exceed MAX_BITS bits */var Buf_size=16;/* size of bit buffer in bi_buf *//* ===========================================================================
 * Constants
 */var MAX_BL_BITS=7;/* Bit length codes must not exceed MAX_BL_BITS bits */var END_BLOCK=256;/* end of block literal code */var REP_3_6=16;/* repeat previous bit length 3-6 times (2 bits of repeat count) */var REPZ_3_10=17;/* repeat a zero length 3-10 times  (3 bits of repeat count) */var REPZ_11_138=18;/* repeat a zero length 11-138 times  (7 bits of repeat count) *//* eslint-disable comma-spacing,array-bracket-spacing */var extra_lbits=/* extra bits for each length code */[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];var extra_dbits=/* extra bits for each distance code */[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];var extra_blbits=/* extra bits for each bit length code */[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];var bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];/* eslint-enable comma-spacing,array-bracket-spacing *//* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 *//* ===========================================================================
 * Local data. These are initialized only once.
 */// We pre-fill arrays with 0 to avoid uninitialized gaps
var DIST_CODE_LEN=512;/* see definition of array dist_code below */// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree=new Array((L_CODES+2)*2);zero(static_ltree);/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */var static_dtree=new Array(D_CODES*2);zero(static_dtree);/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */var _dist_code=new Array(DIST_CODE_LEN);zero(_dist_code);/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */var _length_code=new Array(MAX_MATCH-MIN_MATCH+1);zero(_length_code);/* length code for each normalized match length (0 == MIN_MATCH) */var base_length=new Array(LENGTH_CODES);zero(base_length);/* First normalized length for each code (0 = MIN_MATCH) */var base_dist=new Array(D_CODES);zero(base_dist);/* First normalized distance for each code (0 = distance of 1) */function StaticTreeDesc(static_tree,extra_bits,extra_base,elems,max_length){this.static_tree=static_tree;/* static tree or NULL */this.extra_bits=extra_bits;/* extra bits for each code or NULL */this.extra_base=extra_base;/* base index for extra_bits */this.elems=elems;/* max number of elements in the tree */this.max_length=max_length;/* max bit length for the codes */// show if `static_tree` has data or dummy - needed for monomorphic objects
this.has_stree=static_tree&&static_tree.length;}var static_l_desc;var static_d_desc;var static_bl_desc;function TreeDesc(dyn_tree,stat_desc){this.dyn_tree=dyn_tree;/* the dynamic tree */this.max_code=0;/* largest code with non zero frequency */this.stat_desc=stat_desc;/* the corresponding static tree */}function d_code(dist){return dist<256?_dist_code[dist]:_dist_code[256+(dist>>>7)];}/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */function put_short(s,w){//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
s.pending_buf[s.pending++]=w&0xff;s.pending_buf[s.pending++]=w>>>8&0xff;}/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */function send_bits(s,value,length){if(s.bi_valid>Buf_size-length){s.bi_buf|=value<<s.bi_valid&0xffff;put_short(s,s.bi_buf);s.bi_buf=value>>Buf_size-s.bi_valid;s.bi_valid+=length-Buf_size;}else{s.bi_buf|=value<<s.bi_valid&0xffff;s.bi_valid+=length;}}function send_code(s,c,tree){send_bits(s,tree[c*2]/*.Code*/,tree[c*2+1]/*.Len*/);}/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */function bi_reverse(code,len){var res=0;do{res|=code&1;code>>>=1;res<<=1;}while(--len>0);return res>>>1;}/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */function bi_flush(s){if(s.bi_valid===16){put_short(s,s.bi_buf);s.bi_buf=0;s.bi_valid=0;}else if(s.bi_valid>=8){s.pending_buf[s.pending++]=s.bi_buf&0xff;s.bi_buf>>=8;s.bi_valid-=8;}}/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */function gen_bitlen(s,desc)//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{var tree=desc.dyn_tree;var max_code=desc.max_code;var stree=desc.stat_desc.static_tree;var has_stree=desc.stat_desc.has_stree;var extra=desc.stat_desc.extra_bits;var base=desc.stat_desc.extra_base;var max_length=desc.stat_desc.max_length;var h;/* heap index */var n,m;/* iterate over the tree elements */var bits;/* bit length */var xbits;/* extra bits */var f;/* frequency */var overflow=0;/* number of elements with bit length too large */for(bits=0;bits<=MAX_BITS;bits++){s.bl_count[bits]=0;}/* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */tree[s.heap[s.heap_max]*2+1]/*.Len*/=0;/* root of the heap */for(h=s.heap_max+1;h<HEAP_SIZE;h++){n=s.heap[h];bits=tree[tree[n*2+1]/*.Dad*/*2+1]/*.Len*/+1;if(bits>max_length){bits=max_length;overflow++;}tree[n*2+1]/*.Len*/=bits;/* We overwrite tree[n].Dad which is no longer needed */if(n>max_code){continue;}/* not a leaf node */s.bl_count[bits]++;xbits=0;if(n>=base){xbits=extra[n-base];}f=tree[n*2]/*.Freq*/;s.opt_len+=f*(bits+xbits);if(has_stree){s.static_len+=f*(stree[n*2+1]/*.Len*/+xbits);}}if(overflow===0){return;}// Trace((stderr,"\nbit length overflow\n"));
/* This happens for example on obj2 and pic of the Calgary corpus *//* Find the first bit length which could increase: */do{bits=max_length-1;while(s.bl_count[bits]===0){bits--;}s.bl_count[bits]--;/* move one leaf down the tree */s.bl_count[bits+1]+=2;/* move one overflow item as its brother */s.bl_count[max_length]--;/* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */overflow-=2;}while(overflow>0);/* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */for(bits=max_length;bits!==0;bits--){n=s.bl_count[bits];while(n!==0){m=s.heap[--h];if(m>max_code){continue;}if(tree[m*2+1]/*.Len*/!==bits){// Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
s.opt_len+=(bits-tree[m*2+1]/*.Len*/)*tree[m*2]/*.Freq*/;tree[m*2+1]/*.Len*/=bits;}n--;}}}/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */function gen_codes(tree,max_code,bl_count)//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{var next_code=new Array(MAX_BITS+1);/* next code value for each bit length */var code=0;/* running code value */var bits;/* bit index */var n;/* code index *//* The distribution counts are first used to generate the code values
   * without bit reversal.
   */for(bits=1;bits<=MAX_BITS;bits++){next_code[bits]=code=code+bl_count[bits-1]<<1;}/* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   *///Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
//        "inconsistent bit counts");
//Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
for(n=0;n<=max_code;n++){var len=tree[n*2+1]/*.Len*/;if(len===0){continue;}/* Now reverse the bits */tree[n*2]/*.Code*/=bi_reverse(next_code[len]++,len);//Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
//     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
}}/* ===========================================================================
 * Initialize the various 'constant' tables.
 */function tr_static_init(){var n;/* iterates over tree elements */var bits;/* bit counter */var length;/* length value */var code;/* code value */var dist;/* distance index */var bl_count=new Array(MAX_BITS+1);/* number of codes at each bit length for an optimal tree */// do check in _tr_init()
//if (static_init_done) return;
/* For some embedded targets, global variables are not initialized: *//*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*//* Initialize the mapping length (0..255) -> length code (0..28) */length=0;for(code=0;code<LENGTH_CODES-1;code++){base_length[code]=length;for(n=0;n<1<<extra_lbits[code];n++){_length_code[length++]=code;}}//Assert (length == 256, "tr_static_init: length != 256");
/* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */_length_code[length-1]=code;/* Initialize the mapping dist (0..32K) -> dist code (0..29) */dist=0;for(code=0;code<16;code++){base_dist[code]=dist;for(n=0;n<1<<extra_dbits[code];n++){_dist_code[dist++]=code;}}//Assert (dist == 256, "tr_static_init: dist != 256");
dist>>=7;/* from now on, all distances are divided by 128 */for(;code<D_CODES;code++){base_dist[code]=dist<<7;for(n=0;n<1<<extra_dbits[code]-7;n++){_dist_code[256+dist++]=code;}}//Assert (dist == 256, "tr_static_init: 256+dist != 512");
/* Construct the codes of the static literal tree */for(bits=0;bits<=MAX_BITS;bits++){bl_count[bits]=0;}n=0;while(n<=143){static_ltree[n*2+1]/*.Len*/=8;n++;bl_count[8]++;}while(n<=255){static_ltree[n*2+1]/*.Len*/=9;n++;bl_count[9]++;}while(n<=279){static_ltree[n*2+1]/*.Len*/=7;n++;bl_count[7]++;}while(n<=287){static_ltree[n*2+1]/*.Len*/=8;n++;bl_count[8]++;}/* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */gen_codes(static_ltree,L_CODES+1,bl_count);/* The static distance tree is trivial: */for(n=0;n<D_CODES;n++){static_dtree[n*2+1]/*.Len*/=5;static_dtree[n*2]/*.Code*/=bi_reverse(n,5);}// Now data ready and we can init static trees
static_l_desc=new StaticTreeDesc(static_ltree,extra_lbits,LITERALS+1,L_CODES,MAX_BITS);static_d_desc=new StaticTreeDesc(static_dtree,extra_dbits,0,D_CODES,MAX_BITS);static_bl_desc=new StaticTreeDesc(new Array(0),extra_blbits,0,BL_CODES,MAX_BL_BITS);//static_init_done = true;
}/* ===========================================================================
 * Initialize a new block.
 */function init_block(s){var n;/* iterates over tree elements *//* Initialize the trees. */for(n=0;n<L_CODES;n++){s.dyn_ltree[n*2]/*.Freq*/=0;}for(n=0;n<D_CODES;n++){s.dyn_dtree[n*2]/*.Freq*/=0;}for(n=0;n<BL_CODES;n++){s.bl_tree[n*2]/*.Freq*/=0;}s.dyn_ltree[END_BLOCK*2]/*.Freq*/=1;s.opt_len=s.static_len=0;s.last_lit=s.matches=0;}/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */function bi_windup(s){if(s.bi_valid>8){put_short(s,s.bi_buf);}else if(s.bi_valid>0){//put_byte(s, (Byte)s->bi_buf);
s.pending_buf[s.pending++]=s.bi_buf;}s.bi_buf=0;s.bi_valid=0;}/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */function copy_block(s,buf,len,header)//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{bi_windup(s);/* align on byte boundary */if(header){put_short(s,len);put_short(s,~len);}//  while (len--) {
//    put_byte(s, *buf++);
//  }
utils.arraySet(s.pending_buf,s.window,buf,len,s.pending);s.pending+=len;}/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */function smaller(tree,n,m,depth){var _n2=n*2;var _m2=m*2;return tree[_n2]/*.Freq*/<tree[_m2]/*.Freq*/||tree[_n2]/*.Freq*/===tree[_m2]/*.Freq*/&&depth[n]<=depth[m];}/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */function pqdownheap(s,tree,k)//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{var v=s.heap[k];var j=k<<1;/* left son of k */while(j<=s.heap_len){/* Set j to the smallest of the two sons: */if(j<s.heap_len&&smaller(tree,s.heap[j+1],s.heap[j],s.depth)){j++;}/* Exit if v is smaller than both sons */if(smaller(tree,v,s.heap[j],s.depth)){break;}/* Exchange v with the smallest son */s.heap[k]=s.heap[j];k=j;/* And continue down the tree, setting j to the left son of k */j<<=1;}s.heap[k]=v;}// inlined manually
// var SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */function compress_block(s,ltree,dtree)//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{var dist;/* distance of matched string */var lc;/* match length or unmatched char (if dist == 0) */var lx=0;/* running index in l_buf */var code;/* the code to send */var extra;/* number of extra bits to send */if(s.last_lit!==0){do{dist=s.pending_buf[s.d_buf+lx*2]<<8|s.pending_buf[s.d_buf+lx*2+1];lc=s.pending_buf[s.l_buf+lx];lx++;if(dist===0){send_code(s,lc,ltree);/* send a literal byte *///Tracecv(isgraph(lc), (stderr," '%c' ", lc));
}else{/* Here, lc is the match length - MIN_MATCH */code=_length_code[lc];send_code(s,code+LITERALS+1,ltree);/* send the length code */extra=extra_lbits[code];if(extra!==0){lc-=base_length[code];send_bits(s,lc,extra);/* send the extra length bits */}dist--;/* dist is now the match distance - 1 */code=d_code(dist);//Assert (code < D_CODES, "bad d_code");
send_code(s,code,dtree);/* send the distance code */extra=extra_dbits[code];if(extra!==0){dist-=base_dist[code];send_bits(s,dist,extra);/* send the extra distance bits */}}/* literal or match pair ? *//* Check that the overlay between pending_buf and d_buf+l_buf is ok: *///Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
//       "pendingBuf overflow");
}while(lx<s.last_lit);}send_code(s,END_BLOCK,ltree);}/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */function build_tree(s,desc)//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{var tree=desc.dyn_tree;var stree=desc.stat_desc.static_tree;var has_stree=desc.stat_desc.has_stree;var elems=desc.stat_desc.elems;var n,m;/* iterate over heap elements */var max_code=-1;/* largest code with non zero frequency */var node;/* new node being created *//* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */s.heap_len=0;s.heap_max=HEAP_SIZE;for(n=0;n<elems;n++){if(tree[n*2]/*.Freq*/!==0){s.heap[++s.heap_len]=max_code=n;s.depth[n]=0;}else{tree[n*2+1]/*.Len*/=0;}}/* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */while(s.heap_len<2){node=s.heap[++s.heap_len]=max_code<2?++max_code:0;tree[node*2]/*.Freq*/=1;s.depth[node]=0;s.opt_len--;if(has_stree){s.static_len-=stree[node*2+1]/*.Len*/;}/* node is 0 or 1 so it does not have extra bits */}desc.max_code=max_code;/* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */for(n=s.heap_len>>1/*int /2*/;n>=1;n--){pqdownheap(s,tree,n);}/* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */node=elems;/* next internal node of the tree */do{//pqremove(s, tree, n);  /* n = node of least frequency */
/*** pqremove ***/n=s.heap[1/*SMALLEST*/];s.heap[1/*SMALLEST*/]=s.heap[s.heap_len--];pqdownheap(s,tree,1/*SMALLEST*/);/***/m=s.heap[1/*SMALLEST*/];/* m = node of next least frequency */s.heap[--s.heap_max]=n;/* keep the nodes sorted by frequency */s.heap[--s.heap_max]=m;/* Create a new node father of n and m */tree[node*2]/*.Freq*/=tree[n*2]/*.Freq*/+tree[m*2]/*.Freq*/;s.depth[node]=(s.depth[n]>=s.depth[m]?s.depth[n]:s.depth[m])+1;tree[n*2+1]/*.Dad*/=tree[m*2+1]/*.Dad*/=node;/* and insert the new node in the heap */s.heap[1/*SMALLEST*/]=node++;pqdownheap(s,tree,1/*SMALLEST*/);}while(s.heap_len>=2);s.heap[--s.heap_max]=s.heap[1/*SMALLEST*/];/* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */gen_bitlen(s,desc);/* The field len is now set, we can generate the bit codes */gen_codes(tree,max_code,s.bl_count);}/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */function scan_tree(s,tree,max_code)//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{var n;/* iterates over all tree elements */var prevlen=-1;/* last emitted length */var curlen;/* length of current code */var nextlen=tree[0*2+1]/*.Len*/;/* length of next code */var count=0;/* repeat count of the current code */var max_count=7;/* max repeat count */var min_count=4;/* min repeat count */if(nextlen===0){max_count=138;min_count=3;}tree[(max_code+1)*2+1]/*.Len*/=0xffff;/* guard */for(n=0;n<=max_code;n++){curlen=nextlen;nextlen=tree[(n+1)*2+1]/*.Len*/;if(++count<max_count&&curlen===nextlen){continue;}else if(count<min_count){s.bl_tree[curlen*2]/*.Freq*/+=count;}else if(curlen!==0){if(curlen!==prevlen){s.bl_tree[curlen*2]/*.Freq*/++;}s.bl_tree[REP_3_6*2]/*.Freq*/++;}else if(count<=10){s.bl_tree[REPZ_3_10*2]/*.Freq*/++;}else{s.bl_tree[REPZ_11_138*2]/*.Freq*/++;}count=0;prevlen=curlen;if(nextlen===0){max_count=138;min_count=3;}else if(curlen===nextlen){max_count=6;min_count=3;}else{max_count=7;min_count=4;}}}/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */function send_tree(s,tree,max_code)//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{var n;/* iterates over all tree elements */var prevlen=-1;/* last emitted length */var curlen;/* length of current code */var nextlen=tree[0*2+1]/*.Len*/;/* length of next code */var count=0;/* repeat count of the current code */var max_count=7;/* max repeat count */var min_count=4;/* min repeat count *//* tree[max_code+1].Len = -1; *//* guard already set */if(nextlen===0){max_count=138;min_count=3;}for(n=0;n<=max_code;n++){curlen=nextlen;nextlen=tree[(n+1)*2+1]/*.Len*/;if(++count<max_count&&curlen===nextlen){continue;}else if(count<min_count){do{send_code(s,curlen,s.bl_tree);}while(--count!==0);}else if(curlen!==0){if(curlen!==prevlen){send_code(s,curlen,s.bl_tree);count--;}//Assert(count >= 3 && count <= 6, " 3_6?");
send_code(s,REP_3_6,s.bl_tree);send_bits(s,count-3,2);}else if(count<=10){send_code(s,REPZ_3_10,s.bl_tree);send_bits(s,count-3,3);}else{send_code(s,REPZ_11_138,s.bl_tree);send_bits(s,count-11,7);}count=0;prevlen=curlen;if(nextlen===0){max_count=138;min_count=3;}else if(curlen===nextlen){max_count=6;min_count=3;}else{max_count=7;min_count=4;}}}/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */function build_bl_tree(s){var max_blindex;/* index of last bit length code of non zero freq *//* Determine the bit length frequencies for literal and distance trees */scan_tree(s,s.dyn_ltree,s.l_desc.max_code);scan_tree(s,s.dyn_dtree,s.d_desc.max_code);/* Build the bit length tree: */build_tree(s,s.bl_desc);/* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   *//* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */for(max_blindex=BL_CODES-1;max_blindex>=3;max_blindex--){if(s.bl_tree[bl_order[max_blindex]*2+1]/*.Len*/!==0){break;}}/* Update opt_len to include the bit length tree and counts */s.opt_len+=3*(max_blindex+1)+5+5+4;//Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
//        s->opt_len, s->static_len));
return max_blindex;}/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */function send_all_trees(s,lcodes,dcodes,blcodes)//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{var rank;/* index in bl_order *///Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
//Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
//        "too many codes");
//Tracev((stderr, "\nbl counts: "));
send_bits(s,lcodes-257,5);/* not +255 as stated in appnote.txt */send_bits(s,dcodes-1,5);send_bits(s,blcodes-4,4);/* not -3 as stated in appnote.txt */for(rank=0;rank<blcodes;rank++){//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
send_bits(s,s.bl_tree[bl_order[rank]*2+1]/*.Len*/,3);}//Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
send_tree(s,s.dyn_ltree,lcodes-1);/* literal tree *///Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
send_tree(s,s.dyn_dtree,dcodes-1);/* distance tree *///Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */function detect_data_type(s){/* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */var black_mask=0xf3ffc07f;var n;/* Check for non-textual ("black-listed") bytes. */for(n=0;n<=31;n++,black_mask>>>=1){if(black_mask&1&&s.dyn_ltree[n*2]/*.Freq*/!==0){return Z_BINARY;}}/* Check for textual ("white-listed") bytes. */if(s.dyn_ltree[9*2]/*.Freq*/!==0||s.dyn_ltree[10*2]/*.Freq*/!==0||s.dyn_ltree[13*2]/*.Freq*/!==0){return Z_TEXT;}for(n=32;n<LITERALS;n++){if(s.dyn_ltree[n*2]/*.Freq*/!==0){return Z_TEXT;}}/* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */return Z_BINARY;}var static_init_done=false;/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */function _tr_init(s){if(!static_init_done){tr_static_init();static_init_done=true;}s.l_desc=new TreeDesc(s.dyn_ltree,static_l_desc);s.d_desc=new TreeDesc(s.dyn_dtree,static_d_desc);s.bl_desc=new TreeDesc(s.bl_tree,static_bl_desc);s.bi_buf=0;s.bi_valid=0;/* Initialize the first block of the first file: */init_block(s);}/* ===========================================================================
 * Send a stored block
 */function _tr_stored_block(s,buf,stored_len,last)//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{send_bits(s,(STORED_BLOCK<<1)+(last?1:0),3);/* send block type */copy_block(s,buf,stored_len,true);/* with header */}/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */function _tr_align(s){send_bits(s,STATIC_TREES<<1,3);send_code(s,END_BLOCK,static_ltree);bi_flush(s);}/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */function _tr_flush_block(s,buf,stored_len,last)//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{var opt_lenb,static_lenb;/* opt_len and static_len in bytes */var max_blindex=0;/* index of last bit length code of non zero freq *//* Build the Huffman trees unless a stored block is forced */if(s.level>0){/* Check if the file is binary or text */if(s.strm.data_type===Z_UNKNOWN){s.strm.data_type=detect_data_type(s);}/* Construct the literal and distance trees */build_tree(s,s.l_desc);// Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
build_tree(s,s.d_desc);// Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
/* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     *//* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */max_blindex=build_bl_tree(s);/* Determine the best encoding. Compute the block lengths in bytes. */opt_lenb=s.opt_len+3+7>>>3;static_lenb=s.static_len+3+7>>>3;// Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
//        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
//        s->last_lit));
if(static_lenb<=opt_lenb){opt_lenb=static_lenb;}}else{// Assert(buf != (char*)0, "lost buf");
opt_lenb=static_lenb=stored_len+5;/* force a stored block */}if(stored_len+4<=opt_lenb&&buf!==-1){/* 4: two words for the lengths *//* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */_tr_stored_block(s,buf,stored_len,last);}else if(s.strategy===Z_FIXED||static_lenb===opt_lenb){send_bits(s,(STATIC_TREES<<1)+(last?1:0),3);compress_block(s,static_ltree,static_dtree);}else{send_bits(s,(DYN_TREES<<1)+(last?1:0),3);send_all_trees(s,s.l_desc.max_code+1,s.d_desc.max_code+1,max_blindex+1);compress_block(s,s.dyn_ltree,s.dyn_dtree);}// Assert (s->compressed_len == s->bits_sent, "bad compressed size");
/* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */init_block(s);if(last){bi_windup(s);}// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
}/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */function _tr_tally(s,dist,lc)//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{//var out_length, in_length, dcode;
s.pending_buf[s.d_buf+s.last_lit*2]=dist>>>8&0xff;s.pending_buf[s.d_buf+s.last_lit*2+1]=dist&0xff;s.pending_buf[s.l_buf+s.last_lit]=lc&0xff;s.last_lit++;if(dist===0){/* lc is the unmatched char */s.dyn_ltree[lc*2]/*.Freq*/++;}else{s.matches++;/* Here, lc is the match length - MIN_MATCH */dist--;/* dist = match distance - 1 *///Assert((ush)dist < (ush)MAX_DIST(s) &&
//       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
//       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
s.dyn_ltree[(_length_code[lc]+LITERALS+1)*2]/*.Freq*/++;s.dyn_dtree[d_code(dist)*2]/*.Freq*/++;}// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif
return s.last_lit===s.lit_bufsize-1;/* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */}exports._tr_init=_tr_init;exports._tr_stored_block=_tr_stored_block;exports._tr_flush_block=_tr_flush_block;exports._tr_tally=_tr_tally;exports._tr_align=_tr_align;/***/},/* 76 *//***/function(module,exports,__webpack_require__){/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 * @api private
 */var isObject=__webpack_require__(26);function isFunction(fn){var tag=isObject(fn)?Object.prototype.toString.call(fn):'';return tag==='[object Function]';}module.exports=isFunction;/***/},/* 77 *//***/function(module,exports,__webpack_require__){/**
 * Module of mixed-in functions shared between node and client code
 */var isObject=__webpack_require__(26);/**
 * Expose `RequestBase`.
 */module.exports=RequestBase;/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */function RequestBase(obj){if(obj)return mixin(obj);}/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function mixin(obj){for(var key in RequestBase.prototype){obj[key]=RequestBase.prototype[key];}return obj;}/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.clearTimeout=function _clearTimeout(){this._timeout=0;this._responseTimeout=0;clearTimeout(this._timer);clearTimeout(this._responseTimeoutTimer);return this;};/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */RequestBase.prototype.parse=function parse(fn){this._parser=fn;return this;};/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.responseType=function(val){this._responseType=val;return this;};/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */RequestBase.prototype.serialize=function serialize(fn){this._serializer=fn;return this;};/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, read, deadline}
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.timeout=function timeout(options){if(!options||'object'!==(typeof options==='undefined'?'undefined':_typeof(options))){this._timeout=options;this._responseTimeout=0;return this;}if('undefined'!==typeof options.deadline){this._timeout=options.deadline;}if('undefined'!==typeof options.response){this._responseTimeout=options.response;}return this;};/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} reject
 * @return {Request}
 */RequestBase.prototype.then=function then(resolve,reject){if(!this._fullfilledPromise){var self=this;if(this._endCalled){console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");}this._fullfilledPromise=new Promise(function(innerResolve,innerReject){self.end(function(err,res){if(err)innerReject(err);else innerResolve(res);});});}return this._fullfilledPromise.then(resolve,reject);};RequestBase.prototype.catch=function(cb){return this.then(undefined,cb);};/**
 * Allow for extension
 */RequestBase.prototype.use=function use(fn){fn(this);return this;};RequestBase.prototype.ok=function(cb){if('function'!==typeof cb)throw Error("Callback required");this._okCallback=cb;return this;};RequestBase.prototype._isResponseOK=function(res){if(!res){return false;}if(this._okCallback){return this._okCallback(res);}return res.status>=200&&res.status<300;};/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */RequestBase.prototype.get=function(field){return this._header[field.toLowerCase()];};/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */RequestBase.prototype.getHeader=RequestBase.prototype.get;/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.set=function(field,val){if(isObject(field)){for(var key in field){this.set(key,field[key]);}return this;}this._header[field.toLowerCase()]=val;this.header[field]=val;return this;};/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */RequestBase.prototype.unset=function(field){delete this._header[field.toLowerCase()];delete this.header[field];return this;};/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.field=function(name,val){// name should be either a string or an object.
if(null===name||undefined===name){throw new Error('.field(name, val) name can not be empty');}if(isObject(name)){for(var key in name){this.field(key,name[key]);}return this;}if(Array.isArray(val)){for(var i in val){this.field(name,val[i]);}return this;}// val should be defined now
if(null===val||undefined===val){throw new Error('.field(name, val) val can not be empty');}if('boolean'===typeof val){val=''+val;}this._getFormData().append(name,val);return this;};/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */RequestBase.prototype.abort=function(){if(this._aborted){return this;}this._aborted=true;this.xhr&&this.xhr.abort();// browser
this.req&&this.req.abort();// node
this.clearTimeout();this.emit('abort');return this;};/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */RequestBase.prototype.withCredentials=function(){// This is browser-only functionality. Node side is no-op.
this._withCredentials=true;return this;};/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.redirects=function(n){this._maxRedirects=n;return this;};/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */RequestBase.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header};};/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.send=function(data){var isObj=isObject(data);var type=this._header['content-type'];if(isObj&&!this._data){if(Array.isArray(data)){this._data=[];}else if(!this._isHost(data)){this._data={};}}else if(data&&this._data&&this._isHost(this._data)){throw Error("Can't merge these send calls");}// merge
if(isObj&&isObject(this._data)){for(var key in data){this._data[key]=data[key];}}else if('string'==typeof data){// default to x-www-form-urlencoded
if(!type)this.type('form');type=this._header['content-type'];if('application/x-www-form-urlencoded'==type){this._data=this._data?this._data+'&'+data:data;}else{this._data=(this._data||'')+data;}}else{this._data=data;}if(!isObj||this._isHost(data)){return this;}// default to json
if(!type)this.type('json');return this;};/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */RequestBase.prototype.sortQuery=function(sort){// _sort default to true but otherwise can be a function or boolean
this._sort=typeof sort==='undefined'?true:sort;return this;};/**
 * Invoke callback with timeout error.
 *
 * @api private
 */RequestBase.prototype._timeoutError=function(reason,timeout){if(this._aborted){return;}var err=new Error(reason+timeout+'ms exceeded');err.timeout=timeout;err.code='ECONNABORTED';this.timedout=true;this.abort();this.callback(err);};RequestBase.prototype._setTimeouts=function(){var self=this;// deadline
if(this._timeout&&!this._timer){this._timer=setTimeout(function(){self._timeoutError('Timeout of ',self._timeout);},this._timeout);}// response timeout
if(this._responseTimeout&&!this._responseTimeoutTimer){this._responseTimeoutTimer=setTimeout(function(){self._timeoutError('Response timeout of ',self._responseTimeout);},this._responseTimeout);}};/***/},/* 78 *//***/function(module,exports,__webpack_require__){/**
 * Module dependencies.
 */var utils=__webpack_require__(79);/**
 * Expose `ResponseBase`.
 */module.exports=ResponseBase;/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */function ResponseBase(obj){if(obj)return mixin(obj);}/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function mixin(obj){for(var key in ResponseBase.prototype){obj[key]=ResponseBase.prototype[key];}return obj;}/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */ResponseBase.prototype.get=function(field){return this.header[field.toLowerCase()];};/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */ResponseBase.prototype._setHeaderProperties=function(header){// TODO: moar!
// TODO: make this a util
// content-type
var ct=header['content-type']||'';this.type=utils.type(ct);// params
var params=utils.params(ct);for(var key in params){this[key]=params[key];}this.links={};// links
try{if(header.link){this.links=utils.parseLinks(header.link);}}catch(err){// ignore
}};/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */ResponseBase.prototype._setStatusProperties=function(status){var type=status/100|0;// status / class
this.status=this.statusCode=status;this.statusType=type;// basics
this.info=1==type;this.ok=2==type;this.redirect=3==type;this.clientError=4==type;this.serverError=5==type;this.error=4==type||5==type?this.toError():false;// sugar
this.accepted=202==status;this.noContent=204==status;this.badRequest=400==status;this.unauthorized=401==status;this.notAcceptable=406==status;this.forbidden=403==status;this.notFound=404==status;};/***/},/* 79 *//***/function(module,exports){/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */exports.type=function(str){return str.split(/ *; */).shift();};/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */exports.params=function(str){return str.split(/ *; */).reduce(function(obj,str){var parts=str.split(/ *= */);var key=parts.shift();var val=parts.shift();if(key&&val)obj[key]=val;return obj;},{});};/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */exports.parseLinks=function(str){return str.split(/ *, */).reduce(function(obj,str){var parts=str.split(/ *; */);var url=parts[0].slice(1,-1);var rel=parts[1].split(/ *= */)[1].slice(1,-1);obj[rel]=url;return obj;},{});};/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */exports.cleanHeader=function(header,shouldStripCookie){delete header['content-type'];delete header['content-length'];delete header['transfer-encoding'];delete header['host'];if(shouldStripCookie){delete header['cookie'];}return header;};/***/},/* 80 *//***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");}catch(e){// This works if the window reference is available
if((typeof window==='undefined'?'undefined':_typeof(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 81 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var Guild=__webpack_require__(17);var User=__webpack_require__(6);var DMChannel=__webpack_require__(30);var Emoji=__webpack_require__(10);var TextChannel=__webpack_require__(41);var VoiceChannel=__webpack_require__(42);var GuildChannel=__webpack_require__(13);var GroupDMChannel=__webpack_require__(31);var ClientDataManager=function(){function ClientDataManager(client){_classCallCheck(this,ClientDataManager);this.client=client;}ClientDataManager.prototype.newGuild=function newGuild(data){var _this44=this;var already=this.client.guilds.has(data.id);var guild=new Guild(this.client,data);this.client.guilds.set(guild.id,guild);if(this.pastReady&&!already){/**
       * Emitted whenever the client joins a guild.
       * @event Client#guildCreate
       * @param {Guild} guild The created guild
       */if(this.client.options.fetchAllMembers){guild.fetchMembers().then(function(){_this44.client.emit(Constants.Events.GUILD_CREATE,guild);});}else{this.client.emit(Constants.Events.GUILD_CREATE,guild);}}return guild;};ClientDataManager.prototype.newUser=function newUser(data){if(this.client.users.has(data.id))return this.client.users.get(data.id);var user=new User(this.client,data);this.client.users.set(user.id,user);return user;};ClientDataManager.prototype.newChannel=function newChannel(data,guild){var already=this.client.channels.has(data.id);var channel=void 0;if(data.type===Constants.ChannelTypes.DM){channel=new DMChannel(this.client,data);}else if(data.type===Constants.ChannelTypes.groupDM){channel=new GroupDMChannel(this.client,data);}else{guild=guild||this.client.guilds.get(data.guild_id);if(guild){if(data.type===Constants.ChannelTypes.text){channel=new TextChannel(guild,data);guild.channels.set(channel.id,channel);}else if(data.type===Constants.ChannelTypes.voice){channel=new VoiceChannel(guild,data);guild.channels.set(channel.id,channel);}}}if(channel){if(this.pastReady&&!already)this.client.emit(Constants.Events.CHANNEL_CREATE,channel);this.client.channels.set(channel.id,channel);return channel;}return null;};ClientDataManager.prototype.newEmoji=function newEmoji(data,guild){var already=guild.emojis.has(data.id);if(data&&!already){var emoji=new Emoji(guild,data);this.client.emit(Constants.Events.GUILD_EMOJI_CREATE,emoji);guild.emojis.set(emoji.id,emoji);return emoji;}else if(already){return guild.emojis.get(data.id);}return null;};ClientDataManager.prototype.killEmoji=function killEmoji(emoji){if(!(emoji instanceof Emoji&&emoji.guild))return;this.client.emit(Constants.Events.GUILD_EMOJI_DELETE,emoji);emoji.guild.emojis.delete(emoji.id);};ClientDataManager.prototype.killGuild=function killGuild(guild){var already=this.client.guilds.has(guild.id);this.client.guilds.delete(guild.id);if(already&&this.pastReady)this.client.emit(Constants.Events.GUILD_DELETE,guild);};ClientDataManager.prototype.killUser=function killUser(user){this.client.users.delete(user.id);};ClientDataManager.prototype.killChannel=function killChannel(channel){this.client.channels.delete(channel.id);if(channel instanceof GuildChannel)channel.guild.channels.delete(channel.id);};ClientDataManager.prototype.updateGuild=function updateGuild(currentGuild,newData){var oldGuild=cloneObject(currentGuild);currentGuild.setup(newData);if(this.pastReady)this.client.emit(Constants.Events.GUILD_UPDATE,oldGuild,currentGuild);};ClientDataManager.prototype.updateChannel=function updateChannel(currentChannel,newData){currentChannel.setup(newData);};ClientDataManager.prototype.updateEmoji=function updateEmoji(currentEmoji,newData){var oldEmoji=cloneObject(currentEmoji);currentEmoji.setup(newData);this.client.emit(Constants.Events.GUILD_EMOJI_UPDATE,oldEmoji,currentEmoji);};_createClass(ClientDataManager,[{key:'pastReady',get:function get(){return this.client.ws.status===Constants.Status.READY;}}]);return ClientDataManager;}();module.exports=ClientDataManager;/***/},/* 82 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);/**
 * Manages the State and Background Tasks of the Client
 * @private
 */var ClientManager=function(){function ClientManager(client){_classCallCheck(this,ClientManager);/**
     * The Client that instantiated this Manager
     * @type {Client}
     */this.client=client;/**
     * The heartbeat interval, null if not yet set
     * @type {?number}
     */this.heartbeatInterval=null;}/**
   * Connects the Client to the WebSocket
   * @param {string} token The authorization token
   * @param {Function} resolve Function to run when connection is successful
   * @param {Function} reject Function to run when connection fails
   */ClientManager.prototype.connectToWebSocket=function connectToWebSocket(token,resolve,reject){var _this45=this;this.client.emit(Constants.Events.DEBUG,'Authenticated using token '+token);this.client.token=token;var timeout=this.client.setTimeout(function(){return reject(new Error(Constants.Errors.TOOK_TOO_LONG));},1000*300);this.client.rest.methods.getGateway().then(function(gateway){_this45.client.emit(Constants.Events.DEBUG,'Using gateway '+gateway);_this45.client.ws.connect(gateway);_this45.client.ws.once('close',function(event){if(event.code===4004)reject(new Error(Constants.Errors.BAD_LOGIN));if(event.code===4010)reject(new Error(Constants.Errors.INVALID_SHARD));});_this45.client.once(Constants.Events.READY,function(){resolve(token);_this45.client.clearTimeout(timeout);});},reject);};/**
   * Sets up a keep-alive interval to keep the Client's connection valid
   * @param {number} time The interval in milliseconds at which heartbeat packets should be sent
   */ClientManager.prototype.setupKeepAlive=function setupKeepAlive(time){var _this46=this;this.heartbeatInterval=this.client.setInterval(function(){return _this46.client.ws.heartbeat(true);},time);};ClientManager.prototype.destroy=function destroy(){var _this47=this;this.client.ws.destroy();if(this.client.user.bot){this.client.token=null;return Promise.resolve();}else{return this.client.rest.methods.logout().then(function(){_this47.client.token=null;});}};return ClientManager;}();module.exports=ClientManager;/***/},/* 83 *//***/function(module,exports,__webpack_require__){var ActionsManager=function(){function ActionsManager(client){_classCallCheck(this,ActionsManager);this.client=client;this.register(__webpack_require__(100));this.register(__webpack_require__(101));this.register(__webpack_require__(102));this.register(__webpack_require__(106));this.register(__webpack_require__(103));this.register(__webpack_require__(104));this.register(__webpack_require__(105));this.register(__webpack_require__(84));this.register(__webpack_require__(85));this.register(__webpack_require__(86));this.register(__webpack_require__(88));this.register(__webpack_require__(99));this.register(__webpack_require__(92));this.register(__webpack_require__(93));this.register(__webpack_require__(87));this.register(__webpack_require__(94));this.register(__webpack_require__(95));this.register(__webpack_require__(96));this.register(__webpack_require__(107));this.register(__webpack_require__(109));this.register(__webpack_require__(108));this.register(__webpack_require__(98));this.register(__webpack_require__(89));this.register(__webpack_require__(90));this.register(__webpack_require__(91));this.register(__webpack_require__(97));}ActionsManager.prototype.register=function register(Action){this[Action.name.replace(/Action$/,'')]=new Action(this.client);};return ActionsManager;}();module.exports=ActionsManager;/***/},/* 84 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var ChannelCreateAction=function(_Action){_inherits(ChannelCreateAction,_Action);function ChannelCreateAction(){_classCallCheck(this,ChannelCreateAction);return _possibleConstructorReturn(this,_Action.apply(this,arguments));}ChannelCreateAction.prototype.handle=function handle(data){var client=this.client;var channel=client.dataManager.newChannel(data);return{channel:channel};};return ChannelCreateAction;}(Action);module.exports=ChannelCreateAction;/***/},/* 85 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var ChannelDeleteAction=function(_Action2){_inherits(ChannelDeleteAction,_Action2);function ChannelDeleteAction(client){_classCallCheck(this,ChannelDeleteAction);var _this49=_possibleConstructorReturn(this,_Action2.call(this,client));_this49.deleted=new Map();return _this49;}ChannelDeleteAction.prototype.handle=function handle(data){var client=this.client;var channel=client.channels.get(data.id);if(channel){client.dataManager.killChannel(channel);this.deleted.set(channel.id,channel);this.scheduleForDeletion(channel.id);}else{channel=this.deleted.get(data.id)||null;}return{channel:channel};};ChannelDeleteAction.prototype.scheduleForDeletion=function scheduleForDeletion(id){var _this50=this;this.client.setTimeout(function(){return _this50.deleted.delete(id);},this.client.options.restWsBridgeTimeout);};return ChannelDeleteAction;}(Action);module.exports=ChannelDeleteAction;/***/},/* 86 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var ChannelUpdateAction=function(_Action3){_inherits(ChannelUpdateAction,_Action3);function ChannelUpdateAction(){_classCallCheck(this,ChannelUpdateAction);return _possibleConstructorReturn(this,_Action3.apply(this,arguments));}ChannelUpdateAction.prototype.handle=function handle(data){var client=this.client;var channel=client.channels.get(data.id);if(channel){var oldChannel=cloneObject(channel);channel.setup(data);client.emit(Constants.Events.CHANNEL_UPDATE,oldChannel,channel);return{old:oldChannel,updated:channel};}return{old:null,updated:null};};return ChannelUpdateAction;}(Action);/**
 * Emitted whenever a channel is updated - e.g. name change, topic change.
 * @event Client#channelUpdate
 * @param {Channel} oldChannel The channel before the update
 * @param {Channel} newChannel The channel after the update
 */module.exports=ChannelUpdateAction;/***/},/* 87 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var GuildBanRemove=function(_Action4){_inherits(GuildBanRemove,_Action4);function GuildBanRemove(){_classCallCheck(this,GuildBanRemove);return _possibleConstructorReturn(this,_Action4.apply(this,arguments));}GuildBanRemove.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.guild_id);var user=client.dataManager.newUser(data.user);if(guild&&user)client.emit(Constants.Events.GUILD_BAN_REMOVE,guild,user);};return GuildBanRemove;}(Action);module.exports=GuildBanRemove;/***/},/* 88 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var GuildDeleteAction=function(_Action5){_inherits(GuildDeleteAction,_Action5);function GuildDeleteAction(client){_classCallCheck(this,GuildDeleteAction);var _this53=_possibleConstructorReturn(this,_Action5.call(this,client));_this53.deleted=new Map();return _this53;}GuildDeleteAction.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.id);if(guild){if(guild.available&&data.unavailable){// guild is unavailable
guild.available=false;client.emit(Constants.Events.GUILD_UNAVAILABLE,guild);// stops the GuildDelete packet thinking a guild was actually deleted,
// handles emitting of event itself
return{guild:null};}// delete guild
client.guilds.delete(guild.id);this.deleted.set(guild.id,guild);this.scheduleForDeletion(guild.id);}else{guild=this.deleted.get(data.id)||null;}return{guild:guild};};GuildDeleteAction.prototype.scheduleForDeletion=function scheduleForDeletion(id){var _this54=this;this.client.setTimeout(function(){return _this54.deleted.delete(id);},this.client.options.restWsBridgeTimeout);};return GuildDeleteAction;}(Action);/**
 * Emitted whenever a guild becomes unavailable, likely due to a server outage.
 * @event Client#guildUnavailable
 * @param {Guild} guild The guild that has become unavailable.
 */module.exports=GuildDeleteAction;/***/},/* 89 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var GuildEmojiCreateAction=function(_Action6){_inherits(GuildEmojiCreateAction,_Action6);function GuildEmojiCreateAction(){_classCallCheck(this,GuildEmojiCreateAction);return _possibleConstructorReturn(this,_Action6.apply(this,arguments));}GuildEmojiCreateAction.prototype.handle=function handle(guild,createdEmoji){var client=this.client;var emoji=client.dataManager.newEmoji(createdEmoji,guild);return{emoji:emoji};};return GuildEmojiCreateAction;}(Action);/**
 * Emitted whenever a custom emoji is created in a guild
 * @event Client#emojiCreate
 * @param {Emoji} emoji The emoji that was created.
 */module.exports=GuildEmojiCreateAction;/***/},/* 90 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var GuildEmojiDeleteAction=function(_Action7){_inherits(GuildEmojiDeleteAction,_Action7);function GuildEmojiDeleteAction(){_classCallCheck(this,GuildEmojiDeleteAction);return _possibleConstructorReturn(this,_Action7.apply(this,arguments));}GuildEmojiDeleteAction.prototype.handle=function handle(emoji){var client=this.client;client.dataManager.killEmoji(emoji);return{emoji:emoji};};return GuildEmojiDeleteAction;}(Action);/**
 * Emitted whenever a custom guild emoji is deleted
 * @event Client#emojiDelete
 * @param {Emoji} emoji The emoji that was deleted.
 */module.exports=GuildEmojiDeleteAction;/***/},/* 91 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var GuildEmojiUpdateAction=function(_Action8){_inherits(GuildEmojiUpdateAction,_Action8);function GuildEmojiUpdateAction(){_classCallCheck(this,GuildEmojiUpdateAction);return _possibleConstructorReturn(this,_Action8.apply(this,arguments));}GuildEmojiUpdateAction.prototype.handle=function handle(oldEmoji,newEmoji){this.client.dataManager.updateEmoji(oldEmoji,newEmoji);};return GuildEmojiUpdateAction;}(Action);/**
 * Emitted whenever a custom guild emoji is updated
 * @event Client#emojiUpdate
 * @param {Emoji} oldEmoji The old emoji
 * @param {Emoji} newEmoji The new emoji
 */module.exports=GuildEmojiUpdateAction;/***/},/* 92 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var GuildMemberGetAction=function(_Action9){_inherits(GuildMemberGetAction,_Action9);function GuildMemberGetAction(){_classCallCheck(this,GuildMemberGetAction);return _possibleConstructorReturn(this,_Action9.apply(this,arguments));}GuildMemberGetAction.prototype.handle=function handle(guild,data){var member=guild._addMember(data,false);return{member:member};};return GuildMemberGetAction;}(Action);module.exports=GuildMemberGetAction;/***/},/* 93 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var GuildMemberRemoveAction=function(_Action10){_inherits(GuildMemberRemoveAction,_Action10);function GuildMemberRemoveAction(client){_classCallCheck(this,GuildMemberRemoveAction);var _this59=_possibleConstructorReturn(this,_Action10.call(this,client));_this59.deleted=new Map();return _this59;}GuildMemberRemoveAction.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.guild_id);if(guild){var member=guild.members.get(data.user.id);if(member){guild.memberCount--;guild._removeMember(member);this.deleted.set(guild.id+data.user.id,member);if(client.status===Constants.Status.READY)client.emit(Constants.Events.GUILD_MEMBER_REMOVE,member);this.scheduleForDeletion(guild.id,data.user.id);}else{member=this.deleted.get(guild.id+data.user.id)||null;}return{guild:guild,member:member};}return{guild:guild,member:null};};GuildMemberRemoveAction.prototype.scheduleForDeletion=function scheduleForDeletion(guildID,userID){var _this60=this;this.client.setTimeout(function(){return _this60.deleted.delete(guildID+userID);},this.client.options.restWsBridgeTimeout);};return GuildMemberRemoveAction;}(Action);/**
 * Emitted whenever a member leaves a guild, or is kicked.
 * @event Client#guildMemberRemove
 * @param {GuildMember} member The member that has left/been kicked from the guild.
 */module.exports=GuildMemberRemoveAction;/***/},/* 94 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var Role=__webpack_require__(8);var GuildRoleCreate=function(_Action11){_inherits(GuildRoleCreate,_Action11);function GuildRoleCreate(){_classCallCheck(this,GuildRoleCreate);return _possibleConstructorReturn(this,_Action11.apply(this,arguments));}GuildRoleCreate.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.guild_id);if(guild){var already=guild.roles.has(data.role.id);var role=new Role(guild,data.role);guild.roles.set(role.id,role);if(!already)client.emit(Constants.Events.GUILD_ROLE_CREATE,role);return{role:role};}return{role:null};};return GuildRoleCreate;}(Action);/**
 * Emitted whenever a role is created.
 * @event Client#roleCreate
 * @param {Role} role The role that was created.
 */module.exports=GuildRoleCreate;/***/},/* 95 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var GuildRoleDeleteAction=function(_Action12){_inherits(GuildRoleDeleteAction,_Action12);function GuildRoleDeleteAction(client){_classCallCheck(this,GuildRoleDeleteAction);var _this62=_possibleConstructorReturn(this,_Action12.call(this,client));_this62.deleted=new Map();return _this62;}GuildRoleDeleteAction.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.guild_id);if(guild){var role=guild.roles.get(data.role_id);if(role){guild.roles.delete(data.role_id);this.deleted.set(guild.id+data.role_id,role);this.scheduleForDeletion(guild.id,data.role_id);client.emit(Constants.Events.GUILD_ROLE_DELETE,role);}else{role=this.deleted.get(guild.id+data.role_id)||null;}return{role:role};}return{role:null};};GuildRoleDeleteAction.prototype.scheduleForDeletion=function scheduleForDeletion(guildID,roleID){var _this63=this;this.client.setTimeout(function(){return _this63.deleted.delete(guildID+roleID);},this.client.options.restWsBridgeTimeout);};return GuildRoleDeleteAction;}(Action);/**
 * Emitted whenever a guild role is deleted.
 * @event Client#roleDelete
 * @param {Role} role The role that was deleted.
 */module.exports=GuildRoleDeleteAction;/***/},/* 96 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var GuildRoleUpdateAction=function(_Action13){_inherits(GuildRoleUpdateAction,_Action13);function GuildRoleUpdateAction(){_classCallCheck(this,GuildRoleUpdateAction);return _possibleConstructorReturn(this,_Action13.apply(this,arguments));}GuildRoleUpdateAction.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.guild_id);if(guild){var roleData=data.role;var oldRole=null;var role=guild.roles.get(roleData.id);if(role){oldRole=cloneObject(role);role.setup(data.role);client.emit(Constants.Events.GUILD_ROLE_UPDATE,oldRole,role);}return{old:oldRole,updated:role};}return{old:null,updated:null};};return GuildRoleUpdateAction;}(Action);/**
 * Emitted whenever a guild role is updated.
 * @event Client#roleUpdate
 * @param {Role} oldRole The role before the update.
 * @param {Role} newRole The role after the update.
 */module.exports=GuildRoleUpdateAction;/***/},/* 97 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var GuildRolesPositionUpdate=function(_Action14){_inherits(GuildRolesPositionUpdate,_Action14);function GuildRolesPositionUpdate(){_classCallCheck(this,GuildRolesPositionUpdate);return _possibleConstructorReturn(this,_Action14.apply(this,arguments));}GuildRolesPositionUpdate.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.guild_id);if(guild){for(var _iterator59=data.roles,_isArray59=Array.isArray(_iterator59),_i60=0,_iterator59=_isArray59?_iterator59:_iterator59[Symbol.iterator]();;){var _ref72;if(_isArray59){if(_i60>=_iterator59.length)break;_ref72=_iterator59[_i60++];}else{_i60=_iterator59.next();if(_i60.done)break;_ref72=_i60.value;}var partialRole=_ref72;var role=guild.roles.get(partialRole.id);if(role){role.position=partialRole.position;}}}return{guild:guild};};return GuildRolesPositionUpdate;}(Action);module.exports=GuildRolesPositionUpdate;/***/},/* 98 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var GuildSync=function(_Action15){_inherits(GuildSync,_Action15);function GuildSync(){_classCallCheck(this,GuildSync);return _possibleConstructorReturn(this,_Action15.apply(this,arguments));}GuildSync.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.id);if(guild){data.presences=data.presences||[];for(var _iterator60=data.presences,_isArray60=Array.isArray(_iterator60),_i61=0,_iterator60=_isArray60?_iterator60:_iterator60[Symbol.iterator]();;){var _ref73;if(_isArray60){if(_i61>=_iterator60.length)break;_ref73=_iterator60[_i61++];}else{_i61=_iterator60.next();if(_i61.done)break;_ref73=_i61.value;}var presence=_ref73;guild._setPresence(presence.user.id,presence);}data.members=data.members||[];for(var _iterator61=data.members,_isArray61=Array.isArray(_iterator61),_i62=0,_iterator61=_isArray61?_iterator61:_iterator61[Symbol.iterator]();;){var _ref74;if(_isArray61){if(_i62>=_iterator61.length)break;_ref74=_iterator61[_i62++];}else{_i62=_iterator61.next();if(_i62.done)break;_ref74=_i62.value;}var syncMember=_ref74;var member=guild.members.get(syncMember.user.id);if(member){guild._updateMember(member,syncMember);}else{guild._addMember(syncMember,false);}}}};return GuildSync;}(Action);module.exports=GuildSync;/***/},/* 99 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var GuildUpdateAction=function(_Action16){_inherits(GuildUpdateAction,_Action16);function GuildUpdateAction(){_classCallCheck(this,GuildUpdateAction);return _possibleConstructorReturn(this,_Action16.apply(this,arguments));}GuildUpdateAction.prototype.handle=function handle(data){var client=this.client;var guild=client.guilds.get(data.id);if(guild){var oldGuild=cloneObject(guild);guild.setup(data);client.emit(Constants.Events.GUILD_UPDATE,oldGuild,guild);return{old:oldGuild,updated:guild};}return{old:null,updated:null};};return GuildUpdateAction;}(Action);/**
 * Emitted whenever a guild is updated - e.g. name change.
 * @event Client#guildUpdate
 * @param {Guild} oldGuild The guild before the update.
 * @param {Guild} newGuild The guild after the update.
 */module.exports=GuildUpdateAction;/***/},/* 100 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Message=__webpack_require__(11);var MessageCreateAction=function(_Action17){_inherits(MessageCreateAction,_Action17);function MessageCreateAction(){_classCallCheck(this,MessageCreateAction);return _possibleConstructorReturn(this,_Action17.apply(this,arguments));}MessageCreateAction.prototype.handle=function handle(data){var client=this.client;var channel=client.channels.get((data instanceof Array?data[0]:data).channel_id);var user=client.users.get((data instanceof Array?data[0]:data).author.id);if(channel){var member=channel.guild?channel.guild.member(user):null;if(data instanceof Array){var messages=new Array(data.length);for(var i=0;i<data.length;i++){messages[i]=channel._cacheMessage(new Message(channel,data[i],client));}channel.lastMessageID=messages[messages.length-1].id;if(user)user.lastMessageID=messages[messages.length-1].id;if(member)member.lastMessageID=messages[messages.length-1].id;return{messages:messages};}else{var message=channel._cacheMessage(new Message(channel,data,client));channel.lastMessageID=data.id;if(user)user.lastMessageID=data.id;if(member)member.lastMessageID=data.id;return{message:message};}}return{message:null};};return MessageCreateAction;}(Action);module.exports=MessageCreateAction;/***/},/* 101 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var MessageDeleteAction=function(_Action18){_inherits(MessageDeleteAction,_Action18);function MessageDeleteAction(client){_classCallCheck(this,MessageDeleteAction);var _this69=_possibleConstructorReturn(this,_Action18.call(this,client));_this69.deleted=new Map();return _this69;}MessageDeleteAction.prototype.handle=function handle(data){var client=this.client;var channel=client.channels.get(data.channel_id);if(channel){var message=channel.messages.get(data.id);if(message){channel.messages.delete(message.id);this.deleted.set(channel.id+message.id,message);this.scheduleForDeletion(channel.id,message.id);}else{message=this.deleted.get(channel.id+data.id)||null;}return{message:message};}return{message:null};};MessageDeleteAction.prototype.scheduleForDeletion=function scheduleForDeletion(channelID,messageID){var _this70=this;this.client.setTimeout(function(){return _this70.deleted.delete(channelID+messageID);},this.client.options.restWsBridgeTimeout);};return MessageDeleteAction;}(Action);module.exports=MessageDeleteAction;/***/},/* 102 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Collection=__webpack_require__(3);var Constants=__webpack_require__(0);var MessageDeleteBulkAction=function(_Action19){_inherits(MessageDeleteBulkAction,_Action19);function MessageDeleteBulkAction(){_classCallCheck(this,MessageDeleteBulkAction);return _possibleConstructorReturn(this,_Action19.apply(this,arguments));}MessageDeleteBulkAction.prototype.handle=function handle(data){var client=this.client;var channel=client.channels.get(data.channel_id);var ids=data.ids;var messages=new Collection();for(var _iterator62=ids,_isArray62=Array.isArray(_iterator62),_i63=0,_iterator62=_isArray62?_iterator62:_iterator62[Symbol.iterator]();;){var _ref75;if(_isArray62){if(_i63>=_iterator62.length)break;_ref75=_iterator62[_i63++];}else{_i63=_iterator62.next();if(_i63.done)break;_ref75=_i63.value;}var id=_ref75;var message=channel.messages.get(id);if(message)messages.set(message.id,message);}if(messages.size>0)client.emit(Constants.Events.MESSAGE_BULK_DELETE,messages);return{messages:messages};};return MessageDeleteBulkAction;}(Action);module.exports=MessageDeleteBulkAction;/***/},/* 103 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);/*
{ user_id: 'id',
     message_id: 'id',
     emoji: { name: '�', id: null },
     channel_id: 'id' } }
*/var MessageReactionAdd=function(_Action20){_inherits(MessageReactionAdd,_Action20);function MessageReactionAdd(){_classCallCheck(this,MessageReactionAdd);return _possibleConstructorReturn(this,_Action20.apply(this,arguments));}MessageReactionAdd.prototype.handle=function handle(data){var user=this.client.users.get(data.user_id);if(!user)return false;var channel=this.client.channels.get(data.channel_id);if(!channel||channel.type==='voice')return false;var message=channel.messages.get(data.message_id);if(!message)return false;if(!data.emoji)return false;var reaction=message._addReaction(data.emoji,user);if(reaction){this.client.emit(Constants.Events.MESSAGE_REACTION_ADD,reaction,user);}return{message:message,reaction:reaction,user:user};};return MessageReactionAdd;}(Action);/**
 * Emitted whenever a reaction is added to a message.
 * @event Client#messageReactionAdd
 * @param {MessageReaction} messageReaction The reaction object.
 * @param {User} user The user that applied the emoji or reaction emoji.
 */module.exports=MessageReactionAdd;/***/},/* 104 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);/*
{ user_id: 'id',
     message_id: 'id',
     emoji: { name: '�', id: null },
     channel_id: 'id' } }
*/var MessageReactionRemove=function(_Action21){_inherits(MessageReactionRemove,_Action21);function MessageReactionRemove(){_classCallCheck(this,MessageReactionRemove);return _possibleConstructorReturn(this,_Action21.apply(this,arguments));}MessageReactionRemove.prototype.handle=function handle(data){var user=this.client.users.get(data.user_id);if(!user)return false;var channel=this.client.channels.get(data.channel_id);if(!channel||channel.type==='voice')return false;var message=channel.messages.get(data.message_id);if(!message)return false;if(!data.emoji)return false;var reaction=message._removeReaction(data.emoji,user);if(reaction){this.client.emit(Constants.Events.MESSAGE_REACTION_REMOVE,reaction,user);}return{message:message,reaction:reaction,user:user};};return MessageReactionRemove;}(Action);/**
 * Emitted whenever a reaction is removed from a message.
 * @event Client#messageReactionRemove
 * @param {MessageReaction} messageReaction The reaction object.
 * @param {User} user The user that removed the emoji or reaction emoji.
 */module.exports=MessageReactionRemove;/***/},/* 105 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var MessageReactionRemoveAll=function(_Action22){_inherits(MessageReactionRemoveAll,_Action22);function MessageReactionRemoveAll(){_classCallCheck(this,MessageReactionRemoveAll);return _possibleConstructorReturn(this,_Action22.apply(this,arguments));}MessageReactionRemoveAll.prototype.handle=function handle(data){var channel=this.client.channels.get(data.channel_id);if(!channel||channel.type==='voice')return false;var message=channel.messages.get(data.message_id);if(!message)return false;message._clearReactions();this.client.emit(Constants.Events.MESSAGE_REACTION_REMOVE_ALL,message);return{message:message};};return MessageReactionRemoveAll;}(Action);/**
 * Emitted whenever all reactions are removed from a message.
 * @event Client#messageReactionRemoveAll
 * @param {MessageReaction} messageReaction The reaction object.
 */module.exports=MessageReactionRemoveAll;/***/},/* 106 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var MessageUpdateAction=function(_Action23){_inherits(MessageUpdateAction,_Action23);function MessageUpdateAction(){_classCallCheck(this,MessageUpdateAction);return _possibleConstructorReturn(this,_Action23.apply(this,arguments));}MessageUpdateAction.prototype.handle=function handle(data){var client=this.client;var channel=client.channels.get(data.channel_id);if(channel){var message=channel.messages.get(data.id);if(message){var oldMessage=cloneObject(message);message.patch(data);message._edits.unshift(oldMessage);client.emit(Constants.Events.MESSAGE_UPDATE,oldMessage,message);return{old:oldMessage,updated:message};}return{old:message,updated:message};}return{old:null,updated:null};};return MessageUpdateAction;}(Action);/**
 * Emitted whenever a message is updated - e.g. embed or content change.
 * @event Client#messageUpdate
 * @param {Message} oldMessage The message before the update.
 * @param {Message} newMessage The message after the update.
 */module.exports=MessageUpdateAction;/***/},/* 107 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var UserGetAction=function(_Action24){_inherits(UserGetAction,_Action24);function UserGetAction(){_classCallCheck(this,UserGetAction);return _possibleConstructorReturn(this,_Action24.apply(this,arguments));}UserGetAction.prototype.handle=function handle(data){var client=this.client;var user=client.dataManager.newUser(data);return{user:user};};return UserGetAction;}(Action);module.exports=UserGetAction;/***/},/* 108 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var UserNoteUpdateAction=function(_Action25){_inherits(UserNoteUpdateAction,_Action25);function UserNoteUpdateAction(){_classCallCheck(this,UserNoteUpdateAction);return _possibleConstructorReturn(this,_Action25.apply(this,arguments));}UserNoteUpdateAction.prototype.handle=function handle(data){var client=this.client;var oldNote=client.user.notes.get(data.id);var note=data.note.length?data.note:null;client.user.notes.set(data.id,note);client.emit(Constants.Events.USER_NOTE_UPDATE,data.id,oldNote,note);return{old:oldNote,updated:note};};return UserNoteUpdateAction;}(Action);/**
 * Emitted whenever a note is updated.
 * @event Client#userNoteUpdate
 * @param {User} user The user the note belongs to
 * @param {string} oldNote The note content before the update
 * @param {string} newNote The note content after the update
 */module.exports=UserNoteUpdateAction;/***/},/* 109 *//***/function(module,exports,__webpack_require__){var Action=__webpack_require__(2);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var UserUpdateAction=function(_Action26){_inherits(UserUpdateAction,_Action26);function UserUpdateAction(){_classCallCheck(this,UserUpdateAction);return _possibleConstructorReturn(this,_Action26.apply(this,arguments));}UserUpdateAction.prototype.handle=function handle(data){var client=this.client;if(client.user){if(client.user.equals(data)){return{old:client.user,updated:client.user};}var oldUser=cloneObject(client.user);client.user.patch(data);client.emit(Constants.Events.USER_UPDATE,oldUser,client.user);return{old:oldUser,updated:client.user};}return{old:null,updated:null};};return UserUpdateAction;}(Action);module.exports=UserUpdateAction;/***/},/* 110 *//***/function(module,exports,__webpack_require__){var request=__webpack_require__(25);var Constants=__webpack_require__(0);function getRoute(url){var route=url.split('?')[0];if(route.includes('/channels/')||route.includes('/guilds/')){var startInd=route.includes('/channels/')?route.indexOf('/channels/'):route.indexOf('/guilds/');var majorID=route.substring(startInd).split('/')[2];route=route.replace(/(\d{8,})/g,':id').replace(':id',majorID);}return route;}var APIRequest=function(){function APIRequest(rest,method,url,auth,data,file){_classCallCheck(this,APIRequest);this.rest=rest;this.method=method;this.url=url;this.auth=auth;this.data=data;this.file=file;this.route=getRoute(this.url);}APIRequest.prototype.getAuth=function getAuth(){if(this.rest.client.token&&this.rest.client.user&&this.rest.client.user.bot){return'Bot '+this.rest.client.token;}else if(this.rest.client.token){return this.rest.client.token;}throw new Error(Constants.Errors.NO_TOKEN);};APIRequest.prototype.gen=function gen(){var apiRequest=request[this.method](this.url);if(this.auth)apiRequest.set('authorization',this.getAuth());if(this.file&&this.file.file){apiRequest.attach('file',this.file.file,this.file.name);this.data=this.data||{};apiRequest.field('payload_json',JSON.stringify(this.data));}else if(this.data){apiRequest.send(this.data);}if(!this.rest.client.browser)apiRequest.set('User-Agent',this.rest.userAgentManager.userAgent);return apiRequest;};return APIRequest;}();module.exports=APIRequest;/***/},/* 111 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);var Collection=__webpack_require__(3);var splitMessage=__webpack_require__(43);var parseEmoji=__webpack_require__(154);var escapeMarkdown=__webpack_require__(15);var User=__webpack_require__(6);var GuildMember=__webpack_require__(14);var Message=__webpack_require__(11);var Role=__webpack_require__(8);var Invite=__webpack_require__(32);var Webhook=__webpack_require__(19);var UserProfile=__webpack_require__(152);var ClientOAuth2Application=__webpack_require__(28);var RESTMethods=function(){function RESTMethods(restManager){_classCallCheck(this,RESTMethods);this.rest=restManager;this.client=restManager.client;}RESTMethods.prototype.login=function login(){var _this79=this;var token=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.client.token;return new Promise(function(resolve,reject){if(typeof token!=='string')throw new Error(Constants.Errors.INVALID_TOKEN);token=token.replace(/^Bot\s*/i,'');_this79.client.manager.connectToWebSocket(token,resolve,reject);});};RESTMethods.prototype.logout=function logout(){return this.rest.makeRequest('post',Constants.Endpoints.logout,true,{});};RESTMethods.prototype.getGateway=function getGateway(){var _this80=this;return this.rest.makeRequest('get',Constants.Endpoints.gateway,true).then(function(res){_this80.client.ws.gateway=res.url+'/?v='+Constants.PROTOCOL_VERSION;return _this80.client.ws.gateway;});};RESTMethods.prototype.getBotGateway=function getBotGateway(){return this.rest.makeRequest('get',Constants.Endpoints.botGateway,true);};RESTMethods.prototype.sendMessage=function sendMessage(channel,content){var _this81=this;var _ref76=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},tts=_ref76.tts,nonce=_ref76.nonce,embed=_ref76.embed,disableEveryone=_ref76.disableEveryone,split=_ref76.split,code=_ref76.code;var file=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;return new Promise(function(resolve,reject){if(typeof content!=='undefined')content=_this81.client.resolver.resolveString(content);if(content){if(typeof code!=='undefined'&&(typeof code!=='boolean'||code===true)){content=escapeMarkdown(_this81.client.resolver.resolveString(content),true);content='```'+(typeof code!=='boolean'?code||'':'')+'\n'+content+'\n```';}if(disableEveryone||typeof disableEveryone==='undefined'&&_this81.client.options.disableEveryone){content=content.replace(/@(everyone|here)/g,'@\u200B$1');}if(split)content=splitMessage(content,(typeof split==='undefined'?'undefined':_typeof(split))==='object'?split:{});}var send=function send(chan){if(content instanceof Array){var messages=[];(function sendChunk(list,index){var options=index===list.length?{tts:tts,embed:embed}:{tts:tts};chan.send(list[index],options,index===list.length?file:null).then(function(message){messages.push(message);if(index>=list.length)return resolve(messages);return sendChunk(list,++index);});})(content,0);}else{_this81.rest.makeRequest('post',Constants.Endpoints.channelMessages(chan.id),true,{content:content,tts:tts,nonce:nonce,embed:embed},file).then(function(data){return resolve(_this81.client.actions.MessageCreate.handle(data).message);},reject);}};if(channel instanceof User||channel instanceof GuildMember){_this81.createDM(channel).then(send,reject);}else{send(channel);}});};RESTMethods.prototype.updateMessage=function updateMessage(message,content){var _this82=this;var _ref77=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},embed=_ref77.embed,code=_ref77.code;content=this.client.resolver.resolveString(content);if(typeof code!=='undefined'&&(typeof code!=='boolean'||code===true)){content=escapeMarkdown(this.client.resolver.resolveString(content),true);content='```'+(typeof code!=='boolean'?code||'':'')+'\n'+content+'\n```';}return this.rest.makeRequest('patch',Constants.Endpoints.channelMessage(message.channel.id,message.id),true,{content:content,embed:embed}).then(function(data){return _this82.client.actions.MessageUpdate.handle(data).updated;});};RESTMethods.prototype.deleteMessage=function deleteMessage(message){var _this83=this;return this.rest.makeRequest('del',Constants.Endpoints.channelMessage(message.channel.id,message.id),true).then(function(){return _this83.client.actions.MessageDelete.handle({id:message.id,channel_id:message.channel.id}).message;});};RESTMethods.prototype.bulkDeleteMessages=function bulkDeleteMessages(channel,messages){var _this84=this;return this.rest.makeRequest('post',Constants.Endpoints.channelMessages(channel.id)+'/bulk_delete',true,{messages:messages}).then(function(){return _this84.client.actions.MessageDeleteBulk.handle({channel_id:channel.id,ids:messages}).messages;});};RESTMethods.prototype.createChannel=function createChannel(guild,channelName,channelType,overwrites){var _this85=this;if(overwrites instanceof Collection)overwrites=overwrites.array();return this.rest.makeRequest('post',Constants.Endpoints.guildChannels(guild.id),true,{name:channelName,type:channelType,permission_overwrites:overwrites}).then(function(data){return _this85.client.actions.ChannelCreate.handle(data).channel;});};RESTMethods.prototype.createDM=function createDM(recipient){var _this86=this;var dmChannel=this.getExistingDM(recipient);if(dmChannel)return Promise.resolve(dmChannel);return this.rest.makeRequest('post',Constants.Endpoints.userChannels(this.client.user.id),true,{recipient_id:recipient.id}).then(function(data){return _this86.client.actions.ChannelCreate.handle(data).channel;});};RESTMethods.prototype.getExistingDM=function getExistingDM(recipient){return this.client.channels.find(function(channel){return channel.recipient&&channel.recipient.id===recipient.id;});};RESTMethods.prototype.deleteChannel=function deleteChannel(channel){var _this87=this;if(channel instanceof User||channel instanceof GuildMember)channel=this.getExistingDM(channel);if(!channel)return Promise.reject(new Error('No channel to delete.'));return this.rest.makeRequest('del',Constants.Endpoints.channel(channel.id),true).then(function(data){data.id=channel.id;return _this87.client.actions.ChannelDelete.handle(data).channel;});};RESTMethods.prototype.updateChannel=function updateChannel(channel,_data){var _this88=this;var data={};data.name=(_data.name||channel.name).trim();data.topic=_data.topic||channel.topic;data.position=_data.position||channel.position;data.bitrate=_data.bitrate||channel.bitrate;data.user_limit=_data.userLimit||channel.userLimit;return this.rest.makeRequest('patch',Constants.Endpoints.channel(channel.id),true,data).then(function(newData){return _this88.client.actions.ChannelUpdate.handle(newData).updated;});};RESTMethods.prototype.leaveGuild=function leaveGuild(guild){var _this89=this;if(guild.ownerID===this.client.user.id)return Promise.reject(new Error('Guild is owned by the client.'));return this.rest.makeRequest('del',Constants.Endpoints.meGuild(guild.id),true).then(function(){return _this89.client.actions.GuildDelete.handle({id:guild.id}).guild;});};RESTMethods.prototype.createGuild=function createGuild(options){var _this90=this;options.icon=this.client.resolver.resolveBase64(options.icon)||null;options.region=options.region||'us-central';return new Promise(function(resolve,reject){_this90.rest.makeRequest('post',Constants.Endpoints.guilds,true,options).then(function(data){if(_this90.client.guilds.has(data.id)){resolve(_this90.client.guilds.get(data.id));return;}var handleGuild=function handleGuild(guild){if(guild.id===data.id){_this90.client.removeListener('guildCreate',handleGuild);_this90.client.clearTimeout(timeout);resolve(guild);}};_this90.client.on('guildCreate',handleGuild);var timeout=_this90.client.setTimeout(function(){_this90.client.removeListener('guildCreate',handleGuild);reject(new Error('Took too long to receive guild data.'));},10000);},reject);});};// untested but probably will work
RESTMethods.prototype.deleteGuild=function deleteGuild(guild){var _this91=this;return this.rest.makeRequest('del',Constants.Endpoints.guild(guild.id),true).then(function(){return _this91.client.actions.GuildDelete.handle({id:guild.id}).guild;});};RESTMethods.prototype.getUser=function getUser(userID){var _this92=this;return this.rest.makeRequest('get',Constants.Endpoints.user(userID),true).then(function(data){return _this92.client.actions.UserGet.handle(data).user;});};RESTMethods.prototype.updateCurrentUser=function updateCurrentUser(_data,password){var _this93=this;var user=this.client.user;var data={};data.username=_data.username||user.username;data.avatar=this.client.resolver.resolveBase64(_data.avatar)||user.avatar;if(!user.bot){data.email=_data.email||user.email;data.password=password;if(_data.new_password)data.new_password=_data.newPassword;}return this.rest.makeRequest('patch',Constants.Endpoints.me,true,data).then(function(newData){return _this93.client.actions.UserUpdate.handle(newData).updated;});};RESTMethods.prototype.updateGuild=function updateGuild(guild,_data){var _this94=this;var data={};if(_data.name)data.name=_data.name;if(_data.region)data.region=_data.region;if(_data.verificationLevel)data.verification_level=Number(_data.verificationLevel);if(_data.afkChannel)data.afk_channel_id=this.client.resolver.resolveChannel(_data.afkChannel).id;if(_data.afkTimeout)data.afk_timeout=Number(_data.afkTimeout);if(_data.icon)data.icon=this.client.resolver.resolveBase64(_data.icon);if(_data.owner)data.owner_id=this.client.resolver.resolveUser(_data.owner).id;if(_data.splash)data.splash=this.client.resolver.resolveBase64(_data.splash);return this.rest.makeRequest('patch',Constants.Endpoints.guild(guild.id),true,data).then(function(newData){return _this94.client.actions.GuildUpdate.handle(newData).updated;});};RESTMethods.prototype.kickGuildMember=function kickGuildMember(guild,member){var _this95=this;return this.rest.makeRequest('del',Constants.Endpoints.guildMember(guild.id,member.id),true).then(function(){return _this95.client.actions.GuildMemberRemove.handle({guild_id:guild.id,user:member.user}).member;});};RESTMethods.prototype.createGuildRole=function createGuildRole(guild){var _this96=this;return this.rest.makeRequest('post',Constants.Endpoints.guildRoles(guild.id),true).then(function(role){return _this96.client.actions.GuildRoleCreate.handle({guild_id:guild.id,role:role}).role;});};RESTMethods.prototype.deleteGuildRole=function deleteGuildRole(role){var _this97=this;return this.rest.makeRequest('del',Constants.Endpoints.guildRole(role.guild.id,role.id),true).then(function(){return _this97.client.actions.GuildRoleDelete.handle({guild_id:role.guild.id,role_id:role.id}).role;});};RESTMethods.prototype.setChannelOverwrite=function setChannelOverwrite(channel,payload){return this.rest.makeRequest('put',Constants.Endpoints.channelPermissions(channel.id)+'/'+payload.id,true,payload);};RESTMethods.prototype.deletePermissionOverwrites=function deletePermissionOverwrites(overwrite){return this.rest.makeRequest('del',Constants.Endpoints.channelPermissions(overwrite.channel.id)+'/'+overwrite.id,true).then(function(){return overwrite;});};RESTMethods.prototype.getChannelMessages=function getChannelMessages(channel){var payload=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var params=[];if(payload.limit)params.push('limit='+payload.limit);if(payload.around)params.push('around='+payload.around);else if(payload.before)params.push('before='+payload.before);else if(payload.after)params.push('after='+payload.after);var endpoint=Constants.Endpoints.channelMessages(channel.id);if(params.length>0)endpoint+='?'+params.join('&');return this.rest.makeRequest('get',endpoint,true);};RESTMethods.prototype.getChannelMessage=function getChannelMessage(channel,messageID){var msg=channel.messages.get(messageID);if(msg)return Promise.resolve(msg);return this.rest.makeRequest('get',Constants.Endpoints.channelMessage(channel.id,messageID),true);};RESTMethods.prototype.getGuildMember=function getGuildMember(guild,user){var _this98=this;return this.rest.makeRequest('get',Constants.Endpoints.guildMember(guild.id,user.id),true).then(function(data){return _this98.client.actions.GuildMemberGet.handle(guild,data).member;});};RESTMethods.prototype.updateGuildMember=function updateGuildMember(member,data){if(data.channel)data.channel_id=this.client.resolver.resolveChannel(data.channel).id;if(data.roles)data.roles=data.roles.map(function(role){return role instanceof Role?role.id:role;});var endpoint=Constants.Endpoints.guildMember(member.guild.id,member.id);// fix your endpoints, discord ;-;
if(member.id===this.client.user.id){var keys=Object.keys(data);if(keys.length===1&&keys[0]==='nick'){endpoint=Constants.Endpoints.guildMemberNickname(member.guild.id);}}return this.rest.makeRequest('patch',endpoint,true,data).then(function(newData){return member.guild._updateMember(member,newData).mem;});};RESTMethods.prototype.addMemberRole=function addMemberRole(member,role){return this.rest.makeRequest('put',Constants.Endpoints.guildMemberRole(member.guild.id,member.id,role.id),true).then(function(){if(!member._roles.includes(role.id))member._roles.push(role.id);return member;});};RESTMethods.prototype.removeMemberRole=function removeMemberRole(member,role){return this.rest.makeRequest('delete',Constants.Endpoints.guildMemberRole(member.guild.id,member.id,role.id),true).then(function(){var index=member._roles.indexOf(role.id);if(index>=0)member._roles.splice(index,1);return member;});};RESTMethods.prototype.sendTyping=function sendTyping(channelID){return this.rest.makeRequest('post',Constants.Endpoints.channel(channelID)+'/typing',true);};RESTMethods.prototype.banGuildMember=function banGuildMember(guild,member){var _this99=this;var deleteDays=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var id=this.client.resolver.resolveUserID(member);if(!id)return Promise.reject(new Error('Couldn\'t resolve the user ID to ban.'));return this.rest.makeRequest('put',Constants.Endpoints.guildBans(guild.id)+'/'+id+'?delete-message-days='+deleteDays,true,{'delete-message-days':deleteDays}).then(function(){if(member instanceof GuildMember)return member;var user=_this99.client.resolver.resolveUser(id);if(user){member=_this99.client.resolver.resolveGuildMember(guild,user);return member||user;}return id;});};RESTMethods.prototype.unbanGuildMember=function unbanGuildMember(guild,member){var _this100=this;return new Promise(function(resolve,reject){var id=_this100.client.resolver.resolveUserID(member);if(!id)throw new Error('Couldn\'t resolve the user ID to unban.');var listener=function listener(eGuild,eUser){if(eGuild.id===guild.id&&eUser.id===id){_this100.client.removeListener(Constants.Events.GUILD_BAN_REMOVE,listener);_this100.client.clearTimeout(timeout);resolve(eUser);}};_this100.client.on(Constants.Events.GUILD_BAN_REMOVE,listener);var timeout=_this100.client.setTimeout(function(){_this100.client.removeListener(Constants.Events.GUILD_BAN_REMOVE,listener);reject(new Error('Took too long to receive the ban remove event.'));},10000);_this100.rest.makeRequest('del',Constants.Endpoints.guildBans(guild.id)+'/'+id,true).catch(function(err){_this100.client.removeListener(Constants.Events.GUILD_BAN_REMOVE,listener);_this100.client.clearTimeout(timeout);reject(err);});});};RESTMethods.prototype.getGuildBans=function getGuildBans(guild){var _this101=this;return this.rest.makeRequest('get',Constants.Endpoints.guildBans(guild.id),true).then(function(banItems){var bannedUsers=new Collection();for(var _iterator63=banItems,_isArray63=Array.isArray(_iterator63),_i64=0,_iterator63=_isArray63?_iterator63:_iterator63[Symbol.iterator]();;){var _ref78;if(_isArray63){if(_i64>=_iterator63.length)break;_ref78=_iterator63[_i64++];}else{_i64=_iterator63.next();if(_i64.done)break;_ref78=_i64.value;}var banItem=_ref78;var user=_this101.client.dataManager.newUser(banItem.user);bannedUsers.set(user.id,user);}return bannedUsers;});};RESTMethods.prototype.updateGuildRole=function updateGuildRole(role,_data){var _this102=this;var data={};data.name=_data.name||role.name;data.position=typeof _data.position!=='undefined'?_data.position:role.position;data.color=_data.color||role.color;if(typeof data.color==='string'&&data.color.startsWith('#')){data.color=parseInt(data.color.replace('#',''),16);}data.hoist=typeof _data.hoist!=='undefined'?_data.hoist:role.hoist;data.mentionable=typeof _data.mentionable!=='undefined'?_data.mentionable:role.mentionable;if(_data.permissions){var perms=0;for(var _iterator64=_data.permissions,_isArray64=Array.isArray(_iterator64),_i65=0,_iterator64=_isArray64?_iterator64:_iterator64[Symbol.iterator]();;){var _ref79;if(_isArray64){if(_i65>=_iterator64.length)break;_ref79=_iterator64[_i65++];}else{_i65=_iterator64.next();if(_i65.done)break;_ref79=_i65.value;}var perm=_ref79;if(typeof perm==='string')perm=Constants.PermissionFlags[perm];perms|=perm;}data.permissions=perms;}else{data.permissions=role.permissions;}return this.rest.makeRequest('patch',Constants.Endpoints.guildRole(role.guild.id,role.id),true,data).then(function(_role){return _this102.client.actions.GuildRoleUpdate.handle({role:_role,guild_id:role.guild.id}).updated;});};RESTMethods.prototype.pinMessage=function pinMessage(message){return this.rest.makeRequest('put',Constants.Endpoints.channel(message.channel.id)+'/pins/'+message.id,true).then(function(){return message;});};RESTMethods.prototype.unpinMessage=function unpinMessage(message){return this.rest.makeRequest('del',Constants.Endpoints.channel(message.channel.id)+'/pins/'+message.id,true).then(function(){return message;});};RESTMethods.prototype.getChannelPinnedMessages=function getChannelPinnedMessages(channel){return this.rest.makeRequest('get',Constants.Endpoints.channel(channel.id)+'/pins',true);};RESTMethods.prototype.createChannelInvite=function createChannelInvite(channel,options){var _this103=this;var payload={};payload.temporary=options.temporary;payload.max_age=options.maxAge;payload.max_uses=options.maxUses;return this.rest.makeRequest('post',''+Constants.Endpoints.channelInvites(channel.id),true,payload).then(function(invite){return new Invite(_this103.client,invite);});};RESTMethods.prototype.deleteInvite=function deleteInvite(invite){return this.rest.makeRequest('del',Constants.Endpoints.invite(invite.code),true).then(function(){return invite;});};RESTMethods.prototype.getInvite=function getInvite(code){var _this104=this;return this.rest.makeRequest('get',Constants.Endpoints.invite(code),true).then(function(invite){return new Invite(_this104.client,invite);});};RESTMethods.prototype.getGuildInvites=function getGuildInvites(guild){var _this105=this;return this.rest.makeRequest('get',Constants.Endpoints.guildInvites(guild.id),true).then(function(inviteItems){var invites=new Collection();for(var _iterator65=inviteItems,_isArray65=Array.isArray(_iterator65),_i66=0,_iterator65=_isArray65?_iterator65:_iterator65[Symbol.iterator]();;){var _ref80;if(_isArray65){if(_i66>=_iterator65.length)break;_ref80=_iterator65[_i66++];}else{_i66=_iterator65.next();if(_i66.done)break;_ref80=_i66.value;}var inviteItem=_ref80;var invite=new Invite(_this105.client,inviteItem);invites.set(invite.code,invite);}return invites;});};RESTMethods.prototype.pruneGuildMembers=function pruneGuildMembers(guild,days,dry){return this.rest.makeRequest(dry?'get':'post',Constants.Endpoints.guildPrune(guild.id)+'?days='+days,true).then(function(data){return data.pruned;});};RESTMethods.prototype.createEmoji=function createEmoji(guild,image,name){var _this106=this;return this.rest.makeRequest('post',''+Constants.Endpoints.guildEmojis(guild.id),true,{name:name,image:image}).then(function(data){return _this106.client.actions.EmojiCreate.handle(data,guild).emoji;});};RESTMethods.prototype.deleteEmoji=function deleteEmoji(emoji){var _this107=this;return this.rest.makeRequest('delete',Constants.Endpoints.guildEmojis(emoji.guild.id)+'/'+emoji.id,true).then(function(){return _this107.client.actions.EmojiDelete.handle(emoji).data;});};RESTMethods.prototype.getWebhook=function getWebhook(id,token){var _this108=this;return this.rest.makeRequest('get',Constants.Endpoints.webhook(id,token),!token).then(function(data){return new Webhook(_this108.client,data);});};RESTMethods.prototype.getGuildWebhooks=function getGuildWebhooks(guild){var _this109=this;return this.rest.makeRequest('get',Constants.Endpoints.guildWebhooks(guild.id),true).then(function(data){var hooks=new Collection();for(var _iterator66=data,_isArray66=Array.isArray(_iterator66),_i67=0,_iterator66=_isArray66?_iterator66:_iterator66[Symbol.iterator]();;){var _ref81;if(_isArray66){if(_i67>=_iterator66.length)break;_ref81=_iterator66[_i67++];}else{_i67=_iterator66.next();if(_i67.done)break;_ref81=_i67.value;}var hook=_ref81;hooks.set(hook.id,new Webhook(_this109.client,hook));}return hooks;});};RESTMethods.prototype.getChannelWebhooks=function getChannelWebhooks(channel){var _this110=this;return this.rest.makeRequest('get',Constants.Endpoints.channelWebhooks(channel.id),true).then(function(data){var hooks=new Collection();for(var _iterator67=data,_isArray67=Array.isArray(_iterator67),_i68=0,_iterator67=_isArray67?_iterator67:_iterator67[Symbol.iterator]();;){var _ref82;if(_isArray67){if(_i68>=_iterator67.length)break;_ref82=_iterator67[_i68++];}else{_i68=_iterator67.next();if(_i68.done)break;_ref82=_i68.value;}var hook=_ref82;hooks.set(hook.id,new Webhook(_this110.client,hook));}return hooks;});};RESTMethods.prototype.createWebhook=function createWebhook(channel,name,avatar){var _this111=this;return this.rest.makeRequest('post',Constants.Endpoints.channelWebhooks(channel.id),true,{name:name,avatar:avatar}).then(function(data){return new Webhook(_this111.client,data);});};RESTMethods.prototype.editWebhook=function editWebhook(webhook,name,avatar){return this.rest.makeRequest('patch',Constants.Endpoints.webhook(webhook.id,webhook.token),false,{name:name,avatar:avatar}).then(function(data){webhook.name=data.name;webhook.avatar=data.avatar;return webhook;});};RESTMethods.prototype.deleteWebhook=function deleteWebhook(webhook){return this.rest.makeRequest('delete',Constants.Endpoints.webhook(webhook.id,webhook.token),false);};RESTMethods.prototype.sendWebhookMessage=function sendWebhookMessage(webhook,content){var _ref83=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},avatarURL=_ref83.avatarURL,tts=_ref83.tts,disableEveryone=_ref83.disableEveryone,embeds=_ref83.embeds;var file=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;if(typeof content!=='undefined')content=this.client.resolver.resolveString(content);if(content){if(disableEveryone||typeof disableEveryone==='undefined'&&this.client.options.disableEveryone){content=content.replace(/@(everyone|here)/g,'@\u200B$1');}}return this.rest.makeRequest('post',Constants.Endpoints.webhook(webhook.id,webhook.token)+'?wait=true',false,{username:webhook.name,avatar_url:avatarURL,content:content,tts:tts,file:file,embeds:embeds});};RESTMethods.prototype.sendSlackWebhookMessage=function sendSlackWebhookMessage(webhook,body){return this.rest.makeRequest('post',Constants.Endpoints.webhook(webhook.id,webhook.token)+'/slack?wait=true',false,body);};RESTMethods.prototype.fetchUserProfile=function fetchUserProfile(user){return this.rest.makeRequest('get',Constants.Endpoints.userProfile(user.id),true).then(function(data){return new UserProfile(user,data);});};RESTMethods.prototype.fetchMeMentions=function fetchMeMentions(options){var _this112=this;if(options.guild)options.guild=options.guild.id?options.guild.id:options.guild;return this.rest.makeRequest('get',Constants.Endpoints.meMentions(options.limit,options.roles,options.everyone,options.guild)).then(function(res){return res.body.map(function(m){return new Message(_this112.client.channels.get(m.channel_id),m,_this112.client);});});};RESTMethods.prototype.addFriend=function addFriend(user){return this.rest.makeRequest('post',Constants.Endpoints.relationships('@me'),true,{username:user.username,discriminator:user.discriminator}).then(function(){return user;});};RESTMethods.prototype.removeFriend=function removeFriend(user){return this.rest.makeRequest('delete',Constants.Endpoints.relationships('@me')+'/'+user.id,true).then(function(){return user;});};RESTMethods.prototype.blockUser=function blockUser(user){return this.rest.makeRequest('put',Constants.Endpoints.relationships('@me')+'/'+user.id,true,{type:2}).then(function(){return user;});};RESTMethods.prototype.unblockUser=function unblockUser(user){return this.rest.makeRequest('delete',Constants.Endpoints.relationships('@me')+'/'+user.id,true).then(function(){return user;});};RESTMethods.prototype.setRolePositions=function setRolePositions(guildID,roles){var _this113=this;return this.rest.makeRequest('patch',Constants.Endpoints.guildRoles(guildID),true,roles).then(function(){return _this113.client.actions.GuildRolesPositionUpdate.handle({guild_id:guildID,roles:roles}).guild;});};RESTMethods.prototype.addMessageReaction=function addMessageReaction(message,emoji){var _this114=this;return this.rest.makeRequest('put',Constants.Endpoints.selfMessageReaction(message.channel.id,message.id,emoji),true).then(function(){return _this114.client.actions.MessageReactionAdd.handle({user_id:_this114.client.user.id,message_id:message.id,emoji:parseEmoji(emoji),channel_id:message.channel.id}).reaction;});};RESTMethods.prototype.removeMessageReaction=function removeMessageReaction(message,emoji,user){var _this115=this;var endpoint=Constants.Endpoints.selfMessageReaction(message.channel.id,message.id,emoji);if(user.id!==this.client.user.id){endpoint=Constants.Endpoints.userMessageReaction(message.channel.id,message.id,emoji,null,user.id);}return this.rest.makeRequest('delete',endpoint,true).then(function(){return _this115.client.actions.MessageReactionRemove.handle({user_id:user.id,message_id:message.id,emoji:parseEmoji(emoji),channel_id:message.channel.id}).reaction;});};RESTMethods.prototype.removeMessageReactions=function removeMessageReactions(message){return this.rest.makeRequest('delete',Constants.Endpoints.messageReactions(message.channel.id,message.id),true).then(function(){return message;});};RESTMethods.prototype.getMessageReactionUsers=function getMessageReactionUsers(message,emoji){var limit=arguments.length>2&&arguments[2]!==undefined?arguments[2]:100;return this.rest.makeRequest('get',Constants.Endpoints.messageReaction(message.channel.id,message.id,emoji,limit),true);};RESTMethods.prototype.getMyApplication=function getMyApplication(){var _this116=this;return this.rest.makeRequest('get',Constants.Endpoints.myApplication,true).then(function(app){return new ClientOAuth2Application(_this116.client,app);});};RESTMethods.prototype.setNote=function setNote(user,note){return this.rest.makeRequest('put',Constants.Endpoints.note(user.id),true,{note:note}).then(function(){return user;});};return RESTMethods;}();module.exports=RESTMethods;/***/},/* 112 *//***/function(module,exports,__webpack_require__){var RequestHandler=__webpack_require__(52);var BurstRequestHandler=function(_RequestHandler){_inherits(BurstRequestHandler,_RequestHandler);function BurstRequestHandler(restManager,endpoint){_classCallCheck(this,BurstRequestHandler);var _this117=_possibleConstructorReturn(this,_RequestHandler.call(this,restManager,endpoint));_this117.requestRemaining=1;_this117.first=true;return _this117;}BurstRequestHandler.prototype.push=function push(request){_RequestHandler.prototype.push.call(this,request);this.handle();};BurstRequestHandler.prototype.handleNext=function handleNext(time){var _this118=this;if(this.waiting)return;this.waiting=true;this.restManager.client.setTimeout(function(){_this118.requestRemaining=_this118.requestLimit;_this118.waiting=false;_this118.handle();},time);};BurstRequestHandler.prototype.execute=function execute(item){var _this119=this;item.request.gen().end(function(err,res){if(res&&res.headers){_this119.requestLimit=res.headers['x-ratelimit-limit'];_this119.requestResetTime=Number(res.headers['x-ratelimit-reset'])*1000;_this119.requestRemaining=Number(res.headers['x-ratelimit-remaining']);_this119.timeDifference=Date.now()-new Date(res.headers.date).getTime();_this119.handleNext(_this119.requestResetTime-Date.now()+_this119.timeDifference+_this119.restManager.client.options.restTimeOffset);}if(err){if(err.status===429){_this119.requestRemaining=0;_this119.queue.unshift(item);_this119.restManager.client.setTimeout(function(){_this119.globalLimit=false;_this119.handle();},Number(res.headers['retry-after'])+_this119.restManager.client.options.restTimeOffset);if(res.headers['x-ratelimit-global'])_this119.globalLimit=true;}else{item.reject(err);}}else{_this119.globalLimit=false;var data=res&&res.body?res.body:{};item.resolve(data);if(_this119.first){_this119.first=false;_this119.handle();}}});};BurstRequestHandler.prototype.handle=function handle(){_RequestHandler.prototype.handle.call(this);if(this.requestRemaining<1||this.queue.length===0||this.globalLimit)return;while(this.queue.length>0&&this.requestRemaining>0){this.execute(this.queue.shift());this.requestRemaining--;}};return BurstRequestHandler;}(RequestHandler);module.exports=BurstRequestHandler;/***/},/* 113 *//***/function(module,exports,__webpack_require__){var RequestHandler=__webpack_require__(52);/**
 * Handles API Requests sequentially, i.e. we wait until the current request is finished before moving onto
 * the next. This plays a _lot_ nicer in terms of avoiding 429's when there is more than one session of the account,
 * but it can be slower.
 * @extends {RequestHandler}
 * @private
 */var SequentialRequestHandler=function(_RequestHandler2){_inherits(SequentialRequestHandler,_RequestHandler2);/**
   * @param {RESTManager} restManager The REST manager to use
   * @param {string} endpoint The endpoint to handle
   */function SequentialRequestHandler(restManager,endpoint){_classCallCheck(this,SequentialRequestHandler);/**
     * Whether this rate limiter is waiting for a response from a request
     * @type {boolean}
     */var _this120=_possibleConstructorReturn(this,_RequestHandler2.call(this,restManager,endpoint));_this120.waiting=false;/**
     * The endpoint that this handler is handling
     * @type {string}
     */_this120.endpoint=endpoint;/**
     * The time difference between Discord's Dates and the local computer's Dates. A positive number means the local
     * computer's time is ahead of Discord's.
     * @type {number}
     */_this120.timeDifference=0;return _this120;}SequentialRequestHandler.prototype.push=function push(request){_RequestHandler2.prototype.push.call(this,request);this.handle();};/**
   * Performs a request then resolves a promise to indicate its readiness for a new request
   * @param {APIRequest} item The item to execute
   * @returns {Promise<?Object|Error>}
   */SequentialRequestHandler.prototype.execute=function execute(item){var _this121=this;return new Promise(function(resolve){item.request.gen().end(function(err,res){if(res&&res.headers){_this121.requestLimit=res.headers['x-ratelimit-limit'];_this121.requestResetTime=Number(res.headers['x-ratelimit-reset'])*1000;_this121.requestRemaining=Number(res.headers['x-ratelimit-remaining']);_this121.timeDifference=Date.now()-new Date(res.headers.date).getTime();}if(err){if(err.status===429){_this121.restManager.client.setTimeout(function(){_this121.waiting=false;_this121.globalLimit=false;resolve();},Number(res.headers['retry-after'])+_this121.restManager.client.options.restTimeOffset);if(res.headers['x-ratelimit-global'])_this121.globalLimit=true;}else{_this121.queue.shift();_this121.waiting=false;item.reject(err);resolve(err);}}else{_this121.queue.shift();_this121.globalLimit=false;var data=res&&res.body?res.body:{};item.resolve(data);if(_this121.requestRemaining===0){_this121.restManager.client.setTimeout(function(){_this121.waiting=false;resolve(data);},_this121.requestResetTime-Date.now()+_this121.timeDifference+_this121.restManager.client.options.restTimeOffset);}else{_this121.waiting=false;resolve(data);}}});});};SequentialRequestHandler.prototype.handle=function handle(){var _this122=this;_RequestHandler2.prototype.handle.call(this);if(this.waiting||this.queue.length===0||this.globalLimit)return;this.waiting=true;var item=this.queue[0];this.execute(item).then(function(){return _this122.handle();});};return SequentialRequestHandler;}(RequestHandler);module.exports=SequentialRequestHandler;/***/},/* 114 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);var UserAgentManager=function(){function UserAgentManager(restManager){_classCallCheck(this,UserAgentManager);this.restManager=restManager;this._userAgent={url:'https://github.com/hydrabolt/discord.js',version:Constants.Package.version};}UserAgentManager.prototype.set=function set(info){this._userAgent.url=info.url||'https://github.com/hydrabolt/discord.js';this._userAgent.version=info.version||Constants.Package.version;};_createClass(UserAgentManager,[{key:'userAgent',get:function get(){return'DiscordBot ('+this._userAgent.url+', '+this._userAgent.version+')';}}]);return UserAgentManager;}();module.exports=UserAgentManager;/***/},/* 115 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(Buffer){var browser=typeof window!=='undefined';var EventEmitter=__webpack_require__(21).EventEmitter;var Constants=__webpack_require__(0);var convertArrayBuffer=__webpack_require__(53);var pako=__webpack_require__(67);var zlib=__webpack_require__(49);var PacketManager=__webpack_require__(116);var WebSocket=void 0,erlpack=void 0;var serialize=JSON.stringify;if(browser){WebSocket=window.WebSocket;// eslint-disable-line no-undef
}else{try{WebSocket=__webpack_require__(158);}catch(err){WebSocket=__webpack_require__(159);}try{erlpack=__webpack_require__(157);serialize=erlpack.pack;}catch(err){erlpack=null;}}/**
 * The WebSocket Manager of the Client
 * @private
 */var WebSocketManager=function(_EventEmitter3){_inherits(WebSocketManager,_EventEmitter3);function WebSocketManager(client){_classCallCheck(this,WebSocketManager);/**
     * The Client that instantiated this WebSocketManager
     * @type {Client}
     */var _this123=_possibleConstructorReturn(this,_EventEmitter3.call(this));_this123.client=client;/**
     * A WebSocket Packet manager, it handles all the messages
     * @type {PacketManager}
     */_this123.packetManager=new PacketManager(_this123);/**
     * The status of the WebSocketManager, a type of Constants.Status. It defaults to IDLE.
     * @type {number}
     */_this123.status=Constants.Status.IDLE;/**
     * The session ID of the connection, null if not yet available.
     * @type {?string}
     */_this123.sessionID=null;/**
     * The packet count of the client, null if not yet available.
     * @type {?number}
     */_this123.sequence=-1;/**
     * The gateway address for this WebSocket connection, null if not yet available.
     * @type {?string}
     */_this123.gateway=null;/**
     * Whether READY was emitted normally (all packets received) or not
     * @type {boolean}
     */_this123.normalReady=false;/**
     * The WebSocket connection to the gateway
     * @type {?WebSocket}
     */_this123.ws=null;/**
     * An object with keys that are websocket event names that should be ignored
     * @type {Object}
     */_this123.disabledEvents={};for(var _iterator68=client.options.disabledEvents,_isArray68=Array.isArray(_iterator68),_i69=0,_iterator68=_isArray68?_iterator68:_iterator68[Symbol.iterator]();;){var _ref84;if(_isArray68){if(_i69>=_iterator68.length)break;_ref84=_iterator68[_i69++];}else{_i69=_iterator68.next();if(_i69.done)break;_ref84=_i69.value;}var event=_ref84;_this123.disabledEvents[event]=true;}_this123.first=true;_this123.lastHeartbeatAck=true;return _this123;}/**
   * Connects the client to a given gateway
   * @param {string} gateway The gateway to connect to
   */WebSocketManager.prototype._connect=function _connect(gateway){var _this124=this;this.client.emit('debug','Connecting to gateway '+gateway);this.normalReady=false;if(this.status!==Constants.Status.RECONNECTING)this.status=Constants.Status.CONNECTING;this.ws=new WebSocket(gateway);if(browser)this.ws.binaryType='arraybuffer';this.ws.onopen=this.eventOpen.bind(this);this.ws.onmessage=this.eventMessage.bind(this);this.ws.onclose=this.eventClose.bind(this);this.ws.onerror=this.eventError.bind(this);this._queue=[];this._remaining=120;this.client.setInterval(function(){_this124._remaining=120;_this124._remainingReset=Date.now();},60e3);};WebSocketManager.prototype.connect=function connect(gateway){var _this125=this;gateway=gateway+'&encoding='+(erlpack?'etf':'json');if(this.first){this._connect(gateway);this.first=false;}else{this.client.setTimeout(function(){return _this125._connect(gateway);},5500);}};WebSocketManager.prototype.heartbeat=function heartbeat(normal){if(normal&&!this.lastHeartbeatAck){this.ws.close(1007);return;}this.client.emit('debug','Sending heartbeat');this.client._pingTimestamp=Date.now();this.client.ws.send({op:Constants.OPCodes.HEARTBEAT,d:this.sequence},true);this.lastHeartbeatAck=false;};/**
   * Sends a packet to the gateway
   * @param {Object} data An object that can be JSON stringified
   * @param {boolean} force Whether or not to send the packet immediately
   */WebSocketManager.prototype.send=function send(data){var force=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(force){this._send(serialize(data));return;}this._queue.push(serialize(data));this.doQueue();};WebSocketManager.prototype.destroy=function destroy(){this.ws.close(1000);this._queue=[];this.status=Constants.Status.IDLE;};WebSocketManager.prototype._send=function _send(data){if(this.ws.readyState===WebSocket.OPEN){this.emit('send',data);this.ws.send(data);}};WebSocketManager.prototype.doQueue=function doQueue(){var item=this._queue[0];if(!(this.ws.readyState===WebSocket.OPEN&&item))return;if(this.remaining===0){this.client.setTimeout(this.doQueue.bind(this),Date.now()-this.remainingReset);return;}this._remaining--;this._send(item);this._queue.shift();this.doQueue();};/**
   * Run whenever the gateway connections opens up
   */WebSocketManager.prototype.eventOpen=function eventOpen(){this.client.emit('debug','Connection to gateway opened');this.lastHeartbeatAck=true;if(this.status===Constants.Status.RECONNECTING)this._sendResume();else this._sendNewIdentify();};/**
   * Sends a gateway resume packet, in cases of unexpected disconnections.
   */WebSocketManager.prototype._sendResume=function _sendResume(){if(!this.sessionID){this._sendNewIdentify();return;}this.client.emit('debug','Identifying as resumed session');var payload={token:this.client.token,session_id:this.sessionID,seq:this.sequence};this.send({op:Constants.OPCodes.RESUME,d:payload});};/**
   * Sends a new identification packet, in cases of new connections or failed reconnections.
   */WebSocketManager.prototype._sendNewIdentify=function _sendNewIdentify(){this.reconnecting=false;var payload=this.client.options.ws;payload.token=this.client.token;if(this.client.options.shardCount>0){payload.shard=[Number(this.client.options.shardId),Number(this.client.options.shardCount)];}this.client.emit('debug','Identifying as new session');this.send({op:Constants.OPCodes.IDENTIFY,d:payload});this.sequence=-1;};/**
   * @external CloseEvent
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent}
   *//**
   * Run whenever the connection to the gateway is closed, it will try to reconnect the client.
   * @param {CloseEvent} event The WebSocket close event
   */WebSocketManager.prototype.eventClose=function eventClose(event){this.emit('close',event);this.client.clearInterval(this.client.manager.heartbeatInterval);this.status=Constants.Status.DISCONNECTED;this._queue=[];/**
     * Emitted whenever the client websocket is disconnected
     * @event Client#disconnect
     * @param {CloseEvent} event The WebSocket close event
     */if(!this.reconnecting)this.client.emit(Constants.Events.DISCONNECT,event);if(event.code===4004)return;if(event.code===4010)return;if(!this.reconnecting&&event.code!==1000)this.tryReconnect();};/**
   * Run whenever a message is received from the WebSocket. Returns `true` if the message
   * was handled properly.
   * @param {Object} event The received websocket data
   * @returns {boolean}
   */WebSocketManager.prototype.eventMessage=function eventMessage(event){var data=this.tryParseEventData(event.data);if(data===null){this.eventError(new Error(Constants.Errors.BAD_WS_MESSAGE));return false;}this.client.emit('raw',data);if(data.op===Constants.OPCodes.HELLO)this.client.manager.setupKeepAlive(data.d.heartbeat_interval);return this.packetManager.handle(data);};/**
   * Parses the raw data from a websocket event, inflating it if necessary
   * @param {*} data Event data
   * @returns {Object}
   */WebSocketManager.prototype.parseEventData=function parseEventData(data){if(erlpack){if(data instanceof ArrayBuffer)data=convertArrayBuffer(data);return erlpack.unpack(data);}else{if(data instanceof ArrayBuffer)data=pako.inflate(data,{to:'string'});else if(data instanceof Buffer)data=zlib.inflateSync(data).toString();return JSON.parse(data);}};/**
   * Tries to call `parseEventData()` and return its result, or returns `null` upon thrown errors.
   * @param {*} data Event data
   * @returns {?Object}
   */WebSocketManager.prototype.tryParseEventData=function tryParseEventData(data){try{return this.parseEventData(data);}catch(err){return null;}};/**
   * Run whenever an error occurs with the WebSocket connection. Tries to reconnect
   * @param {Error} err The encountered error
   */WebSocketManager.prototype.eventError=function eventError(err){/**
     * Emitted whenever the Client encounters a serious connection error
     * @event Client#error
     * @param {Error} error The encountered error
     */if(this.client.listenerCount('error')>0)this.client.emit('error',err);this.tryReconnect();};WebSocketManager.prototype._emitReady=function _emitReady(){var normal=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;/**
     * Emitted when the Client becomes ready to start working
     * @event Client#ready
     */this.status=Constants.Status.READY;this.client.emit(Constants.Events.READY);this.packetManager.handleQueue();this.normalReady=normal;};/**
   * Runs on new packets before `READY` to see if the Client is ready yet, if it is prepares
   * the `READY` event.
   */WebSocketManager.prototype.checkIfReady=function checkIfReady(){var _this126=this;if(this.status!==Constants.Status.READY&&this.status!==Constants.Status.NEARLY){var unavailableCount=0;for(var _iterator69=this.client.guilds.keys(),_isArray69=Array.isArray(_iterator69),_i70=0,_iterator69=_isArray69?_iterator69:_iterator69[Symbol.iterator]();;){var _ref85;if(_isArray69){if(_i70>=_iterator69.length)break;_ref85=_iterator69[_i70++];}else{_i70=_iterator69.next();if(_i70.done)break;_ref85=_i70.value;}var guildID=_ref85;unavailableCount+=this.client.guilds.get(guildID).available?0:1;}if(unavailableCount===0){this.status=Constants.Status.NEARLY;if(this.client.options.fetchAllMembers){var promises=this.client.guilds.map(function(g){return g.fetchMembers();});Promise.all(promises).then(function(){return _this126._emitReady();},function(e){_this126.client.emit(Constants.Events.WARN,'Error in pre-ready guild member fetching');_this126.client.emit(Constants.Events.ERROR,e);_this126._emitReady();});return;}this._emitReady();}}};/**
   * Tries to reconnect the client, changing the status to Constants.Status.RECONNECTING.
   */WebSocketManager.prototype.tryReconnect=function tryReconnect(){if(this.status===Constants.Status.RECONNECTING||this.status===Constants.Status.CONNECTING)return;this.status=Constants.Status.RECONNECTING;this.ws.close();this.packetManager.handleQueue();/**
     * Emitted when the Client tries to reconnect after being disconnected
     * @event Client#reconnecting
     */this.client.emit(Constants.Events.RECONNECTING);this.connect(this.client.ws.gateway);};return WebSocketManager;}(EventEmitter);module.exports=WebSocketManager;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(20).Buffer);/***/},/* 116 *//***/function(module,exports,__webpack_require__){var Constants=__webpack_require__(0);var BeforeReadyWhitelist=[Constants.WSEvents.READY,Constants.WSEvents.GUILD_CREATE,Constants.WSEvents.GUILD_DELETE,Constants.WSEvents.GUILD_MEMBERS_CHUNK,Constants.WSEvents.GUILD_MEMBER_ADD,Constants.WSEvents.GUILD_MEMBER_REMOVE];var WebSocketPacketManager=function(){function WebSocketPacketManager(websocketManager){_classCallCheck(this,WebSocketPacketManager);this.ws=websocketManager;this.handlers={};this.queue=[];this.register(Constants.WSEvents.READY,__webpack_require__(143));this.register(Constants.WSEvents.GUILD_CREATE,__webpack_require__(123));this.register(Constants.WSEvents.GUILD_DELETE,__webpack_require__(124));this.register(Constants.WSEvents.GUILD_UPDATE,__webpack_require__(134));this.register(Constants.WSEvents.GUILD_BAN_ADD,__webpack_require__(121));this.register(Constants.WSEvents.GUILD_BAN_REMOVE,__webpack_require__(122));this.register(Constants.WSEvents.GUILD_MEMBER_ADD,__webpack_require__(126));this.register(Constants.WSEvents.GUILD_MEMBER_REMOVE,__webpack_require__(127));this.register(Constants.WSEvents.GUILD_MEMBER_UPDATE,__webpack_require__(128));this.register(Constants.WSEvents.GUILD_ROLE_CREATE,__webpack_require__(130));this.register(Constants.WSEvents.GUILD_ROLE_DELETE,__webpack_require__(131));this.register(Constants.WSEvents.GUILD_ROLE_UPDATE,__webpack_require__(132));this.register(Constants.WSEvents.GUILD_EMOJIS_UPDATE,__webpack_require__(125));this.register(Constants.WSEvents.GUILD_MEMBERS_CHUNK,__webpack_require__(129));this.register(Constants.WSEvents.CHANNEL_CREATE,__webpack_require__(117));this.register(Constants.WSEvents.CHANNEL_DELETE,__webpack_require__(118));this.register(Constants.WSEvents.CHANNEL_UPDATE,__webpack_require__(120));this.register(Constants.WSEvents.CHANNEL_PINS_UPDATE,__webpack_require__(119));this.register(Constants.WSEvents.PRESENCE_UPDATE,__webpack_require__(142));this.register(Constants.WSEvents.USER_UPDATE,__webpack_require__(148));this.register(Constants.WSEvents.USER_NOTE_UPDATE,__webpack_require__(147));this.register(Constants.WSEvents.VOICE_STATE_UPDATE,__webpack_require__(150));this.register(Constants.WSEvents.TYPING_START,__webpack_require__(146));this.register(Constants.WSEvents.MESSAGE_CREATE,__webpack_require__(135));this.register(Constants.WSEvents.MESSAGE_DELETE,__webpack_require__(136));this.register(Constants.WSEvents.MESSAGE_UPDATE,__webpack_require__(141));this.register(Constants.WSEvents.MESSAGE_DELETE_BULK,__webpack_require__(137));this.register(Constants.WSEvents.VOICE_SERVER_UPDATE,__webpack_require__(149));this.register(Constants.WSEvents.GUILD_SYNC,__webpack_require__(133));this.register(Constants.WSEvents.RELATIONSHIP_ADD,__webpack_require__(144));this.register(Constants.WSEvents.RELATIONSHIP_REMOVE,__webpack_require__(145));this.register(Constants.WSEvents.MESSAGE_REACTION_ADD,__webpack_require__(138));this.register(Constants.WSEvents.MESSAGE_REACTION_REMOVE,__webpack_require__(139));this.register(Constants.WSEvents.MESSAGE_REACTION_REMOVE_ALL,__webpack_require__(140));}WebSocketPacketManager.prototype.register=function register(event,Handler){this.handlers[event]=new Handler(this);};WebSocketPacketManager.prototype.handleQueue=function handleQueue(){var _this127=this;this.queue.forEach(function(element,index){_this127.handle(_this127.queue[index]);_this127.queue.splice(index,1);});};WebSocketPacketManager.prototype.setSequence=function setSequence(s){if(s&&s>this.ws.sequence)this.ws.sequence=s;};WebSocketPacketManager.prototype.handle=function handle(packet){var _this128=this;if(packet.op===Constants.OPCodes.RECONNECT){this.setSequence(packet.s);this.ws.tryReconnect();return false;}if(packet.op===Constants.OPCodes.INVALID_SESSION){if(packet.d){setTimeout(function(){_this128.ws._sendResume();},2500);}else{this.ws.sessionID=null;this.ws._sendNewIdentify();}return false;}if(packet.op===Constants.OPCodes.HEARTBEAT_ACK){this.ws.client._pong(this.ws.client._pingTimestamp);this.ws.lastHeartbeatAck=true;this.ws.client.emit('debug','Heartbeat acknowledged');}else if(packet.op===Constants.OPCodes.HEARTBEAT){this.client.ws.send({op:Constants.OPCodes.HEARTBEAT,d:this.client.ws.sequence});this.ws.client.emit('debug','Received gateway heartbeat');}if(this.ws.status===Constants.Status.RECONNECTING){this.ws.reconnecting=false;this.ws.checkIfReady();}this.setSequence(packet.s);if(this.ws.disabledEvents[packet.t]!==undefined)return false;if(this.ws.status!==Constants.Status.READY){if(BeforeReadyWhitelist.indexOf(packet.t)===-1){this.queue.push(packet);return false;}}if(this.handlers[packet.t])return this.handlers[packet.t].handle(packet);return false;};_createClass(WebSocketPacketManager,[{key:'client',get:function get(){return this.ws.client;}}]);return WebSocketPacketManager;}();module.exports=WebSocketPacketManager;/***/},/* 117 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var ChannelCreateHandler=function(_AbstractHandler){_inherits(ChannelCreateHandler,_AbstractHandler);function ChannelCreateHandler(){_classCallCheck(this,ChannelCreateHandler);return _possibleConstructorReturn(this,_AbstractHandler.apply(this,arguments));}ChannelCreateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.ChannelCreate.handle(data);};return ChannelCreateHandler;}(AbstractHandler);/**
 * Emitted whenever a channel is created.
 * @event Client#channelCreate
 * @param {Channel} channel The channel that was created
 */module.exports=ChannelCreateHandler;/***/},/* 118 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var ChannelDeleteHandler=function(_AbstractHandler2){_inherits(ChannelDeleteHandler,_AbstractHandler2);function ChannelDeleteHandler(){_classCallCheck(this,ChannelDeleteHandler);return _possibleConstructorReturn(this,_AbstractHandler2.apply(this,arguments));}ChannelDeleteHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var response=client.actions.ChannelDelete.handle(data);if(response.channel)client.emit(Constants.Events.CHANNEL_DELETE,response.channel);};return ChannelDeleteHandler;}(AbstractHandler);/**
 * Emitted whenever a channel is deleted.
 * @event Client#channelDelete
 * @param {Channel} channel The channel that was deleted
 */module.exports=ChannelDeleteHandler;/***/},/* 119 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);/*
{ t: 'CHANNEL_PINS_UPDATE',
  s: 666,
  op: 0,
  d:
   { last_pin_timestamp: '2016-08-28T17:37:13.171774+00:00',
     channel_id: '314866471639044027' } }
*/var ChannelPinsUpdate=function(_AbstractHandler3){_inherits(ChannelPinsUpdate,_AbstractHandler3);function ChannelPinsUpdate(){_classCallCheck(this,ChannelPinsUpdate);return _possibleConstructorReturn(this,_AbstractHandler3.apply(this,arguments));}ChannelPinsUpdate.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var channel=client.channels.get(data.channel_id);var time=new Date(data.last_pin_timestamp);if(channel&&time)client.emit(Constants.Events.CHANNEL_PINS_UPDATE,channel,time);};return ChannelPinsUpdate;}(AbstractHandler);/**
 * Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information
 * can be provided easily here - you need to manually check the pins yourself.
 * @event Client#channelPinsUpdate
 * @param {Channel} channel The channel that the pins update occured in
 * @param {Date} time The time of the pins update
 */module.exports=ChannelPinsUpdate;/***/},/* 120 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var ChannelUpdateHandler=function(_AbstractHandler4){_inherits(ChannelUpdateHandler,_AbstractHandler4);function ChannelUpdateHandler(){_classCallCheck(this,ChannelUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler4.apply(this,arguments));}ChannelUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.ChannelUpdate.handle(data);};return ChannelUpdateHandler;}(AbstractHandler);module.exports=ChannelUpdateHandler;/***/},/* 121 *//***/function(module,exports,__webpack_require__){// ##untested handler##
var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var GuildBanAddHandler=function(_AbstractHandler5){_inherits(GuildBanAddHandler,_AbstractHandler5);function GuildBanAddHandler(){_classCallCheck(this,GuildBanAddHandler);return _possibleConstructorReturn(this,_AbstractHandler5.apply(this,arguments));}GuildBanAddHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.guild_id);var user=client.users.get(data.user.id);if(guild&&user)client.emit(Constants.Events.GUILD_BAN_ADD,guild,user);};return GuildBanAddHandler;}(AbstractHandler);/**
 * Emitted whenever a member is banned from a guild.
 * @event Client#guildBanAdd
 * @param {Guild} guild The guild that the ban occurred in
 * @param {User} user The user that was banned
 */module.exports=GuildBanAddHandler;/***/},/* 122 *//***/function(module,exports,__webpack_require__){// ##untested handler##
var AbstractHandler=__webpack_require__(1);var GuildBanRemoveHandler=function(_AbstractHandler6){_inherits(GuildBanRemoveHandler,_AbstractHandler6);function GuildBanRemoveHandler(){_classCallCheck(this,GuildBanRemoveHandler);return _possibleConstructorReturn(this,_AbstractHandler6.apply(this,arguments));}GuildBanRemoveHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildBanRemove.handle(data);};return GuildBanRemoveHandler;}(AbstractHandler);/**
 * Emitted whenever a member is unbanned from a guild.
 * @event Client#guildBanRemove
 * @param {Guild} guild The guild that the unban occurred in
 * @param {User} user The user that was unbanned
 */module.exports=GuildBanRemoveHandler;/***/},/* 123 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var GuildCreateHandler=function(_AbstractHandler7){_inherits(GuildCreateHandler,_AbstractHandler7);function GuildCreateHandler(){_classCallCheck(this,GuildCreateHandler);return _possibleConstructorReturn(this,_AbstractHandler7.apply(this,arguments));}GuildCreateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.id);if(guild){if(!guild.available&&!data.unavailable){// a newly available guild
guild.setup(data);this.packetManager.ws.checkIfReady();}}else{// a new guild
client.dataManager.newGuild(data);}};return GuildCreateHandler;}(AbstractHandler);module.exports=GuildCreateHandler;/***/},/* 124 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var GuildDeleteHandler=function(_AbstractHandler8){_inherits(GuildDeleteHandler,_AbstractHandler8);function GuildDeleteHandler(){_classCallCheck(this,GuildDeleteHandler);return _possibleConstructorReturn(this,_AbstractHandler8.apply(this,arguments));}GuildDeleteHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var response=client.actions.GuildDelete.handle(data);if(response.guild)client.emit(Constants.Events.GUILD_DELETE,response.guild);};return GuildDeleteHandler;}(AbstractHandler);/**
 * Emitted whenever a guild is deleted/left.
 * @event Client#guildDelete
 * @param {Guild} guild The guild that was deleted
 */module.exports=GuildDeleteHandler;/***/},/* 125 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);function mappify(iterable){var map=new Map();for(var _iterator70=iterable,_isArray70=Array.isArray(_iterator70),_i71=0,_iterator70=_isArray70?_iterator70:_iterator70[Symbol.iterator]();;){var _ref86;if(_isArray70){if(_i71>=_iterator70.length)break;_ref86=_iterator70[_i71++];}else{_i71=_iterator70.next();if(_i71.done)break;_ref86=_i71.value;}var x=_ref86;map.set.apply(map,x);}return map;}var GuildEmojisUpdate=function(_AbstractHandler9){_inherits(GuildEmojisUpdate,_AbstractHandler9);function GuildEmojisUpdate(){_classCallCheck(this,GuildEmojisUpdate);return _possibleConstructorReturn(this,_AbstractHandler9.apply(this,arguments));}GuildEmojisUpdate.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.guild_id);if(!guild||!guild.emojis)return;var deletions=mappify(guild.emojis.entries());for(var _iterator71=data.emojis,_isArray71=Array.isArray(_iterator71),_i72=0,_iterator71=_isArray71?_iterator71:_iterator71[Symbol.iterator]();;){var _ref87;if(_isArray71){if(_i72>=_iterator71.length)break;_ref87=_iterator71[_i72++];}else{_i72=_iterator71.next();if(_i72.done)break;_ref87=_i72.value;}var emoji=_ref87;// determine type of emoji event
var cachedEmoji=guild.emojis.get(emoji.id);if(cachedEmoji){deletions.delete(emoji.id);if(!cachedEmoji.equals(emoji,true)){// emoji updated
client.actions.GuildEmojiUpdate.handle(cachedEmoji,emoji);}}else{// emoji added
client.actions.GuildEmojiCreate.handle(guild,emoji);}}for(var _iterator72=deletions.values(),_isArray72=Array.isArray(_iterator72),_i73=0,_iterator72=_isArray72?_iterator72:_iterator72[Symbol.iterator]();;){var _ref88;if(_isArray72){if(_i73>=_iterator72.length)break;_ref88=_iterator72[_i73++];}else{_i73=_iterator72.next();if(_i73.done)break;_ref88=_i73.value;}var _emoji=_ref88;// emoji deleted
client.actions.GuildEmojiDelete.handle(_emoji);}};return GuildEmojisUpdate;}(AbstractHandler);module.exports=GuildEmojisUpdate;/***/},/* 126 *//***/function(module,exports,__webpack_require__){// ##untested handler##
var AbstractHandler=__webpack_require__(1);var GuildMemberAddHandler=function(_AbstractHandler10){_inherits(GuildMemberAddHandler,_AbstractHandler10);function GuildMemberAddHandler(){_classCallCheck(this,GuildMemberAddHandler);return _possibleConstructorReturn(this,_AbstractHandler10.apply(this,arguments));}GuildMemberAddHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.guild_id);if(guild){guild.memberCount++;guild._addMember(data);}};return GuildMemberAddHandler;}(AbstractHandler);module.exports=GuildMemberAddHandler;/***/},/* 127 *//***/function(module,exports,__webpack_require__){// ##untested handler##
var AbstractHandler=__webpack_require__(1);var GuildMemberRemoveHandler=function(_AbstractHandler11){_inherits(GuildMemberRemoveHandler,_AbstractHandler11);function GuildMemberRemoveHandler(){_classCallCheck(this,GuildMemberRemoveHandler);return _possibleConstructorReturn(this,_AbstractHandler11.apply(this,arguments));}GuildMemberRemoveHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildMemberRemove.handle(data);};return GuildMemberRemoveHandler;}(AbstractHandler);module.exports=GuildMemberRemoveHandler;/***/},/* 128 *//***/function(module,exports,__webpack_require__){// ##untested handler##
var AbstractHandler=__webpack_require__(1);var GuildMemberUpdateHandler=function(_AbstractHandler12){_inherits(GuildMemberUpdateHandler,_AbstractHandler12);function GuildMemberUpdateHandler(){_classCallCheck(this,GuildMemberUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler12.apply(this,arguments));}GuildMemberUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.guild_id);if(guild){var member=guild.members.get(data.user.id);if(member)guild._updateMember(member,data);}};return GuildMemberUpdateHandler;}(AbstractHandler);module.exports=GuildMemberUpdateHandler;/***/},/* 129 *//***/function(module,exports,__webpack_require__){// ##untested##
var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var GuildMembersChunkHandler=function(_AbstractHandler13){_inherits(GuildMembersChunkHandler,_AbstractHandler13);function GuildMembersChunkHandler(){_classCallCheck(this,GuildMembersChunkHandler);return _possibleConstructorReturn(this,_AbstractHandler13.apply(this,arguments));}GuildMembersChunkHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.guild_id);if(!guild)return;var members=data.members.map(function(member){return guild._addMember(member,false);});guild._checkChunks();client.emit(Constants.Events.GUILD_MEMBERS_CHUNK,members);client.ws.lastHeartbeatAck=true;};return GuildMembersChunkHandler;}(AbstractHandler);/**
 * Emitted whenever a chunk of guild members is received (all members come from the same guild)
 * @event Client#guildMembersChunk
 * @param {GuildMember[]} members The members in the chunk
 */module.exports=GuildMembersChunkHandler;/***/},/* 130 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var GuildRoleCreateHandler=function(_AbstractHandler14){_inherits(GuildRoleCreateHandler,_AbstractHandler14);function GuildRoleCreateHandler(){_classCallCheck(this,GuildRoleCreateHandler);return _possibleConstructorReturn(this,_AbstractHandler14.apply(this,arguments));}GuildRoleCreateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildRoleCreate.handle(data);};return GuildRoleCreateHandler;}(AbstractHandler);module.exports=GuildRoleCreateHandler;/***/},/* 131 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var GuildRoleDeleteHandler=function(_AbstractHandler15){_inherits(GuildRoleDeleteHandler,_AbstractHandler15);function GuildRoleDeleteHandler(){_classCallCheck(this,GuildRoleDeleteHandler);return _possibleConstructorReturn(this,_AbstractHandler15.apply(this,arguments));}GuildRoleDeleteHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildRoleDelete.handle(data);};return GuildRoleDeleteHandler;}(AbstractHandler);module.exports=GuildRoleDeleteHandler;/***/},/* 132 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var GuildRoleUpdateHandler=function(_AbstractHandler16){_inherits(GuildRoleUpdateHandler,_AbstractHandler16);function GuildRoleUpdateHandler(){_classCallCheck(this,GuildRoleUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler16.apply(this,arguments));}GuildRoleUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildRoleUpdate.handle(data);};return GuildRoleUpdateHandler;}(AbstractHandler);module.exports=GuildRoleUpdateHandler;/***/},/* 133 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var GuildSyncHandler=function(_AbstractHandler17){_inherits(GuildSyncHandler,_AbstractHandler17);function GuildSyncHandler(){_classCallCheck(this,GuildSyncHandler);return _possibleConstructorReturn(this,_AbstractHandler17.apply(this,arguments));}GuildSyncHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildSync.handle(data);};return GuildSyncHandler;}(AbstractHandler);module.exports=GuildSyncHandler;/***/},/* 134 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var GuildUpdateHandler=function(_AbstractHandler18){_inherits(GuildUpdateHandler,_AbstractHandler18);function GuildUpdateHandler(){_classCallCheck(this,GuildUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler18.apply(this,arguments));}GuildUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.GuildUpdate.handle(data);};return GuildUpdateHandler;}(AbstractHandler);module.exports=GuildUpdateHandler;/***/},/* 135 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var MessageCreateHandler=function(_AbstractHandler19){_inherits(MessageCreateHandler,_AbstractHandler19);function MessageCreateHandler(){_classCallCheck(this,MessageCreateHandler);return _possibleConstructorReturn(this,_AbstractHandler19.apply(this,arguments));}MessageCreateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var response=client.actions.MessageCreate.handle(data);if(response.message)client.emit(Constants.Events.MESSAGE_CREATE,response.message);};return MessageCreateHandler;}(AbstractHandler);/**
 * Emitted whenever a message is created
 * @event Client#message
 * @param {Message} message The created message
 */module.exports=MessageCreateHandler;/***/},/* 136 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var MessageDeleteHandler=function(_AbstractHandler20){_inherits(MessageDeleteHandler,_AbstractHandler20);function MessageDeleteHandler(){_classCallCheck(this,MessageDeleteHandler);return _possibleConstructorReturn(this,_AbstractHandler20.apply(this,arguments));}MessageDeleteHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var response=client.actions.MessageDelete.handle(data);if(response.message)client.emit(Constants.Events.MESSAGE_DELETE,response.message);};return MessageDeleteHandler;}(AbstractHandler);/**
 * Emitted whenever a message is deleted
 * @event Client#messageDelete
 * @param {Message} message The deleted message
 */module.exports=MessageDeleteHandler;/***/},/* 137 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var MessageDeleteBulkHandler=function(_AbstractHandler21){_inherits(MessageDeleteBulkHandler,_AbstractHandler21);function MessageDeleteBulkHandler(){_classCallCheck(this,MessageDeleteBulkHandler);return _possibleConstructorReturn(this,_AbstractHandler21.apply(this,arguments));}MessageDeleteBulkHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.MessageDeleteBulk.handle(data);};return MessageDeleteBulkHandler;}(AbstractHandler);/**
 * Emitted whenever messages are deleted in bulk
 * @event Client#messageDeleteBulk
 * @param {Collection<string, Message>} messages The deleted messages, mapped by their ID
 */module.exports=MessageDeleteBulkHandler;/***/},/* 138 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var MessageReactionAddHandler=function(_AbstractHandler22){_inherits(MessageReactionAddHandler,_AbstractHandler22);function MessageReactionAddHandler(){_classCallCheck(this,MessageReactionAddHandler);return _possibleConstructorReturn(this,_AbstractHandler22.apply(this,arguments));}MessageReactionAddHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.MessageReactionAdd.handle(data);};return MessageReactionAddHandler;}(AbstractHandler);module.exports=MessageReactionAddHandler;/***/},/* 139 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var MessageReactionRemove=function(_AbstractHandler23){_inherits(MessageReactionRemove,_AbstractHandler23);function MessageReactionRemove(){_classCallCheck(this,MessageReactionRemove);return _possibleConstructorReturn(this,_AbstractHandler23.apply(this,arguments));}MessageReactionRemove.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.MessageReactionRemove.handle(data);};return MessageReactionRemove;}(AbstractHandler);module.exports=MessageReactionRemove;/***/},/* 140 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var MessageReactionRemoveAll=function(_AbstractHandler24){_inherits(MessageReactionRemoveAll,_AbstractHandler24);function MessageReactionRemoveAll(){_classCallCheck(this,MessageReactionRemoveAll);return _possibleConstructorReturn(this,_AbstractHandler24.apply(this,arguments));}MessageReactionRemoveAll.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.MessageReactionRemoveAll.handle(data);};return MessageReactionRemoveAll;}(AbstractHandler);module.exports=MessageReactionRemoveAll;/***/},/* 141 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var MessageUpdateHandler=function(_AbstractHandler25){_inherits(MessageUpdateHandler,_AbstractHandler25);function MessageUpdateHandler(){_classCallCheck(this,MessageUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler25.apply(this,arguments));}MessageUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.MessageUpdate.handle(data);};return MessageUpdateHandler;}(AbstractHandler);module.exports=MessageUpdateHandler;/***/},/* 142 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var PresenceUpdateHandler=function(_AbstractHandler26){_inherits(PresenceUpdateHandler,_AbstractHandler26);function PresenceUpdateHandler(){_classCallCheck(this,PresenceUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler26.apply(this,arguments));}PresenceUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var user=client.users.get(data.user.id);var guild=client.guilds.get(data.guild_id);// step 1
if(!user){if(data.user.username){user=client.dataManager.newUser(data.user);}else{return;}}var oldUser=cloneObject(user);user.patch(data.user);if(!user.equals(oldUser)){client.emit(Constants.Events.USER_UPDATE,oldUser,user);}if(guild){var member=guild.members.get(user.id);if(!member&&data.status!=='offline'){member=guild._addMember({user:user,roles:data.roles,deaf:false,mute:false},false);client.emit(Constants.Events.GUILD_MEMBER_AVAILABLE,member);}if(member){var oldMember=cloneObject(member);if(member.presence){oldMember.frozenPresence=cloneObject(member.presence);}guild._setPresence(user.id,data);client.emit(Constants.Events.PRESENCE_UPDATE,oldMember,member);}else{guild._setPresence(user.id,data);}}};return PresenceUpdateHandler;}(AbstractHandler);/**
 * Emitted whenever a guild member's presence changes, or they change one of their details.
 * @event Client#presenceUpdate
 * @param {GuildMember} oldMember The member before the presence update
 * @param {GuildMember} newMember The member after the presence update
 *//**
 * Emitted whenever a user's details (e.g. username) are changed.
 * @event Client#userUpdate
 * @param {User} oldUser The user before the update
 * @param {User} newUser The user after the update
 *//**
 * Emitted whenever a member becomes available in a large guild
 * @event Client#guildMemberAvailable
 * @param {GuildMember} member The member that became available
 */module.exports=PresenceUpdateHandler;/***/},/* 143 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var ClientUser=__webpack_require__(29);var ReadyHandler=function(_AbstractHandler27){_inherits(ReadyHandler,_AbstractHandler27);function ReadyHandler(){_classCallCheck(this,ReadyHandler);return _possibleConstructorReturn(this,_AbstractHandler27.apply(this,arguments));}ReadyHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.ws.heartbeat();var clientUser=new ClientUser(client,data.user);client.user=clientUser;client.readyAt=new Date();client.users.set(clientUser.id,clientUser);for(var _iterator73=data.guilds,_isArray73=Array.isArray(_iterator73),_i74=0,_iterator73=_isArray73?_iterator73:_iterator73[Symbol.iterator]();;){var _ref89;if(_isArray73){if(_i74>=_iterator73.length)break;_ref89=_iterator73[_i74++];}else{_i74=_iterator73.next();if(_i74.done)break;_ref89=_i74.value;}var guild=_ref89;client.dataManager.newGuild(guild);}for(var _iterator74=data.private_channels,_isArray74=Array.isArray(_iterator74),_i75=0,_iterator74=_isArray74?_iterator74:_iterator74[Symbol.iterator]();;){var _ref90;if(_isArray74){if(_i75>=_iterator74.length)break;_ref90=_iterator74[_i75++];}else{_i75=_iterator74.next();if(_i75.done)break;_ref90=_i75.value;}var privateDM=_ref90;client.dataManager.newChannel(privateDM);}for(var _iterator75=data.relationships,_isArray75=Array.isArray(_iterator75),_i76=0,_iterator75=_isArray75?_iterator75:_iterator75[Symbol.iterator]();;){var _ref91;if(_isArray75){if(_i76>=_iterator75.length)break;_ref91=_iterator75[_i76++];}else{_i76=_iterator75.next();if(_i76.done)break;_ref91=_i76.value;}var relation=_ref91;var _user=client.dataManager.newUser(relation.user);if(relation.type===1){client.user.friends.set(_user.id,_user);}else if(relation.type===2){client.user.blocked.set(_user.id,_user);}}data.presences=data.presences||[];for(var _iterator76=data.presences,_isArray76=Array.isArray(_iterator76),_i77=0,_iterator76=_isArray76?_iterator76:_iterator76[Symbol.iterator]();;){var _ref92;if(_isArray76){if(_i77>=_iterator76.length)break;_ref92=_iterator76[_i77++];}else{_i77=_iterator76.next();if(_i77.done)break;_ref92=_i77.value;}var presence=_ref92;client.dataManager.newUser(presence.user);client._setPresence(presence.user.id,presence);}if(data.notes){for(var user in data.notes){var note=data.notes[user];if(!note.length)note=null;client.user.notes.set(user,note);}}if(!client.user.bot&&client.options.sync)client.setInterval(client.syncGuilds.bind(client),30000);client.once('ready',client.syncGuilds.bind(client));if(!client.users.has('1')){client.dataManager.newUser({id:'1',username:'Clyde',discriminator:'0000',avatar:'https://discordapp.com/assets/f78426a064bc9dd24847519259bc42af.png',bot:true,status:'online',game:null,verified:true});}client.setTimeout(function(){if(!client.ws.normalReady)client.ws._emitReady(false);},1200*data.guilds.length);this.packetManager.ws.sessionID=data.session_id;this.packetManager.ws.checkIfReady();};return ReadyHandler;}(AbstractHandler);module.exports=ReadyHandler;/***/},/* 144 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var RelationshipAddHandler=function(_AbstractHandler28){_inherits(RelationshipAddHandler,_AbstractHandler28);function RelationshipAddHandler(){_classCallCheck(this,RelationshipAddHandler);return _possibleConstructorReturn(this,_AbstractHandler28.apply(this,arguments));}RelationshipAddHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;if(data.type===1){client.fetchUser(data.id).then(function(user){client.user.friends.set(user.id,user);});}else if(data.type===2){client.fetchUser(data.id).then(function(user){client.user.blocked.set(user.id,user);});}};return RelationshipAddHandler;}(AbstractHandler);module.exports=RelationshipAddHandler;/***/},/* 145 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var RelationshipRemoveHandler=function(_AbstractHandler29){_inherits(RelationshipRemoveHandler,_AbstractHandler29);function RelationshipRemoveHandler(){_classCallCheck(this,RelationshipRemoveHandler);return _possibleConstructorReturn(this,_AbstractHandler29.apply(this,arguments));}RelationshipRemoveHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;if(data.type===2){if(client.user.blocked.has(data.id)){client.user.blocked.delete(data.id);}}else if(data.type===1){if(client.user.friends.has(data.id)){client.user.friends.delete(data.id);}}};return RelationshipRemoveHandler;}(AbstractHandler);module.exports=RelationshipRemoveHandler;/***/},/* 146 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var TypingStartHandler=function(_AbstractHandler30){_inherits(TypingStartHandler,_AbstractHandler30);function TypingStartHandler(){_classCallCheck(this,TypingStartHandler);return _possibleConstructorReturn(this,_AbstractHandler30.apply(this,arguments));}TypingStartHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var channel=client.channels.get(data.channel_id);var user=client.users.get(data.user_id);var timestamp=new Date(data.timestamp*1000);if(channel&&user){if(channel.type==='voice'){client.emit(Constants.Events.WARN,'Discord sent a typing packet to voice channel '+channel.id);return;}if(channel._typing.has(user.id)){var typing=channel._typing.get(user.id);typing.lastTimestamp=timestamp;typing.resetTimeout(tooLate(channel,user));}else{channel._typing.set(user.id,new TypingData(client,timestamp,timestamp,tooLate(channel,user)));client.emit(Constants.Events.TYPING_START,channel,user);}}};return TypingStartHandler;}(AbstractHandler);var TypingData=function(){function TypingData(client,since,lastTimestamp,_timeout){_classCallCheck(this,TypingData);this.client=client;this.since=since;this.lastTimestamp=lastTimestamp;this._timeout=_timeout;}TypingData.prototype.resetTimeout=function resetTimeout(_timeout){this.client.clearTimeout(this._timeout);this._timeout=_timeout;};_createClass(TypingData,[{key:'elapsedTime',get:function get(){return Date.now()-this.since;}}]);return TypingData;}();function tooLate(channel,user){return channel.client.setTimeout(function(){channel.client.emit(Constants.Events.TYPING_STOP,channel,user,channel._typing.get(user.id));channel._typing.delete(user.id);},6000);}/**
 * Emitted whenever a user starts typing in a channel
 * @event Client#typingStart
 * @param {Channel} channel The channel the user started typing in
 * @param {User} user The user that started typing
 *//**
 * Emitted whenever a user stops typing in a channel
 * @event Client#typingStop
 * @param {Channel} channel The channel the user stopped typing in
 * @param {User} user The user that stopped typing
 */module.exports=TypingStartHandler;/***/},/* 147 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var UserNoteUpdateHandler=function(_AbstractHandler31){_inherits(UserNoteUpdateHandler,_AbstractHandler31);function UserNoteUpdateHandler(){_classCallCheck(this,UserNoteUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler31.apply(this,arguments));}UserNoteUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.UserNoteUpdate.handle(data);};return UserNoteUpdateHandler;}(AbstractHandler);module.exports=UserNoteUpdateHandler;/***/},/* 148 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var UserUpdateHandler=function(_AbstractHandler32){_inherits(UserUpdateHandler,_AbstractHandler32);function UserUpdateHandler(){_classCallCheck(this,UserUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler32.apply(this,arguments));}UserUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.actions.UserUpdate.handle(data);};return UserUpdateHandler;}(AbstractHandler);module.exports=UserUpdateHandler;/***/},/* 149 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);/*
{
    "token": "my_token",
    "guild_id": "41771983423143937",
    "endpoint": "smart.loyal.discord.gg"
}
*/var VoiceServerUpdate=function(_AbstractHandler33){_inherits(VoiceServerUpdate,_AbstractHandler33);function VoiceServerUpdate(){_classCallCheck(this,VoiceServerUpdate);return _possibleConstructorReturn(this,_AbstractHandler33.apply(this,arguments));}VoiceServerUpdate.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;client.emit('self.voiceServer',data);};return VoiceServerUpdate;}(AbstractHandler);module.exports=VoiceServerUpdate;/***/},/* 150 *//***/function(module,exports,__webpack_require__){var AbstractHandler=__webpack_require__(1);var Constants=__webpack_require__(0);var cloneObject=__webpack_require__(4);var VoiceStateUpdateHandler=function(_AbstractHandler34){_inherits(VoiceStateUpdateHandler,_AbstractHandler34);function VoiceStateUpdateHandler(){_classCallCheck(this,VoiceStateUpdateHandler);return _possibleConstructorReturn(this,_AbstractHandler34.apply(this,arguments));}VoiceStateUpdateHandler.prototype.handle=function handle(packet){var client=this.packetManager.client;var data=packet.d;var guild=client.guilds.get(data.guild_id);if(guild){var member=guild.members.get(data.user_id);if(member){var oldVoiceChannelMember=cloneObject(member);if(member.voiceChannel&&member.voiceChannel.id!==data.channel_id){member.voiceChannel.members.delete(oldVoiceChannelMember.id);}// if the member left the voice channel, unset their speaking property
if(!data.channel_id)member.speaking=null;if(member.user.id===client.user.id&&data.channel_id){client.emit('self.voiceStateUpdate',data);}var newChannel=client.channels.get(data.channel_id);if(newChannel)newChannel.members.set(member.user.id,member);member.serverMute=data.mute;member.serverDeaf=data.deaf;member.selfMute=data.self_mute;member.selfDeaf=data.self_deaf;member.voiceSessionID=data.session_id;member.voiceChannelID=data.channel_id;client.emit(Constants.Events.VOICE_STATE_UPDATE,oldVoiceChannelMember,member);}}};return VoiceStateUpdateHandler;}(AbstractHandler);/**
 * Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
 * @event Client#voiceStateUpdate
 * @param {GuildMember} oldMember The member before the voice state update
 * @param {GuildMember} newMember The member after the voice state update
 */module.exports=VoiceStateUpdateHandler;/***/},/* 151 *//***/function(module,exports){/**
 * Represents a user connection (or "platform identity")
 */var UserConnection=function(){function UserConnection(user,data){_classCallCheck(this,UserConnection);/**
     * The user that owns the Connection
     * @type {User}
     */this.user=user;this.setup(data);}UserConnection.prototype.setup=function setup(data){/**
     * The type of the Connection
     * @type {string}
     */this.type=data.type;/**
     * The username of the connection account
     * @type {string}
     */this.name=data.name;/**
     * The id of the connection account
     * @type {string}
     */this.id=data.id;/**
     * Whether the connection is revoked
     * @type {boolean}
     */this.revoked=data.revoked;/**
     * an array of partial server integrations (not yet implemented in this lib)
     * @type {Object[]}
     */this.integrations=data.integrations;};return UserConnection;}();module.exports=UserConnection;/***/},/* 152 *//***/function(module,exports,__webpack_require__){var Collection=__webpack_require__(3);var UserConnection=__webpack_require__(151);/**
 * Represents a user's profile on Discord.
 */var UserProfile=function(){function UserProfile(user,data){_classCallCheck(this,UserProfile);/**
     * The owner of the profile
     * @type {User}
     */this.user=user;/**
     * The Client that created the instance of the the UserProfile.
     * @name UserProfile#client
     * @type {Client}
     * @readonly
     */Object.defineProperty(this,'client',{value:user.client});/**
     * Guilds that the client user and the user share
     * @type {Collection<Guild>}
     */this.mutualGuilds=new Collection();/**
     * The user's connections
     * @type {Collection<UserConnection>}
     */this.connections=new Collection();this.setup(data);}UserProfile.prototype.setup=function setup(data){/**
     * If the user has Discord Premium
     * @type {boolean}
     */this.premium=data.premium;for(var _iterator77=data.mutual_guilds,_isArray77=Array.isArray(_iterator77),_i78=0,_iterator77=_isArray77?_iterator77:_iterator77[Symbol.iterator]();;){var _ref93;if(_isArray77){if(_i78>=_iterator77.length)break;_ref93=_iterator77[_i78++];}else{_i78=_iterator77.next();if(_i78.done)break;_ref93=_i78.value;}var guild=_ref93;if(this.client.guilds.has(guild.id)){this.mutualGuilds.set(guild.id,this.client.guilds.get(guild.id));}}for(var _iterator78=data.connected_accounts,_isArray78=Array.isArray(_iterator78),_i79=0,_iterator78=_isArray78?_iterator78:_iterator78[Symbol.iterator]();;){var _ref94;if(_isArray78){if(_i79>=_iterator78.length)break;_ref94=_iterator78[_i79++];}else{_i79=_iterator78.next();if(_i79.done)break;_ref94=_i79.value;}var connection=_ref94;this.connections.set(connection.id,new UserConnection(this.user,connection));}};return UserProfile;}();module.exports=UserProfile;/***/},/* 153 *//***/function(module,exports){module.exports=function arraysEqual(a,b){if(a===b)return true;if(a.length!==b.length)return false;for(var itemInd in a){var item=a[itemInd];var ind=b.indexOf(item);if(ind){b.splice(ind,1);}}return b.length===0;};/***/},/* 154 *//***/function(module,exports){module.exports=function parseEmoji(text){if(text.includes('%')){text=decodeURIComponent(text);}if(text.includes(':')){var _text$split=text.split(':'),name=_text$split[0],id=_text$split[1];return{name:name,id:id};}else{return{name:text,id:null};}};/***/},/* 155 *//***/function(module,exports){/* (ignored) *//***/},/* 156 *//***/function(module,exports){/* (ignored) *//***/},/* 157 *//***/function(module,exports){/* (ignored) *//***/},/* 158 *//***/function(module,exports){/* (ignored) *//***/},/* 159 *//***/function(module,exports){}/* (ignored) *//***//******/]);