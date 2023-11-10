require('dotenv').config()
const {config} = require('./wdio.shared.conf.js');


config.specs =[
    '../test/specs/android/*.js'
];

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

config.capabilities = [
  {
 
    platformName: "Android",
    "appium:deviceName": "Google Pixel 7",
    "appium:platformVersion": "13.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": "bs://b7eaef6b46e468038b01c682ce40ebecdf624ee7",
  },
];

config.services =['browserstack'];
exports.config = config;