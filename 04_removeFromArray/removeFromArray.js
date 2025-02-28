const removeFromArray = (arrayOfNumbers, ...toRemove) => {
  for (const number of toRemove) {
    let numberIndex = arrayOfNumbers.indexOf(number);

    while (numberIndex !== -1) {
      arrayOfNumbers.splice(numberIndex, 1);

      numberIndex = arrayOfNumbers.indexOf(number);
    }
  }

  return arrayOfNumbers;
};

// Do not edit below this line
module.exports = removeFromArray;
