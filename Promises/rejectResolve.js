let myPromise = new Promise((resolve,reject)=>
{
        let success =false;
        if(success)
        {
            resolve("Operation successfull");
        }
        else{
            reject("Opearation faild");
        }
    
})
myPromise.then((msg)=>{
    console.log("Success: ",msg);
}).catch((er)=>{
    console.log("Error: ",er);
});