import { connect } from 'react-redux';

import setFilterWordToStore from '../../action/search.action';

import Search from './Search.component';

const mapDispatchToProps = {
  setFilterWordToStore,
};

export default connect(null, mapDispatchToProps)(Search);
