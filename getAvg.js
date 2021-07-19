const valuesArray = [5, 1, 2, 3, 0, 4, -2, 10, 255, -50, 2, 48, -52, 452]
const getAvg = function () {
    let val = 0;
    if (!valuesArray instanceof Array) return null
    valuesArray.forEach(number => {
        if (!typeof number === 'number') return 
        val += number;
    })
    return (val / valuesArray.length).toFixed(3)
}
console.log(getAvg())