import React from 'react';
import { CREATE_USER } from './graphql/mutation';
import { useMutation } from '@apollo/client';

function AddUserForm() {

    const [createUser , {data,loading,error}] = useMutation(CREATE_USER);


    const [inputValue,setInputValue] = React.useState({
        username:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {
        let {name,value} = e.target;
        setInputValue((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSave =async (e) => {
        e.preventDefault();
        await createUser({variables : inputValue});
    }
    
   if(loading)  return ( <p>Loading...</p> )
    
    
    return (
        <div>
            <form onSubmit={(e)=>handleSave(e)}>
            <input type="text" placeholder="Username" name="username" onChange={(e)=>handleChange(e)} />
            <input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)} />
            <input type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e) }/>
            <button type="submit">Add User</button>
            </form>
            {error && <p>Error: {error.message}</p>}
            {data && <p>User added successfully: {data.createUser.username}</p>}
   
        </div>
    )
}


export default AddUserForm;
