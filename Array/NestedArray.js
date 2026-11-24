// Nested array also known as multidimentional array
let nums = [
  [2, 3],
  [3, 4],
  [4, 8],
];
console.log(nums.length);
console.log(nums[0].length);
console.log(nums[1][0]);

//ticTak game in 2D array
let ticTack = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
console.log(ticTack);
ticTack[0][1] = 'O';
console.log(ticTack);