import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        //setStatus('Sending email');
        e.target.reset();

        let registerEmail = {
            name: name,
            email: email,
        } 
        if ( registerEmail === '') {
           // setResult({
               // message: 'Please fill out all fields'
               console.log('ERROR')
            
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
        <div>
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Name'onChange={(e) => setName(e.target.value)}></input>
                <input type='text' placeholder='email@example.com' onChange={(e) => setEmail(e.target.value)} ></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register;