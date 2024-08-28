 myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let rand = Math.floor(Math.random()*10+1);
        if(rand <7)
        {
            console.log(rand);
            resolve("Success")
        }
        else{
            console.log(rand);
            reject("Faild");
        }
    },1000)
})
myPromise.then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
})