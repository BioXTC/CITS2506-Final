
function myFunction() {
    var x = document.getElementById("topNavbar");
    if (x.className === "top_navbar") {
      x.className += " responsive";
    } else {
      x.className = "top_navbar";
    }
  }