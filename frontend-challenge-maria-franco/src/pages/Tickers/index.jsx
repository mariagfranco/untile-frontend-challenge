import React, { useEffect, useState } from 'react';
import './Tickers.css';
import { getSupportedCurrencies, getConversionRate } from '../../Api';
import MenuItem from '@mui/material/MenuItem';
import { Box, Card, CardContent, FormControl, InputLabel, Select, Typography } from '@mui/material';
import Dropwdown from '../../components/Dropdown';
// import { addConversion } from '../state/conversionSlice';

const Tickers = () => {
  const [currencies, setCurrencies] = useState([]);
  const [inputCurrency, setInputCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
//   const history = useSelector((state) => state.conversion.history);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await getSupportedCurrencies();
      setCurrencies(data);
    };
    fetchCurrencies();
  }, []);


  return (
    <div>
      <h1>TICKERS</h1>
      <Box sx={{ width: '120px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
    <Dropwdown options={currencies} label='from'></Dropwdown>
        <select onChange={(e) => setTargetCurrency(e.target.value)} value={targetCurrency}>
        <option value="">Select Target Currency</option>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      {re*ult && <p>Result: {result} {targetCurrency}</p>}
      {/* <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.amount} {item.inputCurrency} = {item.result} {item.targetCurrency}
          </li>
        ))}
      </ul> */}
        <Card sx={{ minWidth: 275 }}>
      <CardContent className='card-content'>
        <div className='card-content-header'>
            <Typography id='title'>BTC/USD</Typography>
            <a>View more</a>
        </div>
        <div className='card-content-info'> 
            <div>
                <Typography>last value: </Typography>
                <Typography>last value: </Typography>
            </div>
            <div>
            <Typography>Market: </Typography>
            <Typography>Market volume: </Typography>
            </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default Tickers;