const myObj = {
    a:6,
    b:9
}
function calc() {
    return this.a + this.b;
}
console.log(calc.call(myObj))