import { TextField } from '@mui/material';

export const Input = ({ inputName }) => {
  return (
    <li>
      <TextField
        sx={{ width: '100%' }}
        id={inputName}
        name={inputName}
        label={inputName}
        variant="filled"
        color="success"
        autoComplete="off"
      />
    </li>
  );
};
