import axios from "axios";
import { useState } from "react";

function Axios05() {
    // 1. 상태 만들고
    const [ resp1Data, setResp1Data ] = useState("");
    const [ resp2Data, setResp2Data ] = useState({});
    const [ resp3Data, setResp3Data ] = useState([]);
    // const [ resp4Data, setResp4Data ] = useState({}); // 1번 방법
    const [ resp4Data, setResp4Data ] = useState({ // 2번 방법
        name : "",
        email : "",
        strs: [],
        respJsonDto2 : {
            address1 : "",
            address2 : "",
        }
    });

    const api = axios.create({
        baseURL: "http://localhost:8080"
    })

    const resp1OnClick = () => {
        // promise가 return하기 때문에 then 사용
        api.get("/resp/data1")
        .then((axiosResponse) => { // 요청 보내고 응답올 때 까지 비동기 큐에서 기다림
            console.log(axiosResponse); // 응답이 오면 then안의 함수가 실행 -> axiosResponse를 가지고 온다.
            setResp1Data(axiosResponse.data); // 2. 상태에다 응답 받은 데이터 넣어주고

        })
    }

    const resp2OnClick = () => {
        api.get("/resp/data2")
        .then((axiosResponse) => {
            console.log(axiosResponse);
            setResp2Data(axiosResponse.data);
        })
    }

    const resp3OnClick = () => {
        api.get("/resp/data3")
        .then((axiosResponse) => {
            console.log(axiosResponse);
            const num = axiosResponse.data.map(num => num * 10);
            setResp3Data(num);
        })
    }

    // 쌤 풀이
    //     const resp3OnClick = () => {
    //     api.get("/resp/data3")
    //     .then((axiosResponse) => {
    //         console.log(axiosResponse);
    //         setResp3Data(axiosResponse.data);
    //     })
    // }

    const resp4OnClick = () => {
        api.get("/resp/data4")
        .then((axiosResponse) => {
            console.log(axiosResponse);
            setResp4Data(axiosResponse.data);
        })
    }


    return <>
    <div>
        <button onClick={resp1OnClick}>resp1</button>
        <span>{resp1Data}</span> 
        {/* 3. 출력 */}
    </div>
    <div>
        <button onClick={resp2OnClick}>resp2</button>
        {/* <span>key1 : {resp2Data.key1}, key2 : {resp2Data.key2}</span> */}
        <span>
            {Object.entries(resp2Data).map(([key, value]) => {
                return `${key} : ${value}`;
            })}
        </span>
    </div>
    <div>
            <button onClick={resp3OnClick}>resp3</button>

        {/* 쌤 풀이 */}
        
        {/* <button onClick={resp3OnClick}>resp3</button>
        {
            resp3Data.map(data => <span>{data * 10} </span>)
        } */}
    </div>
    <div>
        <button onClick={resp4OnClick}>resp4</button>
        <ul>
            <li>이름 : {resp4Data.name}</li>
            <li>이메일 : {resp4Data.email}</li>
            <li>strs : {resp4Data.strs}</li>
            {/* 1번 방법 =>  ?? : respJsonDto2에서 address1이 null이면(참조할 수 없으면 ) => 참조하지 말아라는 의미, null인 경우 "주소없음" */}
            
            {/* <li>address1 : {resp4Data.respJsonDto2?.address1 ?? "주소 없음"}</li>
            <li>address2 : {resp4Data.respJsonDto2?.address2 ?? "주소 없음"}</li> */}

            {/* 2번 방법 =>  참조할 구조를 직접 만들어주기. null이 아니니까 OR로 해도 에러 안 남 */}

            <li>address1 : {resp4Data.respJsonDto2?.address1 || "주소 없음"}</li>
            <li>address2 : {resp4Data.respJsonDto2?.address2 || "주소 없음"}</li>
            
        </ul>

        {/* 3번 방법  */}
        {/* <ul>
            {Object.entries(resp4Data).map(([key, value]) => {
                console.log(typeof value)
                if (key === "respJsonDto2") {
                    return <>
                    {
                        Object.entries(value).map(([key2, value2]) => {
                            return <li> {key2} : {value2 || "주소없음"} </li>
                        })
                    }
                    </>
                }
                return <li>{key} : {value}</li>
            })}
        </ul> */}
    </div>
    {/* 파일 받을때는 axios 안쓴다. 데이터 받을때만 씀. */}
    <div>
        <a href="http://localhost:8080/resp/data5?filename=download_test.txt">download_test.txt</a>
    </div>
    <div>
        <a href="http://localhost:8080/resp/data6?filename=테스트.txt">테스트.txt</a>
    </div>
    
    </>
    
}



export default Axios05;