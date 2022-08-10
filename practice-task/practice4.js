/* 4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */

// way-one: incomplete
function odd_even(number){
    if(number % 2 !== 0){
        var returnString = 'odd';       /* mistake: this string was declared with let. As a result return couln't recognize it. sol: use of var */
    }
    else{
        var returnString = 'even';
    }
    
return 'The number is '+ returnString;
}
const number = 4;
const oddEvenTeller = odd_even(number);
console.log(oddEvenTeller);





// way-two: no return and  has parameter.

// function odd_even(number){
//     if(number % 2 !== 0){
//         console.log('The number is odd');
//     }
//     else{
//         console.log('The number is even');
//     }
// }

// const number = 4;
// const oddEvenTeller = odd_even(number);
// console.log(oddEvenTeller);