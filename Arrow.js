const user =
{
    username: "Sanwwar", 
    price: 999,

    welcomeMessage: function() 
    {
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }


}

/* user.welcomeMessage()
 user.username = "husssain"
 user.welcomeMessage()*/

// console.log(this);

function exthis(){    
    let username = "Sanwwar"
    console.log(this.username); 
    
    //note
    //this keyword function ke ander kam nhi karta this only objects ke ander kam karta hai  
}
// exthis()


// is mathod me bhi use nhi hoga this 
// const exarrow = function ()
// {
//     let username = "Sanwwar"
//     console.log(this.username); 

// }


//simple arrow function 
const exarrow = () =>
{
    let username = "Sanwwar"
    // console.log(username); 

}
// exarrow()

//basic
// const addtow=(num1,num2) => {
//     return num1+num2
//  explicitly
// }

// const addtow=(num1,num2) => num1+num2
//emplicit return 
// const addtow=(num1,num2) => (num1+num2)//
//  curly barcket me wrap kiya to return key likhna padega agr is(parenthese) example se likha to return nhi likhna padega  (this is mostly used in react)



//return emplislty object
const addtow=(num1,num2) => ({username: "Sanwwae"})
// console.log(addtow(2,2));


// const myArray = [2,3,4,5]

// myArray.forEach()

