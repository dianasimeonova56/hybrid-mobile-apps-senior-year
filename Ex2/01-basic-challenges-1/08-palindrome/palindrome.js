function isPalindrome(str) {
    str = str.replaceAll(', ', '').replaceAll(' ', '').toLowerCase();
    console.log(str);
    
    let bool = true;

    for(let i = 0; i < str.length / 2; i++) {
        
        if(str[i] !== str[str.length - i - 1]) {
            bool = false;
            break;
        }
    }

    return bool;
}

module.exports = isPalindrome;
