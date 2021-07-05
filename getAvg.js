const getAvg = function () {
    if (valuesArray.length != 0) {
        let avg = valuesArray.reduce(function (a, b) {
            if (typeof a == 'number' && typeof b == 'number')
                return (a + b) / valuesArray.length
        })
        console.log(`avg is ${avg.toFixed(3)}`)
        return avg.toFixed(3)
    } else {
        console.log('Array is not array')
        return
    }
}
console.log(getAvg())