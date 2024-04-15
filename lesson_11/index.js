// создайте массив строк из пяти элементов - марок автомобилей
// выведите значение в консоль при помощи цикла for
// поменяйте первый и последний элементы местами
// и вновь распечатайте массив в консоли



let autos = ['Mazda', 'Audi', 'Ford', 'Bentley'];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i])
}

let temp = autos[0];
autos[0] = autos[autos.length - 1];
autos[autos.length - 1] = temp;

console.log(autos);

const names = ['Семен',"Иван"," Петр","Татьяна"];
const ages = [18,27,74,34];
const people = []
for (let i = 0; i < names.length; i++){
    people.push (names[i] + ' ' +  ages[i] + ' лет' )
}
console.log(people);

const reversePeople = [];
for (let i = people.length-1; i>=0; i--){
    reversePeople.push(people[i]);
}
console.log(reversePeople);

const fruits = [];
fruits.push('яблоко', "банан", "апельсин");
const last = fruits.pop();
fruits.unshift(last)
console.log(fruits)

const veggies = [];
veggies.push('лук', "картофель", "баклажан", "огурец");
const fruitsAndVeggies = [...fruits, ...veggies];
const [apple, banana, orange, onion, potato, aubagine, cucumber] = fruitsAndVeggies;


console.log(fruitsAndVeggies[3], aubagine)
