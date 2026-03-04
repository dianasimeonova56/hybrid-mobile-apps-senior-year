function sumOfEvenSquares(arr) {
    let sum = 0;

    arr.forEach(n => {
        if(n % 2 === 0) {
            console.log(n, Math.pow(n, 2));
            
            sum += Math.pow(n, 2);
        } 
    })

    return sum;
}

module.exports = sumOfEvenSquares;
