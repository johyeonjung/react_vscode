import axios from "axios";
import { useState } from "react";

function Axios02_2() {
    const [inputValue, setInputValue] = useState({
        username: "",


    });
    const [users, setUsers] =useState([]);

    const getUserApi = async () => {
        const response = await axios.get("http://192.168.2.101:8080/users", 
            {params : {username: inputValue.username}});
        setUsers(response.data);
    };
    

    const handleSearchOnClick = () => {

    }

    return <>
    <input type="text" value={inputValue.username} />
    <button onClick={handleSearchOnClick}>검색</button>
    <table>
        <thead> 
            <tr>
                <td>username</td>
                <td>password</td>
                <td>name</td>
                <td>email</td>
                <td>role1</td>
                <td>role2</td>
            </tr>
        </thead>
        <tbody>
            {users.map((u) => (<tr>
                <td>{u.username}</td>
                <td>{u.password}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.roles[0]}</td>
                <td>{u.roles[1]}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
}

export default Axios02_2;