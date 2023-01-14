function twoSum(nums: number[], target: number): number[] {
  const numsMap: Record<number, number> = {};

  numsMap[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    const pairValue: number = target - nums[i];

    if (pairValue in numsMap) {
      return [numsMap[pairValue], i];
    }

    numsMap[nums[i]] = i;
  }

  return [];
}

// Recursive solution
function twoSum2(nums: number[], target: number, start=0, end=nums.length-1, numsMap: Record<number, number> = {}): number[] {
  if (start === end) return []

  numsMap[nums[start]] = start;
  const dif: number = target - nums[start+1];

  if (dif in numsMap) {
    return [numsMap[dif], start+1]
  }

  return twoSum2(nums, target, start+1, end, numsMap)
}