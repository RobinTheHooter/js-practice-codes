function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval;
}

function compute() {
  const principal = parseInt(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);

  const interest = (principal * years * rate) / 100;

  const amount = principal + interest;

  const year = new Date().getFullYear() + years;

  if (principal <= 0) {
    alert("Please enter a positive number!");
    document.getElementById("principal").focus();
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `If you deposit ${principal},<br> at an interest rate of ${rate}%.<br> You will receive an amount of ${interest}<br>, in the year ${year}.`;
  }
}
