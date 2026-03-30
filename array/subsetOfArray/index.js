/*
    arr1: main array
    arr2: subset array
*/

function subset(arr1, arr2) {
    if (arr2.length > arr1.length) return false

    for (let i = 0; i < arr1.length; i++) {
        let present = false
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                present = true
                break
            }
        }
        if (!present) return false
    }
    return true
}

let arr1 = [1,2,3,4]
let arr2 = [1,3,2,4,2,5,6]

console.log(subset(arr1,arr2))