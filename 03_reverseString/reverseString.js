const reverseString = (string) => {
  const stringLength = string.length;

  let newString = "";
  for (let i = 0; stringLength > i; i++) {
    newString += string.at(-i);
  }
  // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
