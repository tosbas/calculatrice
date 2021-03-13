let écran = document.getElementById("calcScreen");
let touches = document.getElementsByClassName("touches")
let calcule = document.getElementById("calculer");
let reset = document.getElementById("reset");
let calculeNum = 0;
let calculeOp;
// variable à calculer
let somme = "";

let span = document.createElement("span")

écran.appendChild(span)

// crée un tableau qui me permet d'ajouter un event sur chaque touches

Array.prototype.forEach.call(touches,function(touche){
    
    touche.addEventListener("click",function(){
        span.innerHTML += touche.innerHTML
        somme += touche.innerHTML

        calculeOp = somme

        if(somme.length >= 11 && somme.length != 15)
        {
            span.style.fontSize = "25px"
        }
        else if(somme.length === 15)
        {
           alert("Limiter à 15 caratères")
           location.reload()
        }
        else if(calculeNum >= 1 )
        {
            span.innerText = touche.innerText
            somme = span.innerText
            calculeNum-- 
        }
        
    })
})



écran.addEventListener("input",function(){

        somme += écran.innerText 
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
            span.innerHTML = convert(somme)
            somme = écran.innerText
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

function convert(element)
{

    let reg = /[.]/.test(element)

    if(reg === true)
    {
        return parseFloat(eval(element)).toFixed(1)
    }
    else
    {
        return parseInt(eval(element))
        
    }

}