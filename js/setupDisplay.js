registerListeners();
setInnerText();



function setInnerText() {
  for(var i = 0; i < menuButtons.length; i++) {
    const menuButtom = menuButtons.item(i);
    const bar = document.getElementById("bar"+i);
    switch(i) {
      case 0: menuButtom.innerHTML = "Informationen"; break;
      case 1: menuButtom.innerHTML = "DevLog";break;
      case 2: menuButtom.innerHTML = "Fun Features";break;
      case 3: menuButtom.innerHTML = "Memes";break;
      case 4: menuButtom.innerHTML = "Mathe";break;
    }

    for(var j = 0; j < bar.getElementsByClassName("menuButton").length; j++) {
      const menuButtom = document.getElementById(i + "menu" + j);
      if(i == 0) {
        switch(j) {
          case 0: menuButtom.innerText = "Über Mich"; break;
          case 1: menuButtom.innerText = "Zu dieser Website"; break;
          case 2: menuButtom.innerText = "Kontakt"; break;
          case 3: menuButtom.innerText = "Dummes gelaber"; break;

        }
      }
      if(i == 1) {
        switch(j) {
          case 0: menuButtom.innerText = "Tag 1"; break;
          case 1: menuButtom.innerText = "Tag 2"; break;
          case 2: menuButtom.innerText = "Tag 3"; break;
          case 3: menuButtom.innerText = "Tag 4"; break;
        }
      }
    }
  }
}

/**Gives every button a listener, used so the menu is shown if the user touches a button with his cursor
 *Once the user leaves the button with his cursor the menu attached to the button will no longer be shown
 * */
function registerListeners() {
  const restDiv = document.getElementById("rest2");
  //For every menuButton
  for(var i = 0; i < document.getElementById("menuDiv").getElementsByClassName("menuButton").length; i++) {
    const menuButtom = document.getElementsByClassName("menuButton").item(i);
    const menuDiv = document.getElementById("topbar");
    menuButtom.addEventListener("mouseenter", function (event) {
      switch(menuButtom.id.charAt(4)) {
        case '0': document.getElementById("bar0").hidden = false;break;
        case '1': document.getElementById("bar1").hidden = false;break;
        case '2': document.getElementById("bar2").hidden = false;break;
        case '3': document.getElementById("bar3").hidden = false;break;
        case '4': document.getElementById("bar4").hidden = false;break;
      }
    }, true);
    menuDiv.addEventListener("mouseenter", function (event) {
      switch(menuButtom.id.charAt(4)) {
        case '0': document.getElementById("bar0").hidden = true;break;
        case '1': document.getElementById("bar1").hidden = true;break;
        case '2': document.getElementById("bar2").hidden = true;break;
        case '3': document.getElementById("bar3").hidden = true;break;
        case '4': document.getElementById("bar4").hidden = true;break;
      }
    }, true);
    //Same with the buttons just for the bars holding the buttons
    //For every bar
    for(var j = 0; j < document.getElementById("rest2").getElementsByClassName("bar").length; j++) {
      const currentBar = document.getElementById("bar"+j);
      currentBar.addEventListener("mouseleave", function (evemnt) {
        switch(currentBar.id.charAt(3)) {
          case '0': document.getElementById("bar0").hidden = true;break;
          case '1': document.getElementById("bar1").hidden = true;break;
          case '2': document.getElementById("bar2").hidden = true;break;
          case '3': document.getElementById("bar3").hidden = true;break;
          case '4': document.getElementById("bar4").hidden = true;break;
        }
      }, false);
    }
  }
}
