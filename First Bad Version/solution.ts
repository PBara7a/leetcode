// const isBadVersion = (version: number): boolean => {
//   ...
// };

const solution = (isBadVersion: any) => {
  return (n: number): number => {
    let leftPointer: number = 1;
    let rightPointer: number = n;

    while (leftPointer <= rightPointer) {
      const middle: number =
        leftPointer + Math.floor((rightPointer - leftPointer) / 2);

      if (isBadVersion(middle)) rightPointer = middle - 1;
      else leftPointer = middle + 1;
    }

    return leftPointer;
  };
};
