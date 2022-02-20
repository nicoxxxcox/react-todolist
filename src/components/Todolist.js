import React, { useState } from "react";
import Task from "./Task";
import TaskCount from "./TaskCount";
import Form from "./Form";
import "./Todolist.css";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskinput] = useState("");

  const handleTaskInput = (e) => {
    setTaskinput(e.currentTarget.value);
  };

  const handleCheck = (id) => {
    const taskscopy = tasks.slice();
    const index = taskscopy.findIndex((task) => task.id === id);

    if (!taskscopy[index].checked) {
      taskscopy[index].checked = true;

    } else {
      taskscopy[index].checked = false;
    }

    setTasks(taskscopy);
  };

  const handleClick = (id) => {
    const taskscopy = tasks.slice();
    const index = taskscopy.findIndex((task) => task.id === id);

    taskscopy.splice(index, 1);

    setTasks(taskscopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const body = taskInput;
    const newTask = { id, body, checked: false };
    const alltasks = tasks.slice();
    alltasks.unshift(newTask);
    if (body !== "") {
      setTasks(alltasks);
      setTaskinput("");
    }
  };

  return (
    <div className="card">
      <h1 className="title-1">Ma Todolist</h1>
      <TaskCount count={tasks.length} />
      <Form
        onSubmit={handleSubmit}
        onChange={handleTaskInput}
        taskInput={taskInput}
      />

      {tasks
        .filter((task) => !task.checked)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            body={task.body}
            onChange={handleCheck}
            className="fadein"
          />
        ))}

      {tasks
        .filter((task) => task.checked)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            body={task.body}
            checked={task.checked}
            onChange={handleCheck}
            onClick={handleClick}
            className="fadeout"
          />
        ))}
    </div>
  );
};

export default Todolist;
