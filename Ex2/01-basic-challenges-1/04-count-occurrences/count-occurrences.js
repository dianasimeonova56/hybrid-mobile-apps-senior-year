function countOccurrences(string, char) {
    let occurrences = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === char) occurrences++;
    }

    return occurrences;
}

module.exports = countOccurrences;
