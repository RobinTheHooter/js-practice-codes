const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
  };
};

document.querySelector("#debounce").onclick = debounce(() => {
  alert(
    "Hello\nNo matter how many times you" +
      "click the debounce button, I get " +
      "executed once every 3 seconds!!"
  );
}, 3000);
