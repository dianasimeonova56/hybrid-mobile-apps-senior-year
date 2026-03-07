function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const arr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr.push(left[leftIndex]);
            leftIndex++;
        } else {
            arr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [
        ...arr, 
        ...left.slice(leftIndex), 
        ...right.slice(rightIndex)
    ];
}

module.exports = mergeSort;
