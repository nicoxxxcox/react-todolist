import React, { Component } from "react";
import Task from "./Task";
import "./Todolist.css";

class Todolist extends Component {
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

    if(!taskscopy[index].checked) {
      taskscopy[index].checked = true
    } else { taskscopy[index].checked = false}

    this.setState({ tasks: taskscopy });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const body = this.state.taskInput;
    const newTask = { id: id, body: body, checked: false };
    const alltasks = this.state.tasks.slice();
    alltasks.push(newTask);
    this.setState({ tasks: alltasks, taskInput: "" });
  };

  render() {
    return (
      <div className="card">
        {this.state.tasks.filter((task) => !task.checked).map((task) =>
            <Task key={task.id} id={task.id} body={task.body} onChange={this.handleCheck} />
            )}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.taskInput}
            onChange={this.handleTaskInput}
            />
          <button type="submit">+ Element de liste</button>
            {JSON.stringify(this.state)}
        </form>

        {this.state.tasks.filter((task) => task.checked).map((task) =>
          <Task key={task.id} id={task.id} body={task.body} checked={task.checked} onChange={this.handleCheck} />
          )}
      </div>
    );
  }
}

export default Todolist;
