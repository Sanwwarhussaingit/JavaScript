let date = new Date();
const DayList =["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday"];
let dayNum= date.getDay();
console.log(DayList[dayNum]);
console.log(`${date.getSeconds()}:${date.getMinutes()}: ${date.getHours()}`);