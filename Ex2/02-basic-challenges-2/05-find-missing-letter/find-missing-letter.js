function findMissingLetter(arr) {
    if(arr.length == 0) return '';

    arr = arr.sort(function(a,b){return a - b});

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].charCodeAt() + 1, arr[i+1].charCodeAt());
        
        if(arr[i].charCodeAt() + 1 != arr[i+1].charCodeAt() && i+1 <= arr.length) {
            return String.fromCharCode(arr[i].charCodeAt() + 1);
        }
    }
}

module.exports = findMissingLetter;
