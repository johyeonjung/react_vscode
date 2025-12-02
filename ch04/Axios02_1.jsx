function Axios02_1() {
    const [inputValue, setInputValue] = setState({
        username: "",
    });
    const [users, setUsers] = useState([]);

    const getUserApi = async () => {
        const response = await axios.get("http://192.168.2.101:8080/users", 
            {params: {username: inputValue.username}});
            setUsers(response.data);
    };

    const handleInputOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    }

    const handleInputOnKeyDown = (e) => {
        console.log(e);
        if(e.keyCode === 13) {
            getUserApi();
        }
    }

    const handleSearchOnClick = () => {
        getUserApi();
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
    </table>
    <tbody>
        {
            users.map(u=> <tr>
                <td>{u.username}</td>
                <td>{u.password}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.rodles[0]}</td>
                <td>{u.roles[1]}</td>

            </tr>

            )
        }
    </tbody>
    </>
    
}

export default Axios02_1;