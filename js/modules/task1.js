function createCheeseBoard(defHeight, defWidth, str) {
  const height = Math.abs(defHeight);
  const width = Math.abs(defWidth);

  if (!validateData(height, width, str)) {
    return;
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
  // drawChessBoard(line)
  return line;
}

function validateData(height, width, str) {
  const err = { status: 'failed', reason: '' };

  if (!Number.isInteger(height) || height === 0 || height >= 50) {
    err.reason = 'Expecting an integer in range from 1 to 50 as height';
    console.log(err);
    return false;
  }

  if (!Number.isInteger(width) || width === 0 || width >= 50) {
    err.reason = 'Expecting an integer in range from 1 to 50 as width';
    console.log(err);
    return false;
  }

  if(!str || typeof(str) !== 'string') {
    err.reason = 'Expecting not empty string as symbol to display';
    console.log(err);
    return false;
  }

  return true;
}

