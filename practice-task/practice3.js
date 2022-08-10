/* 3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */

function make_avg(numbers, size){
    var sum =0;
    var averageSum=0;

    for(i=0; i<size; i++){
        let index = i;
        let elements = numbers[index];
        sum=sum+elements;
        averageSum = sum/size;
        
    }
    return averageSum;
}

const numbers= [10, 15, 25]
const size = numbers.length;
const averageValue = make_avg(numbers,size);
console.log(averageValue);

/* first & important mistake
    
    for(i=0; i<=size; i++)
    it shows an Nan or undefined value. Because, I set the index starting from 0. and The condition is index<=length of array. and the length of array is 3. So, 0 to 3 is four steps. thats why loop will run for fourth time and will bring a undefined value. Because we know that, when the total index value given is higher than the array length, it will definitely bring an undefined value. As a result, average will be Nan.
    
    SOLUTION:
    delete the = sign from the condition and put index<size. As a result, it will run for as the same size of length of the array.*/