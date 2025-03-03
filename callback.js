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

function c () {
    console.log("clicked button 123")
} 

document.getElementById('click').addEventListener('click',c) 


