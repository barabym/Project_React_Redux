/* eslint-disable import/extensions */
import { connect } from 'react-redux';

import { setIdDropListCurrencyToStore } from '../../action/converter.action';

import Droplist from './Droplist.component.jsx';

const mapStatetoProps = store => (
  {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
);

const mapDispatchToProps = {
  setIdDropListCurrencyToStore,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Droplist);
