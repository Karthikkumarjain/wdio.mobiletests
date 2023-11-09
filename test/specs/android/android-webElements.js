describe("Android WebElements", () => {
  it("launch app and validate the text", async () => {
    const appOption = await $("~App");
    await appOption.click();
    const actionBar = await $("~Action Bar");

    await expect(actionBar).toBeExisting();
  });

  it.only("scroll and select date", async () => {

    await $("~Views").click();
    await $("~Date Widgets").click();
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
