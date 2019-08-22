export function setBaseCurrencyToStore(baseCurrency) {
  return {
    type: "set_baseCurrency",
    payload: baseCurrency
  }
}

export function setFilterWordToStore(filterWord) {
  return {
    type: "set_filterWord",
    payload: filterWord
  }
}

export function setSelectedCurrencyToStore(selectedCurrency) {
  return {
    type: "set_selectedCurrency",
    payload: selectedCurrency
  }
}