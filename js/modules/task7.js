export function getRange(context) {
  if (arguments.length !== 1) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  let range;

  if (context.min && context.max) {
    const min = Math.abs(Number(context.min));
    const max = Math.abs(Number(context.max));

    const isNotValid = validateRange(min, max);
    if (isNotValid) {
      return isNotValid;
    }

    range = getRangeByRange(min, max);
  } else if (context.length) {
    const length = Math.abs(Number(context.length));

    const isNotValid = validateLength(length);
    if (isNotValid) {
      return isNotValid;
    }

    range = getRangeByLength(length);
  } else {
    return { status: "failed", reason: "No input" };
  }
  return range;
}

function getRangeByLength(length) {
  let next = 1;
  let prev = 0;

  const arr = [];

  while (next.toString().length <= length) {
    next += prev;
    prev = next - prev;
    const nextLength = next.toString().length;
    if (nextLength === length) {
      arr.push(next);
    }
  }

  return arr;
}

function getRangeByRange(min, max) {
  let next = 1;
  let prev = 0;

  const arr = [];

  while (next <= max) {
    next += prev;
    prev = next - prev;
    if (next >= min && next <= max) {
      arr.push(next);
    }
  }

  return arr;
}

function validateRange(min, max) {
  const err = { status: "failed", reason: "" };

  if (max <= min) {
    err.reason = `Max shouldn't be more or equal min`;
    console.error(err);
    return err;
  }

  if (!Number.isInteger(min)) {
    err.reason = `Expecting an integer as min`;
    console.error(err);
    return err;
  }

  if (!Number.isInteger(max)) {
    err.reason = `Expecting an integer as max`;
    console.error(err);
    return err;
  }
}

function validateLength(length) {
  const err = { status: "failed", reason: "" };
  const maxLength = 23;

  if (!Number.isInteger(length) || length >= maxLength || length === 0) {
    err.reason = `Expecting an integer in range [1, ${maxLength})`;
    console.error(err);
    return err;
  }
}
