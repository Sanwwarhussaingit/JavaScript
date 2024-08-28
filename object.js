//object literal

const mySym = Symbol("Key1");

const JsUser={
    [mySym]: "mykey1",
    name: "Sanwwar",
    age: 20,
    location: "Purnia",
    email: "Sannwar@gmail.com",
    Days: ["Monday","Sunday"]
}

// console.log(JsUser["Days"]);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.name = "Hussain"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.age =21
JsUser.name = "Sanwwar"
console.log(JsUser);

// JsUser.hello = function(){
//     console.log("Hello Js User");
// }
// JsUser.hello2 = function(){
//     console.log(`Hello Js User ${this.name}`);
// }
// console.log(JsUser.hello());
// console.log(JsUser.hello2());