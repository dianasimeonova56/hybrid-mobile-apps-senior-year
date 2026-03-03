function countVowels(str) {
    str = str.toLowerCase();
    console.log(str);
    
    const vowels = ['a','o','u','e','i']
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowels.some((el) => el === str[i])) count++;
    }

    return count;
}

module.exports = countVowels;
