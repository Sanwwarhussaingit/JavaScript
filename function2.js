function calculateCartPrice(...num1){   //...rest operator
    return num1;

}
// console.log(calculateCartPrice(100,200,300));


const user={
    userName: "Sanwwar",
    price: 100
}
//Object passs
function handleObject(anyObject){
    console.log(`User Name is ${anyObject.userName} and aloso price is ${anyObject.price}`);
    
}
handleObject(user);

//direct pass
handleObject({
    userName: "Sanwwar",
    price: 400
})   

// --------Array pass

const myNewArray =[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

//direct pass array 
console.log(returnSecondValue([100,2000,500,211,55]));


