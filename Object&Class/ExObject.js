const employee = {
    emName (){
        console.log("Sanwwar hussin");
    },
};

const Aman={
    salary: 50000,
    emName (){
        console.log("Aman");
    },

};

Aman.__proto__ = employee;

console.log(Aman.salary,Aman.emName());