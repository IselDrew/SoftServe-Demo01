function checkPalindrome(str) {
  const arr = [];

  let leftSide;
  let rightSide;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      leftSide = str.slice(0, i + 1).split('').reverse().join('');
      rightSide = str.slice(i + 1)
      let palindrome = getPalindromes(leftSide, rightSide)
      arr.push(palindrome)
    }
  }
  console.log(arr)
  const longestPalindrom = arr.reduce((acc, item) => {
    return acc.length > item.length ? acc : item 
  })
  console.log(longestPalindrom)
  return longestPalindrom;
}

function getPalindromes(str1, str2) {
  const arr = [];
  const longestStr = str1.length > str2.length ? str1 : str2;
  for (let i = 0; i < longestStr.length; i++) {
    if (str1[i] === str2[i]) {
      arr.push(str1[i])
    }
  }
  const rightSide = arr.join('');
  const leftSide = arr.reverse().join('');

  const palindrome = leftSide + rightSide;
  return palindrome;
}

checkPalindrome("122173443725");
