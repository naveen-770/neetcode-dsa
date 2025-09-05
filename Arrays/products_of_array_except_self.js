class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const size = nums.length;
    let left_product = new Array(size);
    let right_product = new Array(size);
    let result = new Array(size);
    let leftProduct = 1;
    let rightProduct = 1;

    for (let i = 0; i < size; i++) {
      left_product[i] = leftProduct;
      leftProduct = leftProduct * nums[i];
    }
    for (let i = size - 1; i >= 0; i--) {
      right_product[i] = rightProduct;
      rightProduct = rightProduct * nums[i];
    }
    for (let i = 0; i < size; i++) {
      result[i] = left_product[i] * right_product[i];
    }

    return result;
  }
}
