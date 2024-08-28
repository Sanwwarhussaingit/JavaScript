function one(){
    const username ="Sanwwar"

    function two(){
        const topic = "Scopes"
        // console.log(username);
    }

    // console.log(topic);
    // two()
}
// one()

if(true)
{
    const username ="Sanwwar"
    if(username === "Sanwwar")
    {
        const web= " Youtube"
        // console.log(username + web);
    }
    // console.log(web);
}

// console.log(username);



//------------------------------function techniqe=----

//1) without variable

// console.log(addone(5)) //first call then no error
function addone(num)
{
    return num+1

}


// 2) with js variable
console.log(addtow(5))// first call then error kiyuki variale me store kiya function ko or use badd me declare kiya islye or pahle access kar rhe hai islye error hai

const addtow = function (num){
    return num+2
}