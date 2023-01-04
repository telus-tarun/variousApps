//total sum of ages

const company = [
  {
    name: "Company3",
    startYear: 1969,
    endYear: 1979,
    position: 30,
  },
  
  {
    name: "Company2",
    startYear: 1969,
    endYear: 1961,
    position: 30,
  },
  {
    name: "Company3",
    startYear: 1989,
    endYear: 1999,
    position: 30,
  },
];

const company2 = [
  {
    name: "Company3",
    financialYear: 1949,
    lastYear: 1999,
    position: 30,
  },
];

//find, filter, forEach, Map
//new
//update key values
//spread and assign
//second largest element from unsorted array






// filter the data on basis on a key
let arr1 = company.filter((item)=>{
    return item.startYear == 1989;
})
console.log(arr1);





//merge two objects on basis of same value of name key having different keys without losing the keys

// function mergeObj(company, company2) {
//   return company2.map((item, i) => {
//     if (item.name === company[i].name) {
//       return Object.assign({}, item, company[i]);
//     }
//   });
// }
// console.log(mergeObj(company, company2));



//forEach
// let a = [1,2,3,4,5,6,7,8];
// let sum = 0
// a.forEach((item)=>{
//     return sum+=item;
// });
// console.log(sum);



//map
// let a = [1,2,3,4,5,6,7,8];
// let b = a.map((item) =>{return item})
// console.log(b)


//reduce
// let a = [1,2,3,4,5,6,7,8];
// let sum = a.reduce((acc, val)=>{return acc+val},0)
// console.log(sum);





