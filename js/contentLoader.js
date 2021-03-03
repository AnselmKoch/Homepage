var currentCanvas = "";

function loadContent(name) {
  var content = getElementByID(name);

  content.hidden = false;
  if((currentCanvas != "")) {
    getElementByID(currentCanvas).hidden = true;
  }

  if(currentCanvas != name) {
    setUpCanvas(name);
    currentCanvas = name;
  }else{
    currentCanvas = "";
  }
}

function setUpCanvas(name) {
  const contentDiv = getElementByID(name);
  const menuDiv = getElementByID("menuDiv");
  const restDiv = getElementByID("rest2");
  restDiv.style.marginRight = "10px";
  contentDiv.style.margin = "10px";
  contentDiv.style.top = (menuDiv.getBoundingClientRect().bottom + 5) + "px";
  contentDiv.style.width = "99%";
  contentDiv.style.height = "65%";
  contentDiv.style.backgroundColor = "lightgrey";
  contentDiv.style.borderRadius = "15px";
}
