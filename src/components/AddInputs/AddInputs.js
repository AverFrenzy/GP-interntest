import { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AddInpBlock, InputsList } from './AddInputs.styles';
import { Input } from '../Input';

export const AddInputs = () => {
  const [inputNames, setInputNames] = useState([]);
  const [inputCount, setInputCount] = useState(1);

  const addInputItem = () => {
    setInputNames([{ name: `input №${inputCount}` }, ...inputNames]);
    setInputCount((prev) => prev + 1);
  };

  return (
    <>
      <AddInpBlock>
        <Typography gutterBottom>Add new text-block</Typography>
        <IconButton aria-label="add" size="large" color="primary" onClick={addInputItem}>
          <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </AddInpBlock>
      <InputsList>
        {inputNames.map(({ name }) => (
          <Input inputName={name} key={name} />
        ))}
      </InputsList>
    </>
  );
};
