//for of loop



// arr["","",""]
// arr[{},{},{}]
// that are same na

//example
const arr=[1,2,3,4,5]

for(const val of arr)
{
    // console.log(val);
    // console.log(arr);
}

const greetings= "hello world"
for(const greet of greetings)
{
    if(greet == " ")
    {
        continue
    }
    // console.log(`char ${greet}`)
}

const m = new Map()

m.set('In',"India")
m.set('USA',"America")
m.set('fr',"france")
// m.set('In',"India")

// console.log(m);

// for (const [i,a] of m) {

//     // console.log(i, a); 
// }



const myobj ={
    Game1: 'NFS',
    Game2: 'pubg'
}

//error
// for (const [key,value] of myobj) {

//     console.log(key,value);
    
}