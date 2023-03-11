import { it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";
it("should generate a toke value", (done) => {
  const testUserEmail = "test@test.com";
  //use done to tell vitest to wait until a call is done/finished
  //so it will finish the test after awaiting for the expectations
  generateToken(testUserEmail, (err, token) => {
    //test runner awaits and takes our expectatiuon into account
    // expect(token).toBeDefined();
    // done();
    // it may fail with wrong assertions so we have to use try catch block
    try {
      expext(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

//Promises
it("should generate a toke value in a promise", () => {
  const testUserEmail = "test@test.com";
  //expect supports promises out of the box!
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

//Promises alternative apporach with asyn await
it("should generate a toke value in a promise", async () => {
  const testUserEmail = "test@test.com";
  const token = await generateTokenPromise(testUserEmail);
  //expect supports promises out of the box!
  expect(token).toBeDefined();
});
