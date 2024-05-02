function oddOrEven(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            reject("Error, function works only with numbers.");
        } else {
            if (number % 2 === 0) {
                setTimeout(() => {
                    resolve(`${number} - is even number.`);
                }, 3000);
            } else {
                setTimeout(() => {
                    reject(new Error(`${number} - is odd number.`));
                }, 5000);
            }
        }
    });
}


getOddEven(5)
        .then(result => console.log(result))
        .catch(error => console.log(error));
getOddEven(10)
            .then(result => console.log(result))
            .catch(error => console.log(error));

getOddEven(abc)
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log(oddOrEven())