// factorial

let fact = 1;
let num = 5;
let i=num;
function factorial(number){
    while(i>0){
        fact*=i;
        i--;
    }
    return fact;
}

console.log(fact)
// 5*4*3*2*1

// fibonacci
let a = 0
let b = 1
let temp = 0;
let total = 10
for(let i=0;i<total;i++){
    console.log(a);
    temp = a+b;
    a = b;
    b= temp
}

