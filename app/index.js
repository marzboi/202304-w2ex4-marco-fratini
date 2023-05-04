const checkIfHasAllVowels = (word) => {
  if (!word) {
    return "No word provided";
  }

  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowels) => word.includes(vowels));
};

const checkEvenNumber = (number) => number % 2 === 0;

const checkPrimeNumber = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const findLargestNumber = (numberList) => Math.max(...numberList);

const findLongestWord = (words) =>
  words.sort((valueA, valueB) => valueB.length - valueA.length)[0];

const findNumberInList = (number, numberList) => numberList.includes(number);

export default {
  checkIfHasAllVowels,
  checkEvenNumber,
  checkPrimeNumber,
  findLargestNumber,
  findLongestWord,
  findNumberInList,
};
