function retrive(arr,n=1)
{
    if(n<=arr.length)
    {
        for(let i=0;i<n;i++)
        {
            console.log(arr[arr.length-1-i]);
        }
    }
    else{
        console.log(`${n} ja jada ho gya yrr`);
    }
    console.log("length is: "+arr.length);
    
}
retrive([1,2,3,4,5,6,7,7,8,8,9],11)