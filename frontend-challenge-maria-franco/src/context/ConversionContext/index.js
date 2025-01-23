import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchAndCacheCoinList, getCoinsList } from '../../Api';

const ConversionContext = createContext();

export const ConversionProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [coinsData, setCoinsData] = useState([]);
  const [coinsInfo, setCoinsInfo] = useState([]);

  const addConversion = (conversion) => {
    setHistory((prevHistory) => [...prevHistory, conversion]);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await getCoinsList();
      setCoinsData(data);
    };

    fetchCoins();
  }, []);


  return (
    <ConversionContext.Provider value={{ history, addConversion, coinsData }}>
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversionContext = () => {
  return useContext(ConversionContext);
};