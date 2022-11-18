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
