import { connect } from 'react-redux';

import { setValueInputFromCurrencyToStore } from '../../action/converter.action';

import Converter from './Converter.component';

const mapStateToProps = store => (
  {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
);

const mapDispatchToProps = {
  setValueInputFromCurrencyToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
