const names = ["Мария","Алексей", "Елена", "Дмитрий"];
const ages = [22,31,45,53];

const people = [];

for (let i = 0; i < names.length; i++) {
    people.push(names[i] + ' ' + ages[i] + " лет")
}

console.log(people)

const peopleReverse = [];
for (let i = people.length-1; i>=0; i--) {
    peopleReverse.push(people[i])
}
console.log(peopleReverse)

const countries = [];
countries.push("Франция", "Германия", "Италия");


const temp = countries.pop();

countries.unshift(temp)
console.log(countries)
console.log(temp)

const colors = ["красный", "зелёный", "синий"];

const animals = ["кошка", "собака", "кролик"];

const colorsAndAnimals = [...colors,...animals];

const [красный, зелёный, синий, кошка, собака, кролик] = colorsAndAnimals;

console.log(colorsAndAnimals[2], кролик)





