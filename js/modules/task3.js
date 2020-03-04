export function sortTriangles(triangles) {
  if (arguments.length === 0) {
    return { status: "failed", reason: "Wrong amount of arguments" };
  }

  const areas = [];

  let isValid = true;
  let triangleNotValid;

  triangles.forEach(triangle => {
    const currentTriangle = getTriangle(triangle);

    triangleNotValid = validateData(currentTriangle);
    if (triangleNotValid) {
      isValid = false;
      return;
    }

    const [name, a, b, c] = currentTriangle;
    const area = calcArea(a, b, c);
    areas.push({ area, name });
  });

  if (!isValid) {
    return triangleNotValid;
  }

  const sortedAreas = areas.sort(compareAreas);

  const sortedTriangles = sortedAreas.map(triangle => {
    return triangle.name;
  });

  triangleNotValid = checkNamesUniqueness(sortedTriangles);
  if (triangleNotValid) {
    return triangleNotValid;
  }

  console.log(sortedTriangles)
  return sortedTriangles;
}

function compareAreas(a, b) {
  if (a.area < b.area) {
    return 1;
  }
  if (a.area > b.area) {
    return -1;
  }
  return 0;
}

function getTriangle(triangle) {
  const triangleData = [];
  for (let key in triangle) {
    triangleData.push(triangle[key]);
  }
  return triangleData;
}

function calcArea(a, b, c) {
  const p = (a + b + c) / 2;

  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function checkNamesUniqueness(arr) {
  const set = new Set(arr);
  if (arr.length !== set.size) {
    return { status: "failed", reason: "Repeating triangles" };
  }
}

function validateData(triangle) {
  const err = { status: "failed", reason: "" };
  const [name, a, b, c] = triangle;

  if (name.length !== 3 || typeof name !== "string") {
    err.reason = `Invalid name of triangle ${name}`;
    console.error(err);
    return err;
  }

  if (!checkVerticlesUniqueness(name)) {
    err.reason = `Repeating verticles in ${name}`;
    console.error(err);
    return err;
  }

  for (let i = 1; i < triangle.length; i++) {
    if (isNaN(triangle[i])) {
      err.reason = "Side of triangle should be non-zero number";
      console.error(err);
      return err;
    }
  }

  const isValidTriangle = a + b <= c || a + c <= b || b + c <= a;

  if (isValidTriangle) {
    err.reason = `${name} is not a triangle`;
    console.error(err);
    return err;
  }
}

function checkVerticlesUniqueness(name) {
  const verticles = name.split("");
  const set = new Set(verticles);
  return verticles.length === set.size;
}

