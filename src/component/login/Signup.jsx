import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../util/Django';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// import '../../styles/signup.css';


const Signup = () => {
    const [username, setUserName] = useState("");
    const [nickname, setNickName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [checkPassword, setCheckPassword] = useState("");
    const [occupation, setOccupation] = useState("");
    const navigate = useNavigate();
    
    const signupHandler = () => {
        const data = {
            username: username,
            nickname:nickname,
            email: email,
            password: password,
            occupation: occupation
        }

        axios
        .post(`${API_URL}/user/signup/`, data)
        .then((response) => {
            console.log(response)
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <div>
            <div className='containers'>
                <div style={{ width: "100%", height: "10px"}}></div>
            <h2 style={{textAlign:"center"}}>회원가입</h2>
                <div className='sign-info'>
                    <div className='sign-font'>이름</div>
                <TextField
                    fullWidth
                    label="이름"
                    id="outlined-size-small"
                    size="small"
                    onChange={(e)=> setUserName(e.target.value)} 
                />
                </div>

                <div className='sign-info'>
                    <div className='sign-font'>닉네임</div>
                <TextField
                    fullWidth
                    label="닉네임"
                    id="outlined-size-small"
                    size="small"
                    onChange={(e)=> setNickName(e.target.value)} 
                />
                </div>


                <div className='sign-info'>
                    <div className='sign-font'>이메일</div>
                <TextField
                    fullWidth
                    label="이메일"
                    id="outlined-size-small"
                    size="small"
                    onChange={(e)=> setEmail(e.target.value)} 
                />
                </div>


                <div className='sign-info'>
                    <div className='sign-font'>비밀번호</div>
                <TextField
                    fullWidth
                    label="비밀번호"
                    id="outlined-size-small"
                    size="small"
                    onChange={(e)=> setPassword(e.target.value)} 
                />
                </div>
                <div className='sign-info'>
                   <div>비밀번호 확인</div>
                    <TextField
                        fullWidth
                        label="비밀번호 확인"
                        id="outlined-size-small"
                        size="small"
                        onChange={(e)=> setCheckPassword(e.target.value)} 
                    />
                </div>

                <div className='sign-info'>
                   <div className='sign-font'>직업</div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">직업선택</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={occupation}
                        label="직업선택"
                        onChange={(e)=> setOccupation(e.target.value)} 
                        >
                        <MenuItem value={1}>개발자</MenuItem>
                        <MenuItem value={2}>디자이너</MenuItem>
                        <MenuItem value={3}>매니저</MenuItem>
                        <MenuItem value={4}>기타</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='sign-button'>
                    <div><span className='login-name'>로그인 화면으로 돌아가기 </span><span className='sign-button'><Button variant="contained" onClick={()=> signupHandler()}>회원가입</Button></span></div>
                </div>
            </div>
            </div>

        </>
        

    );
};

export default Signup;