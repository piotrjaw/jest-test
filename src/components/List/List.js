import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';

const List = ({ entries, onEntryCheckClick, onEntryDeleteClick }) => (
  <div
    className="jt-List"
  >
    { entries && entries.map((entry) => (
      <Row
        className="jt-List__entry"
        key={ entry._id }
        entry={ entry }
        onCheckClick={ onEntryCheckClick }
        onDeleteClick={ onEntryDeleteClick }
      />
    )) }
  </div>
);

List.propTypes = {
  entries: PropTypes.array
};

List.defaultProps = {
  entries: []
};

export default List;
