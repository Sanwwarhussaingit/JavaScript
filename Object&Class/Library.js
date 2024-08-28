const library =
[
    {
        author: "yashavant",
        title: "C language",
        publish: "2020",
        read: true,
    },
    {
        author: "Herbert Schildt",
        title: "Java",
        publish: "2011",
        read: false,
        
    },
    {
        author: "Core java",
        title: "Java language",
        publish: "2020",
        read: true,
    },
    {
        author: "Advanced",
        title: "Java",
        publish: "2021",
        read: false,
        
    }
    
];

for(let i=0;i<library.length;i++)
{
   var book = `\nAuthor: ${library[i].author}\nTitle ${library[i].title}\nPublish: ${library[i].publish}\n----------`
    if(library[i].read)
    {
        console.log("You Read Already: "+book);
    }
    else
    {
        console.log("You steel Read: "+book);
    }
}