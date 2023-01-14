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

// Recursive solution
function maxProfit2(prices: number[], buyIndex=0, sellIndex=1, maxGains=0): number {
  if (sellIndex === prices.length) return maxGains;

  if (prices[buyIndex] < prices[sellIndex]) {
    const profit = prices[sellIndex] - prices[buyIndex];
    maxGains = profit > maxGains ? profit : maxGains;
  } else {
    buyIndex = sellIndex;
  }

  return maxProfit2(prices, buyIndex, sellIndex+1, maxGains);
}