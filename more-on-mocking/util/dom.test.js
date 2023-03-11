import { it, expect, describe, vi, beforeEach } from "vitest";

//import the fs and path from node to get access to the html file
import fs from "fs";
import path from "path";
// to get the loading import Window from happy dom
import { Window } from "happy-dom";
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = Window();
const document = window.document;
//now this renders the page virtually

vi.stubGlobal("document", document);
beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});
it("should arr error paragraph do the id  = erros", () => {
  showError("test");
  const errorEl = document.getElementById("errors");
  const errParagrpah = errorEl.firstElementChild;
  expect(errParagrpah).not.toBeNull();
});

it("should not containt an error parahraph initially", () => {
  const errorEl = document.getElementById("errors");
  const errParagrpah = errorEl.firstElementChild;
  expect(errParagrpah).toBeNull();
});

it("should output the provided message in the err para", () => {
  const testErrorMsg = "test";
  const errorEl = document.getElementById("errors");
  const errParagrpah = errorEl.firstElementChild;
  expect(errParagrpah).textContent.toBe(testErrorMsg);
});

// WE can also use the TESTING LIBRARY in conjunction with Vitest, it makes testing dom much easier
//
