//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
//Include two methods to calculate rectangle area and perimeter.
//Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  Area() {
    const calculatedArea = this.width * this.height;
    console.log(calculatedArea);
  }
  Perimeter() {
    const calculatedPeri = 2 * (this.height + this.width);
    console.log(calculatedPeri);
  }
}

const rectangle = new Rectangle(3, 3);
rectangle.Area();
rectangle.Perimeter();
