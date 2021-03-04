let input = document.getElementById("saisis")
let calculer = document.getElementById("calculer")
let conteneur = document.getElementById("conteneur")
let reset = document.getElementById("reset")
let resultat = document.createElement("div")
resultat.setAttribute("id", "resultat")
let somme;

input.addEventListener("input",function(){
    
    somme = input.value

})

calculer.addEventListener("click", function(){
    
    conteneur.appendChild(resultat)

    if(somme === undefined || somme === "")
    {
        resultat.innerText = "Rien à calculer"
    }
    else{

        resultat.innerHTML = somme + " = " + eval(somme)

    }
    
})

reset.addEventListener("click", function(){

    input.value = ""
    resultat.remove()

})

























    













    












