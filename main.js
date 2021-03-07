// déclaration des variables globale

let écran = document.getElementById("calcScreen");
let touches = document.getElementsByClassName("touches")
let calcule = document.getElementById("calculer");
let reset = document.getElementById("reset");

let somme = "";

Array.prototype.forEach.call(touches,function(touche){
    
    touche.addEventListener("click",function(){
        écran.innerHTML += touche.innerHTML
       somme += touche.innerHTML
    })
})


calcule.addEventListener("click", function(){

    try {
        écran.innerHTML = eval(somme); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message.innerHTML = "caractéres non autoriser !");
            location.reload()
        }
    }


})

reset.addEventListener("click", function(){
    location.reload()
})
