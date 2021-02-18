'use strict';



// adds a new div element to the main container
function cloner() {
  // gets the html template for the new div
  var boxy = document.getElementById("newBox").innerHTML;
  // adds it to main container
  $("#monoCont").append(boxy);
  // initializes select2 for new components
  $('.selectpicker').select2();
}

// select2 init
 $('.selectpicker').select2();
