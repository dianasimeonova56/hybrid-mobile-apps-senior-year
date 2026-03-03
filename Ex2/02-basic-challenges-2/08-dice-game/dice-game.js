function diceGameSimulation(num) {
    let arr = [];
    let dice1 = 0;
    let dice2 = 0;
    let sum = 0;
    let obj = {};
    let res = "";
    for(let i = 0; i < num; i++) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        sum = dice1 + dice2;

        if(sum == 7 || sum == 11) {
            res = "win";
        } else if(sum == 2 || sum == 3 || sum == 12) {
            res = "lose";
        } else {
            res = "roll again";
        }

        obj["dice1"] = dice1;
        obj["dice2"] = dice2;
        obj["sum"] = sum;
        obj["result"] = res;
        arr.push(obj);
    }

    return arr;
}

module.exports = diceGameSimulation;
