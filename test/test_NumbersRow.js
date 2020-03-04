import { getNumbersRow } from "../js/modules/task6.js";

export function testNumbersRow(ass) {
  describe("Checking Numbers Row task", () => {
    it("Check algorithm", () => {
      ass.equal(getNumbersRow(5, 8), "3, 4, 5, 6, 7");
    });
    describe("Check inputs", () => {
      describe("Check length", () => {
        it("Check if length is float", () => {
          ass.deepEqual(getNumbersRow(5.6, 8), {
            status: "failed",
            reason: "Length should be a non-zero integer",
          });
        });
        it("Check if length is empty string", () => {
          ass.deepEqual(getNumbersRow("", 8), {
            status: "failed",
            reason: "Length should be a non-zero integer",
          });
        });
        it("Check if length is negative number", () => {
          ass.equal(getNumbersRow(-5, 8), "3, 4, 5, 6, 7");
        });
      });
      describe("Check minimal pow", () => {
        it("Check if pow is float", () => {
          ass.equal(getNumbersRow(5, 8.5), "3, 4, 5, 6, 7");
        });
        it("Check if pow is empty string", () => {
          ass.deepEqual(getNumbersRow(2, ""), {
            status: "failed",
            reason: "Minimal pow should a number",
          });
        });
        it("Check if pow is negative number", () => {
          ass.equal(getNumbersRow(5, -8), "3, 4, 5, 6, 7");
        });
      });
    });
  });
}
