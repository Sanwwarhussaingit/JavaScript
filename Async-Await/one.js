function getData(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Data",id);
            resolve("Success");
        },1000);
    });
} 
//Async - awit
async function getAllData()
{
    console.log("Geting data 1..");
    await getData(1);
    console.log("Geting data 2..");
    await getData(2);
}
getAllData();


// iife
// ()(); immediately invoked function expression

// (async function()
// {
//     console.log("Geting data 1..");
//     await getData(1);
//     console.log("Geting data 2..");
//     await getData(2);
//     console.log("Geting data 3..");
//     await getData(3);
//     console.log("Geting data 4..");

//     await getData(4);
//     console.log("Geting data 5..");

//     await getData(5);
//     console.log("Geting data 6..");

//     await getData(6);
// })();
