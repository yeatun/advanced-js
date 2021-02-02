const numbers = [3,4,5,6,7,8];
// using for
const output = [];
for(let  i = 0; i < numbers.length; i++)
{
    const  element = number[i];
    const result = element * element;
    output.push(result);
}

// using map
const result = number.map(x => x * x);
console.log(result);

// using filter(select that value that u want to filter)
 const result  = number.filter( x => x > 5);

 console.log(bigger);
 
//  using find (giving only one value)
const isThere = numbers.find( x => x < 3);
console.log(isThere);