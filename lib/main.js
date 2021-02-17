'use strict';

var cont = 1;

function cloner() {
  var boxy = document.getElementById("boxEx");
  var mono = document.getElementById("monoCont")
  var cln = boxy.cloneNode(true);
  cln.id = 'boxEx'+cont;
  mono.appendChild(cln);
  cont++;
  $('.selectpicker').select2();
}

// select2 init
 $('.selectpicker').select2();
