const nums = [1,2,3,4,5,6,7,8,9];
const part  =  nums.slice (2,5);//both are number 
const removed = nums.splice(2,5); //1st ine is number 2nd is how many u want to remove
console.log(part);
const together = nums.join(" ");