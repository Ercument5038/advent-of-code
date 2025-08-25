import fs from "fs";

// get content of file
const Data = fs.readFileSync("input.txt");

// print content of file
// console.log(Data.toString());

// Split into lines
const lines = Data.toString().trim().split(/\n/);

// Split each row into numbers
const rows = lines.map((line) => line.trim().split(/\s+/).map(Number));

// Split into columns
const left = rows.map((pair) => pair[0]);
const right = rows.map((pair) => pair[1]);

left.sort();
right.sort();

let distance = 0;

for (let i = 0; i < left.length; i++) {
  let diff = 0;
  // gets the absolute difference so if result is negative it give the positiv
  diff = Math.abs(left[i] - right[i]);

  distance = distance + diff;
}

console.log(distance);
