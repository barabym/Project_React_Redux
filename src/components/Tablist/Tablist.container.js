/* eslint-disable import/extensions */
import { connect } from 'react-redux';

import Tablist from './Tablist.component.jsx';

const mapStatetoProps = store => (
  {
    generalStore: store.generalStore,
    favoriteChartStore: store.favoriteChartStore,
  }
);

export default connect(mapStatetoProps)(Tablist);
