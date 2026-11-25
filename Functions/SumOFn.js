function sum(n) {
  let Sum = 0;
  for (let i = 1; i <= n; i++) {
    Sum = Sum + i;
  }
  return Sum;
}
console.log(sum(2));