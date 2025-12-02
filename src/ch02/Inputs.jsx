import { useState } from "react";

function Inputs() {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");

    const onChangeNameInput = (e) => {
        setFullName(e.target.value);

    }
    const onChangeAgeInput = (e) => {
        setAge(e.target.value)
    }

    return <>
        <input type="text" value={fullName} onChange={onChangeNameInput} placeholder="이름" />
        <input type="text" value={age} onChange={onChangeAgeInput} placeholder="나이" />
        <h2>이름: {fullName} </h2>
        <h2>나이: {age} </h2>
    </>
}

export default Inputs;