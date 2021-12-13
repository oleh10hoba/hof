import * as loginAction from '../actions/auth';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Login from "../components/Login";



const mapStateToProps = ({ auth }) => ({
    isLogged: auth.isAuthenticated,

});



const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(loginAction,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);