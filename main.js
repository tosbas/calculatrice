"Use strict";
const touches = [...document.querySelectorAll(".touches")];
const ecran = document.getElementById("ecran");
const saisis = document.getElementById("saisis");
const reset = document.getElementById("reset");
const egale = document.getElementById("egale");
const emptyMsg = { text: "Rien à calculer", value: undefined };

// event touches au clavier 

document.addEventListener("keydown", (e) => {

  let reg = /[0-9,+,\-,\/,*]/gm.test(e.key)

  if(saisis.innerText.length == 14)
  {
    ecran.style.overflowY = "scroll"
  }

  if(e.key == "Backspace")
  {
    ecran.removeAttribute("style");
    saisis.innerText = "";
  }
  else if(e.key == "Enter")
  {
    if(saisis.innerText != "")
    {
      saisis.innerText = arrondir(eval(saisis.innerText));
    }
  }
  else if(reg == true){
    saisis.innerText += e.key
  }
})

// Pour chaque touches event au click

touches.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.add("anim");

    saisis.innerText += element.innerText;

    if(saisis.innerText.length == 14)
    {
      ecran.style.overflowY = "scroll"
    }

    setTimeout(function () {
      element.classList.remove("anim");
    }, 100);
  });
});

// calcule la somme saisis

egale.addEventListener("click", () => {
  if(saisis.innerText != "")
  {
    saisis.innerText = arrondir(eval(saisis.innerText));
  }
  
});

// reset saisis

reset.addEventListener("click", () => {
    ecran.removeAttribute("style");
    saisis.innerText = "";
});

// function arrondir le résultat

function arrondir(el) {
  let reg = /[.][1-9][0]/g.test(el);
  if (reg == true) {
    return eval(el).toFixed(1);
  } else {
    return eval(el);
  }
}
