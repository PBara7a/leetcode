function climbStairs(n: number): number {
  if (n < 4) return n;

  const fibonacci: Array<number> = [0, 1];

  for (let i = 0; i < n; i++) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }
  return fibonacci[n + 1];
}
