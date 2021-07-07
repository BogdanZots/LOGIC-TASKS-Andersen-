const reverseString = function (str) {
    if (!typeof str == 'string' && str.length != 0) return
    let reverseWord = ''
    for (let i in str) {
        reverseWord = str[i] + reverseWord;
    }
    return reverseWord
}

console.log(reverseString('test'))