export function setValueInputFromCurrencyToStore(valueInputFromCurrency) {
  return {
    type: "set_valueInputFromCurrency",
    payload: valueInputFromCurrency
  }
}

export function setValueInputToCurrencyToStore(valueInputToCurrency) {
  return {
    type: "set_valueInputToCurrency",
    payload: valueInputToCurrency
  }
}

export function setIdDropListCurrencyToStore(idDropListCurrency) {
  return {
    type: "set_idDropListCurrency",
    payload: idDropListCurrency
  }
}