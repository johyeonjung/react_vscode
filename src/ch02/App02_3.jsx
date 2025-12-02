import { useState } from "react";

function App02_3() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

function TodoInput({ todos, setTodos }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = () => {
    const todo = {
      content: value,
      writeDate: new Date().toLocaleString(), // 수정
    };

    setTodos([...todos, todo]);
    setValue("");
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleOnChange} />
      <button onClick={handleOnClick}>등록</button>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>
          내용: {todo.content} | 작성일: {todo.writeDate}
        </li>
      ))}
    </ul>
  );
}

export default App02_3;
