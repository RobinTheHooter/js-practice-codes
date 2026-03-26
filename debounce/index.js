// Implement a debounce function that limits the rate at which a function can fire.
// The debounce function should take two arguments: the function to be debounced and the delay time in milliseconds.

function debounce(func, delay) {
  let debounceTimer;
  return function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// // document.querySelector("#debounce").onclick = debounce(() => {
// //   alert(
// //     "Hello\nNo matter how many times you" +
// //       "click the debounce button, I get " +
// //       "executed once every 3 seconds!!"
// //   );
// // }, 3000);

function handleSomething(query) {
  console.log(query);
}

let debounced = debounce(handleSomething, 5000);

debounced("j");
debounced("ja");
debounced("jav");
debounced("javs");
debounced("javsc");
debounced("jjavsc");

// console.log(varVar);

// var varVar;

// console.log(letVar);

// let letVar;
