import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function CheckandXButtons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={() => handleButtonClick('check')}
        style={{ backgroundColor: activeButton === 'check' ? 'green' : 'transparent' }}
      >
        <CheckCircleIcon fontSize="large"/>
      </IconButton>

      <IconButton
        onClick={() => handleButtonClick('cross')}
        style={{ backgroundColor: activeButton === 'cross' ? 'red' : 'transparent' }}
      >
        <CancelIcon fontSize="large"/>
      </IconButton>
    </Stack>
  );
}
