function op1()
{
    return new Promise (function(resolve){
        setTimeout(function(){
            console.log("Operation 1");
            resolve();
        },1000)
    })
}
function op2()
{
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Operation 2");
            resolve();

        },1500);
    });
}
function operation3()
{
    return new Promise (function(resolve){
        setTimeout(function(){
            console.log("operation 3");
            resolve();

        },2000);
    });
}
async function performd()
{
    try{
    await op1();
    await op2();
    await operation3()
    }
    catch(error)
    {
        console.error(error);
    }
};
performd();
