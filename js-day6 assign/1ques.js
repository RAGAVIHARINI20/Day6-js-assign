var c = [ "skyblue","purple","blue", "green", "yellow", "red","pink",];
var currentColorIndex = 0;

function fun() {
  document.bgColor = c[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % c.length;
  setTimeout(fun, 5000);
}

