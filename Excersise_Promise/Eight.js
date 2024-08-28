
function myPromise(resolve ,reject){
    // console.log("Callback");
    reject("Errror Success");
}
function getErr() {
    return new Promise(myPromise)
}

getErr().then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
    throw "Oh error";
}).catch(function(res){
    console.log(res);
})
