// function printName(name, callback) {
//     console.log(name);
//     callback();
    
// }

// printName("Sanwwa hussain", function(){
//     printName("Aman hussain", function(){
//         printName("Hussain",function(){
//             console.log("Heloo");
//             });
//         });
//     });

// let printName = new Promise((res,rej)=>{
//     res("Sanwwar hussain");

// });

// printName.then(function(name){
//     console.log(name);
//     return new Promise(function(res,rej){
//         res("Aman hussain");
//     });
// }).then((name)=>{
//     console.log(name);
//     return new Promise(function(res,rej){
//         res("Hello");
//     });
// }).then(function(name){
//     console.log(name);
// })


function printName(name)
{
    return new Promise(function(res,rej){
        setTimeout(function(){
            console.log(name);
            res();
        },1000)
        
    });
}
async function printNames()
{
    try{
    await printName("Sanwwar hussain");
    await printName("Aman hussain");
    await printName("Hussain");
    await printName("Hello");
    console.log("end");
    }catch(error)
    {
        console.error(error);
    }
}
printNames();
