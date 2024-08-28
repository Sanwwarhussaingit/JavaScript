function api(){
    return new Promise(function(resolve,reject){
        setTimeout(function()
        {
        console.log("Wether");
        resolve(200);
        },1000)
    });
}
async function getdata() {
    //1st call
    await api();
    //2nd call
    await api();
}

getdata();