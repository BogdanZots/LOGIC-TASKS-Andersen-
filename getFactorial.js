const getFactorial = function (val) {
    if (!typeof val === 'number') return
    return val == 0 || val == 1 ? 1 : val * getFactorial(val - 1)
}

console.log(getFactorial(4))