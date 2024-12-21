// 1
function sum(x, y) {
    return x + y;
}

console.log(sum(3, 2));

// 2

function toSeconds(minutes) {
    return minutes * 60;
}
console.log(toSeconds(5));

// 3

function nextInteger(int) {
    return int + 1;
}
console.log(nextInteger(5));

//  4
function uchburchakYuzi(asos, balandlik) {
    let s = (asos * balandlik) / 2;
    return s;
}
console.log(uchburchakYuzi(5, 2));

// 5
function ageToDays(age) {
    let days = age * 365;
    return days;
}

console.log(ageToDays(25));

//  6
function kub(num) {
    return num ** 3;
}
console.log(kub(3));

// 7
function firstElement(arr) {
    return arr[0];
}

let arr = [1, 2, 3, 4, 5];

console.log(firstElement(arr));

//  8

function power(num1, num2) {
    return num1 * num2;
}
console.log(power(5, 5));

//  9

function hoursToSeconds(hour) {
    let seconds = hour * 3600;
    return seconds;
}
console.log(hoursToSeconds(2));

// 10

function uchinchiTomon(tomon1, tomon2) {
    let tomon3 = tomon1 + tomon2 - 1;
    return tomon3;
}
console.log(uchinchiTomon(8, 10));

//11

function qoldiqniHisobla(a, b) {
    return a % b;
}

console.log(qoldiqniHisobla(3, 4));

//12

function turtburchakYuzi(boyi, eni) {
    let S = boyi * eni;
    return S;
}
console.log(turtburchakYuzi(3, 3));

// 13

function stringQoshish(a) {
    return "Something" + " " + a;
}
console.log(stringQoshish("is better than nothing"));

//14

function kvadrat(num) {
    return num ** 2;
}
console.log(kvadrat(3));

//15

function noldan(raqam) {
    if (raqam <= 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
console.log(noldan(4));

//  16

function ichkiBurchaklar(n) {
    return (n - 2) * 180;
}
console.log(ichkiBurchaklar(3));

// 17
function ochkolar(x, y) {
    return x * 2 + y * 3;
}
console.log(ochkolar(7, 5));

//18

function qoshishStringga(text) {
    return text + " " + "Edabit";
}
console.log(qoshishStringga("Amir"));

//19

function sonYigindisi(a, b) {
    if (a + b !== 100) {
        return true;
    } else {
        return false;
    }
}
console.log(sonYigindisi(50, 30));

// 20

function printArray(amount) {
    let result = [];
    for (let i = 1; i <= amount; i++) {
        result.push(i);
    }
    return result;
}
console.log(printArray(3));

//21

function oyoqlar(tovuq, qoy, sigir) {
    return tovuq * 2 + qoy * 4 + sigir * 4;
}
console.log(oyoqlar(2, 3, 5));

// 22

function and(value1, value2) {
    return value1 && value2;
}

console.log(and(true, false));
console.log(and(true, true));

// 23

function tengMi(x, y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}
console.log(tengMi(4, 9));

// 24

function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
    return yutishlar * 3 + duranglar;
}
console.log(futbolOchko(4, 1, 0));

// 25

function time(hour, minute) {
    let seconds = hour * 3600 + minute * 60;
    return seconds;
}
console.log(time(1, 30));

//26

function fun(a) {
    if (a % 2 == 0) {
        return false;
    } else {
        return true;
    }
}
console.log(fun(5));

// 27

function checkEquality(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquality(2, 3));

// 28

function booleanToString(bool) {
    return String(bool);
}
console.log(booleanToString(true));

// 29

const value = prompt("Yozing");

const arrowFunc = (value) => value;

console.log(value);

// 30

function frameCount(minutes, framesPerSecond) {
    const secondsInMinute = 60;
    const totalSeconds = minutes * secondsInMinute;
    return totalSeconds * framesPerSecond;
}

console.log(frameCount(5, 30));
console.log(frameCount(2, 60));