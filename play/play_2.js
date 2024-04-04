//Destructuring

const person = {
    name: 'Max',
    age: 26,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);