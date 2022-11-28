function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCounts: Record<string, number> = { total: 0 };

  for (const char of magazine) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!(char in charCounts)) return false;
    charCounts[char]--;
    if (charCounts[char] < 0) return false;
  }
  return true;
}
