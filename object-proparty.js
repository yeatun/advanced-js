const students = [
    { id : 21,name : "omar sunny"},
    { id : 31,name : "kodom sunny"},
    { id : 41,name : "kume sunny"},
    { id : 51,name : "deepjol"}
];
const names = students.map ( s => s.name);
console.log(names);
const bigger = students.filter( s => s.id > 40);
console.log(bigger);
const biggerOne = students.find ( s => s.id > 40);
console.log(biggerOne);