function asyncfun1()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Data 1");
            resolve("Success 1");
        },2000);
    });
}

function asyncfun2()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Data 2");
            resolve("Success 2");
        },3000);
    });
}

console.log("Fetching Data 1:");
asyncfun1().then(function(res)
{  
    console.log(res);
    console.log("Fetching data 2:");
    
    let p2 = asyncfun2().then(function(res1){
    console.log(res1);
    }) 
})

