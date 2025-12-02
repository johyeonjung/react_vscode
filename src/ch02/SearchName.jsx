import { useState } from "react";

function SearchName() {
    //input 하나를 만들고 입력된 이름과 값과 일치하는 나이를 h2태그 안에 출력하시오.
    const profiles = [
        {
            name : "김준일",
            age: "32",
        },
                {
            name : "김준이",
            age: "33",
        },
                {
            name : "김준삼",
            age: "34",
        },
    ] 
    const [result, setResult] = useState("찾은 결과 없음");
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setResult("찾은 결과 없음");

        for(let i =0; i < profiles.length; i++) {
            const profile = profiles[i];
            if(profile.name === e.target.value) {
                setResult(profile.age);
                break;
            } 
        }

        //forEach
        profiles.forEach(profiles => {
            const profile = e.target.value
            if(profile === profiles.name) {
                setResult(profile.age);
            }
        });
        //filter
        const foundProfiles = profiles.filter((profile) => {
            return profile.name === e.target.value;
        })
        if(!!foundProfiles.length) {
            setResult(foundProfiles[0].age);
        }
        //find
        const foundProfile = profiles.find((profiles) => {
            return profile.name === e.target.value;
        });
        if(!!foundProfile) {
            setResult(foundProfile.age);
        }
    }

    return <>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <h2>{result}</h2>
    </>
    } 
    
export default SearchName;