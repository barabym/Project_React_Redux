export function getBaseAfterFilter(BaseItem, FilterWord) {

	let BaseAfterFilter = BaseItem.filter((item) => {
		return ~item.Abbr.indexOf(FilterWord.toUpperCase());
	})
	return BaseAfterFilter;
}