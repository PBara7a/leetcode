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

  return [0, 0];
}
