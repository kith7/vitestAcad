import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";
//notes on mocking
// you only mock the modules, mocks are hoisted in vitest
//
vi.mock("fs");
// we can pass asecond function into the mock method
//this allows you to set your own replacements

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        // return the last element
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const data = "test me";
  const testFileName = "testme.txt";

  // I want to see if the fs func was executed, not actually execute it:
  //in this case we call a module that we dont know so we have to use mocks import
  // vi.mock("fs")
  //   return expect(writeData(data, testFileName)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalledWith(testFileName, data);
});

// for mocks create __mocks__ folder which is a special folder for mocks in jest and vitest
// we can add there names of modules we want ot mock away
