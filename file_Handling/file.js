const fs = require("fs");


//  fs.writeFileSync("./file_Handling/test.txt", "Hellow world");

//  fs.writeFile("./file_Handling/test.txt", "Hellow world asynchronuse", function(res){} );

// that is return file text and i will store the value in a vaiable 

// const r = fs.readFileSync("./file_Handling/mydetails.txt", "utf-8");
// console.log(r);


//that is not return value that contains a callback function and get tow argument first err return esocnd data return in a callback funtion then we use


// fs.readFile("./file_Handling/mydetails.txt", "utf-8", function(err,data){
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })//no return

fs.appendFileSync("./file_Handling/mydetails.txt", new Date().getUTCFullYear().toLocaleString());