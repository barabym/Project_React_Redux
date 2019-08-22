import { connect } from "react-redux"
import { setBaseCurrencyToStore, setFilterWordToStore, setSelectedCurrencyToStore } from "../../action/sidebar.action";

import Sidebar from "./Sidebar.component.jsx"

const mapStatetoProps = (store) => {
  return {
    sidebarStore: store.sidebarStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBaseCurrencyToStore: (baseCurrency) => dispatch(setBaseCurrencyToStore(baseCurrency)),
    setFilterWordToStore: (filterWord) => dispatch(setFilterWordToStore(filterWord)),
    setSelectedCurrencyToStore: (selectedCurrency) => dispatch(setSelectedCurrencyToStore(selectedCurrency)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar)