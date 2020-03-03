import { checkNesting } from "../js/modules/task2.js";

export function testEnvelops(ass) {
  describe("Checking Envelopes Nesting task", () => {
    it("Check for right amount of arguments", () => {
      ass.deepEqual(
        checkNesting({ w: "10", h: "10" }, { w: "15", h: "20" }),
        2
      );
    });
    it("Check for right amount of arguments (more than expected)", () => {
      ass.deepEqual(
        checkNesting(
          { w: "10", h: "10" },
          { w: "15", h: "20" },
          undefined,
          1021
        ),
        {
          status: "failed",
          reason: "Wrong amount of arguments",
        }
      );
    });
    it("Check for right amount of arguments (less than expected)", () => {
      ass.deepEqual(checkNesting({ w: "15", h: "20" }), {
        status: "failed",
        reason: "Wrong amount of arguments",
      });
    });
    describe("Check algorithm", () => {
      it("Check if envelops are equal", () => {
        ass.equal(checkNesting({ w: "10", h: "10" }, { w: "10", h: "10" }), 0);
      });
      it("Check if first envelop can be nested in second one (straight)", () => {
        ass.equal(checkNesting({ w: "10", h: "10" }, { w: "20", h: "30" }), 2);
      });
      it("Check if first envelop can be nested in second one (diagonally)", () => {
        ass.equal(checkNesting({ w: "10", h: "40" }, { w: "20", h: "30" }), 2);
      });
      it("Check if second envelop can be nested in first one (straight)", () => {
        ass.equal(checkNesting({ w: "20", h: "10" }, { w: "5", h: "15" }), 1);
      });
      it("Check if second envelop can be nested in first one (diagonally)", () => {
        ass.equal(checkNesting({ w: "20", h: "30" }, { w: "10", h: "40" }), 1);
      });
    });
    describe("Check first envelope", () => {
      describe("Check width", () => {
        it("Check if width is number", () => {
          ass.deepEqual(
            checkNesting({ w: "ten", h: "10" }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Width of first envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: NaN, h: "10" }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Width of first envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: null, h: "10" }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Width of first envelope should be non-zero number",
            }
          );
          ass.equal(checkNesting({ w: 10, h: "10" }, { w: "15", h: "20" }), 2);
        });
        it("Check if width is float", () => {
          ass.equal(checkNesting({ w: "20.5", h: "30" }, { w: "10", h: "40" }), 1);
        });
        it("Check if width is equals 0", () => {
          ass.deepEqual(
            checkNesting({ w: "0", h: "10" }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Width of first envelope should be non-zero number",
            }
          );
          ass.deepEqual(checkNesting({ w: 0, h: "10" }, { w: "15", h: "20" }), {
            status: "failed",
            reason: "Width of first envelope should be non-zero number",
          });
        });
        it("Check width for negative numbers", () => {
          ass.equal(
            checkNesting({ w: "-10", h: "10" }, { w: "15", h: "20" }),
            2
          );
          ass.equal(checkNesting({ w: -10, h: "10" }, { w: "15", h: "20" }), 2);
        });
      });
      describe("Check height", () => {
        it("Check if height is number", () => {
          ass.deepEqual(
            checkNesting({ w: "10", h: "six" }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Height of first envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: "10", h: NaN }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Height of first envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: "10", h: null }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Height of first envelope should be non-zero number",
            }
          );
          ass.equal(checkNesting({ w: "10", h: 10 }, { w: "15", h: "20" }), 2);
        });
        it("Check if height is float", () => {
          ass.equal(checkNesting({ w: "20", h: "30.78" }, { w: "10", h: "40" }), 1);
        });
        it("Check if height is equals 0", () => {
          ass.deepEqual(
            checkNesting({ w: "10", h: "0" }, { w: "15", h: "20" }),
            {
              status: "failed",
              reason: "Height of first envelope should be non-zero number",
            }
          );
          ass.deepEqual(checkNesting({ w: "10", h: 0 }, { w: "15", h: "20" }), {
            status: "failed",
            reason: "Height of first envelope should be non-zero number",
          });
        });
        it("Check height for negative numbers", () => {
          ass.equal(checkNesting({ w: "10", h: -10 }, { w: "15", h: "20" }), 2);
          ass.equal(
            checkNesting({ w: "10", h: "-10" }, { w: "15", h: "20" }),
            2
          );
        });
      });
    });
    describe("Check second envelope", () => {
      describe("Check width", () => {
        it("Check if width is number", () => {
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: "fifteen", h: "20" }),
            {
              status: "failed",
              reason: "Width of second envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: NaN, h: "20" }),
            {
              status: "failed",
              reason: "Width of second envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: null, h: "20" }),
            {
              status: "failed",
              reason: "Width of second envelope should be non-zero number",
            }
          );
          ass.equal(checkNesting({ w: 10, h: "10" }, { w: "15", h: "20" }), 2);
        });
        it("Check if width is float", () => {
          ass.equal(checkNesting({ w: "20", h: "30" }, { w: "10.89", h: "40" }), 1);
        });
        it("Check if width is equals 0", () => {
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: "0", h: "20" }),
            {
              status: "failed",
              reason: "Width of second envelope should be non-zero number",
            }
          );
          ass.deepEqual(checkNesting({ w: "10", h: "10" }, { w: 0, h: "20" }), {
            status: "failed",
            reason: "Width of second envelope should be non-zero number",
          });
        });
        it("Check width for negative numbers", () => {
          ass.equal(
            checkNesting({ w: "10", h: "10" }, { w: "-15", h: "20" }),
            2
          );
          ass.equal(checkNesting({ w: "10", h: "10" }, { w: -15, h: "20" }), 2);
        });
      });
      describe("Check height", () => {
        it("Check if height is number", () => {
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: "15", h: "twelve" }),
            {
              status: "failed",
              reason: "Height of second envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: "15", h: NaN }),
            {
              status: "failed",
              reason: "Height of second envelope should be non-zero number",
            }
          );
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: "15", h: null }),
            {
              status: "failed",
              reason: "Height of second envelope should be non-zero number",
            }
          );
          ass.equal(checkNesting({ w: "10", h: "10" }, { w: "15", h: 20 }), 2);
        });
        it("Check if height is float", () => {
          ass.equal(checkNesting({ w: "20", h: "30" }, { w: "10", h: "40.12" }), 1);
        });
        it("Check if height is equals 0", () => {
          ass.deepEqual(
            checkNesting({ w: "10", h: "10" }, { w: "15", h: "0" }),
            {
              status: "failed",
              reason: "Height of second envelope should be non-zero number",
            }
          );
          ass.deepEqual(checkNesting({ w: "10", h: "10" }, { w: "15", h: 0 }), {
            status: "failed",
            reason: "Height of second envelope should be non-zero number",
          });
        });
        it("Check height for negative numbers", () => {
          ass.equal(
            checkNesting({ w: "10", h: "10" }, { w: "15", h: "-20" }),
            2
          );
          ass.equal(checkNesting({ w: "10", h: "10" }, { w: "15", h: -20 }), 2);
        });
      });
    });
  });
}
