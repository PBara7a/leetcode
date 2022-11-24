// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function isBalanced(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null): [boolean, number] {
    if (!root) return [true, 0];

    const left = dfs(root.left);
    const right = dfs(root.right);
    const balanced: boolean =
      left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];
}
