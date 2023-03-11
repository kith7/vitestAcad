import { it, expect, describe } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided as a value", () => {
  const testInput = "";
  const validationFn = () => validateNotEmpty(testInput);
  expect(validationFn).toThrow();
});

it("should throw an error if an empty string with blanks is provided as a value", () => {
  const testInput = "   ";
  const validationFn = () => validateNotEmpty(testInput);
  expect(validationFn).toThrow();
});

it("should throw an error with the provided error message", () => {
  const testInput = "   ";
  const testErrorMsg = "tested";
  const validationFn = () => validateNotEmpty(testInput, testErrorMsg);
  expect(validationFn).toThrow(testErrorMsg);
});
