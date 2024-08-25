/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
     num = (''+num).split('')
     const sum = num.reduce((pre,cur)=>{ 
         return +pre + +cur
     })
     if(sum> 9){
           return addDigits(sum)
     }else{
        
         return sum
     }
};