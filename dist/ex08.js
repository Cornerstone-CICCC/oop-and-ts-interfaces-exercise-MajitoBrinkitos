"use strict";
// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.
var _a, _b;
const myHouse = {
    address: {
        city: "New York"
    }
};
console.log((_a = myHouse === null || myHouse === void 0 ? void 0 : myHouse.address) === null || _a === void 0 ? void 0 : _a.city);
// Expected Output: "New York"
const noCityHouse = {
    address: {
        city: "City not available"
    }
};
console.log((_b = noCityHouse === null || noCityHouse === void 0 ? void 0 : noCityHouse.address) === null || _b === void 0 ? void 0 : _b.city);
// Expected Output: "City not available"
