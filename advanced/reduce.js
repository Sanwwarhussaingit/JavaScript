const arr=[1,2,3];

// const myTotal = arr.reduce(function (acc,curval) {

//     console.log(`accumalator: ${acc} and curval ${curval}`);
//     return acc + curval;
// }, 0)



// const myTotal = arr.reduce((acc,curval)=> acc+curval,0);

// console.log(myTotal);

const course =[

    {
        itemName: "JavaScript",
        price: 1000
    },
    {
        itemName: "React",
        price: 1900
    },
    {
        itemName: "Mongo DB",
        price: 2999
    },
    {
        itemName: "Sql",
        price: 3999
    },

];


const newCourse = course.reduce( (acc, item)=> (acc+item.price),0)

console.log(newCourse);