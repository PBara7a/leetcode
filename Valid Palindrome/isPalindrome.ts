function isPalindrome(s: string): boolean {
  const alphanumericStr: string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let i: number = alphanumericStr.length - 1;
  let reversedStr: string = "";
  while (i >= 0) {
    reversedStr += alphanumericStr[i--];
  }

  return alphanumericStr === reversedStr;
}
