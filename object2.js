// const tinder = new Object()

const tinder ={}
tinder.id= "abc"
tinder.name= "San"
tinder.isLoggedIn= false

// console.log(tinder);

const regular={
    email: "some@gamail.com",
    fullname:{
        userFullname:{
            firstname: "sanwwar",
            lastname: "hussain"
        }
    }
}
// console.log(regular.fullname.userFullname);

const object1 ={
    1: "a",
    2: "b"
}
const object2 ={
    3: "a",
    4: "b"
}
const object5 ={
    5: "a",
    6: "b"
}

// const obj3= {object1,object2}

// const obj3= Object.assign({},object1,object2,object5)
// const obj3= {...object1,...object2}
// console.log(obj3);

const user=[
    {
        id: 1,
        email: "Sanwwar@gmail.com"
    },
    {
        no: 1,
        name: "Sanwwar"
    },
]

// console.log(user[2].no);

// console.log(tinder);

// console.log(Object.keys(tinder)); //important
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('Islogged'));



 const course={
    courseName: "Java script",
    price: "999",
    tech: "yt"
 }
//  console.log(course.courseName); bar bar bar

const {courseName: id}= course
console.log(id );



//react
// {
//     "name": "Sanwwar",
//     "price": "free"
// }