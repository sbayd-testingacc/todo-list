import React, { Component } from 'react';
import { TEXTS } from './constants';

// contains textInput and button, and allows user to create a new todo
export class TodoEditor extends Component {
  state = {
    value: this.props.initialValue || '',
  }

  // lets prevent unnecessary updates in this component
  shouldComponentUpdate(nextProps, nextState) {
    const { value } = this.state;
    return value !== nextState.value;
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  };
  
  handleNewTodo = () => {
    const { value } = this.state;
    this.props.onNewTodo(value);
    this.setState({ value: '' }); // Lets clear value for a friendly interface
  }

  // I am using seperate functions we can want things like event propagation.
  handleClickAdd = () => {
    this.handleNewTodo();
  }
  
  // Lets handle key events for accessibility standards.
  // Added: ability to create todo with enter key
  handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13 && !!this.state.value) {
      this.handleNewTodo();
    }
  }

  render() {
    return (
      <div className="todo-input">
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder={TEXTS.placeholder}
          type="text"
          value={this.state.value}
        />
        <button
          disabled={!this.state.value}
          onClick={this.handleClickAdd}
        >
          {TEXTS.addButton}
        </button>
      </div>
    );
  }
}
