function maxProfit(prices: number[]): number {
  let maxProfit: number = 0;
  let buyAtIndex: number = 0;
  let sellAtIndex: number = 1;

  for (let i = 1; i < prices.length; i++) {
    if (prices[buyAtIndex] < prices[sellAtIndex]) {
      const profit: number = prices[sellAtIndex] - prices[buyAtIndex];
      maxProfit = profit > maxProfit ? profit : maxProfit;
    } else {
      buyAtIndex = sellAtIndex;
    }
    sellAtIndex++;
  }
  return maxProfit;
}
