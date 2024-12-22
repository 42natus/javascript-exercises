const convertToCelsius = function(fahrenheitTemp) {
  const fahrenheitToCelsius = (fahrenheitTemp - 32) * (5/9);

  const roundedFahrenheitToCelsius = Math.round(fahrenheitToCelsius * 10) / 10;

  const result = parseFloat(roundedFahrenheitToCelsius.toFixed(1));

  return result;
};

const convertToFahrenheit = function(celsiusTemp) {
  const celsiusToFahrenheit = (celsiusTemp * (9/5) + 32);

  const roundedCelsiusToFahrenheit = Math.round(celsiusToFahrenheit * 10) / 10;

  const result = parseFloat(roundedCelsiusToFahrenheit.toFixed(1));

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
