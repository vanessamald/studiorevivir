import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Register() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // email registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // status and error messages
    const [ status, setStatus ] = useState('Subscribe to our Newsletter!');
    const [errorMessage, setErrorMessage] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        // reset form
        e.target.reset();

        // form info
        let registerEmail = {
            name: name,
            email: email,
            } 

        // if user enters no email and/or name set error message
        if ( !name || !email) {
            setErrorMessage('Please fill out all fields!')
        } else {
        let response = await fetch("/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(registerEmail),
        });
        // if response ok set status 
        if (response.ok) {
        const data = await response.json();
        setStatus('Thank you for subscribing!'); 
        } else {
            // set error message if subscription not successful
            setErrorMessage( 'Error occurred during registration');
        }
    }
}

    return (
          <div className='register-container'>
            <h2 className='register-title uppercase'>{status}</h2>
            <h2 className='register-title'>{errorMessage}</h2>
            <form onSubmit={submitForm} className='register-form'>
                <input className='register-input' type='text' placeholder='Name'onChange={(e) => setName(e.target.value)}></input>
                <input className='register-input' type='text' placeholder='email@example.com' onChange={(e) => setEmail(e.target.value)} ></input>
                <button className='register-input' type='submit'>Submit</button>
            </form>
        </div>
       
    )
}

export default Register;