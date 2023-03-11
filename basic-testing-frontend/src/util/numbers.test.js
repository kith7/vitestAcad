import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNums } from "./numbers";
describe("transformToNumber function", () => {
  it("should output a number with onyl one arg", () => {
    const num = "33";
    const result = transformToNumber(num);
    expect(result).toBeTypeOf("number");
  });

  it("should throw an error if a string is passed", () => {
    const str = "one";
    const result = transformToNumber(str);
    expect(result).toBeNaN;
  });

  it("should accept only one argument", () => {
    const num1 = "22";
    const num2 = "22";
    const result = transformToNumber(num1, num2);
    expect(result).toBeNaN;
  });
  //some tests may have multiple expectations
});

describe("cleanNums()", () => {
  it("shoudl return an array of nums if an arr of str num values is provided");
  () => {
    const numValues = ["1", "2"];
    const result = cleanNums(numValues);
    expect(result[0]).toBeTypeOf("number");
    
  };
  it("should throw error if arr with at least one emtpy str is provided");
  () => {
    const numValues = ["", 1];
    // rememmber that if testing for errors to be thrown wrap the result into a function

    const result = () => cleanNums(numValues);
    expect(result).toThrow();
  };
});
