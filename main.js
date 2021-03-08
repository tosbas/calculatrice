

let écran = document.getElementById("calcScreen");
let touches = document.getElementsByClassName("touches")
let calcule = document.getElementById("calculer");
let reset = document.getElementById("reset");

// variable à calculer
let somme = "";

// crée un tableau qui me permet d'ajouter un event sur chaque touches

Array.prototype.forEach.call(touches,function(touche){
    
    touche.addEventListener("click",function(){
        écran.innerHTML += touche.innerHTML
       somme += touche.innerHTML
    })
})


// récupére la somme et la calcule si possible

calcule.addEventListener("click", function(){

    if(somme === "")
    {
        alert("Rien à calculer")
        location.reload()
    }
    else
    {
        try
        {
            écran.innerHTML = eval(somme); 
        }
        catch (e)
        {
            if (e instanceof SyntaxError) {
                alert(e.message.innerHTML = "caractéres non autoriser !");
                location.reload()
            }
        }

    }

})

//reset pour réinitaliser la page 

reset.addEventListener("click", function(){
    location.reload()
})
