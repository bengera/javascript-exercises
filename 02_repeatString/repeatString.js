const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) {
        newString = 'ERROR';
        
    }
   
        while (num > 0) {
            newString += string;
            num--;
        }
        
        
        return newString;
};


// Do not edit below this line
module.exports = repeatString;
