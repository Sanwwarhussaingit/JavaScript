function freq(arr) {
    let f = {};
    arr.forEach(function (elem) {
        if (freq.hasOwnProperty(elem)) {
            freq[elem]++;
        } else {
            freq[elem] = 1;
        }
    });
    let ans = Object.keys(freq).reduce(function (acc, next) {
        return freq[acc] > freq[next] ? acc : next;
    });

    console.log(ans);
}
freq([1, 1, 1, 1, 2, 2, 2]);
