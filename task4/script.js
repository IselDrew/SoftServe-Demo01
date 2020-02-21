function checkPalindrome(number) {
  console.log(number)
  // let strNumber = number.toString();
  const partOfPalindrome = checker(number);
  const palindrome = partOfPalindrome.split('').reverse().join('') + partOfPalindrome;
  console.log(palindrome)
}

function checker(str) {
  let firstPalindrome = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      firstPalindrome = str[i]
      str = str.replace(str[i] + str[i + 1], '')
      firstPalindrome += checker(str)
    } 
  }
  return firstPalindrome;
}

// checkPalindrome('1235775234')
checkPalindrome('17255213489980')

