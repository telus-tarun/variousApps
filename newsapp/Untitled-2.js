// const n = 5;

// const reverseSeq = n => {
//     let arr =[];
//     for(let i=n;i>0;i--){
//         arr.push(i);
//     }
//     return arr;
//   };
// console.log(reverseSeq(n));
// console.log("hello");

let str = "Robin Singh";
console.log(str.split(" "));



// <------------------------------------------------------------------------------------>


function lovefunc(flower1, flower2){
    // moment of truth
    let f1 = flower1%2;
    let f2 = flower2%2;
    // return (f1 === true && f2 === false) || (f1 === false &&f2 === true) ? true : false;
    if((f1 == true && f2 == false) || (f1 == false && f2 == true)){
        return true;
    } else{
        return false;
    }
}
let f1=false;
let f2=true;

(f1 === true && f2 === false) || (f1 === false &&f2 === true) ? console.log(true):console.log(false);

  console.log(lovefunc(1,2));



  // <------------------------------------------------------------------------------------>
  function tribonacci(signature,n){
    //your code here
    if(n <= 3 ) {
     return signature.slice(0, n);   //
   } else{
          for(let i = 3;i<n;i++){
          signature[i] = signature[i-1] + signature[i-2] + signature[i-3]
        }
      return signature;
      }
  }


//   <------------------------------------------------------------------------------>



