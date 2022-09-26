const sumAll = (function(n1, n2, ...moreNumbers) {

   
      
   if (isNaN(n1) || isNaN(n2) || isNaN(moreNumbers) || n1 < 0 || n2 < 0 || moreNumbers < 0 || typeof(n1)!=="number"
   || typeof(n2)!=="number"){
      
      return 'ERROR'
   }

   let max = Math.max(n1,n2,...moreNumbers)
   let min = Math.min(n1,n2,...moreNumbers)
   
   console.log('max is ' + max);
   console.log('min is ' + min);

        
   const arr = [];
   arr.push(n1);
   console.log(arr);

   
   for (let i = 0; i < max -1; i++ ){
      min++
      arr.push(min);
      console.log(arr);
      
     }

          
   const sum = arr.reduce(
   (accumulator, currentValue) => accumulator + currentValue);

   console.log(sum);
  
   
      return sum;
   
   
});

console.log(sumAll (1, 4));


// Do not edit below this line
module.exports = sumAll;
