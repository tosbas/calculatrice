let input = document.getElementById("saisis")
let calculer = document.getElementById("calculer")
let conteneur = document.getElementById("conteneur")
let reset = document.getElementById("reset")
let resultat = document.createElement("div")
resultat.setAttribute("id", "resultat")
let somme;

input.addEventListener("input",function(){
    
    somme = input.value

    let reg = /[a-z]/.test(somme)
    
 if(reg === true)
 {
    conteneur.appendChild(resultat)
    resultat.innerText = "Comment tu fait pour calculer des lettres ?!"
 }
 else if(somme.length === 0)
  {
     resultat.remove()
  }


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
    somme = ""

})

























    













    












