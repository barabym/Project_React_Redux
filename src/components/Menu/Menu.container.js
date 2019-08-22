import { connect } from "react-redux"

import Menu from "./Menu.component.jsx"

const mapStatetoProps = (store) => {
  return {
    amountFavorite: +store.generalStore.listFavorite.length,
  }
}

export default connect(mapStatetoProps)(Menu)