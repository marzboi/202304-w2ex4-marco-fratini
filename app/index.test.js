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

describe("Given the function checkEvenNumber", () => {
  describe("When given the number 4", () => {
    test("Then it should return true", () => {
      const number = 4;

      const expectedAnswer = true;
      const returnedAnswer = index.checkEvenNumber(number);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });

  describe("When given the number 3", () => {
    test("Then it should return false", () => {
      const number = 3;

      const expectedAnswer = false;
      const returnedAnswer = index.checkEvenNumber(number);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});

describe("Given given the the function checkIsPrime", () => {
  describe("When given the number 4", () => {
    test("Then it should return false", () => {
      const number = 4;

      const expectedAnswer = false;
      const returnedAnswer = index.checkPrimeNumber(number);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});
