// examples on prototypes

let computer = {cpu: 12}
let lenovo = {screen:'HD', __proto__:computer}
let mac = {}

// console.log('computer', computer.__proto__)
// console.log('lenovo', lenovo.__proto__);

let genericCar={tyres:4}
let lexus = {engine:'v4'}

Object.setPrototypeOf(lexus, genericCar)
// console.log('lexus', lexus.tyres,' tyres');
// console.log('lexus', Object.getPrototypeOf(lexus));
console.log(lexus, lexus.hasOwnProperty('engine')); //true
console.log(lexus, lexus.hasOwnProperty('tyres')); //false




