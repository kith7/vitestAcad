import { cleanNums } from "./util/numbers";
export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calcResults(numberValues) {
  let result = "";
  try {
    const numbers = cleanNums(numberValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
