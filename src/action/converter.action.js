export function setValueInputFromCurrencyToStore(valueInputFromCurrency) {
  return {
    type: 'set_valueInputFromCurrency',
    payload: valueInputFromCurrency,
  };
}

export function setIdDropListCurrencyToStore(idDropListCurrency) {
  return {
    type: 'set_idDropListCurrency',
    payload: idDropListCurrency,
  };
}
