const ftoc = function (temp) { // farenheit to celcius
  let divisionFartoCel = 5 / 9;
  temp = (temp - 32) * divisionFartoCel;
  if (temp % 1 != 0) {
    let rounded = temp.toFixed(1);
    return parseFloat(rounded);
  } else {
    return temp;
  }



};

const ctof = function (temp) { // celcius to farenheit
  let divisionCeltoFar = 9 / 5;
  temp = temp * divisionCeltoFar + 32;
  if (temp % 1 != 0) {
    let rounded = temp.toFixed(1);
    return parseFloat(rounded);
  } else {
    return temp;
  }
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
