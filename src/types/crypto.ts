export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  sparklineData: number[];
  isFavorite: boolean;
  logo: string;
}

export interface CryptoState {
  assets: CryptoAsset[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}