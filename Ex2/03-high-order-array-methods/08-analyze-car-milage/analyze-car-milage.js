function analyzeCarMileage(arr) {
    const totalMileage = arr.reduce((acc, mileage) => acc + mileage['mileage'], 0);
    const avgMileage =  totalMileage / (arr.length);
    const sorted = arr.sort((a, b) => a.mileage - b.mileage);

    return {
        averageMileage: avgMileage,
        highestMileageCar: sorted[arr.length -1],
        lowestMileageCar: sorted[0],
        totalMileage: totalMileage
    }
}

module.exports = analyzeCarMileage;
