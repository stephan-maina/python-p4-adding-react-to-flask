import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    // Fetch tasks from your Flask API here and update the state
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => this.setState({ tasks: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Task List</h1>
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
