 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let result = "";

if (strs.length === 0) {return ""}


if (strs.length === 1) {return strs[0]}
 
for(let i=0 ; i<strs[0].length ; i++){

 for(let j=1 ; j< strs.length ; j++){
 if(strs[0][i] == strs[j][i]){
     continue;
 }else{
     return result
 }
 }

 
result += strs[0][i];
}
return result;    
};
