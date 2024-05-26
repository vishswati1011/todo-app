
import React from 'react';
import { useCreateUserMutation } from '../user/rtk/userSlice';

function AddUserForm(props) {

    const [createUser , {isSuccess} ]= useCreateUserMutation();

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
    const handleSave =async (e) => {
        e.preventDefault();
        await createUser(inputValue);
    }
    
    if(isSuccess){
        alert("User Added Successfully");
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


export default AddUserForm;