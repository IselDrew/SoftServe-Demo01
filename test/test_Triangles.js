import { sortTriangles } from "../js/modules/task3.js";

export function testTriangles(ass) {
  describe("Check Triangles Sorting task", () => {
    it("Check for right amount of arguments", () => {
      ass.deepEqual(sortTriangles([
        { verticles: "ABC", a: 10, b: 20, c: 22.36 },
        { verticles: "KFC", k: 20, f: 30, c: 32.36 },
      ])),
        ["KFC", "ABC"];
    });
    // it("Check for right amount of arguments (less than expected)", () => {
    //   ass.deepEqual();
    // });
  });
}
