// function SetUsername(username)
// {
//     this.username = username;
//     console.log(username)
// }
// function createUser(username,email,id)
// {
//     SetUsername.call(this,username)
//     this.email = email
//     this.id  = id 
// }
// const Call =new createUser("Sanwwar","sanwwarcode@gmail.com","123")
// console.log(Call);


function greet (name)
{
    console.log(`Hello ${name}! My name is ${this.myName}.`);
}
const context={
    myName :"Sanwwar hussain"
};
greet.call(context,"Aman");