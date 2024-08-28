// const myMap = new Map(
//     ["Apples",400],
//     ["Banana",300],
//     ["Orange",200]
// );

// cerate a Map
const fruits = new Map();

//set Mao values

fruits.set(10,400);
fruits.set("Banana",300);
fruits.set("Orange",300);

//get

// console.log(fruits.get(10));

// fruits.delete('Apple');
//has ka use key available hai maps hai ya ni islye use hota hai
// console.log(fruits.has('Apple'))
// console.log(fruits);

// The forEach() method calls a function for each key/value pair in a Map:
let text = '';
fruits.forEach(function(value,key){
    text += key + ' = '+value+'\n';
    console.log(text);
})

// The entries() method returns an iterator object with the [key, values] in a Map:


let txt ="";
for(const x of fruits.entries())
{
    txt = txt +x +'\n';
}
// console.log(txt);


