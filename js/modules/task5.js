function getLuckyTicket(range) {
  const min = range.min;
  const max = range.max;

  const result = calcAmount(min, max);

  if (result.counterEasy > result.counterDifficult) {
    result.winner = 'Easy';
  } else {
    result.winner = 'Difficult';
  }

  return result;
}

function calcAmount(min, max) {
  let counterEasy = 0;
  let counterDifficult = 0;

  for (let number = min; number <= max; number++) {
    if (checkNumberByEasy(number)) {
      counterEasy++;
    }
    if (checkNumberByDifficult(number)) {
      counterDifficult++;
    }
  }

  return {
    counterEasy,
    counterDifficult
  }
}

function checkNumberByEasy(number) {
  const strNumber = number.toString();

  const arrLeftSide = strNumber.substring(0, 3).split('');
  const arrRightSide = strNumber.substring(3).split('');

  const leftSide = getSumOfArr(arrLeftSide);
  const rightSide = getSumOfArr(arrRightSide);

  if (leftSide === rightSide) {
    return true;
  } else {
    return false;
  }
}

function checkNumberByDifficult(number) {
  const digits = number.toString().split('');

  const even = [];
  const odd = [];

  digits.forEach(item => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  })

  if(!even.length || !odd.length) {
    return;
  }

  const sumOfEven = getSumOfArr(even);
  const sumOfOdd = getSumOfArr(odd);

  if (sumOfEven === sumOfOdd) {
    return true;
  } else {
    return false;
  }
}

function getSumOfArr(arr) {
  return arr.reduce((acc, item) => 
    parseInt(acc) + parseInt(item)
  );
}

