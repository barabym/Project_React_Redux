import { connect } from "react-redux"
import { setValueInputFromCurrencyToStore, setIdDropListCurrencyToStore } from "../../action/converter.action";
import { setListFavoriteToStore, setBaseCurrencyToStore, setSelectedCurrencyToStore } from "../../action/general.action";
import { setBaseRangeToStore, setFromDateToStore, setEndDateToStore } from "../../action/chart.action";


import Content from "./Content.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
    chartStore: store.chartStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCurrencyToStore: (selectedCurrency) => dispatch(setSelectedCurrencyToStore(selectedCurrency)),
    setBaseCurrencyToStore: (baseCurrency) => dispatch(setBaseCurrencyToStore(baseCurrency)),
    setValueInputFromCurrencyToStore: (valueInputFromCurrency) => dispatch(setValueInputFromCurrencyToStore(valueInputFromCurrency)),
    setIdDropListCurrencyToStore: (idDropListCurrency) => dispatch(setIdDropListCurrencyToStore(idDropListCurrency)),
    setListFavoriteToStore: (listFavorite) => dispatch(setListFavoriteToStore(listFavorite)),
    setBaseRangeToStore: (baseRange) => dispatch(setBaseRangeToStore(baseRange)),
    setFromDateToStore: (fromDate) => dispatch(setFromDateToStore(fromDate)),
    setEndDateToStore: (endDate) => dispatch(setEndDateToStore(endDate)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Content)