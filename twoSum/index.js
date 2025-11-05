var twoSum = function(nums, target) {
    let arr = [];
    for (let i=0; i <= nums.length; i++ ) {
        for (let j=i+1; j <=nums.length; j++) {
            if (nums.length === 0) {return 0}

            else if (i === j) {j++}

            else if (nums[i] + nums[j] === target) {
                arr.push(i);
                arr.push(j);
                return arr
            } 
        }
    }
    
};