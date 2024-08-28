// function sumarr(arr)
// {
//     let sum=0;
//     arr.forEach(function(e)
//     {
//        sum= sum +e; 
       
//     })
//     return sum;
// }
// console.log(sumarr([1,2,3]));

let arr=[1,"jfpfd",3,"kjnfj"];
function sumarr(arr)
{
    let sum=0;
    arr.forEach(function(element)
    {
        if(typeof element === 'number')
        {
            sum+=element;
        }

    })   
    return sum; 
}

console.log(sumarr(arr));