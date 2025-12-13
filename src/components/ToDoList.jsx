/**Создайте компонент TodoList, который позволяет пользователю добавлять задачи в список дел. Компонент должен использовать this.props и this.state.
 */

import React from "react";

class ToDoList extends React.Component {
  state = {
    //if we have tasks and to use props)
    tasks: this.props.initialTasks || [],
    newTask: "",
    errorMessage: "",
  };

  //setting new Task inut vaaluue from what was typed
  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
      errorMessage: "",
    });
  };

  //to use enter key to add task
  handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleAddTask();
    }
  };

  //adding new tasks to the list. if empty - do nothing
  handleAddTask = () => {
    if (this.state.newTask.trim() === "") {
      this.setState({ errorMessage: "Cannot add an empty task." });
      return;
    }
    if (this.state.tasks.includes(this.state.newTask.trim())) {
      this.setState({ errorMessage: "This task already exists." });
      return; //no repeats
    }

    console.log(this.state.newTask);
    this.setState(
      (prevState) => ({
        tasks: prevState.tasks.concat(prevState.newTask),
        newTask: "",
        errorMessage: "",
      }),
      () => {
        console.log("State updated:", this.state.tasks);
      }
    );
  };


  //adding list item, but if empty - do nothing
  addListItem = (task, index) => {
    if (!task) {
      return null;
    }
    return <li key={index}>{task}</li>;
  };

  //return component
  render() {
    //to use props2
    const title = this.props.title || "ToDo List";
    return (
      <div>
        <h2>{title}</h2>
        {/**input text field. two handles - to add new state and to use enter key */}
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
          onKeyDown={this.handleEnterKey}
          placeholder="Enter a new task"
        />
        {/**button to add new task */}
        <button onClick={this.handleAddTask}>Add Task</button>
        {/**change list of tasks */}
        <ul>{this.state.tasks.map(this.addListItem)}</ul>
        <p style={{ color: "red" }}>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default ToDoList;
