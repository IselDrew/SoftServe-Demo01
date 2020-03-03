export function calcChessBoard(strHeight, strWidth, str) {
  if (arguments.length !== 3) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  const height = Math.abs(Number(strHeight));
  const width = Math.abs(Number(strWidth));

  const isNotValid = validateData(height, width, str);
  if (isNotValid) {
    return isNotValid;
  }

  const symbol = str[0];
  let line = "";

  for (let i = 0; i < height; i++) {
    line += i % 2 ? " " : "";
    for (let j = 0; j < width; j++) {
      line += j % 2 ? " " : symbol;
    }
    if (i !== height - 1) {
      line += "\n";
    }
  }
  return line;
}

function validateData(height, width, str) {
  const err = { status: "failed", reason: "" };
  const maxValue = 50;
  const minValue = 1;

  if (!Number.isInteger(height) || height === 0 || height >= maxValue) {
    err.reason = `Expecting an integer in range [${minValue}, ${maxValue}) as height`;
    console.error(err);
    return err;
  }

  if (!Number.isInteger(width) || width === 0 || width >= maxValue) {
    err.reason = `Expecting an integer in range [${minValue}, ${maxValue}) as width`;
    console.error(err);
    return err;
  }

  if (!str || typeof str !== "string") {
    err.reason = "Expecting non-empty string as symbol to display";
    console.error(err);
    return err;
  }
}
