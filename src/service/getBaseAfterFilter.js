/* eslint-disable import/prefer-default-export */
export function getBaseAfterFilter(baseItem, filterWord) {
  const baseAfterFilter = baseItem.filter(item => ~item.Abbr.indexOf(filterWord.toUpperCase()));
  return baseAfterFilter;
}
