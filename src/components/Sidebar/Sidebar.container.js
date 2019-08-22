import { connect } from "react-redux"
import { setFilterWord, setSelectedCurrency } from "../../action/sidebar.action";

import Sidebar from "./Sidebar.component.jsx"

const mapStatetoProps = (store) => {
  return {
    appStore: store.appStore,
    sidebarStore: store.sidebarStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterWord: (filterWord) => dispatch(setFilterWord(filterWord)),
    setSelectedCurrency: (selectedCurrency) => dispatch(setSelectedCurrency(selectedCurrency)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar)