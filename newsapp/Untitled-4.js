// define a named function in js
// function func(){
//     return "hi";
// }

// closure
let a = 2;
function func1(){ 
    function func2(){
        return a+=1;
    }
    return func2;
}

let x = func1();
console.log(func1())
console.log(x())
console.log(x())
console.log(a);


function fun(){
    return "hi";
}
console.log(("10"+20+30))

let arr1 = [1,2,3,4,5]
let arr3 = arr1.find((item)=>{return item>3})
let arr2 = arr1.map((item)=>{
    return item*2;
})
console.log(arr1);
console.log(arr2);
console.log(arr3);

let str = "tarun";
let j = ""
let i = str.length-1

for(i;i>-1;i--){
    j += str[i];
}
console.log(j);


console.log(str.split("").reverse().join(""));

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let newArr = fruits.slice(1,3);
console.log(newArr);


const name = ["tarun", "harry", "avi"];
const [first, ...arr] = name
console.log(...arr)





a = [1,2,3,[4,5,6],4,7]

let b = a.map((item)=>{
    let x = item.toString();
    console.log(x);
    return parseInt(x);
})

console.log(b);

let arrIn= [1,2,3,[5,4,6],7,[8,9]];
function abc(arr) {
  return [].concat(...arr)
}
function xyz(arr) {
  return abc(           
    arr.map(x=>             
      Array.isArray(x)      
        ? xyz(x)   
        : x                 
    )
  )
}
console.log(xyz(arrIn))



let arrx = [1, 2, 21, 3, 14];
let num = arrx[0];
// console.log(arrx.sort((a, b) => a - b).reverse()[0])


// for(let i=0;i<arrx.length;i++){
//      if(num<arrx[i]){
//          num = arrx[i]
//      }
// }
// console.log(num);



//method 1
// let arrIn= [1,2,3,[5,4,6],7,[8,9]];
// var arrx2 =[];

// for(let i of arrIn){
//     if(typeof(i) == 'number'){
//         arrx2.push(i);
//     }
//     else if(typeof(i) == 'object'){
//         for(let j of i){
//             arrx2.push(j);
//         }
//     }
// }

// console.log(arrx2);


// //method 2
// let arr3=[];
// arr3 = arr3.concat(...arrIn);
// console.log(arr3);


// //method 3
// let arr4 = arrIn.flat();
// arrIn.flat();
// console.log(arr4);

// //method 4
// var arr5 = arrIn.toString().split(",");
// var arr6=[];
// for(let i of arr5){
//     let x = parseInt(i);
//     console.log(x);
//     arr6.push(x);
// }
// console.log(arr6);

