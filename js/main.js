const header = document.getElementById("topbar");
const blackBackground = document.getElementById("menuDiv");
var woodenHorse = new Audio("audio/audio.mp3");
var menuButtons = document.getElementById("menuDiv").getElementsByClassName("menuButton");
var allMenuButtons = document.getElementsByClassName("menuButton");


const restDiv = document.getElementById("rest2");
document.title = "Website";
const hideInformation = false;
let showRainbow = false;
const createNewTimer = true;

var colors = [r = 0, g = 175, b = 255];
var goUpColor =[true,true,true];
var timer;
var timeout = 10;



renderMouseCursor();
setInnerText();





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


  function setInnerText() {

  for(var i = 0; i < menuButtons.length; i++) {
    const menuButtom = menuButtons.item(i);
    menuButtom.style.left = (100 / menuButtons.length) * i + "%";
    menuButtom.style.width = (100/ menuButtons.length) + "%";
    const extendableMenuByID = document.getElementById("bar" + i);
    extendableMenuByID.hidden = false;
    extendableMenuByID.style.width = (100/ menuButtons.length) + "%";
    extendableMenuByID.style.left = (100 / menuButtons.length) * i + "%";
    extendableMenuByID.style.top = menuButtom.getBoundingClientRect().bottom + "px";
    for(var i2 = 0; i2 < extendableMenuByID.getElementsByClassName("menuButton").length; i2++) {
      const extendableMenuButton = document.getElementById((i) + "menu" + i2);
      extendableMenuByID.style.height =
        (50 * (extendableMenuByID.getElementsByClassName("menuButton").length + 1)) + "px";
      extendableMenuButton.style.top = menuButtom.getBoundingClientRect().bottom + 100 + "px";
      extendableMenuButton.style.height = "50px";
      extendableMenuButton.style.width = "90%";
      extendableMenuButton.style.borderRadius = "10px";
    }
  }
}


  function renderMouseCursor() {
    for (var i = 0; i < allMenuButtons.length; i++) {
      const menu = allMenuButtons.item(i);
      menu.onmouseover = function () {
        menu.style.cursor = "pointer";
      }
    }
  }


  function findBar(x) {
  return document.getElementById("bar" + x.toString());
}




