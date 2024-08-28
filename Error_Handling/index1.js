let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
if(isNaN(a)|| isNaN(b))
{
    throw SyntaxError("Error");
}
let sum=parseInt(a)+parseInt(b);
// let x=2;

function my(){
    try {
        console.log(sum*x);
        // return true;
    } catch (error) 
    {
    console.log("Error hai ji");
    // return false;
    }
    console.log("Final db");
}
const m= my();
console.log("Function return is: ",m);