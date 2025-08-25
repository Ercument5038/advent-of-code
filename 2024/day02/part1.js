import fs from "fs";

// get content of file
const Data = fs.readFileSync("demo-input.txt");

// print content of file
// console.log(Data.toString());

// Split into lines
const lines = Data.toString().trim().split(/\n/);

// Split each row into numbers
const rows = lines.map((line) => line.trim().split(/\s+/).map(Number));

let isSafe;
let sumSafe = 0;

for (let i = 0; i < rows.length - 1; i++) {
  const level = rows[i];
  let isIncreasing;

  if (level > rows[i + 1]) {
    isIncreasing = false;
  } else {
    isIncreasing = true;
  }

  let diff = Math.abs(level - rows[i + 1]);
  if (diff <= 1 && diff >= 3) {
    isSafe = true;
    sumSafe++;
  } else {
    isSafe = false;
  }
}

console.log(sumSafe);
