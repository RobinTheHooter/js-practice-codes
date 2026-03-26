function repeating(arr) {
    // Bruteforce
    // let result = []
    // let sortedArr = arr.sort((a,b)=> a-b)
    
    // for (let i = 0; i<arr.length; i++) {
    //     if (arr[i] === arr[i+1]) {
    //         result.push(arr[i])
    //     }
    // }
    
    // return result
    
    // using map
    // let result = []
    // let map = {new Map()}
    
    // arr.forEach((num) => {
    //     const currentCount = map.get(num) || 0
    //     map.set(num, currentCount + 1)
    // })
    
    // for (let [num, count] of map) {
    //     if (count > 1) {
    //         result.push(num)
    //     }
    // }
    
    // return result
    
    // using plain object
    let result = []
    let counts = {}
    
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1
    }
    
    for (const key in counts) {
        if (counts[key] > 1) {
            result.push(Number(key))
        }
    }
    
    return result;
}

let nums = [1,1,2,3,4,4,5,2,2]

console.log(repeating(nums))