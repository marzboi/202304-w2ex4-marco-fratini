const checkAllVocals = (word) => {
  if (!word) {
    throw new Error("No word provided");
  }

  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowels) => word.includes(vowels));
};

export default {
  checkAllVocals,
};
