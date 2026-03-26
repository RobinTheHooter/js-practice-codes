function occurances(arr) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }

    return map
}

const nums = [1,11,1,333,4,2,1,5]

console.log(occurances(nums))