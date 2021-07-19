const makeConcat = function () {
    let word = '';
    return function (newStr) {
        if (!newStr) return word
        return word = word + newStr;
    }
}
const concat = makeConcat()
console.log(concat('test string 1'))
console.log(concat('test2'))
concat('finish');
console.log(concat())