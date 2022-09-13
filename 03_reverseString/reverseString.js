const reverseString = function(str) {
    let splitString = str.split("") 
      splitString.reverse();
      let joinString = splitString.join();
      let result = joinString.replace(/,/g,'');
      return result;
};

// Do not edit below this line
module.exports = reverseString;
