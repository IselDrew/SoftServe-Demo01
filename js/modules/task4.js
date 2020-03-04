export function checkPalindrome(number) {
  if (arguments.length !== 1) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  const isNotValid = validateData(number);
  if (isNotValid) {
    return isNotValid;
  }

  const str = number.toString();
  const arr = [];

  let leftSide;
  let rightSide;

  let hasPalindrome = false;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      hasPalindrome = true;
      leftSide = str
        .slice(0, i + 1)
        .split("")
        .reverse()
        .join("");
      rightSide = str.slice(i + 1);
      let palindrome = getPalindrome(leftSide, rightSide);
      arr.push(palindrome);
    }
  }

  if (!hasPalindrome) {
    return 0;
  }

  const longestPalindrom = arr.reduce((acc, item) => {
    return acc.length > item.length ? acc : item;
  });

  return longestPalindrom;
}

function getPalindrome(str1, str2) {
  const arr = [];
  const longestStr = str1.length > str2.length ? str1 : str2;

  for (let i = 0; i < longestStr.length; i++) {
    if (str1[i] === str2[i]) {
      arr.push(str1[i]);
    }
  }
  const rightSide = arr.join("");
  const leftSide = arr.reverse().join("");

  const palindrome = leftSide + rightSide;
  return palindrome;
}

function validateData(number) {
  const err = { status: "failed", reason: "" };
  const minValue = 10;
  const maxValue = 1e16;

  if (!Number.isInteger(number) || number < minValue || number > maxValue) {
    err.reason = `Number should be an integer value in range [${minValue}, ${maxValue})`;
    console.error(err);
    return err;
  }
}

