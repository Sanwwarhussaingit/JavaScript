const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown =document.querySelectorAll(".selectop");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for(let select of dropdown)
{
    for(let currcode in countryList)
    {

        let newOption = document.createElement("option");
        newOption.innerText = currcode
        newOption.value = currcode;
        if(select.name=== "from" && currcode ==="USD")
        {
            newOption.selected = "selected";
        }else if(select.name === "to" && currcode ==="INR")
        {
            newOption.selected = "selected"
        }
        select.appendChild(newOption)
    }
    select.addEventListener("change",function(event){
        updateFlag(event.target);
    })
}
const updateFlag = function(element)
{
    let currcode = element.value;
    let countryCode = countryList[currcode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",async function(e){
    e.preventDefault();
    let amount = document.querySelector("#amt");
    let amtval = amount.value;
    if(amtval ===""|| amtval < 1)
    {
        amtval=1;
        amount.value = "1";
    }
    const newURL = `${URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(newURL)
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    
    let finalAmount = amtval *rate;
    msg.innerText =`${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
});