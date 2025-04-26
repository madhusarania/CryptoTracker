import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CryptoState, CryptoAsset } from "../../types/crypto";
import { initialCryptoData } from "../../data/initialCryptoData";
import { RootState } from "../../app/store";

const generateRandomPriceUpdate = (
  currentPrice: number,
  percentRange: number
): number => {
  const changePercent = Math.random() * percentRange * 2 - percentRange;
  return currentPrice * (1 + changePercent / 100);
};

const initialState: CryptoState = {
  assets: initialCryptoData,
  status: "idle",
  error: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssetPrices: (state) => {
      state.assets = state.assets.map((asset) => {
        const newPrice = generateRandomPriceUpdate(asset.price, 1);

        const newPriceChange1h =
          asset.priceChange1h + (Math.random() * 0.2 - 0.1);
        const newPriceChange24h =
          asset.priceChange24h + (Math.random() * 0.4 - 0.2);
        const newPriceChange7d =
          asset.priceChange7d + (Math.random() * 0.6 - 0.3);

        const newVolume24h =
          asset.volume24h * (1 + (Math.random() * 0.1 - 0.05));

        return {
          ...asset,
          price: newPrice,
          priceChange1h: newPriceChange1h,
          priceChange24h: newPriceChange24h,
          priceChange7d: newPriceChange7d,
          volume24h: newVolume24h,
          sparklineData: [...asset.sparklineData.slice(1), newPrice],
        };
      });
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const assetId = action.payload;
      const assetIndex = state.assets.findIndex(
        (asset) => asset.id === assetId
      );
      if (assetIndex !== -1) {
        state.assets[assetIndex].isFavorite =
          !state.assets[assetIndex].isFavorite;
      }
    },
  },
});

export const { updateAssetPrices, toggleFavorite } = cryptoSlice.actions;

export const selectAllAssets = (state: RootState) => state.crypto.assets;
export const selectAssetById = (state: RootState, assetId: string) =>
  state.crypto.assets.find((asset) => asset.id === assetId);

export default cryptoSlice.reducer;
