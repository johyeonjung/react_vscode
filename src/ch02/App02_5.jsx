import { useState } from "react";

function App02_5() {
    const [todos,setTodos] =useState([]);
    
    return <>
    <TodoInput todos = {todos} setTodos={setTodos}/>
    <TodoList todos={todos} />
    </>
}


function TodoInput({todos, setTodos}) {
    const [value, setValue] = useState({
        writer: "",
        content: "",
    });

    const handleOnChange = (e) => {
        const { name, value:inputValue } = e.target;
        setValue({
            ...value,
            [name]: inputValue,
        });
    }
    const handleOnClick = () => {
        const todo = {
            ...value,
            // content : value.content,
            Date : new Date().toLocaleString(),
            // writer: value.writer,
        };
        setTodos([...todos, todo]);
        setValue({
            writer:"",
            content:"",
    });
        
    }

    return <div>
    <input type="text" name="writer" value={value.writer} onChange={handleOnChange} placeholder="작성자"/>
    <input type="text" name="content" value={value.content} onChange={handleOnChange} placeholder="내용"/>
    <button onClick={handleOnClick}>등록</button>
    </div>
}
function TodoList({todos}) {
    return <ul>
        {
        todos.map(a => <li> 
            내용 : {a.content} 작성일 : {a.Date}
            작성자 : {a.writer}
            </li>)
        }
        
    </ul>
    
}


export default App02_5;