export function getBaseAfterFilter(baseItem, filterWord) {

	let baseAfterFilter = baseItem.filter((item) => {
		return ~item.Abbr.indexOf(filterWord.toUpperCase());
	})
	return baseAfterFilter;
}