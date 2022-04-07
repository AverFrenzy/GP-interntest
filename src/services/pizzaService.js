const API_BASE = 'https://gp-js-test.herokuapp.com/pizza/'

const getInfo = async (url) => {
  const response = await fetch(`${API_BASE}${url}`);
  const data = await response.json();
  return data;
};

export const getParticipantsInfo = async () => getInfo('guests')

export const getDietsInfo  = async (namesOfParticipants) => getInfo(`world-diets-book/${namesOfParticipants}`)

export const getCurrencyInfo  = async () => getInfo('currency')

export const getPizzaInfo = async(typeOfPizza,pizzaEatersNumber) => getInfo(`order/${typeOfPizza}/${pizzaEatersNumber}`)

export const getColaInfo = async(participantsNumber) => getInfo(`order-cola/${participantsNumber}`)
