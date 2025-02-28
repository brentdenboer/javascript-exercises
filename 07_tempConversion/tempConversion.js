const convertToCelsius = (fahrenheit) => {
  return Number.parseFloat(((fahrenheit - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = (celcius) => {
  return Number.parseFloat((celcius * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
