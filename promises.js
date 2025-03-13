const one = () => {
  return "one";
};

const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("two");
    }, 3000);
  });
};

const three = () => {
  return "three";
};

const func = async () => {
  let valOne = one();
  console.log(valOne);
  let valTwo = await two();
  console.log(valTwo);
  let valThree = three();
  console.log(valThree);
};

// func();

let promise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// promise
// .then((p)=>{console.log(p)})
// .catch((p)=>{console.log(p)})

async function fetchData() {
  let result = await fetch("https://api.github.com/users/dileep4passion");
  let data = await result.json()
  console.log(data.login);
  
}

// fetchData();
// Simulated async functions that return Promises
function fetchDataFromAPI1() {
    return new Promise(resolve => setTimeout(() => resolve("API1 data"), 1000));
  }
  
  function fetchDataFromAPI2(data) {
    return new Promise(resolve => setTimeout(() => resolve(`${data} -> API2 data`), 1000));
  }
  
  function processData(data) {
    return new Promise(resolve => setTimeout(() => resolve(`${data} -> Processed`), 1000));
  }
  
  // Async function to handle the workflow
  async function main() {
    try {
      const api1Data = await fetchDataFromAPI1();  // Fetch from API 1
      const processedData = await processData(api1Data);  // Process data
      const api2Data = await fetchDataFromAPI2(processedData);  // Fetch from API 2
      console.log(api2Data);  // Final output
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  main();
  