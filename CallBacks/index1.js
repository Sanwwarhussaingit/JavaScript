function getData(dataid)
{
    return new Promise(function(resolve,reject){
    setTimeout(function()
    {
        console.log("Data", dataid);
        resolve("Success");
        
    },2000);
    });
}
//promise chain
// getData(1).then(function(res){
//     console.log(res);

//     getData(2).then(function(res){
//         console.log(res);
//     })
// })

//actual promise chain
// console.log("Getting data 1..");
// getData(1).then(function(){

//     console.log("Getting data 2..");
//     return getData(2);

// }).then(function(){

//     console.log("Getting data 3..");
//     return getData(3);

// }).then(function(){

//     console.log("Getting data 4..");
//     return getData(4);

// }).then(function(){

//     console.log("Getting data 5..");
//     console.log("Last");
// })








//callback hell(nested callbacks)
    