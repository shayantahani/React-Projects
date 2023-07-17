import React, { useEffect, useState } from "react";
import getApi from "../services/Api";
import Loader from "./Loader";
import Coin from "./Coin";
import styles from "./Landing.module.css";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getApi();
      setCoins(data);
    };
    fetchApi();
  }, []);
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={styles.coinContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        searchedCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
