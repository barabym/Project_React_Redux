import { connect } from 'react-redux';

import { setIdDropListCurrencyToStore } from '../../action/converter.action';

import Droplist from './Droplist.component';

const mapStateToProps = store => (
  {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
);

const mapDispatchToProps = {
  setIdDropListCurrencyToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Droplist);
