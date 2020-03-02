function rectangleInRectangle(env1, env2) {
  const a = env1.a;
  const b = env1.b;
  const p = env2.p;
  const q = env2.q;

  const epicFormula = ((2*p*q*a + (Math.pow(p, 2) - Math.pow(q, 2))*Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) - Math.pow(a, 2)))/(Math.pow(p, 2) + Math.pow(q, 2)))
  if ((env2.p <= env1.a && env2.q <= env1.b) || (env2.p > env1.a && b >= epicFormula)) {
    return 1
  } else {
    return 0
  }
} 

const envelop1 = {
  a: 10,
  b: 10,
};

const envelop2 = {
  p: 11,
  q: 9,
};

