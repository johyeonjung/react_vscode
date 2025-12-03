import { useState } from "react";

function UseEffect01_1() {
    let [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    
    const handleNum1OnClick = () => {
        setNum1(prev => {
            const newNum1 = prev +1;
            setResult(newNum1 + num2);
            return newNum1;
        });
    };
    const handleNum2OnClick = () => {
        setNum2(prev => {
            const newNum2 = prev +1;
            setResult(newNum2 + num1);
            return newNum2;
        });
    };
  return <>
  <button onClick={handleNum1OnClick}>{num1}</button>
  <button onClick={handleNum2OnClick}>{num2}</button>
  <h2>{num1} + {num2} = {result}</h2>
  </>
}

export default UseEffect01_1;