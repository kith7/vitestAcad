import { it, expect, describe } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain hte status, message, and data", () => {
    const testStatus = 1;
    const testMessage = "test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testMessage);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });
  it("should contain undefined as data i no data is provided", () => {
    const testStatus = 1;
    const testMessage = "test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testMessage);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).not.toBeDefined();
  });
});

describe("class validationError", () => {
  it("should contain the provided err mess", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);
    expect(testError.message).toBe(testMessage);
  });
});
