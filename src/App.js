import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const inputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(inputRef.current);
  };

  return (
    <div className="App">
      <form>
        {/*Управляемый компонет*/}
        {/*Управляемый компонет*/}
        {/*Управляемый компонет*/}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/*Неуправляемый компонент*/}
        {/*Неуправляемый компонент*/}
        {/*Неуправляемый компонент*/}
        {/*<input ref={inputRef} type="text" />*/}
        <MyInput ref={inputRef} type="text" placeholder="Описание" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
