class HomeScreen {
  get appButton() {
    return $("~App");
  }

  get actionBarMenu() {
    return $("~Action Bar");
  }
}

export default new HomeScreen();
