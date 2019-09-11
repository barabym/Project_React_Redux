import { connect } from 'react-redux';

import { setFromDateToStore, setEndDateToStore } from '../../action/chart.action';
import { setFavoriteFromDateToStore, setFavoriteEndDateToStore } from '../../action/favoritechart.action';

import Chart from './Chart.component';

const mapStateToProps = (store, ownProps) => {
  if (ownProps.flagDescriptionIsShow) {
    return {
      currencyName: store.favoriteChartStore.favoriteSelectedCurrency.EngName || '',
      currencyAbbreviation: store.favoriteChartStore.favoriteSelectedCurrency.Abbr || '',
      fromDate: store.favoriteChartStore.favoriteFromDate,
      endDate: store.favoriteChartStore.favoriteEndDate,
      rangeDate: store.favoriteChartStore.favoriteBaseRangeDate,
      rangeRate: store.favoriteChartStore.favoriteBaseRangeRate,
    };
  }
  return {
    fromDate: store.chartStore.fromDate,
    endDate: store.chartStore.endDate,
    rangeDate: store.chartStore.baseRangeDate,
    rangeRate: store.chartStore.baseRangeRate,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.flagDescriptionIsShow) {
    return {
      onChangeFromDate: favoriteFromDate => dispatch(setFavoriteFromDateToStore(favoriteFromDate)),
      onChangeEndDate: favoriteEndDate => dispatch(setFavoriteEndDateToStore(favoriteEndDate)),
    };
  }
  return {
    onChangeFromDate: fromDate => dispatch(setFromDateToStore(fromDate)),
    onChangeEndDate: endDate => dispatch(setEndDateToStore(endDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
