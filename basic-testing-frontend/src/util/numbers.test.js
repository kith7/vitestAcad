import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";
describe("transform to num", () => {
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
