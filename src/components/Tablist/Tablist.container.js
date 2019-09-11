import { connect } from 'react-redux';

import Tablist from './Tablist.component';

const mapStateToProps = store => (
  {
    generalStore: store.generalStore,
    favoriteChartStore: store.favoriteChartStore,
  }
);

export default connect(mapStateToProps)(Tablist);
