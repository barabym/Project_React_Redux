import { connect } from "react-redux"

import { setValueInputFromCurrencyToStore } from "../../action/converter.action";

import Converter from "./Converter.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setValueInputFromCurrencyToStore: (valueInputFromCurrency) => dispatch(setValueInputFromCurrencyToStore(valueInputFromCurrency)),
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log("Converter:" + ownProps.flag);

//   return {
//     setValueInputFromCurrencyToStore: (valueInputFromCurrency) => dispatch(setValueInputFromCurrencyToStore(valueInputFromCurrency)),
//   }
// }

const mapDispatchToProps = {

  setValueInputFromCurrencyToStore,
  }

export default connect(mapStatetoProps, mapDispatchToProps)(Converter)