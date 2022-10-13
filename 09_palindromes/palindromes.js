const palindromes = function (str) {

    const regex = (/[^a-z0-9_]/g);
    const lowRegStr = str.toLowerCase().replace(regex, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
  
    return reverseStr === lowRegStr;
  
  
  };

// Do not edit below this line
module.exports = palindromes;
