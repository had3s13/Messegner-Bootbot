'use strict';
const BootBot = require('./lib/BootBot');
const config = require('./exemples/config');
const bot = new BootBot({
  accessToken: 'FB_ACCESS_TOKEN',
  verifyToken: 'FB_VERIFY_TOKEN',
  appSecret: 'FB_APP_SECRET'
});
bot.hear(['hello','ht','hey'],(payload,chat) => {
	chat.say('Hello there!');
});

bot.strat();
