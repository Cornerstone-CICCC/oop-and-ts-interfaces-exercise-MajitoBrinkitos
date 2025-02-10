"use strict";
// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.
const myHouse = {
    address: {
        city: "New York"
    }
};
console.log();
// Expected Output: "New York"
const noCityHouse = {};
console.log();
// Expected Output: "City not available"
