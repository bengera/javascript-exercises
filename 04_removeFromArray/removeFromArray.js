const removeFromArray = function (array, ...args) { //args becomes an array
    args.forEach((arg) => { // for each array value
       const index = array.indexOf(arg); // find index of value given
       if (index > -1) {
          array.splice(index, 1) // at the position of argument, remove 1 
       }
       
    })
    return array;
    
 };

// Do not edit below this line
module.exports = removeFromArray;
