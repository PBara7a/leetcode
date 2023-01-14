function isPalindrome(s: string): boolean {
  const alphanumericStr: string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let i: number = alphanumericStr.length - 1;
  let reversedStr: string = "";
  while (i >= 0) {
    reversedStr += alphanumericStr[i--];
  }

  return alphanumericStr === reversedStr;
}

// Recursive solution
function isPalindrome2(s: string): boolean {
  const alphanumericStr: string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  function innerFunc(left: number, right: number): boolean {
    if (left >= right) return true;
    if (alphanumericStr[left] !== alphanumericStr[right]) return false;
    return innerFunc(left+1, right-1);
  }

  return innerFunc(0, alphanumericStr.length-1);
}
