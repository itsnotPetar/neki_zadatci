"use strict";

const iznos = document.getElementById("iznos");
const gosti = document.getElementById("gosti");
const kvaliteta = document.getElementById("kvaliteta");
const tipIznos = document.getElementById("tip-iznos");

function calculate() {
  const tip = iznos.value * kvaliteta.value;
  iznos.value = "";
  kvaliteta.value = "";

  if (tip === "NaN") {
    tipIznos.innerHTML = "Napojnica je 0";

    showTipIznos();
  } else {
    tipIznos.innerHTML = "Napojnica je " + tip + "€";
    showTipIznos();
  }
}

function showTipIznos() {
  const x = tipIznos;
  x.className = "show"; 
  setTimeout(function () {

    x.className = x.className.replace("show", "");
  }, 3000);
}
