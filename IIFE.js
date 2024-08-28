(function DB(){
    //named iife
    console.log(`Db connected`);
}) ();    //immediate invoke function end karna padega uske liye end me semicolon hoga
// global polusion ko hatane ke liye iife ka use kiya or immediately exicution ke liye



(()=>{
    console.log(`Db Coannected 2 `);

})();


((name)=>{
    console.log(`Db Coannected 2 ${name}`);

}) ("Sanwwar");//durra parenthesis se call kar rhe hai to kuch bho argument bhej dakte jaise purane function me bhejte the







