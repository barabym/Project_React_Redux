export default function setFilterWordToStore(filterWord) {
  return {
    type: 'set_filterWord',
    payload: filterWord,
  };
}
