import { connect } from "react-redux"

import Menu from "./Menu.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
  }
}

export default connect(mapStatetoProps)(Menu)