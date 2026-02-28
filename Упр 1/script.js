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

// Zadacha 10
document.querySelector('#zad10').addEventListener('click', () => {
    const h = Number(document.querySelector("#zad10Height").value);
    const r = Number(document.querySelector("#zad10Radius").value);

    calcCone([h, r]);
})

function calcCone([h, r]) {
    const volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    const lateralSurface = Math.PI * r * (Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)));

    console.log("Volume: ", volume);
    console.log("Lateral surface: ", lateralSurface);
}

// Zadacha 11
document.querySelector('#zad11').addEventListener('click', () => {
    const n = Number(document.querySelector("#zad11Num").value);

    if (Number.isInteger(n)) {
        if (n % 2 === 0) {
            alert("Even!");
        } else {
            alert("Odd!");
        }
    } else {
        alert("Invalid! Provide an integer!");
    }
})

// Zadacha 12
document.querySelector('#zad12').addEventListener('click', () => {
    const n = Number(document.querySelector("#zad12Num").value);
    let bool = true;

    if (n < 1) {
        bool = false;
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            bool = false;
            break;
        }
    }

    if (bool) {
        console.log("Prime!");
    } else {
        console.log("Composite!");
    }
})

//zadacha  13
document.querySelector('#zad13').addEventListener('click', () => {
    let v1 = Number(document.querySelector("#zad13V1").value);
    let v2 = Number(document.querySelector("#zad13V2").value);
    const t = Number(document.querySelector("#zad13T").value);

    v1 /= 3.6;
    v2 /= 3.6;

    const s1 = v1 * t;
    const s2 = v2 * t;

    console.log(Math.abs(s1 - s2));
})

//zadacha  14
document.querySelector('#zad14').addEventListener('click', () => {
    const input = document.querySelector("#zad14Arr").value.replaceAll("'", "").split(', ');
    let obj = {}
    let property = '';

    for (let i = 0; i < input.length; i += 2) {
        property = input[i];
        obj[property] = input[i + 1];
    }

    console.log(obj);
})

//zadacha 15
document.querySelector('#zad15').addEventListener('click', () => {
    const n1 = Number(document.querySelector("#zad15N1").value);
    const n2 = Number(document.querySelector("#zad15N2").value);
    const n3 = Number(document.querySelector("#zad15N3").value);
    let biggestNum = n1;

    if (n2 > biggestNum) {
        biggestNum = n2;
    } else if (n3 > biggestNum) {
        biggestNum = n3;
    }

    console.log(biggestNum);
})

//zadacha  14
document.querySelector('#zad16').addEventListener('click', () => {
    debugger
    const regex = /[?!-'"]+/g;
    const string = document.querySelector("#zad16Str").value.replaceAll(regex, "").split(/[\s,]+/);
    let toPrint = "";

    string.forEach((str, i) => {
        if (i == string.length - 1) {
            toPrint += str.toUpperCase();
        } else {
            toPrint += str.toUpperCase() + ', ';
        }
    });

    console.log(toPrint);
})