function removeDuplicates(arr) {
    arr = Array.from(new Set(arr));
    return arr;
}

module.exports = removeDuplicates;
