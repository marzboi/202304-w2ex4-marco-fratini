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

describe("Given given the function checkIsPrime", () => {
  describe("When given the number 4", () => {
    test("Then it should return false", () => {
      const number = 4;

      const expectedAnswer = false;
      const returnedAnswer = index.checkPrimeNumber(number);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});

describe("Given the function findLargestNumber", () => {
  describe("When given the numbers 3, 5, 7, 9", () => {
    test("Then it should return 9", () => {
      const number = [3, 5, 7, 9];

      const expectedAnswer = 9;
      const returnedAnswer = index.findLargestNumber(number);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });

  describe("When given the numbers -1, 50, -1000", () => {
    test("Then it should return 50", () => {
      const number = [-1, 50, -1000];

      const expectedAnswer = 50;
      const returnedAnswer = index.findLargestNumber(number);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});

describe("Given the function findLongestWord", () => {
  describe("When given the words Gigachad and cringe", () => {
    test("Then it should return Gigachad", () => {
      const words = ["Gigachad", "cringe"];

      const expectedAnswer = "Gigachad";
      const returnedAnswer = index.findLongestWord(words);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });

  describe("When given the words Sergio, Kevin, Dalai-Lama", () => {
    test("Then it should return Dalai-lama", () => {
      const words = ["Sergio", "Kevin", "Dalai-lama"];

      const expectedAnswer = "Dalai-lama";
      const returnedAnswer = index.findLongestWord(words);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});

describe("Given the function findNumberInList", () => {
  describe("When given the number 8 and the list 1 2 3 4 5 6 7 8 9", () => {
    test("Then it should return true", () => {
      const number = 8;
      const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const expectedAnswer = true;
      const returnedAnswer = index.findNumberInList(number, numberList);

      expect(returnedAnswer).toBe(expectedAnswer);
    });
  });
});
