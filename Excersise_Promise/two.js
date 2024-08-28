
console.log("Start");

const fn = function(){
    return new Promise(function(resolve,reject)
    {
        console.log(1);
        resolve("Success");
    });
}
console.log("Middel");
fn().then(function(res){
    console.log(res);
})

console.log("End");

//1 middle end succes