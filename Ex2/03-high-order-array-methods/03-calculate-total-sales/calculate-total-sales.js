function calculateTotalSalesWithTax(arr, taxRate) {
    let sum = 0;

    for(let product of arr) {
        sum += product.price * product.quantity;
    }

    return sum + ((sum * taxRate) / 100);
}

module.exports = calculateTotalSalesWithTax;
