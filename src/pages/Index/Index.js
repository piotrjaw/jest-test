import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IndexActions from './Index.actions';
import List from '../../components/List';

class IndexComponent extends PureComponent {
  render() {
    return (
      <div>Index</div>
    );
  }
}

const mapStateToProps = ({ index }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(IndexActions, dispatch)
});

const Index = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexComponent);

export default Index;
