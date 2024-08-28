function typeTalk(t)
{
   return typeof t
}
console.log(typeTalk([]));
console.log(typeTalk(1));
console.log(typeTalk('s'));
console.log(typeTalk(true));
console.log(typeTalk(function(){}));
console.log(typeTalk(undefined));
