import { it, expect, describe, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";
//first mock the fetch function away, we can't call vi mock as fetch is a
//globally available functions, thus we should use stubGlobal()
const testResponseData = { testKey: "testData" };
const testFetch = vi.fn((url, options) => {
  if (typeof options.body !== "string") {
    reject("Not a string");
  }
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve: {
            testKey: "testData";
          }
        });
      },
    };
    resolve();
  });
});

vi.stubGlobal("fetch", testFetch);

it("should send a successful request with available reponse data", () => {
  const testData = { key: "testData" };
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert data to json before sending req", async () => {
  const testData = { key: "testData" };
  let errorMessage;
  try {
    const sendDataReq = await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }
  expect(errorMessage).not.toBe("Not a string");
});

it("should throw an http error in case of non ok responses", async () => {
  testFetch.mockImplementationOnce((url, options) => {
    if (typeof options.body !== "string") {
      reject("Not a string");
    }
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve: {
              testKey: "testData";
            }
          });
        },
      };
      resolve();
    });
  });

  const testData = { key: "testData" };

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
