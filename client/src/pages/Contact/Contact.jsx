import React from 'react'
import "./Contact.scss"

export const Contact = () => {

    return (
        <div className='contact'>
            <h1>Contact Us</h1>
            <p>feel free to contact us and we will get back to you as soon as we can</p>
            <form>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email address" />
                <textarea placeholder="tell us all about it" />
                <input type="submit" value="send" onClick = {(e) => 
                    {e.preventDefault();
                    alert("Thank you for your message. We will get back to you as soon as we can.")}}/>
            </form>

        </div>
    )
}
