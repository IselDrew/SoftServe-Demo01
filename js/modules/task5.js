export function checkLuckyTicket(range) {
  if (arguments.length !== 1) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  const min = Math.abs(Number(range.min));
  const max = Math.abs(Number(range.max));

  const isNotValid = validateData(range.min, range.max);
  if (isNotValid) {
    return isNotValid;
  }

  const result = calcAmount(min, max);

  if (result.counterEasy > result.counterDifficult) {
    result.winner = "Easy";
  } else if (result.counterEasy === result.counterDifficult) {
    result.winner = "No winner";
  } else {
    result.winner = "Difficult";
  }

  console.log(result)
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
    counterDifficult,
  };
}

function checkNumberByEasy(number) {
  const strNumber = number.toString().padStart(6, "0");

  const arrLeftSide = strNumber.substring(0, 3).split("");
  const arrRightSide = strNumber.substring(3).split("");

  const leftSide = getSumOfArr(arrLeftSide);
  const rightSide = getSumOfArr(arrRightSide);

  if (leftSide === rightSide) {
    return true;
  } else {
    return false;
  }
}

function checkNumberByDifficult(number) {
  const strDigits = number.toString().split("");

  const digits = strDigits.map(digit => {
    return parseInt(digit);
  });

  const even = [];
  const odd = [];

  digits.forEach(item => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });

  if (!even.length || !odd.length) {
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
  return arr.reduce((acc, item) => parseInt(acc) + parseInt(item));
}

function validateData(minStr, maxStr) {
  const err = { status: "failed", reason: "" };

  const minNumber = Math.abs(Number(minStr));
  const maxNumber = Math.abs(Number(maxStr));

  const maxAllowedValue = 1e6;

  if (minNumber === maxNumber || minNumber > maxNumber) {
    err.reason = "Invalid range";
    console.error(err);
    return err;
  }

  if (!Number.isInteger(minNumber) || !minStr) {
    err.reason = `Min should be an integer in range [0 to ${maxAllowedValue})`;
    console.error(err);
    return err;
  }

  if (!Number.isInteger(maxNumber) || maxNumber >= maxAllowedValue || !maxStr) {
    err.reason = `Max should be an integer in range [0 to ${maxAllowedValue})`;
    console.error(err);
    return err;
  }
}

