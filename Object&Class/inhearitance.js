class Persone{
    eat()
    {
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Simple:..");
    }
}

class Engineer extends Persone
{
   
    work(){
        console.log("Solve program:..");
    }
}
let obj = new Engineer();

console.log(obj.work());