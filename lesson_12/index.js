// создайте функцию helloEng (используйте function expression)
// в ней два параметра - firstName, lastName
// пусть она выведет в консоль фразу "Good day, <firstName> <lastName>"
// например HelloEng('Bilbo', 'Baggins) // 'Good day, Bilbo Baggins'

// создайте функцию helloTurkish (используйте function expression)
// в ней два параметра - firstName, lastName
// пусть она выведет в консоль фразу "Merhaba, <firstName> <lastName>"
// например HelloTurkish('Bilbo', 'Baggins) // 'Merhaba, Bilbo Baggins'

//создайте универсальную функцию universalHello(firstName, lastName, greetingFunction);
// universalHello('Jack', 'Shepard', HelloEng) // 'Good day, Jack Shepard'


const helloEng = function (firstName, lastName) {
    console.log("Good day, " + firstName + " " + lastName);
};
helloEng("Bilbo", "Baggins");

const helloTurkish = function (firstName, lastName) {
    console.log("Merhaba, " + firstName + " " +lastName);
};
helloTurkish("Bilbo", "Baggins");

function universalHello(firstName, lastName, greetingFunction){
    greetingFunction(firstName, lastName);
}
universalHello('Jack', 'Shepard', helloEng);
universalHello('Jack', 'Shepard', helloTurkish);


// console.log(`valuse is ${}`) - способ напрямую вписывать внутри строки значения переменных или целые выражения
//нужно поставить косые кавычки они же backticks - ' ` ' знак ${}


const arrayCrew = ["one", "two", "three"];
const arrFunc = (array, number) =>
{return  array[number]}

console.log(arrFunc(arrayCrew, 1))


