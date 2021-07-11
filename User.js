//1

function User(name, surname, age) {
    if (!new.target) return new User(name, surname, age)
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.print = function () {
        if (!typeof name === 'string' && typeof surname === 'string' && typeof age === 'number') return
        console.log(`Name:${name},last name:${surname},age:${age}`)
    }

}
const user = new User('John', 'Smith', 30)
user.print()