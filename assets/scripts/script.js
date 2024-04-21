//https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

function myFunctiona() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function elmsMode() {
    var element1 = document.querySelector(".navbar");
    element1.classList.toggle("elms-mode");
    var element2 = document.querySelector("body");
    element2.classList.toggle("elms-mode");
    var element3 = document.querySelector("#row-1_column-1");
    element3.classList.toggle("elms-mode");
    var element4 = document.querySelector("#row-2_column-1");
    element4.classList.toggle("elms-mode-services");
    var element5 = document.querySelector(".background-blue");
    element5.classList.toggle("elms-mode");
    var element6 = document.querySelector("footer");
    element6.classList.toggle("elms-mode");
    var element7 = document.querySelector("#ourServices");
    element7.classList.toggle("light-text-elms");
    var element = document.querySelector(".divider-img-410291");
    element.classList.toggle("divider-img-410291-white");
 
  }

 