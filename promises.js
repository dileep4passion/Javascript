const one = () => {
  return "one";
};

const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("two")
    }, 3000);
  })
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

func();
