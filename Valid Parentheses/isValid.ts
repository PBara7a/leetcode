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

// Recursive solution
function isValid2(s: string, start=0, end=s.length, bracketStack: string[] = []): boolean {
  if (start === end) return bracketStack.length === 0;

  const lastIn: string = bracketStack[bracketStack.length - 1];

  if (s[start] === bracketPairs[lastIn]) {
      bracketStack.pop();
  } else {
      bracketStack.push(s[start]);
  }

  return isValid2(s, start+1, end, bracketStack)
}

const bracketPairs: Record<string, string> = {
  "(": ")",
  "{": "}",
  "[": "]",
};