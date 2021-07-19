class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    print() {
        console.log(`Name:${this.firstName},Last name: ${this.lastName}, age: ${this.age}`);
    }
}
class Admin extends User {
    constructor(firstName, lastName, age, role){
        super(firstName, lastName, age);
        this.role  = role
    }
    showRole(){
        console.log(`Role:${this.role}`)
    }
        print(){
        super.print()
        this.showRole()
        }
}
const admin = new Admin('John', 'Connor', '32', "moderator");
admin.print();