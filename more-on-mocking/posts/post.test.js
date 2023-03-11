import { it, expect, describe, beforeEach } from "vitest";
import { extractPostData } from "./posts";
let testFormData;
describe("extractPosdData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it("should extract title and content from the provided form data", () => {
    const testTitle = "test title";
    const testContent = "Test content";

    const data = extractPostData(testFormData);
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
