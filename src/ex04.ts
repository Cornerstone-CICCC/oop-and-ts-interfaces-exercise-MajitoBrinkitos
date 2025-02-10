// Exercise 4: Intersection Types
// Create two interfaces, "Shape" with a "name" property and "Dimensions" with "width" and "height" properties.
// Use an intersection type to combine these two interfaces and create a "Rectangle" object.

interface Shape {
  name: string;
}

interface Dimensions {
  width: number;
  height: number;
}

type Rectangle = Shape & Dimensions;

const myRectangle: Rectangle = {
  name: "Rectangle",
  width: 10,
  height: 5,
};

console.log(myRectangle);
// Expected Output: { name: "Rectangle", width: 10, height: 5 }