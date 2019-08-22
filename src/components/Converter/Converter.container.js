import { connect } from "react-redux"
import { setValueInputFromCurrencyToStore, setIdDropListCurrencyToStore } from "../../action/converter.action";

import Converter from "./Converter.component.jsx"

const mapStatetoProps = (store) => {
  return {
    sidebarStore: store.sidebarStore, //попробуй не брать filterword
    converterStore: store.converterStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValueInputFromCurrencyToStore: (valueInputFromCurrency) => dispatch(setValueInputFromCurrencyToStore(valueInputFromCurrency)),
    setIdDropListCurrencyToStore: (idDropListCurrency) => dispatch(setIdDropListCurrencyToStore(idDropListCurrency)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Converter)