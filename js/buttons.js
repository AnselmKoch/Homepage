registerEnterLeaveListener();
registerClickListener()

/**
 * Gives every button a Listener to respond once the user clicks a certain button
 */
function registerClickListener() {
  for(var i = 0; i < getEveryMainMenuButton().length; i++) {
    console.log(i);
    for(var j = 0; j < getMenuAmountInsideBar(i); j++) {
      const menuButton = getMenuButton(i,j)
      menuButton.addEventListener("click", function (event) {
        var innerText = menuButton.innerText;
        console.log(innerText);
        loadContent(innerText.toUpperCase());

      },false);
    }
  }
}




/**
 * Gives every button a listener, used so the menu is shown if the user touches a button with his cursor
 * Once the user leaves the button with his cursor the menu attached to the button will no longer be shown
 */
function registerEnterLeaveListener() {

  /**
   * For every div in menuDiv called menuButton -> 0menuButton0, 0menuButton1, 0menuButton2, 0menuButton3
   */
  for(var i = 0; i < getEveryMainMenuButton().length; i++) {
    const menuButtom = getMenuButton("", i);

    /**
     * Toggles the bar to show whenever the cursor touches a certain button
     */
    menuButtom.addEventListener("mouseenter", function (event) {
      switch(menuButtom.id.charAt(4)) {
        case '0': document.getElementById("bar0").hidden = false;break;
        case '1': document.getElementById("bar1").hidden = false;break;
        case '2': document.getElementById("bar2").hidden = false;break;
        case '3': document.getElementById("bar3").hidden = false;break;
        case '4': document.getElementById("bar4").hidden = false;break;
      }
    }, true);

    /**
     * Toggles the bar to disappear whenever the cursor leaves a certain button
     */
    menuButtom.addEventListener("mouseleave", function (event) {
      switch (menuButtom.id.charAt(4)) {
        case '0':document.getElementById("bar0").hidden = true;break;
        case '1':document.getElementById("bar1").hidden = true;break;
        case '2':document.getElementById("bar2").hidden = true;break;
        case '3':document.getElementById("bar3").hidden = true;break;
        case '4':document.getElementById("bar4").hidden = true;break;
      }
    },true);

    /**
     * For every div in rest2 called bar -> bar0, bar1, bar2, bar3 etc.
     */
    for(var j = 0; j < document.getElementById("rest2").getElementsByClassName("bar").length; j++) {
      const currentBar = getBar(j);

      /**
       *  The bar would disappear once the cursor leaves the button, with this function the
       *  bar remains there aslong as the cursor is touching the bar
       */
      currentBar.addEventListener("mouseleave", function (event) {
        switch(currentBar.id.charAt(3)) {
          case '0': document.getElementById("bar0").hidden = true;break;
          case '1': document.getElementById("bar1").hidden = true;break;
          case '2': document.getElementById("bar2").hidden = true;break;
          case '3': document.getElementById("bar3").hidden = true;break;
          case '4': document.getElementById("bar4").hidden = true;break;
        }
      }, false);

      /**
       *  The bar disappears once the cursor leaves the bar
       */
      currentBar.addEventListener("mouseenter", function (event) {
        switch(currentBar.id.charAt(3)) {
          case '0': document.getElementById("bar0").hidden = false;break;
          case '1': document.getElementById("bar1").hidden = false;break;
          case '2': document.getElementById("bar2").hidden = false;break;
          case '3': document.getElementById("bar3").hidden = false;break;
          case '4': document.getElementById("bar4").hidden = false;break;
        }
      }, false);
    }
  }
}
