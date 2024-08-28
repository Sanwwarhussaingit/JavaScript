function getPromise(){
    return new Promise(function(resolve,reject){
        console.log("I am a promise");
            resolve("Success");
        // reject("error");
    })
}
let promise = getPromise();

promise.then(function(res){
    console.log("Promise fullfiled: ",res);
})

promise.catch(function(er)
{
    console.log("Rejected: ",er);
})