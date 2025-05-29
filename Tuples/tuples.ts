

// in arrays if you have fixed length and datatypes you can use tuples
// in typescript if we want to make a tuple we can use the following syntax

let arr2: [number, string] = [1, "hello"];
let arr3: [number, string, boolean] = [2, "world", true];
// so now if i make a mistake and try to add a string to the first element or a number to the second element it will give an error

console.log(arr2)