import React, { useEffect } from 'react';
import AddUserForm from './createUser';
import { useQuery } from '@apollo/client';
import { GET_USER } from './graphql/mutation';

function UserTable (){

    const {data,error,loading} =  useQuery(GET_USER);

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        // await users();
    }
    
    if(loading){
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
                        <th style={{ border: '1px solid black', padding: '10px' }}>Username</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>email</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data?.users?.map((item, key) => (
                            <tr key={key}>
                                <td style={{ border: '1px solid black', padding: '10px' }}>{item?.username}</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>{item?.email}</td>
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