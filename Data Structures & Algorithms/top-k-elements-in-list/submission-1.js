class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = [];
        const resObj = new Map();

        for(let i=0; i<nums.length; i++){
            if(resObj.get(nums[i])) {
                resObj.set(nums[i], resObj.get(nums[i])+1);
            } else {
                resObj.set(nums[i], 1);
            }
        }

        const sorted = [...resObj.entries()].sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map(entry => entry[0]);
    }
}
