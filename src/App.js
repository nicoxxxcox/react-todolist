import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    tasks: [],
    taskInput: "",
  };

  handleTaskInput = (e) => {
    this.setState({ taskInput: e.currentTarget.value });
  };

  handleCheck = (id) => {
    const taskscopy = this.state.tasks.slice();
    const index = taskscopy.findIndex((task) => task.id === id);
    taskscopy[index].checked = true

    this.setState({ tasks: taskscopy });


  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const body = this.state.taskInput;
    const newTask = { id: id, body: body, checked: false };
    const alltasks = this.state.tasks.slice();
    alltasks.push(newTask);
    this.setState({ tasks: alltasks, taskInput: '' });
  };

  render() {
    return (
      <div className="App">
        <div className="card">
          {this.state.tasks.filter(task => !task.checked).map((task) => {
            return (
              <li id={task.id} key={task.id}>
                {task.body}{" "}
                <span>
                  <input
                    onChange={(e) => this.handleCheck(task.id, e)}
                    type="checkbox"
                  />
                </span>
              </li>
            );
          })}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              value={this.state.taskInput}
              onChange={this.handleTaskInput}
            />
            <button type="submit">+ Element de liste</button>
          </form>



            {this.state.tasks.filter(task => task.checked).map(task => {
            return (
              <li id={task.id} key={task.id}>
                <s>{task.body}</s>{" "}
                <span>
                  <input
                    onChange={() => this.handleCheck(task.id)}
                    type="checkbox"
                  />
                </span>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
