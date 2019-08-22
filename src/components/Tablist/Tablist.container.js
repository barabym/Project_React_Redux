import { connect } from "react-redux"

import Tablist from "./Tablist.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    favoriteChartStore: store.favoriteChartStore,
  }
}

export default connect(mapStatetoProps)(Tablist)