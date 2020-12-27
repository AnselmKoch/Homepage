var currentCanvas = "";

function loadContent(name) {
  var content = getElementByID(name);

  content.hidden = false;
  if(currentCanvas != "") {
    getElementByID(currentCanvas).hidden = true;
  }

  setUpCanvas(name);
  currentCanvas = name;
  console.log(currentCanvas);
}

function setUpCanvas(name) {
  const canvas = getElementByID(name);
  const menuDiv = getElementByID("menuDiv");
  const restDiv = getElementByID("rest2");

  if(name != "KONTAKT") {
    canvas.style.backgroundColor = "black";
  }else{
    canvas.style.backgroundColor = "green";
  }

  restDiv.style.padding = "10px";
  canvas.style.margin = "10px";
  canvas.style.top = (menuDiv.getBoundingClientRect().bottom + 10) + "px";
  canvas.style.width = "98%";
  canvas.style.height = "65%";
}
