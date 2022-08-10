/* 2) Write a function called make_avg() which will take an three integers and return the
average of those values. */

function make_avg(a, b, c){
    let average = (a+b+c)/3;
    return average;
}

const averageValue = make_avg(50, 20, 30);
console.log(averageValue.toFixed(3));