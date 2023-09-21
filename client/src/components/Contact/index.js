import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Form from 'react-bootstrap/Form';
import Navigation from '../Navigation';
import SplitText from '../SplitText';
import SplitText2 from '../SplitText2';

function Contact() {
    // scroll animation 
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    // contact form status
    const [ status, setStatus ] = useState('Submit');

    // set state for contact form 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //const [subject, setSubject] = useState('');
    const [option, setOption] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [budgetRange, setBudgetRange] = useState('');

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
        //subject: subject,
        message: message,
        option: option,
        businessName: businessName,
        deadline: deadline,
        budgetRange: budgetRange
    } 

    // if field is blank set alert
    if ( emailMessage === '') {
        setResult({
            message: 'Please fill out all fields'
        })
    } else {
        let response = await fetch("/inquire", {
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
        <Navigation/>
        <div className='contact-container flex space-between' ref={ref}>
            <div className='split-text-container split-text-container-alternate flex justify-center work-title'>
                <SplitText text='Inquire' fontColor='theme-text-color'/>
            </div>
            <div className={`contact-form-container ${inView ? 'text-animation' : '' }`}>
                <div>
                {result && (
                    <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                    </p>
                    )}
                </div>
            <Form onSubmit={submitForm} className='form-content'>
                
                <h4 className='font-classic small-font contact-title'>Contact Info</h4>
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
                <Form.Group className='form-group'
                    controlId="message"
                    >
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setMessage(e.target.value)}  
                        as="textarea" 
                        placeholder="Please provide a brief description of the project, purpose, and goals, along with any questions."
                        rows={3} 
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <Form.Group 
                    className='form-group dropdown flex-column'
                    controlId="dropdown">
                    <h4 className='font-classic small-font dropdown-title'>How can we collaborate?</h4>
                    <Form.Control as="select" value={option} onChange={(e) => setOption(e.target.value)} >
                        <option className='form-option' value="Website and content creation">Website and content creation</option>
                        <option className='form-option' value="Website">Website</option>
                        <option className='form-option' value="Unsure">Unsure</option>
                    </Form.Control>
                </Form.Group>
               
                <h4 className='font-classic small-font contact-title'>Business Info</h4>
                <Form.Group className='form-group'>
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setBusinessName(e.target.value)} 
                        type="text"
                        placeholder="Business Name"
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <Form.Group className='form-group'>
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setBudgetRange(e.target.value)} 
                        type="text"
                        placeholder="Budget Range"
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <Form.Group className='form-group'>
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setDeadline(e.target.value)} 
                        type="text"
                        placeholder="Expected Deadline"
                        required
                    />
                </Form.Group>
                <div className='line-div'></div>
                <div className='form-button-container'>
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
    </div> 
    )
}

export default Contact;