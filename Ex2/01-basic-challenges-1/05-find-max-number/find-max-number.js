function findMaxNumber(arr) {
    let maxNum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxNum) maxNum = arr[i];
    }
    return maxNum;
}

module.exports = findMaxNumber;
