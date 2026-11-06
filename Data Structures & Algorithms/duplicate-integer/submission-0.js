class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueSet = new Set();
        for(let i=0; i<nums.length; i++) {
            uniqueSet.add(nums[i]);
        }

        if(uniqueSet.size < nums.length) 
            return true;
        
        return false;
    }
}
