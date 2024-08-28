// const program =["js","cpp","java","c","react"]


// const values = program.forEach( (item)=>{//for each not return any value
//     console.log(item);
//     return item
// })
// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10]

// implesit
// const newNum = myNum.filter( (num) => num>5)

// explicit return
// const newNum=myNum.filter( (num)=> {

//    return num>4
// })




// const newNum=[]

// myNum.forEach( (num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);



const books=[
    {
        title: 'Book ane', genre: 'Non-Fiction',publish: 1990,edition: 2020
    },
    {
        title: 'Book tow', genre: 'Non-Fiction',publish: 2000,edition: 2021
    },
    {
        title: 'Book three', genre: 'Non-Fiction',publish: 2001,edition: 2022
    },
    {
        title: 'Book four', genre: 'Non-Fiction',publish: 1989,edition: 2023
    },
];

let userBook = books.filter( (bk)=> bk.edition >= 2021)


userBook = books.filter( (bk)=> { 
    return bk.publish >= 1990 && bk.edition >= 2021

})
// console.log(userBook);



    let arr = [1, 2, 3, 4, 5, 6];

    arr.forEach(function (value, index, array) {    /* I used value to represent the current element, index to represent the index of the current element, and array to represent the array itself. If you want to print the elements of the array, you should use value instead of */
      console.log(`${value}`);
    });
    