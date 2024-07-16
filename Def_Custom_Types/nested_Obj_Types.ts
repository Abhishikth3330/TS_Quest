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


type Address = {
    street: string
    city: string
    country: string
}

// you can clearly see that the address Type is nested inside the Person Type

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

// you can ease your code by adding a '?' so that the property gets optional
// other it gets strict that it need the value for the variable


// now i don't have address for the person1
let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}


function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person2)