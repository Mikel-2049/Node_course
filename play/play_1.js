const person = {
    name: 'Max',
    age: 26,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//    console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = hobbies.slice();  // A way to copy an array

const copiedArray = [...hobbies]; //Spread operator to add in front of an array or an object, they take the arr/obj and pull out all the elements or properties and put it around the spread operator
console.log(copiedArray);

const toArray = (...args) => { //takes whatever amount of args and bundles it up in an array
    return args;
};
