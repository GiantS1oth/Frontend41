



function getStudent (student) {
    return new Promise((resolve) => {
        setTimeout(() =>  {
            const student = {name:"Anri", age:32};
            resolve(student);
        }, 4000);
    });
}

const studentPromise = getStudent();

studentPromise.then((student) => {
    console.log("Sudents name: ", student.name)
});

function getDriverLicense(success, failure) {
    const random = Math.random();
    if (random >= 0.1){
        success("success!");
    }else{
        failure("failure :(");
    }
}

function success(result) {
    console.log(`Successfully completed with result ${result}`);
}


function failure(error) {
    console.log(`Completed with error ${error}`);
}

getDriverLicense(success, failure);