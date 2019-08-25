/* eslint-disable import/extensions */
import { connect } from 'react-redux';

import { setListFavoriteToStore, setBaseCurrencyToStore, setSelectedCurrencyToStore } from '../../action/general.action';
import { setBaseRangeToStore } from '../../action/chart.action';
import { setFavoriteSelectedCurrencyToStore, setFavoriteBaseRangeToStore } from '../../action/favoritechart.action';

import Content from './Content.component.jsx';

const mapStatetoProps = store => (
  {
    generalStore: store.generalStore,
    converterStore: store.converterStore,
    chartStore: store.chartStore,
    favoriteChartStore: store.favoriteChartStore,
  }
);

const mapDispatchToProps = {

  setSelectedCurrencyToStore,
  setBaseCurrencyToStore,
  setListFavoriteToStore,
  setBaseRangeToStore,
  setFavoriteSelectedCurrencyToStore,
  setFavoriteBaseRangeToStore,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Content);
