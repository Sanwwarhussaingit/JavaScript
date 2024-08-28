const firstPromise = new Promise(function(resolve,reject){
    reject("First");
});

const secondPromise = new Promise(function(resolve,reject){
    reject(firstPromise);
});

secondPromise.then(function(res){
    return res;
}).then(function(res){
    console.log(res);
})