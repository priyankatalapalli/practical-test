import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CoinListings from "../CoinListings/CoinListings";
import Header from "../../components/Header/Header";

function Home() {
  const [coins, setCoins] = useState([]);
  const [coinData, setCoinsData] = useState([]);

  const getCoins = async (url) => {
    return axios.get(url);
  };

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins";
    const getCoindData = getCoins(url).then((res) => {
      if (res && res.data && res.data.length) {
        const coinData = res.data;
        setCoins(coinData);
        setCoinsData(coinData);
      }
    });
  }, []);

  const setAlphaSort = (direction) => {
    let sortedData;
    if (direction == "down") {
      sortedData =
        coinData &&
        coinData.length > 0 &&
        coinData.sort((a, b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();

          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
    } else if (direction == "up") {
      sortedData =
        coinData &&
        coinData.length > 0 &&
        coinData.sort((a, b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();

          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
    }
    setCoins(sortedData);
  };

  const losingCryptoFilter = () => {
    const getNegetiveChanges =
      coinData &&
      coinData.length > 0 &&
      coinData.filter((coin) => coin.market_data.market_cap_change_24h < 0);
    setCoins(getNegetiveChanges);
  };

  const expensiveFilter = () => {
    const getNegetiveChanges =
      coinData &&
      coinData.length > 0 &&
      coinData.filter((coin) => coin.market_data.current_price.aed > 50000);
    setCoins(getNegetiveChanges);
  };

  return (
    <div className="app-wrapper">
      <Header
        setAlphaSort={setAlphaSort}
        expensiveFilter={expensiveFilter}
        losingCryptoFilter={losingCryptoFilter}
      />
      <CoinListings coins={coins} />
    </div>
  );
}

export default Home;
