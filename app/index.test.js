import index from "./index.js";

describe("Given the function checkAllVowels", () => {
  describe("When given the word Marco", () => {
    test("Then it should return false", () => {
      const word = "Marco";

      const expectedAnswer = false;
      const returnedAnswer = index.checkAllVowels(word);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});
