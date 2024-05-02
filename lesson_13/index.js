// const cars = [
//     { brand: "BMW", price: 20000, isDiesel: true },
//     { brand: "Mercedes", price: 22000, isDiesel: false },
//     { brand: "Porshe", price: 50000, isDiesel: true },
//     { brand: "Nissan", price: 25000, isDiesel: false },
// ];
//
//
//
//
// const brandName = {brand,isDiesel};
//
// console.log(brandName)


const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

function calculateTotalAge(people) {
    let totalAge = 0;
    for (const { name, age } of people) {
        totalAge += age;
    }
    return totalAge;
}
console.log(calculateTotalAge(people))

