function shuffle(arr)
{
    var totalshuffle = arr.length;
    while(totalshuffle>0)
    {
        totalshuffle = totalshuffle -1;
        var indexExchang = Math.floor(Math.random()*totalshuffle);

        var temp = arr[totalshuffle];
        arr[totalshuffle]=arr[indexExchang];
        arr[indexExchang]= temp;
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5,6,7]));