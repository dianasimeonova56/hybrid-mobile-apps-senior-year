const isValidIPv4 = (str) => {
    const octets = str.split('.');

    if(octets.length != 4) return false;


    return octets.every((o) => {
        console.log(parseInt(o));
        
        return parseInt(o) >= 0 && parseInt(o) <= 255 && parseInt(o).toString() === o;
    })
};

module.exports = isValidIPv4;
