import React, { useState, useEffect } from 'react';

const Newsletter = () => {
    const [newsletter, setNewsletter] = useState('');

    const htmlContent = 
    <div>
        <h2>Our Latest Newsletter is Here!</h2>
        <p>Dear subscribers,</p>
        <p>We are excited you are here!</p>
        <p>Love,</p>
        <p>Revivir Studio</p>
    </div>
    return (
    <div>
        <h2>Newsletter</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
   )
}

export default Newsletter;