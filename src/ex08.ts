// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.

interface Address {

}

interface House {

}

const myHouse = {
  address: {
    city: "New York"
  }
};

console.log( myHouse?.address?.city);
// Expected Output: "New York"

const noCityHouse = {
  address: {
    city: "City not available"
  }
};
console.log( noCityHouse?.address?.city);
// Expected Output: "City not available"