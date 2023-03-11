import { it, describe, expect, vi } from "vitest";

describe("generateReportData", () => {
  it("should execute logfn if provided", () => {
    //vi.fn() provides a special function that tracks the execution of our func
    // you can also pass a function into fn again with no
    const logger = vi.fn(() => {});
    //now we can pass our spy

    //we can also use mockImplemantations too once is available too
    logger.mockImplementation(() => {});

    generateReportData(logger);
    expect(logger).toHaveBeenCalled();
  });
});
