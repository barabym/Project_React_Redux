export default function setfilterWordToStore(filterWord) {
  return {
    type: 'set_filterWord',
    payload: filterWord,
  };
}
