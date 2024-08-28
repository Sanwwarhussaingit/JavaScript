function createuser(username,score)
{
    this.username =username;
    this.score= score;
}
createuser.prototype.increment= function ()
{
    this.score++;
}

createuser.prototype.printme = function()
{
    console.log(`score is ${this.score}`);
}
const chai = new createuser("chai",25);
const tea = createuser("tea ",200);
chai.printme();
