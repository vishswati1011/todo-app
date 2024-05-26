import React from 'react';
import AddUserForm from './createUser';
import { useFetchUserQuery } from '../user/rtk/userSlice';


function UserTable (){

    const {data, error, isLoading} = useFetchUserQuery();
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Oops! Something went wrong</div>
    }
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
                    {data &&
                        data?.map((item, key) => (
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
    return (
        <div>
            <AddUserForm/><br/>
            <UserTable/>
        </div>
    );
}

export default User;