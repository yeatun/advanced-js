let bonus = 20; //global any time can access;

function sum (first,second){
let result = first + second + bonus; //anytime can't move
return result;
}
const output = sum (3,7);
console.log (bonus);
console.log(output);
