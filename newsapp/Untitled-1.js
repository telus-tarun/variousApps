//fibonacci series

// let a = 0;
// let b = 1;
// let temp=0;
// let count = 10;
// console.log('Fibonacci Series:');

// for(let i=0;i<=count;i++){
//     console.log(a);
//     temp = a+b;
//     a=b;
//     b=temp;
// }


// factorial numbers 
let number = 2;
let fact = 1;

function factorial(number){
    for(let i=number;i>0;i--){
        fact = fact*i;
    }
    return fact;
}   

number===0 ? console.log(1): number>0 ? console.log(factorial(number)) : console.log("Enter positive number.")

