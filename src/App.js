import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    textInput: "",
  };

  handleTextInput = (e) => {
    this.setState({ textInput: e.currentTarget.value });
  };

  handleCheck = (id, e) => {
    const itemscopy = this.state.items.slice();
    const index = itemscopy.findIndex((item) => item.id === id);
    itemscopy[index].checked = true

    this.setState({ items: itemscopy });


  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const body = this.state.textInput;
    const newtodo = { id: id, body: body, checked: false };
    const allTodos = this.state.items.slice();
    allTodos.push(newtodo);
    this.setState({ items: allTodos, textInput: '' });
  };

  render() {
    return (
      <div className="App">
        <div className="card">
          {this.state.items.filter(item => !item.checked).map((item) => {
            return (
              <li id={item.id} key={item.id}>
                {item.body}{" "}
                <span>
                  <input
                    onChange={(e) => this.handleCheck(item.id, e)}
                    type="checkbox"
                  />
                </span>
              </li>
            );
          })}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              value={this.state.textInput}
              onChange={this.handleTextInput}
            />
            <button type="submit">+ Element de liste</button>



            {this.state.items.filter(item => item.checked).map((item) => {
            return (
              <li id={item.id} key={item.id}>
                <s>{item.body}</s>{" "}
                <span>
                  <input
                    onChange={(e) => this.handleCheck(item.id, e)}
                    type="checkbox"
                  />
                </span>
              </li>
            );
          })}
          </form>
        </div>
      </div>
    );
  }
}

export default App;
