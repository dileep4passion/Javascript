//OOPS
//Encapsulation, Inheritance, Polymorphism, Abstraction

//object 
let car = {
    make:'lexus',
    model:'nx',
    year:2024,
    start: function () {
        return `${this.make} got started manufacturing ${this.model} car in year ${this.year}`
    }
};
// console.log(car.start());

function Person(name,age) {
    this.name=name,
    this.age=age
}

let john = new Person("john",24)
// console.log(john.name);


function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`
}
Array.prototype.hitesh = function () {
    return `${this} Custom method`
}

let myArray = [1,3,2]
// console.log(myArray.hitesh());

let myArray1 = [1,3,2]
// console.log(myArray1.hitesh());


//Inheritance (prototype) and class sugar coating
class Vehicle {
    constructor(make,model) {
        this.make = make,
        this.model = model
    }

    start(){
        return `${this.make}, ${this.model}`
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: Simple example for inheritance`
    }   
}

let myCar = new Car("Toyota","corolla");
// console.log(myCar.start());
// console.log(myCar.drive());
let vehicle = new Vehicle("Toyota","corolla")
// console.log(vehicle.make, vehicle.model);



//Encapsulation

class BankAccount {
    //# for encapsulation
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
        return this.#balance
    }

    getBalance(){
        return `$${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.#balance);
account.deposit(69)
// console.log(account.getBalance())


//Abstraction
class CoffeeMachine {
    start() {
        return `starting the coffee machine`
    }

    brewCoffee() {
        return `brewing coffee`
    }

    pressStart(){
        console.log(this.start());
        console.log(this.brewCoffee());
        return 'done'
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.pressStart())


//Polymorphism

class Bird {
    fly() {
        return 'flying'
    }
}

class Penguin extends Bird{
    fly(){
        return `penguin can't fly`
    }
}

class Sparrow extends Bird{}

let penguin = new Penguin();
// console.log(penguin.fly())

let sparrow = new Sparrow();
// console.log(sparrow.fly())


//Static method

class Calculator {
    static add(a,b) {
        return a+b;
    }

    add1(a,b){
        return a+b;
    }
}

let calc = new Calculator();
// console.log(calc.add1(1,2));
//static
// console.log(Calculator.add(1,2))


//Getters and Setters
//Encapsulation

class Employee {
    
    constructor(name, salary) {
        this.name = name
        this._salary = salary
    }

    get salary(){
        return this._salary
    }
    set salary(value){
        if (value<0) {
            console.log("Invalid salary amount")
        }
        else{
            this._salary = value;
        }
    }
}

let newEmp = new Employee('john',25000)

console.log(newEmp.salary)

