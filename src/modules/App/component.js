import React, { Component } from 'react';
import { TodoList } from './todoList';
import { TodoEditor } from './todoEditor';
import { Header } from './header';
import { TEXTS } from './constants';
import { createTodo } from './utils';
import { Container } from './container';

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    const initialTodo = createTodo(TEXTS.initialTodo);
    this.state = {
      todos: [initialTodo]
    };
  }

  handleNewTodo = (text) => {
    const { todos } = this.state;
    const newTodo = createTodo(text);
    this.setState({ todos: [ ...todos, newTodo ] });
  };

  handleClickDelete = id => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  }

  render() {
    const { todo, todos } = this.state;
    const todoCount = todos.length;
    return (
      <Container>
        <Header
          todoCount={todoCount}
        />
        <TodoList
          todos={todos}
          onClickDelete={this.handleClickDelete}
        />
        <TodoEditor
          onNewTodo={this.handleNewTodo}
        />
      </Container>
    )
  }
}
