let bonus = 20; //global any time can access;

function sum (first,second){
let result = first + second + bonus; //in function or any other loop can't access outside
return result;
}
const output = sum (3,7);
console.log (bonus);
console.log(output);
