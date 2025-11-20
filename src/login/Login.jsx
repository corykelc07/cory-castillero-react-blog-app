import React, { useState } from 'react'
import { useAuth, useUsername } from '../authWrapper/AuthContext';
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const username = useUsername();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();
        
        login(userData.username, userData.password);
        navigate('/posts');
    }
    return (
        <div className = 'flex justify-center items-start min-h-screen bg-gray-100 px-4 pt-20'>
            <div className  = 'w-full max-w-lg bg-white rounded-2xl shadow-md border border-gray-200 p-8'>
                <h1 className='text-3xl font-bold mb-6 text-center'>Login</h1>

                    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
                    <input required placeholder='Username' className='border rounded px-4 py-2' value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value }) } />
                    <input required placeholder='Password' type='password' className ='border rounded px-4 py-2' value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value }) } />
                    <button type='submit' className='bg-yellow-400 w-fit px-8 py-2 rounded-2xl text-white mx-auto'>Submit</button>
                    </form>
                
            </div>
        </div>
    )
}

export default Login
