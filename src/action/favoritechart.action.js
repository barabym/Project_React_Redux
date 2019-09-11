import getArrRateAndArrDateCurrencyInRange from '../service/getArrRateAndArrDateCurrencyInRange';

export function setFavoriteCurrencyBaseRangeToStore(currencyData, fromDate, endDate) {
  if (typeof currencyData === 'number') {
    return dispatch => {
      getArrRateAndArrDateCurrencyInRange(currencyData, fromDate, endDate)
        .then(response => {
          dispatch({
            type: 'set_favoriteBaseRange',
            payload: response,
          });
        });
    };
  }
  return {
    type: 'set_favoriteBaseRange',
    payload: currencyData,
  };
}

export function setFavoriteFromDateToStore(favoriteFromDate) {
  return {
    type: 'set_favoriteFromDate',
    payload: favoriteFromDate,
  };
}

export function setFavoriteEndDateToStore(favoriteEndDate) {
  return {
    type: 'set_favoriteEndDate',
    payload: favoriteEndDate,
  };
}

export function setFavoriteSelectedCurrencyToStore(favoriteSelectedCurrency) {
  return {
    type: 'set_favoriteSelectedCurrency',
    payload: favoriteSelectedCurrency,
  };
}
