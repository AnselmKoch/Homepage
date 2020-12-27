setInnerText();


/**
 * Makes the text appear inside every button
 */
function setInnerText() {

  /**
   * For every menuButton inside menuDiv
   */
  for(var i = 0; i < menuButtons.length; i++) {
    const menuButton = menuButtons.item(i);
    const bar = getBar(i);

    /**
     * For the main menuButtons
     */
    switch(i) {
      case 0: menuButton.innerHTML = "Informationen"; break;
      case 1: menuButton.innerHTML = "Fun Features";break;
      case 2: menuButton.innerHTML = "Memes";break;
      case 3: menuButton.innerHTML = "Mathe";break;
    }

    /**
     * For every menuButton contained in certain bar
     */
    for(var j = 0; j < bar.getElementsByClassName("menuButton").length; j++) {
      const menuButton = getMenuButton(i,j);
      if(i == 0) {
        switch(j) {
          case 0: menuButton.innerText = "Über Mich"; break;
          case 1: menuButton.innerText = "Zu dieser Website"; break;
          case 2: menuButton.innerText = "Kontakt"; break;
          case 3: menuButton.innerText = "Dummes gelaber"; break;

        }
      }
      if(i == 1) {
        switch(j) {
          case 0: menuButton.innerText = "Tag 1"; break;
          case 1: menuButton.innerText = "Tag 2"; break;
          case 2: menuButton.innerText = "Tag 3"; break;
          case 3: menuButton.innerText = "Tag 4"; break;
        }
      }
    }
  }
}
