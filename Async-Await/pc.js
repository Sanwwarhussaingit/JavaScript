function api()
{
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Hello");
            resolve(200);
    
        },1000)
    })
}
(async function getapi()
{
    await api();
    console.log("1st api");
    await api();
    console.log("2nd api");
})();

