import { validateStringNotEmpty, validateNumber } from "./validation";

export function transformToNumber(value) {
  return +value;
}
//this function calls other functions
//the resutls of other functions matter for this one too
//so integration tests combine multiple units/functions
// you can call the functino as it is

export function cleanNums(numberValues) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
