"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (t) {
  function e(i) {
    if (n[i]) return n[i].exports;var s = n[i] = { i: i, l: !1, exports: {} };return t[i].call(s.exports, s, s.exports, e), s.l = !0, s.exports;
  }var n = {};return e.m = t, e.c = n, e.i = function (t) {
    return t;
  }, e.d = function (t, n, i) {
    e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i });
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(n, "a", n), n;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 57);
}([function (t, e, n) {
  (function (t) {
    e.Package = n(27), e.DefaultOptions = { apiRequestMethod: "sequential", shardId: 0, shardCount: 0, messageCacheMaxSize: 200, messageCacheLifetime: 0, messageSweepInterval: 0, fetchAllMembers: !1, disableEveryone: !1, sync: !1, restWsBridgeTimeout: 5e3, disabledEvents: [], restTimeOffset: 500, ws: { large_threshold: 250, compress: "undefined" == typeof window, properties: { $os: t ? t.platform : "discord.js", $browser: "discord.js", $device: "discord.js", $referrer: "", $referring_domain: "" } } }, e.Errors = { NO_TOKEN: "Request to use token, but token was unavailable to the client.", NO_BOT_ACCOUNT: "Only bot accounts are able to make use of this feature.", NO_USER_ACCOUNT: "Only user accounts are able to make use of this feature.", BAD_WS_MESSAGE: "A bad message was received from the websocket; either bad compression, or not JSON.", TOOK_TOO_LONG: "Something took too long to do.", NOT_A_PERMISSION: "Invalid permission string or number.", INVALID_RATE_LIMIT_METHOD: "Unknown rate limiting method.", BAD_LOGIN: "Incorrect login details were provided.", INVALID_SHARD: "Invalid shard settings were provided.", INVALID_TOKEN: "An invalid token was provided." };var i = e.PROTOCOL_VERSION = 6,
        s = e.HOST = "https://discordapp.com",
        r = e.API = s + "/api/v" + i,
        o = e.Endpoints = { login: r + "/auth/login", logout: r + "/auth/logout", gateway: r + "/gateway", botGateway: r + "/gateway/bot", invite: function invite(t) {
        return r + "/invite/" + t;
      }, inviteLink: function inviteLink(t) {
        return "https://discord.gg/" + t;
      }, assets: function assets(t) {
        return s + "/assets/" + t;
      }, CDN: "https://cdn.discordapp.com", user: function user(t) {
        return r + "/users/" + t;
      }, userChannels: function userChannels(t) {
        return o.user(t) + "/channels";
      }, userProfile: function userProfile(t) {
        return o.user(t) + "/profile";
      }, avatar: function avatar(t, e) {
        return "1" === t ? e : o.CDN + "/avatars/" + t + "/" + e + "." + (e.startsWith("a_") ? "gif" : "jpg") + "?size=1024";
      }, me: r + "/users/@me", meGuild: function meGuild(t) {
        return o.me + "/guilds/" + t;
      }, meMentions: function meMentions(t, e, n, i) {
        return "users/@me/mentions?limit=" + t + "&roles=" + e + "&everyone=" + n + (i ? "&guild_id=" + i : "");
      }, relationships: function relationships(t) {
        return o.user(t) + "/relationships";
      }, note: function note(t) {
        return o.me + "/notes/" + t;
      }, guilds: r + "/guilds", guild: function guild(t) {
        return o.guilds + "/" + t;
      }, guildIcon: function guildIcon(t, e) {
        return o.CDN + "/icons/" + t + "/" + e + ".jpg";
      }, guildSplash: function guildSplash(t, e) {
        return o.CDN + "/splashes/" + t + "/" + e + ".jpg";
      }, guildPrune: function guildPrune(t) {
        return o.guild(t) + "/prune";
      }, guildEmbed: function guildEmbed(t) {
        return o.guild(t) + "/embed";
      }, guildInvites: function guildInvites(t) {
        return o.guild(t) + "/invites";
      }, guildRoles: function guildRoles(t) {
        return o.guild(t) + "/roles";
      }, guildRole: function guildRole(t, e) {
        return o.guildRoles(t) + "/" + e;
      }, guildBans: function guildBans(t) {
        return o.guild(t) + "/bans";
      }, guildIntegrations: function guildIntegrations(t) {
        return o.guild(t) + "/integrations";
      }, guildMembers: function guildMembers(t) {
        return o.guild(t) + "/members";
      }, guildMember: function guildMember(t, e) {
        return o.guildMembers(t) + "/" + e;
      }, guildMemberRole: function guildMemberRole(t, e, n) {
        return o.guildMember(t, e) + "/roles/" + n;
      }, guildMemberNickname: function guildMemberNickname(t) {
        return o.guildMember(t, "@me") + "/nick";
      }, guildChannels: function guildChannels(t) {
        return o.guild(t) + "/channels";
      }, guildEmojis: function guildEmojis(t) {
        return o.guild(t) + "/emojis";
      }, channels: r + "/channels", channel: function channel(t) {
        return o.channels + "/" + t;
      }, channelMessages: function channelMessages(t) {
        return o.channel(t) + "/messages";
      }, channelInvites: function channelInvites(t) {
        return o.channel(t) + "/invites";
      }, channelTyping: function channelTyping(t) {
        return o.channel(t) + "/typing";
      }, channelPermissions: function channelPermissions(t) {
        return o.channel(t) + "/permissions";
      }, channelMessage: function channelMessage(t, e) {
        return o.channelMessages(t) + "/" + e;
      }, channelWebhooks: function channelWebhooks(t) {
        return o.channel(t) + "/webhooks";
      }, messageReactions: function messageReactions(t, e) {
        return o.channelMessage(t, e) + "/reactions";
      }, messageReaction: function messageReaction(t, e, n, i) {
        return o.messageReactions(t, e) + "/" + n + ("" + (i ? "?limit=" + i : ""));
      }, selfMessageReaction: function selfMessageReaction(t, e, n, i) {
        return o.messageReaction(t, e, n, i) + "/@me";
      }, userMessageReaction: function userMessageReaction(t, e, n, i, s) {
        return o.messageReaction(t, e, n, i) + "/" + s;
      }, webhook: function webhook(t, e) {
        return r + "/webhooks/" + t + (e ? "/" + e : "");
      }, myApplication: r + "/oauth2/applications/@me", getApp: function getApp(t) {
        return r + "/oauth2/authorize?client_id=" + t;
      }, emoji: function emoji(t) {
        return o.CDN + "/emojis/" + t + ".png";
      } };e.Status = { READY: 0, CONNECTING: 1, RECONNECTING: 2, IDLE: 3, NEARLY: 4, DISCONNECTED: 5 }, e.ChannelTypes = { text: 0, DM: 1, voice: 2, groupDM: 3 }, e.OPCodes = { DISPATCH: 0, HEARTBEAT: 1, IDENTIFY: 2, STATUS_UPDATE: 3, VOICE_STATE_UPDATE: 4, VOICE_GUILD_PING: 5, RESUME: 6, RECONNECT: 7, REQUEST_GUILD_MEMBERS: 8, INVALID_SESSION: 9, HELLO: 10, HEARTBEAT_ACK: 11 }, e.VoiceOPCodes = { IDENTIFY: 0, SELECT_PROTOCOL: 1, READY: 2, HEARTBEAT: 3, SESSION_DESCRIPTION: 4, SPEAKING: 5 }, e.Events = { READY: "ready", GUILD_CREATE: "guildCreate", GUILD_DELETE: "guildDelete", GUILD_UPDATE: "guildUpdate", GUILD_UNAVAILABLE: "guildUnavailable", GUILD_AVAILABLE: "guildAvailable", GUILD_MEMBER_ADD: "guildMemberAdd", GUILD_MEMBER_REMOVE: "guildMemberRemove", GUILD_MEMBER_UPDATE: "guildMemberUpdate", GUILD_MEMBER_AVAILABLE: "guildMemberAvailable", GUILD_MEMBER_SPEAKING: "guildMemberSpeaking", GUILD_MEMBERS_CHUNK: "guildMembersChunk", GUILD_ROLE_CREATE: "roleCreate", GUILD_ROLE_DELETE: "roleDelete", GUILD_ROLE_UPDATE: "roleUpdate", GUILD_EMOJI_CREATE: "emojiCreate", GUILD_EMOJI_DELETE: "emojiDelete", GUILD_EMOJI_UPDATE: "emojiUpdate", GUILD_BAN_ADD: "guildBanAdd", GUILD_BAN_REMOVE: "guildBanRemove", CHANNEL_CREATE: "channelCreate", CHANNEL_DELETE: "channelDelete", CHANNEL_UPDATE: "channelUpdate", CHANNEL_PINS_UPDATE: "channelPinsUpdate", MESSAGE_CREATE: "message", MESSAGE_DELETE: "messageDelete", MESSAGE_UPDATE: "messageUpdate", MESSAGE_BULK_DELETE: "messageDeleteBulk", MESSAGE_REACTION_ADD: "messageReactionAdd", MESSAGE_REACTION_REMOVE: "messageReactionRemove", MESSAGE_REACTION_REMOVE_ALL: "messageReactionRemoveAll", USER_UPDATE: "userUpdate", USER_NOTE_UPDATE: "userNoteUpdate", PRESENCE_UPDATE: "presenceUpdate", VOICE_STATE_UPDATE: "voiceStateUpdate", TYPING_START: "typingStart", TYPING_STOP: "typingStop", DISCONNECT: "disconnect", RECONNECTING: "reconnecting", ERROR: "error", WARN: "warn", DEBUG: "debug" }, e.WSEvents = { READY: "READY", GUILD_SYNC: "GUILD_SYNC", GUILD_CREATE: "GUILD_CREATE", GUILD_DELETE: "GUILD_DELETE", GUILD_UPDATE: "GUILD_UPDATE", GUILD_MEMBER_ADD: "GUILD_MEMBER_ADD", GUILD_MEMBER_REMOVE: "GUILD_MEMBER_REMOVE", GUILD_MEMBER_UPDATE: "GUILD_MEMBER_UPDATE", GUILD_MEMBERS_CHUNK: "GUILD_MEMBERS_CHUNK", GUILD_ROLE_CREATE: "GUILD_ROLE_CREATE", GUILD_ROLE_DELETE: "GUILD_ROLE_DELETE", GUILD_ROLE_UPDATE: "GUILD_ROLE_UPDATE", GUILD_BAN_ADD: "GUILD_BAN_ADD", GUILD_BAN_REMOVE: "GUILD_BAN_REMOVE", GUILD_EMOJIS_UPDATE: "GUILD_EMOJIS_UPDATE", CHANNEL_CREATE: "CHANNEL_CREATE", CHANNEL_DELETE: "CHANNEL_DELETE", CHANNEL_UPDATE: "CHANNEL_UPDATE", CHANNEL_PINS_UPDATE: "CHANNEL_PINS_UPDATE", MESSAGE_CREATE: "MESSAGE_CREATE", MESSAGE_DELETE: "MESSAGE_DELETE", MESSAGE_UPDATE: "MESSAGE_UPDATE", MESSAGE_DELETE_BULK: "MESSAGE_DELETE_BULK", MESSAGE_REACTION_ADD: "MESSAGE_REACTION_ADD", MESSAGE_REACTION_REMOVE: "MESSAGE_REACTION_REMOVE", MESSAGE_REACTION_REMOVE_ALL: "MESSAGE_REACTION_REMOVE_ALL", USER_UPDATE: "USER_UPDATE", USER_NOTE_UPDATE: "USER_NOTE_UPDATE", PRESENCE_UPDATE: "PRESENCE_UPDATE", VOICE_STATE_UPDATE: "VOICE_STATE_UPDATE", TYPING_START: "TYPING_START", VOICE_SERVER_UPDATE: "VOICE_SERVER_UPDATE", RELATIONSHIP_ADD: "RELATIONSHIP_ADD", RELATIONSHIP_REMOVE: "RELATIONSHIP_REMOVE" }, e.MessageTypes = { 0: "DEFAULT", 1: "RECIPIENT_ADD", 2: "RECIPIENT_REMOVE", 3: "CALL", 4: "CHANNEL_NAME_CHANGE", 5: "CHANNEL_ICON_CHANGE", 6: "PINS_ADD" }, e.DefaultAvatars = { BLURPLE: "6debd47ed13483642cf09e832ed0bc1b", GREY: "322c936a8c8be1b803cd94861bdfa868", GREEN: "dd4dbc0016779df1378e7812eabaa04d", ORANGE: "0e291f67c9274a1abdddeb3fd919cbaa", RED: "1cbd08c76f8af6dddce02c5138971129" };var a = e.PermissionFlags = { CREATE_INSTANT_INVITE: 1, KICK_MEMBERS: 2, BAN_MEMBERS: 4, ADMINISTRATOR: 8, MANAGE_CHANNELS: 16, MANAGE_GUILD: 32, ADD_REACTIONS: 64, READ_MESSAGES: 1024, SEND_MESSAGES: 2048, SEND_TTS_MESSAGES: 4096, MANAGE_MESSAGES: 8192, EMBED_LINKS: 16384, ATTACH_FILES: 32768, READ_MESSAGE_HISTORY: 65536, MENTION_EVERYONE: 1 << 17, EXTERNAL_EMOJIS: 1 << 18, CONNECT: 1 << 20, SPEAK: 1 << 21, MUTE_MEMBERS: 1 << 22, DEAFEN_MEMBERS: 1 << 23, MOVE_MEMBERS: 1 << 24, USE_VAD: 1 << 25, CHANGE_NICKNAME: 1 << 26, MANAGE_NICKNAMES: 1 << 27, MANAGE_ROLES_OR_PERMISSIONS: 1 << 28, MANAGE_WEBHOOKS: 1 << 29, MANAGE_EMOJIS: 1 << 30 };var h = 0;for (var u in a) {
      h |= a[u];
    }e.ALL_PERMISSIONS = h, e.DEFAULT_PERMISSIONS = 104324097;
  }).call(e, n(24));
}, function (t, e) {
  var n = function () {
    function n(t) {
      _classCallCheck(this, n);

      this.packetManager = t;
    }

    _createClass(n, [{
      key: "handle",
      value: function handle(t) {
        return t;
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e) {
  var n = function () {
    function n(t) {
      _classCallCheck(this, n);

      this.client = t;
    }

    _createClass(n, [{
      key: "handle",
      value: function handle(t) {
        return t;
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e) {
  var n = function (_Map) {
    _inherits(n, _Map);

    function n(t) {
      var _this;

      _classCallCheck(this, n);

      (_this = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)), _this), _this._array = null, _this._keyArray = null;return _this;
    }

    _createClass(n, [{
      key: "set",
      value: function set(t, e) {
        return this._array = null, this._keyArray = null, _get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "set", this).call(this, t, e);
      }
    }, {
      key: "delete",
      value: function _delete(t) {
        return this._array = null, this._keyArray = null, _get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "delete", this).call(this, t);
      }
    }, {
      key: "array",
      value: function array() {
        return this._array && this._array.length === this.size || (this._array = Array.from(this.values())), this._array;
      }
    }, {
      key: "keyArray",
      value: function keyArray() {
        return this._keyArray && this._keyArray.length === this.size || (this._keyArray = Array.from(this.keys())), this._keyArray;
      }
    }, {
      key: "first",
      value: function first() {
        return this.values().next().value;
      }
    }, {
      key: "firstKey",
      value: function firstKey() {
        return this.keys().next().value;
      }
    }, {
      key: "last",
      value: function last() {
        var t = this.array();return t[t.length - 1];
      }
    }, {
      key: "lastKey",
      value: function lastKey() {
        var t = this.keyArray();return t[t.length - 1];
      }
    }, {
      key: "random",
      value: function random() {
        var t = this.array();return t[Math.floor(Math.random() * t.length)];
      }
    }, {
      key: "randomKey",
      value: function randomKey() {
        var t = this.keyArray();return t[Math.floor(Math.random() * t.length)];
      }
    }, {
      key: "findAll",
      value: function findAll(t, e) {
        if ("string" != typeof t) throw new TypeError("Key must be a string.");if ("undefined" == typeof e) throw new Error("Value must be specified.");var n = [];var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;
            i[t] === e && n.push(i);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return n;
      }
    }, {
      key: "find",
      value: function find(t, e) {
        if ("string" == typeof t) {
          if ("undefined" == typeof e) throw new Error("Value must be specified.");if ("id" === t) throw new RangeError("Don't use .find() with IDs. Instead, use .get(id).");var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _n = _step2.value;
              if (_n[t] === e) return _n;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return null;
        }if ("function" == typeof t) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _ref = _step3.value;

              var _ref2 = _slicedToArray(_ref, 2);

              var _e = _ref2[0];
              var _n2 = _ref2[1];
              if (t(_n2, _e, this)) return _n2;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return null;
        }throw new Error("First argument must be a property string or a function.");
      }
    }, {
      key: "findKey",
      value: function findKey(t, e) {
        if ("string" == typeof t) {
          if ("undefined" == typeof e) throw new Error("Value must be specified.");var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _ref3 = _step4.value;

              var _ref4 = _slicedToArray(_ref3, 2);

              var _n3 = _ref4[0];
              var i = _ref4[1];
              if (i[t] === e) return _n3;
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          return null;
        }if ("function" == typeof t) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _ref5 = _step5.value;

              var _ref6 = _slicedToArray(_ref5, 2);

              var _e2 = _ref6[0];
              var _n4 = _ref6[1];
              if (t(_n4, _e2, this)) return _e2;
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return null;
        }throw new Error("First argument must be a property string or a function.");
      }
    }, {
      key: "exists",
      value: function exists(t, e) {
        if ("id" === t) throw new RangeError("Don't use .exists() with IDs. Instead, use .has(id).");return Boolean(this.find(t, e));
      }
    }, {
      key: "filter",
      value: function filter(t, e) {
        e && (t = t.bind(e));var i = new n();var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _ref7 = _step6.value;

            var _ref8 = _slicedToArray(_ref7, 2);

            var s = _ref8[0];
            var r = _ref8[1];
            t(r, s, this) && i.set(s, r);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        return i;
      }
    }, {
      key: "filterArray",
      value: function filterArray(t, e) {
        e && (t = t.bind(e));var n = [];var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _ref9 = _step7.value;

            var _ref10 = _slicedToArray(_ref9, 2);

            var i = _ref10[0];
            var s = _ref10[1];
            t(s, i, this) && n.push(s);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        return n;
      }
    }, {
      key: "map",
      value: function map(t, e) {
        e && (t = t.bind(e));var n = new Array(this.size);var i = 0;var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = this[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _ref11 = _step8.value;

            var _ref12 = _slicedToArray(_ref11, 2);

            var s = _ref12[0];
            var r = _ref12[1];
            n[i++] = t(r, s, this);
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return n;
      }
    }, {
      key: "some",
      value: function some(t, e) {
        e && (t = t.bind(e));var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _ref13 = _step9.value;

            var _ref14 = _slicedToArray(_ref13, 2);

            var _n5 = _ref14[0];
            var i = _ref14[1];
            if (t(i, _n5, this)) return !0;
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        return !1;
      }
    }, {
      key: "every",
      value: function every(t, e) {
        e && (t = t.bind(e));var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = this[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _ref15 = _step10.value;

            var _ref16 = _slicedToArray(_ref15, 2);

            var _n6 = _ref16[0];
            var i = _ref16[1];
            if (!t(i, _n6, this)) return !1;
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }

        return !0;
      }
    }, {
      key: "reduce",
      value: function reduce(t, e) {
        var n = void 0;if ("undefined" != typeof e) {
          n = e;var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _ref17 = _step11.value;

              var _ref18 = _slicedToArray(_ref17, 2);

              var i = _ref18[0];
              var s = _ref18[1];
              n = t(n, s, i, this);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        } else {
          var _e3 = !0;var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = this[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _ref19 = _step12.value;

              var _ref20 = _slicedToArray(_ref19, 2);

              var _i = _ref20[0];
              var _s = _ref20[1];
              _e3 ? (n = _s, _e3 = !1) : n = t(n, _s, _i, this);
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12.return) {
                _iterator12.return();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }
        }return n;
      }
    }, {
      key: "concat",
      value: function concat() {
        var e = new this.constructor();var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = this[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var _ref21 = _step13.value;

            var _ref22 = _slicedToArray(_ref21, 2);

            var _n7 = _ref22[0];
            var i = _ref22[1];
            e.set(_n7, i);
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }

        for (var _len = arguments.length, t = Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = t[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var s = _step14.value;
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = s[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var _ref23 = _step15.value;

                var _ref24 = _slicedToArray(_ref23, 2);

                var _n8 = _ref24[0];
                var _i2 = _ref24[1];
                e.set(_n8, _i2);
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14.return) {
              _iterator14.return();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }

        return e;
      }
    }, {
      key: "deleteAll",
      value: function deleteAll() {
        var t = [];var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = this.values()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var _e4 = _step16.value;
            _e4.delete && t.push(_e4.delete());
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16.return) {
              _iterator16.return();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }

        return t;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return !!t && (this === t || this.size === t.size && !this.find(function (e, n) {
          var i = t.get(n);return i !== e || void 0 === i && !t.has(n);
        }));
      }
    }]);

    return n;
  }(Map);

  t.exports = n;
}, function (t, e) {
  t.exports = function (t) {
    var e = Object.create(t);return Object.assign(e, t), e;
  };
}, function (t, e, n) {
  "use strict";
  var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;e.assign = function (t) {
    for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
      var n = e.shift();if (n) {
        if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n))) throw new TypeError(n + "must be non-object");for (var i in n) {
          n.hasOwnProperty(i) && (t[i] = n[i]);
        }
      }
    }return t;
  }, e.shrinkBuf = function (t, e) {
    return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
  };var s = { arraySet: function arraySet(t, e, n, i, s) {
      if (e.subarray && t.subarray) return void t.set(e.subarray(n, n + i), s);for (var r = 0; r < i; r++) {
        t[s + r] = e[n + r];
      }
    }, flattenChunks: function flattenChunks(t) {
      var e, n, i, s, r, o;for (i = 0, e = 0, n = t.length; e < n; e++) {
        i += t[e].length;
      }for (o = new Uint8Array(i), s = 0, e = 0, n = t.length; e < n; e++) {
        r = t[e], o.set(r, s), s += r.length;
      }return o;
    } },
      r = { arraySet: function arraySet(t, e, n, i, s) {
      for (var r = 0; r < i; r++) {
        t[s + r] = e[n + r];
      }
    }, flattenChunks: function flattenChunks(t) {
      return [].concat.apply([], t);
    } };e.setTyped = function (t) {
    t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, s)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, r));
  }, e.setTyped(i);
}, function (t, e, n) {
  var i = n(12),
      s = n(0),
      r = n(7).Presence;
  var o = function () {
    function o(t, e) {
      _classCallCheck(this, o);

      Object.defineProperty(this, "client", { value: t }), e && this.setup(e);
    }

    _createClass(o, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.username = t.username, this.discriminator = t.discriminator, this.avatar = t.avatar, this.bot = Boolean(t.bot), this.lastMessageID = null;
      }
    }, {
      key: "patch",
      value: function patch(t) {
        var _arr = ["id", "username", "discriminator", "avatar", "bot"];
        for (var _i3 = 0; _i3 < _arr.length; _i3++) {
          var _e5 = _arr[_i3];"undefined" != typeof t[_e5] && (this[_e5] = t[_e5]);
        }t.token && (this.client.token = t.token);
      }
    }, {
      key: "typingIn",
      value: function typingIn(t) {
        return t = this.client.resolver.resolveChannel(t), t._typing.has(this.id);
      }
    }, {
      key: "typingSinceIn",
      value: function typingSinceIn(t) {
        return t = this.client.resolver.resolveChannel(t), t._typing.has(this.id) ? new Date(t._typing.get(this.id).since) : null;
      }
    }, {
      key: "typingDurationIn",
      value: function typingDurationIn(t) {
        return t = this.client.resolver.resolveChannel(t), t._typing.has(this.id) ? t._typing.get(this.id).elapsedTime : -1;
      }
    }, {
      key: "deleteDM",
      value: function deleteDM() {
        return this.client.rest.methods.deleteChannel(this);
      }
    }, {
      key: "addFriend",
      value: function addFriend() {
        return this.client.rest.methods.addFriend(this);
      }
    }, {
      key: "removeFriend",
      value: function removeFriend() {
        return this.client.rest.methods.removeFriend(this);
      }
    }, {
      key: "block",
      value: function block() {
        return this.client.rest.methods.blockUser(this);
      }
    }, {
      key: "unblock",
      value: function unblock() {
        return this.client.rest.methods.unblockUser(this);
      }
    }, {
      key: "fetchProfile",
      value: function fetchProfile() {
        return this.client.rest.methods.fetchUserProfile(this);
      }
    }, {
      key: "setNote",
      value: function setNote(t) {
        return this.client.rest.methods.setNote(this, t);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = t && this.id === t.id && this.username === t.username && this.discriminator === t.discriminator && this.avatar === t.avatar && this.bot === Boolean(t.bot);return e;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "<@" + this.id + ">";
      }
    }, {
      key: "send",
      value: function send() {}
    }, {
      key: "sendMessage",
      value: function sendMessage() {}
    }, {
      key: "sendEmbed",
      value: function sendEmbed() {}
    }, {
      key: "sendFile",
      value: function sendFile() {}
    }, {
      key: "sendCode",
      value: function sendCode() {}
    }, {
      key: "createdTimestamp",
      get: function get() {
        return this.id / 4194304 + 14200704e5;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "presence",
      get: function get() {
        if (this.client.presences.has(this.id)) return this.client.presences.get(this.id);var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = this.client.guilds.values()[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var _t2 = _step17.value;
            if (_t2.presences.has(this.id)) return _t2.presences.get(this.id);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17.return) {
              _iterator17.return();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }

        return new r();
      }
    }, {
      key: "avatarURL",
      get: function get() {
        return this.avatar ? s.Endpoints.avatar(this.id, this.avatar) : null;
      }
    }, {
      key: "defaultAvatarURL",
      get: function get() {
        var t = Object.values(s.DefaultAvatars),
            e = this.discriminator % t.length;return s.Endpoints.assets(t[e] + ".png");
      }
    }, {
      key: "displayAvatarURL",
      get: function get() {
        return this.avatarURL || this.defaultAvatarURL;
      }
    }, {
      key: "note",
      get: function get() {
        return this.client.user.notes.get(this.id) || null;
      }
    }, {
      key: "dmChannel",
      get: function get() {
        var _this2 = this;

        return this.client.channels.filter(function (t) {
          return "dm" === t.type;
        }).find(function (t) {
          return t.recipient.id === _this2.id;
        });
      }
    }]);

    return o;
  }();

  i.applyToClass(o), t.exports = o;
}, function (t, e) {
  var n = function () {
    function n() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, n);

      this.status = t.status || "offline", this.game = t.game ? new i(t.game) : null;
    }

    _createClass(n, [{
      key: "update",
      value: function update(t) {
        this.status = t.status || this.status, this.game = t.game ? new i(t.game) : null;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return this === t || (t && this.status === t.status && this.game ? this.game.equals(t.game) : !t.game);
      }
    }]);

    return n;
  }();

  var i = function () {
    function i(t) {
      _classCallCheck(this, i);

      this.name = t.name, this.type = t.type, this.url = t.url || null;
    }

    _createClass(i, [{
      key: "equals",
      value: function equals(t) {
        return this === t || t && this.name === t.name && this.type === t.type && this.url === t.url;
      }
    }, {
      key: "streaming",
      get: function get() {
        return 1 === this.type;
      }
    }]);

    return i;
  }();

  e.Presence = n, e.Game = i;
}, function (t, e, n) {
  var i = n(0);
  var s = function () {
    function s(t, e) {
      _classCallCheck(this, s);

      Object.defineProperty(this, "client", { value: t.client }), this.guild = t, e && this.setup(e);
    }

    _createClass(s, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.name = t.name, this.color = t.color, this.hoist = t.hoist, this.position = t.position, this.permissions = t.permissions, this.managed = t.managed, this.mentionable = t.mentionable;
      }
    }, {
      key: "serialize",
      value: function serialize() {
        var t = {};for (var _e6 in i.PermissionFlags) {
          t[_e6] = this.hasPermission(_e6);
        }return t;
      }
    }, {
      key: "hasPermission",
      value: function hasPermission(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return t = this.client.resolver.resolvePermission(t), !e && (this.permissions & i.PermissionFlags.ADMINISTRATOR) > 0 || (this.permissions & t) > 0;
      }
    }, {
      key: "hasPermissions",
      value: function hasPermissions(t) {
        var _this3 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return t.every(function (t) {
          return _this3.hasPermission(t, e);
        });
      }
    }, {
      key: "comparePositionTo",
      value: function comparePositionTo(t) {
        return this.constructor.comparePositions(this, t);
      }
    }, {
      key: "edit",
      value: function edit(t) {
        return this.client.rest.methods.updateGuildRole(this, t);
      }
    }, {
      key: "setName",
      value: function setName(t) {
        return this.edit({ name: t });
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        return this.edit({ color: t });
      }
    }, {
      key: "setHoist",
      value: function setHoist(t) {
        return this.edit({ hoist: t });
      }
    }, {
      key: "setPosition",
      value: function setPosition(t) {
        var _this4 = this;

        return this.guild.setRolePosition(this, t).then(function () {
          return _this4;
        });
      }
    }, {
      key: "setPermissions",
      value: function setPermissions(t) {
        return this.edit({ permissions: t });
      }
    }, {
      key: "setMentionable",
      value: function setMentionable(t) {
        return this.edit({ mentionable: t });
      }
    }, {
      key: "delete",
      value: function _delete() {
        return this.client.rest.methods.deleteGuildRole(this);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t && this.id === t.id && this.name === t.name && this.color === t.color && this.hoist === t.hoist && this.position === t.position && this.permissions === t.permissions && this.managed === t.managed;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.id === this.guild.id ? "@everyone" : "<@&" + this.id + ">";
      }
    }, {
      key: "createdTimestamp",
      get: function get() {
        return this.id / 4194304 + 14200704e5;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "hexColor",
      get: function get() {
        var t = this.color.toString(16);for (; t.length < 6;) {
          t = "0" + t;
        }return "#" + t;
      }
    }, {
      key: "members",
      get: function get() {
        var _this5 = this;

        return this.guild.members.filter(function (t) {
          return t.roles.has(_this5.id);
        });
      }
    }, {
      key: "editable",
      get: function get() {
        if (this.managed) return !1;var t = this.guild.member(this.client.user);return !!t.hasPermission(i.PermissionFlags.MANAGE_ROLES_OR_PERMISSIONS) && t.highestRole.comparePositionTo(this) > 0;
      }
    }], [{
      key: "comparePositions",
      value: function comparePositions(t, e) {
        return t.position === e.position ? e.id - t.id : t.position - e.position;
      }
    }]);

    return s;
  }();

  t.exports = s;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      Object.defineProperty(this, "client", { value: t }), this.type = null, e && this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id;
      }
    }, {
      key: "delete",
      value: function _delete() {
        return this.client.rest.methods.deleteChannel(this);
      }
    }, {
      key: "createdTimestamp",
      get: function get() {
        return this.id / 4194304 + 14200704e5;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  var i = n(0),
      s = n(3);
  var r = function () {
    function r(t, e) {
      _classCallCheck(this, r);

      Object.defineProperty(this, "client", { value: t.client }), this.guild = t, this.setup(e);
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.name = t.name, this.requiresColons = t.require_colons, this.managed = t.managed, this._roles = t.roles;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.requiresColons ? "<:" + this.name + ":" + this.id + ">" : this.name;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t instanceof r ? t.id === this.id && t.name === this.name && t.managed === this.managed && t.requiresColons === this.requiresColons : t.id === this.id && t.name === this.name;
      }
    }, {
      key: "createdTimestamp",
      get: function get() {
        return this.id / 4194304 + 14200704e5;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "roles",
      get: function get() {
        var t = new s();var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = this._roles[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var _e7 = _step18.value;
            this.guild.roles.has(_e7) && t.set(_e7, this.guild.roles.get(_e7));
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18.return) {
              _iterator18.return();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }

        return t;
      }
    }, {
      key: "url",
      get: function get() {
        return i.Endpoints.emoji(this.id);
      }
    }, {
      key: "identifier",
      get: function get() {
        return this.id ? this.name + ":" + this.id : encodeURIComponent(this.name);
      }
    }]);

    return r;
  }();

  t.exports = r;
}, function (t, e, n) {
  var i = n(33),
      s = n(35),
      r = n(36),
      o = n(3),
      a = n(0),
      h = n(15),
      u = n(57);
  var c = function () {
    function c(t, e, n) {
      _classCallCheck(this, c);

      Object.defineProperty(this, "client", { value: n }), this.channel = t, e && this.setup(e);
    }

    _createClass(c, [{
      key: "setup",
      value: function setup(t) {
        var _this6 = this;

        this.id = t.id, this.type = a.MessageTypes[t.type], this.content = t.content, this.author = this.client.dataManager.newUser(t.author), this.member = this.guild ? this.guild.member(this.author) || null : null, this.pinned = t.pinned, this.tts = t.tts, this.nonce = t.nonce, this.system = 6 === t.type, this.embeds = t.embeds.map(function (t) {
          return new s(_this6, t);
        }), this.attachments = new o();var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = t.attachments[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var _e8 = _step19.value;
            this.attachments.set(_e8.id, new i(this, _e8));
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19.return) {
              _iterator19.return();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }

        this.createdTimestamp = new Date(t.timestamp).getTime(), this.editedTimestamp = t.edited_timestamp ? new Date(t.edited_timestamp).getTime() : null, this.mentions = { users: new o(), roles: new o(), channels: new o(), everyone: t.mention_everyone };var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = t.mentions[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var _n9 = _step20.value;
            var _t3 = this.client.users.get(_n9.id);_t3 ? this.mentions.users.set(_t3.id, _t3) : (_t3 = this.client.dataManager.newUser(_n9), this.mentions.users.set(_t3.id, _t3));
          }
        } catch (err) {
          _didIteratorError20 = true;
          _iteratorError20 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion20 && _iterator20.return) {
              _iterator20.return();
            }
          } finally {
            if (_didIteratorError20) {
              throw _iteratorError20;
            }
          }
        }

        if (t.mention_roles) {
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = t.mention_roles[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _n10 = _step21.value;
              var _t4 = this.channel.guild.roles.get(_n10);_t4 && this.mentions.roles.set(_t4.id, _t4);
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21.return) {
                _iterator21.return();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        }if (this.channel.guild) {
          var _e9 = t.content.match(/<#([0-9]{14,20})>/g) || [];var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = _e9[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _n11 = _step22.value;
              var _t5 = this.channel.guild.channels.get(_n11.match(/([0-9]{14,20})/g)[0]);_t5 && this.mentions.channels.set(_t5.id, _t5);
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }
        }if (this._edits = [], this.reactions = new o(), t.reactions && t.reactions.length > 0) {
          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = t.reactions[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var _h = _step23.value;
              var _t6 = _h.emoji.id ? _h.emoji.name + ":" + _h.emoji.id : _h.emoji.name;this.reactions.set(_t6, new r(this, _h.emoji, _h.count, _h.me));
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23.return) {
                _iterator23.return();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }
        }this.webhookID = t.webhook_id || null;
      }
    }, {
      key: "patch",
      value: function patch(t) {
        var _this7 = this;

        if (t.author && (this.author = this.client.users.get(t.author.id), this.guild && (this.member = this.guild.member(this.author))), t.content && (this.content = t.content), t.timestamp && (this.createdTimestamp = new Date(t.timestamp).getTime()), t.edited_timestamp && (this.editedTimestamp = t.edited_timestamp ? new Date(t.edited_timestamp).getTime() : null), "tts" in t && (this.tts = t.tts), "mention_everyone" in t && (this.mentions.everyone = t.mention_everyone), t.nonce && (this.nonce = t.nonce), t.embeds && (this.embeds = t.embeds.map(function (t) {
          return new s(_this7, t);
        })), t.type > -1 && (this.system = !1, 6 === t.type && (this.system = !0)), t.attachments) {
          this.attachments = new o();var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = t.attachments[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var _e10 = _step24.value;
              this.attachments.set(_e10.id, new i(this, _e10));
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24.return) {
                _iterator24.return();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }
        }if (t.mentions) {
          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = t.mentions[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _e11 = _step25.value;
              var _t7 = this.client.users.get(_e11.id);_t7 ? this.mentions.users.set(_t7.id, _t7) : (_t7 = this.client.dataManager.newUser(_e11), this.mentions.users.set(_t7.id, _t7));
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25.return) {
                _iterator25.return();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        }if (t.mention_roles) {
          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = t.mention_roles[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var _e12 = _step26.value;
              var _t8 = this.channel.guild.roles.get(_e12);_t8 && this.mentions.roles.set(_t8.id, _t8);
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26.return) {
                _iterator26.return();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }
        }if (t.id && (this.id = t.id), this.channel.guild && t.content) {
          var _e13 = t.content.match(/<#([0-9]{14,20})>/g) || [];var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = _e13[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _n12 = _step27.value;
              var _t9 = this.channel.guild.channels.get(_n12.match(/([0-9]{14,20})/g)[0]);_t9 && this.mentions.channels.set(_t9.id, _t9);
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27.return) {
                _iterator27.return();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }
        }if (t.reactions && (this.reactions = new o(), t.reactions.length > 0)) {
          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = t.reactions[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var _n13 = _step28.value;
              var _e14 = _n13.emoji.id ? _n13.emoji.name + ":" + _n13.emoji.id : _n13.emoji.name;this.reactions.set(_e14, new r(this, t.emoji, t.count, t.me));
            }
          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }
        }
      }
    }, {
      key: "isMentioned",
      value: function isMentioned(t) {
        return t = t && t.id ? t.id : t, this.mentions.users.has(t) || this.mentions.channels.has(t) || this.mentions.roles.has(t);
      }
    }, {
      key: "isMemberMentioned",
      value: function isMemberMentioned(t) {
        var _this8 = this;

        return !!this.mentions.everyone || !!this.mentions.users.has(t.id) || !!(t instanceof u.GuildMember && t.roles.some(function (t) {
          return _this8.mentions.roles.has(t.id);
        }));
      }
    }, {
      key: "edit",
      value: function edit(t, e) {
        return e || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e || (e = {}) : (e = t, t = ""), this.client.rest.methods.updateMessage(this, t, e);
      }
    }, {
      key: "editCode",
      value: function editCode(t, e) {
        return e = h(this.client.resolver.resolveString(e), !0), this.edit("```" + (t || "") + "\n" + e + "\n```");
      }
    }, {
      key: "pin",
      value: function pin() {
        return this.client.rest.methods.pinMessage(this);
      }
    }, {
      key: "unpin",
      value: function unpin() {
        return this.client.rest.methods.unpinMessage(this);
      }
    }, {
      key: "react",
      value: function react(t) {
        if (t = this.client.resolver.resolveEmojiIdentifier(t), !t) throw new TypeError("Emoji must be a string or Emoji/ReactionEmoji");return this.client.rest.methods.addMessageReaction(this, t);
      }
    }, {
      key: "clearReactions",
      value: function clearReactions() {
        return this.client.rest.methods.removeMessageReactions(this);
      }
    }, {
      key: "delete",
      value: function _delete() {
        var _this9 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return t <= 0 ? this.client.rest.methods.deleteMessage(this) : new Promise(function (e) {
          _this9.client.setTimeout(function () {
            e(_this9.delete());
          }, t);
        });
      }
    }, {
      key: "reply",
      value: function reply(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return t = "" + (this.guild || "group" === this.channel.type ? this.author + ", " : "") + t, this.channel.send(t, e);
      }
    }, {
      key: "fetchWebhook",
      value: function fetchWebhook() {
        return this.webhookID ? this.client.fetchWebhook(this.webhookID) : Promise.reject(new Error("The message was not sent by a webhook."));
      }
    }, {
      key: "equals",
      value: function equals(t, e) {
        if (!t) return !1;var n = !t.author && !t.attachments;if (n) return this.id === t.id && this.embeds.length === t.embeds.length;var i = this.id === t.id && this.author.id === t.author.id && this.content === t.content && this.tts === t.tts && this.nonce === t.nonce && this.embeds.length === t.embeds.length && this.attachments.length === t.attachments.length;return i && e && (i = this.mentions.everyone === t.mentions.everyone && this.createdTimestamp === new Date(e.timestamp).getTime() && this.editedTimestamp === new Date(e.edited_timestamp).getTime()), i;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.content;
      }
    }, {
      key: "_addReaction",
      value: function _addReaction(t, e) {
        var n = t.id ? t.name + ":" + t.id : t.name;var i = void 0;return this.reactions.has(n) ? (i = this.reactions.get(n), i.me || (i.me = e.id === this.client.user.id)) : (i = new r(this, t, 0, e.id === this.client.user.id), this.reactions.set(n, i)), i.users.has(e.id) ? null : (i.users.set(e.id, e), i.count++, i);
      }
    }, {
      key: "_removeReaction",
      value: function _removeReaction(t, e) {
        var n = t.id || t;if (this.reactions.has(n)) {
          var _t10 = this.reactions.get(n);if (_t10.users.has(e.id)) return _t10.users.delete(e.id), _t10.count--, e.id === this.client.user.id && (_t10.me = !1), _t10;
        }return null;
      }
    }, {
      key: "_clearReactions",
      value: function _clearReactions() {
        this.reactions.clear();
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "editedAt",
      get: function get() {
        return this.editedTimestamp ? new Date(this.editedTimestamp) : null;
      }
    }, {
      key: "guild",
      get: function get() {
        return this.channel.guild || null;
      }
    }, {
      key: "cleanContent",
      get: function get() {
        var _this10 = this;

        return this.content.replace(/@(everyone|here)/g, "@​$1").replace(/<@!?[0-9]+>/g, function (t) {
          var e = t.replace(/<|!|>|@/g, "");if ("dm" === _this10.channel.type || "group" === _this10.channel.type) return _this10.client.users.has(e) ? "@" + _this10.client.users.get(e).username : t;var n = _this10.channel.guild.members.get(e);if (n) return n.nickname ? "@" + n.nickname : "@" + n.user.username;{
            var _n14 = _this10.client.users.get(e);return _n14 ? "@" + _n14.username : t;
          }
        }).replace(/<#[0-9]+>/g, function (t) {
          var e = _this10.client.channels.get(t.replace(/<|#|>/g, ""));return e ? "#" + e.name : t;
        }).replace(/<@&[0-9]+>/g, function (t) {
          if ("dm" === _this10.channel.type || "group" === _this10.channel.type) return t;var e = _this10.guild.roles.get(t.replace(/<|@|>|&/g, ""));return e ? "@" + e.name : t;
        });
      }
    }, {
      key: "edits",
      get: function get() {
        var t = this._edits.slice();return t.unshift(this), t;
      }
    }, {
      key: "editable",
      get: function get() {
        return this.author.id === this.client.user.id;
      }
    }, {
      key: "deletable",
      get: function get() {
        return this.author.id === this.client.user.id || this.guild && this.channel.permissionsFor(this.client.user).hasPermission(a.PermissionFlags.MANAGE_MESSAGES);
      }
    }, {
      key: "pinnable",
      get: function get() {
        return !this.guild || this.channel.permissionsFor(this.client.user).hasPermission(a.PermissionFlags.MANAGE_MESSAGES);
      }
    }]);

    return c;
  }();

  t.exports = c;
}, function (t, e, n) {
  var i = n(23),
      s = n(11),
      r = n(34),
      o = n(3);
  var a = function () {
    function a() {
      _classCallCheck(this, a);

      this.messages = new o(), this.lastMessageID = null;
    }

    _createClass(a, [{
      key: "send",
      value: function send(t, e) {
        var _this11 = this;

        return e || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || t instanceof Array ? e || (e = {}) : (e = t, t = ""), e.file ? ("string" == typeof e.file && (e.file = { attachment: e.file }), e.file.name || ("string" == typeof e.file.attachment ? e.file.name = i.basename(e.file.attachment) : e.file.attachment && e.file.attachment.path ? e.file.name = i.basename(e.file.attachment.path) : e.file.name = "file.jpg"), this.client.resolver.resolveBuffer(e.file.attachment).then(function (n) {
          return _this11.client.rest.methods.sendMessage(_this11, t, e, { file: n, name: e.file.name });
        })) : this.client.rest.methods.sendMessage(this, t, e);
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(t, e) {
        return this.send(t, e);
      }
    }, {
      key: "sendEmbed",
      value: function sendEmbed(t, e, n) {
        return n || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) ? n || (n = {}) : (n = e, e = ""), this.send(e, Object.assign(n, { embed: t }));
      }
    }, {
      key: "sendFile",
      value: function sendFile(t, e, n) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return this.send(n, Object.assign(i, { file: { attachment: t, name: e } }));
      }
    }, {
      key: "sendCode",
      value: function sendCode(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.send(e, Object.assign(n, { code: t }));
      }
    }, {
      key: "fetchMessage",
      value: function fetchMessage(t) {
        var _this12 = this;

        return this.client.rest.methods.getChannelMessage(this, t).then(function (t) {
          var e = t instanceof s ? t : new s(_this12, t, _this12.client);return _this12._cacheMessage(e), e;
        });
      }
    }, {
      key: "fetchMessages",
      value: function fetchMessages() {
        var _this13 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.client.rest.methods.getChannelMessages(this, t).then(function (t) {
          var e = new o();var _iteratorNormalCompletion29 = true;
          var _didIteratorError29 = false;
          var _iteratorError29 = undefined;

          try {
            for (var _iterator29 = t[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
              var _n15 = _step29.value;
              var _t11 = new s(_this13, _n15, _this13.client);e.set(_n15.id, _t11), _this13._cacheMessage(_t11);
            }
          } catch (err) {
            _didIteratorError29 = true;
            _iteratorError29 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion29 && _iterator29.return) {
                _iterator29.return();
              }
            } finally {
              if (_didIteratorError29) {
                throw _iteratorError29;
              }
            }
          }

          return e;
        });
      }
    }, {
      key: "fetchPinnedMessages",
      value: function fetchPinnedMessages() {
        var _this14 = this;

        return this.client.rest.methods.getChannelPinnedMessages(this).then(function (t) {
          var e = new o();var _iteratorNormalCompletion30 = true;
          var _didIteratorError30 = false;
          var _iteratorError30 = undefined;

          try {
            for (var _iterator30 = t[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
              var _n16 = _step30.value;
              var _t12 = new s(_this14, _n16, _this14.client);e.set(_n16.id, _t12), _this14._cacheMessage(_t12);
            }
          } catch (err) {
            _didIteratorError30 = true;
            _iteratorError30 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion30 && _iterator30.return) {
                _iterator30.return();
              }
            } finally {
              if (_didIteratorError30) {
                throw _iteratorError30;
              }
            }
          }

          return e;
        });
      }
    }, {
      key: "startTyping",
      value: function startTyping(t) {
        var _this15 = this;

        if ("undefined" != typeof t && t < 1) throw new RangeError("Count must be at least 1.");if (this.client.user._typing.has(this.id)) {
          var _e15 = this.client.user._typing.get(this.id);_e15.count = t || _e15.count + 1;
        } else this.client.user._typing.set(this.id, { count: t || 1, interval: this.client.setInterval(function () {
            _this15.client.rest.methods.sendTyping(_this15.id);
          }, 4e3) }), this.client.rest.methods.sendTyping(this.id);
      }
    }, {
      key: "stopTyping",
      value: function stopTyping() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (this.client.user._typing.has(this.id)) {
          var _e16 = this.client.user._typing.get(this.id);_e16.count--, (_e16.count <= 0 || t) && (this.client.clearInterval(_e16.interval), this.client.user._typing.delete(this.id));
        }
      }
    }, {
      key: "createCollector",
      value: function createCollector(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new r(this, t, e);
      }
    }, {
      key: "awaitMessages",
      value: function awaitMessages(t) {
        var _this16 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new Promise(function (n, i) {
          var s = _this16.createCollector(t, e);s.on("end", function (t, s) {
            e.errors && e.errors.includes(s) ? i(t) : n(t);
          });
        });
      }
    }, {
      key: "bulkDelete",
      value: function bulkDelete(t) {
        var _this17 = this;

        if (!isNaN(t)) return this.fetchMessages({ limit: t }).then(function (t) {
          return _this17.bulkDelete(t);
        });if (t instanceof Array || t instanceof o) {
          var _e17 = t instanceof o ? t.keyArray() : t.map(function (t) {
            return t.id;
          });return this.client.rest.methods.bulkDeleteMessages(this, _e17);
        }throw new TypeError("The messages must be an Array, Collection, or number.");
      }
    }, {
      key: "_cacheMessage",
      value: function _cacheMessage(t) {
        var e = this.client.options.messageCacheMaxSize;return 0 === e ? null : (this.messages.size >= e && e > 0 && this.messages.delete(this.messages.firstKey()), this.messages.set(t.id, t), t);
      }
    }, {
      key: "typing",
      get: function get() {
        return this.client.user._typing.has(this.id);
      }
    }, {
      key: "typingCount",
      get: function get() {
        return this.client.user._typing.has(this.id) ? this.client.user._typing.get(this.id).count : 0;
      }
    }]);

    return a;
  }();

  e.applyToClass = function (t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var n = ["send", "sendMessage", "sendEmbed", "sendFile", "sendCode"];e && n.push("_cacheMessage", "fetchMessages", "fetchMessage", "bulkDelete", "startTyping", "stopTyping", "typing", "typingCount", "fetchPinnedMessages", "createCollector", "awaitMessages");var _iteratorNormalCompletion31 = true;
    var _didIteratorError31 = false;
    var _iteratorError31 = undefined;

    try {
      for (var _iterator31 = n[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
        var i = _step31.value;
        Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(a.prototype, i));
      }
    } catch (err) {
      _didIteratorError31 = true;
      _iteratorError31 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion31 && _iterator31.return) {
          _iterator31.return();
        }
      } finally {
        if (_didIteratorError31) {
          throw _iteratorError31;
        }
      }
    }
  };
}, function (t, e, n) {
  var i = n(9),
      s = n(8),
      r = n(40),
      o = n(16),
      a = n(0),
      h = n(3);
  var u = function (_i4) {
    _inherits(u, _i4);

    function u(t, e) {
      var _this18;

      _classCallCheck(this, u);

      (_this18 = _possibleConstructorReturn(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, t.client, e)), _this18), _this18.guild = t;return _this18;
    }

    _createClass(u, [{
      key: "setup",
      value: function setup(t) {
        if (_get(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "setup", this).call(this, t), this.name = t.name, this.position = t.position, this.permissionOverwrites = new h(), t.permission_overwrites) {
          var _iteratorNormalCompletion32 = true;
          var _didIteratorError32 = false;
          var _iteratorError32 = undefined;

          try {
            for (var _iterator32 = t.permission_overwrites[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
              var _e18 = _step32.value;
              this.permissionOverwrites.set(_e18.id, new r(this, _e18));
            }
          } catch (err) {
            _didIteratorError32 = true;
            _iteratorError32 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion32 && _iterator32.return) {
                _iterator32.return();
              }
            } finally {
              if (_didIteratorError32) {
                throw _iteratorError32;
              }
            }
          }
        }
      }
    }, {
      key: "permissionsFor",
      value: function permissionsFor(t) {
        if (t = this.client.resolver.resolveGuildMember(this.guild, t), !t) return null;if (t.id === this.guild.ownerID) return new o(t, a.ALL_PERMISSIONS);var e = 0;var n = t.roles;var _iteratorNormalCompletion33 = true;
        var _didIteratorError33 = false;
        var _iteratorError33 = undefined;

        try {
          for (var _iterator33 = n.values()[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
            var _i5 = _step33.value;
            e |= _i5.permissions;
          }
        } catch (err) {
          _didIteratorError33 = true;
          _iteratorError33 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion33 && _iterator33.return) {
              _iterator33.return();
            }
          } finally {
            if (_didIteratorError33) {
              throw _iteratorError33;
            }
          }
        }

        var s = this.overwritesFor(t, !0, n);var _iteratorNormalCompletion34 = true;
        var _didIteratorError34 = false;
        var _iteratorError34 = undefined;

        try {
          for (var _iterator34 = s.role.concat(s.member)[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
            var _r = _step34.value;
            e &= ~_r.deny, e |= _r.allow;
          }
        } catch (err) {
          _didIteratorError34 = true;
          _iteratorError34 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion34 && _iterator34.return) {
              _iterator34.return();
            }
          } finally {
            if (_didIteratorError34) {
              throw _iteratorError34;
            }
          }
        }

        var h = Boolean(e & a.PermissionFlags.ADMINISTRATOR);return h && (e = a.ALL_PERMISSIONS), new o(t, e);
      }
    }, {
      key: "overwritesFor",
      value: function overwritesFor(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (e || (t = this.client.resolver.resolveGuildMember(this.guild, t)), !t) return [];n = n || t.roles;var i = [],
            s = [];var _iteratorNormalCompletion35 = true;
        var _didIteratorError35 = false;
        var _iteratorError35 = undefined;

        try {
          for (var _iterator35 = this.permissionOverwrites.values()[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
            var _r2 = _step35.value;
            _r2.id === t.id ? s.push(_r2) : n.has(_r2.id) && i.push(_r2);
          }
        } catch (err) {
          _didIteratorError35 = true;
          _iteratorError35 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion35 && _iterator35.return) {
              _iterator35.return();
            }
          } finally {
            if (_didIteratorError35) {
              throw _iteratorError35;
            }
          }
        }

        return { role: i, member: s };
      }
    }, {
      key: "overwritePermissions",
      value: function overwritePermissions(t, e) {
        var n = { allow: 0, deny: 0 };if (t instanceof s) n.type = "role";else if (this.guild.roles.has(t)) t = this.guild.roles.get(t), n.type = "role";else if (t = this.client.resolver.resolveUser(t), n.type = "member", !t) return Promise.reject(new TypeError("Supplied parameter was neither a User nor a Role."));n.id = t.id;var i = this.permissionOverwrites.get(t.id);i && (n.allow = i.allow, n.deny = i.deny);for (var _r3 in e) {
          e[_r3] === !0 ? (n.allow |= a.PermissionFlags[_r3] || 0, n.deny &= ~(a.PermissionFlags[_r3] || 0)) : e[_r3] === !1 ? (n.allow &= ~(a.PermissionFlags[_r3] || 0), n.deny |= a.PermissionFlags[_r3] || 0) : null === e[_r3] && (n.allow &= ~(a.PermissionFlags[_r3] || 0), n.deny &= ~(a.PermissionFlags[_r3] || 0));
        }return this.client.rest.methods.setChannelOverwrite(this, n);
      }
    }, {
      key: "edit",
      value: function edit(t) {
        return this.client.rest.methods.updateChannel(this, t);
      }
    }, {
      key: "setName",
      value: function setName(t) {
        return this.edit({ name: t });
      }
    }, {
      key: "setPosition",
      value: function setPosition(t) {
        return this.client.rest.methods.updateChannel(this, { position: t });
      }
    }, {
      key: "setTopic",
      value: function setTopic(t) {
        return this.client.rest.methods.updateChannel(this, { topic: t });
      }
    }, {
      key: "createInvite",
      value: function createInvite() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.client.rest.methods.createChannelInvite(this, t);
      }
    }, {
      key: "clone",
      value: function clone() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return this.guild.createChannel(t, this.type, e ? this.permissionOverwrites : []);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = t && this.id === t.id && this.type === t.type && this.topic === t.topic && this.position === t.position && this.name === t.name;return e && (e = this.permissionOverwrites && t.permissionOverwrites ? this.permissionOverwrites.equals(t.permissionOverwrites) : !this.permissionOverwrites && !t.permissionOverwrites), e;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "<#" + this.id + ">";
      }
    }]);

    return u;
  }(i);

  t.exports = u;
}, function (t, e, n) {
  var i = n(12),
      s = n(8),
      r = n(16),
      o = n(0),
      a = n(3),
      h = n(7).Presence;
  var u = function () {
    function u(t, e) {
      _classCallCheck(this, u);

      Object.defineProperty(this, "client", { value: t.client }), this.guild = t, this.user = {}, this._roles = [], e && this.setup(e), this.lastMessageID = null;
    }

    _createClass(u, [{
      key: "setup",
      value: function setup(t) {
        this.serverDeaf = t.deaf, this.serverMute = t.mute, this.selfMute = t.self_mute, this.selfDeaf = t.self_deaf, this.voiceSessionID = t.session_id, this.voiceChannelID = t.channel_id, this.speaking = !1, this.nickname = t.nick || null, this.joinedTimestamp = new Date(t.joined_at).getTime(), this.user = t.user, this._roles = t.roles;
      }
    }, {
      key: "permissionsIn",
      value: function permissionsIn(t) {
        if (t = this.client.resolver.resolveChannel(t), !t || !t.guild) throw new Error("Could not resolve channel to a guild channel.");return t.permissionsFor(this);
      }
    }, {
      key: "hasPermission",
      value: function hasPermission(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return !e && this.user.id === this.guild.ownerID || this.roles.some(function (n) {
          return n.hasPermission(t, e);
        });
      }
    }, {
      key: "hasPermissions",
      value: function hasPermissions(t) {
        var _this19 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return !e && this.user.id === this.guild.ownerID || t.every(function (t) {
          return _this19.hasPermission(t, e);
        });
      }
    }, {
      key: "missingPermissions",
      value: function missingPermissions(t) {
        var _this20 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return t.filter(function (t) {
          return !_this20.hasPermission(t, e);
        });
      }
    }, {
      key: "edit",
      value: function edit(t) {
        return this.client.rest.methods.updateGuildMember(this, t);
      }
    }, {
      key: "setMute",
      value: function setMute(t) {
        return this.edit({ mute: t });
      }
    }, {
      key: "setDeaf",
      value: function setDeaf(t) {
        return this.edit({ deaf: t });
      }
    }, {
      key: "setVoiceChannel",
      value: function setVoiceChannel(t) {
        return this.edit({ channel: t });
      }
    }, {
      key: "setRoles",
      value: function setRoles(t) {
        return this.edit({ roles: t });
      }
    }, {
      key: "addRole",
      value: function addRole(t) {
        return t instanceof s || (t = this.guild.roles.get(t)), this.client.rest.methods.addMemberRole(this, t);
      }
    }, {
      key: "addRoles",
      value: function addRoles(t) {
        var e = void 0;if (t instanceof a) {
          e = this._roles.slice();var _iteratorNormalCompletion36 = true;
          var _didIteratorError36 = false;
          var _iteratorError36 = undefined;

          try {
            for (var _iterator36 = t.values()[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
              var _n17 = _step36.value;
              e.push(_n17.id);
            }
          } catch (err) {
            _didIteratorError36 = true;
            _iteratorError36 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion36 && _iterator36.return) {
                _iterator36.return();
              }
            } finally {
              if (_didIteratorError36) {
                throw _iteratorError36;
              }
            }
          }
        } else e = this._roles.concat(t);return this.edit({ roles: e });
      }
    }, {
      key: "removeRole",
      value: function removeRole(t) {
        return t instanceof s || (t = this.guild.roles.get(t)), this.client.rest.methods.removeMemberRole(this, t);
      }
    }, {
      key: "removeRoles",
      value: function removeRoles(t) {
        var e = this._roles.slice();if (t instanceof a) {
          var _iteratorNormalCompletion37 = true;
          var _didIteratorError37 = false;
          var _iteratorError37 = undefined;

          try {
            for (var _iterator37 = t.values()[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
              var _n18 = _step37.value;
              var _t13 = e.indexOf(_n18.id);_t13 >= 0 && e.splice(_t13, 1);
            }
          } catch (err) {
            _didIteratorError37 = true;
            _iteratorError37 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion37 && _iterator37.return) {
                _iterator37.return();
              }
            } finally {
              if (_didIteratorError37) {
                throw _iteratorError37;
              }
            }
          }
        } else {
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = t[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var _n19 = _step38.value;
              var _t14 = e.indexOf(_n19 instanceof s ? _n19.id : _n19);_t14 >= 0 && e.splice(_t14, 1);
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38.return) {
                _iterator38.return();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }
        }return this.edit({ roles: e });
      }
    }, {
      key: "setNickname",
      value: function setNickname(t) {
        return this.edit({ nick: t });
      }
    }, {
      key: "deleteDM",
      value: function deleteDM() {
        return this.client.rest.methods.deleteChannel(this);
      }
    }, {
      key: "kick",
      value: function kick() {
        return this.client.rest.methods.kickGuildMember(this.guild, this);
      }
    }, {
      key: "ban",
      value: function ban() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return this.client.rest.methods.banGuildMember(this.guild, this, t);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "<@" + (this.nickname ? "!" : "") + this.user.id + ">";
      }
    }, {
      key: "send",
      value: function send() {}
    }, {
      key: "sendMessage",
      value: function sendMessage() {}
    }, {
      key: "sendEmbed",
      value: function sendEmbed() {}
    }, {
      key: "sendFile",
      value: function sendFile() {}
    }, {
      key: "sendCode",
      value: function sendCode() {}
    }, {
      key: "joinedAt",
      get: function get() {
        return new Date(this.joinedTimestamp);
      }
    }, {
      key: "presence",
      get: function get() {
        return this.frozenPresence || this.guild.presences.get(this.id) || new h();
      }
    }, {
      key: "roles",
      get: function get() {
        var t = new a(),
            e = this.guild.roles.get(this.guild.id);e && t.set(e.id, e);var _iteratorNormalCompletion39 = true;
        var _didIteratorError39 = false;
        var _iteratorError39 = undefined;

        try {
          for (var _iterator39 = this._roles[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
            var _n20 = _step39.value;
            var _e19 = this.guild.roles.get(_n20);_e19 && t.set(_e19.id, _e19);
          }
        } catch (err) {
          _didIteratorError39 = true;
          _iteratorError39 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion39 && _iterator39.return) {
              _iterator39.return();
            }
          } finally {
            if (_didIteratorError39) {
              throw _iteratorError39;
            }
          }
        }

        return t;
      }
    }, {
      key: "highestRole",
      get: function get() {
        return this.roles.reduce(function (t, e) {
          return !t || e.comparePositionTo(t) > 0 ? e : t;
        });
      }
    }, {
      key: "mute",
      get: function get() {
        return this.selfMute || this.serverMute;
      }
    }, {
      key: "deaf",
      get: function get() {
        return this.selfDeaf || this.serverDeaf;
      }
    }, {
      key: "voiceChannel",
      get: function get() {
        return this.guild.channels.get(this.voiceChannelID);
      }
    }, {
      key: "id",
      get: function get() {
        return this.user.id;
      }
    }, {
      key: "displayName",
      get: function get() {
        return this.nickname || this.user.username;
      }
    }, {
      key: "permissions",
      get: function get() {
        if (this.user.id === this.guild.ownerID) return new r(this, o.ALL_PERMISSIONS);var t = 0;var e = this.roles;var _iteratorNormalCompletion40 = true;
        var _didIteratorError40 = false;
        var _iteratorError40 = undefined;

        try {
          for (var _iterator40 = e.values()[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
            var _n21 = _step40.value;
            t |= _n21.permissions;
          }
        } catch (err) {
          _didIteratorError40 = true;
          _iteratorError40 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion40 && _iterator40.return) {
              _iterator40.return();
            }
          } finally {
            if (_didIteratorError40) {
              throw _iteratorError40;
            }
          }
        }

        var i = Boolean(t & o.PermissionFlags.ADMINISTRATOR);return i && (t = o.ALL_PERMISSIONS), new r(this, t);
      }
    }, {
      key: "kickable",
      get: function get() {
        if (this.user.id === this.guild.ownerID) return !1;if (this.user.id === this.client.user.id) return !1;var t = this.guild.member(this.client.user);return !!t.hasPermission(o.PermissionFlags.KICK_MEMBERS) && t.highestRole.comparePositionTo(this.highestRole) > 0;
      }
    }, {
      key: "bannable",
      get: function get() {
        if (this.user.id === this.guild.ownerID) return !1;if (this.user.id === this.client.user.id) return !1;var t = this.guild.member(this.client.user);return !!t.hasPermission(o.PermissionFlags.BAN_MEMBERS) && t.highestRole.comparePositionTo(this.highestRole) > 0;
      }
    }]);

    return u;
  }();

  i.applyToClass(u), t.exports = u;
}, function (t, e) {
  t.exports = function (t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return e ? t.replace(/```/g, "`​``") : n ? t.replace(/\\(`|\\)/g, "$1").replace(/(`|\\)/g, "\\$1") : t.replace(/\\(\*|_|`|~|\\)/g, "$1").replace(/(\*|_|`|~|\\)/g, "\\$1");
  };
}, function (t, e, n) {
  var i = n(0);
  var s = function () {
    function s(t, e) {
      _classCallCheck(this, s);

      this.member = t, this.raw = e;
    }

    _createClass(s, [{
      key: "serialize",
      value: function serialize() {
        var t = {};for (var _e20 in i.PermissionFlags) {
          t[_e20] = this.hasPermission(_e20);
        }return t;
      }
    }, {
      key: "hasPermission",
      value: function hasPermission(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return t = this.member.client.resolver.resolvePermission(t), !e && (this.raw & i.PermissionFlags.ADMINISTRATOR) > 0 || (this.raw & t) > 0;
      }
    }, {
      key: "hasPermissions",
      value: function hasPermissions(t) {
        var _this21 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return t.every(function (t) {
          return _this21.hasPermission(t, e);
        });
      }
    }, {
      key: "missingPermissions",
      value: function missingPermissions(t) {
        var _this22 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return t.filter(function (t) {
          return !_this22.hasPermission(t, e);
        });
      }
    }]);

    return s;
  }();

  t.exports = s;
}, function (t, e, n) {
  var i = n(6),
      s = n(8),
      r = n(10),
      o = n(7).Presence,
      a = n(14),
      h = n(0),
      u = n(3),
      c = n(4),
      l = n(153);
  var d = function () {
    function d(t, e) {
      _classCallCheck(this, d);

      Object.defineProperty(this, "client", { value: t }), this.members = new u(), this.channels = new u(), this.roles = new u(), this.presences = new u(), e && (e.unavailable ? (this.available = !1, this.id = e.id) : (this.available = !0, this.setup(e)));
    }

    _createClass(d, [{
      key: "setup",
      value: function setup(t) {
        this.name = t.name, this.icon = t.icon, this.splash = t.splash, this.region = t.region, this.memberCount = t.member_count || this.memberCount, this.large = t.large || this.large, this.features = t.features, this.applicationID = t.application_id, this.emojis = new u();var _iteratorNormalCompletion41 = true;
        var _didIteratorError41 = false;
        var _iteratorError41 = undefined;

        try {
          for (var _iterator41 = t.emojis[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
            var _e21 = _step41.value;
            this.emojis.set(_e21.id, new r(this, _e21));
          }
        } catch (err) {
          _didIteratorError41 = true;
          _iteratorError41 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion41 && _iterator41.return) {
              _iterator41.return();
            }
          } finally {
            if (_didIteratorError41) {
              throw _iteratorError41;
            }
          }
        }

        if (this.afkTimeout = t.afk_timeout, this.afkChannelID = t.afk_channel_id, this.embedEnabled = t.embed_enabled, this.verificationLevel = t.verification_level, this.joinedTimestamp = t.joined_at ? new Date(t.joined_at).getTime() : this.joinedTimestamp, this.id = t.id, this.available = !t.unavailable, this.features = t.features || this.features || [], t.members) {
          this.members.clear();var _iteratorNormalCompletion42 = true;
          var _didIteratorError42 = false;
          var _iteratorError42 = undefined;

          try {
            for (var _iterator42 = t.members[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
              var _e22 = _step42.value;
              this._addMember(_e22, !1);
            }
          } catch (err) {
            _didIteratorError42 = true;
            _iteratorError42 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion42 && _iterator42.return) {
                _iterator42.return();
              }
            } finally {
              if (_didIteratorError42) {
                throw _iteratorError42;
              }
            }
          }
        }if (t.owner_id && (this.ownerID = t.owner_id), t.channels) {
          this.channels.clear();var _iteratorNormalCompletion43 = true;
          var _didIteratorError43 = false;
          var _iteratorError43 = undefined;

          try {
            for (var _iterator43 = t.channels[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
              var _e23 = _step43.value;
              this.client.dataManager.newChannel(_e23, this);
            }
          } catch (err) {
            _didIteratorError43 = true;
            _iteratorError43 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion43 && _iterator43.return) {
                _iterator43.return();
              }
            } finally {
              if (_didIteratorError43) {
                throw _iteratorError43;
              }
            }
          }
        }if (t.roles) {
          this.roles.clear();var _iteratorNormalCompletion44 = true;
          var _didIteratorError44 = false;
          var _iteratorError44 = undefined;

          try {
            for (var _iterator44 = t.roles[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
              var _e24 = _step44.value;
              var _t15 = new s(this, _e24);this.roles.set(_t15.id, _t15);
            }
          } catch (err) {
            _didIteratorError44 = true;
            _iteratorError44 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion44 && _iterator44.return) {
                _iterator44.return();
              }
            } finally {
              if (_didIteratorError44) {
                throw _iteratorError44;
              }
            }
          }
        }if (t.presences) {
          var _iteratorNormalCompletion45 = true;
          var _didIteratorError45 = false;
          var _iteratorError45 = undefined;

          try {
            for (var _iterator45 = t.presences[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
              var _n22 = _step45.value;
              this._setPresence(_n22.user.id, _n22);
            }
          } catch (err) {
            _didIteratorError45 = true;
            _iteratorError45 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion45 && _iterator45.return) {
                _iterator45.return();
              }
            } finally {
              if (_didIteratorError45) {
                throw _iteratorError45;
              }
            }
          }
        }if (this._rawVoiceStates = new u(), t.voice_states) {
          var _iteratorNormalCompletion46 = true;
          var _didIteratorError46 = false;
          var _iteratorError46 = undefined;

          try {
            for (var _iterator46 = t.voice_states[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
              var _i6 = _step46.value;
              this._rawVoiceStates.set(_i6.user_id, _i6);var _t16 = this.members.get(_i6.user_id);_t16 && (_t16.serverMute = _i6.mute, _t16.serverDeaf = _i6.deaf, _t16.selfMute = _i6.self_mute, _t16.selfDeaf = _i6.self_deaf, _t16.voiceSessionID = _i6.session_id, _t16.voiceChannelID = _i6.channel_id, this.channels.get(_i6.channel_id).members.set(_t16.user.id, _t16));
            }
          } catch (err) {
            _didIteratorError46 = true;
            _iteratorError46 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion46 && _iterator46.return) {
                _iterator46.return();
              }
            } finally {
              if (_didIteratorError46) {
                throw _iteratorError46;
              }
            }
          }
        }
      }
    }, {
      key: "member",
      value: function member(t) {
        return this.client.resolver.resolveGuildMember(this, t);
      }
    }, {
      key: "fetchBans",
      value: function fetchBans() {
        return this.client.rest.methods.getGuildBans(this);
      }
    }, {
      key: "fetchInvites",
      value: function fetchInvites() {
        return this.client.rest.methods.getGuildInvites(this);
      }
    }, {
      key: "fetchWebhooks",
      value: function fetchWebhooks() {
        return this.client.rest.methods.getGuildWebhooks(this);
      }
    }, {
      key: "fetchMember",
      value: function fetchMember(t) {
        return this._fetchWaiter ? Promise.reject(new Error("Already fetching guild members.")) : (t = this.client.resolver.resolveUser(t), t ? this.members.has(t.id) ? Promise.resolve(this.members.get(t.id)) : this.client.rest.methods.getGuildMember(this, t) : Promise.reject(new Error("User is not cached. Use Client.fetchUser first.")));
      }
    }, {
      key: "fetchMembers",
      value: function fetchMembers() {
        var _this23 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return new Promise(function (e, n) {
          if (_this23._fetchWaiter) throw new Error("Already fetching guild members in ${this.id}.");return _this23.memberCount === _this23.members.size ? void e(_this23) : (_this23._fetchWaiter = e, _this23.client.ws.send({ op: h.OPCodes.REQUEST_GUILD_MEMBERS, d: { guild_id: _this23.id, query: t, limit: 0 } }), _this23._checkChunks(), void _this23.client.setTimeout(function () {
            return n(new Error("Members didn't arrive in time."));
          }, 12e4));
        });
      }
    }, {
      key: "edit",
      value: function edit(t) {
        return this.client.rest.methods.updateGuild(this, t);
      }
    }, {
      key: "setName",
      value: function setName(t) {
        return this.edit({ name: t });
      }
    }, {
      key: "setRegion",
      value: function setRegion(t) {
        return this.edit({ region: t });
      }
    }, {
      key: "setVerificationLevel",
      value: function setVerificationLevel(t) {
        return this.edit({ verificationLevel: t });
      }
    }, {
      key: "setAFKChannel",
      value: function setAFKChannel(t) {
        return this.edit({ afkChannel: t });
      }
    }, {
      key: "setAFKTimeout",
      value: function setAFKTimeout(t) {
        return this.edit({ afkTimeout: t });
      }
    }, {
      key: "setIcon",
      value: function setIcon(t) {
        return this.edit({ icon: t });
      }
    }, {
      key: "setOwner",
      value: function setOwner(t) {
        return this.edit({ owner: t });
      }
    }, {
      key: "setSplash",
      value: function setSplash(t) {
        return this.edit({ splash: t });
      }
    }, {
      key: "ban",
      value: function ban(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.client.rest.methods.banGuildMember(this, t, e);
      }
    }, {
      key: "unban",
      value: function unban(t) {
        return this.client.rest.methods.unbanGuildMember(this, t);
      }
    }, {
      key: "pruneMembers",
      value: function pruneMembers(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if ("number" != typeof t) throw new TypeError("Days must be a number.");return this.client.rest.methods.pruneGuildMembers(this, t, e);
      }
    }, {
      key: "sync",
      value: function sync() {
        this.client.user.bot || this.client.syncGuilds([this]);
      }
    }, {
      key: "createChannel",
      value: function createChannel(t, e, n) {
        return this.client.rest.methods.createChannel(this, t, e, n);
      }
    }, {
      key: "createRole",
      value: function createRole(t) {
        var e = this.client.rest.methods.createGuildRole(this);return t ? e.then(function (e) {
          return e.edit(t);
        }) : e;
      }
    }, {
      key: "createEmoji",
      value: function createEmoji(t, e) {
        var _this24 = this;

        return new Promise(function (n) {
          t.startsWith("data:") ? n(_this24.client.rest.methods.createEmoji(_this24, t, e)) : _this24.client.resolver.resolveBuffer(t).then(function (t) {
            return n(_this24.client.rest.methods.createEmoji(_this24, t, e));
          });
        });
      }
    }, {
      key: "deleteEmoji",
      value: function deleteEmoji(t) {
        return t instanceof r || (t = this.emojis.get(t)), this.client.rest.methods.deleteEmoji(t);
      }
    }, {
      key: "leave",
      value: function leave() {
        return this.client.rest.methods.leaveGuild(this);
      }
    }, {
      key: "delete",
      value: function _delete() {
        return this.client.rest.methods.deleteGuild(this);
      }
    }, {
      key: "setRolePosition",
      value: function setRolePosition(t, e) {
        if ("string" == typeof t && (t = this.roles.get(t), !t)) return Promise.reject(new Error("Supplied role is not a role or string."));if (e = Number(e), isNaN(e)) return Promise.reject(new Error("Supplied position is not a number."));var n = Math.min(t.position, e),
            i = Math.max(t.position, e),
            s = this.roles.filter(function (t) {
          return t.position >= n && t.position <= i;
        });e = e > t.position ? s.first().position : s.last().position;var r = [];var _iteratorNormalCompletion47 = true;
        var _didIteratorError47 = false;
        var _iteratorError47 = undefined;

        try {
          for (var _iterator47 = s.values()[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
            var _o = _step47.value;
            r.push({ id: _o.id, position: _o.id === t.id ? e : _o.position + (e < t.position ? 1 : -1) });
          }
        } catch (err) {
          _didIteratorError47 = true;
          _iteratorError47 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion47 && _iterator47.return) {
              _iterator47.return();
            }
          } finally {
            if (_didIteratorError47) {
              throw _iteratorError47;
            }
          }
        }

        return this.client.rest.methods.setRolePositions(this.id, r);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = t && this.id === t.id && this.available === !t.unavailable && this.splash === t.splash && this.region === t.region && this.name === t.name && this.memberCount === t.member_count && this.large === t.large && this.icon === t.icon && l(this.features, t.features) && this.ownerID === t.owner_id && this.verificationLevel === t.verification_level && this.embedEnabled === t.embed_enabled;return e && (this.embedChannel ? this.embedChannel.id !== t.embed_channel_id && (e = !1) : t.embed_channel_id && (e = !1)), e;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.name;
      }
    }, {
      key: "_addMember",
      value: function _addMember(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var n = this.members.has(t.user.id);t.user instanceof i || (t.user = this.client.dataManager.newUser(t.user)), t.joined_at = t.joined_at || 0;var s = new a(this, t);if (this.members.set(s.id, s), this._rawVoiceStates && this._rawVoiceStates.has(s.user.id)) {
          var _t17 = this._rawVoiceStates.get(s.user.id);s.serverMute = _t17.mute, s.serverDeaf = _t17.deaf, s.selfMute = _t17.self_mute, s.selfDeaf = _t17.self_deaf, s.voiceSessionID = _t17.session_id, s.voiceChannelID = _t17.channel_id, this.client.channels.has(_t17.channel_id) ? this.client.channels.get(_t17.channel_id).members.set(s.user.id, s) : this.client.emit("warn", "Member " + s.id + " added in guild " + this.id + " with an uncached voice channel");
        }return this.client.ws.status === h.Status.READY && e && !n && this.client.emit(h.Events.GUILD_MEMBER_ADD, s), this._checkChunks(), s;
      }
    }, {
      key: "_updateMember",
      value: function _updateMember(t, e) {
        var n = c(t);e.roles && (t._roles = e.roles), "undefined" != typeof e.nick && (t.nickname = e.nick);var i = t.nickname !== n.nickname || !l(t._roles, n._roles);return this.client.ws.status === h.Status.READY && i && this.client.emit(h.Events.GUILD_MEMBER_UPDATE, n, t), { old: n, mem: t };
      }
    }, {
      key: "_removeMember",
      value: function _removeMember(t) {
        this.members.delete(t.id), this._checkChunks();
      }
    }, {
      key: "_memberSpeakUpdate",
      value: function _memberSpeakUpdate(t, e) {
        var n = this.members.get(t);n && n.speaking !== e && (n.speaking = e, this.client.emit(h.Events.GUILD_MEMBER_SPEAKING, n, e));
      }
    }, {
      key: "_setPresence",
      value: function _setPresence(t, e) {
        return this.presences.get(t) ? void this.presences.get(t).update(e) : void this.presences.set(t, new o(e));
      }
    }, {
      key: "_checkChunks",
      value: function _checkChunks() {
        this._fetchWaiter && this.members.size === this.memberCount && (this._fetchWaiter(this), this._fetchWaiter = null);
      }
    }, {
      key: "createdTimestamp",
      get: function get() {
        return this.id / 4194304 + 14200704e5;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "joinedAt",
      get: function get() {
        return new Date(this.joinedTimestamp);
      }
    }, {
      key: "iconURL",
      get: function get() {
        return this.icon ? h.Endpoints.guildIcon(this.id, this.icon) : null;
      }
    }, {
      key: "splashURL",
      get: function get() {
        return this.splash ? h.Endpoints.guildSplash(this.id, this.splash) : null;
      }
    }, {
      key: "owner",
      get: function get() {
        return this.members.get(this.ownerID);
      }
    }, {
      key: "voiceConnection",
      get: function get() {
        return this.client.browser ? null : this.client.voice.connections.get(this.id) || null;
      }
    }, {
      key: "defaultChannel",
      get: function get() {
        return this.channels.get(this.id);
      }
    }]);

    return d;
  }();

  t.exports = d;
}, function (t, e) {
  var n = function () {
    function n(t, e, _n23) {
      _classCallCheck(this, n);

      this.reaction = t, this.name = e, this.id = _n23;
    }

    _createClass(n, [{
      key: "toString",
      value: function toString() {
        return this.id ? "<:" + this.name + ":" + this.id + ">" : this.name;
      }
    }, {
      key: "identifier",
      get: function get() {
        return this.id ? this.name + ":" + this.id : encodeURIComponent(this.name);
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  var i = n(23),
      s = n(15);
  var r = function () {
    function r(t, e, n) {
      _classCallCheck(this, r);

      t ? (Object.defineProperty(this, "client", { value: t }), e && this.setup(e)) : (this.id = e, this.token = n, Object.defineProperty(this, "client", { value: this }));
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        this.name = t.name, this.token = t.token, this.avatar = t.avatar, this.id = t.id, this.guildID = t.guild_id, this.channelID = t.channel_id, t.user && (this.owner = t.user);
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.client.rest.methods.sendWebhookMessage(this, t, e);
      }
    }, {
      key: "sendSlackMessage",
      value: function sendSlackMessage(t) {
        return this.client.rest.methods.sendSlackWebhookMessage(this, t);
      }
    }, {
      key: "sendTTSMessage",
      value: function sendTTSMessage(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Object.assign(e, { tts: !0 }), this.client.rest.methods.sendWebhookMessage(this, t, e);
      }
    }, {
      key: "sendFile",
      value: function sendFile(t, e, n) {
        var _this25 = this;

        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return e || (e = "string" == typeof t ? i.basename(t) : t && t.path ? i.basename(t.path) : "file.jpg"), this.client.resolver.resolveBuffer(t).then(function (t) {
          return _this25.client.rest.methods.sendWebhookMessage(_this25, n, s, { file: t, name: e });
        });
      }
    }, {
      key: "sendCode",
      value: function sendCode(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return n.split && ("object" != _typeof(n.split) && (n.split = {}), n.split.prepend || (n.split.prepend = "```" + (t || "") + "\n"), n.split.append || (n.split.append = "\n```")), e = s(this.client.resolver.resolveString(e), !0), this.sendMessage("```" + (t || "") + "\n" + e + "\n```", n);
      }
    }, {
      key: "edit",
      value: function edit() {
        var _this26 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;
        var e = arguments[1];
        return e ? this.client.resolver.resolveBuffer(e).then(function (e) {
          var n = _this26.client.resolver.resolveBase64(e);return _this26.client.rest.methods.editWebhook(_this26, t, n);
        }) : this.client.rest.methods.editWebhook(this, t).then(function (t) {
          return _this26.setup(t), _this26;
        });
      }
    }, {
      key: "delete",
      value: function _delete() {
        return this.client.rest.methods.deleteWebhook(this);
      }
    }]);

    return r;
  }();

  t.exports = r;
}, function (t, e, n) {
  "use strict";
  (function (t) {
    function i() {
      try {
        var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
            return 42;
          } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }function s() {
      return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }function r(t, e) {
      if (s() < e) throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t;
    }function o(t, e, n) {
      if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, n);if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return c(this, t);
      }return a(this, t, e, n);
    }function a(t, e, n, i) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, i) : "string" == typeof e ? l(t, e, n) : p(t, e);
    }function h(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
    }function u(t, e, n, i) {
      return h(e), e <= 0 ? r(t, e) : void 0 !== n ? "string" == typeof i ? r(t, e).fill(n, i) : r(t, e).fill(n) : r(t, e);
    }function c(t, e) {
      if (h(e), t = r(t, e < 0 ? 0 : 0 | m(e)), !o.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
        t[n] = 0;
      }return t;
    }function l(t, e, n) {
      if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var i = 0 | _(e, n);t = r(t, i);var s = t.write(e, n);return s !== i && (t = t.slice(0, s)), t;
    }function d(t, e) {
      var n = e.length < 0 ? 0 : 0 | m(e.length);t = r(t, n);for (var i = 0; i < n; i += 1) {
        t[i] = 255 & e[i];
      }return t;
    }function f(t, e, n, i) {
      if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");if (e.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");return e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, n) : new Uint8Array(e, n, i), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = d(t, e), t;
    }function p(t, e) {
      if (o.isBuffer(e)) {
        var n = 0 | m(e.length);return t = r(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t);
      }if (e) {
        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || $(e.length) ? r(t, 0) : d(t, e);if ("Buffer" === e.type && Q(e.data)) return d(t, e.data);
      }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }function m(t) {
      if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");return 0 | t;
    }function g(t) {
      return +t != t && (t = 0), o.alloc(+t);
    }function _(t, e) {
      if (o.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var n = t.length;if (0 === n) return 0;for (var i = !1;;) {
        switch (e) {case "ascii":case "latin1":case "binary":
            return n;case "utf8":case "utf-8":case void 0:
            return F(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return 2 * n;case "hex":
            return n >>> 1;case "base64":
            return K(t).length;default:
            if (i) return F(t).length;e = ("" + e).toLowerCase(), i = !0;}
      }
    }function E(t, e, n) {
      var i = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";if (n >>>= 0, e >>>= 0, n <= e) return "";for (t || (t = "utf8");;) {
        switch (t) {case "hex":
            return L(this, e, n);case "utf8":case "utf-8":
            return S(this, e, n);case "ascii":
            return C(this, e, n);case "latin1":case "binary":
            return x(this, e, n);case "base64":
            return M(this, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return U(this, e, n);default:
            if (i) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), i = !0;}
      }
    }function w(t, e, n) {
      var i = t[e];t[e] = t[n], t[n] = i;
    }function v(t, e, n, i, s) {
      if (0 === t.length) return -1;if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = s ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (s) return -1;n = t.length - 1;
      } else if (n < 0) {
        if (!s) return -1;n = 0;
      }if ("string" == typeof e && (e = o.from(e, i)), o.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, i, s);if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, i, s);throw new TypeError("val must be string, number or Buffer");
    }function b(t, e, n, i, s) {
      function r(t, e) {
        return 1 === o ? t[e] : t.readUInt16BE(e * o);
      }var o = 1,
          a = t.length,
          h = e.length;if (void 0 !== i && (i = String(i).toLowerCase(), "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
        if (t.length < 2 || e.length < 2) return -1;o = 2, a /= 2, h /= 2, n /= 2;
      }var u;if (s) {
        var c = -1;for (u = n; u < a; u++) {
          if (r(t, u) === r(e, c === -1 ? 0 : u - c)) {
            if (c === -1 && (c = u), u - c + 1 === h) return c * o;
          } else c !== -1 && (u -= u - c), c = -1;
        }
      } else for (n + h > a && (n = a - h), u = n; u >= 0; u--) {
        for (var l = !0, d = 0; d < h; d++) {
          if (r(t, u + d) !== r(e, d)) {
            l = !1;break;
          }
        }if (l) return u;
      }return -1;
    }function y(t, e, n, i) {
      n = Number(n) || 0;var s = t.length - n;i ? (i = Number(i), i > s && (i = s)) : i = s;var r = e.length;if (r % 2 !== 0) throw new TypeError("Invalid hex string");i > r / 2 && (i = r / 2);for (var o = 0; o < i; ++o) {
        var a = parseInt(e.substr(2 * o, 2), 16);if (isNaN(a)) return o;t[n + o] = a;
      }return o;
    }function A(t, e, n, i) {
      return Z(F(e, t.length - n), t, n, i);
    }function k(t, e, n, i) {
      return Z(Y(e), t, n, i);
    }function R(t, e, n, i) {
      return k(t, e, n, i);
    }function T(t, e, n, i) {
      return Z(K(e), t, n, i);
    }function D(t, e, n, i) {
      return Z(V(e, t.length - n), t, n, i);
    }function M(t, e, n) {
      return 0 === e && n === t.length ? J.fromByteArray(t) : J.fromByteArray(t.slice(e, n));
    }function S(t, e, n) {
      n = Math.min(t.length, n);for (var i = [], s = e; s < n;) {
        var r = t[s],
            o = null,
            a = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;if (s + a <= n) {
          var h, u, c, l;switch (a) {case 1:
              r < 128 && (o = r);break;case 2:
              h = t[s + 1], 128 === (192 & h) && (l = (31 & r) << 6 | 63 & h, l > 127 && (o = l));break;case 3:
              h = t[s + 1], u = t[s + 2], 128 === (192 & h) && 128 === (192 & u) && (l = (15 & r) << 12 | (63 & h) << 6 | 63 & u, l > 2047 && (l < 55296 || l > 57343) && (o = l));break;case 4:
              h = t[s + 1], u = t[s + 2], c = t[s + 3], 128 === (192 & h) && 128 === (192 & u) && 128 === (192 & c) && (l = (15 & r) << 18 | (63 & h) << 12 | (63 & u) << 6 | 63 & c, l > 65535 && l < 1114112 && (o = l));}
        }null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), s += a;
      }return I(i);
    }function I(t) {
      var e = t.length;if (e <= tt) return String.fromCharCode.apply(String, t);for (var n = "", i = 0; i < e;) {
        n += String.fromCharCode.apply(String, t.slice(i, i += tt));
      }return n;
    }function C(t, e, n) {
      var i = "";n = Math.min(t.length, n);for (var s = e; s < n; ++s) {
        i += String.fromCharCode(127 & t[s]);
      }return i;
    }function x(t, e, n) {
      var i = "";n = Math.min(t.length, n);for (var s = e; s < n; ++s) {
        i += String.fromCharCode(t[s]);
      }return i;
    }function L(t, e, n) {
      var i = t.length;(!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);for (var s = "", r = e; r < n; ++r) {
        s += W(t[r]);
      }return s;
    }function U(t, e, n) {
      for (var i = t.slice(e, n), s = "", r = 0; r < i.length; r += 2) {
        s += String.fromCharCode(i[r] + 256 * i[r + 1]);
      }return s;
    }function P(t, e, n) {
      if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
    }function N(t, e, n, i, s, r) {
      if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > s || e < r) throw new RangeError('"value" argument is out of bounds');if (n + i > t.length) throw new RangeError("Index out of range");
    }function O(t, e, n, i) {
      e < 0 && (e = 65535 + e + 1);for (var s = 0, r = Math.min(t.length - n, 2); s < r; ++s) {
        t[n + s] = (e & 255 << 8 * (i ? s : 1 - s)) >>> 8 * (i ? s : 1 - s);
      }
    }function B(t, e, n, i) {
      e < 0 && (e = 4294967295 + e + 1);for (var s = 0, r = Math.min(t.length - n, 4); s < r; ++s) {
        t[n + s] = e >>> 8 * (i ? s : 3 - s) & 255;
      }
    }function G(t, e, n, i, s, r) {
      if (n + i > t.length) throw new RangeError("Index out of range");if (n < 0) throw new RangeError("Index out of range");
    }function j(t, e, n, i, s) {
      return s || G(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, i, 23, 4), n + 4;
    }function q(t, e, n, i, s) {
      return s || G(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, i, 52, 8), n + 8;
    }function z(t) {
      if (t = H(t).replace(et, ""), t.length < 2) return "";for (; t.length % 4 !== 0;) {
        t += "=";
      }return t;
    }function H(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }function W(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }function F(t, e) {
      e = e || 1 / 0;for (var n, i = t.length, s = null, r = [], o = 0; o < i; ++o) {
        if (n = t.charCodeAt(o), n > 55295 && n < 57344) {
          if (!s) {
            if (n > 56319) {
              (e -= 3) > -1 && r.push(239, 191, 189);continue;
            }if (o + 1 === i) {
              (e -= 3) > -1 && r.push(239, 191, 189);continue;
            }s = n;continue;
          }if (n < 56320) {
            (e -= 3) > -1 && r.push(239, 191, 189), s = n;continue;
          }n = (s - 55296 << 10 | n - 56320) + 65536;
        } else s && (e -= 3) > -1 && r.push(239, 191, 189);if (s = null, n < 128) {
          if ((e -= 1) < 0) break;r.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) break;r.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) break;r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }return r;
    }function Y(t) {
      for (var e = [], n = 0; n < t.length; ++n) {
        e.push(255 & t.charCodeAt(n));
      }return e;
    }function V(t, e) {
      for (var n, i, s, r = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) {
        n = t.charCodeAt(o), i = n >> 8, s = n % 256, r.push(s), r.push(i);
      }return r;
    }function K(t) {
      return J.toByteArray(z(t));
    }function Z(t, e, n, i) {
      for (var s = 0; s < i && !(s + n >= e.length || s >= t.length); ++s) {
        e[s + n] = t[s];
      }return s;
    }function $(t) {
      return t !== t;
    } /*!
      * The buffer module from node.js, for the browser.
      *
      * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
      * @license  MIT
      */
    var J = n(63),
        X = n(65),
        Q = n(66);e.Buffer = o, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), e.kMaxLength = s(), o.poolSize = 8192, o._augment = function (t) {
      return t.__proto__ = o.prototype, t;
    }, o.from = function (t, e, n) {
      return a(null, t, e, n);
    }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0 })), o.alloc = function (t, e, n) {
      return u(null, t, e, n);
    }, o.allocUnsafe = function (t) {
      return c(null, t);
    }, o.allocUnsafeSlow = function (t) {
      return c(null, t);
    }, o.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, o.compare = function (t, e) {
      if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var n = t.length, i = e.length, s = 0, r = Math.min(n, i); s < r; ++s) {
        if (t[s] !== e[s]) {
          n = t[s], i = e[s];break;
        }
      }return n < i ? -1 : i < n ? 1 : 0;
    }, o.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
          return !0;default:
          return !1;}
    }, o.concat = function (t, e) {
      if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return o.alloc(0);var n;if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
        e += t[n].length;
      }var i = o.allocUnsafe(e),
          s = 0;for (n = 0; n < t.length; ++n) {
        var r = t[n];if (!o.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');r.copy(i, s), s += r.length;
      }return i;
    }, o.byteLength = _, o.prototype._isBuffer = !0, o.prototype.swap16 = function () {
      var t = this.length;if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
        w(this, e, e + 1);
      }return this;
    }, o.prototype.swap32 = function () {
      var t = this.length;if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
        w(this, e, e + 3), w(this, e + 1, e + 2);
      }return this;
    }, o.prototype.swap64 = function () {
      var t = this.length;if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
        w(this, e, e + 7), w(this, e + 1, e + 6), w(this, e + 2, e + 5), w(this, e + 3, e + 4);
      }return this;
    }, o.prototype.toString = function () {
      var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : E.apply(this, arguments);
    }, o.prototype.equals = function (t) {
      if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === o.compare(this, t);
    }, o.prototype.inspect = function () {
      var t = "",
          n = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
    }, o.prototype.compare = function (t, e, n, i, s) {
      if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === s && (s = this.length), e < 0 || n > t.length || i < 0 || s > this.length) throw new RangeError("out of range index");if (i >= s && e >= n) return 0;if (i >= s) return -1;if (e >= n) return 1;if (e >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === t) return 0;for (var r = s - i, a = n - e, h = Math.min(r, a), u = this.slice(i, s), c = t.slice(e, n), l = 0; l < h; ++l) {
        if (u[l] !== c[l]) {
          r = u[l], a = c[l];break;
        }
      }return r < a ? -1 : a < r ? 1 : 0;
    }, o.prototype.includes = function (t, e, n) {
      return this.indexOf(t, e, n) !== -1;
    }, o.prototype.indexOf = function (t, e, n) {
      return v(this, t, e, n, !0);
    }, o.prototype.lastIndexOf = function (t, e, n) {
      return v(this, t, e, n, !1);
    }, o.prototype.write = function (t, e, n, i) {
      if (void 0 === e) i = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) i = e, n = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
      }var s = this.length - e;if ((void 0 === n || n > s) && (n = s), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");i || (i = "utf8");for (var r = !1;;) {
        switch (i) {case "hex":
            return y(this, t, e, n);case "utf8":case "utf-8":
            return A(this, t, e, n);case "ascii":
            return k(this, t, e, n);case "latin1":case "binary":
            return R(this, t, e, n);case "base64":
            return T(this, t, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return D(this, t, e, n);default:
            if (r) throw new TypeError("Unknown encoding: " + i);i = ("" + i).toLowerCase(), r = !0;}
      }
    }, o.prototype.toJSON = function () {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };var tt = 4096;o.prototype.slice = function (t, e) {
      var n = this.length;t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);var i;if (o.TYPED_ARRAY_SUPPORT) i = this.subarray(t, e), i.__proto__ = o.prototype;else {
        var s = e - t;i = new o(s, void 0);for (var r = 0; r < s; ++r) {
          i[r] = this[r + t];
        }
      }return i;
    }, o.prototype.readUIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var i = this[t], s = 1, r = 0; ++r < e && (s *= 256);) {
        i += this[t + r] * s;
      }return i;
    }, o.prototype.readUIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var i = this[t + --e], s = 1; e > 0 && (s *= 256);) {
        i += this[t + --e] * s;
      }return i;
    }, o.prototype.readUInt8 = function (t, e) {
      return e || P(t, 1, this.length), this[t];
    }, o.prototype.readUInt16LE = function (t, e) {
      return e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, o.prototype.readUInt16BE = function (t, e) {
      return e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, o.prototype.readUInt32LE = function (t, e) {
      return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, o.prototype.readUInt32BE = function (t, e) {
      return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, o.prototype.readIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var i = this[t], s = 1, r = 0; ++r < e && (s *= 256);) {
        i += this[t + r] * s;
      }return s *= 128, i >= s && (i -= Math.pow(2, 8 * e)), i;
    }, o.prototype.readIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var i = e, s = 1, r = this[t + --i]; i > 0 && (s *= 256);) {
        r += this[t + --i] * s;
      }return s *= 128, r >= s && (r -= Math.pow(2, 8 * e)), r;
    }, o.prototype.readInt8 = function (t, e) {
      return e || P(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t];
    }, o.prototype.readInt16LE = function (t, e) {
      e || P(t, 2, this.length);var n = this[t] | this[t + 1] << 8;return 32768 & n ? 4294901760 | n : n;
    }, o.prototype.readInt16BE = function (t, e) {
      e || P(t, 2, this.length);var n = this[t + 1] | this[t] << 8;return 32768 & n ? 4294901760 | n : n;
    }, o.prototype.readInt32LE = function (t, e) {
      return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, o.prototype.readInt32BE = function (t, e) {
      return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, o.prototype.readFloatLE = function (t, e) {
      return e || P(t, 4, this.length), X.read(this, t, !0, 23, 4);
    }, o.prototype.readFloatBE = function (t, e) {
      return e || P(t, 4, this.length), X.read(this, t, !1, 23, 4);
    }, o.prototype.readDoubleLE = function (t, e) {
      return e || P(t, 8, this.length), X.read(this, t, !0, 52, 8);
    }, o.prototype.readDoubleBE = function (t, e) {
      return e || P(t, 8, this.length), X.read(this, t, !1, 52, 8);
    }, o.prototype.writeUIntLE = function (t, e, n, i) {
      if (t = +t, e |= 0, n |= 0, !i) {
        var s = Math.pow(2, 8 * n) - 1;N(this, t, e, n, s, 0);
      }var r = 1,
          o = 0;for (this[e] = 255 & t; ++o < n && (r *= 256);) {
        this[e + o] = t / r & 255;
      }return e + n;
    }, o.prototype.writeUIntBE = function (t, e, n, i) {
      if (t = +t, e |= 0, n |= 0, !i) {
        var s = Math.pow(2, 8 * n) - 1;N(this, t, e, n, s, 0);
      }var r = n - 1,
          o = 1;for (this[e + r] = 255 & t; --r >= 0 && (o *= 256);) {
        this[e + r] = t / o & 255;
      }return e + n;
    }, o.prototype.writeUInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, o.prototype.writeUInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2;
    }, o.prototype.writeUInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2;
    }, o.prototype.writeUInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4;
    }, o.prototype.writeUInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
    }, o.prototype.writeIntLE = function (t, e, n, i) {
      if (t = +t, e |= 0, !i) {
        var s = Math.pow(2, 8 * n - 1);N(this, t, e, n, s - 1, -s);
      }var r = 0,
          o = 1,
          a = 0;for (this[e] = 255 & t; ++r < n && (o *= 256);) {
        t < 0 && 0 === a && 0 !== this[e + r - 1] && (a = 1), this[e + r] = (t / o >> 0) - a & 255;
      }return e + n;
    }, o.prototype.writeIntBE = function (t, e, n, i) {
      if (t = +t, e |= 0, !i) {
        var s = Math.pow(2, 8 * n - 1);N(this, t, e, n, s - 1, -s);
      }var r = n - 1,
          o = 1,
          a = 0;for (this[e + r] = 255 & t; --r >= 0 && (o *= 256);) {
        t < 0 && 0 === a && 0 !== this[e + r + 1] && (a = 1), this[e + r] = (t / o >> 0) - a & 255;
      }return e + n;
    }, o.prototype.writeInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, o.prototype.writeInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2;
    }, o.prototype.writeInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2;
    }, o.prototype.writeInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4;
    }, o.prototype.writeInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
    }, o.prototype.writeFloatLE = function (t, e, n) {
      return j(this, t, e, !0, n);
    }, o.prototype.writeFloatBE = function (t, e, n) {
      return j(this, t, e, !1, n);
    }, o.prototype.writeDoubleLE = function (t, e, n) {
      return q(this, t, e, !0, n);
    }, o.prototype.writeDoubleBE = function (t, e, n) {
      return q(this, t, e, !1, n);
    }, o.prototype.copy = function (t, e, n, i) {
      if (n || (n = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (i < 0) throw new RangeError("sourceEnd out of bounds");i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);var s,
          r = i - n;if (this === t && n < e && e < i) for (s = r - 1; s >= 0; --s) {
        t[s + e] = this[s + n];
      } else if (r < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (s = 0; s < r; ++s) {
        t[s + e] = this[s + n];
      } else Uint8Array.prototype.set.call(t, this.subarray(n, n + r), e);return r;
    }, o.prototype.fill = function (t, e, n, i) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (i = e, e = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === t.length) {
          var s = t.charCodeAt(0);s < 256 && (t = s);
        }if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");if ("string" == typeof i && !o.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
      } else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");if (n <= e) return this;e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);var r;if ("number" == typeof t) for (r = e; r < n; ++r) {
        this[r] = t;
      } else {
        var a = o.isBuffer(t) ? t : F(new o(t, i).toString()),
            h = a.length;for (r = 0; r < n - e; ++r) {
          this[r + e] = a[r % h];
        }
      }return this;
    };var et = /[^+\/0-9A-Za-z-_]/g;
  }).call(e, n(80));
}, function (t, e) {
  function n() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
  }function i(t) {
    return "function" == typeof t;
  }function s(t) {
    return "number" == typeof t;
  }function r(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
  }function o(t) {
    return void 0 === t;
  }t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
    if (!s(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");return this._maxListeners = t, this;
  }, n.prototype.emit = function (t) {
    var e, n, s, a, h, u;if (this._events || (this._events = {}), "error" === t && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
      if (e = arguments[1], e instanceof Error) throw e;var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");throw c.context = e, c;
    }if (n = this._events[t], o(n)) return !1;if (i(n)) switch (arguments.length) {case 1:
        n.call(this);break;case 2:
        n.call(this, arguments[1]);break;case 3:
        n.call(this, arguments[1], arguments[2]);break;default:
        a = Array.prototype.slice.call(arguments, 1), n.apply(this, a);} else if (r(n)) for (a = Array.prototype.slice.call(arguments, 1), u = n.slice(), s = u.length, h = 0; h < s; h++) {
      u[h].apply(this, a);
    }return !0;
  }, n.prototype.addListener = function (t, e) {
    var s;if (!i(e)) throw TypeError("listener must be a function");return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? r(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, r(this._events[t]) && !this._events[t].warned && (s = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, s && s > 0 && this._events[t].length > s && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this;
  }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
    function n() {
      this.removeListener(t, n), s || (s = !0, e.apply(this, arguments));
    }if (!i(e)) throw TypeError("listener must be a function");var s = !1;return n.listener = e, this.on(t, n), this;
  }, n.prototype.removeListener = function (t, e) {
    var n, s, o, a;if (!i(e)) throw TypeError("listener must be a function");if (!this._events || !this._events[t]) return this;if (n = this._events[t], o = n.length, s = -1, n === e || i(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (r(n)) {
      for (a = o; a-- > 0;) {
        if (n[a] === e || n[a].listener && n[a].listener === e) {
          s = a;break;
        }
      }if (s < 0) return this;1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(s, 1), this._events.removeListener && this.emit("removeListener", t, e);
    }return this;
  }, n.prototype.removeAllListeners = function (t) {
    var e, n;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;if (0 === arguments.length) {
      for (e in this._events) {
        "removeListener" !== e && this.removeAllListeners(e);
      }return this.removeAllListeners("removeListener"), this._events = {}, this;
    }if (n = this._events[t], i(n)) this.removeListener(t, n);else if (n) for (; n.length;) {
      this.removeListener(t, n[n.length - 1]);
    }return delete this._events[t], this;
  }, n.prototype.listeners = function (t) {
    var e;return e = this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
  }, n.prototype.listenerCount = function (t) {
    if (this._events) {
      var e = this._events[t];if (i(e)) return 1;if (e) return e.length;
    }return 0;
  }, n.listenerCount = function (t, e) {
    return t.listenerCount(e);
  };
}, function (t, e, n) {
  "use strict";
  t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
}, function (t, e, n) {
  (function (t) {
    function n(t, e) {
      for (var n = 0, i = t.length - 1; i >= 0; i--) {
        var s = t[i];"." === s ? t.splice(i, 1) : ".." === s ? (t.splice(i, 1), n++) : n && (t.splice(i, 1), n--);
      }if (e) for (; n--; n) {
        t.unshift("..");
      }return t;
    }function i(t, e) {
      if (t.filter) return t.filter(e);for (var n = [], i = 0; i < t.length; i++) {
        e(t[i], i, t) && n.push(t[i]);
      }return n;
    }var s = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
        r = function r(t) {
      return s.exec(t).slice(1);
    };e.resolve = function () {
      for (var e = "", s = !1, r = arguments.length - 1; r >= -1 && !s; r--) {
        var o = r >= 0 ? arguments[r] : t.cwd();if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");o && (e = o + "/" + e, s = "/" === o.charAt(0));
      }return e = n(i(e.split("/"), function (t) {
        return !!t;
      }), !s).join("/"), (s ? "/" : "") + e || ".";
    }, e.normalize = function (t) {
      var s = e.isAbsolute(t),
          r = "/" === o(t, -1);return t = n(i(t.split("/"), function (t) {
        return !!t;
      }), !s).join("/"), t || s || (t = "."), t && r && (t += "/"), (s ? "/" : "") + t;
    }, e.isAbsolute = function (t) {
      return "/" === t.charAt(0);
    }, e.join = function () {
      var t = Array.prototype.slice.call(arguments, 0);return e.normalize(i(t, function (t, e) {
        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");return t;
      }).join("/"));
    }, e.relative = function (t, n) {
      function i(t) {
        for (var e = 0; e < t.length && "" === t[e]; e++) {}for (var n = t.length - 1; n >= 0 && "" === t[n]; n--) {}return e > n ? [] : t.slice(e, n - e + 1);
      }t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);for (var s = i(t.split("/")), r = i(n.split("/")), o = Math.min(s.length, r.length), a = o, h = 0; h < o; h++) {
        if (s[h] !== r[h]) {
          a = h;break;
        }
      }for (var u = [], h = a; h < s.length; h++) {
        u.push("..");
      }return u = u.concat(r.slice(a)), u.join("/");
    }, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
      var e = r(t),
          n = e[0],
          i = e[1];return n || i ? (i && (i = i.substr(0, i.length - 1)), n + i) : ".";
    }, e.basename = function (t, e) {
      var n = r(t)[2];return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n;
    }, e.extname = function (t) {
      return r(t)[3];
    };var o = "b" === "ab".substr(-1) ? function (t, e, n) {
      return t.substr(e, n);
    } : function (t, e, n) {
      return e < 0 && (e = t.length + e), t.substr(e, n);
    };
  }).call(e, n(24));
}, function (t, e) {
  function n() {
    throw new Error("setTimeout has not been defined");
  }function i() {
    throw new Error("clearTimeout has not been defined");
  }function s(t) {
    if (c === setTimeout) return setTimeout(t, 0);if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);try {
      return c(t, 0);
    } catch (e) {
      try {
        return c.call(null, t, 0);
      } catch (e) {
        return c.call(this, t, 0);
      }
    }
  }function r(t) {
    if (l === clearTimeout) return clearTimeout(t);if ((l === i || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);try {
      return l(t);
    } catch (e) {
      try {
        return l.call(null, t);
      } catch (e) {
        return l.call(this, t);
      }
    }
  }function o() {
    m && f && (m = !1, f.length ? p = f.concat(p) : g = -1, p.length && a());
  }function a() {
    if (!m) {
      var t = s(o);m = !0;for (var e = p.length; e;) {
        for (f = p, p = []; ++g < e;) {
          f && f[g].run();
        }g = -1, e = p.length;
      }f = null, m = !1, r(t);
    }
  }function h(t, e) {
    this.fun = t, this.array = e;
  }function u() {}var c,
      l,
      d = t.exports = {};!function () {
    try {
      c = "function" == typeof setTimeout ? setTimeout : n;
    } catch (t) {
      c = n;
    }try {
      l = "function" == typeof clearTimeout ? clearTimeout : i;
    } catch (t) {
      l = i;
    }
  }();var f,
      p = [],
      m = !1,
      g = -1;d.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }p.push(new h(t, e)), 1 !== p.length || m || s(a);
  }, h.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, d.cwd = function () {
    return "/";
  }, d.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, d.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  function i() {}function s(t) {
    if (!m(t)) return t;var e = [];for (var n in t) {
      r(e, n, t[n]);
    }return e.join("&");
  }function r(t, e, n) {
    if (null != n) {
      if (Array.isArray(n)) n.forEach(function (n) {
        r(t, e, n);
      });else if (m(n)) for (var i in n) {
        r(t, e + "[" + i + "]", n[i]);
      } else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
    } else null === n && t.push(encodeURIComponent(e));
  }function o(t) {
    for (var e, n, i = {}, s = t.split("&"), r = 0, o = s.length; r < o; ++r) {
      e = s[r], n = e.indexOf("="), n == -1 ? i[decodeURIComponent(e)] = "" : i[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
    }return i;
  }function a(t) {
    var e,
        n,
        i,
        s,
        r = t.split(/\r?\n/),
        o = {};r.pop();for (var a = 0, h = r.length; a < h; ++a) {
      n = r[a], e = n.indexOf(":"), i = n.slice(0, e).toLowerCase(), s = w(n.slice(e + 1)), o[i] = s;
    }return o;
  }function h(t) {
    return (/[\/+]json\b/.test(t)
    );
  }function u(t, e) {
    e = e || {}, this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;var n = this.xhr.status;1223 === n && (n = 204), this._setStatusProperties(n), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }function c(t, e) {
    var n = this;this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function () {
      var t = null,
          e = null;try {
        e = new u(n);
      } catch (e) {
        return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t);
      }n.emit("response", e);var i;try {
        n._isResponseOK(e) || (i = new Error(e.statusText || "Unsuccessful HTTP response"), i.original = t, i.response = e, i.status = e.status);
      } catch (t) {
        i = t;
      }i ? n.callback(i, e) : n.callback(null, e);
    });
  }function l(t, e) {
    var n = E("DELETE", t);return e && n.end(e), n;
  }var d;"undefined" != typeof window ? d = window : "undefined" != typeof self ? d = self : (console.warn("Using browser-only version of superagent in non-browser environment"), d = this);var f = n(64),
      p = n(77),
      m = n(26),
      g = n(76),
      _ = n(78),
      E = e = t.exports = function (t, n) {
    return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 == arguments.length ? new e.Request("GET", t) : new e.Request(t, n);
  };e.Request = c, E.getXHR = function () {
    if (!(!d.XMLHttpRequest || d.location && "file:" == d.location.protocol && d.ActiveXObject)) return new XMLHttpRequest();try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (t) {}try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (t) {}try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (t) {}throw Error("Browser-only verison of superagent could not find XHR");
  };var w = "".trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/(^\s*|\s*$)/g, "");
  };E.serializeObject = s, E.parseString = o, E.types = { html: "text/html", json: "application/json", xml: "application/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, E.serialize = { "application/x-www-form-urlencoded": s, "application/json": JSON.stringify }, E.parse = { "application/x-www-form-urlencoded": o, "application/json": JSON.parse }, _(u.prototype), u.prototype._parseBody = function (t) {
    var e = E.parse[this.type];return this.req._parser ? this.req._parser(this, t) : (!e && h(this.type) && (e = E.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null);
  }, u.prototype.toError = function () {
    var t = this.req,
        e = t.method,
        n = t.url,
        i = "cannot " + e + " " + n + " (" + this.status + ")",
        s = new Error(i);return s.status = this.status, s.method = e, s.url = n, s;
  }, E.Response = u, f(c.prototype), p(c.prototype), c.prototype.type = function (t) {
    return this.set("Content-Type", E.types[t] || t), this;
  }, c.prototype.accept = function (t) {
    return this.set("Accept", E.types[t] || t), this;
  }, c.prototype.auth = function (t, e, n) {
    switch (n || (n = { type: "function" == typeof btoa ? "basic" : "auto" }), n.type) {case "basic":
        this.set("Authorization", "Basic " + btoa(t + ":" + e));break;case "auto":
        this.username = t, this.password = e;}return this;
  }, c.prototype.query = function (t) {
    return "string" != typeof t && (t = s(t)), t && this._query.push(t), this;
  }, c.prototype.attach = function (t, e, n) {
    if (this._data) throw Error("superagent can't mix .send() and .attach()");return this._getFormData().append(t, e, n || e.name), this;
  }, c.prototype._getFormData = function () {
    return this._formData || (this._formData = new d.FormData()), this._formData;
  }, c.prototype.callback = function (t, e) {
    var n = this._callback;this.clearTimeout(), t && this.emit("error", t), n(t, e);
  }, c.prototype.crossDomainError = function () {
    var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t);
  }, c.prototype.buffer = c.prototype.ca = c.prototype.agent = function () {
    return console.warn("This is not supported in browser version of superagent"), this;
  }, c.prototype.pipe = c.prototype.write = function () {
    throw Error("Streaming is not supported in browser version of superagent");
  }, c.prototype._appendQueryString = function () {
    var t = this._query.join("&");if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._sort) {
      var e = this.url.indexOf("?");if (e >= 0) {
        var n = this.url.substring(e + 1).split("&");g(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, e) + "?" + n.join("&");
      }
    }
  }, c.prototype._isHost = function (t) {
    return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t);
  }, c.prototype.end = function (t) {
    var e = this,
        n = this.xhr = E.getXHR(),
        s = this._formData || this._data;this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || i, n.onreadystatechange = function () {
      var t = n.readyState;if (t >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == t) {
        var i;try {
          i = n.status;
        } catch (t) {
          i = 0;
        }if (!i) {
          if (e.timedout || e._aborted) return;return e.crossDomainError();
        }e.emit("end");
      }
    };var r = function r(t, n) {
      n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n);
    };if (this.hasListeners("progress")) try {
      n.onprogress = r.bind(null, "download"), n.upload && (n.upload.onprogress = r.bind(null, "upload"));
    } catch (t) {}if (this._appendQueryString(), this._setTimeouts(), this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof s && !this._isHost(s)) {
      var o = this._header["content-type"],
          a = this._serializer || E.serialize[o ? o.split(";")[0] : ""];!a && h(o) && (a = E.serialize["application/json"]), a && (s = a(s));
    }for (var u in this.header) {
      null != this.header[u] && n.setRequestHeader(u, this.header[u]);
    }return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof s ? s : null), this;
  }, E.get = function (t, e, n) {
    var i = E("GET", t);return "function" == typeof e && (n = e, e = null), e && i.query(e), n && i.end(n), i;
  }, E.head = function (t, e, n) {
    var i = E("HEAD", t);return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i;
  }, E.options = function (t, e, n) {
    var i = E("OPTIONS", t);return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i;
  }, E.del = l, E.delete = l, E.patch = function (t, e, n) {
    var i = E("PATCH", t);return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i;
  }, E.post = function (t, e, n) {
    var i = E("POST", t);return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i;
  }, E.put = function (t, e, n) {
    var i = E("PUT", t);return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i;
  };
}, function (t, e) {
  function n(t) {
    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
  }t.exports = n;
}, function (t, e) {
  t.exports = { name: "discord.js", version: "11.0.0", description: "A powerful library for interacting with the Discord API", main: "./src/index", types: "./typings/index.d.ts", scripts: { test: "eslint src && docgen --source src --custom docs/index.yml", docs: "docgen --source src --custom docs/index.yml --output docs/docs.json", "test-docs": "docgen --source src --custom docs", lint: "eslint src", "web-dist": "node ./node_modules/parallel-webpack/bin/run.js" }, repository: { type: "git", url: "git+https://github.com/hydrabolt/discord.js.git" }, keywords: ["discord", "api", "bot", "client", "node", "discordapp"], author: "Amish Shah <amishshah.2k@gmail.com>", license: "Apache-2.0", bugs: { url: "https://github.com/hydrabolt/discord.js/issues" }, homepage: "https://github.com/hydrabolt/discord.js#readme", runkitExampleFilename: "./docs/examples/ping.js", dependencies: { "@types/node": "^6.0.0", pako: "^1.0.0", superagent: "^3.3.0", tweetnacl: "^0.14.0", ws: "^1.1.0" }, peerDependencies: { erlpack: "hammerandchisel/erlpack#master", "node-opus": "^0.2.0", opusscript: "^0.0.1", uws: "^0.12.0" }, devDependencies: { "discord.js-docgen": "hydrabolt/discord.js-docgen#master", eslint: "^3.12.0", "parallel-webpack": "^1.6.0", "uglify-js": "mishoo/UglifyJS2#harmony", webpack: "2.2.0-rc.3" }, engines: { node: ">=6.0.0" }, browser: { ws: !1, uws: !1, erlpack: !1, opusscript: !1, "node-opus": !1, "tweet-nacl": !1, "src/sharding/Shard.js": !1, "src/sharding/ShardClientUtil.js": !1, "src/sharding/ShardingManager.js": !1, "src/client/voice/dispatcher/StreamDispatcher.js": !1, "src/client/voice/opus/BaseOpusEngine.js": !1, "src/client/voice/opus/NodeOpusEngine.js": !1, "src/client/voice/opus/OpusEngineList.js": !1, "src/client/voice/opus/OpusScriptEngine.js": !1, "src/client/voice/pcm/ConverterEngine.js": !1, "src/client/voice/pcm/ConverterEngineList.js": !1, "src/client/voice/pcm/FfmpegConverterEngine.js": !1, "src/client/voice/player/AudioPlayer.js": !1, "src/client/voice/player/BasePlayer.js": !1, "src/client/voice/player/DefaultPlayer.js": !1, "src/client/voice/receiver/VoiceReadable.js": !1, "src/client/voice/receiver/VoiceReceiver.js": !1, "src/client/voice/util/SecretKey.js": !1, "src/client/voice/ClientVoiceManager.js": !1, "src/client/voice/VoiceConnection.js": !1, "src/client/voice/VoiceUDPClient.js": !1, "src/client/voice/VoiceWebSocket.js": !1 } };
}, function (t, e, n) {
  var i = n(6),
      s = n(37);
  var r = function (_s2) {
    _inherits(r, _s2);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        _get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "setup", this).call(this, t), this.flags = t.flags, this.owner = new i(this.client, t.owner);
      }
    }]);

    return r;
  }(s);

  t.exports = r;
}, function (t, e, n) {
  var i = n(6),
      s = n(3);
  var r = function (_i7) {
    _inherits(r, _i7);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        _get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "setup", this).call(this, t), this.verified = t.verified, this.email = t.email, this.localPresence = {}, this._typing = new Map(), this.friends = new s(), this.blocked = new s(), this.notes = new s();
      }
    }, {
      key: "edit",
      value: function edit(t) {
        return this.client.rest.methods.updateCurrentUser(t);
      }
    }, {
      key: "setUsername",
      value: function setUsername(t, e) {
        return this.client.rest.methods.updateCurrentUser({ username: t }, e);
      }
    }, {
      key: "setEmail",
      value: function setEmail(t, e) {
        return this.client.rest.methods.updateCurrentUser({ email: t }, e);
      }
    }, {
      key: "setPassword",
      value: function setPassword(t, e) {
        return this.client.rest.methods.updateCurrentUser({ password: t }, e);
      }
    }, {
      key: "setAvatar",
      value: function setAvatar(t) {
        var _this29 = this;

        return t.startsWith("data:") ? this.client.rest.methods.updateCurrentUser({ avatar: t }) : this.client.resolver.resolveBuffer(t).then(function (t) {
          return _this29.client.rest.methods.updateCurrentUser({ avatar: t });
        });
      }
    }, {
      key: "setPresence",
      value: function setPresence(t) {
        var _this30 = this;

        return new Promise(function (e) {
          var n = _this30.localPresence.status || _this30.presence.status,
              i = _this30.localPresence.game,
              s = _this30.localPresence.afk || _this30.presence.afk;if (!i && _this30.presence.game && (i = { name: _this30.presence.game.name, type: _this30.presence.game.type, url: _this30.presence.game.url }), t.status) {
            if ("string" != typeof t.status) throw new TypeError("Status must be a string");n = t.status;
          }t.game && (i = t.game, i.url && (i.type = 1)), "undefined" != typeof t.afk && (s = t.afk), s = Boolean(s), _this30.localPresence = { status: n, game: i, afk: s }, _this30.localPresence.since = 0, _this30.localPresence.game = _this30.localPresence.game || null, _this30.client.ws.send({ op: 3, d: _this30.localPresence }), _this30.client._setPresence(_this30.id, _this30.localPresence), e(_this30);
        });
      }
    }, {
      key: "setStatus",
      value: function setStatus(t) {
        return this.setPresence({ status: t });
      }
    }, {
      key: "setGame",
      value: function setGame(t, e) {
        return this.setPresence({ game: { name: t, url: e } });
      }
    }, {
      key: "setAFK",
      value: function setAFK(t) {
        return this.setPresence({ afk: t });
      }
    }, {
      key: "fetchMentions",
      value: function fetchMentions() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { limit: 25, roles: true, everyone: true, guild: null };
        return this.client.rest.methods.fetchMentions(t);
      }
    }, {
      key: "addFriend",
      value: function addFriend(t) {
        return t = this.client.resolver.resolveUser(t), this.client.rest.methods.addFriend(t);
      }
    }, {
      key: "removeFriend",
      value: function removeFriend(t) {
        return t = this.client.resolver.resolveUser(t), this.client.rest.methods.removeFriend(t);
      }
    }, {
      key: "createGuild",
      value: function createGuild(t, e) {
        var _this31 = this;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return n ? n.startsWith("data:") ? this.client.rest.methods.createGuild({ name: t, icon: n, region: e }) : this.client.resolver.resolveBuffer(n).then(function (n) {
          return _this31.client.rest.methods.createGuild({ name: t, icon: n, region: e });
        }) : this.client.rest.methods.createGuild({ name: t, icon: n, region: e });
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(9),
      s = n(12),
      r = n(3);
  var o = function (_i8) {
    _inherits(o, _i8);

    function o(t, e) {
      var _this32;

      _classCallCheck(this, o);

      (_this32 = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, e)), _this32), _this32.type = "dm", _this32.messages = new r(), _this32._typing = new Map();return _this32;
    }

    _createClass(o, [{
      key: "setup",
      value: function setup(t) {
        _get(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "setup", this).call(this, t), this.recipient = this.client.dataManager.newUser(t.recipients[0]), this.lastMessageID = t.last_message_id;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.recipient.toString();
      }
    }, {
      key: "send",
      value: function send() {}
    }, {
      key: "sendMessage",
      value: function sendMessage() {}
    }, {
      key: "sendEmbed",
      value: function sendEmbed() {}
    }, {
      key: "sendFile",
      value: function sendFile() {}
    }, {
      key: "sendCode",
      value: function sendCode() {}
    }, {
      key: "fetchMessage",
      value: function fetchMessage() {}
    }, {
      key: "fetchMessages",
      value: function fetchMessages() {}
    }, {
      key: "fetchPinnedMessages",
      value: function fetchPinnedMessages() {}
    }, {
      key: "startTyping",
      value: function startTyping() {}
    }, {
      key: "stopTyping",
      value: function stopTyping() {}
    }, {
      key: "createCollector",
      value: function createCollector() {}
    }, {
      key: "awaitMessages",
      value: function awaitMessages() {}
    }, {
      key: "bulkDelete",
      value: function bulkDelete() {}
    }, {
      key: "_cacheMessage",
      value: function _cacheMessage() {}
    }, {
      key: "typing",
      get: function get() {}
    }, {
      key: "typingCount",
      get: function get() {}
    }]);

    return o;
  }(i);

  s.applyToClass(o, !0), t.exports = o;
}, function (t, e, n) {
  var i = n(9),
      s = n(12),
      r = n(3);
  var o = function (_i9) {
    _inherits(o, _i9);

    function o(t, e) {
      var _this33;

      _classCallCheck(this, o);

      (_this33 = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, e)), _this33), _this33.type = "group", _this33.messages = new r(), _this33._typing = new Map();return _this33;
    }

    _createClass(o, [{
      key: "setup",
      value: function setup(t) {
        if (_get(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "setup", this).call(this, t), this.name = t.name, this.icon = t.icon, this.ownerID = t.owner_id, this.recipients || (this.recipients = new r()), t.recipients) {
          var _iteratorNormalCompletion48 = true;
          var _didIteratorError48 = false;
          var _iteratorError48 = undefined;

          try {
            for (var _iterator48 = t.recipients[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
              var _e25 = _step48.value;
              var _t18 = this.client.dataManager.newUser(_e25);this.recipients.set(_t18.id, _t18);
            }
          } catch (err) {
            _didIteratorError48 = true;
            _iteratorError48 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion48 && _iterator48.return) {
                _iterator48.return();
              }
            } finally {
              if (_didIteratorError48) {
                throw _iteratorError48;
              }
            }
          }
        }this.lastMessageID = t.last_message_id;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = t && this.id === t.id && this.name === t.name && this.icon === t.icon && this.ownerID === t.ownerID;
        return e ? this.recipients.equals(t.recipients) : e;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.name;
      }
    }, {
      key: "send",
      value: function send() {}
    }, {
      key: "sendMessage",
      value: function sendMessage() {}
    }, {
      key: "sendEmbed",
      value: function sendEmbed() {}
    }, {
      key: "sendFile",
      value: function sendFile() {}
    }, {
      key: "sendCode",
      value: function sendCode() {}
    }, {
      key: "fetchMessage",
      value: function fetchMessage() {}
    }, {
      key: "fetchMessages",
      value: function fetchMessages() {}
    }, {
      key: "fetchPinnedMessages",
      value: function fetchPinnedMessages() {}
    }, {
      key: "startTyping",
      value: function startTyping() {}
    }, {
      key: "stopTyping",
      value: function stopTyping() {}
    }, {
      key: "createCollector",
      value: function createCollector() {}
    }, {
      key: "awaitMessages",
      value: function awaitMessages() {}
    }, {
      key: "bulkDelete",
      value: function bulkDelete() {}
    }, {
      key: "_cacheMessage",
      value: function _cacheMessage() {}
    }, {
      key: "owner",
      get: function get() {
        return this.client.users.get(this.ownerID);
      }
    }, {
      key: "typing",
      get: function get() {}
    }, {
      key: "typingCount",
      get: function get() {}
    }]);

    return o;
  }(i);

  s.applyToClass(o, !0), t.exports = o;
}, function (t, e, n) {
  var i = n(38),
      s = n(39),
      r = n(0);
  var o = function () {
    function o(t, e) {
      _classCallCheck(this, o);

      Object.defineProperty(this, "client", { value: t }), this.setup(e);
    }

    _createClass(o, [{
      key: "setup",
      value: function setup(t) {
        this.guild = this.client.guilds.get(t.guild.id) || new i(this.client, t.guild), this.code = t.code, this.temporary = t.temporary, this.maxAge = t.max_age, this.uses = t.uses, this.maxUses = t.max_uses, t.inviter && (this.inviter = this.client.dataManager.newUser(t.inviter)), this.channel = this.client.channels.get(t.channel.id) || new s(this.client, t.channel), this.createdTimestamp = new Date(t.created_at).getTime();
      }
    }, {
      key: "delete",
      value: function _delete() {
        return this.client.rest.methods.deleteInvite(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.url;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "expiresTimestamp",
      get: function get() {
        return this.createdTimestamp + 1e3 * this.maxAge;
      }
    }, {
      key: "expiresAt",
      get: function get() {
        return new Date(this.expiresTimestamp);
      }
    }, {
      key: "url",
      get: function get() {
        return r.Endpoints.inviteLink(this.code);
      }
    }]);

    return o;
  }();

  t.exports = o;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      Object.defineProperty(this, "client", { value: t.client }), this.message = t, this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.filename = t.filename, this.filesize = t.size, this.url = t.url, this.proxyURL = t.proxy_url, this.height = t.height, this.width = t.width;
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  var i = n(21).EventEmitter,
      s = n(3);
  var r = function (_i10) {
    _inherits(r, _i10);

    function r(t, e) {
      var _this34;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, r);

      (_this34 = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this)), _this34), _this34.channel = t, _this34.filter = e, _this34.options = n, _this34.ended = !1, _this34.collected = new s(), _this34.listener = function (t) {
        return _this34.verify(t);
      }, _this34.channel.client.on("message", _this34.listener), n.time && _this34.channel.client.setTimeout(function () {
        return _this34.stop("time");
      }, n.time);return _this34;
    }

    _createClass(r, [{
      key: "verify",
      value: function verify(t) {
        return (!this.channel || this.channel.id === t.channel.id) && !!this.filter(t, this) && (this.collected.set(t.id, t), this.emit("message", t, this), this.collected.size >= this.options.maxMatches ? this.stop("matchesLimit") : this.options.max && this.collected.size === this.options.max && this.stop("limit"), !0);
      }
    }, {
      key: "stop",
      value: function stop() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "user";
        this.ended || (this.ended = !0, this.channel.client.removeListener("message", this.listener), this.emit("end", this.collected, t));
      }
    }, {
      key: "next",
      get: function get() {
        var _this35 = this;

        return new Promise(function (t, e) {
          if (_this35.ended) return void e(_this35.collected);var n = function n() {
            _this35.removeListener("message", i), _this35.removeListener("end", s);
          },
              i = function i() {
            n(), t.apply(undefined, arguments);
          },
              s = function s() {
            n(), e.apply(undefined, arguments);
          };_this35.once("message", i), _this35.once("end", s);
        });
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      Object.defineProperty(this, "client", { value: t.client }), this.message = t, this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        if (this.type = t.type, this.title = t.title, this.description = t.description, this.url = t.url, this.color = t.color, this.fields = [], t.fields) {
          var _iteratorNormalCompletion49 = true;
          var _didIteratorError49 = false;
          var _iteratorError49 = undefined;

          try {
            for (var _iterator49 = t.fields[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
              var _e26 = _step49.value;
              this.fields.push(new o(this, _e26));
            }
          } catch (err) {
            _didIteratorError49 = true;
            _iteratorError49 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion49 && _iterator49.return) {
                _iterator49.return();
              }
            } finally {
              if (_didIteratorError49) {
                throw _iteratorError49;
              }
            }
          }
        }this.createdTimestamp = t.timestamp, this.thumbnail = t.thumbnail ? new i(this, t.thumbnail) : null, this.author = t.author ? new r(this, t.author) : null, this.provider = t.provider ? new s(this, t.provider) : null, this.footer = t.footer ? new a(this, t.footer) : null;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }, {
      key: "hexColor",
      get: function get() {
        var t = this.color.toString(16);for (; t.length < 6;) {
          t = "0" + t;
        }return "#" + t;
      }
    }]);

    return n;
  }();

  var i = function () {
    function i(t, e) {
      _classCallCheck(this, i);

      this.embed = t, this.setup(e);
    }

    _createClass(i, [{
      key: "setup",
      value: function setup(t) {
        this.url = t.url, this.proxyURL = t.proxy_url, this.height = t.height, this.width = t.width;
      }
    }]);

    return i;
  }();

  var s = function () {
    function s(t, e) {
      _classCallCheck(this, s);

      this.embed = t, this.setup(e);
    }

    _createClass(s, [{
      key: "setup",
      value: function setup(t) {
        this.name = t.name, this.url = t.url;
      }
    }]);

    return s;
  }();

  var r = function () {
    function r(t, e) {
      _classCallCheck(this, r);

      this.embed = t, this.setup(e);
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        this.name = t.name, this.url = t.url, this.iconURL = t.icon_url;
      }
    }]);

    return r;
  }();

  var o = function () {
    function o(t, e) {
      _classCallCheck(this, o);

      this.embed = t, this.setup(e);
    }

    _createClass(o, [{
      key: "setup",
      value: function setup(t) {
        this.name = t.name, this.value = t.value, this.inline = t.inline;
      }
    }]);

    return o;
  }();

  var a = function () {
    function a(t, e) {
      _classCallCheck(this, a);

      this.embed = t, this.setup(e);
    }

    _createClass(a, [{
      key: "setup",
      value: function setup(t) {
        this.text = t.text, this.iconURL = t.icon_url, this.proxyIconUrl = t.proxy_icon_url;
      }
    }]);

    return a;
  }();

  n.Thumbnail = i, n.Provider = s, n.Author = r, n.Field = o, n.Footer = a, t.exports = n;
}, function (t, e, n) {
  var i = n(3),
      s = n(10),
      r = n(18);
  var o = function () {
    function o(t, e, n, s) {
      _classCallCheck(this, o);

      this.message = t, this.me = s, this.count = n || 0, this.users = new i(), this._emoji = new r(this, e.name, e.id);
    }

    _createClass(o, [{
      key: "remove",
      value: function remove() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.message.client.user;
        var e = this.message;return t = this.message.client.resolver.resolveUserID(t), t ? e.client.rest.methods.removeMessageReaction(e, this.emoji.identifier, t) : Promise.reject("Couldn't resolve the user ID to remove from the reaction.");
      }
    }, {
      key: "fetchUsers",
      value: function fetchUsers() {
        var _this36 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        var e = this.message;return e.client.rest.methods.getMessageReactionUsers(e, this.emoji.identifier, t).then(function (t) {
          _this36.users = new i();var _iteratorNormalCompletion50 = true;
          var _didIteratorError50 = false;
          var _iteratorError50 = undefined;

          try {
            for (var _iterator50 = t[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
              var _e27 = _step50.value;
              var _t19 = _this36.message.client.dataManager.newUser(_e27);_this36.users.set(_t19.id, _t19);
            }
          } catch (err) {
            _didIteratorError50 = true;
            _iteratorError50 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion50 && _iterator50.return) {
                _iterator50.return();
              }
            } finally {
              if (_didIteratorError50) {
                throw _iteratorError50;
              }
            }
          }

          return _this36.count = _this36.users.size, t;
        });
      }
    }, {
      key: "emoji",
      get: function get() {
        if (this._emoji instanceof s) return this._emoji;if (this._emoji.id) {
          var _t20 = this.message.client.emojis;if (_t20.has(this._emoji.id)) {
            var _e28 = _t20.get(this._emoji.id);return this._emoji = _e28, _e28;
          }
        }return this._emoji;
      }
    }]);

    return o;
  }();

  t.exports = o;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      Object.defineProperty(this, "client", { value: t }), this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.name = t.name, this.description = t.description, this.icon = t.icon, this.iconURL = "https://cdn.discordapp.com/app-icons/" + this.id + "/" + this.icon + ".jpg", this.rpcOrigins = t.rpc_origins;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.name;
      }
    }, {
      key: "createdTimestamp",
      get: function get() {
        return this.id / 4194304 + 14200704e5;
      }
    }, {
      key: "createdAt",
      get: function get() {
        return new Date(this.createdTimestamp);
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      Object.defineProperty(this, "client", { value: t }), this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.name = t.name, this.icon = t.icon, this.splash = t.splash;
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  var i = n(0);
  var s = function () {
    function s(t, e) {
      _classCallCheck(this, s);

      Object.defineProperty(this, "client", { value: t }), this.setup(e);
    }

    _createClass(s, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.name = t.name, this.type = i.ChannelTypes.text === t.type ? "text" : "voice";
      }
    }]);

    return s;
  }();

  t.exports = s;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      Object.defineProperty(this, "channel", { value: t }), e && this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        this.id = t.id, this.type = t.type, this.deny = t.deny, this.allow = t.allow;
      }
    }, {
      key: "delete",
      value: function _delete() {
        return this.channel.client.rest.methods.deletePermissionOverwrites(this);
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  var i = n(13),
      s = n(12),
      r = n(3);
  var o = function (_i11) {
    _inherits(o, _i11);

    function o(t, e) {
      var _this37;

      _classCallCheck(this, o);

      (_this37 = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, e)), _this37), _this37.type = "text", _this37.messages = new r(), _this37._typing = new Map();return _this37;
    }

    _createClass(o, [{
      key: "setup",
      value: function setup(t) {
        _get(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "setup", this).call(this, t), this.topic = t.topic, this.lastMessageID = t.last_message_id;
      }
    }, {
      key: "fetchWebhooks",
      value: function fetchWebhooks() {
        return this.client.rest.methods.getChannelWebhooks(this);
      }
    }, {
      key: "createWebhook",
      value: function createWebhook(t, e) {
        var _this38 = this;

        return new Promise(function (n) {
          e.startsWith("data:") ? n(_this38.client.rest.methods.createWebhook(_this38, t, e)) : _this38.client.resolver.resolveBuffer(e).then(function (e) {
            return n(_this38.client.rest.methods.createWebhook(_this38, t, e));
          });
        });
      }
    }, {
      key: "send",
      value: function send() {}
    }, {
      key: "sendMessage",
      value: function sendMessage() {}
    }, {
      key: "sendEmbed",
      value: function sendEmbed() {}
    }, {
      key: "sendFile",
      value: function sendFile() {}
    }, {
      key: "sendCode",
      value: function sendCode() {}
    }, {
      key: "fetchMessage",
      value: function fetchMessage() {}
    }, {
      key: "fetchMessages",
      value: function fetchMessages() {}
    }, {
      key: "fetchPinnedMessages",
      value: function fetchPinnedMessages() {}
    }, {
      key: "startTyping",
      value: function startTyping() {}
    }, {
      key: "stopTyping",
      value: function stopTyping() {}
    }, {
      key: "createCollector",
      value: function createCollector() {}
    }, {
      key: "awaitMessages",
      value: function awaitMessages() {}
    }, {
      key: "bulkDelete",
      value: function bulkDelete() {}
    }, {
      key: "_cacheMessage",
      value: function _cacheMessage() {}
    }, {
      key: "members",
      get: function get() {
        var t = new r();var _iteratorNormalCompletion51 = true;
        var _didIteratorError51 = false;
        var _iteratorError51 = undefined;

        try {
          for (var _iterator51 = this.guild.members.values()[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
            var _e29 = _step51.value;
            this.permissionsFor(_e29).hasPermission("READ_MESSAGES") && t.set(_e29.id, _e29);
          }
        } catch (err) {
          _didIteratorError51 = true;
          _iteratorError51 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion51 && _iterator51.return) {
              _iterator51.return();
            }
          } finally {
            if (_didIteratorError51) {
              throw _iteratorError51;
            }
          }
        }

        return t;
      }
    }, {
      key: "typing",
      get: function get() {}
    }, {
      key: "typingCount",
      get: function get() {}
    }]);

    return o;
  }(i);

  s.applyToClass(o, !0), t.exports = o;
}, function (t, e, n) {
  var i = n(13),
      s = n(3);
  var r = function (_i12) {
    _inherits(r, _i12);

    function r(t, e) {
      var _this39;

      _classCallCheck(this, r);

      (_this39 = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, e)), _this39), _this39.members = new s(), _this39.type = "voice";return _this39;
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        _get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "setup", this).call(this, t), this.bitrate = t.bitrate, this.userLimit = t.user_limit;
      }
    }, {
      key: "setBitrate",
      value: function setBitrate(t) {
        return this.edit({ bitrate: t });
      }
    }, {
      key: "setUserLimit",
      value: function setUserLimit(t) {
        return this.edit({ userLimit: t });
      }
    }, {
      key: "join",
      value: function join() {
        return this.client.browser ? Promise.reject(new Error("Voice connections are not available in browsers.")) : this.client.voice.joinChannel(this);
      }
    }, {
      key: "leave",
      value: function leave() {
        if (!this.client.browser) {
          var _t21 = this.client.voice.connections.get(this.guild.id);_t21 && _t21.channel.id === this.id && _t21.disconnect();
        }
      }
    }, {
      key: "connection",
      get: function get() {
        var t = this.guild.voiceConnection;return t && t.channel.id === this.id ? t : null;
      }
    }, {
      key: "joinable",
      get: function get() {
        return !this.client.browser && this.permissionsFor(this.client.user).hasPermission("CONNECT");
      }
    }, {
      key: "speakable",
      get: function get() {
        return this.permissionsFor(this.client.user).hasPermission("SPEAK");
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    var _ref25 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref25$maxLength = _ref25.maxLength,
        maxLength = _ref25$maxLength === undefined ? 1950 : _ref25$maxLength,
        _ref25$char = _ref25.char,
        char = _ref25$char === undefined ? "\n" : _ref25$char,
        _ref25$prepend = _ref25.prepend,
        prepend = _ref25$prepend === undefined ? "" : _ref25$prepend,
        _ref25$append = _ref25.append,
        append = _ref25$append === undefined ? "" : _ref25$append;

    if (t.length <= maxLength) return t;var e = t.split(char);if (1 === e.length) throw new Error("Message exceeds the max length and contains no split characters.");var n = [""];var i = 0;for (var s = 0; s < e.length; s++) {
      n[i].length + e[s].length + 1 > maxLength && (n[i] += append, n.push(prepend), i++), n[i] += (n[i].length > 0 && n[i] !== prepend ? char : "") + e[s];
    }return n;
  };
}, function (t, e, n) {
  "use strict";
  function i(t, e) {
    if (e < 65537 && (t.subarray && o || !t.subarray && r)) return String.fromCharCode.apply(null, s.shrinkBuf(t, e));for (var n = "", i = 0; i < e; i++) {
      n += String.fromCharCode(t[i]);
    }return n;
  }var s = n(5),
      r = !0,
      o = !0;try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    r = !1;
  }try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    o = !1;
  }for (var a = new s.Buf8(256), h = 0; h < 256; h++) {
    a[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
  }a[254] = a[254] = 1, e.string2buf = function (t) {
    var e,
        n,
        i,
        r,
        o,
        a = t.length,
        h = 0;for (r = 0; r < a; r++) {
      n = t.charCodeAt(r), 55296 === (64512 & n) && r + 1 < a && (i = t.charCodeAt(r + 1), 56320 === (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), h += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    }for (e = new s.Buf8(h), o = 0, r = 0; o < h; r++) {
      n = t.charCodeAt(r), 55296 === (64512 & n) && r + 1 < a && (i = t.charCodeAt(r + 1), 56320 === (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), n < 128 ? e[o++] = n : n < 2048 ? (e[o++] = 192 | n >>> 6, e[o++] = 128 | 63 & n) : n < 65536 ? (e[o++] = 224 | n >>> 12, e[o++] = 128 | n >>> 6 & 63, e[o++] = 128 | 63 & n) : (e[o++] = 240 | n >>> 18, e[o++] = 128 | n >>> 12 & 63, e[o++] = 128 | n >>> 6 & 63, e[o++] = 128 | 63 & n);
    }return e;
  }, e.buf2binstring = function (t) {
    return i(t, t.length);
  }, e.binstring2buf = function (t) {
    for (var e = new s.Buf8(t.length), n = 0, i = e.length; n < i; n++) {
      e[n] = t.charCodeAt(n);
    }return e;
  }, e.buf2string = function (t, e) {
    var n,
        s,
        r,
        o,
        h = e || t.length,
        u = new Array(2 * h);for (s = 0, n = 0; n < h;) {
      if (r = t[n++], r < 128) u[s++] = r;else if (o = a[r], o > 4) u[s++] = 65533, n += o - 1;else {
        for (r &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < h;) {
          r = r << 6 | 63 & t[n++], o--;
        }o > 1 ? u[s++] = 65533 : r < 65536 ? u[s++] = r : (r -= 65536, u[s++] = 55296 | r >> 10 & 1023, u[s++] = 56320 | 1023 & r);
      }
    }return i(u, s);
  }, e.utf8border = function (t, e) {
    var n;for (e = e || t.length, e > t.length && (e = t.length), n = e - 1; n >= 0 && 128 === (192 & t[n]);) {
      n--;
    }return n < 0 ? e : 0 === n ? e : n + a[t[n]] > e ? n : e;
  };
}, function (t, e, n) {
  "use strict";
  function i(t, e, n, i) {
    for (var s = 65535 & t | 0, r = t >>> 16 & 65535 | 0, o = 0; 0 !== n;) {
      o = n > 2e3 ? 2e3 : n, n -= o;do {
        s = s + e[i++] | 0, r = r + s | 0;
      } while (--o);s %= 65521, r %= 65521;
    }return s | r << 16 | 0;
  }t.exports = i;
}, function (t, e, n) {
  "use strict";
  t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
}, function (t, e, n) {
  "use strict";
  function i() {
    for (var t, e = [], n = 0; n < 256; n++) {
      t = n;for (var i = 0; i < 8; i++) {
        t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
      }e[n] = t;
    }return e;
  }function s(t, e, n, i) {
    var s = r,
        o = i + n;t ^= -1;for (var a = i; a < o; a++) {
      t = t >>> 8 ^ s[255 & (t ^ e[a])];
    }return t ^ -1;
  }var r = i();t.exports = s;
}, function (t, e, n) {
  "use strict";
  function i() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }t.exports = i;
}, function (t, e) {}, function (t, e, n) {
  (function (e) {
    var i = n(23),
        s = n(49),
        r = n(25),
        o = n(0),
        a = n(53),
        h = n(6),
        u = n(11),
        c = n(17),
        l = n(9),
        d = n(14),
        f = n(10),
        p = n(18);
    var m = function () {
      function m(t) {
        _classCallCheck(this, m);

        this.client = t;
      }

      _createClass(m, [{
        key: "resolveUser",
        value: function resolveUser(t) {
          return t instanceof h ? t : "string" == typeof t ? this.client.users.get(t) || null : t instanceof d ? t.user : t instanceof u ? t.author : t instanceof c ? t.owner : null;
        }
      }, {
        key: "resolveUserID",
        value: function resolveUserID(t) {
          return t instanceof h || t instanceof d ? t.id : "string" == typeof t ? t || null : t instanceof u ? t.author.id : t instanceof c ? t.ownerID : null;
        }
      }, {
        key: "resolveGuild",
        value: function resolveGuild(t) {
          return t instanceof c ? t : "string" == typeof t ? this.client.guilds.get(t) || null : null;
        }
      }, {
        key: "resolveGuildMember",
        value: function resolveGuildMember(t, e) {
          return e instanceof d ? e : (t = this.resolveGuild(t), e = this.resolveUser(e), t && e ? t.members.get(e.id) || null : null);
        }
      }, {
        key: "resolveChannel",
        value: function resolveChannel(t) {
          return t instanceof l ? t : t instanceof u ? t.channel : t instanceof c ? t.channels.get(t.id) || null : "string" == typeof t ? this.client.channels.get(t) || null : null;
        }
      }, {
        key: "resolveInviteCode",
        value: function resolveInviteCode(t) {
          var e = /discord(?:app)?\.(?:gg|com\/invite)\/([a-z0-9]{5})/i,
              n = e.exec(t);return n && n[1] ? n[1] : t;
        }
      }, {
        key: "resolvePermission",
        value: function resolvePermission(t) {
          if ("string" == typeof t && (t = o.PermissionFlags[t]), "number" != typeof t || t < 1) throw new Error(o.Errors.NOT_A_PERMISSION);return t;
        }
      }, {
        key: "resolvePermissions",
        value: function resolvePermissions(t) {
          var e = 0;var _iteratorNormalCompletion52 = true;
          var _didIteratorError52 = false;
          var _iteratorError52 = undefined;

          try {
            for (var _iterator52 = t[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
              var _n24 = _step52.value;
              e |= this.resolvePermission(_n24);
            }
          } catch (err) {
            _didIteratorError52 = true;
            _iteratorError52 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion52 && _iterator52.return) {
                _iterator52.return();
              }
            } finally {
              if (_didIteratorError52) {
                throw _iteratorError52;
              }
            }
          }

          return e;
        }
      }, {
        key: "resolveString",
        value: function resolveString(t) {
          return "string" == typeof t ? t : t instanceof Array ? t.join("\n") : String(t);
        }
      }, {
        key: "resolveBase64",
        value: function resolveBase64(t) {
          return t instanceof e ? "data:image/jpg;base64," + t.toString("base64") : t;
        }
      }, {
        key: "resolveBuffer",
        value: function resolveBuffer(t) {
          var _this40 = this;

          return t instanceof e ? Promise.resolve(t) : this.client.browser && t instanceof ArrayBuffer ? Promise.resolve(a(t)) : "string" == typeof t ? new Promise(function (n, o) {
            if (/^https?:\/\//.test(t)) {
              var _i13 = r.get(t).set("Content-Type", "blob");_this40.client.browser && _i13.responseType("arraybuffer"), _i13.end(function (t, i) {
                return t ? o(t) : _this40.client.browser ? n(a(i.xhr.response)) : i.body instanceof e ? n(i.body) : o(new TypeError("The response body isn't a Buffer."));
              });
            } else {
              (function () {
                var e = i.resolve(t);s.stat(e, function (t, i) {
                  if (t && o(t), !i || !i.isFile()) throw new Error("The file could not be found: " + e);s.readFile(e, function (t, e) {
                    t ? o(t) : n(e);
                  });
                });
              })();
            }
          }) : Promise.reject(new TypeError("The resource must be a string or Buffer."));
        }
      }, {
        key: "resolveEmojiIdentifier",
        value: function resolveEmojiIdentifier(t) {
          return t instanceof f || t instanceof p ? t.identifier : "string" != typeof t || t.includes("%") ? null : encodeURIComponent(t);
        }
      }]);

      return m;
    }();

    t.exports = m;
  }).call(e, n(20).Buffer);
}, function (t, e, n) {
  var i = n(114),
      s = n(111),
      r = n(113),
      o = n(112),
      a = n(110),
      h = n(0);
  var u = function () {
    function u(t) {
      _classCallCheck(this, u);

      this.client = t, this.handlers = {}, this.userAgentManager = new i(this), this.methods = new s(this), this.rateLimitedEndpoints = {}, this.globallyRateLimited = !1;
    }

    _createClass(u, [{
      key: "push",
      value: function push(t, e) {
        return new Promise(function (n, i) {
          t.push({ request: e, resolve: n, reject: i });
        });
      }
    }, {
      key: "getRequestHandler",
      value: function getRequestHandler() {
        switch (this.client.options.apiRequestMethod) {case "sequential":
            return r;case "burst":
            return o;default:
            throw new Error(h.Errors.INVALID_RATE_LIMIT_METHOD);}
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(t, e, n, i, s) {
        var r = new a(this, t, e, n, i, s);if (!this.handlers[r.route]) {
          var _t22 = this.getRequestHandler();this.handlers[r.route] = new _t22(this, r.route);
        }return this.push(this.handlers[r.route], r);
      }
    }]);

    return u;
  }();

  t.exports = u;
}, function (t, e) {
  var n = function () {
    function n(t) {
      _classCallCheck(this, n);

      this.restManager = t, this.queue = [];
    }

    _createClass(n, [{
      key: "push",
      value: function push(t) {
        this.queue.push(t);
      }
    }, {
      key: "handle",
      value: function handle() {}
    }, {
      key: "globalLimit",
      get: function get() {
        return this.restManager.globallyRateLimited;
      },
      set: function set(t) {
        this.restManager.globallyRateLimited = t;
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      var n = new e(t.byteLength),
          i = new Uint8Array(t);for (var s = 0; s < n.length; ++s) {
        n[s] = i[s];
      }return n;
    }function i(t) {
      var e = new ArrayBuffer(2 * t.length),
          n = new Uint16Array(e);for (var i = 0, s = t.length; i < s; i++) {
        n[i] = t.charCodeAt(i);
      }return e;
    }t.exports = function (t) {
      return "string" == typeof t && (t = i(t)), n(t);
    };
  }).call(e, n(20).Buffer);
}, function (t, e) {
  t.exports = function t(e, n) {
    if (!n) return e;for (var i in e) {
      ({}).hasOwnProperty.call(n, i) ? n[i] === Object(n[i]) && (n[i] = t(e[i], n[i])) : n[i] = e[i];
    }return n;
  };
}, function (module, exports, __webpack_require__) {
  (function (process) {
    var EventEmitter = __webpack_require__(21).EventEmitter,
        mergeDefault = __webpack_require__(54),
        Constants = __webpack_require__(0),
        RESTManager = __webpack_require__(51),
        ClientDataManager = __webpack_require__(81),
        ClientManager = __webpack_require__(82),
        ClientDataResolver = __webpack_require__(50),
        ClientVoiceManager = __webpack_require__(156),
        WebSocketManager = __webpack_require__(115),
        ActionsManager = __webpack_require__(83),
        Collection = __webpack_require__(3),
        Presence = __webpack_require__(7).Presence,
        ShardClientUtil = __webpack_require__(155);
    var Client = function (_EventEmitter) {
      _inherits(Client, _EventEmitter);

      function Client() {
        var _this41;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Client);

        (_this41 = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this)), _this41), !t.shardId && "SHARD_ID" in process.env && (t.shardId = Number(process.env.SHARD_ID)), !t.shardCount && "SHARD_COUNT" in process.env && (t.shardCount = Number(process.env.SHARD_COUNT)), _this41.options = mergeDefault(Constants.DefaultOptions, t), _this41._validateOptions(), _this41.rest = new RESTManager(_this41), _this41.dataManager = new ClientDataManager(_this41), _this41.manager = new ClientManager(_this41), _this41.ws = new WebSocketManager(_this41), _this41.resolver = new ClientDataResolver(_this41), _this41.actions = new ActionsManager(_this41), _this41.voice = _this41.browser ? null : new ClientVoiceManager(_this41), _this41.shard = process.send ? ShardClientUtil.singleton(_this41) : null, _this41.users = new Collection(), _this41.guilds = new Collection(), _this41.channels = new Collection(), _this41.presences = new Collection(), !_this41.token && "CLIENT_TOKEN" in process.env ? _this41.token = process.env.CLIENT_TOKEN : _this41.token = null, _this41.user = null, _this41.readyAt = null, _this41.pings = [], _this41._pingTimestamp = 0, _this41._timeouts = new Set(), _this41._intervals = new Set(), _this41.options.messageSweepInterval > 0 && _this41.setInterval(_this41.sweepMessages.bind(_this41), 1e3 * _this41.options.messageSweepInterval);return _this41;
      }

      _createClass(Client, [{
        key: "login",
        value: function login(t) {
          return this.rest.methods.login(t);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _iteratorNormalCompletion53 = true;
          var _didIteratorError53 = false;
          var _iteratorError53 = undefined;

          try {
            for (var _iterator53 = this._timeouts[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
              var t = _step53.value;
              clearTimeout(t);
            }
          } catch (err) {
            _didIteratorError53 = true;
            _iteratorError53 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion53 && _iterator53.return) {
                _iterator53.return();
              }
            } finally {
              if (_didIteratorError53) {
                throw _iteratorError53;
              }
            }
          }

          var _iteratorNormalCompletion54 = true;
          var _didIteratorError54 = false;
          var _iteratorError54 = undefined;

          try {
            for (var _iterator54 = this._intervals[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
              var e = _step54.value;
              clearInterval(e);
            }
          } catch (err) {
            _didIteratorError54 = true;
            _iteratorError54 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion54 && _iterator54.return) {
                _iterator54.return();
              }
            } finally {
              if (_didIteratorError54) {
                throw _iteratorError54;
              }
            }
          }

          return this._timeouts.clear(), this._intervals.clear(), this.manager.destroy();
        }
      }, {
        key: "syncGuilds",
        value: function syncGuilds() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.guilds;
          this.user.bot || this.ws.send({ op: 12, d: t instanceof Collection ? t.keyArray() : t.map(function (t) {
              return t.id;
            }) });
        }
      }, {
        key: "fetchUser",
        value: function fetchUser(t) {
          return this.users.has(t) ? Promise.resolve(this.users.get(t)) : this.rest.methods.getUser(t);
        }
      }, {
        key: "fetchInvite",
        value: function fetchInvite(t) {
          var e = this.resolver.resolveInviteCode(t);return this.rest.methods.getInvite(e);
        }
      }, {
        key: "fetchWebhook",
        value: function fetchWebhook(t, e) {
          return this.rest.methods.getWebhook(t, e);
        }
      }, {
        key: "sweepMessages",
        value: function sweepMessages() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.messageCacheLifetime;
          if ("number" != typeof t || isNaN(t)) throw new TypeError("The lifetime must be a number.");if (t <= 0) return this.emit("debug", "Didn't sweep messages - lifetime is unlimited"), -1;var e = 1e3 * t,
              n = Date.now();var i = 0,
              s = 0;var _iteratorNormalCompletion55 = true;
          var _didIteratorError55 = false;
          var _iteratorError55 = undefined;

          try {
            for (var _iterator55 = this.channels.values()[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
              var r = _step55.value;
              if (r.messages) {
                i++;var _iteratorNormalCompletion56 = true;
                var _didIteratorError56 = false;
                var _iteratorError56 = undefined;

                try {
                  for (var _iterator56 = r.messages.values()[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
                    var _t23 = _step56.value;
                    n - (_t23.editedTimestamp || _t23.createdTimestamp) > e && (r.messages.delete(_t23.id), s++);
                  }
                } catch (err) {
                  _didIteratorError56 = true;
                  _iteratorError56 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion56 && _iterator56.return) {
                      _iterator56.return();
                    }
                  } finally {
                    if (_didIteratorError56) {
                      throw _iteratorError56;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError55 = true;
            _iteratorError55 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion55 && _iterator55.return) {
                _iterator55.return();
              }
            } finally {
              if (_didIteratorError55) {
                throw _iteratorError55;
              }
            }
          }

          return this.emit("debug", "Swept " + s + " messages older than " + t + " seconds in " + i + " text-based channels"), s;
        }
      }, {
        key: "fetchApplication",
        value: function fetchApplication() {
          if (!this.user.bot) throw new Error(Constants.Errors.NO_BOT_ACCOUNT);return this.rest.methods.getMyApplication();
        }
      }, {
        key: "generateInvite",
        value: function generateInvite(t) {
          return t ? t instanceof Array && (t = this.resolver.resolvePermissions(t)) : t = 0, this.fetchApplication().then(function (e) {
            return "https://discordapp.com/oauth2/authorize?client_id=" + e.id + "&permissions=" + t + "&scope=bot";
          });
        }
      }, {
        key: "setTimeout",
        value: function (_setTimeout) {
          function setTimeout(_x43, _x44) {
            return _setTimeout.apply(this, arguments);
          }

          setTimeout.toString = function () {
            return _setTimeout.toString();
          };

          return setTimeout;
        }(function (t, e) {
          var _this42 = this;

          for (var _len2 = arguments.length, n = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            n[_key2 - 2] = arguments[_key2];
          }

          var i = setTimeout.apply(undefined, [function () {
            t(), _this42._timeouts.delete(i);
          }, e].concat(n));return this._timeouts.add(i), i;
        })
      }, {
        key: "clearTimeout",
        value: function (_clearTimeout) {
          function clearTimeout(_x45) {
            return _clearTimeout.apply(this, arguments);
          }

          clearTimeout.toString = function () {
            return _clearTimeout.toString();
          };

          return clearTimeout;
        }(function (t) {
          clearTimeout(t), this._timeouts.delete(t);
        })
      }, {
        key: "setInterval",
        value: function (_setInterval) {
          function setInterval(_x46, _x47) {
            return _setInterval.apply(this, arguments);
          }

          setInterval.toString = function () {
            return _setInterval.toString();
          };

          return setInterval;
        }(function (t, e) {
          for (var _len3 = arguments.length, n = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            n[_key3 - 2] = arguments[_key3];
          }

          var i = setInterval.apply(undefined, [t, e].concat(n));return this._intervals.add(i), i;
        })
      }, {
        key: "clearInterval",
        value: function (_clearInterval) {
          function clearInterval(_x48) {
            return _clearInterval.apply(this, arguments);
          }

          clearInterval.toString = function () {
            return _clearInterval.toString();
          };

          return clearInterval;
        }(function (t) {
          clearInterval(t), this._intervals.delete(t);
        })
      }, {
        key: "_pong",
        value: function _pong(t) {
          this.pings.unshift(Date.now() - t), this.pings.length > 3 && (this.pings.length = 3), this.ws.lastHeartbeatAck = !0;
        }
      }, {
        key: "_setPresence",
        value: function _setPresence(t, e) {
          return this.presences.get(t) ? void this.presences.get(t).update(e) : void this.presences.set(t, new Presence(e));
        }
      }, {
        key: "_eval",
        value: function _eval(script) {
          return eval(script);
        }
      }, {
        key: "_validateOptions",
        value: function _validateOptions() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;
          if ("number" != typeof t.shardCount || isNaN(t.shardCount)) throw new TypeError("The shardCount option must be a number.");if ("number" != typeof t.shardId || isNaN(t.shardId)) throw new TypeError("The shardId option must be a number.");if (t.shardCount < 0) throw new RangeError("The shardCount option must be at least 0.");if (t.shardId < 0) throw new RangeError("The shardId option must be at least 0.");if (0 !== t.shardId && t.shardId >= t.shardCount) throw new RangeError("The shardId option must be less than shardCount.");if ("number" != typeof t.messageCacheMaxSize || isNaN(t.messageCacheMaxSize)) throw new TypeError("The messageCacheMaxSize option must be a number.");if ("number" != typeof t.messageCacheLifetime || isNaN(t.messageCacheLifetime)) throw new TypeError("The messageCacheLifetime option must be a number.");if ("number" != typeof t.messageSweepInterval || isNaN(t.messageSweepInterval)) throw new TypeError("The messageSweepInterval option must be a number.");if ("boolean" != typeof t.fetchAllMembers) throw new TypeError("The fetchAllMembers option must be a boolean.");if ("boolean" != typeof t.disableEveryone) throw new TypeError("The disableEveryone option must be a boolean.");if ("number" != typeof t.restWsBridgeTimeout || isNaN(t.restWsBridgeTimeout)) throw new TypeError("The restWsBridgeTimeout option must be a number.");if (!(t.disabledEvents instanceof Array)) throw new TypeError("The disabledEvents option must be an Array.");
        }
      }, {
        key: "status",
        get: function get() {
          return this.ws.status;
        }
      }, {
        key: "uptime",
        get: function get() {
          return this.readyAt ? Date.now() - this.readyAt : null;
        }
      }, {
        key: "ping",
        get: function get() {
          return this.pings.reduce(function (t, e) {
            return t + e;
          }, 0) / this.pings.length;
        }
      }, {
        key: "voiceConnections",
        get: function get() {
          return this.browser ? new Collection() : this.voice.connections;
        }
      }, {
        key: "emojis",
        get: function get() {
          var t = new Collection();var _iteratorNormalCompletion57 = true;
          var _didIteratorError57 = false;
          var _iteratorError57 = undefined;

          try {
            for (var _iterator57 = this.guilds.values()[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
              var e = _step57.value;
              var _iteratorNormalCompletion58 = true;
              var _didIteratorError58 = false;
              var _iteratorError58 = undefined;

              try {
                for (var _iterator58 = e.emojis.values()[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
                  var _n25 = _step58.value;
                  t.set(_n25.id, _n25);
                }
              } catch (err) {
                _didIteratorError58 = true;
                _iteratorError58 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion58 && _iterator58.return) {
                    _iterator58.return();
                  }
                } finally {
                  if (_didIteratorError58) {
                    throw _iteratorError58;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError57 = true;
            _iteratorError57 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion57 && _iterator57.return) {
                _iterator57.return();
              }
            } finally {
              if (_didIteratorError57) {
                throw _iteratorError57;
              }
            }
          }

          return t;
        }
      }, {
        key: "readyTimestamp",
        get: function get() {
          return this.readyAt ? this.readyAt.getTime() : null;
        }
      }, {
        key: "browser",
        get: function get() {
          return "undefined" != typeof window;
        }
      }]);

      return Client;
    }(EventEmitter);

    module.exports = Client;
  }).call(exports, __webpack_require__(24));
}, function (t, e, n) {
  var i = n(19),
      s = n(51),
      r = n(50),
      o = n(54),
      a = n(0);
  var h = function (_i14) {
    _inherits(h, _i14);

    function h(t, e, n) {
      var _this43;

      _classCallCheck(this, h);

      (_this43 = _possibleConstructorReturn(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, null, t, e)), _this43), _this43.options = o(a.DefaultOptions, n), _this43.rest = new s(_this43), _this43.resolver = new r(_this43);return _this43;
    }

    return h;
  }(i);

  t.exports = h;
}, function (t, e, n) {
  t.exports = { Client: n(55), WebhookClient: n(56), Shard: n(60), ShardClientUtil: n(61), ShardingManager: n(62), Collection: n(3), splitMessage: n(43), escapeMarkdown: n(15), fetchRecommendedShards: n(59), Channel: n(9), ClientOAuth2Application: n(28), ClientUser: n(29), DMChannel: n(30), Emoji: n(10), EvaluatedPermissions: n(16), Game: n(7).Game, GroupDMChannel: n(31), Guild: n(17), GuildChannel: n(13), GuildMember: n(14), Invite: n(32), Message: n(11), MessageAttachment: n(33), MessageCollector: n(34), MessageEmbed: n(35), MessageReaction: n(36), OAuth2Application: n(37), PartialGuild: n(38), PartialGuildChannel: n(39), PermissionOverwrites: n(40), Presence: n(7).Presence, ReactionEmoji: n(18), RichEmbed: n(58), Role: n(8), TextChannel: n(41), User: n(6), VoiceChannel: n(42), Webhook: n(19), version: n(27).version, Constants: n(0) }, "undefined" != typeof window && (window.Discord = t.exports);
}, function (t, e) {
  function n(t) {
    return "string" == typeof t ? t : t instanceof Array ? t.join("\n") : String(t);
  }
  var i = function () {
    function i() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, i);

      this.title = t.title, this.description = t.description, this.url = t.url, this.color = t.color, this.author = t.author, this.timestamp = t.timestamp, this.fields = t.fields || [], this.thumbnail = t.thumbnail, this.image = t.image, this.footer = t.footer;
    }

    _createClass(i, [{
      key: "setTitle",
      value: function setTitle(t) {
        if (t = n(t), t.length > 256) throw new RangeError("RichEmbed titles may not exceed 256 characters.");return this.title = t, this;
      }
    }, {
      key: "setDescription",
      value: function setDescription(t) {
        if (t = n(t), t.length > 2048) throw new RangeError("RichEmbed descriptions may not exceed 2048 characters.");return this.description = t, this;
      }
    }, {
      key: "setURL",
      value: function setURL(t) {
        return this.url = t, this;
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        var e = 10;if (t instanceof Array ? t = (t[0] << 16) + (t[1] << 8) + t[2] : "string" == typeof t && t.startsWith("#") && (e = 16, t = t.replace("#", "")), t = parseInt(t, e), t < 0 || t > 16777215) throw new RangeError("RichEmbed color must be within the range 0 - 16777215 (0xFFFFFF).");if (t && isNaN(t)) throw new TypeError("Unable to convert RichEmbed color to a number.");return this.color = t, this;
      }
    }, {
      key: "setAuthor",
      value: function setAuthor(t, e, i) {
        return this.author = { name: n(t), icon_url: e, url: i }, this;
      }
    }, {
      key: "setTimestamp",
      value: function setTimestamp() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        return this.timestamp = t, this;
      }
    }, {
      key: "addField",
      value: function addField(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (this.fields.length >= 25) throw new RangeError("RichEmbeds may not exceed 25 fields.");if (t = n(t), t.length > 256) throw new RangeError("RichEmbed field names may not exceed 256 characters.");if (e = n(e), e.length > 1024) throw new RangeError("RichEmbed field values may not exceed 1024 characters.");return this.fields.push({ name: String(t), value: e, inline: i }), this;
      }
    }, {
      key: "setThumbnail",
      value: function setThumbnail(t) {
        return this.thumbnail = { url: t }, this;
      }
    }, {
      key: "setImage",
      value: function setImage(t) {
        return this.image = { url: t }, this;
      }
    }, {
      key: "setFooter",
      value: function setFooter(t, e) {
        if (t = n(t), t.length > 2048) throw new RangeError("RichEmbed footer text may not exceed 2048 characters.");return this.footer = { text: t, icon_url: e }, this;
      }
    }]);

    return i;
  }();

  t.exports = i;
}, function (t, e, n) {
  var i = n(25),
      s = n(0).Endpoints.botGateway;t.exports = function (t) {
    return new Promise(function (e, n) {
      if (!t) throw new Error("A token must be provided.");i.get(s).set("Authorization", "Bot " + t.replace(/^Bot\s*/i, "")).end(function (t, i) {
        t && n(t), e(i.body.shards);
      });
    });
  };
}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e, n) {
  "use strict";
  function i(t) {
    var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
  }function s(t) {
    return 3 * t.length / 4 - i(t);
  }function r(t) {
    var e,
        n,
        s,
        r,
        o,
        a,
        h = t.length;o = i(t), a = new l(3 * h / 4 - o), s = o > 0 ? h - 4 : h;var u = 0;for (e = 0, n = 0; e < s; e += 4, n += 3) {
      r = c[t.charCodeAt(e)] << 18 | c[t.charCodeAt(e + 1)] << 12 | c[t.charCodeAt(e + 2)] << 6 | c[t.charCodeAt(e + 3)], a[u++] = r >> 16 & 255, a[u++] = r >> 8 & 255, a[u++] = 255 & r;
    }return 2 === o ? (r = c[t.charCodeAt(e)] << 2 | c[t.charCodeAt(e + 1)] >> 4, a[u++] = 255 & r) : 1 === o && (r = c[t.charCodeAt(e)] << 10 | c[t.charCodeAt(e + 1)] << 4 | c[t.charCodeAt(e + 2)] >> 2, a[u++] = r >> 8 & 255, a[u++] = 255 & r), a;
  }function o(t) {
    return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
  }function a(t, e, n) {
    for (var i, s = [], r = e; r < n; r += 3) {
      i = (t[r] << 16) + (t[r + 1] << 8) + t[r + 2], s.push(o(i));
    }return s.join("");
  }function h(t) {
    for (var e, n = t.length, i = n % 3, s = "", r = [], o = 16383, h = 0, c = n - i; h < c; h += o) {
      r.push(a(t, h, h + o > c ? c : h + o));
    }return 1 === i ? (e = t[n - 1], s += u[e >> 2], s += u[e << 4 & 63], s += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], s += u[e >> 10], s += u[e >> 4 & 63], s += u[e << 2 & 63], s += "="), r.push(s), r.join("");
  }e.byteLength = s, e.toByteArray = r, e.fromByteArray = h;for (var u = [], c = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, p = d.length; f < p; ++f) {
    u[f] = d[f], c[d.charCodeAt(f)] = f;
  }c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63;
}, function (t, e, n) {
  function i(t) {
    if (t) return s(t);
  }function s(t) {
    for (var e in i.prototype) {
      t[e] = i.prototype[e];
    }return t;
  }t.exports = i, i.prototype.on = i.prototype.addEventListener = function (t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
  }, i.prototype.once = function (t, e) {
    function n() {
      this.off(t, n), e.apply(this, arguments);
    }return n.fn = e, this.on(t, n), this;
  }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function (t, e) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var i, s = 0; s < n.length; s++) {
      if (i = n[s], i === e || i.fn === e) {
        n.splice(s, 1);break;
      }
    }return this;
  }, i.prototype.emit = function (t) {
    this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
        n = this._callbacks["$" + t];if (n) {
      n = n.slice(0);for (var i = 0, s = n.length; i < s; ++i) {
        n[i].apply(this, e);
      }
    }return this;
  }, i.prototype.listeners = function (t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
  }, i.prototype.hasListeners = function (t) {
    return !!this.listeners(t).length;
  };
}, function (t, e) {
  e.read = function (t, e, n, i, s) {
    var r,
        o,
        a = 8 * s - i - 1,
        h = (1 << a) - 1,
        u = h >> 1,
        c = -7,
        l = n ? s - 1 : 0,
        d = n ? -1 : 1,
        f = t[e + l];for (l += d, r = f & (1 << -c) - 1, f >>= -c, c += a; c > 0; r = 256 * r + t[e + l], l += d, c -= 8) {}for (o = r & (1 << -c) - 1, r >>= -c, c += i; c > 0; o = 256 * o + t[e + l], l += d, c -= 8) {}if (0 === r) r = 1 - u;else {
      if (r === h) return o ? NaN : (f ? -1 : 1) * (1 / 0);o += Math.pow(2, i), r -= u;
    }return (f ? -1 : 1) * o * Math.pow(2, r - i);
  }, e.write = function (t, e, n, i, s, r) {
    var o,
        a,
        h,
        u = 8 * r - s - 1,
        c = (1 << u) - 1,
        l = c >> 1,
        d = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        f = i ? 0 : r - 1,
        p = i ? 1 : -1,
        m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = c) : (o = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -o)) < 1 && (o--, h *= 2), e += o + l >= 1 ? d / h : d * Math.pow(2, 1 - l), e * h >= 2 && (o++, h /= 2), o + l >= c ? (a = 0, o = c) : o + l >= 1 ? (a = (e * h - 1) * Math.pow(2, s), o += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, s), o = 0)); s >= 8; t[n + f] = 255 & a, f += p, a /= 256, s -= 8) {}for (o = o << s | a, u += s; u > 0; t[n + f] = 255 & o, f += p, o /= 256, u -= 8) {}t[n + f - p] |= 128 * m;
  };
}, function (t, e) {
  var n = {}.toString;t.exports = Array.isArray || function (t) {
    return "[object Array]" == n.call(t);
  };
}, function (t, e, n) {
  "use strict";
  var i = n(5).assign,
      s = n(68),
      r = n(69),
      o = n(46),
      a = {};i(a, s, r, o), t.exports = a;
}, function (t, e, n) {
  "use strict";
  function i(t) {
    if (!(this instanceof i)) return new i(t);this.options = h.assign({ level: E, method: v, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: w, to: "" }, t || {});var e = this.options;e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;var n = a.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);if (n !== m) throw new Error(c[n]);if (e.header && a.deflateSetHeader(this.strm, e.header), e.dictionary) {
      var s;if (s = "string" == typeof e.dictionary ? u.string2buf(e.dictionary) : "[object ArrayBuffer]" === d.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, n = a.deflateSetDictionary(this.strm, s), n !== m) throw new Error(c[n]);this._dict_set = !0;
    }
  }function s(t, e) {
    var n = new i(e);if (n.push(t, !0), n.err) throw n.msg || c[n.err];return n.result;
  }function r(t, e) {
    return e = e || {}, e.raw = !0, s(t, e);
  }function o(t, e) {
    return e = e || {}, e.gzip = !0, s(t, e);
  }var a = n(70),
      h = n(5),
      u = n(44),
      c = n(22),
      l = n(48),
      d = Object.prototype.toString,
      f = 0,
      p = 4,
      m = 0,
      g = 1,
      _ = 2,
      E = -1,
      w = 0,
      v = 8;i.prototype.push = function (t, e) {
    var n,
        i,
        s = this.strm,
        r = this.options.chunkSize;if (this.ended) return !1;i = e === ~~e ? e : e === !0 ? p : f, "string" == typeof t ? s.input = u.string2buf(t) : "[object ArrayBuffer]" === d.call(t) ? s.input = new Uint8Array(t) : s.input = t, s.next_in = 0, s.avail_in = s.input.length;do {
      if (0 === s.avail_out && (s.output = new h.Buf8(r), s.next_out = 0, s.avail_out = r), n = a.deflate(s, i), n !== g && n !== m) return this.onEnd(n), this.ended = !0, !1;0 !== s.avail_out && (0 !== s.avail_in || i !== p && i !== _) || ("string" === this.options.to ? this.onData(u.buf2binstring(h.shrinkBuf(s.output, s.next_out))) : this.onData(h.shrinkBuf(s.output, s.next_out)));
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== g);return i === p ? (n = a.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === m) : i !== _ || (this.onEnd(m), s.avail_out = 0, !0);
  }, i.prototype.onData = function (t) {
    this.chunks.push(t);
  }, i.prototype.onEnd = function (t) {
    t === m && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = h.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
  }, e.Deflate = i, e.deflate = s, e.deflateRaw = r, e.gzip = o;
}, function (t, e, n) {
  "use strict";
  function i(t) {
    if (!(this instanceof i)) return new i(t);this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t || {});var e = this.options;e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 === (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;var n = o.inflateInit2(this.strm, e.windowBits);if (n !== u.Z_OK) throw new Error(c[n]);this.header = new d(), o.inflateGetHeader(this.strm, this.header);
  }function s(t, e) {
    var n = new i(e);if (n.push(t, !0), n.err) throw n.msg || c[n.err];return n.result;
  }function r(t, e) {
    return e = e || {}, e.raw = !0, s(t, e);
  }var o = n(73),
      a = n(5),
      h = n(44),
      u = n(46),
      c = n(22),
      l = n(48),
      d = n(71),
      f = Object.prototype.toString;i.prototype.push = function (t, e) {
    var n,
        i,
        s,
        r,
        c,
        l,
        d = this.strm,
        p = this.options.chunkSize,
        m = this.options.dictionary,
        g = !1;if (this.ended) return !1;i = e === ~~e ? e : e === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, "string" == typeof t ? d.input = h.binstring2buf(t) : "[object ArrayBuffer]" === f.call(t) ? d.input = new Uint8Array(t) : d.input = t, d.next_in = 0, d.avail_in = d.input.length;do {
      if (0 === d.avail_out && (d.output = new a.Buf8(p), d.next_out = 0, d.avail_out = p), n = o.inflate(d, u.Z_NO_FLUSH), n === u.Z_NEED_DICT && m && (l = "string" == typeof m ? h.string2buf(m) : "[object ArrayBuffer]" === f.call(m) ? new Uint8Array(m) : m, n = o.inflateSetDictionary(this.strm, l)), n === u.Z_BUF_ERROR && g === !0 && (n = u.Z_OK, g = !1), n !== u.Z_STREAM_END && n !== u.Z_OK) return this.onEnd(n), this.ended = !0, !1;d.next_out && (0 !== d.avail_out && n !== u.Z_STREAM_END && (0 !== d.avail_in || i !== u.Z_FINISH && i !== u.Z_SYNC_FLUSH) || ("string" === this.options.to ? (s = h.utf8border(d.output, d.next_out), r = d.next_out - s, c = h.buf2string(d.output, s), d.next_out = r, d.avail_out = p - r, r && a.arraySet(d.output, d.output, s, r, 0), this.onData(c)) : this.onData(a.shrinkBuf(d.output, d.next_out)))), 0 === d.avail_in && 0 === d.avail_out && (g = !0);
    } while ((d.avail_in > 0 || 0 === d.avail_out) && n !== u.Z_STREAM_END);return n === u.Z_STREAM_END && (i = u.Z_FINISH), i === u.Z_FINISH ? (n = o.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === u.Z_OK) : i !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), d.avail_out = 0, !0);
  }, i.prototype.onData = function (t) {
    this.chunks.push(t);
  }, i.prototype.onEnd = function (t) {
    t === u.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
  }, e.Inflate = i, e.inflate = s, e.inflateRaw = r, e.ungzip = s;
}, function (t, e, n) {
  "use strict";
  function i(t, e) {
    return t.msg = U[e], e;
  }function s(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }function r(t) {
    for (var e = t.length; --e >= 0;) {
      t[e] = 0;
    }
  }function o(t) {
    var e = t.state,
        n = e.pending;n > t.avail_out && (n = t.avail_out), 0 !== n && (I.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0));
  }function a(t, e) {
    C._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, o(t.strm);
  }function h(t, e) {
    t.pending_buf[t.pending++] = e;
  }function u(t, e) {
    t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
  }function c(t, e, n, i) {
    var s = t.avail_in;return s > i && (s = i), 0 === s ? 0 : (t.avail_in -= s, I.arraySet(e, t.input, t.next_in, s, n), 1 === t.state.wrap ? t.adler = x(t.adler, e, s, n) : 2 === t.state.wrap && (t.adler = L(t.adler, e, s, n)), t.next_in += s, t.total_in += s, s);
  }function l(t, e) {
    var n,
        i,
        s = t.max_chain_length,
        r = t.strstart,
        o = t.prev_length,
        a = t.nice_match,
        h = t.strstart > t.w_size - lt ? t.strstart - (t.w_size - lt) : 0,
        u = t.window,
        c = t.w_mask,
        l = t.prev,
        d = t.strstart + ct,
        f = u[r + o - 1],
        p = u[r + o];t.prev_length >= t.good_match && (s >>= 2), a > t.lookahead && (a = t.lookahead);do {
      if (n = e, u[n + o] === p && u[n + o - 1] === f && u[n] === u[r] && u[++n] === u[r + 1]) {
        r += 2, n++;do {} while (u[++r] === u[++n] && u[++r] === u[++n] && u[++r] === u[++n] && u[++r] === u[++n] && u[++r] === u[++n] && u[++r] === u[++n] && u[++r] === u[++n] && u[++r] === u[++n] && r < d);if (i = ct - (d - r), r = d - ct, i > o) {
          if (t.match_start = e, o = i, i >= a) break;f = u[r + o - 1], p = u[r + o];
        }
      }
    } while ((e = l[e & c]) > h && 0 !== --s);return o <= t.lookahead ? o : t.lookahead;
  }function d(t) {
    var e,
        n,
        i,
        s,
        r,
        o = t.w_size;do {
      if (s = t.window_size - t.lookahead - t.strstart, t.strstart >= o + (o - lt)) {
        I.arraySet(t.window, t.window, o, o, 0), t.match_start -= o, t.strstart -= o, t.block_start -= o, n = t.hash_size, e = n;do {
          i = t.head[--e], t.head[e] = i >= o ? i - o : 0;
        } while (--n);n = o, e = n;do {
          i = t.prev[--e], t.prev[e] = i >= o ? i - o : 0;
        } while (--n);s += o;
      }if (0 === t.strm.avail_in) break;if (n = c(t.strm, t.window, t.strstart + t.lookahead, s), t.lookahead += n, t.lookahead + t.insert >= ut) for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + ut - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < ut));) {}
    } while (t.lookahead < lt && 0 !== t.strm.avail_in);
  }function f(t, e) {
    var n = 65535;for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
      if (t.lookahead <= 1) {
        if (d(t), 0 === t.lookahead && e === P) return vt;if (0 === t.lookahead) break;
      }t.strstart += t.lookahead, t.lookahead = 0;var i = t.block_start + n;if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, a(t, !1), 0 === t.strm.avail_out)) return vt;if (t.strstart - t.block_start >= t.w_size - lt && (a(t, !1), 0 === t.strm.avail_out)) return vt;
    }return t.insert = 0, e === B ? (a(t, !0), 0 === t.strm.avail_out ? yt : At) : t.strstart > t.block_start && (a(t, !1), 0 === t.strm.avail_out) ? vt : vt;
  }function p(t, e) {
    for (var n, i;;) {
      if (t.lookahead < lt) {
        if (d(t), t.lookahead < lt && e === P) return vt;if (0 === t.lookahead) break;
      }if (n = 0, t.lookahead >= ut && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - lt && (t.match_length = l(t, n)), t.match_length >= ut) {
        if (i = C._tr_tally(t, t.strstart - t.match_start, t.match_length - ut), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= ut) {
          t.match_length--;do {
            t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
          } while (0 !== --t.match_length);t.strstart++;
        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
      } else i = C._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;if (i && (a(t, !1), 0 === t.strm.avail_out)) return vt;
    }return t.insert = t.strstart < ut - 1 ? t.strstart : ut - 1, e === B ? (a(t, !0), 0 === t.strm.avail_out ? yt : At) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? vt : bt;
  }function m(t, e) {
    for (var n, i, s;;) {
      if (t.lookahead < lt) {
        if (d(t), t.lookahead < lt && e === P) return vt;if (0 === t.lookahead) break;
      }if (n = 0, t.lookahead >= ut && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = ut - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - lt && (t.match_length = l(t, n), t.match_length <= 5 && (t.strategy === Y || t.match_length === ut && t.strstart - t.match_start > 4096) && (t.match_length = ut - 1)), t.prev_length >= ut && t.match_length <= t.prev_length) {
        s = t.strstart + t.lookahead - ut, i = C._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - ut), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;do {
          ++t.strstart <= s && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
        } while (0 !== --t.prev_length);if (t.match_available = 0, t.match_length = ut - 1, t.strstart++, i && (a(t, !1), 0 === t.strm.avail_out)) return vt;
      } else if (t.match_available) {
        if (i = C._tr_tally(t, 0, t.window[t.strstart - 1]), i && a(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return vt;
      } else t.match_available = 1, t.strstart++, t.lookahead--;
    }return t.match_available && (i = C._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < ut - 1 ? t.strstart : ut - 1, e === B ? (a(t, !0), 0 === t.strm.avail_out ? yt : At) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? vt : bt;
  }function g(t, e) {
    for (var n, i, s, r, o = t.window;;) {
      if (t.lookahead <= ct) {
        if (d(t), t.lookahead <= ct && e === P) return vt;if (0 === t.lookahead) break;
      }if (t.match_length = 0, t.lookahead >= ut && t.strstart > 0 && (s = t.strstart - 1, i = o[s], i === o[++s] && i === o[++s] && i === o[++s])) {
        r = t.strstart + ct;do {} while (i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && s < r);t.match_length = ct - (r - s), t.match_length > t.lookahead && (t.match_length = t.lookahead);
      }if (t.match_length >= ut ? (n = C._tr_tally(t, 1, t.match_length - ut), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = C._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (a(t, !1), 0 === t.strm.avail_out)) return vt;
    }return t.insert = 0, e === B ? (a(t, !0), 0 === t.strm.avail_out ? yt : At) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? vt : bt;
  }function _(t, e) {
    for (var n;;) {
      if (0 === t.lookahead && (d(t), 0 === t.lookahead)) {
        if (e === P) return vt;break;
      }if (t.match_length = 0, n = C._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (a(t, !1), 0 === t.strm.avail_out)) return vt;
    }return t.insert = 0, e === B ? (a(t, !0), 0 === t.strm.avail_out ? yt : At) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? vt : bt;
  }function E(t, e, n, i, s) {
    this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = i, this.func = s;
  }function w(t) {
    t.window_size = 2 * t.w_size, r(t.head), t.max_lazy_match = S[t.level].max_lazy, t.good_match = S[t.level].good_length, t.nice_match = S[t.level].nice_length, t.max_chain_length = S[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = ut - 1, t.match_available = 0, t.ins_h = 0;
  }function v() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = X, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new I.Buf16(2 * at), this.dyn_dtree = new I.Buf16(2 * (2 * rt + 1)), this.bl_tree = new I.Buf16(2 * (2 * ot + 1)), r(this.dyn_ltree), r(this.dyn_dtree), r(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new I.Buf16(ht + 1), this.heap = new I.Buf16(2 * st + 1), r(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new I.Buf16(2 * st + 1), r(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }function b(t) {
    var e;return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = J, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? ft : Et, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = P, C._tr_init(e), j) : i(t, z);
  }function y(t) {
    var e = b(t);return e === j && w(t.state), e;
  }function A(t, e) {
    return t && t.state ? 2 !== t.state.wrap ? z : (t.state.gzhead = e, j) : z;
  }function k(t, e, n, s, r, o) {
    if (!t) return z;var a = 1;if (e === F && (e = 6), s < 0 ? (a = 0, s = -s) : s > 15 && (a = 2, s -= 16), r < 1 || r > Q || n !== X || s < 8 || s > 15 || e < 0 || e > 9 || o < 0 || o > Z) return i(t, z);8 === s && (s = 9);var h = new v();return t.state = h, h.strm = t, h.wrap = a, h.gzhead = null, h.w_bits = s, h.w_size = 1 << h.w_bits, h.w_mask = h.w_size - 1, h.hash_bits = r + 7, h.hash_size = 1 << h.hash_bits, h.hash_mask = h.hash_size - 1, h.hash_shift = ~~((h.hash_bits + ut - 1) / ut), h.window = new I.Buf8(2 * h.w_size), h.head = new I.Buf16(h.hash_size), h.prev = new I.Buf16(h.w_size), h.lit_bufsize = 1 << r + 6, h.pending_buf_size = 4 * h.lit_bufsize, h.pending_buf = new I.Buf8(h.pending_buf_size), h.d_buf = 1 * h.lit_bufsize, h.l_buf = 3 * h.lit_bufsize, h.level = e, h.strategy = o, h.method = n, y(t);
  }function R(t, e) {
    return k(t, e, X, tt, et, $);
  }function T(t, e) {
    var n, a, c, l;if (!t || !t.state || e > G || e < 0) return t ? i(t, z) : z;if (a = t.state, !t.output || !t.input && 0 !== t.avail_in || a.status === wt && e !== B) return i(t, 0 === t.avail_out ? W : z);if (a.strm = t, n = a.last_flush, a.last_flush = e, a.status === ft) if (2 === a.wrap) t.adler = 0, h(a, 31), h(a, 139), h(a, 8), a.gzhead ? (h(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), h(a, 255 & a.gzhead.time), h(a, a.gzhead.time >> 8 & 255), h(a, a.gzhead.time >> 16 & 255), h(a, a.gzhead.time >> 24 & 255), h(a, 9 === a.level ? 2 : a.strategy >= V || a.level < 2 ? 4 : 0), h(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (h(a, 255 & a.gzhead.extra.length), h(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (t.adler = L(t.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = pt) : (h(a, 0), h(a, 0), h(a, 0), h(a, 0), h(a, 0), h(a, 9 === a.level ? 2 : a.strategy >= V || a.level < 2 ? 4 : 0), h(a, kt), a.status = Et);else {
      var d = X + (a.w_bits - 8 << 4) << 8,
          f = -1;f = a.strategy >= V || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3, d |= f << 6, 0 !== a.strstart && (d |= dt), d += 31 - d % 31, a.status = Et, u(a, d), 0 !== a.strstart && (u(a, t.adler >>> 16), u(a, 65535 & t.adler)), t.adler = 1;
    }if (a.status === pt) if (a.gzhead.extra) {
      for (c = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > c && (t.adler = L(t.adler, a.pending_buf, a.pending - c, c)), o(t), c = a.pending, a.pending !== a.pending_buf_size));) {
        h(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
      }a.gzhead.hcrc && a.pending > c && (t.adler = L(t.adler, a.pending_buf, a.pending - c, c)), a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = mt);
    } else a.status = mt;if (a.status === mt) if (a.gzhead.name) {
      c = a.pending;do {
        if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > c && (t.adler = L(t.adler, a.pending_buf, a.pending - c, c)), o(t), c = a.pending, a.pending === a.pending_buf_size)) {
          l = 1;break;
        }l = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, h(a, l);
      } while (0 !== l);a.gzhead.hcrc && a.pending > c && (t.adler = L(t.adler, a.pending_buf, a.pending - c, c)), 0 === l && (a.gzindex = 0, a.status = gt);
    } else a.status = gt;if (a.status === gt) if (a.gzhead.comment) {
      c = a.pending;do {
        if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > c && (t.adler = L(t.adler, a.pending_buf, a.pending - c, c)), o(t), c = a.pending, a.pending === a.pending_buf_size)) {
          l = 1;break;
        }l = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, h(a, l);
      } while (0 !== l);a.gzhead.hcrc && a.pending > c && (t.adler = L(t.adler, a.pending_buf, a.pending - c, c)), 0 === l && (a.status = _t);
    } else a.status = _t;if (a.status === _t && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && o(t), a.pending + 2 <= a.pending_buf_size && (h(a, 255 & t.adler), h(a, t.adler >> 8 & 255), t.adler = 0, a.status = Et)) : a.status = Et), 0 !== a.pending) {
      if (o(t), 0 === t.avail_out) return a.last_flush = -1, j;
    } else if (0 === t.avail_in && s(e) <= s(n) && e !== B) return i(t, W);if (a.status === wt && 0 !== t.avail_in) return i(t, W);if (0 !== t.avail_in || 0 !== a.lookahead || e !== P && a.status !== wt) {
      var p = a.strategy === V ? _(a, e) : a.strategy === K ? g(a, e) : S[a.level].func(a, e);if (p !== yt && p !== At || (a.status = wt), p === vt || p === yt) return 0 === t.avail_out && (a.last_flush = -1), j;if (p === bt && (e === N ? C._tr_align(a) : e !== G && (C._tr_stored_block(a, 0, 0, !1), e === O && (r(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), o(t), 0 === t.avail_out)) return a.last_flush = -1, j;
    }return e !== B ? j : a.wrap <= 0 ? q : (2 === a.wrap ? (h(a, 255 & t.adler), h(a, t.adler >> 8 & 255), h(a, t.adler >> 16 & 255), h(a, t.adler >> 24 & 255), h(a, 255 & t.total_in), h(a, t.total_in >> 8 & 255), h(a, t.total_in >> 16 & 255), h(a, t.total_in >> 24 & 255)) : (u(a, t.adler >>> 16), u(a, 65535 & t.adler)), o(t), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? j : q);
  }function D(t) {
    var e;return t && t.state ? (e = t.state.status, e !== ft && e !== pt && e !== mt && e !== gt && e !== _t && e !== Et && e !== wt ? i(t, z) : (t.state = null, e === Et ? i(t, H) : j)) : z;
  }function M(t, e) {
    var n,
        i,
        s,
        o,
        a,
        h,
        u,
        c,
        l = e.length;if (!t || !t.state) return z;if (n = t.state, o = n.wrap, 2 === o || 1 === o && n.status !== ft || n.lookahead) return z;for (1 === o && (t.adler = x(t.adler, e, l, 0)), n.wrap = 0, l >= n.w_size && (0 === o && (r(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), c = new I.Buf8(n.w_size), I.arraySet(c, e, l - n.w_size, n.w_size, 0), e = c, l = n.w_size), a = t.avail_in, h = t.next_in, u = t.input, t.avail_in = l, t.next_in = 0, t.input = e, d(n); n.lookahead >= ut;) {
      i = n.strstart, s = n.lookahead - (ut - 1);do {
        n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + ut - 1]) & n.hash_mask, n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++;
      } while (--s);n.strstart = i, n.lookahead = ut - 1, d(n);
    }return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = ut - 1, n.match_available = 0, t.next_in = h, t.input = u, t.avail_in = a, n.wrap = o, j;
  }var S,
      I = n(5),
      C = n(75),
      x = n(45),
      L = n(47),
      U = n(22),
      P = 0,
      N = 1,
      O = 3,
      B = 4,
      G = 5,
      j = 0,
      q = 1,
      z = -2,
      H = -3,
      W = -5,
      F = -1,
      Y = 1,
      V = 2,
      K = 3,
      Z = 4,
      $ = 0,
      J = 2,
      X = 8,
      Q = 9,
      tt = 15,
      et = 8,
      nt = 29,
      it = 256,
      st = it + 1 + nt,
      rt = 30,
      ot = 19,
      at = 2 * st + 1,
      ht = 15,
      ut = 3,
      ct = 258,
      lt = ct + ut + 1,
      dt = 32,
      ft = 42,
      pt = 69,
      mt = 73,
      gt = 91,
      _t = 103,
      Et = 113,
      wt = 666,
      vt = 1,
      bt = 2,
      yt = 3,
      At = 4,
      kt = 3;S = [new E(0, 0, 0, 0, f), new E(4, 4, 8, 4, p), new E(4, 5, 16, 8, p), new E(4, 6, 32, 32, p), new E(4, 4, 16, 16, m), new E(8, 16, 32, 32, m), new E(8, 16, 128, 128, m), new E(8, 32, 128, 256, m), new E(32, 128, 258, 1024, m), new E(32, 258, 258, 4096, m)], e.deflateInit = R, e.deflateInit2 = k, e.deflateReset = y, e.deflateResetKeep = b, e.deflateSetHeader = A, e.deflate = T, e.deflateEnd = D, e.deflateSetDictionary = M, e.deflateInfo = "pako deflate (from Nodeca project)";
}, function (t, e, n) {
  "use strict";
  function i() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }t.exports = i;
}, function (t, e, n) {
  "use strict";
  var i = 30,
      s = 12;t.exports = function (t, e) {
    var n, r, o, a, h, u, c, l, d, f, p, m, g, _, E, w, v, b, y, A, k, R, T, D, M;n = t.state, r = t.next_in, D = t.input, o = r + (t.avail_in - 5), a = t.next_out, M = t.output, h = a - (e - t.avail_out), u = a + (t.avail_out - 257), c = n.dmax, l = n.wsize, d = n.whave, f = n.wnext, p = n.window, m = n.hold, g = n.bits, _ = n.lencode, E = n.distcode, w = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;t: do {
      g < 15 && (m += D[r++] << g, g += 8, m += D[r++] << g, g += 8), b = _[m & w];e: for (;;) {
        if (y = b >>> 24, m >>>= y, g -= y, y = b >>> 16 & 255, 0 === y) M[a++] = 65535 & b;else {
          if (!(16 & y)) {
            if (0 === (64 & y)) {
              b = _[(65535 & b) + (m & (1 << y) - 1)];continue e;
            }if (32 & y) {
              n.mode = s;break t;
            }t.msg = "invalid literal/length code", n.mode = i;break t;
          }A = 65535 & b, y &= 15, y && (g < y && (m += D[r++] << g, g += 8), A += m & (1 << y) - 1, m >>>= y, g -= y), g < 15 && (m += D[r++] << g, g += 8, m += D[r++] << g, g += 8), b = E[m & v];n: for (;;) {
            if (y = b >>> 24, m >>>= y, g -= y, y = b >>> 16 & 255, !(16 & y)) {
              if (0 === (64 & y)) {
                b = E[(65535 & b) + (m & (1 << y) - 1)];continue n;
              }t.msg = "invalid distance code", n.mode = i;break t;
            }if (k = 65535 & b, y &= 15, g < y && (m += D[r++] << g, g += 8, g < y && (m += D[r++] << g, g += 8)), k += m & (1 << y) - 1, k > c) {
              t.msg = "invalid distance too far back", n.mode = i;break t;
            }if (m >>>= y, g -= y, y = a - h, k > y) {
              if (y = k - y, y > d && n.sane) {
                t.msg = "invalid distance too far back", n.mode = i;break t;
              }if (R = 0, T = p, 0 === f) {
                if (R += l - y, y < A) {
                  A -= y;do {
                    M[a++] = p[R++];
                  } while (--y);R = a - k, T = M;
                }
              } else if (f < y) {
                if (R += l + f - y, y -= f, y < A) {
                  A -= y;do {
                    M[a++] = p[R++];
                  } while (--y);if (R = 0, f < A) {
                    y = f, A -= y;do {
                      M[a++] = p[R++];
                    } while (--y);R = a - k, T = M;
                  }
                }
              } else if (R += f - y, y < A) {
                A -= y;do {
                  M[a++] = p[R++];
                } while (--y);R = a - k, T = M;
              }for (; A > 2;) {
                M[a++] = T[R++], M[a++] = T[R++], M[a++] = T[R++], A -= 3;
              }A && (M[a++] = T[R++], A > 1 && (M[a++] = T[R++]));
            } else {
              R = a - k;do {
                M[a++] = M[R++], M[a++] = M[R++], M[a++] = M[R++], A -= 3;
              } while (A > 2);A && (M[a++] = M[R++], A > 1 && (M[a++] = M[R++]));
            }break;
          }
        }break;
      }
    } while (r < o && a < u);A = g >> 3, r -= A, g -= A << 3, m &= (1 << g) - 1, t.next_in = r, t.next_out = a, t.avail_in = r < o ? 5 + (o - r) : 5 - (r - o), t.avail_out = a < u ? 257 + (u - a) : 257 - (a - u), n.hold = m, n.bits = g;
  };
}, function (t, e, n) {
  "use strict";
  function i(t) {
    return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
  }function s() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new E.Buf16(320), this.work = new E.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }function r(t) {
    var e;return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = O, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new E.Buf32(mt), e.distcode = e.distdyn = new E.Buf32(gt), e.sane = 1, e.back = -1, S) : x;
  }function o(t) {
    var e;return t && t.state ? (e = t.state, e.wsize = 0, e.whave = 0, e.wnext = 0, r(t)) : x;
  }function a(t, e) {
    var n, i;return t && t.state ? (i = t.state, e < 0 ? (n = 0, e = -e) : (n = (e >> 4) + 1, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? x : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = n, i.wbits = e, o(t))) : x;
  }function h(t, e) {
    var n, i;return t ? (i = new s(), t.state = i, i.window = null, n = a(t, e), n !== S && (t.state = null), n) : x;
  }function u(t) {
    return h(t, Et);
  }function c(t) {
    if (wt) {
      var e;for (g = new E.Buf32(512), _ = new E.Buf32(32), e = 0; e < 144;) {
        t.lens[e++] = 8;
      }for (; e < 256;) {
        t.lens[e++] = 9;
      }for (; e < 280;) {
        t.lens[e++] = 7;
      }for (; e < 288;) {
        t.lens[e++] = 8;
      }for (y(k, t.lens, 0, 288, g, 0, t.work, { bits: 9 }), e = 0; e < 32;) {
        t.lens[e++] = 5;
      }y(R, t.lens, 0, 32, _, 0, t.work, { bits: 5 }), wt = !1;
    }t.lencode = g, t.lenbits = 9, t.distcode = _, t.distbits = 5;
  }function l(t, e, n, i) {
    var s,
        r = t.state;return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new E.Buf8(r.wsize)), i >= r.wsize ? (E.arraySet(r.window, e, n - r.wsize, r.wsize, 0), r.wnext = 0, r.whave = r.wsize) : (s = r.wsize - r.wnext, s > i && (s = i), E.arraySet(r.window, e, n - i, s, r.wnext), i -= s, i ? (E.arraySet(r.window, e, n - i, i, 0), r.wnext = i, r.whave = r.wsize) : (r.wnext += s, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += s))), 0;
  }function d(t, e) {
    var n,
        s,
        r,
        o,
        a,
        h,
        u,
        d,
        f,
        p,
        m,
        g,
        _,
        mt,
        gt,
        _t,
        Et,
        wt,
        vt,
        bt,
        yt,
        At,
        kt,
        Rt,
        Tt = 0,
        Dt = new E.Buf8(4),
        Mt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return x;n = t.state, n.mode === K && (n.mode = Z), a = t.next_out, r = t.output, u = t.avail_out, o = t.next_in, s = t.input, h = t.avail_in, d = n.hold, f = n.bits, p = h, m = u, At = S;t: for (;;) {
      switch (n.mode) {case O:
          if (0 === n.wrap) {
            n.mode = Z;break;
          }for (; f < 16;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }if (2 & n.wrap && 35615 === d) {
            n.check = 0, Dt[0] = 255 & d, Dt[1] = d >>> 8 & 255, n.check = v(n.check, Dt, 2, 0), d = 0, f = 0, n.mode = B;break;
          }if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & d) << 8) + (d >> 8)) % 31) {
            t.msg = "incorrect header check", n.mode = dt;break;
          }if ((15 & d) !== N) {
            t.msg = "unknown compression method", n.mode = dt;break;
          }if (d >>>= 4, f -= 4, yt = (15 & d) + 8, 0 === n.wbits) n.wbits = yt;else if (yt > n.wbits) {
            t.msg = "invalid window size", n.mode = dt;break;
          }n.dmax = 1 << yt, t.adler = n.check = 1, n.mode = 512 & d ? Y : K, d = 0, f = 0;break;case B:
          for (; f < 16;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }if (n.flags = d, (255 & n.flags) !== N) {
            t.msg = "unknown compression method", n.mode = dt;break;
          }if (57344 & n.flags) {
            t.msg = "unknown header flags set", n.mode = dt;break;
          }n.head && (n.head.text = d >> 8 & 1), 512 & n.flags && (Dt[0] = 255 & d, Dt[1] = d >>> 8 & 255, n.check = v(n.check, Dt, 2, 0)), d = 0, f = 0, n.mode = G;case G:
          for (; f < 32;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }n.head && (n.head.time = d), 512 & n.flags && (Dt[0] = 255 & d, Dt[1] = d >>> 8 & 255, Dt[2] = d >>> 16 & 255, Dt[3] = d >>> 24 & 255, n.check = v(n.check, Dt, 4, 0)), d = 0, f = 0, n.mode = j;case j:
          for (; f < 16;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }n.head && (n.head.xflags = 255 & d, n.head.os = d >> 8), 512 & n.flags && (Dt[0] = 255 & d, Dt[1] = d >>> 8 & 255, n.check = v(n.check, Dt, 2, 0)), d = 0, f = 0, n.mode = q;case q:
          if (1024 & n.flags) {
            for (; f < 16;) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }n.length = d, n.head && (n.head.extra_len = d), 512 & n.flags && (Dt[0] = 255 & d, Dt[1] = d >>> 8 & 255, n.check = v(n.check, Dt, 2, 0)), d = 0, f = 0;
          } else n.head && (n.head.extra = null);n.mode = z;case z:
          if (1024 & n.flags && (g = n.length, g > h && (g = h), g && (n.head && (yt = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), E.arraySet(n.head.extra, s, o, g, yt)), 512 & n.flags && (n.check = v(n.check, s, g, o)), h -= g, o += g, n.length -= g), n.length)) break t;n.length = 0, n.mode = H;case H:
          if (2048 & n.flags) {
            if (0 === h) break t;g = 0;do {
              yt = s[o + g++], n.head && yt && n.length < 65536 && (n.head.name += String.fromCharCode(yt));
            } while (yt && g < h);if (512 & n.flags && (n.check = v(n.check, s, g, o)), h -= g, o += g, yt) break t;
          } else n.head && (n.head.name = null);n.length = 0, n.mode = W;case W:
          if (4096 & n.flags) {
            if (0 === h) break t;g = 0;do {
              yt = s[o + g++], n.head && yt && n.length < 65536 && (n.head.comment += String.fromCharCode(yt));
            } while (yt && g < h);if (512 & n.flags && (n.check = v(n.check, s, g, o)), h -= g, o += g, yt) break t;
          } else n.head && (n.head.comment = null);n.mode = F;case F:
          if (512 & n.flags) {
            for (; f < 16;) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }if (d !== (65535 & n.check)) {
              t.msg = "header crc mismatch", n.mode = dt;break;
            }d = 0, f = 0;
          }n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = K;break;case Y:
          for (; f < 32;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }t.adler = n.check = i(d), d = 0, f = 0, n.mode = V;case V:
          if (0 === n.havedict) return t.next_out = a, t.avail_out = u, t.next_in = o, t.avail_in = h, n.hold = d, n.bits = f, C;t.adler = n.check = 1, n.mode = K;case K:
          if (e === D || e === M) break t;case Z:
          if (n.last) {
            d >>>= 7 & f, f -= 7 & f, n.mode = ut;break;
          }for (; f < 3;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }switch (n.last = 1 & d, d >>>= 1, f -= 1, 3 & d) {case 0:
              n.mode = $;break;case 1:
              if (c(n), n.mode = nt, e === M) {
                d >>>= 2, f -= 2;break t;
              }break;case 2:
              n.mode = Q;break;case 3:
              t.msg = "invalid block type", n.mode = dt;}d >>>= 2, f -= 2;break;case $:
          for (d >>>= 7 & f, f -= 7 & f; f < 32;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }if ((65535 & d) !== (d >>> 16 ^ 65535)) {
            t.msg = "invalid stored block lengths", n.mode = dt;break;
          }if (n.length = 65535 & d, d = 0, f = 0, n.mode = J, e === M) break t;case J:
          n.mode = X;case X:
          if (g = n.length) {
            if (g > h && (g = h), g > u && (g = u), 0 === g) break t;E.arraySet(r, s, o, g, a), h -= g, o += g, u -= g, a += g, n.length -= g;break;
          }n.mode = K;break;case Q:
          for (; f < 14;) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }if (n.nlen = (31 & d) + 257, d >>>= 5, f -= 5, n.ndist = (31 & d) + 1, d >>>= 5, f -= 5, n.ncode = (15 & d) + 4, d >>>= 4, f -= 4, n.nlen > 286 || n.ndist > 30) {
            t.msg = "too many length or distance symbols", n.mode = dt;break;
          }n.have = 0, n.mode = tt;case tt:
          for (; n.have < n.ncode;) {
            for (; f < 3;) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }n.lens[Mt[n.have++]] = 7 & d, d >>>= 3, f -= 3;
          }for (; n.have < 19;) {
            n.lens[Mt[n.have++]] = 0;
          }if (n.lencode = n.lendyn, n.lenbits = 7, kt = { bits: n.lenbits }, At = y(A, n.lens, 0, 19, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, At) {
            t.msg = "invalid code lengths set", n.mode = dt;break;
          }n.have = 0, n.mode = et;case et:
          for (; n.have < n.nlen + n.ndist;) {
            for (; Tt = n.lencode[d & (1 << n.lenbits) - 1], gt = Tt >>> 24, _t = Tt >>> 16 & 255, Et = 65535 & Tt, !(gt <= f);) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }if (Et < 16) d >>>= gt, f -= gt, n.lens[n.have++] = Et;else {
              if (16 === Et) {
                for (Rt = gt + 2; f < Rt;) {
                  if (0 === h) break t;h--, d += s[o++] << f, f += 8;
                }if (d >>>= gt, f -= gt, 0 === n.have) {
                  t.msg = "invalid bit length repeat", n.mode = dt;break;
                }yt = n.lens[n.have - 1], g = 3 + (3 & d), d >>>= 2, f -= 2;
              } else if (17 === Et) {
                for (Rt = gt + 3; f < Rt;) {
                  if (0 === h) break t;h--, d += s[o++] << f, f += 8;
                }d >>>= gt, f -= gt, yt = 0, g = 3 + (7 & d), d >>>= 3, f -= 3;
              } else {
                for (Rt = gt + 7; f < Rt;) {
                  if (0 === h) break t;h--, d += s[o++] << f, f += 8;
                }d >>>= gt, f -= gt, yt = 0, g = 11 + (127 & d), d >>>= 7, f -= 7;
              }if (n.have + g > n.nlen + n.ndist) {
                t.msg = "invalid bit length repeat", n.mode = dt;break;
              }for (; g--;) {
                n.lens[n.have++] = yt;
              }
            }
          }if (n.mode === dt) break;if (0 === n.lens[256]) {
            t.msg = "invalid code -- missing end-of-block", n.mode = dt;break;
          }if (n.lenbits = 9, kt = { bits: n.lenbits }, At = y(k, n.lens, 0, n.nlen, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, At) {
            t.msg = "invalid literal/lengths set", n.mode = dt;break;
          }if (n.distbits = 6, n.distcode = n.distdyn, kt = { bits: n.distbits }, At = y(R, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, kt), n.distbits = kt.bits, At) {
            t.msg = "invalid distances set", n.mode = dt;break;
          }if (n.mode = nt, e === M) break t;case nt:
          n.mode = it;case it:
          if (h >= 6 && u >= 258) {
            t.next_out = a, t.avail_out = u, t.next_in = o, t.avail_in = h, n.hold = d, n.bits = f, b(t, m), a = t.next_out, r = t.output, u = t.avail_out, o = t.next_in, s = t.input, h = t.avail_in, d = n.hold, f = n.bits, n.mode === K && (n.back = -1);break;
          }for (n.back = 0; Tt = n.lencode[d & (1 << n.lenbits) - 1], gt = Tt >>> 24, _t = Tt >>> 16 & 255, Et = 65535 & Tt, !(gt <= f);) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }if (_t && 0 === (240 & _t)) {
            for (wt = gt, vt = _t, bt = Et; Tt = n.lencode[bt + ((d & (1 << wt + vt) - 1) >> wt)], gt = Tt >>> 24, _t = Tt >>> 16 & 255, Et = 65535 & Tt, !(wt + gt <= f);) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }d >>>= wt, f -= wt, n.back += wt;
          }if (d >>>= gt, f -= gt, n.back += gt, n.length = Et, 0 === _t) {
            n.mode = ht;break;
          }if (32 & _t) {
            n.back = -1, n.mode = K;break;
          }if (64 & _t) {
            t.msg = "invalid literal/length code", n.mode = dt;break;
          }n.extra = 15 & _t, n.mode = st;case st:
          if (n.extra) {
            for (Rt = n.extra; f < Rt;) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }n.length += d & (1 << n.extra) - 1, d >>>= n.extra, f -= n.extra, n.back += n.extra;
          }n.was = n.length, n.mode = rt;case rt:
          for (; Tt = n.distcode[d & (1 << n.distbits) - 1], gt = Tt >>> 24, _t = Tt >>> 16 & 255, Et = 65535 & Tt, !(gt <= f);) {
            if (0 === h) break t;h--, d += s[o++] << f, f += 8;
          }if (0 === (240 & _t)) {
            for (wt = gt, vt = _t, bt = Et; Tt = n.distcode[bt + ((d & (1 << wt + vt) - 1) >> wt)], gt = Tt >>> 24, _t = Tt >>> 16 & 255, Et = 65535 & Tt, !(wt + gt <= f);) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }d >>>= wt, f -= wt, n.back += wt;
          }if (d >>>= gt, f -= gt, n.back += gt, 64 & _t) {
            t.msg = "invalid distance code", n.mode = dt;break;
          }n.offset = Et, n.extra = 15 & _t, n.mode = ot;case ot:
          if (n.extra) {
            for (Rt = n.extra; f < Rt;) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }n.offset += d & (1 << n.extra) - 1, d >>>= n.extra, f -= n.extra, n.back += n.extra;
          }if (n.offset > n.dmax) {
            t.msg = "invalid distance too far back", n.mode = dt;break;
          }n.mode = at;case at:
          if (0 === u) break t;if (g = m - u, n.offset > g) {
            if (g = n.offset - g, g > n.whave && n.sane) {
              t.msg = "invalid distance too far back", n.mode = dt;break;
            }g > n.wnext ? (g -= n.wnext, _ = n.wsize - g) : _ = n.wnext - g, g > n.length && (g = n.length), mt = n.window;
          } else mt = r, _ = a - n.offset, g = n.length;g > u && (g = u), u -= g, n.length -= g;do {
            r[a++] = mt[_++];
          } while (--g);0 === n.length && (n.mode = it);break;case ht:
          if (0 === u) break t;r[a++] = n.length, u--, n.mode = it;break;case ut:
          if (n.wrap) {
            for (; f < 32;) {
              if (0 === h) break t;h--, d |= s[o++] << f, f += 8;
            }if (m -= u, t.total_out += m, n.total += m, m && (t.adler = n.check = n.flags ? v(n.check, r, m, a - m) : w(n.check, r, m, a - m)), m = u, (n.flags ? d : i(d)) !== n.check) {
              t.msg = "incorrect data check", n.mode = dt;break;
            }d = 0, f = 0;
          }n.mode = ct;case ct:
          if (n.wrap && n.flags) {
            for (; f < 32;) {
              if (0 === h) break t;h--, d += s[o++] << f, f += 8;
            }if (d !== (4294967295 & n.total)) {
              t.msg = "incorrect length check", n.mode = dt;break;
            }d = 0, f = 0;
          }n.mode = lt;case lt:
          At = I;break t;case dt:
          At = L;break t;case ft:
          return U;case pt:default:
          return x;}
    }return t.next_out = a, t.avail_out = u, t.next_in = o, t.avail_in = h, n.hold = d, n.bits = f, (n.wsize || m !== t.avail_out && n.mode < dt && (n.mode < ut || e !== T)) && l(t, t.output, t.next_out, m - t.avail_out) ? (n.mode = ft, U) : (p -= t.avail_in, m -= t.avail_out, t.total_in += p, t.total_out += m, n.total += m, n.wrap && m && (t.adler = n.check = n.flags ? v(n.check, r, m, t.next_out - m) : w(n.check, r, m, t.next_out - m)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === K ? 128 : 0) + (n.mode === nt || n.mode === J ? 256 : 0), (0 === p && 0 === m || e === T) && At === S && (At = P), At);
  }function f(t) {
    if (!t || !t.state) return x;var e = t.state;return e.window && (e.window = null), t.state = null, S;
  }function p(t, e) {
    var n;return t && t.state ? (n = t.state, 0 === (2 & n.wrap) ? x : (n.head = e, e.done = !1, S)) : x;
  }function m(t, e) {
    var n,
        i,
        s,
        r = e.length;return t && t.state ? (n = t.state, 0 !== n.wrap && n.mode !== V ? x : n.mode === V && (i = 1, i = w(i, e, r, 0), i !== n.check) ? L : (s = l(t, e, r, r)) ? (n.mode = ft, U) : (n.havedict = 1, S)) : x;
  }var g,
      _,
      E = n(5),
      w = n(45),
      v = n(47),
      b = n(72),
      y = n(74),
      A = 0,
      k = 1,
      R = 2,
      T = 4,
      D = 5,
      M = 6,
      S = 0,
      I = 1,
      C = 2,
      x = -2,
      L = -3,
      U = -4,
      P = -5,
      N = 8,
      O = 1,
      B = 2,
      G = 3,
      j = 4,
      q = 5,
      z = 6,
      H = 7,
      W = 8,
      F = 9,
      Y = 10,
      V = 11,
      K = 12,
      Z = 13,
      $ = 14,
      J = 15,
      X = 16,
      Q = 17,
      tt = 18,
      et = 19,
      nt = 20,
      it = 21,
      st = 22,
      rt = 23,
      ot = 24,
      at = 25,
      ht = 26,
      ut = 27,
      ct = 28,
      lt = 29,
      dt = 30,
      ft = 31,
      pt = 32,
      mt = 852,
      gt = 592,
      _t = 15,
      Et = _t,
      wt = !0;e.inflateReset = o, e.inflateReset2 = a, e.inflateResetKeep = r, e.inflateInit = u, e.inflateInit2 = h, e.inflate = d, e.inflateEnd = f, e.inflateGetHeader = p, e.inflateSetDictionary = m, e.inflateInfo = "pako inflate (from Nodeca project)";
}, function (t, e, n) {
  "use strict";
  var i = n(5),
      s = 15,
      r = 852,
      o = 592,
      a = 0,
      h = 1,
      u = 2,
      c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
      l = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
      d = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
      f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];t.exports = function (t, e, n, p, m, g, _, E) {
    var w,
        v,
        b,
        y,
        A,
        k,
        R,
        T,
        D,
        M = E.bits,
        S = 0,
        I = 0,
        C = 0,
        x = 0,
        L = 0,
        U = 0,
        P = 0,
        N = 0,
        O = 0,
        B = 0,
        G = null,
        j = 0,
        q = new i.Buf16(s + 1),
        z = new i.Buf16(s + 1),
        H = null,
        W = 0;for (S = 0; S <= s; S++) {
      q[S] = 0;
    }for (I = 0; I < p; I++) {
      q[e[n + I]]++;
    }for (L = M, x = s; x >= 1 && 0 === q[x]; x--) {}if (L > x && (L = x), 0 === x) return m[g++] = 20971520, m[g++] = 20971520, E.bits = 1, 0;for (C = 1; C < x && 0 === q[C]; C++) {}for (L < C && (L = C), N = 1, S = 1; S <= s; S++) {
      if (N <<= 1, N -= q[S], N < 0) return -1;
    }if (N > 0 && (t === a || 1 !== x)) return -1;for (z[1] = 0, S = 1; S < s; S++) {
      z[S + 1] = z[S] + q[S];
    }for (I = 0; I < p; I++) {
      0 !== e[n + I] && (_[z[e[n + I]]++] = I);
    }if (t === a ? (G = H = _, k = 19) : t === h ? (G = c, j -= 257, H = l, W -= 257, k = 256) : (G = d, H = f, k = -1), B = 0, I = 0, S = C, A = g, U = L, P = 0, b = -1, O = 1 << L, y = O - 1, t === h && O > r || t === u && O > o) return 1;for (;;) {
      R = S - P, _[I] < k ? (T = 0, D = _[I]) : _[I] > k ? (T = H[W + _[I]], D = G[j + _[I]]) : (T = 96, D = 0), w = 1 << S - P, v = 1 << U, C = v;do {
        v -= w, m[A + (B >> P) + v] = R << 24 | T << 16 | D | 0;
      } while (0 !== v);for (w = 1 << S - 1; B & w;) {
        w >>= 1;
      }if (0 !== w ? (B &= w - 1, B += w) : B = 0, I++, 0 === --q[S]) {
        if (S === x) break;S = e[n + _[I]];
      }if (S > L && (B & y) !== b) {
        for (0 === P && (P = L), A += C, U = S - P, N = 1 << U; U + P < x && (N -= q[U + P], !(N <= 0));) {
          U++, N <<= 1;
        }if (O += 1 << U, t === h && O > r || t === u && O > o) return 1;b = B & y, m[b] = L << 24 | U << 16 | A - g | 0;
      }
    }return 0 !== B && (m[A + B] = S - P << 24 | 64 << 16 | 0), E.bits = L, 0;
  };
}, function (t, e, n) {
  "use strict";
  function i(t) {
    for (var e = t.length; --e >= 0;) {
      t[e] = 0;
    }
  }function s(t, e, n, i, s) {
    this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = i, this.max_length = s, this.has_stree = t && t.length;
  }function r(t, e) {
    this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
  }function o(t) {
    return t < 256 ? ht[t] : ht[256 + (t >>> 7)];
  }function a(t, e) {
    t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
  }function h(t, e, n) {
    t.bi_valid > Z - n ? (t.bi_buf |= e << t.bi_valid & 65535, a(t, t.bi_buf), t.bi_buf = e >> Z - t.bi_valid, t.bi_valid += n - Z) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n);
  }function u(t, e, n) {
    h(t, n[2 * e], n[2 * e + 1]);
  }function c(t, e) {
    var n = 0;do {
      n |= 1 & t, t >>>= 1, n <<= 1;
    } while (--e > 0);return n >>> 1;
  }function l(t) {
    16 === t.bi_valid ? (a(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
  }function d(t, e) {
    var n,
        i,
        s,
        r,
        o,
        a,
        h = e.dyn_tree,
        u = e.max_code,
        c = e.stat_desc.static_tree,
        l = e.stat_desc.has_stree,
        d = e.stat_desc.extra_bits,
        f = e.stat_desc.extra_base,
        p = e.stat_desc.max_length,
        m = 0;for (r = 0; r <= K; r++) {
      t.bl_count[r] = 0;
    }for (h[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < V; n++) {
      i = t.heap[n], r = h[2 * h[2 * i + 1] + 1] + 1, r > p && (r = p, m++), h[2 * i + 1] = r, i > u || (t.bl_count[r]++, o = 0, i >= f && (o = d[i - f]), a = h[2 * i], t.opt_len += a * (r + o), l && (t.static_len += a * (c[2 * i + 1] + o)));
    }if (0 !== m) {
      do {
        for (r = p - 1; 0 === t.bl_count[r];) {
          r--;
        }t.bl_count[r]--, t.bl_count[r + 1] += 2, t.bl_count[p]--, m -= 2;
      } while (m > 0);for (r = p; 0 !== r; r--) {
        for (i = t.bl_count[r]; 0 !== i;) {
          s = t.heap[--n], s > u || (h[2 * s + 1] !== r && (t.opt_len += (r - h[2 * s + 1]) * h[2 * s], h[2 * s + 1] = r), i--);
        }
      }
    }
  }function f(t, e, n) {
    var i,
        s,
        r = new Array(K + 1),
        o = 0;for (i = 1; i <= K; i++) {
      r[i] = o = o + n[i - 1] << 1;
    }for (s = 0; s <= e; s++) {
      var a = t[2 * s + 1];0 !== a && (t[2 * s] = c(r[a]++, a));
    }
  }function p() {
    var t,
        e,
        n,
        i,
        r,
        o = new Array(K + 1);for (n = 0, i = 0; i < z - 1; i++) {
      for (ct[i] = n, t = 0; t < 1 << et[i]; t++) {
        ut[n++] = i;
      }
    }for (ut[n - 1] = i, r = 0, i = 0; i < 16; i++) {
      for (lt[i] = r, t = 0; t < 1 << nt[i]; t++) {
        ht[r++] = i;
      }
    }for (r >>= 7; i < F; i++) {
      for (lt[i] = r << 7, t = 0; t < 1 << nt[i] - 7; t++) {
        ht[256 + r++] = i;
      }
    }for (e = 0; e <= K; e++) {
      o[e] = 0;
    }for (t = 0; t <= 143;) {
      ot[2 * t + 1] = 8, t++, o[8]++;
    }for (; t <= 255;) {
      ot[2 * t + 1] = 9, t++, o[9]++;
    }for (; t <= 279;) {
      ot[2 * t + 1] = 7, t++, o[7]++;
    }for (; t <= 287;) {
      ot[2 * t + 1] = 8, t++, o[8]++;
    }for (f(ot, W + 1, o), t = 0; t < F; t++) {
      at[2 * t + 1] = 5, at[2 * t] = c(t, 5);
    }dt = new s(ot, et, H + 1, W, K), ft = new s(at, nt, 0, F, K), pt = new s(new Array(0), it, 0, Y, $);
  }function m(t) {
    var e;for (e = 0; e < W; e++) {
      t.dyn_ltree[2 * e] = 0;
    }for (e = 0; e < F; e++) {
      t.dyn_dtree[2 * e] = 0;
    }for (e = 0; e < Y; e++) {
      t.bl_tree[2 * e] = 0;
    }t.dyn_ltree[2 * J] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
  }function g(t) {
    t.bi_valid > 8 ? a(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
  }function _(t, e, n, i) {
    g(t), i && (a(t, n), a(t, ~n)), x.arraySet(t.pending_buf, t.window, e, n, t.pending), t.pending += n;
  }function E(t, e, n, i) {
    var s = 2 * e,
        r = 2 * n;return t[s] < t[r] || t[s] === t[r] && i[e] <= i[n];
  }function w(t, e, n) {
    for (var i = t.heap[n], s = n << 1; s <= t.heap_len && (s < t.heap_len && E(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !E(e, i, t.heap[s], t.depth));) {
      t.heap[n] = t.heap[s], n = s, s <<= 1;
    }t.heap[n] = i;
  }function v(t, e, n) {
    var i,
        s,
        r,
        a,
        c = 0;if (0 !== t.last_lit) do {
      i = t.pending_buf[t.d_buf + 2 * c] << 8 | t.pending_buf[t.d_buf + 2 * c + 1], s = t.pending_buf[t.l_buf + c], c++, 0 === i ? u(t, s, e) : (r = ut[s], u(t, r + H + 1, e), a = et[r], 0 !== a && (s -= ct[r], h(t, s, a)), i--, r = o(i), u(t, r, n), a = nt[r], 0 !== a && (i -= lt[r], h(t, i, a)));
    } while (c < t.last_lit);u(t, J, e);
  }function b(t, e) {
    var n,
        i,
        s,
        r = e.dyn_tree,
        o = e.stat_desc.static_tree,
        a = e.stat_desc.has_stree,
        h = e.stat_desc.elems,
        u = -1;for (t.heap_len = 0, t.heap_max = V, n = 0; n < h; n++) {
      0 !== r[2 * n] ? (t.heap[++t.heap_len] = u = n, t.depth[n] = 0) : r[2 * n + 1] = 0;
    }for (; t.heap_len < 2;) {
      s = t.heap[++t.heap_len] = u < 2 ? ++u : 0, r[2 * s] = 1, t.depth[s] = 0, t.opt_len--, a && (t.static_len -= o[2 * s + 1]);
    }for (e.max_code = u, n = t.heap_len >> 1; n >= 1; n--) {
      w(t, r, n);
    }s = h;do {
      n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], w(t, r, 1), i = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = i, r[2 * s] = r[2 * n] + r[2 * i], t.depth[s] = (t.depth[n] >= t.depth[i] ? t.depth[n] : t.depth[i]) + 1, r[2 * n + 1] = r[2 * i + 1] = s, t.heap[1] = s++, w(t, r, 1);
    } while (t.heap_len >= 2);t.heap[--t.heap_max] = t.heap[1], d(t, e), f(r, u, t.bl_count);
  }function y(t, e, n) {
    var i,
        s,
        r = -1,
        o = e[1],
        a = 0,
        h = 7,
        u = 4;for (0 === o && (h = 138, u = 3), e[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) {
      s = o, o = e[2 * (i + 1) + 1], ++a < h && s === o || (a < u ? t.bl_tree[2 * s] += a : 0 !== s ? (s !== r && t.bl_tree[2 * s]++, t.bl_tree[2 * X]++) : a <= 10 ? t.bl_tree[2 * Q]++ : t.bl_tree[2 * tt]++, a = 0, r = s, 0 === o ? (h = 138, u = 3) : s === o ? (h = 6, u = 3) : (h = 7, u = 4));
    }
  }function A(t, e, n) {
    var i,
        s,
        r = -1,
        o = e[1],
        a = 0,
        c = 7,
        l = 4;for (0 === o && (c = 138, l = 3), i = 0; i <= n; i++) {
      if (s = o, o = e[2 * (i + 1) + 1], !(++a < c && s === o)) {
        if (a < l) {
          do {
            u(t, s, t.bl_tree);
          } while (0 !== --a);
        } else 0 !== s ? (s !== r && (u(t, s, t.bl_tree), a--), u(t, X, t.bl_tree), h(t, a - 3, 2)) : a <= 10 ? (u(t, Q, t.bl_tree), h(t, a - 3, 3)) : (u(t, tt, t.bl_tree), h(t, a - 11, 7));a = 0, r = s, 0 === o ? (c = 138, l = 3) : s === o ? (c = 6, l = 3) : (c = 7, l = 4);
      }
    }
  }function k(t) {
    var e;for (y(t, t.dyn_ltree, t.l_desc.max_code), y(t, t.dyn_dtree, t.d_desc.max_code), b(t, t.bl_desc), e = Y - 1; e >= 3 && 0 === t.bl_tree[2 * st[e] + 1]; e--) {}return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
  }function R(t, e, n, i) {
    var s;for (h(t, e - 257, 5), h(t, n - 1, 5), h(t, i - 4, 4), s = 0; s < i; s++) {
      h(t, t.bl_tree[2 * st[s] + 1], 3);
    }A(t, t.dyn_ltree, e - 1), A(t, t.dyn_dtree, n - 1);
  }function T(t) {
    var e,
        n = 4093624447;for (e = 0; e <= 31; e++, n >>>= 1) {
      if (1 & n && 0 !== t.dyn_ltree[2 * e]) return U;
    }if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return P;for (e = 32; e < H; e++) {
      if (0 !== t.dyn_ltree[2 * e]) return P;
    }return U;
  }function D(t) {
    mt || (p(), mt = !0), t.l_desc = new r(t.dyn_ltree, dt), t.d_desc = new r(t.dyn_dtree, ft), t.bl_desc = new r(t.bl_tree, pt), t.bi_buf = 0, t.bi_valid = 0, m(t);
  }function M(t, e, n, i) {
    h(t, (O << 1) + (i ? 1 : 0), 3), _(t, e, n, !0);
  }function S(t) {
    h(t, B << 1, 3), u(t, J, ot), l(t);
  }function I(t, e, n, i) {
    var s,
        r,
        o = 0;t.level > 0 ? (t.strm.data_type === N && (t.strm.data_type = T(t)), b(t, t.l_desc), b(t, t.d_desc), o = k(t), s = t.opt_len + 3 + 7 >>> 3, r = t.static_len + 3 + 7 >>> 3, r <= s && (s = r)) : s = r = n + 5, n + 4 <= s && e !== -1 ? M(t, e, n, i) : t.strategy === L || r === s ? (h(t, (B << 1) + (i ? 1 : 0), 3), v(t, ot, at)) : (h(t, (G << 1) + (i ? 1 : 0), 3), R(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1), v(t, t.dyn_ltree, t.dyn_dtree)), m(t), i && g(t);
  }function C(t, e, n) {
    return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (ut[n] + H + 1)]++, t.dyn_dtree[2 * o(e)]++), t.last_lit === t.lit_bufsize - 1;
  }var x = n(5),
      L = 4,
      U = 0,
      P = 1,
      N = 2,
      O = 0,
      B = 1,
      G = 2,
      j = 3,
      q = 258,
      z = 29,
      H = 256,
      W = H + 1 + z,
      F = 30,
      Y = 19,
      V = 2 * W + 1,
      K = 15,
      Z = 16,
      $ = 7,
      J = 256,
      X = 16,
      Q = 17,
      tt = 18,
      et = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
      nt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      it = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      st = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      rt = 512,
      ot = new Array(2 * (W + 2));i(ot);var at = new Array(2 * F);i(at);var ht = new Array(rt);i(ht);var ut = new Array(q - j + 1);i(ut);var ct = new Array(z);i(ct);var lt = new Array(F);i(lt);var dt,
      ft,
      pt,
      mt = !1;e._tr_init = D, e._tr_stored_block = M, e._tr_flush_block = I, e._tr_tally = C, e._tr_align = S;
}, function (t, e, n) {
  function i(t) {
    var e = s(t) ? Object.prototype.toString.call(t) : "";return "[object Function]" === e;
  }var s = n(26);t.exports = i;
}, function (t, e, n) {
  function i(t) {
    if (t) return s(t);
  }function s(t) {
    for (var e in i.prototype) {
      t[e] = i.prototype[e];
    }return t;
  }var r = n(26);t.exports = i, i.prototype.clearTimeout = function () {
    return this._timeout = 0, this._responseTimeout = 0, clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), this;
  }, i.prototype.parse = function (t) {
    return this._parser = t, this;
  }, i.prototype.responseType = function (t) {
    return this._responseType = t, this;
  }, i.prototype.serialize = function (t) {
    return this._serializer = t, this;
  }, i.prototype.timeout = function (t) {
    return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? ("undefined" != typeof t.deadline && (this._timeout = t.deadline), "undefined" != typeof t.response && (this._responseTimeout = t.response), this) : (this._timeout = t, this._responseTimeout = 0, this);
  }, i.prototype.then = function (t, e) {
    if (!this._fullfilledPromise) {
      var n = this;this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (t, e) {
        n.end(function (n, i) {
          n ? e(n) : t(i);
        });
      });
    }return this._fullfilledPromise.then(t, e);
  }, i.prototype.catch = function (t) {
    return this.then(void 0, t);
  }, i.prototype.use = function (t) {
    return t(this), this;
  }, i.prototype.ok = function (t) {
    if ("function" != typeof t) throw Error("Callback required");return this._okCallback = t, this;
  }, i.prototype._isResponseOK = function (t) {
    return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300);
  }, i.prototype.get = function (t) {
    return this._header[t.toLowerCase()];
  }, i.prototype.getHeader = i.prototype.get, i.prototype.set = function (t, e) {
    if (r(t)) {
      for (var n in t) {
        this.set(n, t[n]);
      }return this;
    }return this._header[t.toLowerCase()] = e, this.header[t] = e, this;
  }, i.prototype.unset = function (t) {
    return delete this._header[t.toLowerCase()], delete this.header[t], this;
  }, i.prototype.field = function (t, e) {
    if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");if (r(t)) {
      for (var n in t) {
        this.field(n, t[n]);
      }return this;
    }if (Array.isArray(e)) {
      for (var i in e) {
        this.field(t, e[i]);
      }return this;
    }if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this;
  }, i.prototype.abort = function () {
    return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
  }, i.prototype.withCredentials = function () {
    return this._withCredentials = !0, this;
  }, i.prototype.redirects = function (t) {
    return this._maxRedirects = t, this;
  }, i.prototype.toJSON = function () {
    return { method: this.method, url: this.url, data: this._data, headers: this._header };
  }, i.prototype.send = function (t) {
    var e = r(t),
        n = this._header["content-type"];if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");if (e && r(this._data)) for (var i in t) {
      this._data[i] = t[i];
    } else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t;return !e || this._isHost(t) ? this : (n || this.type("json"), this);
  }, i.prototype.sortQuery = function (t) {
    return this._sort = "undefined" == typeof t || t, this;
  }, i.prototype._timeoutError = function (t, e) {
    if (!this._aborted) {
      var n = new Error(t + e + "ms exceeded");n.timeout = e, n.code = "ECONNABORTED", this.timedout = !0, this.abort(), this.callback(n);
    }
  }, i.prototype._setTimeouts = function () {
    var t = this;this._timeout && !this._timer && (this._timer = setTimeout(function () {
      t._timeoutError("Timeout of ", t._timeout);
    }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
      t._timeoutError("Response timeout of ", t._responseTimeout);
    }, this._responseTimeout));
  };
}, function (t, e, n) {
  function i(t) {
    if (t) return s(t);
  }function s(t) {
    for (var e in i.prototype) {
      t[e] = i.prototype[e];
    }return t;
  }var r = n(79);t.exports = i, i.prototype.get = function (t) {
    return this.header[t.toLowerCase()];
  }, i.prototype._setHeaderProperties = function (t) {
    var e = t["content-type"] || "";this.type = r.type(e);var n = r.params(e);for (var i in n) {
      this[i] = n[i];
    }this.links = {};try {
      t.link && (this.links = r.parseLinks(t.link));
    } catch (t) {}
  }, i.prototype._setStatusProperties = function (t) {
    var e = t / 100 | 0;this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t;
  };
}, function (t, e) {
  e.type = function (t) {
    return t.split(/ *; */).shift();
  }, e.params = function (t) {
    return t.split(/ *; */).reduce(function (t, e) {
      var n = e.split(/ *= */),
          i = n.shift(),
          s = n.shift();return i && s && (t[i] = s), t;
    }, {});
  }, e.parseLinks = function (t) {
    return t.split(/ *, */).reduce(function (t, e) {
      var n = e.split(/ *; */),
          i = n[0].slice(1, -1),
          s = n[1].split(/ *= */)[1].slice(1, -1);return t[s] = i, t;
    }, {});
  }, e.cleanHeader = function (t, e) {
    return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && delete t.cookie, t;
  };
}, function (t, e) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }t.exports = n;
}, function (t, e, n) {
  var i = n(0),
      s = n(4),
      r = n(17),
      o = n(6),
      a = n(30),
      h = n(10),
      u = n(41),
      c = n(42),
      l = n(13),
      d = n(31);
  var f = function () {
    function f(t) {
      _classCallCheck(this, f);

      this.client = t;
    }

    _createClass(f, [{
      key: "newGuild",
      value: function newGuild(t) {
        var _this44 = this;

        var e = this.client.guilds.has(t.id),
            n = new r(this.client, t);return this.client.guilds.set(n.id, n), this.pastReady && !e && (this.client.options.fetchAllMembers ? n.fetchMembers().then(function () {
          _this44.client.emit(i.Events.GUILD_CREATE, n);
        }) : this.client.emit(i.Events.GUILD_CREATE, n)), n;
      }
    }, {
      key: "newUser",
      value: function newUser(t) {
        if (this.client.users.has(t.id)) return this.client.users.get(t.id);var e = new o(this.client, t);return this.client.users.set(e.id, e), e;
      }
    }, {
      key: "newChannel",
      value: function newChannel(t, e) {
        var n = this.client.channels.has(t.id);var s = void 0;return t.type === i.ChannelTypes.DM ? s = new a(this.client, t) : t.type === i.ChannelTypes.groupDM ? s = new d(this.client, t) : (e = e || this.client.guilds.get(t.guild_id), e && (t.type === i.ChannelTypes.text ? (s = new u(e, t), e.channels.set(s.id, s)) : t.type === i.ChannelTypes.voice && (s = new c(e, t), e.channels.set(s.id, s)))), s ? (this.pastReady && !n && this.client.emit(i.Events.CHANNEL_CREATE, s), this.client.channels.set(s.id, s), s) : null;
      }
    }, {
      key: "newEmoji",
      value: function newEmoji(t, e) {
        var n = e.emojis.has(t.id);if (t && !n) {
          var _n26 = new h(e, t);return this.client.emit(i.Events.GUILD_EMOJI_CREATE, _n26), e.emojis.set(_n26.id, _n26), _n26;
        }return n ? e.emojis.get(t.id) : null;
      }
    }, {
      key: "killEmoji",
      value: function killEmoji(t) {
        t instanceof h && t.guild && (this.client.emit(i.Events.GUILD_EMOJI_DELETE, t), t.guild.emojis.delete(t.id));
      }
    }, {
      key: "killGuild",
      value: function killGuild(t) {
        var e = this.client.guilds.has(t.id);this.client.guilds.delete(t.id), e && this.pastReady && this.client.emit(i.Events.GUILD_DELETE, t);
      }
    }, {
      key: "killUser",
      value: function killUser(t) {
        this.client.users.delete(t.id);
      }
    }, {
      key: "killChannel",
      value: function killChannel(t) {
        this.client.channels.delete(t.id), t instanceof l && t.guild.channels.delete(t.id);
      }
    }, {
      key: "updateGuild",
      value: function updateGuild(t, e) {
        var n = s(t);t.setup(e), this.pastReady && this.client.emit(i.Events.GUILD_UPDATE, n, t);
      }
    }, {
      key: "updateChannel",
      value: function updateChannel(t, e) {
        t.setup(e);
      }
    }, {
      key: "updateEmoji",
      value: function updateEmoji(t, e) {
        var n = s(t);t.setup(e), this.client.emit(i.Events.GUILD_EMOJI_UPDATE, n, t);
      }
    }, {
      key: "pastReady",
      get: function get() {
        return this.client.ws.status === i.Status.READY;
      }
    }]);

    return f;
  }();

  t.exports = f;
}, function (t, e, n) {
  var i = n(0);
  var s = function () {
    function s(t) {
      _classCallCheck(this, s);

      this.client = t, this.heartbeatInterval = null;
    }

    _createClass(s, [{
      key: "connectToWebSocket",
      value: function connectToWebSocket(t, e, n) {
        var _this45 = this;

        this.client.emit(i.Events.DEBUG, "Authenticated using token " + t), this.client.token = t;var s = this.client.setTimeout(function () {
          return n(new Error(i.Errors.TOOK_TOO_LONG));
        }, 3e5);this.client.rest.methods.getGateway().then(function (r) {
          _this45.client.emit(i.Events.DEBUG, "Using gateway " + r), _this45.client.ws.connect(r), _this45.client.ws.once("close", function (t) {
            4004 === t.code && n(new Error(i.Errors.BAD_LOGIN)), 4010 === t.code && n(new Error(i.Errors.INVALID_SHARD));
          }), _this45.client.once(i.Events.READY, function () {
            e(t), _this45.client.clearTimeout(s);
          });
        }, n);
      }
    }, {
      key: "setupKeepAlive",
      value: function setupKeepAlive(t) {
        var _this46 = this;

        this.heartbeatInterval = this.client.setInterval(function () {
          return _this46.client.ws.heartbeat(!0);
        }, t);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this47 = this;

        return this.client.ws.destroy(), this.client.user.bot ? (this.client.token = null, Promise.resolve()) : this.client.rest.methods.logout().then(function () {
          _this47.client.token = null;
        });
      }
    }]);

    return s;
  }();

  t.exports = s;
}, function (t, e, n) {
  var i = function () {
    function i(t) {
      _classCallCheck(this, i);

      this.client = t, this.register(n(100)), this.register(n(101)), this.register(n(102)), this.register(n(106)), this.register(n(103)), this.register(n(104)), this.register(n(105)), this.register(n(84)), this.register(n(85)), this.register(n(86)), this.register(n(88)), this.register(n(99)), this.register(n(92)), this.register(n(93)), this.register(n(87)), this.register(n(94)), this.register(n(95)), this.register(n(96)), this.register(n(107)), this.register(n(109)), this.register(n(108)), this.register(n(98)), this.register(n(89)), this.register(n(90)), this.register(n(91)), this.register(n(97));
    }

    _createClass(i, [{
      key: "register",
      value: function register(t) {
        this[t.name.replace(/Action$/, "")] = new t(this.client);
      }
    }]);

    return i;
  }();

  t.exports = i;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i15) {
    _inherits(s, _i15);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.dataManager.newChannel(t);return { channel: n };
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i16) {
    _inherits(s, _i16);

    function s(t) {
      var _this49;

      _classCallCheck(this, s);

      (_this49 = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t)), _this49), _this49.deleted = new Map();return _this49;
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client;var n = e.channels.get(t.id);return n ? (e.dataManager.killChannel(n), this.deleted.set(n.id, n), this.scheduleForDeletion(n.id)) : n = this.deleted.get(t.id) || null, { channel: n };
      }
    }, {
      key: "scheduleForDeletion",
      value: function scheduleForDeletion(t) {
        var _this50 = this;

        this.client.setTimeout(function () {
          return _this50.deleted.delete(t);
        }, this.client.options.restWsBridgeTimeout);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2),
      s = n(0),
      r = n(4);
  var o = function (_i17) {
    _inherits(o, _i17);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.channels.get(t.id);if (n) {
          var _i18 = r(n);return n.setup(t), e.emit(s.Events.CHANNEL_UPDATE, _i18, n), { old: _i18, updated: n };
        }return { old: null, updated: null };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i19) {
    _inherits(r, _i19);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.guild_id),
            i = e.dataManager.newUser(t.user);n && i && e.emit(s.Events.GUILD_BAN_REMOVE, n, i);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i20) {
    _inherits(r, _i20);

    function r(t) {
      var _this53;

      _classCallCheck(this, r);

      (_this53 = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t)), _this53), _this53.deleted = new Map();return _this53;
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client;var n = e.guilds.get(t.id);if (n) {
          if (n.available && t.unavailable) return n.available = !1, e.emit(s.Events.GUILD_UNAVAILABLE, n), { guild: null };e.guilds.delete(n.id), this.deleted.set(n.id, n), this.scheduleForDeletion(n.id);
        } else n = this.deleted.get(t.id) || null;return { guild: n };
      }
    }, {
      key: "scheduleForDeletion",
      value: function scheduleForDeletion(t) {
        var _this54 = this;

        this.client.setTimeout(function () {
          return _this54.deleted.delete(t);
        }, this.client.options.restWsBridgeTimeout);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i21) {
    _inherits(s, _i21);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t, e) {
        var n = this.client,
            i = n.dataManager.newEmoji(e, t);return { emoji: i };
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i22) {
    _inherits(s, _i22);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client;return e.dataManager.killEmoji(t), { emoji: t };
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i23) {
    _inherits(s, _i23);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t, e) {
        this.client.dataManager.updateEmoji(t, e);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i24) {
    _inherits(s, _i24);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t, e) {
        var n = t._addMember(e, !1);return { member: n };
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i25) {
    _inherits(r, _i25);

    function r(t) {
      var _this59;

      _classCallCheck(this, r);

      (_this59 = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t)), _this59), _this59.deleted = new Map();return _this59;
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.guild_id);if (n) {
          var _i26 = n.members.get(t.user.id);return _i26 ? (n.memberCount--, n._removeMember(_i26), this.deleted.set(n.id + t.user.id, _i26), e.status === s.Status.READY && e.emit(s.Events.GUILD_MEMBER_REMOVE, _i26), this.scheduleForDeletion(n.id, t.user.id)) : _i26 = this.deleted.get(n.id + t.user.id) || null, { guild: n, member: _i26 };
        }return { guild: n, member: null };
      }
    }, {
      key: "scheduleForDeletion",
      value: function scheduleForDeletion(t, e) {
        var _this60 = this;

        this.client.setTimeout(function () {
          return _this60.deleted.delete(t + e);
        }, this.client.options.restWsBridgeTimeout);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0),
      r = n(8);
  var o = function (_i27) {
    _inherits(o, _i27);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.guild_id);if (n) {
          var _i28 = n.roles.has(t.role.id),
              _o2 = new r(n, t.role);return n.roles.set(_o2.id, _o2), _i28 || e.emit(s.Events.GUILD_ROLE_CREATE, _o2), { role: _o2 };
        }return { role: null };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i29) {
    _inherits(r, _i29);

    function r(t) {
      var _this62;

      _classCallCheck(this, r);

      (_this62 = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t)), _this62), _this62.deleted = new Map();return _this62;
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.guild_id);if (n) {
          var _i30 = n.roles.get(t.role_id);return _i30 ? (n.roles.delete(t.role_id), this.deleted.set(n.id + t.role_id, _i30), this.scheduleForDeletion(n.id, t.role_id), e.emit(s.Events.GUILD_ROLE_DELETE, _i30)) : _i30 = this.deleted.get(n.id + t.role_id) || null, { role: _i30 };
        }return { role: null };
      }
    }, {
      key: "scheduleForDeletion",
      value: function scheduleForDeletion(t, e) {
        var _this63 = this;

        this.client.setTimeout(function () {
          return _this63.deleted.delete(t + e);
        }, this.client.options.restWsBridgeTimeout);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0),
      r = n(4);
  var o = function (_i31) {
    _inherits(o, _i31);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.guild_id);if (n) {
          var _i32 = t.role;var _o3 = null;var a = n.roles.get(_i32.id);return a && (_o3 = r(a), a.setup(t.role), e.emit(s.Events.GUILD_ROLE_UPDATE, _o3, a)), { old: _o3, updated: a };
        }return { old: null, updated: null };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i33) {
    _inherits(s, _i33);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.guild_id);if (n) {
          var _iteratorNormalCompletion59 = true;
          var _didIteratorError59 = false;
          var _iteratorError59 = undefined;

          try {
            for (var _iterator59 = t.roles[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
              var _i34 = _step59.value;
              var _t24 = n.roles.get(_i34.id);_t24 && (_t24.position = _i34.position);
            }
          } catch (err) {
            _didIteratorError59 = true;
            _iteratorError59 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion59 && _iterator59.return) {
                _iterator59.return();
              }
            } finally {
              if (_didIteratorError59) {
                throw _iteratorError59;
              }
            }
          }
        }return { guild: n };
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i35) {
    _inherits(s, _i35);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.id);if (n) {
          t.presences = t.presences || [];var _iteratorNormalCompletion60 = true;
          var _didIteratorError60 = false;
          var _iteratorError60 = undefined;

          try {
            for (var _iterator60 = t.presences[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
              var _e30 = _step60.value;
              n._setPresence(_e30.user.id, _e30);
            }
          } catch (err) {
            _didIteratorError60 = true;
            _iteratorError60 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion60 && _iterator60.return) {
                _iterator60.return();
              }
            } finally {
              if (_didIteratorError60) {
                throw _iteratorError60;
              }
            }
          }

          t.members = t.members || [];var _iteratorNormalCompletion61 = true;
          var _didIteratorError61 = false;
          var _iteratorError61 = undefined;

          try {
            for (var _iterator61 = t.members[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
              var _i36 = _step61.value;
              var _t25 = n.members.get(_i36.user.id);_t25 ? n._updateMember(_t25, _i36) : n._addMember(_i36, !1);
            }
          } catch (err) {
            _didIteratorError61 = true;
            _iteratorError61 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion61 && _iterator61.return) {
                _iterator61.return();
              }
            } finally {
              if (_didIteratorError61) {
                throw _iteratorError61;
              }
            }
          }
        }
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2),
      s = n(0),
      r = n(4);
  var o = function (_i37) {
    _inherits(o, _i37);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.guilds.get(t.id);if (n) {
          var _i38 = r(n);return n.setup(t), e.emit(s.Events.GUILD_UPDATE, _i38, n), { old: _i38, updated: n };
        }return { old: null, updated: null };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(2),
      s = n(11);
  var r = function (_i39) {
    _inherits(r, _i39);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.channels.get((t instanceof Array ? t[0] : t).channel_id),
            i = e.users.get((t instanceof Array ? t[0] : t).author.id);if (n) {
          var _r4 = n.guild ? n.guild.member(i) : null;if (t instanceof Array) {
            var o = new Array(t.length);for (var a = 0; a < t.length; a++) {
              o[a] = n._cacheMessage(new s(n, t[a], e));
            }return n.lastMessageID = o[o.length - 1].id, i && (i.lastMessageID = o[o.length - 1].id), _r4 && (_r4.lastMessageID = o[o.length - 1].id), { messages: o };
          }{
            var _o4 = n._cacheMessage(new s(n, t, e));return n.lastMessageID = t.id, i && (i.lastMessageID = t.id), _r4 && (_r4.lastMessageID = t.id), { message: _o4 };
          }
        }return { message: null };
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i40) {
    _inherits(s, _i40);

    function s(t) {
      var _this69;

      _classCallCheck(this, s);

      (_this69 = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t)), _this69), _this69.deleted = new Map();return _this69;
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.channels.get(t.channel_id);if (n) {
          var _e31 = n.messages.get(t.id);return _e31 ? (n.messages.delete(_e31.id), this.deleted.set(n.id + _e31.id, _e31), this.scheduleForDeletion(n.id, _e31.id)) : _e31 = this.deleted.get(n.id + t.id) || null, { message: _e31 };
        }return { message: null };
      }
    }, {
      key: "scheduleForDeletion",
      value: function scheduleForDeletion(t, e) {
        var _this70 = this;

        this.client.setTimeout(function () {
          return _this70.deleted.delete(t + e);
        }, this.client.options.restWsBridgeTimeout);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2),
      s = n(3),
      r = n(0);
  var o = function (_i41) {
    _inherits(o, _i41);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.channels.get(t.channel_id),
            i = t.ids,
            o = new s();var _iteratorNormalCompletion62 = true;
        var _didIteratorError62 = false;
        var _iteratorError62 = undefined;

        try {
          for (var _iterator62 = i[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
            var a = _step62.value;
            var _t26 = n.messages.get(a);_t26 && o.set(_t26.id, _t26);
          }
        } catch (err) {
          _didIteratorError62 = true;
          _iteratorError62 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion62 && _iterator62.return) {
              _iterator62.return();
            }
          } finally {
            if (_didIteratorError62) {
              throw _iteratorError62;
            }
          }
        }

        return o.size > 0 && e.emit(r.Events.MESSAGE_BULK_DELETE, o), { messages: o };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i42) {
    _inherits(r, _i42);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client.users.get(t.user_id);if (!e) return !1;var n = this.client.channels.get(t.channel_id);if (!n || "voice" === n.type) return !1;var i = n.messages.get(t.message_id);if (!i) return !1;if (!t.emoji) return !1;var r = i._addReaction(t.emoji, e);return r && this.client.emit(s.Events.MESSAGE_REACTION_ADD, r, e), { message: i, reaction: r, user: e };
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i43) {
    _inherits(r, _i43);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client.users.get(t.user_id);if (!e) return !1;var n = this.client.channels.get(t.channel_id);if (!n || "voice" === n.type) return !1;var i = n.messages.get(t.message_id);if (!i) return !1;if (!t.emoji) return !1;var r = i._removeReaction(t.emoji, e);return r && this.client.emit(s.Events.MESSAGE_REACTION_REMOVE, r, e), { message: i, reaction: r, user: e };
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i44) {
    _inherits(r, _i44);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client.channels.get(t.channel_id);if (!e || "voice" === e.type) return !1;var n = e.messages.get(t.message_id);return !!n && (n._clearReactions(), this.client.emit(s.Events.MESSAGE_REACTION_REMOVE_ALL, n), { message: n });
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0),
      r = n(4);
  var o = function (_i45) {
    _inherits(o, _i45);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.channels.get(t.channel_id);if (n) {
          var _i46 = n.messages.get(t.id);if (_i46) {
            var _n27 = r(_i46);return _i46.patch(t), _i46._edits.unshift(_n27), e.emit(s.Events.MESSAGE_UPDATE, _n27, _i46), { old: _n27, updated: _i46 };
          }return { old: _i46, updated: _i46 };
        }return { old: null, updated: null };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(2);
  var s = function (_i47) {
    _inherits(s, _i47);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.dataManager.newUser(t);return { user: n };
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(2),
      s = n(0);
  var r = function (_i48) {
    _inherits(r, _i48);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client,
            n = e.user.notes.get(t.id),
            i = t.note.length ? t.note : null;return e.user.notes.set(t.id, i), e.emit(s.Events.USER_NOTE_UPDATE, t.id, n, i), { old: n, updated: i };
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(2),
      s = n(0),
      r = n(4);
  var o = function (_i49) {
    _inherits(o, _i49);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.client;if (e.user) {
          if (e.user.equals(t)) return { old: e.user, updated: e.user };var _n28 = r(e.user);return e.user.patch(t), e.emit(s.Events.USER_UPDATE, _n28, e.user), { old: _n28, updated: e.user };
        }return { old: null, updated: null };
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  function i(t) {
    var e = t.split("?")[0];if (e.includes("/channels/") || e.includes("/guilds/")) {
      var _t27 = e.includes("/channels/") ? e.indexOf("/channels/") : e.indexOf("/guilds/"),
          _n29 = e.substring(_t27).split("/")[2];e = e.replace(/(\d{8,})/g, ":id").replace(":id", _n29);
    }return e;
  }var s = n(25),
      r = n(0);
  var o = function () {
    function o(t, e, n, s, r, _o5) {
      _classCallCheck(this, o);

      this.rest = t, this.method = e, this.url = n, this.auth = s, this.data = r, this.file = _o5, this.route = i(this.url);
    }

    _createClass(o, [{
      key: "getAuth",
      value: function getAuth() {
        if (this.rest.client.token && this.rest.client.user && this.rest.client.user.bot) return "Bot " + this.rest.client.token;if (this.rest.client.token) return this.rest.client.token;throw new Error(r.Errors.NO_TOKEN);
      }
    }, {
      key: "gen",
      value: function gen() {
        var t = s[this.method](this.url);return this.auth && t.set("authorization", this.getAuth()), this.file && this.file.file ? (t.attach("file", this.file.file, this.file.name), this.data = this.data || {}, t.field("payload_json", JSON.stringify(this.data))) : this.data && t.send(this.data), this.rest.client.browser || t.set("User-Agent", this.rest.userAgentManager.userAgent), t;
      }
    }]);

    return o;
  }();

  t.exports = o;
}, function (t, e, n) {
  var i = n(0),
      s = n(3),
      r = n(43),
      o = n(154),
      a = n(15),
      h = n(6),
      u = n(14),
      c = n(11),
      l = n(8),
      d = n(32),
      f = n(19),
      p = n(152),
      m = n(28);
  var g = function () {
    function g(t) {
      _classCallCheck(this, g);

      this.rest = t, this.client = t.client;
    }

    _createClass(g, [{
      key: "login",
      value: function login() {
        var _this79 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.client.token;
        return new Promise(function (e, n) {
          if ("string" != typeof t) throw new Error(i.Errors.INVALID_TOKEN);t = t.replace(/^Bot\s*/i, ""), _this79.client.manager.connectToWebSocket(t, e, n);
        });
      }
    }, {
      key: "logout",
      value: function logout() {
        return this.rest.makeRequest("post", i.Endpoints.logout, !0, {});
      }
    }, {
      key: "getGateway",
      value: function getGateway() {
        var _this80 = this;

        return this.rest.makeRequest("get", i.Endpoints.gateway, !0).then(function (t) {
          return _this80.client.ws.gateway = t.url + "/?v=" + i.PROTOCOL_VERSION, _this80.client.ws.gateway;
        });
      }
    }, {
      key: "getBotGateway",
      value: function getBotGateway() {
        return this.rest.makeRequest("get", i.Endpoints.botGateway, !0);
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(t, e) {
        var _this81 = this;

        var _ref26 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            tts = _ref26.tts,
            nonce = _ref26.nonce,
            embed = _ref26.embed,
            disableEveryone = _ref26.disableEveryone,
            split = _ref26.split,
            code = _ref26.code;

        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return new Promise(function (s, o) {
          "undefined" != typeof e && (e = _this81.client.resolver.resolveString(e)), e && ("undefined" == typeof code || "boolean" == typeof code && code !== !0 || (e = a(_this81.client.resolver.resolveString(e), !0), e = "```" + ("boolean" != typeof code ? code || "" : "") + "\n" + e + "\n```"), (disableEveryone || "undefined" == typeof disableEveryone && _this81.client.options.disableEveryone) && (e = e.replace(/@(everyone|here)/g, "@​$1")), split && (e = r(e, "object" == (typeof split === "undefined" ? "undefined" : _typeof(split)) ? split : {})));var c = function c(t) {
            if (e instanceof Array) {
              (function () {
                var i = [];!function e(r, o) {
                  var a = o === r.length ? { tts: tts, embed: embed } : { tts: tts };t.send(r[o], a, o === r.length ? n : null).then(function (t) {
                    return i.push(t), o >= r.length ? s(i) : e(r, ++o);
                  });
                }(e, 0);
              })();
            } else _this81.rest.makeRequest("post", i.Endpoints.channelMessages(t.id), !0, { content: e, tts: tts, nonce: nonce, embed: embed }, n).then(function (t) {
              return s(_this81.client.actions.MessageCreate.handle(t).message);
            }, o);
          };t instanceof h || t instanceof u ? _this81.createDM(t).then(c, o) : c(t);
        });
      }
    }, {
      key: "updateMessage",
      value: function updateMessage(t, e) {
        var _this82 = this;

        var _ref27 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            embed = _ref27.embed,
            code = _ref27.code;

        return e = this.client.resolver.resolveString(e), "undefined" == typeof code || "boolean" == typeof code && code !== !0 || (e = a(this.client.resolver.resolveString(e), !0), e = "```" + ("boolean" != typeof code ? code || "" : "") + "\n" + e + "\n```"), this.rest.makeRequest("patch", i.Endpoints.channelMessage(t.channel.id, t.id), !0, { content: e, embed: embed }).then(function (t) {
          return _this82.client.actions.MessageUpdate.handle(t).updated;
        });
      }
    }, {
      key: "deleteMessage",
      value: function deleteMessage(t) {
        var _this83 = this;

        return this.rest.makeRequest("del", i.Endpoints.channelMessage(t.channel.id, t.id), !0).then(function () {
          return _this83.client.actions.MessageDelete.handle({ id: t.id, channel_id: t.channel.id }).message;
        });
      }
    }, {
      key: "bulkDeleteMessages",
      value: function bulkDeleteMessages(t, e) {
        var _this84 = this;

        return this.rest.makeRequest("post", i.Endpoints.channelMessages(t.id) + "/bulk_delete", !0, { messages: e }).then(function () {
          return _this84.client.actions.MessageDeleteBulk.handle({ channel_id: t.id, ids: e }).messages;
        });
      }
    }, {
      key: "createChannel",
      value: function createChannel(t, e, n, r) {
        var _this85 = this;

        return r instanceof s && (r = r.array()), this.rest.makeRequest("post", i.Endpoints.guildChannels(t.id), !0, { name: e, type: n, permission_overwrites: r }).then(function (t) {
          return _this85.client.actions.ChannelCreate.handle(t).channel;
        });
      }
    }, {
      key: "createDM",
      value: function createDM(t) {
        var _this86 = this;

        var e = this.getExistingDM(t);return e ? Promise.resolve(e) : this.rest.makeRequest("post", i.Endpoints.userChannels(this.client.user.id), !0, { recipient_id: t.id }).then(function (t) {
          return _this86.client.actions.ChannelCreate.handle(t).channel;
        });
      }
    }, {
      key: "getExistingDM",
      value: function getExistingDM(t) {
        return this.client.channels.find(function (e) {
          return e.recipient && e.recipient.id === t.id;
        });
      }
    }, {
      key: "deleteChannel",
      value: function deleteChannel(t) {
        var _this87 = this;

        return (t instanceof h || t instanceof u) && (t = this.getExistingDM(t)), t ? this.rest.makeRequest("del", i.Endpoints.channel(t.id), !0).then(function (e) {
          return e.id = t.id, _this87.client.actions.ChannelDelete.handle(e).channel;
        }) : Promise.reject(new Error("No channel to delete."));
      }
    }, {
      key: "updateChannel",
      value: function updateChannel(t, e) {
        var _this88 = this;

        var n = {};return n.name = (e.name || t.name).trim(), n.topic = e.topic || t.topic, n.position = e.position || t.position, n.bitrate = e.bitrate || t.bitrate, n.user_limit = e.userLimit || t.userLimit, this.rest.makeRequest("patch", i.Endpoints.channel(t.id), !0, n).then(function (t) {
          return _this88.client.actions.ChannelUpdate.handle(t).updated;
        });
      }
    }, {
      key: "leaveGuild",
      value: function leaveGuild(t) {
        var _this89 = this;

        return t.ownerID === this.client.user.id ? Promise.reject(new Error("Guild is owned by the client.")) : this.rest.makeRequest("del", i.Endpoints.meGuild(t.id), !0).then(function () {
          return _this89.client.actions.GuildDelete.handle({ id: t.id }).guild;
        });
      }
    }, {
      key: "createGuild",
      value: function createGuild(t) {
        var _this90 = this;

        return t.icon = this.client.resolver.resolveBase64(t.icon) || null, t.region = t.region || "us-central", new Promise(function (e, n) {
          _this90.rest.makeRequest("post", i.Endpoints.guilds, !0, t).then(function (t) {
            if (_this90.client.guilds.has(t.id)) return void e(_this90.client.guilds.get(t.id));var i = function i(n) {
              n.id === t.id && (_this90.client.removeListener("guildCreate", i), _this90.client.clearTimeout(s), e(n));
            };_this90.client.on("guildCreate", i);var s = _this90.client.setTimeout(function () {
              _this90.client.removeListener("guildCreate", i), n(new Error("Took too long to receive guild data."));
            }, 1e4);
          }, n);
        });
      }
    }, {
      key: "deleteGuild",
      value: function deleteGuild(t) {
        var _this91 = this;

        return this.rest.makeRequest("del", i.Endpoints.guild(t.id), !0).then(function () {
          return _this91.client.actions.GuildDelete.handle({ id: t.id }).guild;
        });
      }
    }, {
      key: "getUser",
      value: function getUser(t) {
        var _this92 = this;

        return this.rest.makeRequest("get", i.Endpoints.user(t), !0).then(function (t) {
          return _this92.client.actions.UserGet.handle(t).user;
        });
      }
    }, {
      key: "updateCurrentUser",
      value: function updateCurrentUser(t, e) {
        var _this93 = this;

        var n = this.client.user,
            s = {};return s.username = t.username || n.username, s.avatar = this.client.resolver.resolveBase64(t.avatar) || n.avatar, n.bot || (s.email = t.email || n.email, s.password = e, t.new_password && (s.new_password = t.newPassword)), this.rest.makeRequest("patch", i.Endpoints.me, !0, s).then(function (t) {
          return _this93.client.actions.UserUpdate.handle(t).updated;
        });
      }
    }, {
      key: "updateGuild",
      value: function updateGuild(t, e) {
        var _this94 = this;

        var n = {};return e.name && (n.name = e.name), e.region && (n.region = e.region), e.verificationLevel && (n.verification_level = Number(e.verificationLevel)), e.afkChannel && (n.afk_channel_id = this.client.resolver.resolveChannel(e.afkChannel).id), e.afkTimeout && (n.afk_timeout = Number(e.afkTimeout)), e.icon && (n.icon = this.client.resolver.resolveBase64(e.icon)), e.owner && (n.owner_id = this.client.resolver.resolveUser(e.owner).id), e.splash && (n.splash = this.client.resolver.resolveBase64(e.splash)), this.rest.makeRequest("patch", i.Endpoints.guild(t.id), !0, n).then(function (t) {
          return _this94.client.actions.GuildUpdate.handle(t).updated;
        });
      }
    }, {
      key: "kickGuildMember",
      value: function kickGuildMember(t, e) {
        var _this95 = this;

        return this.rest.makeRequest("del", i.Endpoints.guildMember(t.id, e.id), !0).then(function () {
          return _this95.client.actions.GuildMemberRemove.handle({ guild_id: t.id, user: e.user }).member;
        });
      }
    }, {
      key: "createGuildRole",
      value: function createGuildRole(t) {
        var _this96 = this;

        return this.rest.makeRequest("post", i.Endpoints.guildRoles(t.id), !0).then(function (e) {
          return _this96.client.actions.GuildRoleCreate.handle({ guild_id: t.id, role: e }).role;
        });
      }
    }, {
      key: "deleteGuildRole",
      value: function deleteGuildRole(t) {
        var _this97 = this;

        return this.rest.makeRequest("del", i.Endpoints.guildRole(t.guild.id, t.id), !0).then(function () {
          return _this97.client.actions.GuildRoleDelete.handle({ guild_id: t.guild.id, role_id: t.id }).role;
        });
      }
    }, {
      key: "setChannelOverwrite",
      value: function setChannelOverwrite(t, e) {
        return this.rest.makeRequest("put", i.Endpoints.channelPermissions(t.id) + "/" + e.id, !0, e);
      }
    }, {
      key: "deletePermissionOverwrites",
      value: function deletePermissionOverwrites(t) {
        return this.rest.makeRequest("del", i.Endpoints.channelPermissions(t.channel.id) + "/" + t.id, !0).then(function () {
          return t;
        });
      }
    }, {
      key: "getChannelMessages",
      value: function getChannelMessages(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = [];e.limit && n.push("limit=" + e.limit), e.around ? n.push("around=" + e.around) : e.before ? n.push("before=" + e.before) : e.after && n.push("after=" + e.after);var s = i.Endpoints.channelMessages(t.id);return n.length > 0 && (s += "?" + n.join("&")), this.rest.makeRequest("get", s, !0);
      }
    }, {
      key: "getChannelMessage",
      value: function getChannelMessage(t, e) {
        var n = t.messages.get(e);return n ? Promise.resolve(n) : this.rest.makeRequest("get", i.Endpoints.channelMessage(t.id, e), !0);
      }
    }, {
      key: "getGuildMember",
      value: function getGuildMember(t, e) {
        var _this98 = this;

        return this.rest.makeRequest("get", i.Endpoints.guildMember(t.id, e.id), !0).then(function (e) {
          return _this98.client.actions.GuildMemberGet.handle(t, e).member;
        });
      }
    }, {
      key: "updateGuildMember",
      value: function updateGuildMember(t, e) {
        e.channel && (e.channel_id = this.client.resolver.resolveChannel(e.channel).id), e.roles && (e.roles = e.roles.map(function (t) {
          return t instanceof l ? t.id : t;
        }));var n = i.Endpoints.guildMember(t.guild.id, t.id);if (t.id === this.client.user.id) {
          var _s3 = Object.keys(e);1 === _s3.length && "nick" === _s3[0] && (n = i.Endpoints.guildMemberNickname(t.guild.id));
        }return this.rest.makeRequest("patch", n, !0, e).then(function (e) {
          return t.guild._updateMember(t, e).mem;
        });
      }
    }, {
      key: "addMemberRole",
      value: function addMemberRole(t, e) {
        return this.rest.makeRequest("put", i.Endpoints.guildMemberRole(t.guild.id, t.id, e.id), !0).then(function () {
          return t._roles.includes(e.id) || t._roles.push(e.id), t;
        });
      }
    }, {
      key: "removeMemberRole",
      value: function removeMemberRole(t, e) {
        return this.rest.makeRequest("delete", i.Endpoints.guildMemberRole(t.guild.id, t.id, e.id), !0).then(function () {
          var n = t._roles.indexOf(e.id);return n >= 0 && t._roles.splice(n, 1), t;
        });
      }
    }, {
      key: "sendTyping",
      value: function sendTyping(t) {
        return this.rest.makeRequest("post", i.Endpoints.channel(t) + "/typing", !0);
      }
    }, {
      key: "banGuildMember",
      value: function banGuildMember(t, e) {
        var _this99 = this;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var s = this.client.resolver.resolveUserID(e);return s ? this.rest.makeRequest("put", i.Endpoints.guildBans(t.id) + "/" + s + "?delete-message-days=" + n, !0, { "delete-message-days": n }).then(function () {
          if (e instanceof u) return e;var n = _this99.client.resolver.resolveUser(s);return n ? (e = _this99.client.resolver.resolveGuildMember(t, n), e || n) : s;
        }) : Promise.reject(new Error("Couldn't resolve the user ID to ban."));
      }
    }, {
      key: "unbanGuildMember",
      value: function unbanGuildMember(t, e) {
        var _this100 = this;

        return new Promise(function (n, s) {
          var r = _this100.client.resolver.resolveUserID(e);if (!r) throw new Error("Couldn't resolve the user ID to unban.");var o = function o(e, s) {
            e.id === t.id && s.id === r && (_this100.client.removeListener(i.Events.GUILD_BAN_REMOVE, o), _this100.client.clearTimeout(a), n(s));
          };_this100.client.on(i.Events.GUILD_BAN_REMOVE, o);var a = _this100.client.setTimeout(function () {
            _this100.client.removeListener(i.Events.GUILD_BAN_REMOVE, o), s(new Error("Took too long to receive the ban remove event."));
          }, 1e4);_this100.rest.makeRequest("del", i.Endpoints.guildBans(t.id) + "/" + r, !0).catch(function (t) {
            _this100.client.removeListener(i.Events.GUILD_BAN_REMOVE, o), _this100.client.clearTimeout(a), s(t);
          });
        });
      }
    }, {
      key: "getGuildBans",
      value: function getGuildBans(t) {
        var _this101 = this;

        return this.rest.makeRequest("get", i.Endpoints.guildBans(t.id), !0).then(function (t) {
          var e = new s();var _iteratorNormalCompletion63 = true;
          var _didIteratorError63 = false;
          var _iteratorError63 = undefined;

          try {
            for (var _iterator63 = t[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
              var _n30 = _step63.value;
              var _t28 = _this101.client.dataManager.newUser(_n30.user);e.set(_t28.id, _t28);
            }
          } catch (err) {
            _didIteratorError63 = true;
            _iteratorError63 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion63 && _iterator63.return) {
                _iterator63.return();
              }
            } finally {
              if (_didIteratorError63) {
                throw _iteratorError63;
              }
            }
          }

          return e;
        });
      }
    }, {
      key: "updateGuildRole",
      value: function updateGuildRole(t, e) {
        var _this102 = this;

        var n = {};if (n.name = e.name || t.name, n.position = "undefined" != typeof e.position ? e.position : t.position, n.color = e.color || t.color, "string" == typeof n.color && n.color.startsWith("#") && (n.color = parseInt(n.color.replace("#", ""), 16)), n.hoist = "undefined" != typeof e.hoist ? e.hoist : t.hoist, n.mentionable = "undefined" != typeof e.mentionable ? e.mentionable : t.mentionable, e.permissions) {
          var _t29 = 0;var _iteratorNormalCompletion64 = true;
          var _didIteratorError64 = false;
          var _iteratorError64 = undefined;

          try {
            for (var _iterator64 = e.permissions[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
              var _s4 = _step64.value;
              "string" == typeof _s4 && (_s4 = i.PermissionFlags[_s4]), _t29 |= _s4;
            }
          } catch (err) {
            _didIteratorError64 = true;
            _iteratorError64 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion64 && _iterator64.return) {
                _iterator64.return();
              }
            } finally {
              if (_didIteratorError64) {
                throw _iteratorError64;
              }
            }
          }

          n.permissions = _t29;
        } else n.permissions = t.permissions;return this.rest.makeRequest("patch", i.Endpoints.guildRole(t.guild.id, t.id), !0, n).then(function (e) {
          return _this102.client.actions.GuildRoleUpdate.handle({ role: e, guild_id: t.guild.id }).updated;
        });
      }
    }, {
      key: "pinMessage",
      value: function pinMessage(t) {
        return this.rest.makeRequest("put", i.Endpoints.channel(t.channel.id) + "/pins/" + t.id, !0).then(function () {
          return t;
        });
      }
    }, {
      key: "unpinMessage",
      value: function unpinMessage(t) {
        return this.rest.makeRequest("del", i.Endpoints.channel(t.channel.id) + "/pins/" + t.id, !0).then(function () {
          return t;
        });
      }
    }, {
      key: "getChannelPinnedMessages",
      value: function getChannelPinnedMessages(t) {
        return this.rest.makeRequest("get", i.Endpoints.channel(t.id) + "/pins", !0);
      }
    }, {
      key: "createChannelInvite",
      value: function createChannelInvite(t, e) {
        var _this103 = this;

        var n = {};return n.temporary = e.temporary, n.max_age = e.maxAge, n.max_uses = e.maxUses, this.rest.makeRequest("post", "" + i.Endpoints.channelInvites(t.id), !0, n).then(function (t) {
          return new d(_this103.client, t);
        });
      }
    }, {
      key: "deleteInvite",
      value: function deleteInvite(t) {
        return this.rest.makeRequest("del", i.Endpoints.invite(t.code), !0).then(function () {
          return t;
        });
      }
    }, {
      key: "getInvite",
      value: function getInvite(t) {
        var _this104 = this;

        return this.rest.makeRequest("get", i.Endpoints.invite(t), !0).then(function (t) {
          return new d(_this104.client, t);
        });
      }
    }, {
      key: "getGuildInvites",
      value: function getGuildInvites(t) {
        var _this105 = this;

        return this.rest.makeRequest("get", i.Endpoints.guildInvites(t.id), !0).then(function (t) {
          var e = new s();var _iteratorNormalCompletion65 = true;
          var _didIteratorError65 = false;
          var _iteratorError65 = undefined;

          try {
            for (var _iterator65 = t[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
              var _n31 = _step65.value;
              var _t30 = new d(_this105.client, _n31);e.set(_t30.code, _t30);
            }
          } catch (err) {
            _didIteratorError65 = true;
            _iteratorError65 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion65 && _iterator65.return) {
                _iterator65.return();
              }
            } finally {
              if (_didIteratorError65) {
                throw _iteratorError65;
              }
            }
          }

          return e;
        });
      }
    }, {
      key: "pruneGuildMembers",
      value: function pruneGuildMembers(t, e, n) {
        return this.rest.makeRequest(n ? "get" : "post", i.Endpoints.guildPrune(t.id) + "?days=" + e, !0).then(function (t) {
          return t.pruned;
        });
      }
    }, {
      key: "createEmoji",
      value: function createEmoji(t, e, n) {
        var _this106 = this;

        return this.rest.makeRequest("post", "" + i.Endpoints.guildEmojis(t.id), !0, { name: n, image: e }).then(function (e) {
          return _this106.client.actions.EmojiCreate.handle(e, t).emoji;
        });
      }
    }, {
      key: "deleteEmoji",
      value: function deleteEmoji(t) {
        var _this107 = this;

        return this.rest.makeRequest("delete", i.Endpoints.guildEmojis(t.guild.id) + "/" + t.id, !0).then(function () {
          return _this107.client.actions.EmojiDelete.handle(t).data;
        });
      }
    }, {
      key: "getWebhook",
      value: function getWebhook(t, e) {
        var _this108 = this;

        return this.rest.makeRequest("get", i.Endpoints.webhook(t, e), !e).then(function (t) {
          return new f(_this108.client, t);
        });
      }
    }, {
      key: "getGuildWebhooks",
      value: function getGuildWebhooks(t) {
        var _this109 = this;

        return this.rest.makeRequest("get", i.Endpoints.guildWebhooks(t.id), !0).then(function (t) {
          var e = new s();var _iteratorNormalCompletion66 = true;
          var _didIteratorError66 = false;
          var _iteratorError66 = undefined;

          try {
            for (var _iterator66 = t[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
              var _n32 = _step66.value;
              e.set(_n32.id, new f(_this109.client, _n32));
            }
          } catch (err) {
            _didIteratorError66 = true;
            _iteratorError66 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion66 && _iterator66.return) {
                _iterator66.return();
              }
            } finally {
              if (_didIteratorError66) {
                throw _iteratorError66;
              }
            }
          }

          return e;
        });
      }
    }, {
      key: "getChannelWebhooks",
      value: function getChannelWebhooks(t) {
        var _this110 = this;

        return this.rest.makeRequest("get", i.Endpoints.channelWebhooks(t.id), !0).then(function (t) {
          var e = new s();var _iteratorNormalCompletion67 = true;
          var _didIteratorError67 = false;
          var _iteratorError67 = undefined;

          try {
            for (var _iterator67 = t[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
              var _n33 = _step67.value;
              e.set(_n33.id, new f(_this110.client, _n33));
            }
          } catch (err) {
            _didIteratorError67 = true;
            _iteratorError67 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion67 && _iterator67.return) {
                _iterator67.return();
              }
            } finally {
              if (_didIteratorError67) {
                throw _iteratorError67;
              }
            }
          }

          return e;
        });
      }
    }, {
      key: "createWebhook",
      value: function createWebhook(t, e, n) {
        var _this111 = this;

        return this.rest.makeRequest("post", i.Endpoints.channelWebhooks(t.id), !0, { name: e, avatar: n }).then(function (t) {
          return new f(_this111.client, t);
        });
      }
    }, {
      key: "editWebhook",
      value: function editWebhook(t, e, n) {
        return this.rest.makeRequest("patch", i.Endpoints.webhook(t.id, t.token), !1, { name: e, avatar: n }).then(function (e) {
          return t.name = e.name, t.avatar = e.avatar, t;
        });
      }
    }, {
      key: "deleteWebhook",
      value: function deleteWebhook(t) {
        return this.rest.makeRequest("delete", i.Endpoints.webhook(t.id, t.token), !1);
      }
    }, {
      key: "sendWebhookMessage",
      value: function sendWebhookMessage(t, e) {
        var _ref28 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            avatarURL = _ref28.avatarURL,
            tts = _ref28.tts,
            disableEveryone = _ref28.disableEveryone,
            embeds = _ref28.embeds;

        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return "undefined" != typeof e && (e = this.client.resolver.resolveString(e)), e && (disableEveryone || "undefined" == typeof disableEveryone && this.client.options.disableEveryone) && (e = e.replace(/@(everyone|here)/g, "@​$1")), this.rest.makeRequest("post", i.Endpoints.webhook(t.id, t.token) + "?wait=true", !1, { username: t.name, avatar_url: avatarURL, content: e, tts: tts, file: n, embeds: embeds });
      }
    }, {
      key: "sendSlackWebhookMessage",
      value: function sendSlackWebhookMessage(t, e) {
        return this.rest.makeRequest("post", i.Endpoints.webhook(t.id, t.token) + "/slack?wait=true", !1, e);
      }
    }, {
      key: "fetchUserProfile",
      value: function fetchUserProfile(t) {
        return this.rest.makeRequest("get", i.Endpoints.userProfile(t.id), !0).then(function (e) {
          return new p(t, e);
        });
      }
    }, {
      key: "fetchMeMentions",
      value: function fetchMeMentions(t) {
        var _this112 = this;

        return t.guild && (t.guild = t.guild.id ? t.guild.id : t.guild), this.rest.makeRequest("get", i.Endpoints.meMentions(t.limit, t.roles, t.everyone, t.guild)).then(function (t) {
          return t.body.map(function (t) {
            return new c(_this112.client.channels.get(t.channel_id), t, _this112.client);
          });
        });
      }
    }, {
      key: "addFriend",
      value: function addFriend(t) {
        return this.rest.makeRequest("post", i.Endpoints.relationships("@me"), !0, { username: t.username, discriminator: t.discriminator }).then(function () {
          return t;
        });
      }
    }, {
      key: "removeFriend",
      value: function removeFriend(t) {
        return this.rest.makeRequest("delete", i.Endpoints.relationships("@me") + "/" + t.id, !0).then(function () {
          return t;
        });
      }
    }, {
      key: "blockUser",
      value: function blockUser(t) {
        return this.rest.makeRequest("put", i.Endpoints.relationships("@me") + "/" + t.id, !0, { type: 2 }).then(function () {
          return t;
        });
      }
    }, {
      key: "unblockUser",
      value: function unblockUser(t) {
        return this.rest.makeRequest("delete", i.Endpoints.relationships("@me") + "/" + t.id, !0).then(function () {
          return t;
        });
      }
    }, {
      key: "setRolePositions",
      value: function setRolePositions(t, e) {
        var _this113 = this;

        return this.rest.makeRequest("patch", i.Endpoints.guildRoles(t), !0, e).then(function () {
          return _this113.client.actions.GuildRolesPositionUpdate.handle({ guild_id: t, roles: e }).guild;
        });
      }
    }, {
      key: "addMessageReaction",
      value: function addMessageReaction(t, e) {
        var _this114 = this;

        return this.rest.makeRequest("put", i.Endpoints.selfMessageReaction(t.channel.id, t.id, e), !0).then(function () {
          return _this114.client.actions.MessageReactionAdd.handle({ user_id: _this114.client.user.id, message_id: t.id, emoji: o(e), channel_id: t.channel.id }).reaction;
        });
      }
    }, {
      key: "removeMessageReaction",
      value: function removeMessageReaction(t, e, n) {
        var _this115 = this;

        var s = i.Endpoints.selfMessageReaction(t.channel.id, t.id, e);return n.id !== this.client.user.id && (s = i.Endpoints.userMessageReaction(t.channel.id, t.id, e, null, n.id)), this.rest.makeRequest("delete", s, !0).then(function () {
          return _this115.client.actions.MessageReactionRemove.handle({ user_id: n.id, message_id: t.id, emoji: o(e), channel_id: t.channel.id }).reaction;
        });
      }
    }, {
      key: "removeMessageReactions",
      value: function removeMessageReactions(t) {
        return this.rest.makeRequest("delete", i.Endpoints.messageReactions(t.channel.id, t.id), !0).then(function () {
          return t;
        });
      }
    }, {
      key: "getMessageReactionUsers",
      value: function getMessageReactionUsers(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return this.rest.makeRequest("get", i.Endpoints.messageReaction(t.channel.id, t.id, e, n), !0);
      }
    }, {
      key: "getMyApplication",
      value: function getMyApplication() {
        var _this116 = this;

        return this.rest.makeRequest("get", i.Endpoints.myApplication, !0).then(function (t) {
          return new m(_this116.client, t);
        });
      }
    }, {
      key: "setNote",
      value: function setNote(t, e) {
        return this.rest.makeRequest("put", i.Endpoints.note(t.id), !0, { note: e }).then(function () {
          return t;
        });
      }
    }]);

    return g;
  }();

  t.exports = g;
}, function (t, e, n) {
  var i = n(52);
  var s = function (_i50) {
    _inherits(s, _i50);

    function s(t, e) {
      var _this117;

      _classCallCheck(this, s);

      (_this117 = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, e)), _this117), _this117.requestRemaining = 1, _this117.first = !0;return _this117;
    }

    _createClass(s, [{
      key: "push",
      value: function push(t) {
        _get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "push", this).call(this, t), this.handle();
      }
    }, {
      key: "handleNext",
      value: function handleNext(t) {
        var _this118 = this;

        this.waiting || (this.waiting = !0, this.restManager.client.setTimeout(function () {
          _this118.requestRemaining = _this118.requestLimit, _this118.waiting = !1, _this118.handle();
        }, t));
      }
    }, {
      key: "execute",
      value: function execute(t) {
        var _this119 = this;

        t.request.gen().end(function (e, n) {
          if (n && n.headers && (_this119.requestLimit = n.headers["x-ratelimit-limit"], _this119.requestResetTime = 1e3 * Number(n.headers["x-ratelimit-reset"]), _this119.requestRemaining = Number(n.headers["x-ratelimit-remaining"]), _this119.timeDifference = Date.now() - new Date(n.headers.date).getTime(), _this119.handleNext(_this119.requestResetTime - Date.now() + _this119.timeDifference + _this119.restManager.client.options.restTimeOffset)), e) 429 === e.status ? (_this119.requestRemaining = 0, _this119.queue.unshift(t), _this119.restManager.client.setTimeout(function () {
            _this119.globalLimit = !1, _this119.handle();
          }, Number(n.headers["retry-after"]) + _this119.restManager.client.options.restTimeOffset), n.headers["x-ratelimit-global"] && (_this119.globalLimit = !0)) : t.reject(e);else {
            _this119.globalLimit = !1;var _e32 = n && n.body ? n.body : {};t.resolve(_e32), _this119.first && (_this119.first = !1, _this119.handle());
          }
        });
      }
    }, {
      key: "handle",
      value: function handle() {
        if (_get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "handle", this).call(this), !(this.requestRemaining < 1 || 0 === this.queue.length || this.globalLimit)) for (; this.queue.length > 0 && this.requestRemaining > 0;) {
          this.execute(this.queue.shift()), this.requestRemaining--;
        }
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(52);
  var s = function (_i51) {
    _inherits(s, _i51);

    function s(t, e) {
      var _this120;

      _classCallCheck(this, s);

      (_this120 = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, e)), _this120), _this120.waiting = !1, _this120.endpoint = e, _this120.timeDifference = 0;return _this120;
    }

    _createClass(s, [{
      key: "push",
      value: function push(t) {
        _get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "push", this).call(this, t), this.handle();
      }
    }, {
      key: "execute",
      value: function execute(t) {
        var _this121 = this;

        return new Promise(function (e) {
          t.request.gen().end(function (n, i) {
            if (i && i.headers && (_this121.requestLimit = i.headers["x-ratelimit-limit"], _this121.requestResetTime = 1e3 * Number(i.headers["x-ratelimit-reset"]), _this121.requestRemaining = Number(i.headers["x-ratelimit-remaining"]), _this121.timeDifference = Date.now() - new Date(i.headers.date).getTime()), n) 429 === n.status ? (_this121.restManager.client.setTimeout(function () {
              _this121.waiting = !1, _this121.globalLimit = !1, e();
            }, Number(i.headers["retry-after"]) + _this121.restManager.client.options.restTimeOffset), i.headers["x-ratelimit-global"] && (_this121.globalLimit = !0)) : (_this121.queue.shift(), _this121.waiting = !1, t.reject(n), e(n));else {
              (function () {
                _this121.queue.shift(), _this121.globalLimit = !1;var n = i && i.body ? i.body : {};t.resolve(n), 0 === _this121.requestRemaining ? _this121.restManager.client.setTimeout(function () {
                  _this121.waiting = !1, e(n);
                }, _this121.requestResetTime - Date.now() + _this121.timeDifference + _this121.restManager.client.options.restTimeOffset) : (_this121.waiting = !1, e(n));
              })();
            }
          });
        });
      }
    }, {
      key: "handle",
      value: function handle() {
        var _this122 = this;

        if (_get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "handle", this).call(this), !this.waiting && 0 !== this.queue.length && !this.globalLimit) {
          this.waiting = !0;var _t31 = this.queue[0];this.execute(_t31).then(function () {
            return _this122.handle();
          });
        }
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(0);
  var s = function () {
    function s(t) {
      _classCallCheck(this, s);

      this.restManager = t, this._userAgent = { url: "https://github.com/hydrabolt/discord.js", version: i.Package.version };
    }

    _createClass(s, [{
      key: "set",
      value: function set(t) {
        this._userAgent.url = t.url || "https://github.com/hydrabolt/discord.js", this._userAgent.version = t.version || i.Package.version;
      }
    }, {
      key: "userAgent",
      get: function get() {
        return "DiscordBot (" + this._userAgent.url + ", " + this._userAgent.version + ")";
      }
    }]);

    return s;
  }();

  t.exports = s;
}, function (t, e, n) {
  (function (e) {
    var i = "undefined" != typeof window,
        s = n(21).EventEmitter,
        r = n(0),
        o = n(53),
        a = n(67),
        h = n(49),
        u = n(116);var c = void 0,
        l = void 0,
        d = JSON.stringify;if (i) c = window.WebSocket;else {
      try {
        c = n(158);
      } catch (t) {
        c = n(159);
      }try {
        l = n(157), d = l.pack;
      } catch (t) {
        l = null;
      }
    }
    var f = function (_s5) {
      _inherits(f, _s5);

      function f(t) {
        var _this123;

        _classCallCheck(this, f);

        (_this123 = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this)), _this123), _this123.client = t, _this123.packetManager = new u(_this123), _this123.status = r.Status.IDLE, _this123.sessionID = null, _this123.sequence = -1, _this123.gateway = null, _this123.normalReady = !1, _this123.ws = null, _this123.disabledEvents = {};var _iteratorNormalCompletion68 = true;
        var _didIteratorError68 = false;
        var _iteratorError68 = undefined;

        try {
          for (var _iterator68 = t.options.disabledEvents[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
            var _e33 = _step68.value;
            _this123.disabledEvents[_e33] = !0;
          }
        } catch (err) {
          _didIteratorError68 = true;
          _iteratorError68 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion68 && _iterator68.return) {
              _iterator68.return();
            }
          } finally {
            if (_didIteratorError68) {
              throw _iteratorError68;
            }
          }
        }

        _this123.first = !0, _this123.lastHeartbeatAck = !0;return _this123;
      }

      _createClass(f, [{
        key: "_connect",
        value: function _connect(t) {
          var _this124 = this;

          this.client.emit("debug", "Connecting to gateway " + t), this.normalReady = !1, this.status !== r.Status.RECONNECTING && (this.status = r.Status.CONNECTING), this.ws = new c(t), i && (this.ws.binaryType = "arraybuffer"), this.ws.onopen = this.eventOpen.bind(this), this.ws.onmessage = this.eventMessage.bind(this), this.ws.onclose = this.eventClose.bind(this), this.ws.onerror = this.eventError.bind(this), this._queue = [], this._remaining = 120, this.client.setInterval(function () {
            _this124._remaining = 120, _this124._remainingReset = Date.now();
          }, 6e4);
        }
      }, {
        key: "connect",
        value: function connect(t) {
          var _this125 = this;

          t = t + "&encoding=" + (l ? "etf" : "json"), this.first ? (this._connect(t), this.first = !1) : this.client.setTimeout(function () {
            return _this125._connect(t);
          }, 5500);
        }
      }, {
        key: "heartbeat",
        value: function heartbeat(t) {
          return t && !this.lastHeartbeatAck ? void this.ws.close(1007) : (this.client.emit("debug", "Sending heartbeat"), this.client._pingTimestamp = Date.now(), this.client.ws.send({ op: r.OPCodes.HEARTBEAT, d: this.sequence }, !0), void (this.lastHeartbeatAck = !1));
        }
      }, {
        key: "send",
        value: function send(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return e ? void this._send(d(t)) : (this._queue.push(d(t)), void this.doQueue());
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.ws.close(1e3), this._queue = [], this.status = r.Status.IDLE;
        }
      }, {
        key: "_send",
        value: function _send(t) {
          this.ws.readyState === c.OPEN && (this.emit("send", t), this.ws.send(t));
        }
      }, {
        key: "doQueue",
        value: function doQueue() {
          var t = this._queue[0];if (this.ws.readyState === c.OPEN && t) {
            if (0 === this.remaining) return void this.client.setTimeout(this.doQueue.bind(this), Date.now() - this.remainingReset);this._remaining--, this._send(t), this._queue.shift(), this.doQueue();
          }
        }
      }, {
        key: "eventOpen",
        value: function eventOpen() {
          this.client.emit("debug", "Connection to gateway opened"), this.lastHeartbeatAck = !0, this.status === r.Status.RECONNECTING ? this._sendResume() : this._sendNewIdentify();
        }
      }, {
        key: "_sendResume",
        value: function _sendResume() {
          if (!this.sessionID) return void this._sendNewIdentify();this.client.emit("debug", "Identifying as resumed session");var t = { token: this.client.token, session_id: this.sessionID, seq: this.sequence };this.send({ op: r.OPCodes.RESUME, d: t });
        }
      }, {
        key: "_sendNewIdentify",
        value: function _sendNewIdentify() {
          this.reconnecting = !1;var t = this.client.options.ws;t.token = this.client.token, this.client.options.shardCount > 0 && (t.shard = [Number(this.client.options.shardId), Number(this.client.options.shardCount)]), this.client.emit("debug", "Identifying as new session"), this.send({ op: r.OPCodes.IDENTIFY, d: t }), this.sequence = -1;
        }
      }, {
        key: "eventClose",
        value: function eventClose(t) {
          this.emit("close", t), this.client.clearInterval(this.client.manager.heartbeatInterval), this.status = r.Status.DISCONNECTED, this._queue = [], this.reconnecting || this.client.emit(r.Events.DISCONNECT, t), 4004 !== t.code && 4010 !== t.code && (this.reconnecting || 1e3 === t.code || this.tryReconnect());
        }
      }, {
        key: "eventMessage",
        value: function eventMessage(t) {
          var e = this.tryParseEventData(t.data);return null === e ? (this.eventError(new Error(r.Errors.BAD_WS_MESSAGE)), !1) : (this.client.emit("raw", e), e.op === r.OPCodes.HELLO && this.client.manager.setupKeepAlive(e.d.heartbeat_interval), this.packetManager.handle(e));
        }
      }, {
        key: "parseEventData",
        value: function parseEventData(t) {
          return l ? (t instanceof ArrayBuffer && (t = o(t)), l.unpack(t)) : (t instanceof ArrayBuffer ? t = a.inflate(t, { to: "string" }) : t instanceof e && (t = h.inflateSync(t).toString()), JSON.parse(t));
        }
      }, {
        key: "tryParseEventData",
        value: function tryParseEventData(t) {
          try {
            return this.parseEventData(t);
          } catch (t) {
            return null;
          }
        }
      }, {
        key: "eventError",
        value: function eventError(t) {
          this.client.listenerCount("error") > 0 && this.client.emit("error", t), this.tryReconnect();
        }
      }, {
        key: "_emitReady",
        value: function _emitReady() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.status = r.Status.READY, this.client.emit(r.Events.READY), this.packetManager.handleQueue(), this.normalReady = t;
        }
      }, {
        key: "checkIfReady",
        value: function checkIfReady() {
          var _this126 = this;

          if (this.status !== r.Status.READY && this.status !== r.Status.NEARLY) {
            var _t32 = 0;var _iteratorNormalCompletion69 = true;
            var _didIteratorError69 = false;
            var _iteratorError69 = undefined;

            try {
              for (var _iterator69 = this.client.guilds.keys()[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
                var _e34 = _step69.value;
                _t32 += this.client.guilds.get(_e34).available ? 0 : 1;
              }
            } catch (err) {
              _didIteratorError69 = true;
              _iteratorError69 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion69 && _iterator69.return) {
                  _iterator69.return();
                }
              } finally {
                if (_didIteratorError69) {
                  throw _iteratorError69;
                }
              }
            }

            if (0 === _t32) {
              if (this.status = r.Status.NEARLY, this.client.options.fetchAllMembers) {
                var _t33 = this.client.guilds.map(function (t) {
                  return t.fetchMembers();
                });return void Promise.all(_t33).then(function () {
                  return _this126._emitReady();
                }, function (t) {
                  _this126.client.emit(r.Events.WARN, "Error in pre-ready guild member fetching"), _this126.client.emit(r.Events.ERROR, t), _this126._emitReady();
                });
              }this._emitReady();
            }
          }
        }
      }, {
        key: "tryReconnect",
        value: function tryReconnect() {
          this.status !== r.Status.RECONNECTING && this.status !== r.Status.CONNECTING && (this.status = r.Status.RECONNECTING, this.ws.close(), this.packetManager.handleQueue(), this.client.emit(r.Events.RECONNECTING), this.connect(this.client.ws.gateway));
        }
      }]);

      return f;
    }(s);

    t.exports = f;
  }).call(e, n(20).Buffer);
}, function (t, e, n) {
  var i = n(0),
      s = [i.WSEvents.READY, i.WSEvents.GUILD_CREATE, i.WSEvents.GUILD_DELETE, i.WSEvents.GUILD_MEMBERS_CHUNK, i.WSEvents.GUILD_MEMBER_ADD, i.WSEvents.GUILD_MEMBER_REMOVE];
  var r = function () {
    function r(t) {
      _classCallCheck(this, r);

      this.ws = t, this.handlers = {}, this.queue = [], this.register(i.WSEvents.READY, n(143)), this.register(i.WSEvents.GUILD_CREATE, n(123)), this.register(i.WSEvents.GUILD_DELETE, n(124)), this.register(i.WSEvents.GUILD_UPDATE, n(134)), this.register(i.WSEvents.GUILD_BAN_ADD, n(121)), this.register(i.WSEvents.GUILD_BAN_REMOVE, n(122)), this.register(i.WSEvents.GUILD_MEMBER_ADD, n(126)), this.register(i.WSEvents.GUILD_MEMBER_REMOVE, n(127)), this.register(i.WSEvents.GUILD_MEMBER_UPDATE, n(128)), this.register(i.WSEvents.GUILD_ROLE_CREATE, n(130)), this.register(i.WSEvents.GUILD_ROLE_DELETE, n(131)), this.register(i.WSEvents.GUILD_ROLE_UPDATE, n(132)), this.register(i.WSEvents.GUILD_EMOJIS_UPDATE, n(125)), this.register(i.WSEvents.GUILD_MEMBERS_CHUNK, n(129)), this.register(i.WSEvents.CHANNEL_CREATE, n(117)), this.register(i.WSEvents.CHANNEL_DELETE, n(118)), this.register(i.WSEvents.CHANNEL_UPDATE, n(120)), this.register(i.WSEvents.CHANNEL_PINS_UPDATE, n(119)), this.register(i.WSEvents.PRESENCE_UPDATE, n(142)), this.register(i.WSEvents.USER_UPDATE, n(148)), this.register(i.WSEvents.USER_NOTE_UPDATE, n(147)), this.register(i.WSEvents.VOICE_STATE_UPDATE, n(150)), this.register(i.WSEvents.TYPING_START, n(146)), this.register(i.WSEvents.MESSAGE_CREATE, n(135)), this.register(i.WSEvents.MESSAGE_DELETE, n(136)), this.register(i.WSEvents.MESSAGE_UPDATE, n(141)), this.register(i.WSEvents.MESSAGE_DELETE_BULK, n(137)), this.register(i.WSEvents.VOICE_SERVER_UPDATE, n(149)), this.register(i.WSEvents.GUILD_SYNC, n(133)), this.register(i.WSEvents.RELATIONSHIP_ADD, n(144)), this.register(i.WSEvents.RELATIONSHIP_REMOVE, n(145)), this.register(i.WSEvents.MESSAGE_REACTION_ADD, n(138)), this.register(i.WSEvents.MESSAGE_REACTION_REMOVE, n(139)), this.register(i.WSEvents.MESSAGE_REACTION_REMOVE_ALL, n(140));
    }

    _createClass(r, [{
      key: "register",
      value: function register(t, e) {
        this.handlers[t] = new e(this);
      }
    }, {
      key: "handleQueue",
      value: function handleQueue() {
        var _this127 = this;

        this.queue.forEach(function (t, e) {
          _this127.handle(_this127.queue[e]), _this127.queue.splice(e, 1);
        });
      }
    }, {
      key: "setSequence",
      value: function setSequence(t) {
        t && t > this.ws.sequence && (this.ws.sequence = t);
      }
    }, {
      key: "handle",
      value: function handle(t) {
        var _this128 = this;

        return t.op === i.OPCodes.RECONNECT ? (this.setSequence(t.s), this.ws.tryReconnect(), !1) : t.op === i.OPCodes.INVALID_SESSION ? (t.d ? setTimeout(function () {
          _this128.ws._sendResume();
        }, 2500) : (this.ws.sessionID = null, this.ws._sendNewIdentify()), !1) : (t.op === i.OPCodes.HEARTBEAT_ACK ? (this.ws.client._pong(this.ws.client._pingTimestamp), this.ws.lastHeartbeatAck = !0, this.ws.client.emit("debug", "Heartbeat acknowledged")) : t.op === i.OPCodes.HEARTBEAT && (this.client.ws.send({ op: i.OPCodes.HEARTBEAT, d: this.client.ws.sequence }), this.ws.client.emit("debug", "Received gateway heartbeat")), this.ws.status === i.Status.RECONNECTING && (this.ws.reconnecting = !1, this.ws.checkIfReady()), this.setSequence(t.s), void 0 === this.ws.disabledEvents[t.t] && (this.ws.status !== i.Status.READY && s.indexOf(t.t) === -1 ? (this.queue.push(t), !1) : !!this.handlers[t.t] && this.handlers[t.t].handle(t)));
      }
    }, {
      key: "client",
      get: function get() {
        return this.ws.client;
      }
    }]);

    return r;
  }();

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i52) {
    _inherits(s, _i52);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.ChannelCreate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i53) {
    _inherits(r, _i53);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.actions.ChannelDelete.handle(n);i.channel && e.emit(s.Events.CHANNEL_DELETE, i.channel);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i54) {
    _inherits(r, _i54);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.channels.get(n.channel_id),
            r = new Date(n.last_pin_timestamp);i && r && e.emit(s.Events.CHANNEL_PINS_UPDATE, i, r);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i55) {
    _inherits(s, _i55);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.ChannelUpdate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i56) {
    _inherits(r, _i56);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.guilds.get(n.guild_id),
            r = e.users.get(n.user.id);i && r && e.emit(s.Events.GUILD_BAN_ADD, i, r);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i57) {
    _inherits(s, _i57);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildBanRemove.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i58) {
    _inherits(s, _i58);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.guilds.get(n.id);i ? i.available || n.unavailable || (i.setup(n), this.packetManager.ws.checkIfReady()) : e.dataManager.newGuild(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i59) {
    _inherits(r, _i59);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.actions.GuildDelete.handle(n);i.guild && e.emit(s.Events.GUILD_DELETE, i.guild);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  function i(t) {
    var e = new Map();var _iteratorNormalCompletion70 = true;
    var _didIteratorError70 = false;
    var _iteratorError70 = undefined;

    try {
      for (var _iterator70 = t[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
        var _n34 = _step70.value;
        e.set.apply(e, _toConsumableArray(_n34));
      }
    } catch (err) {
      _didIteratorError70 = true;
      _iteratorError70 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion70 && _iterator70.return) {
          _iterator70.return();
        }
      } finally {
        if (_didIteratorError70) {
          throw _iteratorError70;
        }
      }
    }

    return e;
  }var s = n(1);
  var r = function (_s6) {
    _inherits(r, _s6);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            s = e.guilds.get(n.guild_id);if (s && s.emojis) {
          var _t34 = i(s.emojis.entries());var _iteratorNormalCompletion71 = true;
          var _didIteratorError71 = false;
          var _iteratorError71 = undefined;

          try {
            for (var _iterator71 = n.emojis[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
              var _r5 = _step71.value;
              var _n35 = s.emojis.get(_r5.id);_n35 ? (_t34.delete(_r5.id), _n35.equals(_r5, !0) || e.actions.GuildEmojiUpdate.handle(_n35, _r5)) : e.actions.GuildEmojiCreate.handle(s, _r5);
            }
          } catch (err) {
            _didIteratorError71 = true;
            _iteratorError71 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion71 && _iterator71.return) {
                _iterator71.return();
              }
            } finally {
              if (_didIteratorError71) {
                throw _iteratorError71;
              }
            }
          }

          var _iteratorNormalCompletion72 = true;
          var _didIteratorError72 = false;
          var _iteratorError72 = undefined;

          try {
            for (var _iterator72 = _t34.values()[Symbol.iterator](), _step72; !(_iteratorNormalCompletion72 = (_step72 = _iterator72.next()).done); _iteratorNormalCompletion72 = true) {
              var _r6 = _step72.value;
              e.actions.GuildEmojiDelete.handle(_r6);
            }
          } catch (err) {
            _didIteratorError72 = true;
            _iteratorError72 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion72 && _iterator72.return) {
                _iterator72.return();
              }
            } finally {
              if (_didIteratorError72) {
                throw _iteratorError72;
              }
            }
          }
        }
      }
    }]);

    return r;
  }(s);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i60) {
    _inherits(s, _i60);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.guilds.get(n.guild_id);i && (i.memberCount++, i._addMember(n));
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i61) {
    _inherits(s, _i61);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildMemberRemove.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i62) {
    _inherits(s, _i62);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.guilds.get(n.guild_id);if (i) {
          var _t35 = i.members.get(n.user.id);_t35 && i._updateMember(_t35, n);
        }
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i63) {
    _inherits(r, _i63);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.guilds.get(n.guild_id);if (i) {
          var _t36 = n.members.map(function (t) {
            return i._addMember(t, !1);
          });i._checkChunks(), e.emit(s.Events.GUILD_MEMBERS_CHUNK, _t36), e.ws.lastHeartbeatAck = !0;
        }
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i64) {
    _inherits(s, _i64);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildRoleCreate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i65) {
    _inherits(s, _i65);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildRoleDelete.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i66) {
    _inherits(s, _i66);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildRoleUpdate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i67) {
    _inherits(s, _i67);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildSync.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i68) {
    _inherits(s, _i68);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.GuildUpdate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i69) {
    _inherits(r, _i69);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.actions.MessageCreate.handle(n);i.message && e.emit(s.Events.MESSAGE_CREATE, i.message);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1),
      s = n(0);
  var r = function (_i70) {
    _inherits(r, _i70);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.actions.MessageDelete.handle(n);i.message && e.emit(s.Events.MESSAGE_DELETE, i.message);
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i71) {
    _inherits(s, _i71);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.MessageDeleteBulk.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i72) {
    _inherits(s, _i72);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.MessageReactionAdd.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i73) {
    _inherits(s, _i73);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.MessageReactionRemove.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i74) {
    _inherits(s, _i74);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.MessageReactionRemoveAll.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i75) {
    _inherits(s, _i75);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.MessageUpdate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0),
      r = n(4);
  var o = function (_i76) {
    _inherits(o, _i76);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;var i = e.users.get(n.user.id);var o = e.guilds.get(n.guild_id);if (!i) {
          if (!n.user.username) return;i = e.dataManager.newUser(n.user);
        }var a = r(i);if (i.patch(n.user), i.equals(a) || e.emit(s.Events.USER_UPDATE, a, i), o) {
          var _t37 = o.members.get(i.id);if (_t37 || "offline" === n.status || (_t37 = o._addMember({ user: i, roles: n.roles, deaf: !1, mute: !1 }, !1), e.emit(s.Events.GUILD_MEMBER_AVAILABLE, _t37)), _t37) {
            var _a = r(_t37);_t37.presence && (_a.frozenPresence = r(_t37.presence)), o._setPresence(i.id, n), e.emit(s.Events.PRESENCE_UPDATE, _a, _t37);
          } else o._setPresence(i.id, n);
        }
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e, n) {
  var i = n(1),
      s = n(29);
  var r = function (_i77) {
    _inherits(r, _i77);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.ws.heartbeat();var i = new s(e, n.user);e.user = i, e.readyAt = new Date(), e.users.set(i.id, i);var _iteratorNormalCompletion73 = true;
        var _didIteratorError73 = false;
        var _iteratorError73 = undefined;

        try {
          for (var _iterator73 = n.guilds[Symbol.iterator](), _step73; !(_iteratorNormalCompletion73 = (_step73 = _iterator73.next()).done); _iteratorNormalCompletion73 = true) {
            var _r7 = _step73.value;
            e.dataManager.newGuild(_r7);
          }
        } catch (err) {
          _didIteratorError73 = true;
          _iteratorError73 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion73 && _iterator73.return) {
              _iterator73.return();
            }
          } finally {
            if (_didIteratorError73) {
              throw _iteratorError73;
            }
          }
        }

        var _iteratorNormalCompletion74 = true;
        var _didIteratorError74 = false;
        var _iteratorError74 = undefined;

        try {
          for (var _iterator74 = n.private_channels[Symbol.iterator](), _step74; !(_iteratorNormalCompletion74 = (_step74 = _iterator74.next()).done); _iteratorNormalCompletion74 = true) {
            var o = _step74.value;
            e.dataManager.newChannel(o);
          }
        } catch (err) {
          _didIteratorError74 = true;
          _iteratorError74 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion74 && _iterator74.return) {
              _iterator74.return();
            }
          } finally {
            if (_didIteratorError74) {
              throw _iteratorError74;
            }
          }
        }

        var _iteratorNormalCompletion75 = true;
        var _didIteratorError75 = false;
        var _iteratorError75 = undefined;

        try {
          for (var _iterator75 = n.relationships[Symbol.iterator](), _step75; !(_iteratorNormalCompletion75 = (_step75 = _iterator75.next()).done); _iteratorNormalCompletion75 = true) {
            var a = _step75.value;
            var _t38 = e.dataManager.newUser(a.user);1 === a.type ? e.user.friends.set(_t38.id, _t38) : 2 === a.type && e.user.blocked.set(_t38.id, _t38);
          }
        } catch (err) {
          _didIteratorError75 = true;
          _iteratorError75 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion75 && _iterator75.return) {
              _iterator75.return();
            }
          } finally {
            if (_didIteratorError75) {
              throw _iteratorError75;
            }
          }
        }

        n.presences = n.presences || [];var _iteratorNormalCompletion76 = true;
        var _didIteratorError76 = false;
        var _iteratorError76 = undefined;

        try {
          for (var _iterator76 = n.presences[Symbol.iterator](), _step76; !(_iteratorNormalCompletion76 = (_step76 = _iterator76.next()).done); _iteratorNormalCompletion76 = true) {
            var h = _step76.value;
            e.dataManager.newUser(h.user), e._setPresence(h.user.id, h);
          }
        } catch (err) {
          _didIteratorError76 = true;
          _iteratorError76 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion76 && _iterator76.return) {
              _iterator76.return();
            }
          } finally {
            if (_didIteratorError76) {
              throw _iteratorError76;
            }
          }
        }

        if (n.notes) for (var u in n.notes) {
          var _t39 = n.notes[u];_t39.length || (_t39 = null), e.user.notes.set(u, _t39);
        }!e.user.bot && e.options.sync && e.setInterval(e.syncGuilds.bind(e), 3e4), e.once("ready", e.syncGuilds.bind(e)), e.users.has("1") || e.dataManager.newUser({ id: "1", username: "Clyde", discriminator: "0000", avatar: "https://discordapp.com/assets/f78426a064bc9dd24847519259bc42af.png", bot: !0, status: "online", game: null, verified: !0 }), e.setTimeout(function () {
          e.ws.normalReady || e.ws._emitReady(!1);
        }, 1200 * n.guilds.length), this.packetManager.ws.sessionID = n.session_id, this.packetManager.ws.checkIfReady();
      }
    }]);

    return r;
  }(i);

  t.exports = r;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i78) {
    _inherits(s, _i78);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;1 === n.type ? e.fetchUser(n.id).then(function (t) {
          e.user.friends.set(t.id, t);
        }) : 2 === n.type && e.fetchUser(n.id).then(function (t) {
          e.user.blocked.set(t.id, t);
        });
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i79) {
    _inherits(s, _i79);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;2 === n.type ? e.user.blocked.has(n.id) && e.user.blocked.delete(n.id) : 1 === n.type && e.user.friends.has(n.id) && e.user.friends.delete(n.id);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  function i(t, e) {
    return t.client.setTimeout(function () {
      t.client.emit(r.Events.TYPING_STOP, t, e, t._typing.get(e.id)), t._typing.delete(e.id);
    }, 6e3);
  }var s = n(1),
      r = n(0);
  var o = function (_s7) {
    _inherits(o, _s7);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            s = e.channels.get(n.channel_id),
            o = e.users.get(n.user_id),
            h = new Date(1e3 * n.timestamp);if (s && o) {
          if ("voice" === s.type) return void e.emit(r.Events.WARN, "Discord sent a typing packet to voice channel " + s.id);if (s._typing.has(o.id)) {
            var _t40 = s._typing.get(o.id);_t40.lastTimestamp = h, _t40.resetTimeout(i(s, o));
          } else s._typing.set(o.id, new a(e, h, h, i(s, o))), e.emit(r.Events.TYPING_START, s, o);
        }
      }
    }]);

    return o;
  }(s);

  var a = function () {
    function a(t, e, n, i) {
      _classCallCheck(this, a);

      this.client = t, this.since = e, this.lastTimestamp = n, this._timeout = i;
    }

    _createClass(a, [{
      key: "resetTimeout",
      value: function resetTimeout(t) {
        this.client.clearTimeout(this._timeout), this._timeout = t;
      }
    }, {
      key: "elapsedTime",
      get: function get() {
        return Date.now() - this.since;
      }
    }]);

    return a;
  }();

  t.exports = o;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i80) {
    _inherits(s, _i80);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.UserNoteUpdate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i81) {
    _inherits(s, _i81);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.actions.UserUpdate.handle(n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1);
  var s = function (_i82) {
    _inherits(s, _i82);

    function s() {
      _classCallCheck(this, s);

      return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }

    _createClass(s, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d;e.emit("self.voiceServer", n);
      }
    }]);

    return s;
  }(i);

  t.exports = s;
}, function (t, e, n) {
  var i = n(1),
      s = n(0),
      r = n(4);
  var o = function (_i83) {
    _inherits(o, _i83);

    function o() {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }

    _createClass(o, [{
      key: "handle",
      value: function handle(t) {
        var e = this.packetManager.client,
            n = t.d,
            i = e.guilds.get(n.guild_id);if (i) {
          var _t41 = i.members.get(n.user_id);if (_t41) {
            var _i84 = r(_t41);_t41.voiceChannel && _t41.voiceChannel.id !== n.channel_id && _t41.voiceChannel.members.delete(_i84.id), n.channel_id || (_t41.speaking = null), _t41.user.id === e.user.id && n.channel_id && e.emit("self.voiceStateUpdate", n);var _o6 = e.channels.get(n.channel_id);_o6 && _o6.members.set(_t41.user.id, _t41), _t41.serverMute = n.mute, _t41.serverDeaf = n.deaf, _t41.selfMute = n.self_mute, _t41.selfDeaf = n.self_deaf, _t41.voiceSessionID = n.session_id, _t41.voiceChannelID = n.channel_id, e.emit(s.Events.VOICE_STATE_UPDATE, _i84, _t41);
          }
        }
      }
    }]);

    return o;
  }(i);

  t.exports = o;
}, function (t, e) {
  var n = function () {
    function n(t, e) {
      _classCallCheck(this, n);

      this.user = t, this.setup(e);
    }

    _createClass(n, [{
      key: "setup",
      value: function setup(t) {
        this.type = t.type, this.name = t.name, this.id = t.id, this.revoked = t.revoked, this.integrations = t.integrations;
      }
    }]);

    return n;
  }();

  t.exports = n;
}, function (t, e, n) {
  var i = n(3),
      s = n(151);
  var r = function () {
    function r(t, e) {
      _classCallCheck(this, r);

      this.user = t, Object.defineProperty(this, "client", { value: t.client }), this.mutualGuilds = new i(), this.connections = new i(), this.setup(e);
    }

    _createClass(r, [{
      key: "setup",
      value: function setup(t) {
        this.premium = t.premium;var _iteratorNormalCompletion77 = true;
        var _didIteratorError77 = false;
        var _iteratorError77 = undefined;

        try {
          for (var _iterator77 = t.mutual_guilds[Symbol.iterator](), _step77; !(_iteratorNormalCompletion77 = (_step77 = _iterator77.next()).done); _iteratorNormalCompletion77 = true) {
            var _e35 = _step77.value;
            this.client.guilds.has(_e35.id) && this.mutualGuilds.set(_e35.id, this.client.guilds.get(_e35.id));
          }
        } catch (err) {
          _didIteratorError77 = true;
          _iteratorError77 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion77 && _iterator77.return) {
              _iterator77.return();
            }
          } finally {
            if (_didIteratorError77) {
              throw _iteratorError77;
            }
          }
        }

        var _iteratorNormalCompletion78 = true;
        var _didIteratorError78 = false;
        var _iteratorError78 = undefined;

        try {
          for (var _iterator78 = t.connected_accounts[Symbol.iterator](), _step78; !(_iteratorNormalCompletion78 = (_step78 = _iterator78.next()).done); _iteratorNormalCompletion78 = true) {
            var _n36 = _step78.value;
            this.connections.set(_n36.id, new s(this.user, _n36));
          }
        } catch (err) {
          _didIteratorError78 = true;
          _iteratorError78 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion78 && _iterator78.return) {
              _iterator78.return();
            }
          } finally {
            if (_didIteratorError78) {
              throw _iteratorError78;
            }
          }
        }
      }
    }]);

    return r;
  }();

  t.exports = r;
}, function (t, e) {
  t.exports = function (t, e) {
    if (t === e) return !0;if (t.length !== e.length) return !1;for (var n in t) {
      var i = t[n],
          s = e.indexOf(i);s && e.splice(s, 1);
    }return 0 === e.length;
  };
}, function (t, e) {
  t.exports = function (t) {
    if (t.includes("%") && (t = decodeURIComponent(t)), t.includes(":")) {
      var _t$split = t.split(":"),
          _t$split2 = _slicedToArray(_t$split, 2),
          _e36 = _t$split2[0],
          n = _t$split2[1];

      return { name: _e36, id: n };
    }return { name: t, id: null };
  };
}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}]);