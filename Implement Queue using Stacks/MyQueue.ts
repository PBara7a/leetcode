class MyQueue {
  s1: Array<number>;
  s2: Array<number>;
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x: number): void {
    while (this.s1.length) {
      const temp = this.s1.pop();
      if (temp !== undefined) {
        this.s2.push(temp);
      }
    }

    this.s1.push(x);

    while (this.s2.length) {
      const temp = this.s2.pop();
      if (temp !== undefined) {
        this.s1.push(temp);
      }
    }
  }

  pop(): number | null {
    const first = this.s1.pop();
    if (first !== undefined) {
      return first;
    }

    return null;
  }

  peek(): number {
    return this.s1[this.s1.length - 1];
  }

  empty(): boolean {
    return this.s1.length === 0;
  }
}
