const analyzeCarMileage = require('./analyze-car-milage');

const cars = [
 { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

const result = analyzeCarMileage(cars);

console.log(result);
