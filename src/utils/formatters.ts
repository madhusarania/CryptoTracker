export const formatPrice = (price: number): string => {
  if (price >= 1000) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else if (price >= 1) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  } else {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 4,
      maximumFractionDigits: 8,
    });
  }
};

export const formatPercentage = (percentage: number): string => {
  return percentage.toFixed(2) + "%";
};

export const formatLargeNumber = (num: number): string => {
  if (num >= 1_000_000_000_000) {
    return `$${(num / 1_000_000_000_000).toFixed(2)}T`;
  } else if (num >= 1_000_000_000) {
    return `$${(num / 1_000_000_000).toFixed(2)}B`;
  } else if (num >= 1_000_000) {
    return `$${(num / 1_000_000).toFixed(2)}M`;
  } else if (num >= 1_000) {
    return `$${(num / 1_000).toFixed(2)}K`;
  } else {
    return `$${num.toFixed(2)}`;
  }
};

export const formatSupply = (supply: number, symbol: string): string => {
  if (supply >= 1_000_000_000) {
    return `${(supply / 1_000_000_000).toFixed(2)}B ${symbol}`;
  } else if (supply >= 1_000_000) {
    return `${(supply / 1_000_000).toFixed(2)}M ${symbol}`;
  } else if (supply >= 1_000) {
    return `${(supply / 1_000).toFixed(2)}K ${symbol}`;
  } else {
    return `${supply.toFixed(2)} ${symbol}`;
  }
};
