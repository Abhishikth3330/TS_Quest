// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
//     address: {
//         street: string
//         city: string
//         country: string
//     }
// }
// you can ease your code by adding a '?' so that the property gets optional
// other it gets strict that it need the value for the variable
// now i don't have address for the person1
var person1 = {
    name: "Joe",
    age: 42,
    isStudent: true,
};
var person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
};
function displayInfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.street));
}
displayInfo(person2);
