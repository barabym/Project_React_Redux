import { connect } from "react-redux"

import { setSelectedCurrencyToStore } from "../../action/general.action";

import ItemList from "./ItemList.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    searchStore: store.searchStore,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSelectedCurrencyToStore: (selectedCurrency) => dispatch(setSelectedCurrencyToStore(selectedCurrency)),
//   }
// }

const mapDispatchToProps = {

  setSelectedCurrencyToStore,
}

export default connect(mapStatetoProps, mapDispatchToProps)(ItemList)
