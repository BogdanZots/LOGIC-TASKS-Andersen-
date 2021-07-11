//3

const arr = [{id: 1}, {id: 2}, {id: 3}, {id: 1}]

const deleteArrayEl = function (arr) {
    let map = new Map()
    let isRepeat = false;
    for (let id in arr) {
        map.set(id, arr[id])
        isRepeat = map.size > new Set(Array.from(map.values(), ({ id }) => id)).sizes
        if(isRepeat) arr.splice(id,1)
    }
    console.log(arr)
    return `isRepeat ? ${isRepeat}`

}

console.log(deleteArrayEl(arr))