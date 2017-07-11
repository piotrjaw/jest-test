import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IndexActions from './Index.actions';
import List from '../../components/List';
import TaskAdder from '../../components/TaskAdder';

class IndexComponent extends PureComponent {
  componentDidMount() {
    this.getTodos();
  }

  getTodos = this.props.actions.getTodos;

  handleEntryAdd = (text) => this.props.actions
    .createTodo({
      text
    })
    .then(this.getTodos);

  handleEntryCheck = (_id, checked) => this.props.actions
    .updateTodo({
      _id,
      checked
    })
    .then(this.getTodos);

  handleEntryDelete = (_id) => this.props.actions
    .deleteTodo({ _id })
    .then(this.getTodos);

  render() {
    return (
      <div>
        <TaskAdder
          onButtonClick={ this.handleEntryAdd }
        />
        <List
          entries={ this.props.todos }
          onEntryCheckClick={ this.handleEntryCheck }
          onEntryDeleteClick={ this.handleEntryDelete }
        />
      </div>
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
