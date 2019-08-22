import { connect } from "react-redux"
import { setBaseRangeToStore, setFromDateToStore, setEndDateToStore } from "../../action/chart.action";

import Chart from "./Chart.component.jsx"

const mapStatetoProps = (store) => {
  return {
    generalStore: store.generalStore,
    chartStore: store.chartStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBaseRangeToStore: (baseRange) => dispatch(setBaseRangeToStore(baseRange)),
    setFromDateToStore: (fromDate) => dispatch(setFromDateToStore(fromDate)),
    setEndDateToStore: (endDate) => dispatch(setEndDateToStore(endDate)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Chart)