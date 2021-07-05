const valuesArray = [5, 1, 2, 3, 0, 4, -2, 10, 255, -50, 2, 48, -52, 452]

const checkSort = function () {
    if (valuesArray.length != 0) {
        for (let i = 0; i < valuesArray.length - 1; i++) {
            if (valuesArray[i] > valuesArray[i + 1]) {
                console.log('Array is not sorted')
                return false
            }
        }
    }
    console.log('Array is  sorted')
    return true
}
console.log(checkSort())