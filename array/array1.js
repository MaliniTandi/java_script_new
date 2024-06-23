// array
const myarr = [1, 2, 3, 4, 5]
const myarr2 = new Array(1, 2, 2, 3)
// console.log(myarr[0]);
// console.log(myarr2[3]);
// myarr.push(6)
// myarr.push(6)
// myarr.pop()
// console.log(myarr);

// myarr.unshift(9)
// console.log(myarr);
// myarr.shift()
// console.log(myarr);
// console.log(myarr.includes(7));
// console.log(myarr.indexOf(3));
// console.log(myarr);

const newArray = myarr.join()

// console.log(myarr);
// console.log(newArray);
// console.log(typeof newArray);

//  slice, splice

// console.log("A ", myarr);
// const myn1 = myarr.slice(1,3)
// console.log(myn1);
// console.log("B ", myarr);

// const myn2 = myarr.splice(1,3)
// console.log(myn2);
// console.log(myarr);

// -------------------------add two array----------------------------
//  const arr = [1, 2, 3, 4]
//  const arr2 = [5, 6, 7, 8]
//  const add_arr = [...arr, ...arr2]
//  console.log(add_arr);

//------------------------another way--------------------------------

// const arr3 = [1, 2, 3, 4, 5,[6, 7], [8, 9, 10]]
// arr_final = arr3.flat(Infinity)

// console.log(arr_final);

//--------------------forming array----------------------------------
// console.log(Array.isArray("Malini"));
// console.log(Array.from("Malini"));
let num = 100
let num1 = 200
let num2 = 300
let num3 = 400
let num4 = 500
console.log(Array.of(num, num1, num2, num3, num4));