export function setBaseRangeToStore(baseRange) {
  return {
    type: "set_baseRange",
    payload: baseRange
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