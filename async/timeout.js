function hello() {
    console.log("Hello user");
}

time = 2000

setTimeout(() => {
    hello()
}, time);

console.log("In the middle of the code");


for (let index = 0; index < 10; index++) {
    console.log(index);
}