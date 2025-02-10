"use strict";
const describeCar = (car) => {
    console.log(`Model: ${car.model}`);
    if (car.color) {
        console.log(`Color: ${car.color}`);
    }
};
describeCar({ model: "Tesla" });
// Expected Output:
// Model: Tesla
describeCar({ model: "Ford", color: "Red" });
// Expected Output:
// Model: Ford
// Color: Red
