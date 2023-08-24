import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';

function Contact() {
    const [ about, setAbout ] = useState('hidden-a');

    const contactText = 'Contact';

    // set state for contact form open/close 
    const [ show, setShow] = useState('hidden-contact');
    const [ show2, setShow2 ] = useState('hidden-form');

    const handleClick = () => {
        setShow('contact-show')
        setShow2('contact-form-container')
        console.log('HELLO CONTACT')
    }
    const handleClose = () => {
        setShow('hidden-contact');
        setShow('hidden-form');
    }

    // contact form status
    const [ status, setStatus ] = useState('Submit');

    // set state for contact form 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [option, setOption] = useState('');

    // set state for response 
    const [result, setResult] = useState(null);

    // handle sumbit form 
    const submitForm = async (e) => {
        e.preventDefault();
        //setStatus('Sending email');
        e.target.reset();
    
    let emailMessage = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        option: option
    } 

    // if field is blank set alert
    if ( emailMessage === '') {
        setResult({
            message: 'Please fill out all fields'
        })
    } else {
        let response = await fetch("/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(emailMessage),
        });
        if (response) {
            setResult({
                success: true, 
                message: 'Message was sent, we will get back to you shortly.'
        })
        } else {
            setResult({
                success: false, 
                message: 'Something went wrong, please try again later.'
            })
          }}
        }; 
    return (
    <div>
        <div className={show}>
            <div className={show2}>
            <div className='close-btn-container'>
                <div className='split-text-container'>
                    <SplitText text='Inquire' fontColor='theme-text-color'/>
                </div>
            
                <button className='close-btn' onClick={handleClose}>
                    <div className='close-container'>
                        <div className='close-line1'></div>
                        <div className='close-line2'></div>
                    </div>
                </button>
            </div>
            <div>
                {result && (
                    <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                    </p>
                    )}
            </div>
            <Form onSubmit={submitForm} className='form-content'>
                <Form.Group className="form-group" controlId="name">
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setName(e.target.value)} 
                        type="text"
                        placeholder="Name"
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <Form.Group className="form-group" controlId="email">
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setEmail(e.target.value)} 
                        type="text"
                        placeholder="email@example.com"
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <Form.Group className='form-group'>
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setSubject(e.target.value)} 
                        type="text"
                        placeholder="Subject"
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <Form.Group className='form-group'
                    controlId="message"
                    >
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setMessage(e.target.value)}  
                        as="textarea" 
                        placeholder="Message"
                        rows={3} 
                        required
                    />
                </Form.Group>
                <Form.Group 
                    className='form-group'
                    controlId="dropdown">
                    <Form.Label className='form-name'>How can we collaborate?</Form.Label>
                    <Form.Control as="select" value={option} onChange={(e) => setOption(e.target.value)} >
                        <option className='form-option' value="Interested in website and content creation">Interested in website and content creation</option>
                        <option className='form-option' value="Interested in website">Interested in website</option>
                        <option className='form-option' value="Unsure, need more information">Unsure, need more information</option>
                    </Form.Control>
                </Form.Group>
                <div className='line-div'></div>
                <div style={{}}>
                <button 
                    className='form-button'
                    type="submit" 
                    variant="primary"
                >
                {status}
                </button>
                </div>
            </Form>
            </div>
        </div>
        <div className='contact-button-container'>
            <a className='text-animation font-classic' style={{animationDelay: '2s'}} onClick={handleClick}><SplitText2 text='Contact'/></a>
        </div>  
    </div>
    )
}

export default Contact;