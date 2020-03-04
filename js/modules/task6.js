export function getNumbersRow(unformLength, unformMinPow) {
  if (arguments.length !== 2) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  const length = Math.abs(Number(unformLength));
  const minPow = Math.abs(Number(unformMinPow));

  const isNotValid = validateData(length, unformMinPow);
  if (isNotValid) {
    return isNotValid;
  }

  const arr = [];

  const minValue = Math.sqrt(minPow);
  const intMinValue = Math.ceil(minValue);

  const pushLength = intMinValue + length;

  for (let i = intMinValue; i < pushLength; i++) {
    arr.push(i);
  }

  const result = arr.join(", ");

  return result;
}

function validateData(length, minPowStr) {
  const err = { status: "failed", reason: "" };
  const minPowNumber = Number(minPowStr);

  if (!Number.isInteger(length) || !length) {
    err.reason = "Length should be a non-zero integer";
    console.error(err);
    return err;
  }
  if (typeof minPowNumber !== 'number' || isNaN(minPowNumber) || minPowStr.length === 0) {
    err.reason = "Minimal pow should an integer";
    console.error(err);
    return err;
  }
}

