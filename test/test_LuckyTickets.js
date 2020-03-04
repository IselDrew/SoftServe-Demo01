import { checkLuckyTicket } from "../js/modules/task5.js";

export function testLuckyTicket(ass) {
  describe("Checking Lucky Tickets", () => {
    it("Check algorithm (winner: easy)", () => {
      ass.deepEqual(checkLuckyTicket({ min: 123456, max: 200000 }), {
        counterEasy: 4579,
        counterDifficult: 1674,
        winner: "Easy",
      });
    });
    it("Check algorithm (winner: difficult)", () => {
      ass.deepEqual(checkLuckyTicket({ min: 1, max: 300 }), {
        counterEasy: 0,
        counterDifficult: 9,
        winner: "Difficult",
      });
    });
    it("Check algorithm (no winner)", () => {
      ass.deepEqual(checkLuckyTicket({ min: 1, max: 2 }), {
        counterEasy: 0,
        counterDifficult: 0,
        winner: "No winner",
      });
    });
    describe("Check input values", () => {
      describe('Check min value', () => {
        it("Check if min more than max", () => {
          ass.deepEqual(checkLuckyTicket({ min: 1000, max: 2 }), {
            status: "failed",
            reason: "Invalid range",
          });
        });
        it("Check if min equals max", () => {
          ass.deepEqual(checkLuckyTicket({ min: 1000, max: 1000 }), {
            status: "failed",
            reason: "Invalid range",
          });
        });
        it("Check if min type is float", () => {
          ass.deepEqual(checkLuckyTicket({ min: 2.2, max: 7 }), {
            status: "failed",
            reason: "Min should be an integer in range [0 to 1000000)",
          });
        });
        it("Check if min type is string", () => {
          ass.deepEqual(checkLuckyTicket({ min: 'ten', max: 100 }), {
            status: "failed",
            reason: "Min should be an integer in range [0 to 1000000)",
          });
        });
      })
      describe('Check max value', () => {
        it("Check if max type is float", () => {
          ass.deepEqual(checkLuckyTicket({ min: 10, max: 100.5 }), {
            status: "failed",
            reason: "Max should be an integer in range [0 to 1000000)",
          });
        });
        it("Check if max type is string", () => {
          ass.deepEqual(checkLuckyTicket({ min: 10, max: 'hundread' }), {
            status: "failed",
            reason: "Max should be an integer in range [0 to 1000000)",
          });
        });
        it("Check if max value is less than max allowed value", () => {
          ass.deepEqual(checkLuckyTicket({ min: 10, max: 2e8 }), {
            status: "failed",
            reason: "Max should be an integer in range [0 to 1000000)",
          });
        });
      })
    });
  });
}
