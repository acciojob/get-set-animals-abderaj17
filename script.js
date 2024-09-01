class Animal{
    constructor(species){
     this._species=species;
    }
    get species(){
        return this._species;
    }
	set species(value) {
        this._species = value;
    }
    makeSound(){
        console.log(`${this.species} makes a sound.`);
    }
}
class Cat extends Animal{
    constructor(species){
        super(species);
    }
    purr(){
        console.log("purr");
    }
}
class Dog extends Animal{
    constructor(species){
        super(species);
    }
    bark(){
        console.log("woof");
    }
}
const final = new Animal("Lion");
console.log(final.species); // Lion
final.makeSound(); // Lion makes a sound.

const cat = new Cat("Cat");
cat.purr(); // purr

const dog = new Dog("Dog");
dog.bark(); // woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;