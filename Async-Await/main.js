function greet(name,callback)
{
    console.log('Hello'+name +'!');
    if(callback && typeof callback ==='function')
    {
        callback();
    }

}
function goodbyt()
{
    console.log('Good by');
}
greet('Sanwwar',goodbyt);