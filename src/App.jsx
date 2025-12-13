import "./css/App.css";
import ToDoList from "./components/ToDoList";
import UserCard from "./components/UserCard/UserCard";
import avatarAhry from "./assets/avatarAhry.jpg";

function App() {
  return (
    <>
      <Task1 />
      <Task2 />
    </>
  );
}

function Task1() {
  const toDo = ["Clean house", "Eat food"];
  const mainTask = "Main task - todo list";
  return (
    <>
      <ToDoList initialTasks={toDo} title={mainTask} />
      <hr />
    </>
  );
}

function Task2() {
  const avatar2 = "/avatar2.jpg";
  const users = [
    { name: "I`m quien~", city: "Seoul", avatar: avatarAhry },
    { name: "Sweet dreams", city: "Ionia", avatar: avatar2 },
    {},
  ];

  return (
    <>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          city={user.city}
          avatar={user.avatar}
        />
      ))}
      <hr />
    </>
  );
}

export default App;
