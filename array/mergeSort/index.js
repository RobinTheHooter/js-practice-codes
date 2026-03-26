function merge(left, right) {
    let result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = arr.length / 2
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const nums = [1,2,4,5,1,3,8,222,-1,0,0,-5]

console.log(mergeSort(nums))