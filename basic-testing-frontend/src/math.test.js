import { test, expect, describe } from "vitest";
import { add } from "./math";

describe("test add func", () => {
  test("should summerise all num values in an array", () => {
    // keep your tests simple
    //arrange
    const numbers = [1, 2, 3];
    const result = add(numbers);
    //call the func; act
    const expectedRest = numbers.reduce((prev, cur) => prev + cur, 0);
    //write what you expect a success to be like for that import expect
    //assert

    expect(result).toBe(expectedRest);
  });

  test("should yield NaN if at least one invalid value is provided", () => {
    const inpus = [1, "asdd", 3];
    const result = add(inpus);
    expect(result).toBeNaN;
  });

  test("should yield a sum if arr inputs are of numeric string values", () => {
    const input = ["1", "2"];
    const result = add(input);
    const expectedRest = numbers.reduce((prev, cur) => prev + +cur, 0);
    expect(result).toBe(expectedRest);
  });

  test("yield 0 as a sum if no values are provided", () => {
    const input = [];
    const result = add(input);
    expect(result).toBe(0);
  });

  test("throws an error when no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };
    const result = add();
    expect(resultFn).toThrow();
    //   expect(resultFn).not.toThrow();
  });

  test("should throw error if mutliple arguments were provided not an array", () => {
    const input1 = 1;
    const input2 = 2;
    const input3 = 3;

    const resultFn = () => {
      add(input1, input2, input3);
    };
    //Testing for thrown errors and error messages:
    expect(resultFn).toThrow(/is not iterable/);
  });
});
