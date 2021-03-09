let écran = document.getElementById("calcScreen");
let touches = document.getElementsByClassName("touches")
let calcule = document.getElementById("calculer");
let reset = document.getElementById("reset");
let resumer = document.getElementById("resumer");
let calculeExe = document.createElement("span");
let calculeNum = 0;
let calculeOp;
// variable à calculer
let somme = "";



// crée un tableau qui me permet d'ajouter un event sur chaque touches

Array.prototype.forEach.call(touches,function(touche){
    
    touche.addEventListener("click",function(){
        écran.innerHTML += touche.innerHTML
        somme += touche.innerHTML

        calculeOp = somme

        if(somme.length >= 11)
        {
            alert("trop de chiffre !")
            somme = ""
            écran.innerHTML = ""
        }
        else if(calculeNum >= 1 )
        {
            écran.innerHTML = touche.innerHTML
            somme = écran.innerText
            calculeNum--
            
        }

        
    })
})


// récupére la somme et la calcule si possible

calcule.addEventListener("click", function(){

    if(somme === "" || somme === "0")
    {
        alert("Rien à calculer")
        location.reload()
    }
    else
    {
        try
        {
            calculeNum++
            écran.innerHTML = eval(somme)
            somme = écran.innerText
            resumer.appendChild(calculeExe)
            calculeExe.innerHTML += calculeOp +" = " + eval(somme) +"</br>"
        }
        catch (e)
        {
            if (e instanceof SyntaxError) {
                alert(e.message.innerHTML = "caractéres non autoriser !");
            }
        }

    }

})

//reset pour réinitaliser la page 

reset.addEventListener("click", function(){
    location.reload()
})

