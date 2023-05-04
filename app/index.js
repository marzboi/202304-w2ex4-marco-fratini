const checkIfHasAllVowels = (word) => {
  if (!word) {
    return "No word provided";
  }

  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowels) => word.includes(vowels));
};

export default {
  checkIfHasAllVowels,
};
