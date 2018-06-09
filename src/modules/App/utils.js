import uniqueId from 'lodash/uniqueId'; // reduce import cost to 2.2K

export const createTodo = text => ({
  id: uniqueId('todo_'),
  text
});
