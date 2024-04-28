import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../util/Django';


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
        <div >

            <div>이메일 : </div>
                <input id='email' name='email' type='email' onChange={(e)=> setEmail(e.target.value)} />
            <div>비밀번호 : </div>
                <input id='password' name='password' type='password' onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=> loginHandler()}> 로그인</button>
        </div>
    );
};

export default Login;