import { sortTriangles } from "../js/modules/task3.js";

export function testTriangles(ass) {
  describe("Check Triangles Sorting task", () => {
    it("Check algorithm", () => {
      ass.deepEqual(
        sortTriangles([
          { verticles: "ABC", a: 10, b: 20, c: 22.36 },
          { verticles: "KFC", k: 20, f: 30, c: 32.36 },
        ]),
        ["KFC", "ABC"]
      );
    });
    describe("Check inputs", () => {
      describe("Check name", () => {
        it("Check name length", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: "AB", a: 10, b: 20, c: 22.36 },
            ]),
            {
              status: "failed",
              reason: "Invalid name of triangle AB"
            }
          );
          ass.deepEqual(
            sortTriangles([
              { verticles: "ABCD", a: 10, b: 20, c: 22.36 },
            ]),
            {
              status: "failed",
              reason: "Invalid name of triangle ABCD"
            }
          );
        });
        it("Check if name isn't string", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: 123, a: 10, b: 20, c: 22.36 },
            ]),
            {
              status: "failed",
              reason: "Invalid name of triangle 123"
            }
          );
        });
        it("Check if name contains same characters", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: 'ABB', a: 10, b: 20, c: 22.36 },
            ]),
            {
              status: "failed",
              reason: "Repeating verticles in ABB"
            }
          );
        });
        it("Check if there's same triangles", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: 'ABC', a: 10, b: 20, c: 22.36 },
              { verticles: 'ABC', a: 10, b: 20, c: 22.36 },
            ]),
            {
              status: "failed",
              reason: "Repeating triangles"
            }
          );
        });
      });
      describe("Check values", () => {
        it("Check if triangle exist", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: 'ABC', a: 1, b: 2, c: 3 },
            ]),
            {
              status: "failed",
              reason: "ABC is not a triangle"
            }
          );
        });
        it("Check if triangle exist", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: 'ABC', a: 1, b: 2, c: 3 },
            ]),
            {
              status: "failed",
              reason: "ABC is not a triangle"
            }
          );
        });
        it("Check if triangle side is non-zero value", () => {
          ass.deepEqual(
            sortTriangles([
              { verticles: 'ABC', a: 'as', b: 2, c: 3 },
            ]),
            {
              status: "failed",
              reason: "Side of triangle should be non-zero number"
            }
          );
        });
      });
    });
  });
}
