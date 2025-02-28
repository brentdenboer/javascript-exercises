const reverseString = (string) => {
  const stringLength = string.length;
  let newString = "";

  for (let i = 1; stringLength >= i; i++) {
    newString += string.at(-i);
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
