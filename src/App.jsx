import React, { Component } from 'react';

class App extends Component {
  constructor(){
      super();

      this.state = {
        messages: [
          'Hello there! How are you?',
          'I am doing great! How are you doing?',
          'All is well. What are you upto these days?',
          'Haha! I left the country. I live abroad now :0'
        ]
      }
  }

  render() {
    // debugger;
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
