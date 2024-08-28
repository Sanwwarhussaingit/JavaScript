// const addbtn = document.querySelector('.add-item');




    let textbox = document.querySelector('.add-text');
    let list = document.querySelector('.addlist');
    let btn = document.querySelector('.add-item');
    btn.addEventListener('click', function(){
    if(textbox.value === '')
    {
        alert("Empty");
    }
    else{

        let newlist = document.createElement("li");
        newlist.textContent= textbox.value
        list.appendChild(newlist); 
        textbox.value = '';


        let newbtn = document.createElement("button")
        
        newbtn.textContent ="❌";
        newbtn.addEventListener('click',function(){
            newlist.remove();
            newbtn.remove();
        })
        newlist.append(newbtn);
        newbtn.style.float= 'right';
    }
})

