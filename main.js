"Use strict";
let touches = [...document.querySelectorAll(".touches")];
let ecran = document.getElementById("ecran");
let saisis = document.getElementById("saisis");
let reset = document.getElementById("reset");
let egale = document.getElementById("egale");
let emptyMsg = { text: "Rien à calculer", value: undefined };

touches.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.add("anim");

    saisis.innerText += element.innerText;

    setTimeout(function () {
      element.classList.remove("anim");
    }, 100);
  });
});

// calcule la somme saisis

egale.addEventListener("click", function () {
  saisis.innerText = arrondir(eval(saisis.innerText));
});

// reset saisis

reset.addEventListener("click", function () {
  saisis.innerText = "";
});

function arrondir(el) {
  let reg = /[.][1-9][0]/g.test(el);
  if (reg == true) {
    return eval(el).toFixed(1);
  } else {
    return eval(el);
  }
}
