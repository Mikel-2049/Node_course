const name = 'Max';
let age = 29;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + userName +
     ' age is ' + userAge + 
     ' and the user has hobbies: ' + userHasHobby
     );
}


const add = (a,b) => a + b;

const addOne = a => a + 1;

const addRandom = () => 1 + 2;


console.log(summarizeUser(name, age, hasHobbies));