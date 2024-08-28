const myNumber =[1,2,3,4,5,6,7,8,9,10]

// const newNumber = myNumber.map( (num)=> {return num+10})
// console.log(newNumber);


// const newNumber=myNumber.filter((num)=> num+10)





//chaining
const newNumber = myNumber
                    .map( (num)=> num * 10 )  //num me jo bhi banega oh sab second me pass jo jayega
                    .map( (num)=> num + 1)
                    .filter( (num)=> num>= 40)    //filter return nhi karta bas true or false deta hai

// console.log(newNumber);
const array=[1,2,3,4,5,6,7,8,9];
// const num = array.map( (num)=> num+10)
const num = array.filter((num)=>{
    return num
})
// console.log(num); 



// practice itself
    function fact(n){
        let arr = new Array();
        for(let i=1;i<=n;i++){
            arr.push(i);
        }


        // console.log(arr);
        
        const f = arr.map(function (n){
            let r=1;
            for(let i=1;i<=n;i++)
            {
                r*=i;
    
            }
            return r;

        })
        return f;
    }
// console.log(fact(5));


// similar to foreach loop but map return new array and for not return

let arr = [1, 2, 3, 4, 5];
let newarray = arr.map(function(value){

    let r=1;
    for(let i=1;i<=value;i++)
    {
        r= r*i;
    }
         
    return r;
})
let l= newarray.length

console.log(newarray[l])
console.log(l);
