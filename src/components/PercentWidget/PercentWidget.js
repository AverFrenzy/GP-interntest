import React from "react";
import { CircularProgress } from '@mui/material';
import { PercentBox, PercentBoxTitle, PercentTitle } from './PercentWidget.styles';

export const PercentWidget = React.memo(function MyComponent({ value }) {
  const colorValue = value < 45 ? 'error' : value < 65 && value > 44 ? 'secondary' : 'success';

  return (
    <PercentBox>
      <CircularProgress
        variant="determinate"
        value={100}
        size="270px"
        thickness={7}
        sx={{ position: 'absolute', color: '#d8d8d8' }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        color={colorValue}
        size="270px"
        thickness={7}
      />
      <PercentBoxTitle>
        <PercentTitle>{value}%</PercentTitle>
      </PercentBoxTitle>
    </PercentBox>
  );
});
