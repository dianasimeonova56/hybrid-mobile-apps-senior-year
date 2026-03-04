function findMissingLetter(arr) {
    const missingCharCode = arr.filter((char, index) => {
        if(index === 0) return false;
        const prevCharcode = arr[index - 1].charCodeAt(0);
        const currentCharCode = char.charCodeAt(0);
        console.log(currentCharCode - prevCharcode > 1);
        
        return currentCharCode - prevCharcode > 1;
    })[0];
    console.log(missingCharCode);
    

    return missingCharCode ? String.fromCharCode(missingCharCode.charCodeAt(0) -1) : '';
}

module.exports = findMissingLetter;
