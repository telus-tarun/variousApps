// Create a new array using the map function whose each element is equal to the original element plus 4

// let arr = [1,2,3,4,5];
// let arr1 = [];
// arr1 = arr.map((item)=>item+4);
// console.log(arr1)

// <-------------------------------------------------------------------->

// Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end
// The cleanNames() function should use the array map method to return a new array full of trimmed names.
// For example:
// cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
// should give ["avengers", "captain_america", "ironman", "black panther"]

// function cleanNames(arr){
//     return arr.map((item)=>item.trim());
// }
// console.log(cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]));


// <-------------------------------------------------------------------->

// Write a function that converts an array of values from miles to kilometres using the map method. In the end,
// add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.

// 1mile = 1.60934 km


// let distance = [1,1.3,2.3];

// function convertion(arr){
//     return arr.map((items) => (items*1.60934));
// }
// let totalDistanceInKilometers = 0;
// let kms = convertion(distance);
// kms.map((items) => totalDistanceInKilometers+=items);
// console.log(totalDistanceInKilometers);



// <-------------------------------------------------------------------->


// Square and sum the array elements using the arrow function and then find the average of the array.

// let arr1 = [1,3,4,6,13,16];
// let square = arr1.map((item)=>item*item);
// console.log(square.reduce((acc, item)=> acc +item,0)/arr1.length);


// <-------------------------------------------------------------------->

// Create a new array using the map function whose each element is equal to the original element plus 4

// let arr1 = [1,3,4,6,13,16];
// let arr2 = arr1.map((item) => item+4);
// console.log(arr2);


// <-------------------------------------------------------------------->


// From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = numbers.filter((even)=>even%2 == 0).map((even)=>even*even).reduce((acc,item)=>acc+item,0)
// console.log(x);


// <-------------------------------------------------------------------->


// Create a new array whose elements is in uppercase of words present in the original array.

// let str1 = ["tarun", "sharma"];
// let str2 = str1.map((item)=>item.toUpperCase());
// console.log(str2);


// <-------------------------------------------------------------------->


// const heros = [
//     { name: 'Spider-Man' },
//     { name: 'Thor' },
//     { name: 'Black Panther' },
//     { name: 'Captain Marvel' },
//     { name: 'Silver Surfer' }
//   ];

// const newHero = heros.map((hero, index) =>{return {id:index, hero:hero.name}});
// console.log(newHero);



