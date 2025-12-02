import { useState } from "react";
import "./style.css";

function App02() {
    const [ name, setName ] = useState("기본 이름"); //input의 value 값이 변하면  
    const [name2, setName2] = useState(""); // 확인버튼이 눌러지면 
    const [age, setAge] = useState("");
    const [age2, setAge2] = useState("");

    const data = {
        title: "리액트 기초 시작",
        nameValue: "기본 이름",
        age: "0",
    }

    const handleNameInputOnChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const handleAgeInputOnChange = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    }


    //handleOkOnClick
    const handleOkOnClick = () => {
        setName2(name);
        setAge2(age);
        setAge("");
        setName("");
    }
        const handleResetOnClick = () => {
        setName2("");
        setAge2("");
        setAge("");
        setName("");
    }
   


    return <div className="main-box">
        <div className="title-box">
            <h1>제목: {data.title}</h1>
        </div>
        <div className="input-box">
            <input type="text" value={name} onChange={handleNameInputOnChange} />
            <input type="text" value={age} onChange={handleAgeInputOnChange}/>
        </div>
        <div className="button-box">
            <button onClick={handleOkOnClick}>확인</button>
            <button onClick={handleResetOnClick}>초기화</button>
        </div>
        <div className="display-box">
            <ul>
                <li>이름: {name2}</li>
                <li>나이: {age2} </li>
            </ul>
        </div>
    </div>
}

export default App02;