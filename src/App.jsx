import "./css/App.css";
import ToDoList from "./components/ToDoList";
import UserCard from "./components/UserCard/UserCard";
import avatarAhry from "./assets/avatarAhry.jpg";
import Clock from "./components/Clock";
import ImageGalery from "./components/ImageGallery/ImageGallery";
import Button from "./Button";

function App() {
  const handleButtonClick = (buttonName) => {
    console.log(`Button ${buttonName} was clicked!`);
  }
  const start = "Старт";
  const stop = "Стоп";
  return (
    <>
      <MainTask />
      <Extra1 />
      <Extra2 />
      <Extra3 />
      <hr />
      <h3>Extra 4 - buttons</h3>
      <Button 
      label={start}
      onClickHandler={()=> handleButtonClick(start)}
       />
             <Button 
      label={stop}
      onClickHandler={()=> handleButtonClick(stop)}
       />

    </>
  );
}

function MainTask() {
  const toDo = ["Clean house", "Eat food"];
  const mainTask = "Main task - todo list";
  return (
    <>
      <ToDoList initialTasks={toDo} title={mainTask} />
      <hr />
    </>
  );
}

function Extra1() {
  const avatar2 = "/avatar2.jpg";
  const users = [
    { name: "I`m quien~", city: "Seoul", avatar: avatarAhry },
    { name: "Sweet dreams", city: "Ionia", avatar: avatar2 },
    {},
  ];

  return (
    <>
      <h3>Extra 1 - UserCards</h3>
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

function Extra2() {
  return (
    <>
      <h3>Extra 2 - Clocks</h3>
      <Clock />
      <hr />
    </>
  );
}

function Extra3() {
  const images = [
    {
      src: "/gallery1.jpg",
      alt: "Ivan from Alien Stage",
    },
    {
      src: "/gallery2.jpg",
      alt: "Cosmo cat!",
    },
    {
      src: "/gallery3.jpg",
      alt: "Cute kitten in flowers",
    },
    {
      src: "/gallery4.jpg",
      alt: "Cat paw!",
    },
  ];

  return (
    <>
      <h3>Extra 3 - Image Gallery</h3>
      <ImageGalery images={images} />
      <hr />
    </>
  );
}


export default App;
