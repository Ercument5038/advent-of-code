import fs from "fs";

// get content of file
const Data = fs.readFileSync("input.txt");

// print content of file
// console.log(Data.toString());

// Split into lines
const lines = Data.toString().trim().split(/\n/);

// Split each row into numbers
const rows = lines.map((line) => line.trim().split(/\s+/).map(Number));

let sumSafe = 0;

// check if an array is increasing or decreasing
function CheckSafeReport(num) {
  // get direction (inc, dec)
  let num_dir = num[1] - num[0];
  // if result of num_dir * diff is negative means it isnt strictly inscreasing
  // or decreasing
  for (let i = 0; i < num.length - 1; i++) {
    if (num_dir * (num[i + 1] - num[i]) <= 0) {
      return false;
    }
  }

  // if differencee is less then 1 or greaten then 3 is is not safe
  for (let i = 0; i < num.length - 1; i++) {
    let diff = Math.abs(num[i] - num[i + 1]);
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < rows.length; i++) {
  if (CheckSafeReport(rows[i])) {
    sumSafe++;
  }
}

console.log(sumSafe);
