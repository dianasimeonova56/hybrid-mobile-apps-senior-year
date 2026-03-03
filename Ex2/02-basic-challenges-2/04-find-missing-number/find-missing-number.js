function findMissingNumber(arr) {
    if(arr.length == 0) return 1;
    if(arr == undefined) return undefined;

    arr = arr.sort(function(a,b){return a - b});

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] + 1 != arr[i+1] && i+1 <= arr.length) {
            return arr[i] + 1;
        }
    }
}

module.exports = findMissingNumber;
