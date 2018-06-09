import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './todoItem';
import { EmptyList } from './emptyList';

export const TodoList = ({ todos, onClickDelete }) => (
  todos.length > 0 ?
    todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onClickDelete={onClickDelete}
      />
    ))
    :
    <EmptyList />
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })),
  onClickDelete: PropTypes.func
};

TodoList.defaultProps = {
  todos: [],
  onClickDelete: () => { alert('Not implemented yet!'); }
};
