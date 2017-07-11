import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';

export default class TaskAdder extends PureComponent {
  static propTypes = {
    onButtonClick: PropTypes.func.isRequired
  };

  state = {};

  handleButtonClick = () => {
    return this.props
      .onButtonClick(this.state.todo)
      .then(this.input.clear);
  }

  handleInputChange = (e) => this.setState(() => ({
    todo: e.target.value
  }));

  render() {
    return (
      <div>
        <Input
          ref={ (input) => this.input = input }
          onChange={ this.handleInputChange }
        />
        <Button
          onClick={ this.handleButtonClick }
        >
          Add task
        </Button>
      </div>
    );
  }
}
