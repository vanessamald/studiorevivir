import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Navigation from '../Navigation';
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
        <div className='contact-container flex space-between'>
            
                <div className='split-text-container split-text-container-alternate flex justify-center work-title'>
                    <SplitText text='Inquire' fontColor='theme-text-color'/>
                </div>
            
                
            {/*}
            <div>
                {result && (
                    <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                    </p>
                    )}
            </div>
                */}
            <Form onSubmit={submitForm} className='form-content'>
                {/*}
                <div className='close-btn-container flex flex-end'>
                    <button className='close-btn' onClick={handleClose}>
                        <div className='close-container'>
                            <div className='close-line1'></div>
                            <div className='close-line2'></div>
                        </div>
                    </button>
                </div>
                */}
                <h2 className='font-classic uppercase'>Contact Info</h2>
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
                {/*}
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
                */}
                
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
                    className='form-group dropdown font-classic uppercase flex-column'
                    controlId="dropdown">
                    <Form.Label className='form-name'>How can we collaborate?</Form.Label>
                    <Form.Control as="select" value={option} onChange={(e) => setOption(e.target.value)} >
                        <option className='form-option' value="Website and content creation">Website and content creation</option>
                        <option className='form-option' value="Website">Website</option>
                        <option className='form-option' value="Unsure">Unsure</option>
                    </Form.Control>
                </Form.Group>
               
                <h2 className='font-classic uppercase'>Business Info</h2>
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

    )
}

export default Contact;