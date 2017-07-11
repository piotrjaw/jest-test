import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Row.scss';

const Row = ({
  entry: { text, checked, _id },
  onCheckClick,
  onDeleteClick
}) => {
  const handleCheckClick = () => onCheckClick(_id, !checked);

  const handleDeleteClick = () => onDeleteClick(_id);

  return (
    <div className="jt-Row">
      <div
        className="jt-Row__text"
        style={ {
          textDecoration: checked ? 'line-through' : 'none'
        } }
      >
        { text }
      </div>
      <Button
        className="jt-Row__check-button"
        onClick={ handleCheckClick }
      >
        { checked ? 'Uncheck' : 'Check' }
      </Button>
      <Button
        className="jt-Row__delete-button"
        onClick={ handleDeleteClick }
      >
        Delete
      </Button>
    </div>
  );
}

Row.PropTypes = {
  entry: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }).isRequired
};

export default Row;
