import { connect } from 'react-redux';

import { setSelectedCurrencyToStore } from '../../action/general.action';

import ItemList from './ItemList.component';

const mapStateToProps = store => (
  {
    generalStore: store.generalStore,
    searchStore: store.searchStore,
  }
);

const mapDispatchToProps = {
  setSelectedCurrencyToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
