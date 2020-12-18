const header = document.getElementById("topbar");
const blackBackground = document.getElementById("menuDiv");
var woodenHorse = new Audio("audio/audio.mp3");
var menu = document.getElementById("menuDiv").getElementsByClassName("menuButton");

const restDiv = document.getElementById("rest2");
document.title = "Website";
const hideInformation = false;
let showRainbow = false;
const createNewTimer = true;

var colors = [r = 0, g = 175, b = 255];
var goUpColor =[true,true,true];
var timer;
var timeout = 10;



setInnerText();
renderMouseCursor();
registerListeners();





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

  for(var i = 0; i < menu.length; i++) {
    const menuButtom = menu.item(i);
    const extendableMenu = document.getElementById("bar" + i);
    extendableMenu.hidden = true;
    for(var i2 = 0; i2 < extendableMenu.getElementsByClassName("menuButton"); i2++) {


    }
    switch(i) {
      case 0: menuButtom.innerHTML = "Informationen"; break;
      case 1: menuButtom.innerHTML = "DevLog";break;
      case 2: menuButtom.innerHTML = "Fun Features";break;
      case 3: menuButtom.innerHTML = "Memes";break;
    }
  }
}


  function renderMouseCursor() {
    for (var i = 0; i < menu.length; i++) {
      const menu = document.getElementById(0 + "menu" + i);
      menu.onmouseover = function () {
        menu.style.cursor = "pointer";
      }
    }
  }

  function registerListeners() {
  for(var i = 0; i < document.getElementsByClassName("menuButton").length; i++) {
    const menuButtom = document.getElementsByClassName("menuButton").item(i);
    menuButtom.addEventListener("mouseenter", function (event) {
      switch(menuButtom.id.charAt(5)) {
        case '0': document.getElementById("bar0").hidden = false;
        case '1': document.getElementById("bar1").hidden = false;
        case '2': document.getElementById("bar2").hidden = false;
        case '3': document.getElementById("bar3").hidden = false;
      }
    }, true);
    menuButtom.addEventListener("mouseleave", function (event) {
      switch(menuButtom.id.charAt(5)) {
        case '0': document.getElementById("bar0").hidden = true;
        case '1': document.getElementById("bar1").hidden = true;
        case '2': document.getElementById("bar2").hidden = true;
        case '3': document.getElementById("bar3").hidden = true;
      }
    },  true);
    }
  }

  function findBar(x) {
  return document.getElementById("bar" + x.toString());
}




