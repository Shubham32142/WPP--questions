// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details.
//  Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors.
// Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  displayDetails() {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Year: ${this.year} Doors: ${this.doors}`
    );
  }
}
const myVehicle = new Car("Suzuki", "Yamaha", 2019, 4);
myVehicle.displayDetails();
