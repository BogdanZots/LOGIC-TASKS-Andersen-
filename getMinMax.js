const valuesArray = [0, 4, -2, 10, 255, -50, 2, 48, -52, 452]

const getMinMax = function () {
    let min = 0;
    let max = 0;
    if (!valuesArray instanceof Array) return null
    for (let i = 0; i < valuesArray.length; i++) {
        if (!typeof valuesArray[i] === 'number') return null
            min > valuesArray[i] ? min = valuesArray[i] : null
            max < valuesArray[i] ? max = valuesArray[i] : null
    }
    return {min,max}
}
console.log(getMinMax())