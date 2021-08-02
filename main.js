const touches = [...document.querySelectorAll(".touches")];
const ecran = document.getElementById("ecran");
const keyCode = touches.map(touches => touches.dataset.key);

// event touches au clavier 

document.addEventListener("keydown", (e) => {

    const valeur = e.keyCode.toString();
    calculer(valeur);

})

const calculer = (valeur) => {

    const indexKey = keyCode.indexOf(valeur);
    const touche = touches[indexKey];

    touche.classList.add("anim");
    setTimeout(function() {
        touche.classList.remove("anim");
    }, 100);

    if (keyCode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.innerText = "";
                ecran.removeAttribute("style");
                break;
            case '13':
                const calcul = arrondir(eval(ecran.innerText));
                if (ecran.innerText == "") {
                    console.error("saisis vide !")
                } else {
                    ecran.innerText = calcul;
                }

                break;
            default:
                ecran.innerText += touche.innerHTML;

                if (ecran.innerText.length == 14) {
                    ecran.style.overflowY = "scroll";
                }
        }
    }

}

touches.forEach((el) => {
    el.addEventListener("click", (e) => {
        const valeur = e.target.dataset.key;
        calculer(valeur);
    })
})

function arrondir(el) {
    let reg = /[.][1-9][0-9]/g.test(el);
    if (reg == true) {
        return eval(el).toFixed(1);
    } else {
        return eval(el);
    }
}