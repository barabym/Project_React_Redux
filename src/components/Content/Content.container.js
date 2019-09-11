import { connect } from 'react-redux';

import { setListFavoriteToStore, setBaseCurrencyToStore, setSelectedCurrencyToStore } from '../../action/general.action';
import { setBaseRangeToStore } from '../../action/chart.action';
import { setFavoriteSelectedCurrencyToStore, setFavoriteCurrencyBaseRangeToStore } from '../../action/favoritechart.action';

import Content from './Content.component';

const mapStateToProps = store => (
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
  setFavoriteCurrencyBaseRangeToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
