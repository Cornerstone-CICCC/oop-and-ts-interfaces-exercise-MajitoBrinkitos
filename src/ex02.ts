// Exercise 2: Interfaces as Function Types
// Create an interface for a function type that takes two numbers as arguments and returns their sum.
// Implement the function using the interface and test it.

interface SumFunction {
  (a: number, b: number): number
}

const sum: SumFunction = (a, b) => {
    return a + b
}

console.log(sum(10, 20)); 
// Expected Output: 30