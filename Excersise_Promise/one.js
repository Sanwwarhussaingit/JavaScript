console.log("Start");


const promise = new Promise(function(resolve , reject){
    console.log(1);
    resolve(2);
})
console.log("end");
promise.then(function(res){
    console.log(res);
});



console.log("end");



// fisrt execution synchoronuous then asynchronouse program