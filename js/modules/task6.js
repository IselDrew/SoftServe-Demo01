function getNumbers(length, minPow) {
  const arr = [];

  const minValue = Math.sqrt(minPow);
  const intMinValue = Math.ceil(minValue);

  const pushLength = intMinValue + length;

  // console.log(`Start from ${intMinValue} to ${pushLength}`);

  for (let i = intMinValue; i < pushLength; i++) {
    arr.push(i);
  }

  const result = arr.join();

  return result;
}

// console.log(myFunc(10, 45))

