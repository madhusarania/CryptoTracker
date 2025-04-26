import { AppDispatch } from "../app/store";
import { updateAssetPrices } from "../features/crypto/cryptoSlice";

class MockWebSocket {
  private intervalId: number | null = null;
  private dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  connect() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.dispatch(updateAssetPrices());
    }, 1000 + Math.random() * 1000) as unknown as number;

    console.log("MockWebSocket connected");
  }

  disconnect() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("MockWebSocket disconnected");
    }
  }
}

export default MockWebSocket;
