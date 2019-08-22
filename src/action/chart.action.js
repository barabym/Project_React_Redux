export function setBaseRangeDateToStore(baseRangeDate) {
  return {
    type: "set_baseRangeDate",
    payload: baseRangeDate
  }
}

export function setBaseRangeRateToStore(baseRangeRate) {
  return {
    type: "set_baseRangeRate",
    payload: baseRangeRate
  }
}

export function setFromDateToStore(fromDate) {
  return {
    type: "set_fromDate",
    payload: fromDate
  }
}

export function setEndDateToStore(endDate) {
  return {
    type: "set_endDate",
    payload: endDate
  }
}