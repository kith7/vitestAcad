// for mocks create __mocks__ folder which is a special folder for mocks in jest and vitest
// we can add there names of modules we want ot mock away

// now the mock will look for our own implementationsprovided

import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
