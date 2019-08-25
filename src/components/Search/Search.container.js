/* eslint-disable import/extensions */
import { connect } from 'react-redux';

import { setfilterWordToStore } from '../../action/search.action';

import Search from './Search.component.jsx';

const mapDispatchToProps = {
  setfilterWordToStore,
};

export default connect(null, mapDispatchToProps)(Search);
