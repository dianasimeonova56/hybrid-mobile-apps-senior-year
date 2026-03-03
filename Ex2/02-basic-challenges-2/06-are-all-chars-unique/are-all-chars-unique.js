function areAllCharactersUnique(str) {
    let set = new Set();

    for(let i = 0; i < str.length; i++) {
        if(!set.has(str[i])) {
            set.add(str[i]);
        } else {
            return false;
        }
    }

    return true;
}

module.exports = areAllCharactersUnique;
