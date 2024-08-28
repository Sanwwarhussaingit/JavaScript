// const newNumber = myNumber.map( (num)=> num * 10 ).map( (num)=> num + 1)//.filter( (num)=> num>= 40)  

// console.log(newNumber);


const myNumber =[1,2,3,4,5,6,7,8,9,10];
const arr= myNumber.filter((value,index)=> value%2=== 0 && index>7)
console.log(`Value is ${arr}`);