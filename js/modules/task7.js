export function getRange(context) {
  if (arguments.length !== 1) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }
  if (typeof context !== "object" || Array.isArray(context)) {
    return { status: "failed", reason: "Expecting object as argument" };
  }

  let range;

  if (context.min && context.max) {
    const min = Math.abs(Number(context.min));
    const max = Math.abs(Number(context.max));

    const isNotValid = validateRange(min, max);
    if (isNotValid) {
      return isNotValid;
    }

    range = fibRange(min, max);
  }

  if (context.length) {
    const length = Math.abs(Number(context.length));
    console.log(typeof length, length);

    const isNotValid = validateLength(length);
    if (isNotValid) {
      return isNotValid;
    }

    range = fibLength(length);
  }
  return range;
}

function fibLength(length) {
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

function fibRange(min, max) {
  let next = 1;
  let prev = 0;

  const arr = [];

  while (next <= max) {
    console.log(next)
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
    err.reason = `Expecting an integer`;
    console.error(err);
    return err;
  }

  if (!Number.isInteger(max)) {
    err.reason = `Expecting an integer`;
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
