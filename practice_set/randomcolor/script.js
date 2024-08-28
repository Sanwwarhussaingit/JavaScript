const btn = document.querySelector('.btn');
const h2 = document.querySelector("h2")
btn.addEventListener("click",function(){

    let randomNumber= Math.floor(Math.random()*16777215);
    let randomhex= '#'+randomNumber.toString(16);


      
  document.body.style.backgroundColor =randomhex;

    
    h2.innerText = randomhex;

    document.querySelector("p").style.color = randomhex;
})


//16777215