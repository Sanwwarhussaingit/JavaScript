class Car
{
    constructor(brand)
    {
        this.brand = brand;
    }
}
class model extends Car
{
    constructor(brand,mod)
    {
        // super(brand);
        this.mod = mod;
    }
    display()
    {
        console.log(this.brand,this.mod);
    }
}
let obj = new Car("Maruti")
obj.display();