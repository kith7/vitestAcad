export function generateResultText(calcResults) {
  let resultText = "";
  if (calcResults === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (calcResults !== "no-calc") {
    resultText = "Result: " + calcResults;
  }
  return resultText;
}

export function outpuResult(resultText) {
  const output = document.getElementById("result");
  output.textContent = resultText;
}
