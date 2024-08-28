function occ(st)
{
    let obj ={};
    st.split("").map(function(element){
        if(obj.hasOwnProperty(element))
        {
            obj[element]++;
        }
        else{
            obj[element]=1;
        } 
    })
    console.log(obj);
}
occ("Sanwwar");