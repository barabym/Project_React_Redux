import { connect } from "react-redux"

import { setfilterWordToStore } from "../../action/search.action";

import Search from "./Search.component.jsx"

const mapDispatchToProps = (dispatch) => {
  return {
    setfilterWordToStore: (filterWord) => dispatch(setfilterWordToStore(filterWord)),
  }
}

export default connect(null, mapDispatchToProps)(Search)