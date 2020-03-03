import { calcChessBoard } from "../js/modules/task1.js";

export function testChessBoard(ass) {
  describe("Checking Chess Board task", () => {
    it("Check for right amount of arguments", () => {
      ass.equal(calcChessBoard('5', '5', "*"), '* * *\n * * *\n* * *\n * * *\n* * *');
    });
    it("Check for right amount of arguments (more than expected)", () => {
      ass.deepEqual(calcChessBoard('5', '5', "*", 10), {
        status: "failed",
        reason: "Wrong amount of arguments",
      });
    });
    it("Check for right amount of arguments (less than expected)", () => {
      ass.deepEqual(calcChessBoard('5', "*"), {
        status: "failed",
        reason: "Wrong amount of arguments",
      });
    });
    describe("Check height", () => {
      it("Check height for negative numbers", () => {
        ass.equal(calcChessBoard('-2', '2', "h"), "h \n h ");
      });
      it("Check if height is float", () => {
        ass.deepEqual(calcChessBoard('5.5', '5', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as height",
        });
      });
      it("Check if height is empty", () => {
        ass.deepEqual(calcChessBoard('', '5', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as height",
        });
      });
      it("Check if height is equal 0", () => {
        ass.deepEqual(calcChessBoard('0', '5', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as height",
        });
      });
      it("Check if height is more than 50", () => {
        ass.deepEqual(calcChessBoard('50', '5', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as height",
        });
      });
    });
    describe("Check width", () => {
      it("Check width for negative numbers", () => {
        ass.equal(calcChessBoard('-2', '2', "h"), "h \n h ");
      });
      it("Check if width is not integer", () => {
        ass.deepEqual(calcChessBoard('10', '92.2', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as width",
        });
      });
      it("Check if width is empty", () => {
        ass.deepEqual(calcChessBoard('5', '', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as width",
        });
      });
      it("Check if width is equal 0", () => {
        ass.deepEqual(calcChessBoard('5', '0', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as width",
        });
      });
      it("Check if width is more than 50", () => {
        ass.deepEqual(calcChessBoard('20', '78', "*"), {
          status: "failed",
          reason: "Expecting an integer in range [1, 50) as width",
        });
      });
    });
    describe("Check string", () => {
      it("Check empty string", () => {
        ass.deepEqual(calcChessBoard('10', '5', ""), {
          status: "failed",
          reason: "Expecting non-empty string as symbol to display",
        });
      });
      it("Check for typeof 'string'", () => {
        ass.deepEqual(calcChessBoard('10', '5', 123), {
          status: "failed",
          reason: "Expecting non-empty string as symbol to display",
        });
      });
      it("Check for ignoring all char's except first one", () => {
        ass.equal(calcChessBoard('2', '2', "h12w34n"), "h \n h ");
      });
    });
  });
}
