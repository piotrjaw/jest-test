import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Input extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = { value: '' };

  clear = () => this.setState(
    () => ({ value: '' }),
    () => this.props.onChange({ target: { value: '' } })
  );

  handleChange = (e) => {
    e.persist();
    this.setState(
      () => ({ value: e.target.value }),
      () => this.props.onChange(e)
    );
  }

  render() {
    return (
      <input
        type="text"
        value={ this.state.value }
        onChange={ this.handleChange }
      />
    );
  }
}
