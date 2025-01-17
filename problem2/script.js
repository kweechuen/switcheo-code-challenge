document.getElementById("swap-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const inputAmount = document.getElementById("input-amount").value;
  const outputAmount = document.getElementById("output-amount");  

  const exchangeRate = 1.5; // Example exchange rate
  if (inputAmount && inputAmount > 0) {
    outputAmount.value = (inputAmount * exchangeRate).toFixed(2); // Calculate and display the swapped amount
  } else {
    outputAmount.value = "Invalid input"; // Show error if the input is invalid
  }
});

