//behind the scenes
//callback function in js
//asynchronous callback usage

setTimeout(function () {
    console.log("timer")
},5000)

function a(b) {
    console.log('a')
    b()
}

a(function b() {
    console.log('b');
})

//closure, lexical scope, event listeners, callback function
function c() {
    let count = 0
    let d = 1
    document.getElementById('click').addEventListener('click',function() {
        console.log("clicked button 123",count++)
        console.log(d++)
    }) 
} 

c()


//Garbage Collections
//removing event listeners
//heavy -> more memory usage 
