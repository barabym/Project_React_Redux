import { connect } from 'react-redux';

import Menu from './Menu.component';

const mapStateToProps = store => (
  {
    amountFavorite: +store.generalStore.listFavorite.length,
  }
);

export default connect(mapStateToProps)(Menu);
