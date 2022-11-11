function isValid(s: string): boolean {
  const bracketPairs: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const bracketStack: string[] = [];

  for (const bracket of s) {
    const lastIn: string = bracketStack[bracketStack.length - 1];

    if (bracket === bracketPairs[lastIn]) {
      bracketStack.pop();
    } else {
      bracketStack.push(bracket);
    }
  }
  return bracketStack.length === 0;
}
