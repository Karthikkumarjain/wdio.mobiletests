import HomeScreen from "../../screenobjects/android/homescreen";
import Viewscreen from "../../screenobjects/android/viewscreen";

describe("Android WebElements", () => {
  it("launch app and validate the text", async () => {
    // const appOption = await $("~App");
    // await appOption.click();

    HomeScreen.appButton.click();
    const actionBar = await $("~Action Bar");

    await expect(actionBar).toBeExisting();
    await driver.back();
    
  });

  it("scroll and select date", async () => {

    await Viewscreen.viewScreenMenu.click();
    await Viewscreen.datewidgetMenu.click();
    await $("//*[@resource-id= 'android:id/text1']").click();
    const date= await $("//*[@resource-id='io.appium.android.apis:id/dateDisplay']");

     const currentDate = await date.getText();
    console.log(currentDate);
    await $("~change the date").click();
    await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()")
    await $("//*[@text='12']").click();
    await $("//*[@resource-id='android:id/button1']").click();
    await expect(await date.getText()).not.toEqual(currentDate);

  });
});
