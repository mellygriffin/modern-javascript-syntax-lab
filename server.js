//array.prototype.map()

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
    return currentElement + ' ice cream';
});
//adds 'ice cream' to the end of each array1 element
// console.log(array2);

//Exercise 1: applying array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentNumber) => {
    return currentNumber * 2;
});

// console.log(nums2);

//array destructuring
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

// console.log(firstPet, secondPet);

//Exercise 2: array destructuring

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// const [firstTopping, secondTopping] = pizzaToppings;

// console.log(firstTopping, secondTopping);

//object destructuring
const person = {
    name: 'Alex',
    role: 'Software Engineer',
};

const { name, role } = person;

// console.log(person.name);
// console.log(person.role);

//Exercise 3: destructuring objects
// const car = {
//     make: 'Audi',
//     model: 'q5',
// };

// const { make, model } = car;

// console.log(make);
// console.log(model);

//applying spread operator on arrays
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

// console.log(duplicateArray);

const referenceArray = originalArray;
referenceArray.push(4);
// console.log(originalArray);

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables);

//Exercise 4: applying the spread operator on arrays

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [pizzaToppings];

// console.log(controversialPizzaToppings);

const originalObject = {
    foo: 'Hello',
    bar: 100,
};

// const clonedObject = {...originalObject};
// console.log('Clone: ', clonedObject);

// const clonedObject = originalObject;
// clonedObject.foo = 'Goodbye';

// console.log(originalObject);

const clonedObject = {...originalObject};

clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;

// console.log('Original: ', originalObject);
// console.log('Clone: ', clonedObject);
 
//Exercise 5: applying the spread operator on objects
const car = {
    make: 'Audi',
    model: 'q5',
};

const myCar = {...car};
myCar.model = 'q7';

// console.log(myCar);

//Exercise 6: dynamic keys in objects ??? confused on this one...
const userProfile = {
    username: 'bilbo_baggins',
};

const propertyName = 'username';
const findUser = userProfile[propertyName];


// console.log(findUser);

//Exercise 7: Import and Export - Done.

//Exercise 8: default parameters
function description(noun = 'cat', adj = 'white') {
    return `The ${description(noun)} is ${description(adj)}.`
};

description();

