import index from "./index.js";

describe("Given the function checkAllVowels", () => {
  describe("When given the word Marco", () => {
    test("Then it should return false", () => {
      const word = "Marco";

      const expectedAnswer = false;
      const returnedAnswer = index.checkIfHasAllVowels(word);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });

  describe("When given the an empty reply", () => {
    test("Then it should return an error", () => {
      const word = "";

      const returnedAnswer = index.checkIfHasAllVowels(word);
      const expectedAnswer = "No word provided";

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});
