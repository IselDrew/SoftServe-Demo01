function calcChessBoard(height, width, str) {
  if (arguments.length !== 3) {
    return { status: 'failed', reason: 'Wrong amount of arguments' };
  }

  const isNotValid = validateChessBoard(height, width, str);

  if (isNotValid) {
    return isNotValid;
  }

  const symbol = str[0];
  let line = '';

  for (let i = 0; i < height; i++) {
    line += (i % 2) ? ' ' : '';
    for (let j = 0; j < width; j++) {
      line += (j % 2) ? ' ' : symbol;
    }
    if (i !== height - 1) {
      line += '\n';
    }
  }
  return line;
}

function validateChessBoard(height, width, str) {
  const err = { status: 'failed', reason: '' };
  const maxValue = 50;
  const minValue = 1;

  if (!Number.isInteger(height) || height === 0 || height >= maxValue) {
    err.reason = `Expecting an integer in range from ${minValue} to ${maxValue} as height`;
    console.error(err);
    return err;
  }

  if (!Number.isInteger(width) || width === 0 || width >= maxValue) {
    err.reason = `Expecting an integer in range from ${minValue} to ${maxValue} as width`;
    console.error(err);
    return err;
  }

  if(!str || typeof(str) !== 'string') {
    err.reason = 'Expecting not empty string as symbol to display';
    console.error(err);
    return err;
  }
}

