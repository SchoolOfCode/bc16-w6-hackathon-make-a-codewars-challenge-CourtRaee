// import the vitest configuration
import { test, expect } from "vitest";
import { legoBuild } from "./main.js";

// Test to check whether the return is a boolean
test("should return a boolean", () => {
  const actual = legoBuild("piecesTime", "totalTime");
  expect(typeof actual).toBe("boolean");
});

// Test to check whether the value is correct - if it's within 180 mins it should return false
// Example input 2, 100 - expected output false
test("should check is the value is correct - return false", () => {
  const expected = false;
  const actual = legoBuild(2, 100);
  expect(actual).toBe(expected);
});

// Test to check whether the value is correct - if it's outside 180 mins it should return false
// Example input 1, 100 - expected output true
test("should check is the value is correct - return true", () => {
  const expected = true;
  const actual = legoBuild(1, 100);
  expect(actual).toBe(expected);
});

// Test to check whether the value is correct - if it's within 180 mins it should return true
// Example input 2, 50 - expected output true
test("should check is the value is correct - return true", () => {
  const expected = true;
  const actual = legoBuild(2, 50);
  expect(actual).toBe(expected);
});

// Test to check whether the value is correct - if it's outside 180 mins it should return false
// Example input 7, 50 - expected output false

// Test to check whether the value is correct - if it's within 180 mins it should return true
// Example input 0.5, 100 - expected output true

// Test to check whether the value is correct - if it's outside 180 mins it should return false
// Example input 5, 200 - expected output true

// Test if unwanted characters are being called

// Test if nothing is called - if empty then it's failed

// Test if integers are positive
