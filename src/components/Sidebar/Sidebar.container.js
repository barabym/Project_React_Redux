import { connect } from "react-redux"
import { setSelectedCurrencyToStore } from "../../action/general.action";

import Sidebar from "./Sidebar.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setFilterWordToStore: (filterWord) => dispatch(setFilterWordToStore(filterWord)),
    setSelectedCurrencyToStore: (selectedCurrency) => dispatch(setSelectedCurrencyToStore(selectedCurrency)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar)