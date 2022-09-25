// return indices of the two numbers such that they add up to target

(nums = [2, 7, 11, 15]), (target = 9);
(nums = [3, 2, 4]), (target = 6);

var twoSum = function (nums, target) {
  let sum = 0;
  let hashMap = {};
  if (nums.length === 2) return [0, 1];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap[diff] != undefined) return [hashMap[diff], i];
    hashMap[nums[i]] = i;
  }
};
console.log(twoSum(nums, target));
