import fs from "fs";

// get content of file
const Data = fs.readFileSync("input.txt");

// print content of file
console.log(Data.toString());

// Split into lines
const lines = Data.toString().trim().split(/\n/);

// Split each row into numbers
const rows = lines.map((line) => line.trim().split(/\s+/).map(Number));

// Split into columns
const left = rows.map((pair) => pair[0]);
const right = rows.map((pair) => pair[1]);

let score = 0;

// iterate through each element
for (const x of left) {
  let sum = 0;
  // iterate through each element
  for (const y of right) {
    // check if one elem from left is equal to one from right
    if (x == y) {
      // increment sum for each same number
      sum++;
    }
  }
  // calculate score
  score = score + x * sum;
}

console.log(score);
