import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IndexActions from './Index.actions';

class IndexComponent extends PureComponent {
  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = ({ index }) => ({
  todos: index.todos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(IndexActions, dispatch)
});

const Index = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexComponent);

export default Index;
