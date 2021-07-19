const sumFunction = function (n) {
    if (!typeof val === 'number') return
    if (n == 1) return 1
    return n + sumFunction(n - 1)
}

console.log(sumFunction(2))