function bai1() {
    let dem = "";
    for (let i = 0; i < 100; i++) {
        dem += i + " ";
    }
    document.getElementById("bai1").innerHTML = dem;
    alert("Hoan thanh");
}

function bai2() {
    let temperature = parseInt(prompt("Enter the Temperature: "));
    if (temperature > 100) {
        alert("Decrease current Temperature!");
    } else if (temperature < 20) {
        alert("Increase curren Temperature!");
    }
}

function bai3() {
    let fibo = "";
    let inputNum = parseInt(prompt("Enter a number: "));
    for (let i = 0; i < inputNum; i++) {
        fibo += fibonacci(i) + " ";
    }
    alert(fibo);
}

function fibonacci(num) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if (num < 0) {
        return -1;
    } else if ((num == 0) || (num == 1)) {
        return num;
    } else {
        for (let i = 2; i < num; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

function bai4() {
    let count = 1;
    while (count < 1000) {
        if (fibonacci(count) % 5 === 0) {
            alert("So dau tien trong day Fibonacci chia het cho 5 la:  " + count);
            break;
        }
        count++;
    }
}

function bai5() {
    let count = 0;
    let sum = 0;
    let fiboList = "";
    while (count < 20) {
        fiboList += fibonacci(count) + " ";
        sum += fibonacci(count);
        count += 1;
    }
    alert("20 số đầu tiên trong dãy Fibonacci: " + fiboList);
    alert("Tổng 20 số đầu tiên trong dãy Fibonacci: " + sum);
}

function bai6() {
    let count = 0;
    let value = 0;
    let sum = 0;
    while (value < 400) {
        if ((value % 7) === 0) {
            sum += value;
            count += 1;
            if (count === 30) {
                break;
            }
        }
        value += 1;
    }
    alert("Tong bang: " + sum);
}

function bai7() {
    let numList = "";
    for (let i = 0; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            numList += "FizzBuzz "
        } else if (i % 3 === 0) {
            numList += "Fizz ";
        } else if (i % 5 === 0) {
            numList += "Buzz ";
        } else {
            numList += i + " ";
        }
    }
    alert(numList);
}