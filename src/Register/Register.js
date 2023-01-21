import React, { useState } from 'react';
import './Register.css';
import {Link,useNavigate} from 'react-router-dom';

export const  Register =() =>{

    const navigate = useNavigate();
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[contact,setContact] = useState('');
    const[password,setPassword] = useState('');
    
    const [flag,setFlag] = useState(false);
    

    const submitRegister = (e) =>
    {
        e.preventDefault();
        var array=[];
        const obj = {
            'name': name,
            'email' : email,
            'contact': contact,
            'password': password
        }
        let localvalue = localStorage.getItem('data');
        if (localvalue == null)
        {
            array.push(obj);
        }
        else
        {
            array=array.concat(JSON.parse(localvalue));
            array.push(obj);
        }
        localStorage.setItem('data', JSON.stringify(array));
        setName('');
        setEmail('');
        setContact('');
        setPassword('');
        
        navigate('/login');
        
    }

    const submitLogin = (e) =>{
        e.preventDefault();      
    }

    const goToLogin = () => {
        navigate('/login');
    }
    
    return(
        <div class = 'register-parent'>
        
            <div class = 'register'>
                <h2>Register</h2>
                <form action='#' onSubmit={submitRegister}>

                    <label>Full Name</label>&emsp;&emsp;&emsp;&emsp;
                    <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <br />
                    <label>Email</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <input type='text' name='Email' id='Email'value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <label>Contact Number</label>&emsp;
                    <input type='number' name='Contact' id='Contact'value={contact} onChange={(e) => setContact(e.target.value)}></input>
                    <br />
                    <label>Set Password</label>&emsp;&emsp;&ensp;
                    <input type='text' name='Password' id='Password'value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <button type='submit' id="Register">Register</button>
                    <br /><br />
                    <a href='/login'>Already have an account? login</a>

                </form>
                
            </div>
            
        </div>
    );
        
    
}
