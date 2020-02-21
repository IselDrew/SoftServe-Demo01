function myFunc(length, maxPow) {
  const arr = [];
  const square = 2;

  for (let i = 0; i < length; i++) {
    if (Math.pow(i, square) > maxPow) {
      break;
    } else {
      arr.push(i);
    }
  }

  const result = arr.join()

  return result;
}

console.log(myFunc(100, 100))

