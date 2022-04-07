import { useState } from 'react';
import { Row } from './Row';
import { DialogFeedback } from './DialogFeedback';
import { TableTitle, TableList } from './Table.styles';
import { usePartyContext } from '../contexts/PartyContext';

export const TableFeedback = () => {
  const { partyInfo } = usePartyContext();

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const [starId, setStarId] = useState(2);
  const [isLocal, setIsLocal] = useState(false);
  const [comment, setComment] = useState('');
  const [phoneNumb, setPhoneNumb] = useState('');

  const getStars = (e) => {
    if (e.target.closest('svg[id]') && !isLocal) {
      const id = e.target.closest('svg[id]').id;
      setStarId(id);
    }
  };

  const handleClickOpen = (e) => {
    const id = e.currentTarget.id;
    setId(id);
    if (localStorage.getItem(`${id}`)) {
      const { stars, comment, phone } = JSON.parse(localStorage.getItem(`${id}`));
      setIsLocal(true);
      setStarId(+stars);
      setComment(comment);
      setPhoneNumb(phone);
    } else {
      setIsLocal(false);
      setStarId(2);
      setComment('');
      setPhoneNumb('');
    }
    setIsOpen(true);
  };

  return (
    <>
      <TableList>
        {partyInfo.map(({ name, isEatsPizza }, index) => (
          <Row
            onClick={handleClickOpen}
            color={partyInfo[index].isVegan && partyInfo[index].isEatsPizza ? 'green' : 'grey.800'}
            name={name}
            disabled={isEatsPizza ? false : true}
            key={index}
            id={index}
            visibility={isEatsPizza && !localStorage.getItem(`${index}`) ? 'hidden' : false}
          />
        ))}
      </TableList>
      <DialogFeedback
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={id ? partyInfo[id].name : ''}
        nameId={id}
        starId={starId}
        getStars={getStars}
        isLocal={isLocal}
        comment={comment}
        phoneNumb={phoneNumb}
        display={isLocal ? 'none' : false}
      />
    </>
  );
};
