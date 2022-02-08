import React, { Component } from "react";
import Task from "./Task";
import Form from "./Form";
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

    if (!taskscopy[index].checked) {
      taskscopy[index].checked = true;
    } else {
      taskscopy[index].checked = false;
    }

    this.setState({ tasks: taskscopy });
  };

  handleClick = (id) => {
    const taskscopy = this.state.tasks.slice();
    const index = taskscopy.findIndex((task) => task.id === id);

    taskscopy.splice(index, 1)

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
        <h1 className="title-1">Ma Todolist</h1>
        <Form
          onSubmit={this.handleSubmit}
          onChange={this.handleTaskInput}
          taskInput={this.state.taskInput}
        />

        {this.state.tasks
          .filter((task) => !task.checked)
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              body={task.body}
              onChange={this.handleCheck}
            />
          ))}


        {this.state.tasks
          .filter((task) => task.checked)
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              body={task.body}
              checked={task.checked}
              onChange={this.handleCheck}
              onClick={this.handleClick}
            />
          ))}
      </div>
    );
  }
}

export default Todolist;
