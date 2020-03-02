function sortTriangle(...triangles) {
  const areas = [];

  triangles.forEach(triangle => {
    const currentTriangle = getTriangle(triangle);
    const [name, a, b, c] = currentTriangle;

    const area = calcArea(a, b, c); 
    areas.push({area, name});
  })

  const sortedAreas = areas.sort(compareAreas);

  // console.log(sortedAreas)

  const sortedTriangles = sortedAreas.map(triangle => {
    return triangle.name;
  })

  // console.log(sortedTriangles);
  return sortTriangles;
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
  // console.log(triangle);
  const triangleData = [];
  for (let key in triangle) {
    triangleData.push(triangle[key]);
  }
  return triangleData;
}

function calcArea(a, b, c) {
  const p = (a + b + c) / 2;

  return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

const triangle1 = {
  verticles: 'ABC',
  a: 10,
  b: 20,
  c: 22.36,
};

const triangle2 = {
  verticles: 'AFK',
  a: 15,
  f: 25,
  k: 25.91,
};

const triangle3 = {
  verticles: 'BCD',
  b: 20,
  c: 30,
  d: 31.46,
};


