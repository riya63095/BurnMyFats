import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login =() =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const Navigate = useNavigate();
    const submitLogin = (e) =>{
        e.preventDefault();
        
        
        var localValue = JSON.parse(localStorage.getItem('data'));

        localValue.forEach((element) => {
            if(element.email === username){
                if(element.password === password)
                {
                    sessionStorage.setItem('user',element.name)
                    Navigate('/homepage')
                }
                else{
                    alert("wrong password")
                }
            }
            if(sessionStorage.getItem('user')==null)
            {
                alert('User does not exist');       
            }
            
        });
      
    }
    const switchtoRegister=()=>{
        Navigate('/register')
    }
    return(
        <div class='login-parent'>
            <div class='login'>        

                <h2>Login Form</h2>

                <form action='#' onSubmit={submitLogin}>

                    <label>Username </label>&emsp;                   
                    <input type='text' name='username' placeholder='username' id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password </label>&emsp;                    
                    <input type='password' name='password' placeholder='********' value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button  type='submit' id="login">Login</button><br /><br />
                    <a href='/register'>Don't have an account? Sign up</a>
                    

                </form>
            
            </div>
        </div>
    );
    
    
}

export default Login;