class Animal {
    constructor(species) {
        this._species = species;
    }
 
    // Getter for species
    get species() {
        return this._species;
    }
 
    // Method to make a generic sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}
 
// Define the Cat class that extends Animal
class Cat extends Animal {
    constructor(species) {
        super(species);
    }
 
    // Method specific to Cat class
    purr() {
        console.log("purr");
    }
}
 
// Define the Dog class that extends Animal
class Dog extends Animal {
    constructor(species) {
        super(species);
    }
 
    // Method specific to Dog class
    bark() {
        console.log("woof");
    }
}
 
// Example usage
 
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: "The Siamese makes a sound"
myCat.purr();      // Output: "purr"
 
const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: "The Golden Retriever makes a sound"
myDog.bark();      // Output: "woof"