import { useState } from "react";

function App02_4() {
    const [todos,setTodos] =useState([]);
    
    return <>
    <TodoInput todos = {todos} setTodos={setTodos}/>
    <TodoList todos={todos} />
    </>
}


function TodoInput({todos, setTodos}) {
    const [value, setValue] = useState("");

    const handleOnChange = (e) =>  {
    setValue(e.target.value);

}
    const handleOnClick = () => {
        const todo = {
            content : value,
            Date : new Date().toLocaleString(),
        };
        setTodos([...todos, todo]);
        setValue("");
        
    }

    return <div>
    <input type="text" value={value} onChange={handleOnChange}/>
    <button onClick={handleOnClick}>등록</button>
    </div>
}
function TodoList({todos}) {
    return (
    <ul>
        {
        todos.map(todo => <li> 
            내용 : {todo.content} 작성일 : {todo.Date}
            </li>)
        }
        
    </ul>
    )
}

export default App02_4;