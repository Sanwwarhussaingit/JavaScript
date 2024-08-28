const promiseOne = new Promise (function(resolve,rejct){

    setTimeout(function(){
        console.log("Async task is completed");
        resolve() 
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,rejct){
    setTimeout(function(){
        console.log("Async 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,rejct){
    setTimeout(function(){
        resolve({name: "Sanwwar hussain",roll: 1000})
    },1000)
})

promiseThree.then(function(user){
    console.log(user.name);
})


const promiseFour = new Promise(function(resolve,rejct){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Snawwar", password:"1234"})
        }else {
            rejct('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then(function(user)
{
    console.log(user);
    return user.username

}).then(function(username)
{
    console.log(username);

}).catch(function(error)
{
    console.log(error);
}).finally(()=> console.log("the promse ie either resoled or rejected"))




const promisefive = new Promise(function(resolve,rejct){

    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript", password:"1234"})
        }else {
            rejct('ERROR: js went wrong')
        }
    },1000)
});

// async function consumePromise(){
//    try{
//     const response = await promisefive
//     console.log(response);
//     }
//     catch (error) 
//     {
//         console.log(error );
//     }
// }

// consumePromise()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response .json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})