const path = require("path");
const { config } = require("./wdio.shared.conf.js");

config.port = 4723;
config.specs = ["../test/specs/android/*.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "Android",
    "appium:deviceName": "Pixel 7 API 31",
    "appium:platformVersion": "12.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
  },
];

config.services = ["appium"];
exports.config = config;
