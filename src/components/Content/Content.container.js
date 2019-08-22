import { connect } from "react-redux"
import { setValueInputFromCurrencyToStore, setIdDropListCurrencyToStore } from "../../action/converter.action";

import Content from "./Content.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValueInputFromCurrencyToStore: (valueInputFromCurrency) => dispatch(setValueInputFromCurrencyToStore(valueInputFromCurrency)),
    setIdDropListCurrencyToStore: (idDropListCurrency) => dispatch(setIdDropListCurrencyToStore(idDropListCurrency)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Content)