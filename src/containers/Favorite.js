import { connect } from 'react-redux';
import Favorite from '../components/Favorite'
import * as loginActions from '../actions/Login';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(loginActions, dispatch),
});

export default connect(
    mapDispatchToProps
)(Favorite);