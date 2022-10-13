const add = function(n1,n2,...n) {
  return parseInt(n1 + n2 + n);
};

const subtract = function(n1,n2,...n) {
return n1 - n2 - n;
};

const sum = function(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++){
  sum += arr[i];
  
}
return sum;
};

const multiply = function(arr) {
let sum = 1; 
for (let i = 0; i < arr.length; i++){
  sum *= arr[i];
  
}
return sum;
};

const power = function(n1,n2,...n) {
return Math.pow(n1,n2,n);
};

const factorial = function(n) {
let result = 1;
if (n === 0 || n ===1){
  return 1;
} else {
  return n * factorial(n-1);
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
