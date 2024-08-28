const myobj = {
    js: 'Javascript',
    cpp: 'C++'
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);

}


const program =["js","cpp","java","c","react"]

for (const key in program) {

    // console.log(program[key]);


}


const m = new Map()

m.set('In',"India")
m.set('USA',"America")
m.set('fr',"france")

for (const key in m) {
//    console.log(key);
}
