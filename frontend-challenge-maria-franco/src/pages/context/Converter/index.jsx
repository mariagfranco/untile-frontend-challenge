import React, { useEffect, useState } from 'react';
import { getSupportedCurrencies, getConversionRate, getCoinsList } from '../../../Api';
import { Box, MenuItem, Select, TextField } from '@mui/material';
import Dropdown from '../../../components/Dropdown';
import { useConversionContext } from '../../../context/ConversionContext';

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [inputCurrency, setInputCurrency] = useState('');
  const [inputId, setInputId] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const {history, coinsData} = useConversionContext();
  const addConversion = useConversionContext();

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await getSupportedCurrencies();
      setCurrencies(data);

    };
    fetchCurrencies();
  }, []);



  const handleConvert = async () => {
    // console.log('inputCurrency', inputCurrency);
    const data = await getConversionRate('bitcoin', targetCurrency);
    // console.log(data['bitcoin'], 'hehe');
    const convertedAmount = data['bitcoin'][targetCurrency] * amount;
    setResult(convertedAmount);

    // const conversion = {
    //   inputCurrency,
    //   targetCurrency,
    //   amount,
    //   result: convertedAmount,
    // };
    // dispatchEvent(addConversion(conversion));
  };


  const handleInputCurrencyChange = (e) => {
    setInputCurrency(e.target.value);
    const selectedCurrency = currencies.find((currency) => currency.symbol === e.target.symbol);
    setInputId(selectedCurrency.id);
  };

  handleInputCurrencyFind();

  return (
    <div>
      <h1>CRYPTO CALCULATOR</h1>
      <Box>
        <Box>
          <TextField type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />

          <Dropdown
          options={currencies}
          value={inputCurrency}
          onChange={(e) => handleInputCurrencyChange(e)}/>
        </Box>
          <Dropdown
          options={currencies}
          label='to'
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}/>
      </Box>
      <button onClick={handleConvert}>Convert</button>
      {result && <p>Result: {result} {targetCurrency}</p>}
      <h2>RESULT {result}</h2>
      {/* <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.amount} {item.inputCurrency} = {item.result} {item.targetCurrency}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Converter;