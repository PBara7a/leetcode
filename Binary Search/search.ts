function search(nums: number[], target: number): number {
  let leftPointer: number = 0;
  let rightPointer: number = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const middle: number =
      leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    if (nums[middle] < target) {
      leftPointer = middle + 1;
    } else if (nums[middle] > target) {
      rightPointer = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// Recursive solution
function search2(nums: number[], target: number, left=0, right=nums.length-1): number {
  if (left > right) return -1;

  const mid = left + Math.floor((right - left) / 2);

  if (nums[mid] < target) return search2(nums, target, mid + 1, right);

  if (nums[mid] > target) return search2(nums, target, left, mid - 1);

  return mid;
}
