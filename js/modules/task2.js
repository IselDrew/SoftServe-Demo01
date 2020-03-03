export function checkNesting(env1, env2) {
  if (arguments.length !== 2) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  const envelope1 = {
    width: Math.abs(Number(env1.w)),
    height: Math.abs(Number(env1.h)),
    number: 1,
  };

  const envelope2 = {
    width: Math.abs(env2.w),
    height: Math.abs(env2.h),
    number: 2,
  };

  const isNotValid = validateData(envelope1, envelope2);
  if (isNotValid) {
    return isNotValid;
  }

  const envelope1Area = envelope1.width * envelope1.height;
  const envelope2Area = envelope2.width * envelope2.height;

  let bigEnv;
  let smallEnv;

  if (envelope1Area !== envelope2Area) {
    if (envelope1Area > envelope2Area) {
      bigEnv = envelope1;
      smallEnv = envelope2;
    } else {
      bigEnv = envelope2;
      smallEnv = envelope1;
    }
  } else {
    return 0;
  }

  const epicFormula =
    (2 * smallEnv.width * smallEnv.height * bigEnv.width +
      (Math.pow(smallEnv.width, 2) - Math.pow(smallEnv.height, 2)) *
        Math.sqrt(
          Math.pow(smallEnv.width, 2) +
            Math.pow(smallEnv.height, 2) -
            Math.pow(bigEnv.width, 2)
        )) /
    (Math.pow(smallEnv.width, 2) + Math.pow(smallEnv.height, 2));

  if (
    (smallEnv.width <= bigEnv.width && smallEnv.height <= smallEnv.height) ||
    (smallEnv.width > bigEnv.height && bigEnv.height >= epicFormula)
  ) {
    return bigEnv.number;
  } else {
    return 0;
  }
}

function validateData(env1, env2) {
  const err = { status: "failed", reason: "" };

  if (isNaN(env1.width) || env1.width === 0) {
    err.reason = "Width of first envelope should be non-zero number";
    console.error(err);
    return err;
  }
  if (isNaN(env1.height) || env1.height === 0) {
    err.reason = "Height of first envelope should be non-zero number";
    console.error(err);
    return err;
  }
  if (isNaN(env2.width) || env2.width === 0) {
    err.reason = "Width of second envelope should be non-zero number";
    console.error(err);
    return err;
  }
  if (isNaN(env2.height) || env2.height === 0) {
    err.reason = "Height of second envelope should be non-zero number";
    console.error(err);
    return err;
  }
}

