import {
  it,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  concurrent,
} from "vitest";

import { User } from "./hooks";
let testEmail = "test@test.com";
let user;
//function executed before all tests are executed
beforeAll(() => {
  user = new User(testEmail);
  testEmail = "test@test.com";
});
//function executed before/after each single test
//useful for cleanup:
beforeEach(() => {});
afterEach(() => {
  testEmail = "test@test.com";
  user = new User(testEmail);
});
//after all tests have been executed
afterAll(() => {
  //clean up after every test
});
//in this case all tests are run one after another
//but you can use concurrent method; if you add this method tto a test, then
// the test will be run concurrently with all other tests that have this annotation

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();
  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();
  expect(user).toHaveProperty("email");
});
// you can add concurrent to describe too, then all the tests in that suit will be
// considered parallel
describe.concurrent(() => {
  it("should clear the email", () => {
    user.clearEmail();
    expect(user.email).toBe("");
  });

  it("should still have an email property after clearing the email", () => {
    user.clearEmail();
    expect(user).toHaveProperty("email");
  });
});
