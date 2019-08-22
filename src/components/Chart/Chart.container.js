import { connect } from "react-redux"
import { setBaseRangeDateToStore, setBaseRangeRateToStore, setFromDateToStore, setEndDateToStore } from "../../action/chart.action";

import Chart from "./Chart.component.jsx"

const mapStatetoProps = (store) => {
  return {
    sidebarStore: store.sidebarStore, //попробуй не брать filterword
    chartStore: store.chartStore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBaseRangeDateToStore: (baseRangeDate) => dispatch(setBaseRangeDateToStore(baseRangeDate)),
    setBaseRangeRateToStore: (baseRangeRate) => dispatch(setBaseRangeRateToStore(baseRangeRate)),
    setFromDateToStore: (fromDate) => dispatch(setFromDateToStore(fromDate)),
    setEndDateToStore: (endDate) => dispatch(setEndDateToStore(endDate)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Chart)