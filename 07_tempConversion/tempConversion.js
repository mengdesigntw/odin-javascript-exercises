const convertToCelsius = function (degreeF) {
  const value = ((degreeF - 32) * 5) / 9;
  const temperature = Math.round(value * 10) / 10;
  return temperature;
};

const convertToFahrenheit = function (degreeC) {
  const value = (degreeC * 9) / 5 + 32;
  const temperature = Math.round(value * 10) / 10;
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
