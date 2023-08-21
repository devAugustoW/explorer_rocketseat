// for in

let person = {
    name: 'john',
    age: 30,
    weight: 80.5
}
for (let property in person) {
    console.log(property)
    console.log(person[property])
}