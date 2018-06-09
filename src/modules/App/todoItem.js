import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo: { text, id }, onClickDelete }) => (
  <div className="todo-item">
    {text}
    <span onClick={() => onClickDelete(id)}>&times;</span>
  </div>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  onClickDelete: PropTypes.func
};

TodoItem.defaultProps = {
  onClickDelete: () => { alert('Not Implemented Yet'); }
};
