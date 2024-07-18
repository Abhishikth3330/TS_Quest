// you can also let typescript configure about the datatype of the array that is created

// here we have a number type data in our list
// so it's okay to not metilon ther datatype 'number[]'

// let ages = [11, 12, 13]

let ages: number[] = [11, 12, 13]
ages.push(14)

// you can not perform this.
// 'true' is a boolean value and we are trying to push a boolean value
// which is not allowed
// ages.push(true)

