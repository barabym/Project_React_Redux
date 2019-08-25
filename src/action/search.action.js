// eslint-disable-next-line import/prefer-default-export
export function setfilterWordToStore(filterWord) {
  return {
    type: 'set_filterWord',
    payload: filterWord,
  };
}
