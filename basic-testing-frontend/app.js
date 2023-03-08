import { extractNumbers, extractEnteredNumValues } from "./src/parser.js";
import {
  validateStringNotEmpty,
  validateNumber,
} from "./src/util/validation.js";
import { calcResults } from "./src/math.js";
import {} from "./src/util/numbers.js";
import { generateResultText, outpuResult } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumValues(form);
  let result = calcResults(numberValues);
  const resultText = generateResultText(result);
  outpuResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
