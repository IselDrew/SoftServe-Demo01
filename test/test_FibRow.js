import { getRange } from "../js/modules/task7.js";

export function testFibRow(ass) {
  describe("Checking Numbers Row task", () => {
    it("Check algorithm (range)", () => {
      ass.deepEqual(getRange({ min: 100, max: 1000 }), [144, 233, 377, 610, 987]);
    });
    it("Check algorithm (length)", () => {
      ass.deepEqual(getRange({ length: 4 }), [1597, 2584, 4181, 6765]);
    });
    it("Check algorithm (no inputs)", () => {
      ass.deepEqual(getRange({min: '', max: ''}), { status: "failed", reason: "No input" });
    });
    describe("Check inputs", () => {
      describe("Check range", () => {
        it("Check if min is more than max", () => {
          ass.deepEqual(getRange({ min: 100, max: 10 }), {
            status: "failed",
            reason: "Max shouldn't be more or equal min",
          });
        });
        it("Check if min is equals max", () => {
          ass.deepEqual(getRange({ min: 10, max: 10 }), {
            status: "failed",
            reason: "Max shouldn't be more or equal min",
          });
        });
        it("Check if min isn't integer", () => {
          ass.deepEqual(getRange({ min: 12.5, max: 100 }), {
            status: "failed",
            reason: "Expecting an integer as min",
          });
          ass.deepEqual(getRange({ min: "ten", max: 10 }), {
            status: "failed",
            reason: "Expecting an integer as min",
          });
        });
        it("Check if max isn't integer", () => {
          ass.deepEqual(getRange({ min: 5, max: 10.5 }), {
            status: "failed",
            reason: "Expecting an integer as max",
          });
          ass.deepEqual(getRange({ min: 100, max: "fifty" }), {
            status: "failed",
            reason: "Expecting an integer as max",
          });
        });
      });
      describe("Check length", () => {
        it("Check if length is more than allowed max", () => {
          ass.deepEqual(getRange({ length: 25 }), {
            status: "failed",
            reason: "Expecting an integer in range [1, 23)",
          });
        });
        it("Check if length isn't integer", () => {
          ass.deepEqual(getRange({ length: 25.5 }), {
            status: "failed",
            reason: "Expecting an integer in range [1, 23)",
          });
        });
        it("Check if length is equal to 0 ", () => {
          ass.deepEqual(getRange({ length: '0' }), {
            status: "failed",
            reason: "Expecting an integer in range [1, 23)",
          });
        });
      });
    });
  });
}
