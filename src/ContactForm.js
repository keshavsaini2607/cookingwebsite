import React from 'react'
import './ContactForm.css'
function ContactForm() {
    return (
        <div className="contactForm">
            <form>
                <div className="first__row">
                    <span>
                        <label>FirstName</label>
                        <input type="text" />
                    </span>
                    <span>
                        <label>LastName</label>
                        <input type="text" />
                    </span>
                </div>

                <div className="second__row">
                    <span>
                        <label>E-mail</label>
                        <input type="email" />
                    </span>
                    <span>
                        <label>Phone</label>
                        <input type="phone" />
                    </span>
                </div>

                <div className="message">
                    <label>Message</label>
                    <textarea name="message" rows="10" cols="30">
                        
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
