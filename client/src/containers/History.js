import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import History from "../components/History";
import * as historyActions from '../actions/history';


const mapStateToProps = ({ history }) => ({
    history: history.items
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(historyActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(History);