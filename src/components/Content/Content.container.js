import { connect } from "react-redux"
import { setValueInputFromCurrencyToStore, setIdDropListCurrencyToStore } from "../../action/converter.action";
import { setListFavoriteToStore, setBaseCurrencyToStore, setSelectedCurrencyToStore } from "../../action/general.action";

import Content from "./Content.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCurrencyToStore: (selectedCurrency) => dispatch(setSelectedCurrencyToStore(selectedCurrency)),
    setBaseCurrencyToStore: (baseCurrency) => dispatch(setBaseCurrencyToStore(baseCurrency)),
    setValueInputFromCurrencyToStore: (valueInputFromCurrency) => dispatch(setValueInputFromCurrencyToStore(valueInputFromCurrency)),
    setIdDropListCurrencyToStore: (idDropListCurrency) => dispatch(setIdDropListCurrencyToStore(idDropListCurrency)),
    setListFavoriteToStore: (listFavorite) => dispatch(setListFavoriteToStore(listFavorite)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Content)