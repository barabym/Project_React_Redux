import { getBaseCurrency } from '../service/getBaseCurrency';

export function setSelectedCurrencyToStore(selectedCurrency) {
  return {
    type: 'set_selectedCurrency',
    payload: selectedCurrency,
  };
}

export function setBaseCurrencyToStore() {
  return dispatch => {
    getBaseCurrency()
      .then(response => {
        dispatch({
          type: 'set_baseCurrency',
          payload: response,
        });
        dispatch(setSelectedCurrencyToStore(response[0]));
      });
  };
}

export function setListFavoriteToStore(listFavorite) {
  return {
    type: 'set_listFavorite',
    payload: listFavorite,
  };
}
