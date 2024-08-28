class Car 
{
    set carname(crnm)
    {
        this.crnm= crnm;
    }
    get carname()
    {
        return this.crnm;
    }
}
let obj = new Car();
obj.carname = "Maruti"
console.log(obj.carname);
