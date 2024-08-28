function getData(i,callback){
    
        console.log("Data fetched for id: ",i);
        callback();
    
}
getData(1, function()
{
    getData(3,function()
    {
        getData(4,function()
        {
            console.log("Sajgfjhdfkjvhbjk");
        });
    });
})