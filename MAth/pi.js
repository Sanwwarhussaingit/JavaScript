const descripter = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(descripter);
// Math.PI =4;

// console.log(Math.PI);


const obj = {
    name: "Sanwwar",
    roll: 20,
    isPersent: true,

    goClass: function()
    {
        console.log("Not persent");
    }
}
console.log(Object.getOwnPropertyDescriptor(obj,'name',{
    writable: false,
    enumerable:true,
}));

console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for(let [key, value] of Object.entries(obj))
{
    if(typeof value !== 'function')
    {
        console.log(`${key}:${value}`);
    }
}