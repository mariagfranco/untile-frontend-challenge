import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl, InputLabel, Select, Typography } from '@mui/material';

const Dropdown = ({label, value, onChange, options, key}) => {
  return (
    <FormControl sx={{'width': '150px'}}>
    <Typography id="demo-simple-select-label">{label}</Typography>
    <Select
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
        {options.map((x) => (
          <MenuItem key={key} value={x}>
            {x}
          </MenuItem>
        ))}
    </Select>
  </FormControl>
  )
};

export default Dropdown;