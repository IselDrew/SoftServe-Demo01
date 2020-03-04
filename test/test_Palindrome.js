import { checkPalindrome } from "../js/modules/task4.js";

export function testPalindrome(ass) {
  describe("Checking Palindrome", () => {
    it("Check algorithm", () => {
      ass.equal(checkPalindrome(12213489), "1221");
      ass.equal(checkPalindrome(855012332174), "123321");
    });
    describe("Check input values", () => {
      it("Check if palindrome value is more than 10", () => {
        ass.deepEqual(checkPalindrome(7), {
          status: "failed",
          reason:
            "Number should be an integer value in range [10, 10000000000000000)",
        });
      });
      it("Check if input type is float", () => {
        ass.deepEqual(checkPalindrome(12.5), {
          status: "failed",
          reason:
            "Number should be an integer value in range [10, 10000000000000000)",
        });
      });
      it("Check if palindrome value is more than 1e16", () => {
        ass.deepEqual(checkPalindrome(2e17), {
          status: "failed",
          reason:
            "Number should be an integer value in range [10, 10000000000000000)",
        });
      });
      it("Check if input type is string", () => {
        ass.deepEqual(checkPalindrome("twelve"), {
          status: "failed",
          reason:
            "Number should be an integer value in range [10, 10000000000000000)",
        });
      });
    });
  });
}
