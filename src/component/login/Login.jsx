import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../util/Django';
import { FaUser, FaLock } from "react-icons/fa";

import '../styles/loginForm.css';


const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    // const navigate = useNavigate();
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
            // navigate('/main');
            
        })
        .catch((error) => {
            alert("아이디 또는 비밀번호가 다릅니다.")
            console.log(error);
        })
    }

    const handleSubimt = (e) => {
        e.preventDefault();
        loginHandler();
    }



    return (
        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={handleSubimt}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input id='email' name='email' type='email' placeholder='email' autoComplete="on" required onChange={(e)=> setEmail(e.target.value)} /><FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input id='password' name='password' type='password' placeholder='password' autoComplete="off" required onChange={(e)=> setPassword(e.target.value)} /><FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label> <input type='checkbox' />아이디 저장</label>
                        <Link to={"/signup"} >비밀번호 찾기</Link>
                    </div>
                    <button> Login</button>   
                    <div className='register-link'>
                        <div>계정이 없으신가요?<Link to="/signup">회원가입 </Link></div>
                    </div>
                </form>
            </div>    
        </div>
    );
};

export default Login;