function callData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if (success) {
                resolve("Data found successfully")
            } else {
                reject("Error loading data")
            }
        }, 3000)
    })
}

callData()
.then((value)=>{
    console.log(value);
    return value.toLocaleUpperCase()
})
.then((value)=>{console.log(value)
})
