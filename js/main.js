var menuButtons = document.getElementById("menuDiv").getElementsByClassName("menuButton");
const restDiv = document.getElementById("rest2");
document.title = "Website";
let showRainbow = false;

var colors = [r = 0, g = 175, b = 255];
var goUpColor =[true,true,true];


renderMouseCursor();
setMenuSize();





function rainBowBackground() {
  var schrittGroeße = 1;
  restDiv.style.backgroundColor = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
  if (showRainbow) {
    for (var i = 0; i < colors.length; i++) {
      if (goUpColor[i]) {
        if (colors[i] > (256 - schrittGroeße)) {
          colors[i] -= schrittGroeße;
          goUpColor[i] = false;
        } else {
          colors[i] += schrittGroeße;
        }
      } else if (!goUpColor[i]) {
        if (colors[i] < (0 + schrittGroeße)) {
          colors[i] += schrittGroeße;
          goUpColor[i] = true;
        } else {
          colors[i] -= schrittGroeße;
        }
      }
    }
  }
}


/**
 * Sets the size of menuButtons and bars relative to how many menuButtons there are
 * ->the size is determined and changed automatically
 */
function setMenuSize() {

  /**
   * For every menuButton in menuDiv
   */
  for(var i = 0; i < menuButtons.length; i++) {
    const menuButtom = menuButtons.item(i);
    /**
     * a = amount of menuButtons in menuDiv
     * n = number of menuButton in array (first is 0, second is 1 etc.)
     * y-Position of menuButton is((100% / a) * n
     * width of menuButton is ((100% / a)
     */
    menuButtom.style.left = (100 / menuButtons.length) * i + "%";
    menuButtom.style.width = (100/ menuButtons.length) + "%";
    /**
     * there are as many bars as menuButtons, so the i'th bar is linked to the i'th menuButton
     */
    const extendableMenuByID = document.getElementById("bar" + i);
    //Makes them invisible
    extendableMenuByID.hidden = true;
    //Same logic as above with the menuButtons
    extendableMenuByID.style.width = (100/ menuButtons.length) + "%";
    extendableMenuByID.style.left = (100 / menuButtons.length) * i + "%";
    extendableMenuByID.style.top = menuButtom.getBoundingClientRect().bottom + "px";
    /**
     * For every menuButton inside the specific bar
     */
    for(var j = 0; j < extendableMenuByID.getElementsByClassName("menuButton").length; j++) {
      const extendableMenuButton = document.getElementById((i) + "menu" + j);
      extendableMenuByID.style.height =
        (50 * (extendableMenuByID.getElementsByClassName("menuButton").length + 1)) + "px";
      extendableMenuButton.style.top = menuButtom.getBoundingClientRect().bottom + 100 + "px";
      extendableMenuButton.style.height = "50px";
      extendableMenuButton.style.width = "90%";
      extendableMenuButton.style.borderRadius = "10px";
    }
  }
}

/**
 * Changes the cursor when touching a button
 */
function renderMouseCursor() {
  for (var i = 0; i < getEveryMenuButton().length; i++) {
    const menu = getEveryMenuButton().item(i);
    menu.onmouseover = function () {
      menu.style.cursor = "pointer";
    }
  }
}

function getElementsByClass(id) {
  return document.getElementsByClassName(id);
}

function getElementByID(id) {
  return document.getElementById(id);
}
function getMenuButton(x,y) {
  return document.getElementById(x + "menu" + y);
}

function getBar(x) {
  return document.getElementById("bar" + x);
}

function getMenuAmountInsideBar(x) {
  return document.getElementById("bar" + x).getElementsByClassName("menuButton").length;
}

function getEveryMainMenuButton() {
  return document.getElementById("menuDiv").getElementsByClassName("menuButton");
}

function getEveryMenuButton() {
  return document.getElementsByClassName("menuButton");
}






