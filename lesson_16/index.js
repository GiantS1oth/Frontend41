
const numbers = [1,2,3,4,5,6,7,8]
function removeElement(numbers, elementRemover) {

    const index = numbers.findIndex(el => el === elementRemover);
    if (index !== -1){
        return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
    }
    return [...numbers];
}

const elementRemover = 4;

const newNumbersArray = removeElement(numbers, elementRemover);
console.log(newNumbersArray)

const nonExistEl = 10;

const newNumbersArrayNon = removeElement(numbers, nonExistEl);

console.log(newNumbersArrayNon)


