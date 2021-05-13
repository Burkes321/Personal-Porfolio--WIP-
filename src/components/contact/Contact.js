import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => { 
        e.preventDefault();

        emailjs.sendForm('XFGHYT443', 'template_qyafjnt', e.target, 'user_0zkY31B8Cd5phIOfpR1Jj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact-container' id='contact-container'>
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" name="subject"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message"/> 
                </div>
                <button action='submit'>Send!</button>
            </form>
        </div>
    )
}

export default Contact
