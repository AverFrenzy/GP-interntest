import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Box,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddInputs } from '../AddInputs';
import { Feedback } from '../Feedback';

export const DialogFeedback = ({
  isOpen,
  setIsOpen,
  name,
  nameId,
  starId,
  getStars,
  isLocal,
  comment,
  phoneNumb,
  display,
}) => {
  const starLength = [0, 1, 2, 3, 4];
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      stars: '',
    },
  });
  watch('name', 'phone', 'comment');

  const handleClose = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    data.name = `${name}`;
    data.stars = `${starId}`;
    localStorage.setItem(`${nameId}`, JSON.stringify(data));
    reset();
    handleClose();
  };

  const deleteFeddback = () => {
    isLocal && localStorage.removeItem(`${nameId}`);
    isLocal && handleClose();
  };

  return (
    <Dialog open={isOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            pl: '0',
            color: 'grey.700',
          }}
          value={name}
        >
          {name}
        </DialogTitle>
        <Typography gutterBottom>{isLocal ? 'feedback' : 'Please, add your feedback'}</Typography>
        <DialogContent dividers onClick={getStars} sx={{ pl: '0' }}>
          {starLength.map((star, index) => (
            <StarIcon
              id={index}
              key={index}
              className="star"
              sx={{
                color: starId >= index ? '#ffc400' : '',
                cursor: 'pointer',
              }}
            />
          ))}
        </DialogContent>
        {!isLocal && <AddInputs />}
        {isLocal && <Feedback comment={comment} phoneNumb={phoneNumb} />}
        <Box>
          <TextField
            sx={{ width: '100%', display: `${display}` }}
            id="filled-basic"
            label="Phone number"
            variant="filled"
            color="success"
            autoComplete="off"
            {...register('phone', {
              required: true,
              minLength: 3,
              maxLength: 10,
              pattern: /^[0-9/+/(/)/ /]+$/i,
            })}
          />
          {errors.phone && !isLocal && (
            <p style={{ color: 'grey.600', pl: '25px' }}>
              Please, use only +(), space, and numbers
            </p>
          )}
          {!errors.phone && !isLocal && <p style={{ height: '16px' }}></p>}
          <TextField
            sx={{ width: '100%', display: `${display}` }}
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={4}
            variant="filled"
            color="success"
            {...register('comment', {
              required: true,
              minLength: 10,
              maxLength: 100,
            })}
          />
          {errors.comment && !isLocal && (
            <p style={{ color: 'grey.600' }}>Please, add min: 10 letters, max: 100 letters</p>
          )}
          {!errors.comment && !isLocal && <p style={{ height: '16px' }}></p>}
        </Box>

        <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            type="reset"
            variant="contained"
            autoFocus
            color="error"
            icon={<CloseIcon />}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            type="submit"
            autoFocus
            variant="contained"
            color={isLocal ? 'error' : 'success'}
            icon={isLocal ? <DeleteIcon /> : <SendIcon />}
            onClick={deleteFeddback}
          >
            {isLocal ? 'Delete' : 'Save'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
