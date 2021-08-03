import { connect } from 'react-redux';
import Login from '../components/Login'
import * as loginActions from '../actions/Login';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(loginActions, dispatch),
});

export default connect(
    mapDispatchToProps
)(Login);