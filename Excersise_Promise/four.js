function job(state)
{
    return new Promise(function(resolve, reject){
        if(state)
        {
            resolve("Success");
        }
        else{
            reject("Error");
        }
    });
}
job(true)
.then(function (data){
    console.log(data);  

    return job(false);
}).catch(function(error){
    console.log(error);
    return "Error caught";
}).then(function(data){
    console.log(data);
    return true;
}).catch(function (error){
    console.log(error);
})
 
//success Error  errorcaought