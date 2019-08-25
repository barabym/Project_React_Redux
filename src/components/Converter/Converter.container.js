/* eslint-disable import/extensions */
import { connect } from 'react-redux';

import { setValueInputFromCurrencyToStore } from '../../action/converter.action';

import Converter from './Converter.component.jsx';

const mapStatetoProps = store => (
  {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
  }
);

const mapDispatchToProps = {
  setValueInputFromCurrencyToStore,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Converter);
