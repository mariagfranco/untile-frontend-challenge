import React from 'react';
import { Button } from '@mui/material';

const ButtonLabel = ({label}) => {
  return (
    <Button className='blue-button'>{label}</Button>
  )
};

export default ButtonLabel;