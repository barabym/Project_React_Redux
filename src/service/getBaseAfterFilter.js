export function getBaseAfterFilter(baseItem, filterWord) {


	
//занеси эту функцию внутрь компонента



	let baseAfterFilter = baseItem.filter((item) => {
		return ~item.Abbr.indexOf(filterWord.toUpperCase());
	})
	return baseAfterFilter;
}