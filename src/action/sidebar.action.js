export function setFilterWord(filterWord) {
  return {
    type: "set_filterWord",
    payload: filterWord
  }
}

export function setSelectedCurrency(selectedCurrency) {
  return {
    type: "set_selectedCurrency",
    payload: selectedCurrency
  }
}