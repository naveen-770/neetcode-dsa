class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const targetMap = new Map();
    let complement;

    for (let i = 0; i < nums.length; i++) {
      complement = target - nums[i];
      if (targetMap.has(complement)) {
        return [targetMap.get(complement), i];
      }
      targetMap.set(nums[i], i);
    }
  }
}
