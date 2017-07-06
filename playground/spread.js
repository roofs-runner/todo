// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(1, 3));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));
//
// var sub = ['Joan', 'Len'];
// var sub2 = ['Sunny'];
// var final = [...sub2, 3, ...sub];
// console.log(final);

var person = ['Hulio', 48];
var person2 = ['Baltazar', 44];

function sayHello(name, age) {
    return 'Hello ' + name + ' you are ' + age;
}

console.log(sayHello(...person));

var names = ['Jen', 'Pedro'];
var final = ['Franchesco', ...names];

final.forEach(function (person) {
    console.log('Hello ' + person);
});

