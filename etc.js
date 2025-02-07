// this keyword and prototypal inheritance

// let animal = {
//     animal :  'animal',
//     eats: true,
//     walk() {
//       console.log(`${this.animal} walk`);
//     }
//   };

//   let rabbit = {
//     animal:'rabbit',
//     jumps: true,
//     __proto__: animal
//   };

// walk is taken from the prototype
// rabbit.walk(); // Animal walk
// animal.walk();


let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// modifies rabbit.isSleeping
// rabbit.sleep();
// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping);
// animal.sleep();
// console.log(animal.isSleeping); // undefined (no such property in the protot


// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// Date.prototype
// Object { }
// null
