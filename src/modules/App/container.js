import React, { Component } from 'react';

export class Container extends Component {
  state = {
    error: false
  };

  // It would be better if we use this with a HOC
  componentDidCatch(error, stack) {
    this.setState({
      error
    });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="todo-list">
        {error ? 
          `¯\\_(ツ)_/¯ ups an error happened` :
          this.props.children
        }
      </div>
    );
  }

}
