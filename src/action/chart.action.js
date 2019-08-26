import getArrRateAndArrDateCurrencyInRange from '../service/getArrRateAndArrDateCurrencyInRange';

export function setBaseRangeToStore(currencyID, fromDate, endDate) {
  return dispatch => {
    getArrRateAndArrDateCurrencyInRange(currencyID, fromDate, endDate)
      .then(response => {
        dispatch({
          type: 'set_baseRange',
          payload: response,
        });
      });
  };
}

export function setFromDateToStore(fromDate) {
  return {
    type: 'set_fromDate',
    payload: fromDate,
  };
}

export function setEndDateToStore(endDate) {
  return {
    type: 'set_endDate',
    payload: endDate,
  };
}
