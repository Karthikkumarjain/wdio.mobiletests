const path = require("path");
const { config } = require("./wdio.shared.conf.js");

config.port = 4723;
config.specs = ["../test/specs/ios/*.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "ios",
    "appium:deviceName": "iPhone 15 Pro Max",
    "appium:platformVersion": "17.0",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/UIKitCatalog.app"),
  },
];

exports.config = config;
