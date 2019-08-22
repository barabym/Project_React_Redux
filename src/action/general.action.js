export function setBaseCurrencyToStore(baseCurrency) {
  return {
    type: "set_baseCurrency",
    payload: baseCurrency
  }
}

export function setSelectedCurrencyToStore(selectedCurrency) {
  return {
    type: "set_selectedCurrency",
    payload: selectedCurrency
  }
}

export function setListFavoriteToStore(listFavorite) {
  return {
    type: "set_listFavorite",
    payload: listFavorite
  }
}