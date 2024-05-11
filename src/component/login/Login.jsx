import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../util/Django.js'
import { FaUser, FaLock } from "react-icons/fa";

import '../styles/loginForm.css';


const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
    const loginHandler = () => {
        const data = {
            email: email,
            password: password
        }

        axios
        .post(`${API_URL}/user/login/`, data)
        .then((response) => {
            console.log(response)
            const access = response.data['access'];
            const refreshToken = response.data['refresh'];

            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refreshToken);
            console.log(access);
            console.log(refreshToken);
            navigate('/main');
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input id='email' name='email' type='email' placeholder='email' required onChange={(e)=> setEmail(e.target.value)} /><FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input id='password' name='password' type='password' placeholder='password' required onChange={(e)=> setPassword(e.target.value)} /><FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label> <input type='checkbox' />아이디 저장</label>
                    <a href='#'>비밀번호 찾기</a>
                </div>
                <button onClick={()=> loginHandler()}> Login</button>

                <div className='register-link'>
                    <p>계정이 없으신가요?<a href='signup'>회원가입 </a></p>
                </div>
            </form>
        </div>        
    );
};

export default Login;
