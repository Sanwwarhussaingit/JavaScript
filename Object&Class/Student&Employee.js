class vvit
{
    constructor(name,age,mail)
    {
        this.name =name;
        this.age = age;
        this.mail = mail;
    }
}
class student extends vvit
{
    constructor(name,age, mail,roll,marks)
    {
        super(name,age,mail);
        this.roll= roll;
        this.marks= marks;
    }
    printInfo()
    {
      console.log(`Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.mail}\nRoll: ${this.roll}\nMarks: ${this.marks}`);
    }
}

class Teacher extends vvit
{
    constructor(name,age, mail,salary)
    {
        super(name,age,mail);
        this.salary= salary;  
    }
    printInfo()
    {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.mail}\nSalary: ${this.salary}`);
    }
}
console.log("Student Information: ");
let std1 = new student("Sanwwar hussain",21,"sanwwarbca@gamil.com",100,30.00);
console.log("\n\nTecher Information:");
let teacher1 = new Teacher("Sanwwar hussain",40,"teachaer1@gmail.com",20000);
std1.printInfo();
teacher1.printInfo();