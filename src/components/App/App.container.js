import { connect } from "react-redux"
import { setBaseCurrency } from "../../action/app.action";

import App from "./App.component.jsx"

const mapStatetoProps = (store) => {
  return {
    appStore: store.appStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBaseCurrency: (baseCurrency) => dispatch(setBaseCurrency(baseCurrency))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App)