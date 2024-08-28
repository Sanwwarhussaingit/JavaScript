// function clone(arr)
// {
//     let newarr=[];
//     arr.forEach(function(elem){
//         newarr.push(elem);
//     })
//     return newarr
// }
// let arr1=[1,2,3,4];
// console.log(arr1);
// let newarr= clone(arr1);
// newarr.pop();
// console.log(newarr);

function clone(ar)
{
    return ar.map(function(e){
        return e;
    })
}

console.log(clone([1,2,4,5,5]));