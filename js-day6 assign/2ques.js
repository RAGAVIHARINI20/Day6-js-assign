function fun() {
    var a = prompt("enter a number");
    var display = ""; // The table output HTML
    for (i = 1; i<=20; i++) {
     var multiplier=a;
      var result = i * a;
  
      display += multiplier + " * " + i + " = " + result + "<br>";
    }
    document.getElementById("outputDiv").innerHTML = display;
  }