/* eslint-disable import/extensions */
import { connect } from 'react-redux';

import { setSelectedCurrencyToStore } from '../../action/general.action';

import ItemList from './ItemList.component.jsx';

const mapStatetoProps = store => (
  {
    generalStore: store.generalStore,
    searchStore: store.searchStore,
  }
);

const mapDispatchToProps = {
  setSelectedCurrencyToStore,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ItemList);
