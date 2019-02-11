import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          text: 'Learn HTML'
        },
        {
          text: 'Learn CSS'
        },
        {
          text: 'Learn JavaScript'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>MyTasks</h1>
        <ul>
          {this.state.data.map(item => {
            return <li>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
