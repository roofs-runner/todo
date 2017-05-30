// var names = ['Hui', 'Huilo', 'Huini'];
// //
// // names.forEach(function (name) {
// //     console.log(name);
// // });
// //
// // names.forEach((name) => console.log('ES6', name));
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Fucker'));
//
// var person = {
//   name: 'Khuilo',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hello to' + name);
//         });
//     }
// };
//
// person.greet();

// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(1,4));

var statement = (a,b) => {
    return a + b;
}

console.log(statement(3,2));

var add = (a, b) => a + b;
console.log(add(4,9));