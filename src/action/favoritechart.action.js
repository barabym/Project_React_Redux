export function setFavoriteSelectedCurrencyToStore(favoriteSelectedCurrency) {
  return {
    type: "set_favoriteSelectedCurrency",
    payload: favoriteSelectedCurrency
  }
}

export function setFavoriteBaseRangeToStore(favoriteBaseRange) {
  return {
    type: "set_favoriteBaseRange",
    payload: favoriteBaseRange
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