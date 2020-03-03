export function getNumbersRow(length, minPow) {
  const arr = [];

  const minValue = Math.sqrt(minPow);
  const intMinValue = Math.ceil(minValue);

  const pushLength = intMinValue + length;

  for (let i = intMinValue; i < pushLength; i++) {
    arr.push(i);
  }

  const result = arr.join(', ');

  return result;
}

