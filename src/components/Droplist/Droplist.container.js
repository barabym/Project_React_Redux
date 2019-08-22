import { connect } from "react-redux"

import { setIdDropListCurrencyToStore } from "../../action/converter.action";

import Droplist from "./Droplist.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setIdDropListCurrencyToStore: (idDropListCurrency) => dispatch(setIdDropListCurrencyToStore(idDropListCurrency)),
//   }
// }

const mapDispatchToProps = {
  
  setIdDropListCurrencyToStore,
}

export default connect(mapStatetoProps, mapDispatchToProps)(Droplist)