import fs from "fs";

const Data = fs.readFileSync("input.txt");

// extract all mul(x,x) with x being max 3 digits
let result = Data.toString().match(/mul\(\d{1,3},\d{1,3}\)/g);

// extract all digits/numbers and define as number
const numbers = result.map((mul) => mul.match(/\d+/g).map(Number));

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  let nums = numbers[i];
  // multiply each numbers together
  let res = nums[0] * nums[1];
  // sum it up
  sum += res;
}

console.log(sum);
