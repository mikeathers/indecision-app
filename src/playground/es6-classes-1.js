class Person {
  constructor(name = "Anonymous", age = 0) { // Default name.
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Calls the parent constructor
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription(); // parent function

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }


  getDescription() {
    let description = super.getDescription();

    if (this.homeLocation) {
      description += ` Their home location is ${this.homeLocation}.`;
    }
    return description;
  }

}

const me = new Traveler("Mike Atherton", 24, "Leyland, Lancashire");
console.log(me.getDescription());
