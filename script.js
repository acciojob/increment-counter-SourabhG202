//your JS code here. If required.
const counterPara = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
  // Get current counter value
  const currentValue = parseInt(counterPara.innerText);

  // Show alert with un-incremented value
  alert(currentValue);

  // Increment and update the counter value
  counterPara.innerText = currentValue + 1;
});
