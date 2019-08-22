import { getArrRateAndArrDateCurrencyInRange } from "../service/getArrRateAndArrDateCurrencyInRange";

export function setFavoriteBaseRangeToStore(currencyID, fromDate, endDate) {
  return (dispatch) => {
    getArrRateAndArrDateCurrencyInRange(currencyID, fromDate, endDate)
      .then(response => {
        dispatch({
          type: "set_favoriteBaseRange",
          payload: response
        });
      });
  }
}

export function setFavoriteFromDateToStore(favoriteFromDate) {
  return {
    type: "set_favoriteFromDate",
    payload: favoriteFromDate
  }
}

export function setFavoriteEndDateToStore(favoriteEndDate) {
  return {
    type: "set_favoriteEndDate",
    payload: favoriteEndDate
  }
}

export function setFavoriteSelectedCurrencyToStore(favoriteSelectedCurrency) {
  return {
    type: "set_favoriteSelectedCurrency",
    payload: favoriteSelectedCurrency
  }
}