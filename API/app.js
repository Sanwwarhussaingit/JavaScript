const url = "https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");

const getFacts = async function()
{
    console.log("getting data...");

    let response=  await fetch(url);
    var usabledata = await response.json();
    let fetchtext ="";

    // console.log(usabledata);

    for (const element of usabledata) 
    {
       
        fetchtext += element.text+"\nthis is next line---\n\n";
        
    }
    // usabledata.forEach(element =>
    // {
    // });
    para.innerText = fetchtext;
}

btn.addEventListener("click", getFacts);
// function getFacts() {
//   fetch(url)

//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       let fetchtext = "";
//       data.forEach((element) => {
//         fetchtext += element.text + "\nthis is next line---\n\n";
//       });
//       para.innerText = fetchtext;
//     });
// }
