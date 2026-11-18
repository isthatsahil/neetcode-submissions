class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = new Map();
        for(let i=0; i<nums.length; i++)
            indexMap.set(nums[i], i);

        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i];
            if(indexMap.get(diff) != undefined && indexMap.get(diff) != i)
                return [i, indexMap.get(diff)];
        }
        return [];
    }
}
