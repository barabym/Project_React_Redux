export function getBaseAfterFilter(baseItem, filterWord) {
	// console.log("1:" + filterWord);
	// console.log("2:" + (filterWord).toUpperCase());
	// let f=222;
	// console.log("1:" + f);
	// console.log("2:" + f.toUpperCase());


	let baseAfterFilter = baseItem.filter((item) => {
		return ~item.Abbr.indexOf(filterWord.toUpperCase());
	})
	return baseAfterFilter;
}