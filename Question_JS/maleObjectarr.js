let arr = [
    {name: "Sanwwar ",gender: "male"},
    {name: "Riya ",gender: "female"},
    {name: "saniya ",gender: "female"},
    {name: "Aman ",gender: "male"},
    {name: "Sadakash ",gender: "male"},
];
let count =0;
arr.forEach(function(element){
    if(element.gender !== "male")
    {
        count++;
    }
})
for(let j=1;j<=count;j++)
{
for(let i=1;i<arr.length;i++)
{
    if(arr[i].gender !== "male")
    {
        arr.splice(i,1);
    }
}
}console.log(arr);