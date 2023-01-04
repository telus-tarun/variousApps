let arrx = [1, 2, 21, 3, 14];
let temp= 0;
for(let i=0;i<arrx.length;i++){
  for(let j=0;j<arrx.length;j++){
    if(arrx[i]>arrx[j]){
      temp = arrx[i];
      arrx[i]=arrx[j];
      arrx[j]=temp;
    }
  }
  
}
console.log(arrx);