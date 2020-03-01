function fib(number)
{
	let x = 1;
	let y = 0;
	for (let i = 0; i < number; i++)
	{
		x += y;
		y = x - y;
	}
	return y;
}

function getRange(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push( fib(i) );
  }
  console.log(arr)
}

getRange(0, 10)

