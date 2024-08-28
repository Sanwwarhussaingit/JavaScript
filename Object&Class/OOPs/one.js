const user ={
    username: "Sanwwar",
    id: 12,
    getuser: function (){
        // console.log("Data base ");
        // console.log(`usernaem ${this.username}`);
        console.log(this);
    }
}
// user.getuser()
// const promise = new Promise()

function User(u,l)
{
    this.u = u;
    this.l = l;

    // return this;
}

const user1 = new User("Sanwwar",39);
const user2 = new User("Kjdk",30)
console.log(user1.constructor);
console.log(user2);