import React, { useState } from 'react';
import useTheme from '../useTheme';

function Register() {
    const [ theme ] = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ status, setStatus ] = useState('Subscribe to our Newsletter!');

    const submitForm = async (e) => {
        e.preventDefault();
        setStatus('Thank you for subscribing!');
        e.target.reset();

        let registerEmail = {
            name: name,
            email: email,
        } 
        if ( registerEmail === '') {
          // setResult({
            //   message: 'Please fill out all fields';
            //   console.log('ERROR')
        
        } else {

    let response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(registerEmail),
    });
    if (response) {
        console.log('EMAIL ADDED')
    }
    }
}
    return (
        <div className='register-container'>
            <h2 className='register-title'>{status}</h2>
            <form onSubmit={submitForm} className='register-form'>
                <input className='register-input' type='text' placeholder='Name'onChange={(e) => setName(e.target.value)}></input>
                <input className='register-input' type='text' placeholder='email@example.com' onChange={(e) => setEmail(e.target.value)} ></input>
                <button className='register-input' type='submit'>Submit</button>
            </form>
        </div>
        
    )
}

export default Register;