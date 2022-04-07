import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

export const Row = ({
  color,
  disabled,
  visibility,
  name,
  onClick,
  id,
}) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton id={id} onClick={onClick} disabled={disabled} sx={{ p: '8px 0' }}>
          <ListItemIcon sx={{ visibility: `${visibility}` }}>
            {disabled && <ClearIcon fontSize="large" />}
            {!disabled && <CheckCircleOutlineIcon fontSize="large" color="success" />}
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: `${color}`,
              fontWeight: 'bold',
              variant: 'body1',
            }}
            primary={name}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};
