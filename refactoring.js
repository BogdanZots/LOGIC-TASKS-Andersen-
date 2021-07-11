//2

const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

function printJobName(user) {
    let {name,job} = user
    console.log(name);
}

printJobName(sarah);