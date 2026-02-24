// Zadacha 1
document.querySelector('#zad1').addEventListener('click', () => {
    const arr = [...document.querySelectorAll('input[id*="zad1Num"]')];
    sum(arr);
})

function sum(numbers) {
    alert(numbers.map(num => Number(num.value)).reduce((sum, a) => sum + a, 0));
}

// Zadacha 2
document.querySelector('#zad2').addEventListener('click', () => {
    const arr = document.querySelector("#zad2Nums").value.split(';').map(Number);
    printVAT(arr);
})

function printVAT(arr) {
    const sum = arr.reduce((sum, a) => sum + a, 0);
    const vat = sum * 0.2;
    alert(`Sum of all prices is: ${sum}, VAT is: ${vat} and closing balance is: ${sum + vat}`);
}

// Zadacha 3
document.querySelector('#zad3').addEventListener('click', () => {
    const string = document.querySelector("#zad3String").value;
    const char = document.querySelector("#zad3Char").value;
    checkCharInString(string, char);
})

function checkCharInString(string, char) {
    alert(string.split(char).length - 1);
}

// Zadacha 4
document.querySelector('#zad4').addEventListener('click', () => {
    const w = document.querySelector("#zad4w").value;
    const h = document.querySelector("#zad4h").value;
    const W = document.querySelector("#zad4W").value;
    const H = document.querySelector("#zad4H").value;
    calculateArea(W, H, w, h);
})

function calculateArea(W, H, w, h) {
    const area1 = W * H;
    const area2 = w * h;
    const overlapArea = w * H;

    const totalArea = (area1 + area2) - overlapArea;

    alert(totalArea);
}

// Zadacha 5
document.querySelector('#zad5').addEventListener('click', () => {
    const year = document.querySelector("#leapYear").value;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert("yeah!!!!!!!!!!!");
    } else {
        alert("no ;(")
    }
})

// Zadacha 6
document.querySelector('#zad6').addEventListener('click', () => {
    const n = document.querySelector("#zad6N").value;

    let toPrint = '';
    for (let i = 1; i <= n; i++) {
        toPrint += i;
    }

    console.log(toPrint);
})

// Zadacha 7
document.querySelector('#zad7').addEventListener('click', () => {
    const point1 = {
        x: Number(document.querySelector('#zad7x1').value),
        y: Number(document.querySelector('#zad7y1').value)
    };

    const point2 = {
        x: Number(document.querySelector('#zad7x2').value),
        y: Number(document.querySelector('#zad7y2').value)
    };

    const distance = Math.sqrt(
        Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2)
    );

    alert(distance);
})

// Zadacha 8
document.querySelector('#zad8').addEventListener('click', () => {
    const bottles = Number(document.querySelector("#bottles").value);
    const capacity = Number(document.querySelector("#capacity").value);

    alert(Math.ceil(bottles / capacity));
})

// Zadacha 9
document.querySelector('#zad9').addEventListener('click', () => {
    const a = Number(document.querySelector("#zad9A").value);
    const b = Number(document.querySelector("#zad9B").value);
    const c = Number(document.querySelector("#zad9C").value);

    const p = (a + b + c) / 2;

    const formula = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    alert(formula);
})