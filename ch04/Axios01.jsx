import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

function Axios01() {
     const [users, setUsers] = useState([]);
     const [refetch, setRefetch] = useState(true);
    
     getUsersApi();
 
     const getUsersApi = async () => {
        console.log("콘솔");
        if(refetch){
            const response = await axios.get("http://192.168.2.101:8080/users")
            console.log(response.data);
            setUsers(response.data);
            setRefetch(false);
    }  
}
useEffect( () => {
    console.log("userEffect!!");
})
// useEffect ( () => {
//     axios.get("http://192.168.2.101:8080/users")
//         .then(response => {
//             console.log(response);
//             setUsers(response.data);
//         });

// },[]);

const handleInputOnKeyDown = (e) => {
    console.log(e);
    if(e.KeyCode === 13) {
        
    }
}

const handleSearchOnClick = () => {

}   


    return <>
    <input type="text" name="username" 
    value={inputValue.username} 
    onChange={handleInputOnChange}
    onKeyDown={handleInputOnKeyDown}/>
    <button onClick={handleSearchOnClick}>검색</button>
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role1</th>
                    <th>role2</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u=> <tr>
                        <td>{u.username}</td>
                        <td>{u.password}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.roles[0]}</td>
                        <td>{u.roles[1]}</td>

                    </tr>)
                }

            </tbody>
        </table>
    </>
}

export default Axios01;