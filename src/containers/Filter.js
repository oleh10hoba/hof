import { connect } from 'react-redux';
import * as filterActions from '../actions/filter';
import { bindActionCreators } from 'redux';
import Filter from '../components/Filter';

const mapStateToProps = ({ products, filter }) => ({
    filterBy: filter.filterBy,
  });

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);