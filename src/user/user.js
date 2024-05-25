import React from 'react';

function AddUserForm(props) {

    const [inputValue,setInputValue] = React.useState({
        firstName:"",
        lastName:"",
        phone:""
    });

    const handleChange = (e) => {
        let {name,value} = e.target;
        // setInputValue({
        //     ...inputValue,
        //     [name]: value
        // });
        setInputValue((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSave = (e) => {
        e.preventDefault();
        props.handleUserCreate(inputValue);
    }
    
    return (
        <div>
            <form onSubmit={(e)=>handleSave(e)}>
            <input type="text" placeholder="First Name" name="firstName" onChange={(e)=>handleChange(e)} />
            <input type="text" placeholder="Last Name" name="lastName" onChange={(e)=>handleChange(e)} />
            <input type="text" placeholder="Phone" name="phone" onChange={(e)=>handleChange(e) }/>
            <button type="submit">Add User</button>
            </form>
        </div>
    )
}
function UserTable (props){

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Firstname</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Lastname</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props &&
                        props?.users?.map((item, key) => (
                            <tr key={key}>
                                <td style={{ border: '1px solid black', padding: '10px' }}>{item?.firstName}</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>{item?.lastName}</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>{item?.phone}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );

}
function User() {
    const [users, setUsers] = React.useState([]);
    const handleUserCreate = (user) => {
            // let newUsers = [...users];
            // newUsers.push(user);
            // setUsers(newUsers);
            setUsers((prevuser)=>([
                ...prevuser,
                user
            ]))
    };
    return (
        <div>
            <UserTable users={users}/>
            <br />
            <AddUserForm handleUserCreate={handleUserCreate} />
        </div>
    );
}

export default User;