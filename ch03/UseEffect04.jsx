import { useEffect, useState } from "react";


function UseEffect04() {
    //num상태
    // num 상태의 제곱 값을 화면에 출력하시오
    // 단 처음 num이 0일 때는 
    // 숫자를 증가시켜 결과를 확인하세요
    // 라는 안내메세지를 alert으로 출렧하기
    // 최소값 0 밑으로는 내려갈 수 없음
    const [num, setNum] = useState(0);
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        //화면에 나타남 = 마운트
        setResult(num ** 2);
         if(num === 0) {
            console.log(num);
            const timer = setTimeout(() => {
                alert("숫자를 증가시켜 결과를 확인하세요");
            },100);
            
        } 
        
    }, [num]);

    const plusClick = () => {
        setNum(num + 1);
    }
    const minusClick = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }

    return <>
    <h2>{num}</h2>
    <button onClick={plusClick}>1 증가</button>
    <button onClick={minusClick}>1 감소</button>
    <h2>{result}</h2>
    </>
}

export default UseEffect04;