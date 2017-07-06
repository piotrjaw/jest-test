import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ToDoActions from './ToDo.actions';

class ToDoComponent extends PureComponent {
  render() {
    return (
      <div>Todo</div>
    );
  }
}

const mapStateToProps = ({ toDo }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ToDoActions, dispatch)
});

const ToDo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoComponent);

export default ToDo;
