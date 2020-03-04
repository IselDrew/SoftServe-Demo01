export function getRange(context) {
  const maxAllowedFibNumber = 1e6; 
  const fibNumbersArr = fib(maxAllowedFibNumber);

  let range;

  if (context.min && context.max) {
    //validate
    range = fibNumbersArr.filter(number => 
      number >= context.min && number <= context.max
    );
  }

  if (context.length) {
    //validate
    range = fibNumbersArr.filter(number => 
      number.toString().length === context.length
    );
  }
  return range;
}

function fib(number) {
  let next = 1;
  let prev = 0;

  const arr = [0];

  for (let i = 0; i < number; i++) {
    next += prev;
    prev = next - prev;
    arr.push(next);
  }
  return arr;
}


function validateRange(min, max, maxFib) {
  
}

function validateLength(length, maxFib) {}

