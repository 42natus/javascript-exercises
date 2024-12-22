const convertToCelsius = function(fahrenheit) {
  const FAHRENHEIT_TO_CELSIUS = (fahrenheit - 32) * (5/9);

  const roundedValue = Math.round(FAHRENHEIT_TO_CELSIUS * 10) / 10;

  const result = parseFloat(roundedValue.toFixed(1));

  return result;
};

const convertToFahrenheit = function(celsius) {
  const CELSIUS_TO_FAHRENHEIT = (celsius * (9/5) + 32);

  const roundedValue = Math.round(CELSIUS_TO_FAHRENHEIT * 10) / 10;

  const result = parseFloat(roundedValue.toFixed(1));

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
